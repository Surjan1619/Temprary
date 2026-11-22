import { pool } from './db.js';

export const LANGS = ['am', 'ru', 'en'];
export const DEFAULT_LANG = 'am';

const SLUG_RE = /^[a-z0-9][a-z0-9-]{0,62}$/;
const KEY_RE = /^[A-Za-z][A-Za-z0-9_]{0,40}$/;
// Картинки: только свои файлы (/images, /uploads) или https-ссылки.
const IMG_RE = /^(\/(images|uploads)\/[\w.-]+|https:\/\/[^\s"'<>]+)$/;

export class ValidationError extends Error {
  constructor(details) {
    super('Ошибка проверки данных');
    this.details = details;
  }
}

const str = (v) => (typeof v === 'string' ? v.trim() : '');

function pairList(value, a, b, field, errors) {
  if (value == null) return [];
  if (!Array.isArray(value)) {
    errors.push(`${field}: ожидается список`);
    return [];
  }
  return value
    .map((item) => ({ [a]: str(item?.[a]), [b]: str(item?.[b]) }))
    .filter((item) => item[a] || item[b]);
}

/** Проверяет и нормализует товар из запроса. Бросает ValidationError. */
export function validateProduct(input) {
  const errors = [];
  const p = input && typeof input === 'object' ? input : {};

  const id = str(p.id).toLowerCase();
  if (!SLUG_RE.test(id)) errors.push('id: только латиница в нижнем регистре, цифры и дефис (до 63 символов)');

  const icon = str(p.icon);
  if (!KEY_RE.test(icon)) errors.push('icon: выберите иконку');

  const brand = str(p.brand) || null;
  if (brand && !KEY_RE.test(brand)) errors.push('brand: недопустимое значение');

  const img = str(p.img);
  if (!IMG_RE.test(img)) errors.push('img: загрузите основное изображение');

  const gallery = Array.isArray(p.gallery) ? p.gallery.map(str).filter(Boolean) : [];
  if (gallery.some((g) => !IMG_RE.test(g))) errors.push('gallery: недопустимый путь к изображению');
  if (gallery.length > 30) errors.push('gallery: не больше 30 изображений');

  const sortOrder = Number.isInteger(Number(p.sortOrder)) ? Number(p.sortOrder) : 0;

  const translations = {};
  const tIn = p.translations && typeof p.translations === 'object' ? p.translations : {};
  for (const lang of LANGS) {
    const t = tIn[lang];
    const title = str(t?.title);
    if (!title) {
      if (lang === DEFAULT_LANG) errors.push(`${lang}.title: название на армянском обязательно`);
      continue; // язык без названия не сохраняем — на сайте подставится армянский
    }
    if (title.length > 200) errors.push(`${lang}.title: слишком длинное название`);
    const descriptionHtml = typeof t.descriptionHtml === 'string' ? t.descriptionHtml.trim() : '';
    if (descriptionHtml.length > 100_000) errors.push(`${lang}.descriptionHtml: слишком длинное описание`);
    translations[lang] = {
      title,
      subtitle: str(t.subtitle),
      descriptionHtml,
      features: Array.isArray(t.features) ? t.features.map(str).filter(Boolean) : [],
      series: pairList(t.series, 'name', 'desc', `${lang}.series`, errors),
      specs: pairList(t.specs, 'label', 'value', `${lang}.specs`, errors),
      benefits: pairList(t.benefits, 'title', 'desc', `${lang}.benefits`, errors),
    };
  }

  if (errors.length) throw new ValidationError(errors);
  return { id, icon, brand, img, gallery, sortOrder, translations };
}

async function upsertTranslations(client, product) {
  await client.query('DELETE FROM product_translations WHERE product_id = $1', [product.id]);
  for (const [lang, t] of Object.entries(product.translations)) {
    await client.query(
      `INSERT INTO product_translations
         (product_id, lang, title, subtitle, description_html, features, series, specs, benefits)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [product.id, lang, t.title, t.subtitle, t.descriptionHtml,
        JSON.stringify(t.features), JSON.stringify(t.series), JSON.stringify(t.specs), JSON.stringify(t.benefits)],
    );
  }
}

export async function insertProduct(client, product) {
  await client.query(
    `INSERT INTO products (id, icon, brand, img, gallery, sort_order) VALUES ($1, $2, $3, $4, $5, $6)`,
    [product.id, product.icon, product.brand, product.img, JSON.stringify(product.gallery), product.sortOrder],
  );
  await upsertTranslations(client, product);
}

/** Возвращает false, если товара с таким id нет. */
export async function updateProduct(client, id, product) {
  const { rowCount } = await client.query(
    `UPDATE products SET icon = $2, brand = $3, img = $4, gallery = $5, sort_order = $6, updated_at = now()
     WHERE id = $1`,
    [id, product.icon, product.brand, product.img, JSON.stringify(product.gallery), product.sortOrder],
  );
  if (!rowCount) return false;
  await upsertTranslations(client, { ...product, id });
  return true;
}

function rowToProduct(row) {
  return {
    id: row.id,
    icon: row.icon,
    brand: row.brand,
    img: row.img,
    gallery: row.gallery,
    sortOrder: row.sort_order,
    updatedAt: row.updated_at,
    translations: {},
  };
}

/** Все товары со всеми переводами (для админки). */
export async function listProducts(db = pool, id = null) {
  const { rows } = await db.query(
    `SELECT p.*, t.lang, t.title, t.subtitle, t.description_html, t.features, t.series, t.specs, t.benefits
       FROM products p
       LEFT JOIN product_translations t ON t.product_id = p.id
      WHERE $1::text IS NULL OR p.id = $1
      ORDER BY p.sort_order, p.id`,
    [id],
  );
  const map = new Map();
  for (const row of rows) {
    if (!map.has(row.id)) map.set(row.id, rowToProduct(row));
    if (row.lang) {
      map.get(row.id).translations[row.lang] = {
        title: row.title,
        subtitle: row.subtitle,
        descriptionHtml: row.description_html,
        features: row.features,
        series: row.series,
        specs: row.specs,
        benefits: row.benefits,
      };
    }
  }
  return [...map.values()];
}

export async function getProduct(id, db = pool) {
  const [product] = await listProducts(db, id);
  return product || null;
}

/** Плоский вид для сайта: перевод на нужный язык, иначе армянский. */
export function localize(product, lang) {
  const t = product.translations[lang] || product.translations[DEFAULT_LANG] || Object.values(product.translations)[0];
  if (!t) return null;
  return {
    id: product.id,
    icon: product.icon,
    brand: product.brand,
    img: product.img,
    gallery: product.gallery,
    ...t,
  };
}

/** Все пути к картинкам, на которые ссылается хотя бы один товар. */
export async function referencedImages(db = pool) {
  const { rows } = await db.query(
    `SELECT img AS path FROM products
     UNION SELECT jsonb_array_elements_text(gallery) FROM products`,
  );
  return new Set(rows.map((r) => r.path));
}
