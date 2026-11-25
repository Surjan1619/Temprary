import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import am from './locales/am/common.json';
import en from './locales/en/common.json';
import ru from './locales/ru/common.json';
import { readStorage } from './utils/storage.js';

const saved = readStorage('app-lang');
const initialLng = saved === 'am' || saved === 'ru' || saved === 'en' ? saved : 'am';

i18n.use(initReactI18next).init({
  resources: {
    am: { common: am },
    ru: { common: ru },
    en: { common: en },
  },
  lng: initialLng,
  fallbackLng: 'am',
  defaultNS: 'common',
  interpolation: { escapeValue: false },
});

export default i18n;
