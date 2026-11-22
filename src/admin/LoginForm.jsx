import { useState } from 'react';
import { api } from './api.js';
import { Button, ErrorBox, Field, inputCls } from './ui.jsx';

export default function LoginForm({ enabled, onLoggedIn }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      await api.login(password);
      onLoggedIn();
    } catch (err) {
      setError(err);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form onSubmit={submit} className="w-full max-w-sm space-y-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8">
        <div>
          <h1 className="text-2xl font-bold">Вход в админку</h1>
          <p className="mt-1 text-sm text-white/40">Digital Door — управление каталогом</p>
        </div>
        {!enabled && (
          <ErrorBox error={{ message: 'Админка отключена: на сервере не задан ADMIN_PASSWORD.' }} />
        )}
        <Field label="Пароль">
          <input
            type="password"
            autoComplete="current-password"
            autoFocus
            className={inputCls}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={!enabled}
          />
        </Field>
        <ErrorBox error={error} />
        <Button type="submit" variant="primary" className="w-full" disabled={busy || !password || !enabled}>
          {busy ? 'Вход…' : 'Войти'}
        </Button>
      </form>
    </div>
  );
}
