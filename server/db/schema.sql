-- Схема БД каталога Digital Door. Выполняется при каждом старте сервера (идемпотентно).

CREATE TABLE IF NOT EXISTS products (
  id          TEXT PRIMARY KEY CHECK (id ~ '^[a-z0-9][a-z0-9-]{0,62}$'),
  icon        TEXT NOT NULL,
  brand       TEXT,
  img         TEXT NOT NULL,
  gallery     JSONB NOT NULL DEFAULT '[]'::jsonb,
  sort_order  INTEGER NOT NULL DEFAULT 0,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS product_translations (
  product_id        TEXT NOT NULL REFERENCES products(id) ON DELETE CASCADE ON UPDATE CASCADE,
  lang              TEXT NOT NULL CHECK (lang IN ('am', 'ru', 'en')),
  title             TEXT NOT NULL,
  subtitle          TEXT NOT NULL DEFAULT '',
  description_html  TEXT NOT NULL DEFAULT '',
  features          JSONB NOT NULL DEFAULT '[]'::jsonb,
  series            JSONB NOT NULL DEFAULT '[]'::jsonb,
  specs             JSONB NOT NULL DEFAULT '[]'::jsonb,
  benefits          JSONB NOT NULL DEFAULT '[]'::jsonb,
  PRIMARY KEY (product_id, lang)
);

CREATE INDEX IF NOT EXISTS products_sort_idx ON products (sort_order, id);

-- Служебные флаги (например, что начальные данные уже загружены).
CREATE TABLE IF NOT EXISTS app_meta (
  key   TEXT PRIMARY KEY,
  value TEXT NOT NULL
);

-- Посещения сайта (server/stats.js). IP не хранится: visitor — хеш, который меняется каждый день.
CREATE TABLE IF NOT EXISTS page_views (
  id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  day         DATE NOT NULL,
  visitor     TEXT NOT NULL,
  path        TEXT NOT NULL,
  referrer    TEXT NOT NULL DEFAULT '',
  lang        TEXT NOT NULL DEFAULT '',
  device      TEXT NOT NULL DEFAULT ''
);

CREATE INDEX IF NOT EXISTS page_views_day_idx ON page_views (day, visitor);
