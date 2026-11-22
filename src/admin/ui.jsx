export const inputCls =
  'w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white placeholder-white/25 outline-none focus:border-white/40 disabled:opacity-50';

export function Field({ label, hint, children }) {
  return (
    <label className="block">
      <span className="text-xs font-mono uppercase tracking-wider text-white/50">{label}</span>
      <div className="mt-1.5">{children}</div>
      {hint && <span className="mt-1 block text-xs text-white/30">{hint}</span>}
    </label>
  );
}

export function Button({ variant = 'secondary', className = '', ...props }) {
  const styles = {
    primary: 'bg-white text-[#0a0a0a] hover:bg-white/90',
    secondary: 'border border-white/15 text-white/80 hover:border-white/40 hover:text-white',
    danger: 'border border-red-500/40 text-red-300 hover:bg-red-500/10',
  };
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${styles[variant]} ${className}`}
      {...props}
    />
  );
}

export function ErrorBox({ error }) {
  if (!error) return null;
  return (
    <div role="alert" className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
      <p className="font-semibold">{error.message}</p>
      {error.details?.length > 0 && (
        <ul className="mt-2 list-disc pl-5 space-y-0.5">
          {error.details.map((d) => <li key={d}>{d}</li>)}
        </ul>
      )}
    </div>
  );
}
