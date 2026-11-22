import brandLogos from '../data/brandLogos.js';
import { Button } from './ui.jsx';

export default function ProductList({ products, onCreate, onEdit, onDelete, deletingId }) {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Товары</h1>
          <p className="mt-1 text-sm text-white/40">Всего: {products.length}. Порядок на сайте — по полю «Сортировка».</p>
        </div>
        <Button variant="primary" onClick={onCreate}>+ Добавить товар</Button>
      </div>

      {products.length === 0 ? (
        <p className="mt-10 rounded-2xl border border-dashed border-white/10 p-10 text-center text-white/40">
          Товаров пока нет. Нажмите «Добавить товар».
        </p>
      ) : (
        <ul className="mt-8 divide-y divide-white/[0.06] rounded-2xl border border-white/[0.08] bg-white/[0.02]">
          {products.map((p) => {
            const title = p.translations.am?.title || p.translations.ru?.title || p.id;
            const langs = ['am', 'ru', 'en'].filter((l) => p.translations[l]);
            return (
              <li key={p.id} className="flex flex-wrap items-center gap-4 p-4">
                <img src={p.img} alt="" className="h-16 w-24 shrink-0 rounded-lg object-cover bg-white/5" />
                <div className="min-w-0 flex-1">
                  <p className="font-semibold">{title}</p>
                  <p className="mt-0.5 text-xs font-mono text-white/40">
                    {p.id} · сортировка {p.sortOrder} · языки: {langs.join(', ').toUpperCase()}
                    {p.gallery.length > 0 && ` · фото в галерее: ${p.gallery.length}`}
                  </p>
                </div>
                {p.brand && brandLogos[p.brand] && (
                  <img src={brandLogos[p.brand]} alt={p.brand} className="h-6 w-auto opacity-70" />
                )}
                <div className="flex gap-2">
                  <Button onClick={() => onEdit(p)}>Изменить</Button>
                  <Button variant="danger" onClick={() => onDelete(p, title)} disabled={deletingId === p.id}>
                    {deletingId === p.id ? 'Удаление…' : 'Удалить'}
                  </Button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
