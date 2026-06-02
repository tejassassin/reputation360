import { useMemo, useRef } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Clock3, User, ShieldCheck } from "lucide-react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion.js";
import { CASE_STUDIES, CASE_STUDIES_FOOTER } from "@/data/caseStudies/index.js";
import { getOutcomeAndKeyPoints } from "@/utils/caseStudyGlimpse.js";
import { parseEngagementMonths } from "@/utils/parseEngagement.js";
import { internalAnchorProps } from "@/lib/internalLinkProps.js";

const GLIMPSE_COUNT = 5;
const SCROLL_PAD = 0.86;

const NAV_BTN =
  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white shadow-sm transition hover:border-[#4CAF50]/45 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CAF50]/30 active:scale-[0.98] sm:h-12 sm:w-12";


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
  const reduce = usePrefersReducedMotion();
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
      className="relative overflow-hidden border-t border-slate-900/40 bg-gradient-to-b from-[#0F1E36] to-[#0A1424] text-white py-16 md:py-20"
      aria-labelledby="home-glimpse-cases-heading"
    >
      <div
        className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-[#4CAF50]/[0.08] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#1f3b64]/[0.05] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 pt-12 pb-2 sm:px-6 sm:pt-16 sm:pb-3">
        <div className="mb-8 text-center sm:mb-10">
          <h2
            id="home-glimpse-cases-heading"
            className="font-heading text-3xl font-bold tracking-tight sm:text-4xl"
          >
            <span className="text-white">Reputation Management </span>
            <span className="bg-gradient-to-r from-[#4CAF50] via-[#81C784] to-[#64B5F6] bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>
          <div
            className="mx-auto mt-4 h-0.5 w-20 max-w-full rounded-full bg-gradient-to-r from-[#4CAF50] to-[#2E5B88] sm:mt-5"
            aria-hidden
          />
        </div>

        <nav aria-label="Featured case study links" className="sr-only">
          <ul className="m-0 list-none p-0">
            {cards.map((study) => (
              <li key={study.n} className="list-none">
                <a
                  href={`/case-studies/${study.slug}`}
                  {...internalAnchorProps(`/case-studies/${study.slug}`)}
                >
                  {study.listTitle}
                </a>
              </li>
            ))}
          </ul>
        </nav>

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
            className="mx-auto flex min-w-0 list-none items-stretch gap-4 overflow-x-auto overflow-y-visible overscroll-x-contain scroll-px-4 [scrollbar-width:none] snap-x snap-proximity sm:gap-5 sm:px-0 md:px-0 [&::-webkit-scrollbar]:hidden"
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
              const hasDuration = Boolean(engText && engText !== "-");

              const caseStudyHref = `/case-studies/${study.slug}`;

              return (
                <li
                  key={study.n}
                  className="w-[min(19.5rem,calc(100vw-2.25rem))] max-w-full shrink-0 snap-start sm:w-80"
                >
                  <a
                    href={caseStudyHref}
                    {...internalAnchorProps(caseStudyHref)}
                    className="group/card flex h-full min-h-[22rem] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#162A45]/60 backdrop-blur-sm text-left no-underline shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:border-[#4CAF50]/50 hover:shadow-[0_20px_45px_rgba(76,175,80,0.15)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green sm:min-h-[23rem]"
                  >
                    <div
                      className="h-1.5 w-full bg-gradient-to-r from-[#1f3b64] via-[#4CAF50] to-[#2E5B88]"
                      aria-hidden
                    />
                    <div className="flex min-h-0 flex-1 flex-col p-5 sm:p-6">
                      <p className="mb-2.5 inline-flex max-w-full">
                        <span className="rounded-full bg-[#4CAF50]/15 border border-[#4CAF50]/35 px-2.5 py-0.5 text-left text-[9px] font-bold uppercase tracking-wider text-[#4CAF50]">
                          {study.industry}
                        </span>
                      </p>
                      <h3 className="line-clamp-2 font-heading text-base font-extrabold leading-snug text-white [text-wrap:balance] sm:text-[1.05rem]">
                        <span className="text-inherit">{study.listTitle}</span>
                      </h3>

                      <div className="mt-5 flex min-h-0 flex-1 flex-col gap-3">
                        {/* Profile Field */}
                        <div className="flex gap-3 items-start bg-white/5 p-3 rounded-xl border border-white/5 transition-colors duration-200 hover:bg-white/10">
                          <User className="h-4.5 w-4.5 text-[#64B5F6] mt-0.5 shrink-0" strokeWidth={2.2} />
                          <div>
                            <p className="font-heading text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">Profile</p>
                            <p className="mt-0.5 line-clamp-2 font-body text-sm font-semibold text-slate-200 leading-relaxed">{study.profile}</p>
                          </div>
                        </div>

                        {/* Duration Field */}
                        <div className="flex gap-3 items-start bg-white/5 p-3 rounded-xl border border-white/5 transition-colors duration-200 hover:bg-white/10">
                          <Clock3 className="h-4.5 w-4.5 text-[#64B5F6] mt-0.5 shrink-0" strokeWidth={2.2} />
                          <div>
                            <p className="font-heading text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">Duration</p>
                            <p className="mt-0.5 font-body text-sm font-semibold text-slate-200 leading-relaxed">{hasDuration ? engText : "-"}</p>
                          </div>
                        </div>

                        {/* Outcome Field */}
                        <div className="flex gap-3 items-start bg-[#102B24] p-3 rounded-xl border border-[#4CAF50]/20 transition-colors duration-200 hover:bg-[#16382F]">
                          <ShieldCheck className="h-4.5 w-4.5 text-[#4CAF50] mt-0.5 shrink-0" strokeWidth={2.2} />
                          <div>
                            <p className="font-heading text-[9px] font-bold uppercase tracking-[0.14em] text-[#4CAF50]">Outcome</p>
                            <p className="mt-0.5 line-clamp-3 font-body text-sm leading-relaxed text-slate-300 [text-wrap:pretty]">{out || "-"}</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm font-bold text-white group-hover/card:text-[#4CAF50] transition-colors duration-200">
                        <span>Read case study</span>
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white transition duration-200 group-hover/card:bg-[#4CAF50]">
                          <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                        </span>
                      </div>
                    </div>
                  </a>
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
            className="mx-1 h-1 w-12 rounded-full bg-white/20"
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
            {...internalAnchorProps("/case-studies")}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 font-heading text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:border-[#4CAF50]/45 hover:bg-white/10 hover:shadow-lg"
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
          className="mx-auto mt-4 flex w-full max-w-6xl justify-center overflow-x-auto [scrollbar-gutter:stable] [scrollbar-width:thin] sm:mt-5"
          style={{ scrollbarColor: "rgba(255,255,255,0.2) rgba(255,255,255,0.05)" }}
        >
          <p
            className="w-max min-w-0 text-nowrap rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center font-body text-sm text-slate-350 shadow-inner backdrop-blur-[2px] sm:px-5 sm:py-4"
          >
            {CASE_STUDIES_FOOTER}
          </p>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
