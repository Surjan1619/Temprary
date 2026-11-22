import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import multer from 'multer';
import { config } from './config.js';

const EXT_BY_MIME = {
  'image/jpeg': '.jpg',
  'image/png': '.png',
  'image/webp': '.webp',
  'image/avif': '.avif',
  'image/gif': '.gif',
};

// Проверка «магических байтов»: MIME от браузера подделать легко, содержимое — нет.
function detectImageType(buf) {
  if (buf.length >= 3 && buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return 'image/jpeg';
  if (buf.length >= 8 && buf.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return 'image/png';
  if (buf.length >= 12 && buf.toString('ascii', 0, 4) === 'RIFF' && buf.toString('ascii', 8, 12) === 'WEBP') return 'image/webp';
  if (buf.length >= 12 && buf.toString('ascii', 4, 8) === 'ftyp' && ['avif', 'avis'].includes(buf.toString('ascii', 8, 12))) return 'image/avif';
  if (buf.length >= 6 && ['GIF87a', 'GIF89a'].includes(buf.toString('ascii', 0, 6))) return 'image/gif';
  return null;
}

export const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: config.maxUploadMb * 1024 * 1024, files: 1 },
});

/** Сохраняет загруженный файл после проверки и возвращает публичный путь. */
export async function saveImage(file) {
  const type = file && detectImageType(file.buffer);
  if (!type) {
    const err = new Error('Файл не является изображением (JPEG, PNG, WebP, AVIF или GIF)');
    err.status = 400;
    throw err;
  }
  const name = `${Date.now().toString(36)}-${crypto.randomBytes(8).toString('hex')}${EXT_BY_MIME[type]}`;
  await fs.mkdir(config.uploadDir, { recursive: true });
  await fs.writeFile(path.join(config.uploadDir, name), file.buffer, { flag: 'wx' });
  return `/uploads/${name}`;
}

/** Удаляет загруженные файлы, на которые больше не ссылается ни один товар. */
export async function removeOrphanUploads(candidates, stillUsed) {
  for (const p of candidates) {
    if (!p?.startsWith('/uploads/') || stillUsed.has(p)) continue;
    const file = path.join(config.uploadDir, path.basename(p));
    await fs.rm(file, { force: true }).catch((err) => console.warn('[uploads] не удалось удалить', file, err.message));
  }
}
