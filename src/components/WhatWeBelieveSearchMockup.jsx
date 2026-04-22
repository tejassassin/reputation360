import { Search, TrendingDown, TrendingUp } from "lucide-react";

/** Demo identity - US-style name for the SERP mockup in “What we believe”. */
const DEMO_NAME = "Jordan Mercer";
const DEMO_SLUG = "jordan-mercer";

/** Muted “breadcrumb” style so path text does not read as hyperlinks (no link color). */
const urlMetaClass =
  "cursor-default truncate font-mono text-[11px] leading-snug tracking-tight text-slate-500 sm:text-xs";

/**
 * Breaks plain-text URL patterns so browsers / extensions are less likely to treat
 * strings as navigable links (still looks identical).
 */
function urlDisplayText(text) {
  return text.replace(/([./])/g, "$1\u200b");
}

/** SERP mockup - decorative only; not interactive (see pointer-events-none). */
export default function WhatWeBelieveSearchMockup() {
  return (
    <div
      className="pointer-events-none relative flex h-full min-h-full flex-col overflow-hidden rounded-2xl border border-[#1e3a5f]/80 bg-[#0a1220] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.45)]"
      data-r360-serp-mockup=""
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.22) 1px, transparent 0)",
          backgroundSize: "14px 14px",
        }}
        aria-hidden
      />

      <div className="absolute right-3 top-3 z-10 sm:right-4 sm:top-4">
        <span className="inline-flex rounded-full border border-white/20 bg-white px-3 py-1.5 font-heading text-[10px] font-bold uppercase tracking-wide text-[#1F3B64] shadow sm:text-[11px]">
          After · 11 months
        </span>
      </div>

      <div className="relative flex flex-1 flex-col px-4 pb-4 pt-12 sm:px-5 sm:pb-5 sm:pt-14">
        <div className="mb-3 flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#0f1c30] px-3 py-2.5 sm:gap-3 sm:px-4">
          <Search className="h-4 w-4 shrink-0 text-slate-400" strokeWidth={2} aria-hidden />
          <p className="min-w-0 flex-1 text-left text-sm text-white sm:text-base">
            <span className="font-medium">{DEMO_NAME.toLowerCase()}</span>{" "}
            <span className="font-normal text-slate-300">founder</span>
          </p>
          <span className={`shrink-0 ${urlMetaClass}`}>{urlDisplayText("google.com")}</span>
        </div>

        <ul className="space-y-2 sm:space-y-2.5">
          <ResultPositive
            num="01"
            title={`${DEMO_NAME} - Founder profile & work`}
            url={`meridian-analytics.com/leadership/${DEMO_SLUG}`}
            badge={<TrendBadge up value="+5" />}
          />
          <ResultPositive
            num="02"
            title="Financial Times - Advisory board announcement"
            url="ft.com/arcadia-advisory"
            badge={
              <span className="font-heading text-[10px] font-bold text-slate-200 sm:text-[11px]">
                NEW
              </span>
            }
          />
          <ResultPositive
            num="03"
            title={`LinkedIn - ${DEMO_NAME} · Founder`}
            url={`linkedin.com/in/${DEMO_SLUG}`}
            badge={<TrendBadge up value="+2" />}
          />
        </ul>

        <div className="relative my-2.5 flex items-center gap-2 sm:my-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-600 to-slate-600" />
          <span className="font-heading text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400 sm:text-[10px]">
            Page break · deeper SERP
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-slate-600 to-slate-600" />
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.06] p-3 sm:p-3.5">
          <div className="flex gap-2.5 sm:gap-3">
            <span className="w-7 shrink-0 pt-0.5 text-right font-heading text-xs font-bold tabular-nums text-slate-400 sm:text-sm">
              08
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-body text-sm leading-snug text-slate-200 sm:text-base">
                Outdated legal filing - 2019
              </p>
              <p className={`mt-0.5 ${urlMetaClass}`}>
                {urlDisplayText("olddirectory.co/filing-2019")}
              </p>
              <p className="mt-1.5 font-body text-xs leading-snug text-slate-300 sm:text-sm">
                ~2 pages lower - most users never scroll that far.
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-0.5 self-start rounded border border-red-900/60 bg-red-950/50 px-2 py-1 font-heading text-[10px] font-bold text-red-300 sm:text-[11px]">
              <TrendingDown className="h-3 w-3" aria-hidden />
              2 pgs
            </span>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap items-baseline justify-center gap-x-2 gap-y-1 border-t border-white/10 pt-3 text-center sm:justify-start sm:text-left">
          <span className="inline-flex items-center gap-1.5">
            <span
              className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-[#4CAF50] motion-reduce:animate-none"
              aria-hidden
            />
            <span className="font-heading text-[10px] font-bold uppercase tracking-[0.12em] text-white sm:text-[11px]">
              Live monitoring
            </span>
          </span>
          <span className="font-body text-xs text-slate-400 sm:text-sm">
            Strategy, content & search - <span className="font-semibold text-white">one team.</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function TrendBadge({ up, value }) {
  return (
    <span className="inline-flex items-center gap-0.5 rounded-md border border-emerald-500/35 bg-emerald-500/10 px-1.5 py-1 font-heading text-[10px] font-bold text-emerald-300 sm:text-[11px]">
      {up ? <TrendingUp className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden /> : null}
      {value}
    </span>
  );
}

function ResultPositive({ num, title, url, badge }) {
  return (
    <li>
      <div className="rounded-xl border border-emerald-500/25 bg-[#0d1829]/90 px-3 py-2.5 shadow-sm ring-1 ring-emerald-500/10 sm:px-3.5">
        <div className="flex gap-2.5 sm:gap-3">
          <span className="w-7 shrink-0 pt-0.5 text-right font-heading text-xs font-bold tabular-nums text-[#4CAF50] sm:text-sm">
            {num}
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-body text-sm leading-snug text-white sm:text-base">{title}</p>
            <p className={`mt-0.5 ${urlMetaClass}`}>{urlDisplayText(url)}</p>
          </div>
          <div className="flex shrink-0 items-start pt-0.5">{badge}</div>
        </div>
      </div>
    </li>
  );
}
