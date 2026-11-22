import { lazy } from 'react';

// Админка грузится отдельным чанком и только по адресу /admin.
const AdminApp = lazy(() => import('./admin/AdminApp.jsx'));
const App = lazy(() => import('./App.jsx'));

const isAdminPath = (path) => path === '/admin' || path.startsWith('/admin/');

export default function Root() {
  return isAdminPath(window.location.pathname) ? <AdminApp /> : <App />;
}
