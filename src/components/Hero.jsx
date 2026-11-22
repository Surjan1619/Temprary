import { useTranslation } from 'react-i18next';
import { requestLinkProps } from '../data/siteData.js';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden border-b border-white/[0.06]">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1600607688968-a2ad6e6791ca?w=1920&q=85" alt="" className="h-full w-full object-cover animate-ken-burns" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-24 lg:px-10 lg:pt-40 lg:pb-32 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-xs font-mono tracking-[0.2em] text-white/40 uppercase animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            <span className="w-8 h-[1px] bg-white/30" />{t('hero_label')}
          </div>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tighter sm:text-7xl lg:text-8xl animate-fade-in-up" style={{ animationDelay: '0.25s', animationFillMode: 'both' }}>
            {t('hero_title_1')}<br /><span className="text-white/30">{t('hero_title_2')}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/40 sm:text-lg animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            {t('hero_desc')}
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.55s', animationFillMode: 'both' }}>
            <a href="#catalog" className="magnetic-btn group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#0a0a0a] hover:bg-white/90 transition-all duration-300">
              {t('hero_cta_catalog')}<span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </a>
            <a {...requestLinkProps(t('request_message_measure'))} className="magnetic-btn group inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white hover:border-white/50 transition-all duration-300">
              {t('hero_cta_measure')}<span className="inline-block text-white/40 text-lg leading-none transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
