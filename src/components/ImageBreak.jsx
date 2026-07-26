import { useTranslation } from 'react-i18next';

export default function ImageBreak() {
  const { t } = useTranslation();

  return (
    <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden border-b border-white/[0.06]">
      <img src="/images/background.jpeg" alt="" loading="lazy" className="h-full w-full object-cover animate-ken-burns" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-black/70" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full backdrop-blur-md bg-black/30 py-8 sm:py-10">
          <div className="text-center px-4 sm:px-6 max-w-2xl mx-auto">
            <span className="font-mono text-xs tracking-[0.25em] text-white/50">{t('imagebreak_label')}</span>
            <blockquote className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-light italic leading-snug text-white/95">
              &ldquo;{t('imagebreak_quote')}&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
