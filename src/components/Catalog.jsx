import { useTranslation } from 'react-i18next';
import { useProducts } from '../data/useProducts.js';
import ProductCard from './ProductCard.jsx';

function CardPlaceholder() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] animate-pulse">
      <div className="aspect-[16/10] bg-white/[0.04]" />
      <div className="p-6 sm:p-8 space-y-3">
        <div className="h-6 w-2/3 rounded bg-white/[0.06]" />
        <div className="h-3 w-1/3 rounded bg-white/[0.04]" />
        <div className="h-3 w-full rounded bg-white/[0.04]" />
      </div>
    </div>
  );
}

export default function Catalog({ catalogRef, onProductClick }) {
  const { t } = useTranslation();
  const { products, error, retry } = useProducts();

  let content;
  if (error && !products) {
    content = (
      <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-10 text-center">
        <p className="text-white/60">{t('products_error')}</p>
        <button onClick={retry} className="mt-6 rounded-full border border-white/20 px-6 py-2 text-sm font-semibold text-white hover:border-white/60 transition-colors">
          {t('retry')}
        </button>
      </div>
    );
  } else if (!products) {
    content = (
      <div className="grid gap-6 lg:grid-cols-2">
        {[0, 1, 2, 3].map((i) => <CardPlaceholder key={i} />)}
      </div>
    );
  } else if (products.length === 0) {
    content = <p className="text-white/40">{t('products_empty')}</p>;
  } else {
    content = (
      <div className="grid gap-6 lg:grid-cols-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onProductClick={onProductClick} />
        ))}
      </div>
    );
  }

  return (
    <section id="catalog" ref={catalogRef} className="border-b border-white/[0.06] bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-32">
        <div className="mb-16 scroll-reveal">
          <span className="font-mono text-xs tracking-[0.25em] text-white/30">{t('catalog_num')}</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{t('catalog_title')}</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/35">{t('catalog_desc')}</p>
        </div>
        {content}
      </div>
    </section>
  );
}
