import { useTranslation } from 'react-i18next';
import { iconMap } from '../data/icons.jsx';

const serviceKeys = [
  'sectional', 'roller', 'fire', 'panoramic',
  'fire_sectional', 'ventilation', 'highSpeed',
  'control', 'curtain', 'sideDoor',
];

export default function Services({ servicesRef }) {
  const { t } = useTranslation();

  return (
    <section id="services" ref={servicesRef} className="border-b border-white/[0.06] bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-32">
        <div className="mb-16 scroll-reveal">
          <span className="font-mono text-xs tracking-[0.25em] text-white/30">{t('services_num')}</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{t('services_title')}</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/35">{t('services_desc')}</p>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
          {serviceKeys.map((key) => {
            const Icon = iconMap[key] || iconMap.sectional;
            return (
              <div key={key} className="scroll-reveal group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 text-sm font-medium text-white/50 hover:bg-white/[0.05] hover:text-white/80 hover:border-white/[0.12] transition-all duration-300">
                <span className="text-white/30 group-hover:text-white/50 transition-colors duration-300 shrink-0"><Icon /></span>
                {t(`services_items.${key}`)}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
