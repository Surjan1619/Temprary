import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'am', label: 'AM' },
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    localStorage.setItem('app-lang', i18n.language);
  }, [i18n.language]);

  const switchLang = (code) => {
    if (code === i18n.language) return;
    i18n.changeLanguage(code);
  };

  return (
    <div className="flex items-center gap-1 text-xs font-mono tracking-wider">
      {languages.map((lang, i) => (
        <span key={lang.code} className="flex items-center">
          <button
            onClick={() => switchLang(lang.code)}
            className={`relative transition-colors duration-200 ${
              i18n.language === lang.code
                ? 'text-white font-semibold'
                : 'text-white/30 hover:text-white/60'
            }`}
          >
            {lang.label}
          </button>
          {i < languages.length - 1 && (
            <span className="mx-1 text-white/10">/</span>
          )}
        </span>
      ))}
    </div>
  );
}
