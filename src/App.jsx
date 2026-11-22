import { useState, lazy, Suspense } from 'react';
import { useProducts } from './data/useProducts.js';
import PageSkeleton from './components/PageSkeleton.jsx';

const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const ProductPage = lazy(() => import('./pages/ProductPage.jsx'));

function App() {
  const [currentView, setCurrentView] = useState({ page: 'home', productId: null });
  const [scrollPos, setScrollPos] = useState(0);
  const { products } = useProducts();

  const handleProductClick = (productId) => {
    setScrollPos(window.scrollY);
    setCurrentView({ page: 'product', productId });
  };

  const handleBackToCatalog = () => {
    setCurrentView({ page: 'home', productId: null });
    requestAnimationFrame(() => window.scrollTo(0, scrollPos));
  };

  let page;
  if (currentView.page === 'product') {
    const product = products?.find((p) => p.id === currentView.productId);
    if (!products) {
      page = <PageSkeleton />;
    } else if (!product) {
      page = <HomePage onProductClick={handleProductClick} />;
    } else {
      page = <ProductPage key={product.id} product={product} onBack={handleBackToCatalog} onProductClick={handleProductClick} products={products} />;
    }
  } else {
    page = <HomePage onProductClick={handleProductClick} />;
  }

  return (
    <Suspense fallback={<PageSkeleton />}>
      {page}
    </Suspense>
  );
}

export default App;
