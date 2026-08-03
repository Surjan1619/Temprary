import { useTranslation } from 'react-i18next';

export default function Advantages({ advantagesRef }) {
  const { t } = useTranslation();
  const items = t('advantages_list', { returnObjects: true });
  const certs = t('certifications', { returnObjects: true });

  return (
    <section ref={advantagesRef} className="border-b border-white/[0.06] bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-32">
        <div className="mb-16 scroll-reveal">
          <span className="font-mono text-xs tracking-[0.25em] text-white/30">{t('advantages_num')}</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{t('advantages_title')} <span className="text-white/30">{t('advantages_title_highlight')}</span></h2>
        </div>
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          {items.map((adv, idx) => (
            <div key={idx} className="scroll-reveal border-t border-white/[0.08] pt-6">
              <h3 className="mt-3 text-2xl font-bold">{adv.title}</h3>
              <p className="mt-3 leading-relaxed text-white/40 max-w-md">{adv.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-wrap gap-3 scroll-reveal">
          {certs.map((c) => (
            <span key={c} className="rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 text-xs font-mono tracking-wider text-white/30">{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
