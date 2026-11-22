import crypto from 'node:crypto';
import path from 'node:path';

const env = process.env;

export const config = {
  port: Number(env.PORT) || 3000,
  databaseUrl: env.DATABASE_URL || 'postgres://digitaldoor:digitaldoor@localhost:5432/digitaldoor',
  adminPassword: env.ADMIN_PASSWORD || '',
  sessionSecret: env.SESSION_SECRET || '',
  sessionTtlHours: Number(env.SESSION_TTL_HOURS) || 12,
  cookieSecure: env.COOKIE_SECURE === 'true',
  uploadDir: path.resolve(env.UPLOAD_DIR || 'uploads'),
  staticDir: path.resolve(env.STATIC_DIR || 'dist'),
  maxUploadMb: Number(env.MAX_UPLOAD_MB) || 10,
};

if (!config.adminPassword) {
  console.warn('[config] ADMIN_PASSWORD не задан — вход в админку отключён.');
}
if (!config.sessionSecret) {
  config.sessionSecret = crypto.randomBytes(32).toString('hex');
  console.warn('[config] SESSION_SECRET не задан — сгенерирован временный, сессии сбросятся при перезапуске.');
}
