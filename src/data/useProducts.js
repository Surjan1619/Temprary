import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Кэш на уровне модуля: каталог и страница товара используют одни и те же данные,
// а повторное переключение на уже загруженный язык не делает новый запрос.
const requests = new Map();
const loaded = new Map();

function fetchProducts(lang) {
  if (!requests.has(lang)) {
    const request = fetch(`/api/products?lang=${encodeURIComponent(lang)}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((products) => {
        loaded.set(lang, products);
        return products;
      });
    request.catch(() => requests.delete(lang)); // при ошибке разрешаем повторить
    requests.set(lang, request);
  }
  return requests.get(lang);
}

/**
 * Товары для текущего языка из API.
 * Пока новый язык грузится, возвращаются товары предыдущего — без мигания пустого каталога.
 */
export function useProducts() {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const [state, setState] = useState({ products: loaded.get(lang) ?? null, error: null, attempt: 0 });

  useEffect(() => {
    let alive = true;
    fetchProducts(lang).then(
      (products) => alive && setState((s) => ({ ...s, products, error: null })),
      (error) => alive && setState((s) => ({ ...s, error })),
    );
    return () => {
      alive = false;
    };
  }, [lang, state.attempt]);

  return {
    products: loaded.get(lang) ?? state.products,
    loading: !loaded.has(lang),
    error: loaded.has(lang) ? null : state.error,
    retry: () => setState((s) => ({ ...s, error: null, attempt: s.attempt + 1 })),
  };
}
