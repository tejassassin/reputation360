/**
 * Shown while a lazy route chunk loads. If this stays visible, restart with `npm run dev:fresh`.
 */
export function RouteLoadingFallback({ label = "Loading page" }) {
  return (
    <div
      className="flex min-h-[50vh] flex-1 flex-col items-center justify-center gap-3 bg-offwhite px-6 pt-24 text-center md:pt-28"
      role="status"
      aria-live="polite"
    >
      <p className="font-heading text-lg font-semibold text-navy">{label}…</p>
      <p className="max-w-md text-sm text-navy/65">
        If this message does not go away, stop the dev server and run{" "}
        <code className="rounded bg-navy/5 px-1.5 py-0.5 font-mono text-xs">npm run dev:fresh</code>
        , then hard-refresh the browser.
      </p>
    </div>
  );
}
