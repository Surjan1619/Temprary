async function request(path, { body, method = 'GET' } = {}) {
  const isForm = body instanceof FormData;
  const res = await fetch(path, {
    method,
    credentials: 'same-origin',
    headers: body && !isForm ? { 'Content-Type': 'application/json' } : undefined,
    body: body && !isForm ? JSON.stringify(body) : body,
  });
  const text = await res.text();
  let data = null;
  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      data = { error: text };
    }
  }
  if (!res.ok) {
    const err = new Error(data?.error || `Ошибка ${res.status}`);
    err.status = res.status;
    err.details = data?.details || [];
    throw err;
  }
  return data;
}

export const api = {
  me: () => request('/api/admin/me'),
  login: (password) => request('/api/admin/login', { method: 'POST', body: { password } }),
  logout: () => request('/api/admin/logout', { method: 'POST' }),
  stats: (days) => request(`/api/admin/stats?days=${days}`),
  list: () => request('/api/admin/products'),
  create: (product) => request('/api/admin/products', { method: 'POST', body: product }),
  update: (id, product) => request(`/api/admin/products/${encodeURIComponent(id)}`, { method: 'PUT', body: product }),
  remove: (id) => request(`/api/admin/products/${encodeURIComponent(id)}`, { method: 'DELETE' }),
  upload: (file) => {
    const form = new FormData();
    form.append('file', file);
    return request('/api/admin/upload', { method: 'POST', body: form });
  },
};
