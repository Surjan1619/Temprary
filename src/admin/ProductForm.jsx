import { useEffect, useRef, useState } from 'react';
import brandLogos from '../data/brandLogos.js';
import { iconMap } from '../data/iconMap.js';
import ProductIcon from '../components/ProductIcon.jsx';
import { sanitizeHtml } from '../utils/sanitizeHtml.js';
import { api } from './api.js';
import { LANGS, emptyForm, fromForm, slugify, toForm } from './formModel.js';
import { Button, ErrorBox, Field, inputCls } from './ui.jsx';

function UploadButton({ label, multiple = false, onUploaded, onError }) {
  const inputRef = useRef(null);
  const [busy, setBusy] = useState(false);

  const handleChange = async (e) => {
    const files = [...e.target.files];
    e.target.value = '';
    if (!files.length) return;
    setBusy(true);
    try {
      const urls = [];
      for (const file of files) urls.push((await api.upload(file)).url);
      onUploaded(urls);
    } catch (err) {
      onError(err);
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <input ref={inputRef} type="file" accept="image/jpeg,image/png,image/webp,image/avif,image/gif" multiple={multiple} hidden onChange={handleChange} />
      <Button onClick={() => inputRef.current.click()} disabled={busy}>
        {busy ? 'Загрузка…' : label}
      </Button>
    </>
  );
}

function TranslationFields({ value, onChange, required }) {
  const set = (key) => (e) => onChange({ ...value, [key]: e.target.value });
  return (
    <div className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label={`Название${required ? ' *' : ''}`}>
          <input className={inputCls} value={value.title} onChange={set('title')} maxLength={200} />
        </Field>
        <Field label="Подзаголовок" hint="Например: Prestige · Trend">
          <input className={inputCls} value={value.subtitle} onChange={set('subtitle')} />
        </Field>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        <Field label="Описание (HTML)" hint="Блоки <div><h3>Заголовок</h3><p>Текст с <strong>выделением</strong></p></div>. Скрипты и стили вырезаются.">
          <textarea className={`${inputCls} font-mono min-h-64`} value={value.descriptionHtml} onChange={set('descriptionHtml')} />
        </Field>
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-white/50">Предпросмотр</span>
          <div
            className="product-desc mt-1.5 max-h-96 overflow-auto rounded-lg border border-white/10 bg-[#0a0a0a] p-4 text-sm"
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(value.descriptionHtml) || '<p>—</p>' }}
          />
        </div>
      </div>
      <Field label="Особенности" hint="По одной на строку. Показываются тегами на карточке и странице товара.">
        <textarea className={`${inputCls} min-h-28`} value={value.features} onChange={set('features')} />
      </Field>
      <div className="grid gap-5 lg:grid-cols-3">
        <Field label="Серии" hint="Строка: Название | Описание">
          <textarea className={`${inputCls} min-h-32`} value={value.series} onChange={set('series')} />
        </Field>
        <Field label="Характеристики" hint="Строка: Параметр | Значение">
          <textarea className={`${inputCls} min-h-32`} value={value.specs} onChange={set('specs')} />
        </Field>
        <Field label="Преимущества" hint="Строка: Заголовок | Описание">
          <textarea className={`${inputCls} min-h-32`} value={value.benefits} onChange={set('benefits')} />
        </Field>
      </div>
    </div>
  );
}

export default function ProductForm({ product, nextSortOrder, onSaved, onCancel }) {
  const isNew = !product;
  const [form, setForm] = useState(() => (product ? toForm(product) : emptyForm(nextSortOrder)));
  const [lang, setLang] = useState('am');
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    if (!dirty) return;
    const warn = (e) => e.preventDefault();
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [dirty]);

  const update = (patch) => {
    setForm((f) => ({ ...f, ...patch }));
    setDirty(true);
  };
  const updateTranslation = (code, value) => update({ translations: { ...form.translations, [code]: value } });

  const save = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      const body = fromForm(form);
      const saved = isNew ? await api.create(body) : await api.update(product.id, body);
      setDirty(false);
      onSaved(saved, isNew);
    } catch (err) {
      setError(err);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setSaving(false);
    }
  };

  const cancel = () => {
    if (dirty && !window.confirm('Есть несохранённые изменения. Выйти без сохранения?')) return;
    onCancel();
  };

  const moveGallery = (i, delta) => {
    const g = [...form.gallery];
    const j = i + delta;
    if (j < 0 || j >= g.length) return;
    [g[i], g[j]] = [g[j], g[i]];
    update({ gallery: g });
  };

  return (
    <form onSubmit={save} className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <button type="button" onClick={cancel} className="text-sm text-white/40 hover:text-white">← К списку</button>
          <h1 className="mt-2 text-2xl font-bold">{isNew ? 'Новый товар' : `Редактирование: ${product.translations.am?.title || product.id}`}</h1>
        </div>
        <div className="flex gap-2">
          <Button onClick={cancel}>Отмена</Button>
          <Button type="submit" variant="primary" disabled={saving}>{saving ? 'Сохранение…' : 'Сохранить'}</Button>
        </div>
      </div>

      <ErrorBox error={error} />

      <section className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 space-y-5">
        <h2 className="font-semibold">Общие данные</h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <Field label="ID (адрес) *" hint={isNew ? 'Латиница, цифры, дефис. Потом не меняется.' : 'ID нельзя изменить'}>
            <div className="flex gap-2">
              <input
                className={`${inputCls} font-mono`}
                value={form.id}
                onChange={(e) => update({ id: e.target.value.toLowerCase() })}
                disabled={!isNew}
                pattern="[a-z0-9][a-z0-9\-]{0,62}"
                required
              />
              {isNew && (
                <Button
                  className="shrink-0 px-3"
                  title="Сгенерировать из английского названия"
                  onClick={() => update({ id: slugify(form.translations.en.title || form.translations.ru.title) })}
                >
                  ⟳
                </Button>
              )}
            </div>
          </Field>
          <Field label="Иконка *">
            <div className="flex items-center gap-3">
              <span className="text-white/60 [&_svg]:h-8 [&_svg]:w-8"><ProductIcon name={form.icon} /></span>
              <select className={inputCls} value={form.icon} onChange={(e) => update({ icon: e.target.value })}>
                {Object.keys(iconMap).map((k) => <option key={k} value={k} className="bg-[#111]">{k}</option>)}
              </select>
            </div>
          </Field>
          <Field label="Бренд">
            <select className={inputCls} value={form.brand} onChange={(e) => update({ brand: e.target.value })}>
              <option value="" className="bg-[#111]">— без бренда —</option>
              {Object.keys(brandLogos).map((b) => <option key={b} value={b} className="bg-[#111]">{b}</option>)}
            </select>
          </Field>
          <Field label="Сортировка" hint="Меньше — выше в каталоге">
            <input type="number" step="1" className={inputCls} value={form.sortOrder} onChange={(e) => update({ sortOrder: e.target.value })} />
          </Field>
        </div>
      </section>

      <section className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 space-y-5">
        <h2 className="font-semibold">Изображения</h2>
        <div className="flex flex-wrap items-start gap-6">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white/50">Основное *</span>
            <div className="h-36 w-56 overflow-hidden rounded-lg border border-white/10 bg-white/[0.03]">
              {form.img ? <img src={form.img} alt="" className="h-full w-full object-cover" /> : <div className="flex h-full items-center justify-center text-xs text-white/30">нет изображения</div>}
            </div>
            <UploadButton label="Загрузить" onUploaded={([url]) => update({ img: url })} onError={setError} />
            <input className={`${inputCls} font-mono text-xs`} value={form.img} onChange={(e) => update({ img: e.target.value })} placeholder="/uploads/… или /images/…" />
          </div>
          <div className="flex-1 min-w-64 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white/50">Галерея ({form.gallery.length})</span>
            <div className="flex flex-wrap gap-3">
              {form.gallery.map((src, i) => (
                <div key={`${src}-${i}`} className="group relative h-24 w-36 overflow-hidden rounded-lg border border-white/10">
                  <img src={src} alt="" className="h-full w-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 flex justify-between bg-black/70 px-1 py-0.5 text-xs">
                    <button type="button" onClick={() => moveGallery(i, -1)} aria-label="Сдвинуть влево" className="px-1.5 hover:text-white text-white/60">←</button>
                    <button type="button" onClick={() => update({ gallery: form.gallery.filter((_, j) => j !== i) })} aria-label="Убрать из галереи" className="px-1.5 text-red-300 hover:text-red-200">✕</button>
                    <button type="button" onClick={() => moveGallery(i, 1)} aria-label="Сдвинуть вправо" className="px-1.5 hover:text-white text-white/60">→</button>
                  </div>
                </div>
              ))}
            </div>
            <UploadButton label="Добавить фото" multiple onUploaded={(urls) => update({ gallery: [...form.gallery, ...urls] })} onError={setError} />
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-semibold">Тексты</h2>
          <div role="tablist" className="flex gap-1 rounded-full border border-white/10 p-1">
            {LANGS.map((l) => {
              const filled = Boolean(form.translations[l.code].title.trim());
              return (
                <button
                  key={l.code}
                  type="button"
                  role="tab"
                  aria-selected={lang === l.code}
                  onClick={() => setLang(l.code)}
                  className={`rounded-full px-4 py-1.5 text-sm transition-colors ${lang === l.code ? 'bg-white text-[#0a0a0a] font-semibold' : 'text-white/60 hover:text-white'}`}
                >
                  {l.label} {filled ? '✓' : l.required ? '*' : '○'}
                </button>
              );
            })}
          </div>
        </div>
        <p className="text-xs text-white/35">
          Армянский обязателен. Если у языка пустое название, на сайте для него покажется армянская версия.
        </p>
        <TranslationFields
          key={lang}
          value={form.translations[lang]}
          onChange={(v) => updateTranslation(lang, v)}
          required={LANGS.find((l) => l.code === lang).required}
        />
      </section>

      <div className="flex justify-end gap-2">
        <Button onClick={cancel}>Отмена</Button>
        <Button type="submit" variant="primary" disabled={saving}>{saving ? 'Сохранение…' : 'Сохранить'}</Button>
      </div>
    </form>
  );
}
