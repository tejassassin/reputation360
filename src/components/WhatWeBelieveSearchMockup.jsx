import { Search, TrendingDown, TrendingUp } from "lucide-react";

/**
 * Dark-mode search-results card for the “What we believe” section.
 * Matches the product mockup style (navy panel, green accents, PAGE BREAK, live monitoring footer).
 */
export default function WhatWeBelieveSearchMockup() {
  return (
    <div className="relative overflow-hidden rounded-[0.875rem] border border-[#1e3a5f]/80 bg-[#0a1220] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.45)]">
      {/* Subtle dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.22) 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
        aria-hidden
      />

      {/* AFTER badge */}
      <div className="absolute right-3 top-3 z-10 sm:right-4 sm:top-4">
        <span className="inline-flex rounded-full border border-white/20 bg-white px-3 py-1.5 font-heading text-[10px] font-bold uppercase tracking-wide text-[#1F3B64] shadow-md sm:text-[11px]">
          After · 11 months
        </span>
      </div>

      <div className="relative px-4 pb-4 pt-12 sm:px-5 sm:pb-5 sm:pt-14">
        {/* Search bar */}
        <div className="mb-4 flex items-center gap-2 rounded-xl border border-white/10 bg-[#0f1c30] px-3 py-2.5 sm:gap-3 sm:px-4">
          <Search className="h-4 w-4 shrink-0 text-slate-400" strokeWidth={2} aria-hidden />
          <p className="min-w-0 flex-1 text-left text-[13px] text-white sm:text-sm">
            <span className="font-medium">arjun mehta</span>{" "}
            <span className="font-normal text-slate-300">founder</span>
          </p>
          <span className="shrink-0 font-body text-[10px] text-slate-500 sm:text-[11px]">
            google.com
          </span>
        </div>

        <ul className="space-y-2.5 sm:space-y-3">
          <ResultPositive
            num="01"
            title="Arjun Mehta — Founder profile & work"
            url="reputation360.in/arjun-mehta"
            badge={<TrendBadge up value="+5" />}
          />
          <ResultPositive
            num="02"
            title="Financial Times — Advisory board announcement"
            url="ft.com/arcadia-advisory"
            badge={<span className="font-heading text-[10px] font-bold sm:text-[11px]">NEW</span>}
          />
          <ResultPositive
            num="03"
            title="LinkedIn — Arjun Mehta · Founder"
            url="linkedin.com/in/arjunmehta"
            badge={<TrendBadge up value="+2" />}
          />
        </ul>

        {/* Page break */}
        <div className="relative my-4 flex items-center gap-3 sm:my-5">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-600 to-slate-600" />
          <span className="font-heading text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
            Page break
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-slate-600 to-slate-600" />
        </div>

        {/* Suppressed result */}
        <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3 opacity-60 sm:p-3.5">
          <div className="flex gap-3">
            <span className="w-7 shrink-0 pt-0.5 text-right font-heading text-xs font-bold tabular-nums text-slate-500">
              08
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-body text-[13px] leading-snug text-slate-400 sm:text-sm">
                Outdated legal filing — 2019
              </p>
              <p className="mt-0.5 truncate font-body text-[11px] text-slate-600">
                olddirectory.co/filing-2019
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-0.5 self-start rounded-md border border-red-900/60 bg-red-950/50 px-2 py-0.5 font-heading text-[10px] font-bold text-red-300 sm:text-[11px]">
              <TrendingDown className="h-3 w-3" aria-hidden />
              -7
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-5 flex flex-wrap items-baseline justify-center gap-x-2 gap-y-1 border-t border-white/10 pt-4 text-center sm:justify-start sm:text-left">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#4CAF50] shadow-[0_0_8px_rgba(76,175,80,0.7)]" />
            <span className="font-heading text-[10px] font-bold uppercase tracking-[0.14em] text-white sm:text-[11px]">
              Live monitoring
            </span>
          </span>
          <span className="font-body text-[11px] text-slate-400 sm:text-xs">
            Strategy, content & search —{" "}
            <span className="font-semibold text-white">one team.</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function TrendBadge({ up, value }) {
  return (
    <span className="inline-flex items-center gap-0.5 rounded-md border border-emerald-500/35 bg-emerald-500/10 px-1.5 py-0.5 font-heading text-[10px] font-bold text-emerald-300 sm:text-[11px]">
      {up ? <TrendingUp className="h-3 w-3" aria-hidden /> : null}
      {value}
    </span>
  );
}

function ResultPositive({ num, title, url, badge }) {
  return (
    <li>
      <div className="rounded-xl border border-emerald-500/25 bg-[#0d1829]/90 p-3 shadow-sm ring-1 ring-emerald-500/10 sm:p-3.5">
        <div className="flex gap-3">
          <span className="w-7 shrink-0 pt-0.5 text-right font-heading text-xs font-bold tabular-nums text-[#4CAF50]">
            {num}
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-body text-[13px] leading-snug text-white sm:text-sm">{title}</p>
            <p className="mt-0.5 truncate font-body text-[11px] text-[#4CAF50] sm:text-xs">{url}</p>
          </div>
          <div className="flex shrink-0 items-start">{badge}</div>
        </div>
      </div>
    </li>
  );
}
