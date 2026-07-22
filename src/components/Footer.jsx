import { useTranslation } from 'react-i18next';
import { socialLinks } from '../data/siteData.js';

export default function Footer({ onBack }) {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-white/[0.06] bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono tracking-wider text-white/20">
          <span>&copy; {new Date().getFullYear()} Digital Door.</span>
          <button onClick={onBack} className="text-white/30 hover:text-white transition-colors duration-300">
            &larr; {t('back_to_catalog')}
          </button>
        </div>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono tracking-wider text-white/30">
          <a href="tel:+37433505022" className="hover:text-white transition-colors duration-300">+374 33 50 50 22</a>
          {socialLinks.map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
