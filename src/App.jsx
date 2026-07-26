import { useState, lazy, Suspense } from 'react';
import { useProducts } from './data/useProducts.js';

const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const ProductPage = lazy(() => import('./pages/ProductPage.jsx'));

function PageSkeleton() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-2 border-white/20 border-t-white animate-spin" />
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight text-white/50">DIGITAL</span>
          <span className="text-lg font-light tracking-tight text-white/30">DOOR</span>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [currentView, setCurrentView] = useState({ page: 'home', productId: null });
  const [scrollPos, setScrollPos] = useState(0);
  const products = useProducts();

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
    const product = products.find((p) => p.id === currentView.productId);
    if (!product) {
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
