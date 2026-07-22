import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'am', label: 'AM' },
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(null);

  const switchLang = async (code) => {
    if (code === i18n.language || loading) return;

    if (code !== 'am' && !i18n.hasResourceBundle(code, 'common')) {
      setLoading(code);
      try {
        const mod = await import(`../locales/${code}/common.json`);
        i18n.addResourceBundle(code, 'common', mod.default ?? mod);
      } catch {
        setLoading(null);
        return;
      }
    }

    i18n.changeLanguage(code);
    document.documentElement.lang = code;
    setLoading(null);
  };

  return (
    <div className="flex items-center gap-1 text-xs font-mono tracking-wider">
      {languages.map((lang, i) => (
        <span key={lang.code} className="flex items-center">
          <button
            onClick={() => switchLang(lang.code)}
            disabled={loading === lang.code}
            className={`relative transition-colors duration-200 ${
              loading === lang.code
                ? 'text-white/50'
                : i18n.language === lang.code
                ? 'text-white font-semibold'
                : 'text-white/30 hover:text-white/60'
            }`}
          >
            {loading === lang.code ? (
              <span className="flex items-center gap-1">
                {lang.label}
                <span className="flex gap-0.5">
                  <span className="w-1 h-1 rounded-full bg-current animate-bounce" style={{ animationDelay: '0s' }} />
                  <span className="w-1 h-1 rounded-full bg-current animate-bounce" style={{ animationDelay: '0.15s' }} />
                  <span className="w-1 h-1 rounded-full bg-current animate-bounce" style={{ animationDelay: '0.3s' }} />
                </span>
              </span>
            ) : (
              lang.label
            )}
          </button>
          {i < languages.length - 1 && (
            <span className="mx-1 text-white/10">/</span>
          )}
        </span>
      ))}
    </div>
  );
}
