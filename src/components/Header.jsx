import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import { requestLinkProps } from '../data/siteData.js';

export default function Header() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const requestLink = requestLinkProps(t('request_message'));

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-lg font-bold tracking-tight text-white">{t('brandBold')}</span>
            <span className="text-lg font-light tracking-tight text-white/40 group-hover:text-white/60 transition-colors">{t('brandLight')}</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/50">
            <a href="#top" className="relative py-1 hover:text-white transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">{t('nav_home')}</a>
            <a href="#catalog" className="relative py-1 hover:text-white transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">{t('nav_catalog')}</a>
            <a href="#services" className="relative py-1 hover:text-white transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">{t('nav_services')}</a>
            <a href="#faq" className="relative py-1 hover:text-white transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">{t('nav_faq')}</a>
            <a href="#faq" className="relative py-1 hover:text-white transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">{t('nav_contact')}</a>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <a {...requestLink} className="magnetic-btn hidden sm:inline-flex items-center rounded-full border border-white/20 px-6 py-2 text-sm font-semibold text-white hover:border-white/60 transition-all duration-300">{t('cta_request')}</a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative z-50 flex flex-col gap-1.5 p-1"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className={`block h-[1.5px] w-5 bg-white/70 transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
              <span className={`block h-[1.5px] w-5 bg-white/70 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-[1.5px] w-5 bg-white/70 transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden">
          <a href="#top" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-white/70 hover:text-white transition-colors">{t('nav_home')}</a>
          <a href="#catalog" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-white/70 hover:text-white transition-colors">{t('nav_catalog')}</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-white/70 hover:text-white transition-colors">{t('nav_services')}</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-white/70 hover:text-white transition-colors">{t('nav_faq')}</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-white/70 hover:text-white transition-colors">{t('nav_contact')}</a>
          <a {...requestLink} onClick={() => setMobileMenuOpen(false)} className="mt-4 magnetic-btn inline-flex items-center rounded-full border border-white/20 px-8 py-3.5 text-base font-semibold text-white hover:border-white/60 transition-all duration-300">{t('cta_request')}</a>
        </div>
      )}
    </>
  );
}
