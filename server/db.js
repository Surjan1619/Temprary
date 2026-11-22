import fs from 'node:fs/promises';
import pg from 'pg';
import { config } from './config.js';

export const pool = new pg.Pool({ connectionString: config.databaseUrl, max: 10 });

pool.on('error', (err) => console.error('[db] ошибка соединения в пуле:', err.message));

export async function withTransaction(fn) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const result = await fn(client);
    await client.query('COMMIT');
    return result;
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }
}

async function waitForDb(retries = 30) {
  for (let i = 1; ; i++) {
    try {
      await pool.query('SELECT 1');
      return;
    } catch (err) {
      if (i >= retries) throw err;
      console.log(`[db] база недоступна (${err.message}), повтор ${i}/${retries}…`);
      await new Promise((r) => setTimeout(r, 2000));
    }
  }
}

async function seedIfNeeded() {
  const { rows } = await pool.query("SELECT 1 FROM app_meta WHERE key = 'seeded'");
  if (rows.length) return;

  const seed = JSON.parse(await fs.readFile(new URL('./db/seed-products.json', import.meta.url), 'utf8'));
  // Импорт здесь, чтобы избежать циклической зависимости db.js <-> products.js
  const { insertProduct } = await import('./products.js');
  await withTransaction(async (client) => {
    for (const product of seed) await insertProduct(client, product);
    await client.query("INSERT INTO app_meta (key, value) VALUES ('seeded', now()::text)");
  });
  console.log(`[db] загружены начальные товары: ${seed.length}`);
}

export async function initDb() {
  await waitForDb();
  const schema = await fs.readFile(new URL('./db/schema.sql', import.meta.url), 'utf8');
  await pool.query(schema);
  await seedIfNeeded();
}
