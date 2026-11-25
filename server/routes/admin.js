import { Router } from 'express';
import { config } from '../config.js';
import { withTransaction } from '../db.js';
import {
  checkPassword, clearSessionCookie, isAuthenticated, loginRateLimit,
  registerFailedLogin, requireAdmin, resetLoginAttempts, setSessionCookie,
} from '../auth.js';
import {
  getProduct, insertProduct, listProducts, referencedImages, updateProduct, validateProduct,
} from '../products.js';
import { getStats, STATS_PERIODS } from '../stats.js';
import { removeOrphanUploads, saveImage, upload } from '../uploads.js';

export const adminRouter = Router();

adminRouter.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store');
  next();
});

adminRouter.get('/me', (req, res) => {
  res.json({ authenticated: isAuthenticated(req), enabled: Boolean(config.adminPassword) });
});

adminRouter.post('/login', loginRateLimit, (req, res) => {
  if (!config.adminPassword) return res.status(503).json({ error: 'Админка отключена: не задан ADMIN_PASSWORD' });
  if (!checkPassword(req.body?.password)) {
    registerFailedLogin(req.ip);
    return res.status(401).json({ error: 'Неверный пароль' });
  }
  resetLoginAttempts(req.ip);
  setSessionCookie(res);
  res.json({ ok: true });
});

adminRouter.post('/logout', (req, res) => {
  clearSessionCookie(res);
  res.json({ ok: true });
});

adminRouter.use(requireAdmin);

adminRouter.get('/stats', async (req, res) => {
  const days = Number(req.query.days);
  res.json(await getStats(STATS_PERIODS.includes(days) ? days : 30));
});

adminRouter.get('/products', async (req, res) => {
  res.json(await listProducts());
});

adminRouter.get('/products/:id', async (req, res) => {
  const product = await getProduct(req.params.id);
  if (!product) return res.status(404).json({ error: 'Товар не найден' });
  res.json(product);
});

adminRouter.post('/products', async (req, res) => {
  const product = validateProduct(req.body);
  try {
    await withTransaction((client) => insertProduct(client, product));
  } catch (err) {
    if (err.code === '23505') return res.status(409).json({ error: `Товар с id «${product.id}» уже существует` });
    throw err;
  }
  res.status(201).json(await getProduct(product.id));
});

adminRouter.put('/products/:id', async (req, res) => {
  const product = validateProduct({ ...req.body, id: req.params.id });
  const before = await getProduct(req.params.id);
  if (!before) return res.status(404).json({ error: 'Товар не найден' });
  await withTransaction((client) => updateProduct(client, req.params.id, product));
  await removeOrphanUploads([before.img, ...before.gallery], await referencedImages());
  res.json(await getProduct(req.params.id));
});

adminRouter.delete('/products/:id', async (req, res) => {
  const before = await getProduct(req.params.id);
  if (!before) return res.status(404).json({ error: 'Товар не найден' });
  await withTransaction((client) => client.query('DELETE FROM products WHERE id = $1', [req.params.id]));
  await removeOrphanUploads([before.img, ...before.gallery], await referencedImages());
  res.status(204).end();
});

adminRouter.post('/upload', upload.single('file'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'Файл не передан' });
  res.status(201).json({ url: await saveImage(req.file) });
});
