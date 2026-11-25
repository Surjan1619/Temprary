// Счётчик посещений. Без cookies; IP-адреса в базе не хранятся.
// Посетитель = HMAC(секрет, день + IP + браузер): за день это один и тот же код,
// на следующий день — другой, поэтому проследить человека между днями нельзя.
import crypto from 'node:crypto';
import { config } from './config.js';
import { pool } from './db.js';
import { LANGS } from './products.js';

const KEEP_DAYS = 400;
export const STATS_PERIODS = [7, 30, 90];

const BOT_RE = /bot\b|bot[/;_-]|crawl|spider|slurp|preview|facebookexternalhit|headless|lighthouse|monitor|curl|wget|python|axios|node-fetch|go-http/i;
const PRODUCT_PATH = /^\/product\/([a-z0-9][a-z0-9-]{0,62})$/;

const dayFormat = new Intl.DateTimeFormat('en-CA', {
  timeZone: config.statsTimeZone, year: 'numeric', month: '2-digit', day: '2-digit',
});
const today = () => dayFormat.format(new Date()); // ГГГГ-ММ-ДД

function deviceOf(ua) {
  if (/ipad|tablet|android(?!.*mobile)/i.test(ua)) return 'tablet';
  return /mobi|iphone|android/i.test(ua) ? 'mobile' : 'desktop';
}

// Из адреса-источника оставляем только имя сайта.
function referrerHost(value, ownHost) {
  if (typeof value !== 'string' || !value || value.length > 2000) return '';
  try {
    const url = new URL(value);
    if (!/^https?:$/.test(url.protocol)) return '';
    const host = url.hostname.toLowerCase().replace(/^www\./, '').slice(0, 100);
    return host === ownHost.toLowerCase().replace(/^www\./, '') ? '' : host;
  } catch {
    return '';
  }
}

// Не больше 60 просмотров в минуту с одного IP, чтобы базу нельзя было завалить записями.
const hits = new Map();
setInterval(() => hits.clear(), 60_000).unref();

export function visitRateLimit(req, res, next) {
  const count = (hits.get(req.ip) || 0) + 1;
  hits.set(req.ip, count);
  if (count > 60) return res.status(429).end();
  next();
}

export async function recordVisit(req) {
  const ua = String(req.headers['user-agent'] || '');
  if (!ua || BOT_RE.test(ua)) return;

  const body = req.body || {};
  const productId = PRODUCT_PATH.exec(body.path)?.[1] ?? null;
  if (body.path !== '/' && !productId) return;

  const day = today();
  const visitor = crypto
    .createHmac('sha256', config.sessionSecret)
    .update(`visit|${day}|${req.ip}|${ua}`)
    .digest('hex')
    .slice(0, 32);

  // Страницы несуществующих товаров не записываем.
  await pool.query(
    `INSERT INTO page_views (day, visitor, path, referrer, lang, device)
     SELECT $1::date, $2, $3, $4, $5, $6
     WHERE $7::text IS NULL OR EXISTS (SELECT 1 FROM products WHERE id = $7::text)`,
    [
      day, visitor, productId ? `/product/${productId}` : '/',
      referrerHost(body.referrer, req.hostname || ''),
      LANGS.includes(body.lang) ? body.lang : '', deviceOf(ua), productId,
    ],
  );
}

const SUMMARY_SQL = `
  SELECT count(DISTINCT (day, visitor)) FILTER (WHERE day = $1::date)::int      AS today,
         count(DISTINCT (day, visitor)) FILTER (WHERE day = $1::date - 1)::int  AS yesterday,
         count(DISTINCT (day, visitor)) FILTER (WHERE day > $1::date - 7)::int  AS week,
         count(DISTINCT (day, visitor)) FILTER (WHERE day > $1::date - 30)::int AS month,
         count(DISTINCT visitor) FILTER (WHERE created_at > now() - interval '5 minutes')::int AS online
  FROM page_views
  WHERE day > $1::date - 30`;

const DAILY_SQL = `
  SELECT to_char(d, 'YYYY-MM-DD') AS day,
         count(DISTINCT v.visitor)::int AS visitors,
         count(v.id)::int AS views
  FROM generate_series($1::date - ($2::int - 1), $1::date, interval '1 day') AS d
  LEFT JOIN page_views v ON v.day = d::date
  GROUP BY d ORDER BY d`;

// column — только из кода ниже, не от пользователя.
const topSql = (column, extra = '') => `
  SELECT ${column} AS key, count(DISTINCT (day, visitor))::int AS visitors, count(*)::int AS views
  FROM page_views
  WHERE day > $1::date - $2::int AND day <= $1::date ${extra}
  GROUP BY 1 ORDER BY visitors DESC, views DESC, key LIMIT 10`;

export async function getStats(days) {
  const day = today();
  const params = [day, days];
  const [summary, daily, pages, referrers, devices, langs] = await Promise.all([
    pool.query(SUMMARY_SQL, [day]),
    pool.query(DAILY_SQL, params),
    pool.query(topSql('path'), params),
    pool.query(topSql('referrer', "AND referrer <> ''"), params),
    pool.query(topSql('device'), params),
    pool.query(topSql('lang', "AND lang <> ''"), params),
  ]);
  return {
    days,
    timeZone: config.statsTimeZone,
    summary: summary.rows[0],
    daily: daily.rows,
    pages: pages.rows,
    referrers: referrers.rows,
    devices: devices.rows,
    langs: langs.rows,
  };
}

async function removeOldVisits() {
  try {
    await pool.query('DELETE FROM page_views WHERE day < $1::date - $2::int', [today(), KEEP_DAYS]);
  } catch (err) {
    console.error('[stats] не удалось удалить старые записи:', err.message);
  }
}

export function startStatsCleanup() {
  removeOldVisits();
  setInterval(removeOldVisits, 24 * 3600_000).unref();
}
