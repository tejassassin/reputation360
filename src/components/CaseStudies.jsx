import { useMemo, useRef } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Clock3 } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { CASE_STUDIES, CASE_STUDIES_FOOTER } from "@/data/caseStudies/index.js";
import { getOutcomeAndKeyPoints } from "@/utils/caseStudyGlimpse.js";
import { parseEngagementMonths } from "@/utils/parseEngagement.js";

const GLIMPSE_COUNT = 5;
const SCROLL_PAD = 0.86;

const NAV_BTN =
  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/90 bg-white text-slate-700 shadow-sm transition hover:border-[#4CAF50]/45 hover:bg-gradient-to-b hover:from-white hover:to-slate-50/90 hover:shadow-md hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CAF50]/30 active:scale-[0.98] sm:h-12 sm:w-12";

/** Hover lift + tint for profile / duration / outcome (visual only; not links). */
const CASE_FIELD_HOVER =
  "group/field rounded-xl border border-transparent p-2.5 -m-2.5 transition duration-200 ease-out will-change-transform motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:hover:shadow-none hover:-translate-y-0.5 hover:border-slate-200/80 hover:bg-gradient-to-br hover:from-white hover:via-slate-50/80 hover:to-[#f0f7f4]/90 hover:shadow-[0_8px_24px_-8px_rgba(31,59,100,0.14)] hover:ring-1 hover:ring-[#4CAF50]/15";

function engagementLabel(eng) {
  if (eng.value && eng.unit) return `${eng.value} ${eng.unit}`;
  return eng.full;
}

/**
 * Outcome for the “Outcome” field: enough for ~3 lines on the card.
 */
function outcomePreview(outcome) {
  if (typeof outcome !== "string") return "";
  const t = outcome.replace(/\s+/g, " ").trim();
  if (t.length <= 160) return t;
  return t.slice(0, 159).replace(/\s+\S*$/, "") + "…";
}

function sortedByN(studies) {
  return [...studies].sort((a, b) => a.n - b.n);
}

function CaseStudies() {
  const reduce = useReducedMotion();
  const scrollerRef = useRef(null);
  const cards = useMemo(
    () => sortedByN(CASE_STUDIES).slice(0, GLIMPSE_COUNT),
    [],
  );
  const total = CASE_STUDIES.length;

  const scroll = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const step = Math.min(el.clientWidth * SCROLL_PAD, 420);
    el.scrollBy({ left: dir * step, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section
      className="relative overflow-hidden border-t border-slate-200/70 bg-gradient-to-b from-white via-[#f3f6fa] to-offwhite"
      aria-labelledby="home-glimpse-cases-heading"
    >
      <div
        className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-[#4CAF50]/[0.11] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#1f3b64]/[0.08] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-8 text-center sm:mb-10">
          <h2
            id="home-glimpse-cases-heading"
            className="font-heading text-3xl font-bold tracking-tight sm:text-4xl"
          >
            <span className="text-navy">Case </span>
            <span className="bg-gradient-to-r from-[#2a6b3a] via-[#4CAF50] to-[#2E5B88] bg-clip-text text-transparent">
              studies
            </span>
          </h2>
          <div
            className="mx-auto mt-4 h-0.5 w-20 max-w-full rounded-full bg-gradient-to-r from-[#4CAF50] to-[#2E5B88] sm:mt-5"
            aria-hidden
          />
        </div>

        <div className="mt-0 flex min-w-0 items-stretch justify-center gap-1 sm:mt-10 sm:gap-2 md:mt-12 md:gap-3">
          <button
            type="button"
            onClick={() => scroll(-1)}
            className={`${NAV_BTN} hidden flex-shrink-0 self-center md:inline-flex`}
            aria-label="Show previous case studies"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2.25} />
          </button>

          <ul
            ref={scrollerRef}
            className="mx-auto flex min-w-0 list-none items-stretch gap-4 overflow-x-auto scroll-px-4 [scrollbar-width:none] snap-x snap-mandatory [scroll-snap-type:x_mandatory] sm:gap-5 sm:px-0 md:px-0 [&::-webkit-scrollbar]:hidden"
            style={{
              paddingLeft: "max(1rem, env(safe-area-inset-left))",
              paddingRight: "max(1rem, env(safe-area-inset-right))",
            }}
            role="list"
            aria-label="Case study cards, scroll horizontally"
          >
            {cards.map((study) => {
              const { outcome: rawOut } = getOutcomeAndKeyPoints(study);
              const out = outcomePreview(rawOut);
              const eng = parseEngagementMonths(study.duration);
              const engText = engagementLabel(eng);
              const hasDuration = Boolean(engText && engText !== "—");
              const href = `/case-studies/${study.slug}`;

              const fieldLabelClass =
                "m-0 font-heading text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#2E5B88]/90";

              return (
                <li
                  key={study.n}
                  className="w-[min(19.5rem,calc(100vw-2.25rem))] max-w-full shrink-0 snap-start sm:w-80"
                >
                  <article
                    className="r360-cs-tile group/card flex h-full min-h-[20rem] flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-gradient-to-b from-white via-white to-slate-50/60 text-left shadow-[0_4px_28px_-10px_rgba(31,59,100,0.14)] ring-1 ring-slate-200/30 transition duration-300 hover:-translate-y-0.5 hover:border-slate-300/60 hover:shadow-[0_24px_44px_-22px_rgba(31,59,100,0.22)] motion-reduce:transition-shadow motion-reduce:hover:translate-y-0 sm:min-h-[21rem]"
                    aria-label={`Case study: ${study.listTitle}`}
                  >
                    <div
                      className="h-1.5 w-full bg-gradient-to-r from-[#1b4d2e] via-[#4CAF50] to-[#2E5B88]"
                      aria-hidden
                    />
                    <div className="flex min-h-0 flex-1 flex-col p-5 sm:p-6">
                      <h3 className="line-clamp-2 font-heading text-base font-bold leading-snug text-navy [text-wrap:balance] sm:text-[1.05rem]">
                        {study.listTitle}
                      </h3>
                      <p className="mt-2 inline-flex max-w-full [text-wrap:balance]">
                        <span className="rounded-full bg-gradient-to-r from-[#1f3b64]/[0.07] to-slate-100/80 px-2.5 py-0.5 text-left text-[0.7rem] font-semibold leading-tight text-slate-600 ring-1 ring-slate-200/60 sm:px-3 sm:text-xs">
                          {study.industry}
                        </span>
                      </p>

                      <div className="mt-4 flex min-h-0 flex-1 flex-col gap-2 sm:gap-2.5">
                        <div className={CASE_FIELD_HOVER}>
                          <p className={fieldLabelClass}>Profile</p>
                          <p className="mt-1 line-clamp-3 font-body text-sm leading-relaxed text-slate-800 [text-wrap:pretty]">
                            {study.profile}
                          </p>
                        </div>
                        <div className={CASE_FIELD_HOVER}>
                          <p className={fieldLabelClass}>Duration</p>
                          {hasDuration ? (
                            <p className="mt-1.5 flex items-baseline gap-1.5 font-body text-sm font-medium tabular-nums text-slate-800">
                              <Clock3
                                className="h-4 w-4 shrink-0 text-slate-400 transition-colors duration-200 group-hover/field:text-slate-600"
                                strokeWidth={2}
                                aria-hidden
                              />
                              {engText}
                            </p>
                          ) : (
                            <p className="mt-1.5 font-body text-sm text-slate-500">—</p>
                          )}
                        </div>
                        <div className={CASE_FIELD_HOVER}>
                          <p className={fieldLabelClass}>Outcome</p>
                          {out ? (
                            <p className="mt-1.5 line-clamp-3 border-l-[3px] border-[#4CAF50]/50 pl-3.5 font-body text-sm leading-relaxed text-slate-800 [text-wrap:pretty] transition-[border-color] duration-200 sm:leading-[1.5] group-hover/field:border-[#4CAF50]">
                              {out}
                            </p>
                          ) : (
                            <p className="mt-1.5 font-body text-sm text-slate-500">
                              —
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="mt-auto border-t border-slate-200/70 bg-gradient-to-r from-transparent via-slate-50/40 to-transparent pt-4 sm:pt-4">
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Opens in a new tab"
                          aria-label={`Read the full case study: ${study.listTitle} (opens in new tab)`}
                          className="group/cta inline-flex w-full max-w-full items-center justify-center gap-1.5 rounded-lg border border-navy/15 bg-gradient-to-b from-white to-slate-50/90 px-3 py-2.5 text-sm font-semibold text-navy shadow-sm transition duration-200 ease-out will-change-transform motion-reduce:transition-transform hover:-translate-y-0.5 hover:scale-[1.01] hover:border-[#4CAF50]/55 hover:bg-gradient-to-b hover:from-white hover:via-white hover:to-[#f0faf4] hover:shadow-md active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4CAF50] sm:px-3.5 sm:py-2.5"
                        >
                          Read the case
                          <span
                            className="grid h-5 w-5 place-items-center rounded-md bg-navy/5 text-navy transition duration-200 group-hover/cta:bg-[#4CAF50]/15 group-hover/cta:text-navy motion-reduce:group-hover/cta:translate-y-0 motion-reduce:group-hover/cta:translate-x-0"
                            aria-hidden
                          >
                            <ArrowUpRight
                              className="h-3.5 w-3.5 transition duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                              strokeWidth={2.25}
                            />
                          </span>
                        </a>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={() => scroll(1)}
            className={`${NAV_BTN} hidden flex-shrink-0 self-center md:inline-flex`}
            aria-label="Show more case studies"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2.25} />
          </button>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 sm:mt-5 md:hidden">
          <button
            type="button"
            onClick={() => scroll(-1)}
            className={NAV_BTN}
            aria-label="Show previous case studies"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2.25} />
          </button>
          <div
            className="mx-1 h-1 w-12 rounded-full bg-slate-200/90"
            aria-hidden
          />
          <button
            type="button"
            onClick={() => scroll(1)}
            className={NAV_BTN}
            aria-label="Show more case studies"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2.25} />
          </button>
        </div>

        <div className="mt-10 text-center sm:mt-12">
          <a
            href="/case-studies"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/90 px-5 py-2.5 font-heading text-sm font-bold text-slate shadow-md ring-1 ring-slate-200/50 transition hover:-translate-y-0.5 hover:border-[#4CAF50]/45 hover:from-white hover:to-[#f0faf4] hover:shadow-lg hover:ring-[#4CAF50]/20"
          >
            All {total} case studies
            <ArrowUpRight
              className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2.25}
              aria-hidden
            />
          </a>
        </div>

        <div
          className="mx-auto mt-8 flex w-full max-w-6xl justify-center overflow-x-auto [scrollbar-gutter:stable] [scrollbar-width:thin] sm:mt-10"
          style={{ scrollbarColor: "rgba(100,116,139,0.4) rgba(241,245,249,0.5)" }}
        >
          <p
            className="w-max min-w-0 text-nowrap rounded-2xl border border-slate-200/50 bg-white/50 px-4 py-3 text-center font-body text-sm text-steel shadow-[0_1px_0_0_rgba(255,255,255,0.8)_inset] backdrop-blur-[2px] sm:px-5 sm:py-4"
          >
            {CASE_STUDIES_FOOTER}
          </p>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
