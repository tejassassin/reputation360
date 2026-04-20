import { Search, TrendingDown, TrendingUp } from "lucide-react";

/**
 * Search-results illustration for the About hero (pure DOM/CSS — not a bitmap).
 */
export default function AboutHeroSearchMockup({ headlineFont: hf }) {
  const badge = (node) => (
    <span className="inline-flex shrink-0 items-center gap-0.5 rounded-md border border-[#4CAF50]/35 bg-black/50 px-1.5 py-0.5 text-[10px] font-bold text-[#4CAF50]">
      {node}
    </span>
  );

  return (
    <div className="relative w-full" data-reputation360-hero-visual="search-mockup-jsx">
      <div
        className="pointer-events-none absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-[#4CAF50]/15 via-transparent to-[#2E5B88]/25 blur-xl"
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-2xl border border-white/12 border-t-4 border-t-[#4CAF50] bg-[#070f1c] shadow-[0_28px_80px_-24px_rgba(0,0,0,0.65)] ring-1 ring-[#4CAF50]/25">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.45] [background-image:radial-gradient(circle,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:11px_11px]"
          aria-hidden
        />
        <div className="absolute right-3 top-0 z-10 translate-y-[-45%] sm:right-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 shadow-lg shadow-black/25">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4CAF50]" aria-hidden />
            <span className={`${hf} text-[9px] font-bold uppercase tracking-[0.12em] text-[#0a1628] sm:text-[10px]`}>
              After · 11 weeks
            </span>
          </span>
        </div>

        <div className="relative px-3 pb-4 pt-9 sm:px-4 sm:pb-5 sm:pt-10">
          <div className="flex items-center justify-between gap-2 rounded-lg border border-white/10 bg-black/45 px-3 py-2.5">
            <div className="flex min-w-0 flex-1 items-center gap-2">
              <Search className="h-4 w-4 shrink-0 text-white/45" strokeWidth={2} aria-hidden />
              <p className="truncate text-[12px] text-white sm:text-[13px]">
                <span className="font-bold">arjun mehta</span>{" "}
                <span className="text-white/45">founder</span>
              </p>
            </div>
            <span className="shrink-0 text-[10px] text-white/35 sm:text-[11px]">google.com</span>
          </div>

          <ul className="mt-4 space-y-2.5 sm:space-y-3">
            <li className="rounded-lg border border-[#4CAF50]/45 bg-[#081018]/90 p-2.5 sm:p-3">
              <div className="flex gap-2 sm:gap-3">
                <span
                  className={`${hf} w-6 shrink-0 pt-0.5 text-right text-[11px] font-bold tabular-nums text-[#4CAF50] sm:w-7 sm:text-[12px]`}
                >
                  01
                </span>
                <div className="min-w-0 flex-1">
                  <p className={`${hf} text-[12px] font-semibold leading-snug text-white sm:text-[13px]`}>
                    Arjun Mehta — Founder profile & work
                  </p>
                  <p className="mt-0.5 truncate text-[10px] font-medium text-[#4CAF50] sm:text-[11px]">
                    reputation360.in/arjun-mehta
                  </p>
                </div>
                {badge(
                  <>
                    <TrendingUp className="h-3 w-3" strokeWidth={2.5} aria-hidden />+5
                  </>,
                )}
              </div>
            </li>
            <li className="rounded-lg border border-[#4CAF50]/45 bg-[#081018]/90 p-2.5 sm:p-3">
              <div className="flex gap-2 sm:gap-3">
                <span
                  className={`${hf} w-6 shrink-0 pt-0.5 text-right text-[11px] font-bold tabular-nums text-[#4CAF50] sm:w-7 sm:text-[12px]`}
                >
                  02
                </span>
                <div className="min-w-0 flex-1">
                  <p className={`${hf} text-[12px] font-semibold leading-snug text-white sm:text-[13px]`}>
                    Financial Times — Advisory board announcement
                  </p>
                  <p className="mt-0.5 truncate text-[10px] font-medium text-[#4CAF50] sm:text-[11px]">
                    ft.com/arcadia-advisory
                  </p>
                </div>
                {badge(<span>NEW</span>)}
              </div>
            </li>
            <li className="rounded-lg border border-[#4CAF50]/45 bg-[#081018]/90 p-2.5 sm:p-3">
              <div className="flex gap-2 sm:gap-3">
                <span
                  className={`${hf} w-6 shrink-0 pt-0.5 text-right text-[11px] font-bold tabular-nums text-[#4CAF50] sm:w-7 sm:text-[12px]`}
                >
                  03
                </span>
                <div className="min-w-0 flex-1">
                  <p className={`${hf} text-[12px] font-semibold leading-snug text-white sm:text-[13px]`}>
                    LinkedIn — Arjun Mehta · Founder
                  </p>
                  <p className="mt-0.5 truncate text-[10px] font-medium text-[#4CAF50] sm:text-[11px]">
                    linkedin.com/in/arjunmehta
                  </p>
                </div>
                {badge(
                  <>
                    <TrendingUp className="h-3 w-3" strokeWidth={2.5} aria-hidden />+2
                  </>,
                )}
              </div>
            </li>
          </ul>

          <div className="my-3 flex items-center gap-2 sm:my-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            <span
              className={`${hf} shrink-0 rounded-full border border-white/15 bg-white/[0.06] px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.2em] text-white/45 sm:text-[9px]`}
            >
              Page break
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          </div>

          <div className="rounded-lg border border-dashed border-white/12 bg-white/[0.02] p-2.5 opacity-[0.55] sm:p-3">
            <div className="flex gap-2 sm:gap-3">
              <span className={`${hf} w-6 shrink-0 pt-0.5 text-right text-[11px] font-bold tabular-nums text-white/35 sm:w-7 sm:text-[12px]`}>
                08
              </span>
              <div className="min-w-0 flex-1">
                <p className={`${hf} text-[12px] font-medium leading-snug text-white/50 line-through sm:text-[13px]`}>
                  Outdated legal filing — 2019
                </p>
                <p className="mt-0.5 truncate text-[10px] text-white/35 sm:text-[11px]">olddirectory.co/filing-2019</p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-0.5 rounded-md border border-red-500/35 bg-black/50 px-1.5 py-0.5 text-[10px] font-bold text-red-400/95">
                <TrendingDown className="h-3 w-3" strokeWidth={2.5} aria-hidden />
                -7
              </span>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-1.5 border-t border-white/10 pt-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2 sm:gap-y-1">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#4CAF50]" aria-hidden />
              <span className={`${hf} text-[10px] font-bold uppercase tracking-[0.14em] text-[#4CAF50] sm:text-[11px]`}>
                Live monitoring
              </span>
            </span>
            <span className={`${hf} text-[11px] leading-snug text-white/75 sm:text-[12px]`}>
              Strategy, content & search — <span className="font-bold text-white">one team.</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
