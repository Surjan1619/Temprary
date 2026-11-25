import fs from 'node:fs';
import path from 'node:path';
import express from 'express';
import multer from 'multer';
import { config } from './config.js';
import { initDb, pool } from './db.js';
import { ValidationError } from './products.js';
import { adminRouter } from './routes/admin.js';
import { publicRouter } from './routes/public.js';
import { startStatsCleanup } from './stats.js';

const app = express();
app.disable('x-powered-by');
app.set('trust proxy', 'loopback, uniquelocal');

app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "connect-src 'self'",
      "font-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
    ].join('; '),
  );
  next();
});

app.use('/api', express.json({ limit: '1mb' }));
app.use('/api', publicRouter);
app.use('/api/admin', adminRouter);
app.use('/api', (req, res) => res.status(404).json({ error: 'Не найдено' }));

app.use('/uploads', express.static(config.uploadDir, { maxAge: '30d', immutable: true, index: false, fallthrough: false }));

// Собранный фронтенд (dist). В dev-режиме его отдаёт Vite, а сюда проксируются /api и /uploads.
const indexHtml = path.join(config.staticDir, 'index.html');
if (fs.existsSync(indexHtml)) {
  app.use('/assets', express.static(path.join(config.staticDir, 'assets'), { maxAge: '1y', immutable: true }));
  app.use(express.static(config.staticDir, { index: false, maxAge: '1h' }));
  app.get('/{*path}', (req, res) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.sendFile(indexHtml);
  });
} else {
  console.warn(`[server] ${indexHtml} не найден — фронтенд не раздаётся (запустите npm run build).`);
}

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  if (err instanceof ValidationError) return res.status(400).json({ error: err.message, details: err.details });
  if (err instanceof multer.MulterError) {
    const msg = err.code === 'LIMIT_FILE_SIZE' ? `Файл больше ${config.maxUploadMb} МБ` : err.message;
    return res.status(400).json({ error: msg });
  }
  if (err.type === 'entity.parse.failed') return res.status(400).json({ error: 'Некорректный JSON' });
  if (err.status && err.status < 500) return res.status(err.status).json({ error: err.message });
  console.error('[server]', err);
  res.status(500).json({ error: 'Внутренняя ошибка сервера' });
});

await initDb();
startStatsCleanup();
const server = app.listen(config.port, () => console.log(`[server] http://localhost:${config.port}`));

function shutdown(signal) {
  console.log(`[server] ${signal}, остановка…`);
  server.close(() => pool.end().then(() => process.exit(0)));
  setTimeout(() => process.exit(1), 10_000).unref();
}
process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
