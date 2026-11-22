import { useCallback, useEffect, useState } from 'react';
import { api } from './api.js';
import LoginForm from './LoginForm.jsx';
import ProductForm from './ProductForm.jsx';
import ProductList from './ProductList.jsx';
import { Button, ErrorBox } from './ui.jsx';
import PageSkeleton from '../components/PageSkeleton.jsx';

export default function AdminApp() {
  const [auth, setAuth] = useState({ status: 'checking', enabled: true });
  const [products, setProducts] = useState(null);
  const [view, setView] = useState({ mode: 'list' }); // list | create | edit
  const [error, setError] = useState(null);
  const [notice, setNotice] = useState('');
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    document.title = 'Админка — Digital Door';
    const robots = document.createElement('meta');
    robots.name = 'robots';
    robots.content = 'noindex, nofollow';
    document.head.appendChild(robots);
    api.me()
      .then((me) => setAuth({ status: me.authenticated ? 'in' : 'out', enabled: me.enabled }))
      .catch((err) => {
        setError(err);
        setAuth({ status: 'out', enabled: true });
      });
    return () => robots.remove();
  }, []);

  const handleError = useCallback((err) => {
    if (err.status === 401) setAuth((a) => ({ ...a, status: 'out' }));
    setError(err);
  }, []);

  const loadProducts = useCallback(() => {
    api.list().then(setProducts, handleError);
  }, [handleError]);

  useEffect(() => {
    if (auth.status === 'in') loadProducts();
  }, [auth.status, loadProducts]);

  useEffect(() => {
    if (!notice) return;
    const t = setTimeout(() => setNotice(''), 4000);
    return () => clearTimeout(t);
  }, [notice]);

  const logout = async () => {
    await api.logout().catch(() => {});
    setProducts(null);
    setView({ mode: 'list' });
    setAuth((a) => ({ ...a, status: 'out' }));
  };

  const handleDelete = async (product, title) => {
    if (!window.confirm(`Удалить товар «${title}»?\n\nОн пропадёт с сайта, а загруженные для него фото будут удалены. Отменить это нельзя.`)) return;
    setDeletingId(product.id);
    setError(null);
    try {
      await api.remove(product.id);
      setProducts((list) => list.filter((p) => p.id !== product.id));
      setNotice(`Товар «${title}» удалён`);
    } catch (err) {
      handleError(err);
    } finally {
      setDeletingId(null);
    }
  };

  const handleSaved = (saved, isNew) => {
    setNotice(isNew ? 'Товар добавлен' : 'Изменения сохранены');
    setView({ mode: 'list' });
    loadProducts();
    window.scrollTo({ top: 0 });
    return saved;
  };

  if (auth.status === 'checking') return <PageSkeleton />;

  if (auth.status === 'out') {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white font-sans antialiased">
        <LoginForm enabled={auth.enabled} onLoggedIn={() => { setError(null); setAuth((a) => ({ ...a, status: 'in' })); }} />
      </div>
    );
  }

  const nextSortOrder = products?.length ? Math.max(...products.map((p) => p.sortOrder)) + 10 : 0;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans antialiased">
      <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="font-bold tracking-tight">DIGITAL</span>
            <span className="font-light tracking-tight text-white/40">DOOR</span>
            <span className="ml-2 rounded-full border border-white/15 px-2 py-0.5 text-xs font-mono text-white/50">admin</span>
          </div>
          <div className="flex items-center gap-2">
            <a href="/" target="_blank" rel="noreferrer" className="px-3 text-sm text-white/50 hover:text-white">Открыть сайт ↗</a>
            <Button onClick={logout}>Выйти</Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10 space-y-6">
        {notice && (
          <div role="status" className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">{notice}</div>
        )}
        {view.mode === 'list' && <ErrorBox error={error} />}

        {!products ? (
          <PageSkeleton />
        ) : view.mode === 'list' ? (
          <ProductList
            products={products}
            deletingId={deletingId}
            onCreate={() => { setError(null); setView({ mode: 'create' }); }}
            onEdit={(p) => { setError(null); setView({ mode: 'edit', product: p }); }}
            onDelete={handleDelete}
          />
        ) : (
          <ProductForm
            key={view.product?.id || 'new'}
            product={view.product}
            nextSortOrder={nextSortOrder}
            onSaved={handleSaved}
            onCancel={() => setView({ mode: 'list' })}
          />
        )}
      </main>
    </div>
  );
}
