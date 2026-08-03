import { useTranslation } from 'react-i18next';
import { iconMap } from '../data/icons.jsx';
import brandLogos from '../data/brandLogos.js';

export default function ProductCard({ product, onProductClick }) {
  const { t } = useTranslation();
  const Icon = iconMap[product.icon];
  return (
    <article key={product.id} onClick={() => onProductClick(product.id)} className="card-hover group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm cursor-pointer">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={product.img} alt={product.title} className="img-zoom h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
      </div>

      <div className="relative p-6 sm:p-8">
        <div className="flex items-start gap-4">
          {product.brand && brandLogos[product.brand] && (
            <div className="shrink-0 bg-black/40 backdrop-blur-sm rounded-lg px-2.5 py-1.5">
              <img
                src={brandLogos[product.brand]}
                alt={product.brand}
                className="h-7 w-auto"
              />
            </div>
          )}
          <div className="mt-0.5 text-white/60 shrink-0"><Icon /></div>
          <div className="min-w-0">
            <h3 className="text-xl font-bold leading-snug sm:text-2xl">{product.title}</h3>
            <p className="mt-1 text-xs font-mono tracking-wider text-white/30 uppercase">{product.subtitle}</p>
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-white/40">{product.features.slice(0, 2).join(' · ')}…</p>
        <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
          {product.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-white/35">
              <span className="block h-[1px] w-3 bg-white/20 shrink-0" />{f}
            </li>
          ))}
        </ul>
        <span className="magnetic-btn group/btn mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors duration-300">
          {t('product_learn')}<span className="inline-block transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:opacity-100 opacity-60">&rarr;</span>
        </span>
      </div>
    </article>
  );
}
