import { useCallback, useEffect, useLayoutEffect, useRef, useState, lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { useProducts } from './data/useProducts.js';
import { trackVisit } from './utils/pageOpen.js';
import PageSkeleton from './components/PageSkeleton.jsx';

const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const ProductPage = lazy(() => import('./pages/ProductPage.jsx'));

// Адреса сайта: «/» — главная, «/product/<id>» — страница товара.
// Сервер на любой путь отдаёт index.html, поэтому ссылку на товар можно открыть напрямую.
const PRODUCT_PATH = /^\/product\/([a-z0-9-]+)\/?$/;

function viewFromLocation() {
  const match = PRODUCT_PATH.exec(window.location.pathname);
  return match ? { page: 'product', productId: match[1] } : { page: 'home', productId: null };
}

const productUrl = (id) => `/product/${id}`;

// Прокрутку восстанавливаем сами (позиция каталога), браузер не должен мешать.
if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';

function App() {
  const [currentView, setCurrentView] = useState(viewFromLocation);
  // Позиция прокрутки каталога. Запоминается только при уходе с главной,
  // чтобы переходы между товарами (блок «Похожие товары») её не затирали.
  const homeScrollY = useRef(0);
  const restoreScroll = useRef(false);
  const { products } = useProducts();
  const { i18n } = useTranslation();

  const goHome = useCallback(() => {
    restoreScroll.current = true;
    setCurrentView({ page: 'home', productId: null });
  }, []);

  // Кнопки «Назад» и «Вперёд» браузера.
  useEffect(() => {
    const onPopState = () => {
      const next = viewFromLocation();
      if (next.page === 'home') {
        // Переход по якорю (#catalog и т. п.) тоже вызывает popstate — тогда прокрутку не трогаем.
        setCurrentView((prev) => {
          if (prev.page === 'home') return prev;
          restoreScroll.current = true;
          return next;
        });
      } else {
        setCurrentView(next);
      }
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // Неизвестный товар (удалён или опечатка в ссылке) — показываем каталог.
  const missingProduct =
    currentView.page === 'product' && products && !products.some((p) => p.id === currentView.productId);
  const page = missingProduct ? 'home' : currentView.page;

  // ...и исправляем адрес на «/», чтобы не оставалась битая ссылка.
  useEffect(() => {
    if (missingProduct) window.history.replaceState(null, '', '/');
  }, [missingProduct]);

  const handleProductClick = (productId) => {
    if (page === 'home') {
      homeScrollY.current = window.scrollY;
      // Из каталога — новая запись в истории: «Назад» браузера вернёт в каталог.
      window.history.pushState({ fromHome: true }, '', productUrl(productId));
    } else {
      // Между товарами — заменяем запись, чтобы «Назад» вёл сразу в каталог, а не по цепочке товаров.
      window.history.replaceState(window.history.state, '', productUrl(productId));
    }
    setCurrentView({ page: 'product', productId });
  };

  const handleBackToCatalog = () => {
    if (window.history.state?.fromHome) {
      // Пришли из каталога — возвращаемся по истории, как кнопкой браузера (сработает popstate).
      window.history.back();
    } else {
      // Открыли ссылку на товар напрямую — каталога в истории нет.
      window.history.replaceState(null, '', '/');
      goHome();
    }
  };

  const productReady = page === 'product' && Boolean(products);

  // Учёт посещений. Товар считаем, когда точно известно, что он существует;
  // повторный вызов для той же страницы (смена языка) trackVisit пропускает.
  const visitPath = page === 'home' ? '/' : productReady ? productUrl(currentView.productId) : null;
  useEffect(() => {
    if (visitPath) trackVisit(visitPath, i18n.language);
  }, [visitPath, i18n.language]);

  // Сразу после отрисовки, до показа кадра: страница товара открывается сверху,
  // а каталог возвращается на прежнее место.
  useLayoutEffect(() => {
    if (page === 'product') {
      if (productReady) window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }
    if (!restoreScroll.current) return;
    restoreScroll.current = false;
    window.scrollTo({ top: homeScrollY.current, behavior: 'instant' });
  }, [page, currentView.productId, productReady]);

  let content;
  if (page === 'product') {
    const product = products?.find((p) => p.id === currentView.productId);
    content = product
      ? <ProductPage key={product.id} product={product} onBack={handleBackToCatalog} onProductClick={handleProductClick} products={products} />
      : <PageSkeleton />; // товары ещё загружаются
  } else {
    content = <HomePage onProductClick={handleProductClick} />;
  }

  return (
    <Suspense fallback={<PageSkeleton />}>
      {content}
    </Suspense>
  );
}

export default App;
