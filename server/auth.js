import crypto from 'node:crypto';
import { config } from './config.js';

const COOKIE = 'dd_admin';

const sign = (data) => crypto.createHmac('sha256', config.sessionSecret).update(data).digest('base64url');

function safeEqual(a, b) {
  const ha = crypto.createHash('sha256').update(String(a)).digest();
  const hb = crypto.createHash('sha256').update(String(b)).digest();
  return crypto.timingSafeEqual(ha, hb);
}

export function checkPassword(password) {
  return Boolean(config.adminPassword) && typeof password === 'string' && safeEqual(password, config.adminPassword);
}

function createToken() {
  const payload = Buffer.from(JSON.stringify({ exp: Date.now() + config.sessionTtlHours * 3600_000 })).toString('base64url');
  return `${payload}.${sign(payload)}`;
}

function verifyToken(token) {
  if (typeof token !== 'string') return false;
  const [payload, signature] = token.split('.');
  if (!payload || !signature || !safeEqual(signature, sign(payload))) return false;
  try {
    return JSON.parse(Buffer.from(payload, 'base64url').toString()).exp > Date.now();
  } catch {
    return false;
  }
}

function readCookie(req, name) {
  const header = req.headers.cookie || '';
  for (const part of header.split(';')) {
    const [k, ...v] = part.trim().split('=');
    if (k === name) return decodeURIComponent(v.join('='));
  }
  return null;
}

const cookieAttrs = () =>
  `Path=/api/admin; HttpOnly; SameSite=Strict${config.cookieSecure ? '; Secure' : ''}`;

export function setSessionCookie(res) {
  res.setHeader('Set-Cookie', `${COOKIE}=${createToken()}; Max-Age=${config.sessionTtlHours * 3600}; ${cookieAttrs()}`);
}

export function clearSessionCookie(res) {
  res.setHeader('Set-Cookie', `${COOKIE}=; Max-Age=0; ${cookieAttrs()}`);
}

export function isAuthenticated(req) {
  return verifyToken(readCookie(req, COOKIE));
}

export function requireAdmin(req, res, next) {
  if (!isAuthenticated(req)) return res.status(401).json({ error: 'Требуется вход в админку' });
  next();
}

// Простое ограничение попыток входа: 10 неудачных попыток за 15 минут с одного IP.
const attempts = new Map();
const WINDOW_MS = 15 * 60_000;
const MAX_ATTEMPTS = 10;

export function loginRateLimit(req, res, next) {
  const now = Date.now();
  const entry = attempts.get(req.ip);
  if (entry && entry.reset < now) attempts.delete(req.ip);
  const current = attempts.get(req.ip);
  if (current && current.count >= MAX_ATTEMPTS) {
    res.setHeader('Retry-After', Math.ceil((current.reset - now) / 1000));
    return res.status(429).json({ error: 'Слишком много попыток входа. Попробуйте позже.' });
  }
  next();
}

export function registerFailedLogin(ip) {
  const now = Date.now();
  const entry = attempts.get(ip) || { count: 0, reset: now + WINDOW_MS };
  entry.count += 1;
  attempts.set(ip, entry);
}

export function resetLoginAttempts(ip) {
  attempts.delete(ip);
}
