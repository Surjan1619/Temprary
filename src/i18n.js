import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import am from './locales/am/common.json';

i18n.use(initReactI18next).init({
  resources: {
    am: { common: am },
  },
  lng: 'am',
  fallbackLng: 'am',
  defaultNS: 'common',
  interpolation: { escapeValue: false },
});

export default i18n;
