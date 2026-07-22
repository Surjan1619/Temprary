import { useTranslation } from 'react-i18next';
import { productsData as am } from './products_am.jsx';
import { productsData as en } from './products_en.jsx';
import { productsData as ru } from './products_ru.jsx';

export function useProducts() {
  const { i18n } = useTranslation();
  switch (i18n.language) {
    case 'en': return en;
    case 'ru': return ru;
    default: return am;
  }
}
