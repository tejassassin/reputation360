import { useId, useState } from "react";
import { Search, TrendingUp } from "lucide-react";
import {
  JORDAN_MERCER_AFTER_RESULTS,
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
 * SERP mockup with Before / After control (decorative; results stay the positive set).
 */
export default function WhatWeBelieveSearchMockup() {
  const [phase, setPhase] = useState("after");
  const tablistId = useId();

  const isAfter = phase === "after";

  return (
    <div
      className="r360-serp-mockup relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0A111B] shadow-[0_16px_32px_-12px_rgba(0,0,0,0.4)]"
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

      <div className="absolute right-2.5 top-2.5 z-20 sm:right-3 sm:top-3">
        <div
          id={tablistId}
          role="tablist"
          aria-label="Compare search results before and after"
          className="flex rounded-full border border-white/15 bg-[#111827]/95 p-0.5 shadow-sm backdrop-blur-sm"
        >
          <button
            type="button"
            role="tab"
            aria-selected={!isAfter}
            id={`${tablistId}-before`}
            aria-controls={`${tablistId}-panel`}
            onClick={() => setPhase("before")}
            className={[
              "min-h-[2rem] rounded-full px-2 py-1 font-heading text-[9px] font-bold uppercase tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4CAF50] sm:min-h-0 sm:px-2.5 sm:py-1 sm:text-[10px]",
              !isAfter
                ? "bg-white text-[#0A111B] shadow"
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
              "min-h-[2rem] rounded-full px-2 py-1 font-heading text-[9px] font-bold uppercase tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4CAF50] sm:min-h-0 sm:px-2.5 sm:py-1 sm:text-[10px]",
              isAfter
                ? "bg-white text-[#0A111B] shadow"
                : "text-slate-300 hover:bg-white/10 hover:text-white",
            ].join(" ")}
          >
            After
          </button>
        </div>
      </div>

      <div
        id={`${tablistId}-panel`}
        role="tabpanel"
        aria-labelledby={isAfter ? `${tablistId}-after` : `${tablistId}-before`}
        className="r360-serp-mockup-panel relative flex min-h-0 flex-1 flex-col px-3.5 pb-3 pt-9 sm:px-4 sm:pb-3.5 sm:pt-10 lg:px-4 lg:pb-3 lg:pt-9"
      >
        <div className="mb-2 flex items-center gap-2 rounded-xl border border-white/[0.08] bg-[#17212F] px-3 py-2 sm:gap-2.5 sm:px-3.5 lg:py-1.5">
          <Search className="h-4 w-4 shrink-0 text-slate-400" strokeWidth={2} aria-hidden />
          <p className="min-w-0 flex-1 text-left text-sm text-white sm:text-base">
            <span className="font-medium">{JORDAN_MERCER_DEMO_NAME.toLowerCase()}</span>{" "}
            <span className="font-normal text-slate-300">{JORDAN_MERCER_QUERY_TAIL}</span>
          </p>
          <span className={`shrink-0 ${urlMetaClass}`}>{urlDisplayText("google.com")}</span>
        </div>

        <ul className="space-y-1.5 sm:space-y-2 lg:space-y-1.5">
          {JORDAN_MERCER_AFTER_RESULTS.map((row) => (
            <SerpResultRow
              key={row.num}
              num={row.num}
              title={row.title}
              url={row.url}
              badge={homeBadge(row)}
            />
          ))}
        </ul>

        <div className="mt-2 flex items-center justify-center gap-x-2 border-t border-white/10 pt-2 text-center sm:justify-start sm:text-left lg:mt-1.5 lg:pt-2">
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
  return (
    <span className="inline-flex items-center gap-0.5 rounded-md border border-emerald-500/35 bg-emerald-500/10 px-1.5 py-1 font-heading text-[10px] font-bold text-emerald-300 sm:text-[11px]">
      <TrendingUp className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden />
      {value}
    </span>
  );
}

function SerpResultRow({ num, title, url, badge }) {
  return (
    <li>
      <div className="rounded-xl border border-[#1B2E2A] bg-[#141C2B] px-3 py-2.5 shadow-sm sm:px-3.5 lg:py-2">
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
