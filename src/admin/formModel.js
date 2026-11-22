export const LANGS = [
  { code: 'am', label: 'Հայերեն', required: true },
  { code: 'ru', label: 'Русский' },
  { code: 'en', label: 'English' },
];

const joinPairs = (list, a, b) => (list || []).map((x) => `${x[a]} | ${x[b]}`).join('\n');

const lines = (text) => text.split('\n').map((l) => l.trim()).filter(Boolean);

const parsePairs = (text, a, b) =>
  lines(text).map((line) => {
    const i = line.indexOf('|');
    return i === -1 ? { [a]: line, [b]: '' } : { [a]: line.slice(0, i).trim(), [b]: line.slice(i + 1).trim() };
  });

const emptyTranslation = () => ({
  title: '', subtitle: '', descriptionHtml: '', features: '', series: '', specs: '', benefits: '',
});

export function emptyForm(nextSortOrder = 0) {
  return {
    id: '',
    icon: 'sectional',
    brand: '',
    img: '',
    gallery: [],
    sortOrder: nextSortOrder,
    translations: Object.fromEntries(LANGS.map((l) => [l.code, emptyTranslation()])),
  };
}

/** Товар из API → состояние формы (списки превращаются в текст «по строке на пункт»). */
export function toForm(product) {
  const form = emptyForm(product.sortOrder);
  Object.assign(form, {
    id: product.id,
    icon: product.icon,
    brand: product.brand || '',
    img: product.img,
    gallery: [...(product.gallery || [])],
  });
  for (const { code } of LANGS) {
    const t = product.translations[code];
    if (!t) continue;
    form.translations[code] = {
      title: t.title,
      subtitle: t.subtitle,
      descriptionHtml: t.descriptionHtml,
      features: (t.features || []).join('\n'),
      series: joinPairs(t.series, 'name', 'desc'),
      specs: joinPairs(t.specs, 'label', 'value'),
      benefits: joinPairs(t.benefits, 'title', 'desc'),
    };
  }
  return form;
}

/** Состояние формы → тело запроса к API. */
export function fromForm(form) {
  return {
    id: form.id.trim(),
    icon: form.icon,
    brand: form.brand || null,
    img: form.img.trim(),
    gallery: form.gallery,
    sortOrder: Number(form.sortOrder) || 0,
    translations: Object.fromEntries(
      Object.entries(form.translations).map(([code, t]) => [
        code,
        {
          title: t.title,
          subtitle: t.subtitle,
          descriptionHtml: t.descriptionHtml,
          features: lines(t.features),
          series: parsePairs(t.series, 'name', 'desc'),
          specs: parsePairs(t.specs, 'label', 'value'),
          benefits: parsePairs(t.benefits, 'title', 'desc'),
        },
      ]),
    ),
  };
}

/** Латинский slug из названия: «Sectional Doors» → «sectional-doors». */
export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 63);
}
