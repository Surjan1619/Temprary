import { Router } from 'express';
import { pool } from '../db.js';
import { DEFAULT_LANG, LANGS, listProducts, localize } from '../products.js';

export const publicRouter = Router();

publicRouter.get('/health', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ ok: true });
  } catch {
    res.status(503).json({ ok: false });
  }
});

publicRouter.get('/products', async (req, res) => {
  const lang = LANGS.includes(req.query.lang) ? req.query.lang : DEFAULT_LANG;
  const products = (await listProducts()).map((p) => localize(p, lang)).filter(Boolean);
  res.setHeader('Cache-Control', 'public, max-age=30');
  res.json(products);
});
