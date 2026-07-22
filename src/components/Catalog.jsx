import { useTranslation } from 'react-i18next';
import { useProducts } from '../data/useProducts.js';
import ProductCard from './ProductCard.jsx';

export default function Catalog({ catalogRef, onProductClick }) {
  const { t } = useTranslation();
  const products = useProducts();

  return (
    <section id="catalog" ref={catalogRef} className="border-b border-white/[0.06] bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-32">
        <div className="mb-16 scroll-reveal">
          <span className="font-mono text-xs tracking-[0.25em] text-white/30">{t('catalog_num')}</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{t('catalog_title')}</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/35">{t('catalog_desc')}</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onProductClick={onProductClick} />
          ))}
        </div>
      </div>
    </section>
  );
}
