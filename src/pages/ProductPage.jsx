import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer.jsx';
import RelatedProducts from '../components/RelatedProducts.jsx';

export default function ProductPage({ product, onBack, onProductClick, products }) {
  const { t } = useTranslation();
  const pageRef = useRef(null);
  const [imgIdx, setImgIdx] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const allImages = [product.img, ...(product.gallery || [])];
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const prevImg = () => setImgIdx((c) => (c === 0 ? allImages.length - 1 : c - 1));
  const nextImg = () => setImgIdx((c) => (c === allImages.length - 1 ? 0 : c + 1));

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (allImages.length <= 1) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      dx > 0 ? prevImg() : nextImg();
    }
  };

  useEffect(() => {
    if (pageRef.current) window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product.id]);

  return (
    <div ref={pageRef} className="min-h-screen bg-[#0a0a0a] text-white font-sans antialiased selection:bg-white/20 selection:text-white">

      <header className="fixed top-0 inset-x-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors duration-300 group"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:-translate-x-1">
              <path d="M10 2 L4 8 L10 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {t('back_to_catalog')}
          </button>
          <span className="hidden sm:block text-xs font-mono tracking-[0.2em] text-white/30">{t('brand')}</span>
        </div>
      </header>

      <section className="relative h-[45vh] sm:h-[55vh] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600607688968-a2ad6e6791ca?w=1920&q=85"
          alt=""
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-black/60" />
        <div className="relative mx-auto max-w-7xl px-6 pb-10 lg:px-10 w-full">
          <div className="flex items-center gap-3 text-xs font-mono tracking-[0.2em] text-white/30 uppercase">
            <span className="w-8 h-[1px] bg-white/30" />
            {product.number}
          </div>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl max-w-3xl">
            {product.title}
          </h1>
          <p className="mt-1 text-sm font-mono tracking-wider text-white/30 uppercase">{product.subtitle}</p>
        </div>
      </section>

      <section className="bg-[#0a0a0a] border-b border-white/[0.06]">
        <div
          className="relative flex items-center justify-center"
          style={{ minHeight: '70vh', touchAction: 'pan-y' }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {allImages.map((src, i) => (
            <div
              key={src}
              className="absolute inset-0 transition-opacity duration-500 ease-in-out"
              style={{ opacity: imgIdx === i ? 1 : 0, pointerEvents: imgIdx === i ? 'auto' : 'none' }}
            >
              <img
                src={src}
                alt=""
                className="absolute inset-0 h-full w-full object-cover blur-3xl opacity-30 scale-110"
              />
              <div className="relative h-full w-full flex items-center justify-center px-4 lg:px-8">
                <button onClick={() => setLightbox(src)} className="w-full h-full flex items-center justify-center">
                  <img
                    src={src}
                    alt={`${product.title} — ${i + 1}`}
                    className="max-h-[70vh] lg:max-h-[80vh] w-full object-cover cursor-pointer"
                    style={{
                      maskImage: 'radial-gradient(ellipse at center, black 55%, transparent 100%)',
                      WebkitMaskImage: 'radial-gradient(ellipse at center, black 55%, transparent 100%)',
                    }}
                  />
                </button>
              </div>
            </div>
          ))}
          {allImages.length > 1 && (
            <>
              <button onClick={prevImg} className="absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 z-20 text-white/30 hover:text-white transition-all duration-300 hover:-translate-x-1 text-3xl md:text-5xl font-light px-2 py-8">
                〈
              </button>
              <button onClick={nextImg} className="absolute right-2 lg:right-6 top-1/2 -translate-y-1/2 z-20 text-white/30 hover:text-white transition-all duration-300 hover:translate-x-1 text-3xl md:text-5xl font-light px-2 py-8">
                〉
              </button>
            </>
          )}
        </div>
        {allImages.length > 1 && (
          <div className="flex justify-center gap-2 pb-8 lg:pb-12">
            {allImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setImgIdx(i)}
                className={`h-1 rounded-full transition-all duration-300 ${i === imgIdx ? 'bg-white w-8' : 'bg-white/20 w-4 hover:bg-white/40'}`}
              />
            ))}
          </div>
        )}
      </section>

      <section className="border-b border-white/[0.06] bg-[#0a0a0a]">
        <div className="mx-auto max-w-4xl px-6 py-12 lg:px-10 lg:py-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl animate-fade-in-up" style={{ animationFillMode: 'both' }}>
            {product.title}
          </h2>
          <p className="mt-1 text-xs font-mono tracking-wider text-white/30 uppercase animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            {product.subtitle}
          </p>
          <div className="mt-8 text-base leading-relaxed text-white/50 sm:text-lg animate-fade-in-up" style={{ animationDelay: '0.15s', animationFillMode: 'both' }}>
            {product.deepDescription}
          </div>
          <div className="mt-8 flex flex-wrap gap-2 animate-fade-in-up" style={{ animationDelay: '0.25s', animationFillMode: 'both' }}>
            {product.features.map((f) => (
              <span key={f} className="flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs text-white/40">
                <span className="block h-[1px] w-3 bg-white/20 shrink-0" />
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      {product.series.length > 0 && (
        <section className="border-b border-white/[0.06] bg-[#0a0a0a]">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
            <div className="mb-10">
              <span className="font-mono text-xs tracking-[0.2em] text-white/30">{t('product_series')}</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{t('product_series_title')}</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {product.series.map((s, i) => (
                <div
                  key={s.name}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8 backdrop-blur-sm animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.15}s`, animationFillMode: 'both' }}
                >
                  <h3 className="text-xl font-bold">{s.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/40">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-b border-white/[0.06] bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="mb-10">
            <span className="font-mono text-xs tracking-[0.2em] text-white/30">{t('product_specs')}</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{t('product_specs_title')}</h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {product.specs.map((spec, i) => (
              <div
                key={i}
                className="flex items-start justify-between gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] px-6 py-4 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.05}s`, animationFillMode: 'both' }}
              >
                <span className="text-xs font-mono tracking-wider text-white/30 uppercase shrink-0 min-w-[40%]">
                  {spec.label}
                </span>
                <span className="text-sm text-white/70 text-right">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.06] bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="mb-10">
            <span className="font-mono text-xs tracking-[0.2em] text-white/30">{t('product_benefits')}</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{t('product_benefits_title')}</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {product.benefits.map((b, i) => (
              <div
                key={b.title}
                className="border-t border-white/[0.08] pt-6 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}
              >
                <h3 className="text-lg font-bold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/40">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedProducts products={products} currentId={product.id} onProductClick={onProductClick} />

      <section className="bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:py-32">
          <div className="animate-fade-in-up" style={{ animationFillMode: 'both' }}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t('product_order_title')} {product.title.toLowerCase()}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/40">
              {t('contact_desc')}
            </p>
            <a
              href="#"
              className="magnetic-btn group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#0a0a0a] hover:bg-white/90 transition-all duration-300"
            >
              Լրացնել հայտ
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      <Footer onBack={onBack} />

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center cursor-zoom-out"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white/50 hover:text-white text-3xl font-light transition-colors duration-300 z-10"
          >
            &#10005;
          </button>
          <img
            src={lightbox}
            alt=""
            className="max-h-screen max-w-full p-4 object-contain cursor-zoom-out"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
