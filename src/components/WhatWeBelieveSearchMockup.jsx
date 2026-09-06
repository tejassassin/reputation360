import { useId, useState } from "react";
import { Search, TrendingDown, TrendingUp } from "lucide-react";
import {
  JORDAN_MERCER_AFTER_RESULTS,
  JORDAN_MERCER_BEFORE_RESULTS,
  JORDAN_MERCER_DEMO_NAME,
  JORDAN_MERCER_QUERY_TAIL,
} from "../data/jordanMercerSerpDemo.js";

export { WHAT_WE_BELIEVE_SERP_MOCKUP_ALT } from "../constants/imageAlt.js";

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

function homeBadge(row) {
  if (row.trend === "new") {
    return (
      <span className="font-heading text-[10px] font-bold text-slate-200 sm:text-[11px]">
        {row.value}
      </span>
    );
  }
  return <TrendBadge direction={row.trend} value={row.value} />;
}

/**
 * SERP mockup with Before / After toggle (decorative results only; toggle is interactive).
 */
export default function WhatWeBelieveSearchMockup() {
  const [phase, setPhase] = useState("after");
  const tablistId = useId();

  const isAfter = phase === "after";

  return (
    <div
      className="relative flex h-full min-h-full flex-col overflow-hidden rounded-2xl border border-navy/80 bg-navy shadow-[0_24px_48px_-12px_rgba(0,0,0,0.45)]"
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

      <div className="absolute right-3 top-3 z-20 sm:right-4 sm:top-4">
        <div
          id={tablistId}
          role="tablist"
          aria-label="Compare search results before and after the engagement"
          className="flex rounded-full border border-white/20 bg-navy/95 p-0.5 shadow-md backdrop-blur-sm"
        >
          <button
            type="button"
            role="tab"
            aria-selected={!isAfter}
            id={`${tablistId}-before`}
            aria-controls={`${tablistId}-panel`}
            onClick={() => setPhase("before")}
            className={[
              "min-h-[2.25rem] rounded-full px-2.5 py-1.5 font-heading text-[9px] font-bold uppercase tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4CAF50] sm:min-h-0 sm:px-3 sm:text-[10px]",
              !isAfter
                ? "bg-white text-[#1F3B64] shadow"
                : "text-slate-300 hover:bg-white/10 hover:text-white",
            ].join(" ")}
          >
            Before
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={isAfter}
            id={`${tablistId}-after`}
            aria-controls={`${tablistId}-panel`}
            onClick={() => setPhase("after")}
            className={[
              "min-h-[2.25rem] rounded-full px-2.5 py-1.5 font-heading text-[9px] font-bold uppercase tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4CAF50] sm:min-h-0 sm:px-3 sm:text-[10px]",
              isAfter
                ? "bg-white text-[#1F3B64] shadow"
                : "text-slate-300 hover:bg-white/10 hover:text-white",
            ].join(" ")}
          >
            After · 11 months
          </button>
        </div>
      </div>

      <div
        id={`${tablistId}-panel`}
        role="tabpanel"
        aria-labelledby={isAfter ? `${tablistId}-after` : `${tablistId}-before`}
        className="relative flex flex-1 flex-col px-4 pb-4 pt-12 sm:px-5 sm:pb-5 sm:pt-14"
      >
        <div className="mb-3 flex items-center gap-2.5 rounded-xl border border-white/10 bg-navy px-3 py-2.5 sm:gap-3 sm:px-4">
          <Search className="h-4 w-4 shrink-0 text-slate-400" strokeWidth={2} aria-hidden />
          <p className="min-w-0 flex-1 text-left text-sm text-white sm:text-base">
            <span className="font-medium">{JORDAN_MERCER_DEMO_NAME.toLowerCase()}</span>{" "}
            <span className="font-normal text-slate-300">{JORDAN_MERCER_QUERY_TAIL}</span>
          </p>
          <span className={`shrink-0 ${urlMetaClass}`}>{urlDisplayText("google.com")}</span>
        </div>

        <ul className="space-y-2 sm:space-y-2.5" key={phase}>
          {(isAfter ? JORDAN_MERCER_AFTER_RESULTS : JORDAN_MERCER_BEFORE_RESULTS).map((row) => (
            <SerpResultRow
              key={`${phase}-${row.num}`}
              variant={isAfter ? "positive" : "negative"}
              num={row.num}
              title={row.title}
              url={row.url}
              badge={homeBadge(row)}
            />
          ))}
        </ul>

        <div className="mt-3 flex items-center justify-center gap-x-2 border-t border-white/10 pt-3 text-center sm:justify-start sm:text-left">
          <span className="inline-flex items-center gap-1.5">
            <span
              className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-[#4CAF50] motion-reduce:animate-none"
              aria-hidden
            />
            <span className="font-heading text-[10px] font-bold uppercase tracking-[0.12em] text-white sm:text-[11px]">
              Live monitoring
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

function TrendBadge({ direction, value }) {
  const up = direction === "up";
  return (
    <span
      className={
        up
          ? "inline-flex items-center gap-0.5 rounded-md border border-emerald-500/35 bg-emerald-500/10 px-1.5 py-1 font-heading text-[10px] font-bold text-emerald-300 sm:text-[11px]"
          : "inline-flex items-center gap-0.5 rounded-md border border-red-500/40 bg-red-950/40 px-1.5 py-1 font-heading text-[10px] font-bold text-red-200 sm:text-[11px]"
      }
    >
      {up ? (
        <TrendingUp className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden />
      ) : (
        <TrendingDown className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden />
      )}
      {value}
    </span>
  );
}

function SerpResultRow({ variant, num, title, url, badge }) {
  const positive = variant === "positive";
  return (
    <li>
      <div
        className={
          positive
            ? "rounded-xl border border-emerald-500/25 bg-navy/90 px-3 py-2.5 shadow-sm ring-1 ring-emerald-500/10 sm:px-3.5"
            : "rounded-xl border border-red-500/25 bg-navy/90 px-3 py-2.5 shadow-sm ring-1 ring-red-500/10 sm:px-3.5"
        }
      >
        <div className="flex gap-2.5 sm:gap-3">
          <span
            className={
              positive
                ? "w-7 shrink-0 pt-0.5 text-right font-heading text-xs font-bold tabular-nums text-[#4CAF50] sm:text-sm"
                : "w-7 shrink-0 pt-0.5 text-right font-heading text-xs font-bold tabular-nums text-red-400 sm:text-sm"
            }
          >
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
