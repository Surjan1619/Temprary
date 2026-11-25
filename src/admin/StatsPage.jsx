import { useEffect, useState } from 'react';
import { api } from './api.js';
import { Button, ErrorBox } from './ui.jsx';
import { isTrackingSkipped, setTrackingSkipped } from '../utils/pageOpen.js';

const PERIODS = [7, 30, 90];
const REFRESH_MS = 60_000;
const DEVICES = { desktop: 'Компьютер', mobile: 'Телефон', tablet: 'Планшет' };
const LANG_NAMES = { am: 'Армянский', ru: 'Русский', en: 'Английский' };

const num = (n) => n.toLocaleString('ru-RU');
// День приходит как ГГГГ-ММ-ДД; форматируем в UTC, чтобы дата не сдвигалась.
const dayLabel = (day) =>
  new Date(`${day}T00:00:00Z`).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short', timeZone: 'UTC' });

function Tile({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
      <p className="text-sm text-white/60">{label}</p>
      <p className="mt-1 text-3xl font-bold">{num(value)}</p>
    </div>
  );
}

function VisitorsChart({ daily }) {
  const [active, setActive] = useState(null);
  const max = Math.max(1, ...daily.map((d) => d.visitors));
  const total = daily.reduce((sum, d) => sum + d.visitors, 0);
  const shown = active === null ? null : daily[active];

  return (
    <section className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="font-semibold">Посетители по дням</h2>
        <p className="text-sm text-white/60">
          {shown
            ? `${dayLabel(shown.day)}: посетителей ${num(shown.visitors)}, просмотров ${num(shown.views)}`
            : `Всего за период: ${num(total)}`}
        </p>
      </div>
      <div className="mt-5 flex gap-3">
        <div className="flex h-44 flex-col justify-between text-right text-xs tabular-nums text-white/50">
          <span>{num(max)}</span>
          <span>0</span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex h-44 border-y border-white/10" onMouseLeave={() => setActive(null)}>
            {daily.map((d, i) => (
              <div
                key={d.day}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`flex h-full min-w-0 flex-1 items-end justify-center px-px ${active === i ? 'bg-white/[0.06]' : ''}`}
              >
                <div
                  className="w-full max-w-6 rounded-t bg-[#3987e5]"
                  style={{ height: `${(d.visitors / max) * 100}%`, minHeight: d.visitors ? 2 : 0 }}
                />
              </div>
            ))}
          </div>
          <div className="mt-2 flex justify-between text-xs text-white/50">
            <span>{dayLabel(daily[0].day)}</span>
            <span>{dayLabel(daily[daily.length - 1].day)}</span>
          </div>
        </div>
      </div>
      <details className="mt-4 text-sm">
        <summary className="cursor-pointer text-white/60 hover:text-white">Показать таблицей</summary>
        <div className="mt-3 max-h-72 overflow-y-auto">
          <table className="w-full text-left tabular-nums">
            <thead className="text-white/50">
              <tr><th className="py-1 font-normal">День</th><th className="font-normal">Посетители</th><th className="font-normal">Просмотры</th></tr>
            </thead>
            <tbody>
              {[...daily].reverse().map((d) => (
                <tr key={d.day} className="border-t border-white/[0.06]">
                  <td className="py-1">{dayLabel(d.day)}</td><td>{num(d.visitors)}</td><td>{num(d.views)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </section>
  );
}

function TopList({ title, rows, label, empty = 'Пока нет данных' }) {
  return (
    <section className="min-w-0 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
      <h2 className="font-semibold">{title}</h2>
      {rows.length === 0 ? (
        <p className="mt-3 text-sm text-white/50">{empty}</p>
      ) : (
        <table className="mt-3 w-full text-left text-sm">
          <thead className="text-white/50">
            <tr>
              <th className="pb-1 font-normal"><span className="sr-only">Название</span></th>
              <th className="pb-1 text-right font-normal">Посетители</th>
              <th className="pb-1 pl-4 text-right font-normal">Просмотры</th>
            </tr>
          </thead>
          <tbody className="tabular-nums">
            {rows.map((r) => (
              <tr key={r.key} className="border-t border-white/[0.06]">
                <td className="w-full max-w-0 truncate py-1.5 pr-3" title={label(r.key)}>{label(r.key)}</td>
                <td className="text-right">{num(r.visitors)}</td>
                <td className="pl-4 text-right text-white/60">{num(r.views)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

export default function StatsPage({ products, onAuthLost }) {
  const [days, setDays] = useState(30);
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(null);
  const [skip, setSkip] = useState(isTrackingSkipped);

  useEffect(() => {
    let cancelled = false;
    const load = () => api.stats(days).then(
      (data) => {
        if (cancelled) return;
        setStats(data);
        setError(null);
      },
      (err) => {
        if (cancelled) return;
        setError(err);
        if (err.status === 401) onAuthLost(err);
      },
    );
    load();
    const timer = setInterval(load, REFRESH_MS);
    return () => {
      cancelled = true;
      clearInterval(timer);
    };
  }, [days, onAuthLost]);

  const pageLabel = (path) => {
    if (path === '/') return 'Главная';
    const product = products.find((p) => `/product/${p.id}` === path);
    return product?.translations.ru?.title || product?.translations.am?.title || path;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Посещения</h1>
          <p className="mt-1 text-sm text-white/60">Обновляется раз в минуту.{stats && ` Часовой пояс: ${stats.timeZone}.`}</p>
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Период">
          {PERIODS.map((p) => (
            <Button key={p} variant={p === days ? 'primary' : 'secondary'} aria-pressed={p === days} onClick={() => setDays(p)}>
              {p} дней
            </Button>
          ))}
        </div>
      </div>

      <ErrorBox error={error} />

      {!stats ? (
        !error && <p className="text-white/60">Загрузка…</p>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
            <Tile label="Сейчас на сайте" value={stats.summary.online} />
            <Tile label="Сегодня" value={stats.summary.today} />
            <Tile label="Вчера" value={stats.summary.yesterday} />
            <Tile label="За 7 дней" value={stats.summary.week} />
            <Tile label="За 30 дней" value={stats.summary.month} />
          </div>
          <VisitorsChart key={stats.days} daily={stats.daily} />
          <div className="grid gap-6 lg:grid-cols-2">
            <TopList title="Страницы" rows={stats.pages} label={pageLabel} />
            <TopList title="Откуда пришли" rows={stats.referrers} label={(k) => k} empty="Переходов с других сайтов пока нет" />
            <TopList title="Устройства" rows={stats.devices} label={(k) => DEVICES[k] || k} />
            <TopList title="Язык сайта" rows={stats.langs} label={(k) => LANG_NAMES[k] || k} />
          </div>
        </>
      )}

      <label className="flex items-center gap-3 text-sm text-white/80">
        <input
          type="checkbox"
          checked={skip}
          onChange={(e) => {
            setTrackingSkipped(e.target.checked);
            setSkip(isTrackingSkipped());
          }}
        />
        Не считать мои посещения из этого браузера
      </label>
      <p className="max-w-3xl text-sm text-white/50">
        Посетитель считается один раз в день. Если человек заходил в разные дни, за период он учтён несколько раз.
        «Сейчас на сайте» — кто открывал страницы за последние 5 минут. Cookies не используются, IP-адреса не сохраняются,
        известные поисковые роботы не учитываются.
      </p>
    </div>
  );
}
