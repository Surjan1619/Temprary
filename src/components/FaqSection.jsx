import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { socialLinks } from '../data/siteData.js';

export default function FaqSection({ faqRef }) {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState(null);
  const faqs = t('faqs', { returnObjects: true });

  return (
    <section id="faq" ref={faqRef} className="relative overflow-hidden border-b border-white/[0.06] bg-[#0a0a0a]">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1920&q=85" alt="" loading="lazy" className="h-full w-full object-cover opacity-30" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="bg-[#0a0a0a]/60 backdrop-blur-sm rounded-2xl border border-white/[0.06] p-8 lg:p-12">
          <div className="mb-12 scroll-reveal text-center">
            <span className="font-mono text-sm tracking-[0.25em] text-white/80">{t('faq_num')}</span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-white">{t('faq_title')}</h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/70">{t('faq_desc')}</p>
          </div>
          <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="scroll-reveal rounded-xl border border-white/[0.06] bg-white/[0.04] overflow-hidden transition-all duration-300">
                <button onClick={() => setOpenFaq(isOpen ? null : idx)} className="flex w-full items-center justify-between px-6 py-5 text-left text-base font-medium text-white/80 hover:text-white transition-colors duration-200">
                  <span>{faq.q}</span>
                  <span className={`shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white/60">
                      <line x1="8" y1="2" x2="8" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pb-5 text-base leading-relaxed text-white/70 border-t border-white/[0.06] pt-4">{faq.a}</div>
                </div>
              </div>
            );
          })}
        </div>

          <div className="mt-16 scroll-reveal text-center border-t border-white/[0.06] pt-12">
            <span className="font-mono text-sm tracking-[0.25em] text-white/80">{t('contact_num')}</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-white">{t('contact_title')}</h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/70">{t('contact_desc')}</p>
            <a href="#" className="magnetic-btn group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#0a0a0a] hover:bg-white/90 transition-all duration-300">
              {t('contact_cta')}<span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/[0.06] pt-12">
            <div className="sm:col-span-2 lg:col-span-1 scroll-reveal">
              <a href="#" className="flex items-center gap-2 group">
                <span className="text-xl font-bold tracking-tight text-white">{t('brandBold')}</span>
                <span className="text-xl font-light tracking-tight text-white/60 group-hover:text-white/80 transition-colors">{t('brandLight')}</span>
              </a>
              <p className="mt-4 text-sm leading-relaxed text-white/60 max-w-xs">{t('hero_label')} {t('hero_desc')}</p>
            </div>
            <div className="scroll-reveal">
              <h4 className="text-sm font-mono tracking-[0.2em] text-white/80 uppercase">{t('footer_quicklinks')}</h4>
              <ul className="mt-4 space-y-3">
                {[{name: t('nav_home'), href:'#top'}, {name: t('nav_catalog'), href:'#catalog'}, {name: t('nav_services'), href:'#services'}].map((link) => (
                  <li key={link.name}><a href={link.href} className="text-base text-white/70 hover:text-white transition-colors duration-300">{link.name}</a></li>
                ))}
              </ul>
            </div>
            <div className="scroll-reveal">
              <h4 className="text-sm font-mono tracking-[0.2em] text-white/80 uppercase">{t('footer_contact_title')}</h4>
              <ul className="mt-4 space-y-3 text-base text-white/70">
                <li><a href="tel:+37433505022" className="text-white/90 hover:text-white transition-colors duration-300 text-lg font-medium">+374 33 50 50 22</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">{t('cta_request')}</a></li>
                <li className="text-white/70">{t('footer_address')}</li>
                <li className="text-white/70">{t('footer_hours')}</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-white/[0.06] pt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-mono tracking-wider text-white/50">
              <a href="tel:+37433505022" className="text-white/80 hover:text-white transition-colors duration-300">+374 33 50 50 22</a>
              {socialLinks.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors duration-300">
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
