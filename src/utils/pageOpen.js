// Имя файла намеренно нейтральное: блокировщики рекламы вырезают скрипты с «track»/«stats» в имени.

import { readStorage, writeStorage } from './storage.js';

const SKIP_KEY = 'stats-skip';

// «Не считать мои посещения» — включается в админке для конкретного браузера.
export const isTrackingSkipped = () => readStorage(SKIP_KEY) === '1';
export const setTrackingSkipped = (skip) => writeStorage(SKIP_KEY, skip ? '1' : '0');

let lastPath = null;

/** Сообщает серверу об открытии страницы. Ошибки не мешают работе сайта. */
export function trackVisit(path, lang) {
  if (path === lastPath || isTrackingSkipped()) return;
  // Источник (Google, Instagram…) важен только для первой страницы визита.
  const referrer = lastPath === null ? document.referrer : '';
  lastPath = path;
  fetch('/api/visit', {
    method: 'POST',
    keepalive: true,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ path, lang, referrer }),
  }).catch(() => {});
}
