import { useEffect, useRef, useState } from "react";
import { Search, TrendingDown, TrendingUp } from "lucide-react";

/** Placeholder name for the interactive demo (US-centric). */
const DEMO_NAME = "Jordan Mercer";
const QUERY_TAIL = "executive";

/**
 * Interactive Google-style SERP mockup: Before (negative first page) vs After (positive first page),
 * with scrollable “pages” inside the card.
 */
export default function AboutHeroSearchMockup({ headlineFont: hf }) {
  const [phase, setPhase] = useState("after");
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = 0;
  }, [phase]);

  const queryDisplay = (
    <>
      <span className="font-medium text-[#202124]">{DEMO_NAME.toLowerCase()}</span>{" "}
      <span className="text-[#70757a]">{QUERY_TAIL}</span>
    </>
  );

  return (
    <div className="relative w-full" data-reputation360-hero-visual="search-mockup-interactive">
      <div
        className="pointer-events-none absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-[#4CAF50]/12 via-transparent to-[#2E5B88]/22 blur-xl"
        aria-hidden
      />

      <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#0d1628] shadow-[0_28px_80px_-24px_rgba(0,0,0,0.65)] ring-1 ring-white/10">
        {/* Chrome + controls */}
        <div className="relative border-b border-white/10 bg-[#0f1f35] px-3 py-3 sm:px-4">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <div
              className="inline-flex rounded-full border border-white/15 bg-black/25 p-0.5"
              role="tablist"
              aria-label="Compare search landscape"
            >
              <button
                type="button"
                role="tab"
                aria-selected={phase === "before"}
                onClick={() => setPhase("before")}
                className={`${hf} rounded-full px-3 py-1.5 text-[11px] font-semibold transition sm:px-4 sm:text-xs ${
                  phase === "before"
                    ? "bg-white text-[#0a1628] shadow"
                    : "text-white/65 hover:bg-white/10 hover:text-white"
                }`}
              >
                Before
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={phase === "after"}
                onClick={() => setPhase("after")}
                className={`${hf} rounded-full px-3 py-1.5 text-[11px] font-semibold transition sm:px-4 sm:text-xs ${
                  phase === "after"
                    ? "bg-white text-[#0a1628] shadow"
                    : "text-white/65 hover:bg-white/10 hover:text-white"
                }`}
              >
                After
              </button>
            </div>
            <span
              className={`${hf} inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide sm:text-[10px] ${
                phase === "after"
                  ? "border-[#4CAF50]/40 bg-[#4CAF50]/15 text-emerald-200"
                  : "border-white/20 bg-white/10 text-white/70"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${phase === "after" ? "bg-[#4CAF50]" : "bg-amber-400"}`}
                aria-hidden
              />
              {phase === "after" ? "After · 11 weeks" : "Baseline snapshot"}
            </span>
          </div>

          {/* Google-style search bar */}
          <div className="flex items-center gap-2 rounded-full border border-[#dadce0] bg-white px-3 py-2 shadow-sm sm:gap-3 sm:px-4">
            <Search className="h-4 w-4 shrink-0 text-[#9aa0a6]" strokeWidth={2} aria-hidden />
            <p className="min-w-0 flex-1 truncate text-left text-[13px] sm:text-[14px]">{queryDisplay}</p>
            <span className={`${hf} hidden shrink-0 text-[10px] text-[#70757a] sm:inline`}>Google</span>
          </div>
        </div>

        {/* Scrollable “SERP pages” */}
        <div
          ref={scrollRef}
          className="max-h-[min(380px,52vh)] overflow-y-auto overscroll-contain bg-[#f8f9fa] [scrollbar-gutter:stable]"
          aria-label="Sample Google results — scroll to see page 2"
        >
          {phase === "before" ? (
            <BeforeSerp hf={hf} />
          ) : (
            <AfterSerp hf={hf} />
          )}

          <div className="sticky bottom-0 border-t border-[#dadce0] bg-[#f8f9fa]/95 px-3 py-2 backdrop-blur-sm">
            <p className={`${hf} text-center text-[10px] text-[#70757a]`}>
              Scroll inside the results to see more pages — same query, different landscape.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center border-t border-white/10 bg-[#0f1f35] px-3 py-2.5 sm:px-4">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#4CAF50]" aria-hidden />
            <span className={`${hf} text-[10px] font-bold uppercase tracking-[0.12em] text-[#4CAF50] sm:text-[11px]`}>
              Live monitoring
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

function GooglePagination() {
  return (
    <div className="flex flex-col items-center gap-2 py-4">
      <div className="flex items-end gap-0.5 text-[#1a0dab]">
        <span className="text-xl font-bold leading-none">G</span>
        <span className="text-lg font-bold leading-none">o</span>
        <span className="text-base font-bold leading-none">o</span>
        <span className="text-sm font-bold leading-none">o</span>
        <span className="text-xs font-bold leading-none">o</span>
        <span className="text-[10px] font-bold leading-none">o</span>
        <span className="text-[10px] font-bold leading-none">o</span>
        <span className="text-xl font-bold leading-none">g</span>
        <span className="text-xl font-bold leading-none">l</span>
        <span className="text-xl font-bold leading-none">e</span>
      </div>
      <div className="flex items-center gap-1 text-xs">
        <span className="font-bold text-[#202124]">1</span>
        <button type="button" className="text-[#1a0dab] hover:underline">
          2
        </button>
        <button type="button" className="text-[#1a0dab] hover:underline">
          3
        </button>
        <span className="text-[#70757a]">…</span>
        <button type="button" className="text-[#1a0dab] hover:underline">
          Next
        </button>
      </div>
    </div>
  );
}

function BeforeSerp({ hf }) {
  const bad = [
    {
      t: `Forum thread re: ${DEMO_NAME} — unverified claims`,
      u: "complaintsboard.com › threads › ...",
      s: "Anonymous posts from 2016 resurfacing in search snippets…",
      n: -6,
    },
    {
      t: `Court filing mentions ${DEMO_NAME} (dismissed case)`,
      u: "publicrecords.io › docket › ...",
      s: "PDF from an old matter that no longer reflects the full story.",
      n: -5,
    },
    {
      t: `${DEMO_NAME} — negative opinion piece`,
      u: "regionalpost.com › opinion › ...",
      s: "Editorial framing that omits later context and outcomes.",
      n: -4,
    },
    {
      t: `Scraped profile — outdated title for ${DEMO_NAME}`,
      u: "data-agg.site › profile › ...",
      s: "Third-party aggregator with wrong employer and year.",
      n: -5,
    },
    {
      t: `“${DEMO_NAME}” — unmoderated Q&A thread`,
      u: "oldforum.net › archive › ...",
      s: "Dead forum page still ranking on page one.",
      n: -7,
    },
  ];
  const page2 = [
    {
      t: `Alumni note mentioning ${DEMO_NAME}`,
      u: "university.edu › alumni › ...",
      s: "Benign but incomplete; competes with more relevant profiles.",
      n: -2,
    },
    {
      t: `Sponsored directory — duplicate listing`,
      u: "bizlistings.co › ...",
      s: "Low-quality citation cluttering branded queries.",
      n: -3,
    },
  ];

  return (
    <div className="px-3 pb-2 pt-3 sm:px-4">
      <p className={`${hf} mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#70757a]`}>
        Page 1 — first screen
      </p>
      <ul className="space-y-3">
        {bad.map((r, i) => (
          <li key={i}>
            <NegativeResultRow {...r} hf={hf} idx={i + 1} />
          </li>
        ))}
      </ul>

      <GooglePagination />

      <p className={`${hf} mb-3 mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#70757a]`}>
        Page 2
      </p>
      <ul className="space-y-3 pb-3">
        {page2.map((r, i) => (
          <li key={i}>
            <NegativeResultRow {...r} hf={hf} idx={i + 6} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function AfterSerp({ hf }) {
  const good = [
    {
      t: `${DEMO_NAME} — Leadership & board roles`,
      u: "linkedin.com › in › jordan-mercer",
      s: "Updated headline, experience, and recommendations aligned with your narrative.",
      tag: "+4",
    },
    {
      t: `${DEMO_NAME} — Company leadership team`,
      u: "meridian-analytics.com › leadership",
      s: "Official bio on a domain you control, with structured data for search.",
      tag: "NEW",
    },
    {
      t: `Industry profile: ${DEMO_NAME}`,
      u: "tradejournal.org › profiles › ...",
      s: "Balanced coverage citing primary sources and recent milestones.",
      tag: "+3",
    },
    {
      t: `Keynote — ${DEMO_NAME} on responsible growth`,
      u: "conference.io › agenda › ...",
      s: "Authoritative event page with video and transcript excerpts.",
      tag: "+2",
    },
    {
      t: `Nonprofit board — ${DEMO_NAME}`,
      u: "brightfuture.org › board",
      s: "Mission-aligned visibility that reinforces trust signals.",
      tag: "+2",
    },
  ];
  const pushedDown = {
    t: "Old aggregator snippet — superseded",
    u: "data-agg.site › profile › ...",
    s: "This result now sits far below accurate, authoritative pages.",
  };

  return (
    <div className="px-3 pb-2 pt-3 sm:px-4">
      <p className={`${hf} mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1e8e3e]`}>
        Page 1 — first screen (recovered)
      </p>
      <ul className="space-y-3">
        {good.map((r, i) => (
          <li key={i}>
            <PositiveResultRow {...r} hf={hf} idx={i + 1} />
          </li>
        ))}
      </ul>

      <GooglePagination />

      <p className={`${hf} mb-3 mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#70757a]`}>
        Deeper results
      </p>
      <div className="rounded-lg border border-dashed border-[#dadce0] bg-white/80 p-3 opacity-80">
        <div className="flex gap-2">
          <span className={`${hf} w-6 shrink-0 pt-0.5 text-right text-[11px] font-bold tabular-nums text-[#70757a]`}>
            12
          </span>
          <div className="min-w-0">
            <p className="text-[15px] leading-snug text-[#1a0dab] line-through decoration-[#70757a]">{pushedDown.t}</p>
            <p className="mt-0.5 truncate text-xs text-[#006621] line-through opacity-70">{pushedDown.u}</p>
            <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-[#4d5156]">{pushedDown.s}</p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-0.5 self-start rounded border border-red-200 bg-red-50 px-1.5 py-0.5 text-[10px] font-bold text-red-700">
            <TrendingDown className="h-3 w-3" aria-hidden />
            buried
          </span>
        </div>
      </div>
      <p className={`${hf} py-4 text-center text-[11px] text-[#70757a]`}>
        Negative pages are displaced beyond where most people look.
      </p>
    </div>
  );
}

function NegativeResultRow({ t, u, s, n, hf, idx }) {
  return (
    <button
      type="button"
      className="w-full rounded-lg border-l-4 border-red-500 bg-red-50/90 text-left shadow-sm ring-1 ring-red-100 transition hover:bg-red-50"
    >
      <div className="flex gap-2 p-2.5 sm:gap-3 sm:p-3">
        <span className={`${hf} w-6 shrink-0 pt-0.5 text-right text-[11px] font-bold tabular-nums text-red-700 sm:w-7`}>
          {String(idx).padStart(2, "0")}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[15px] leading-snug text-[#1a0dab] hover:underline">{t}</p>
          <p className="mt-0.5 truncate text-xs text-[#006621]">{u}</p>
          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-[#4d5156]">{s}</p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-0.5 self-start rounded border border-red-200 bg-white px-1.5 py-0.5 text-[10px] font-bold text-red-700">
          <TrendingDown className="h-3 w-3" aria-hidden />
          {n}
        </span>
      </div>
    </button>
  );
}

function PositiveResultRow({ t, u, s, tag, hf, idx }) {
  const isNew = tag === "NEW";
  return (
    <button
      type="button"
      className="w-full rounded-lg border-l-4 border-[#34a853] bg-emerald-50/80 text-left shadow-sm ring-1 ring-emerald-100/80 transition hover:bg-emerald-50"
    >
      <div className="flex gap-2 p-2.5 sm:gap-3 sm:p-3">
        <span className={`${hf} w-6 shrink-0 pt-0.5 text-right text-[11px] font-bold tabular-nums text-[#188038] sm:w-7`}>
          {String(idx).padStart(2, "0")}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[15px] leading-snug text-[#1a0dab] hover:underline">{t}</p>
          <p className="mt-0.5 truncate text-xs text-[#006621]">{u}</p>
          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-[#4d5156]">{s}</p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-0.5 self-start rounded border border-emerald-200 bg-white px-1.5 py-0.5 text-[10px] font-bold text-[#188038]">
          {isNew ? (
            tag
          ) : (
            <>
              <TrendingUp className="h-3 w-3" aria-hidden />
              {tag}
            </>
          )}
        </span>
      </div>
    </button>
  );
}
