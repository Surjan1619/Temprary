import { useTranslation } from 'react-i18next';
import ProductIcon from './ProductIcon.jsx';

export default function RelatedProducts({ products, currentId, onProductClick }) {
  const { t } = useTranslation();
  const related = products.filter((p) => p.id !== currentId);

  return (
    <section className="border-b border-white/[0.06] bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="mb-10">
          <span className="font-mono text-xs tracking-[0.2em] text-white/30">{t('product_related')}</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{t('product_related_title')}</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => {
            return (
              <button
                key={p.id}
                onClick={() => onProductClick(p.id)}
                className="card-hover group text-left overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.img} alt={p.title} className="img-zoom h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <span className="text-white/40 shrink-0"><ProductIcon name={p.icon} /></span>
                    <h3 className="text-base font-bold">{p.title}</h3>
                  </div>
                  <p className="mt-2 text-xs text-white/40">{p.features.slice(0, 2).join(' · ')}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
