import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion as Motion } from "motion/react";
import { Filter, X } from "lucide-react";
import { StatNumber } from "../components/StatNumber.jsx";
import { CaseStudyListCard } from "../components/CaseStudyListCard.jsx";
import { CaseStudyPageCta } from "../components/CaseStudyPageCta.jsx";
import { CASE_STUDIES, INDUSTRY_CATEGORIES } from "../data/caseStudies/index.js";

const ALL = "All";

function uniqueInOrder(studies, getVal) {
  const seen = new Set();
  const out = [];
  for (const s of studies) {
    const v = getVal(s);
    if (!seen.has(v)) {
      seen.add(v);
      out.push(v);
    }
  }
  return out;
}

const heroStatCardClass =
  "group font-headline-faq cursor-default rounded-full border-2 border-[#2E5B88]/25 bg-[#2E5B88]/10 p-8 text-center text-[#1F3B64] transition-all duration-300 ease-out " +
  "hover:border-[#4CAF50] hover:bg-[#4CAF50]/18 hover:text-[#4CAF50] hover:shadow-md hover:ring-2 hover:ring-[#4CAF50]/40 hover:ring-offset-2 hover:ring-offset-[#F5F7FA]";

const baseSelectClass =
  "h-14 w-full cursor-pointer appearance-none rounded-2xl border-2 border-slate-200/80 bg-white pl-5 pr-12 text-left text-base font-medium text-navy shadow-[0_2px_14px_-3px_rgba(15,35,60,0.1)] outline-none transition focus:border-[#3d9a3d] focus:ring-4 focus:ring-[#4CAF50]/22 hover:border-[#4CAF50]/35 hover:shadow-md";

function SelectChevron() {
  return (
    <span
      className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-navy/45 transition group-hover/field:text-navy/65"
      aria-hidden
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </span>
  );
}

function filterStudies(st, industry, profile, challenge, duration) {
  return st.filter(
    (c) =>
      (industry === ALL || c.industry === industry) &&
      (profile === ALL || c.profile === profile) &&
      (challenge === ALL || c.challengeType === challenge) &&
      (duration === ALL || c.duration === duration),
  );
}

function ActiveChip({ children, onRemove, title }) {
  return (
    <span className="inline-flex max-w-full items-center gap-1.5 overflow-hidden rounded-full border border-navy/10 bg-white pl-3 pr-1.5 py-1 text-left text-sm font-medium text-navy shadow-sm ring-1 ring-slate-200/60">
      <span className="min-w-0 truncate" title={title}>
        {children}
      </span>
      <button
        type="button"
        onClick={onRemove}
        className="grid h-5 w-5 shrink-0 place-items-center rounded-full text-navy/60 transition hover:bg-slate-100 hover:text-navy"
        aria-label="Remove this filter"
      >
        <X className="h-3.5 w-3.5" strokeWidth={2.5} />
      </button>
    </span>
  );
}

export default function CaseStudiesPage() {
  const heroStatsRef = useRef(null);
  const [heroStatsLive, setHeroStatsLive] = useState(false);
  const [industry, setIndustry] = useState(ALL);
  const [profile, setProfile] = useState(ALL);
  const [challenge, setChallenge] = useState(ALL);
  const [duration, setDuration] = useState(ALL);

  const industryList = INDUSTRY_CATEGORIES;
  const industryChips = industryList;

  const industryOptions = useMemo(
    () => [ALL, ...industryList],
    [industryList],
  );
  const profileOptions = useMemo(
    () => [ALL, ...uniqueInOrder(CASE_STUDIES, (s) => s.profile)],
    [],
  );
  const challengeOptions = useMemo(
    () => [ALL, ...uniqueInOrder(CASE_STUDIES, (s) => s.challengeType)],
    [],
  );
  const durationOptions = useMemo(
    () => [ALL, ...uniqueInOrder(CASE_STUDIES, (s) => s.duration)],
    [],
  );

  const byFilters = useMemo(
    () =>
      filterStudies(CASE_STUDIES, industry, profile, challenge, duration).sort(
        (a, b) => a.n - b.n,
      ),
    [industry, profile, challenge, duration],
  );

  const filtered = byFilters;

  const hasActive =
    industry !== ALL ||
    profile !== ALL ||
    challenge !== ALL ||
    duration !== ALL;

  const resetFilters = useCallback(() => {
    setIndustry(ALL);
    setProfile(ALL);
    setChallenge(ALL);
    setDuration(ALL);
  }, []);

  const challengeTypeCount = useMemo(
    () => new Set(CASE_STUDIES.map((s) => s.challengeType)).size,
    [],
  );

  const heroStatCards = useMemo(
    () => [
      { end: CASE_STUDIES.length, suffix: "+", label: "In-depth case studies" },
      { end: INDUSTRY_CATEGORIES.length, label: "Industry verticals" },
      { end: challengeTypeCount, label: "Challenge types covered" },
    ],
    [challengeTypeCount],
  );

  useEffect(() => {
    const previous = document.title;
    document.title = "Case Studies | Reputation360";
    return () => {
      document.title = previous;
    };
  }, []);

  useEffect(() => {
    const el = heroStatsRef.current;
    if (!el) return undefined;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setHeroStatsLive(true);
      },
      { rootMargin: "0px 0px -5% 0px", threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <main className="relative min-h-0 flex-1 overflow-x-hidden bg-[#F5F7FA] pt-28 text-slate-900 selection:bg-[#4CAF50]/30 sm:pt-32">
      <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_15%_-5%,rgba(120,200,100,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_95%_0%,rgba(100,150,200,0.12),transparent_45%)]" />
        <div className="absolute bottom-0 left-0 right-0 top-1/3 bg-gradient-to-b from-transparent to-slate-100/90" />
        <div
          className="absolute inset-0 opacity-[0.35] mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M64 0H0V64' fill='none' stroke='%23cbd5e1' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "64px 64px",
          }}
        />
        <Motion.div
          className="absolute -left-20 top-24 h-64 w-64 rounded-full bg-[#4CAF50]/20 blur-3xl"
          animate={{ x: [0, 24, 0], y: [0, 12, 0] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <Motion.div
          className="absolute -right-10 top-1/3 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl"
          animate={{ x: [0, -16, 0], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <section
          className="flex flex-col items-center border-b border-slate-200/70 py-20 text-center text-[#1F3B64] md:py-28"
          aria-label="Case studies"
        >
          <span className="font-headline-faq mb-6 text-sm font-bold uppercase tracking-widest text-[#4CAF50]">
            Documented results across industries
          </span>
          <h1 className="font-headline-faq mb-8 max-w-5xl text-4xl font-extrabold leading-[1.1] tracking-tighter text-[#1F3B64] md:text-6xl lg:text-7xl">
            Recovery is not a slogan — it is a process.{" "}
            <span className="text-[#2E5B88]">Read how we have delivered it.</span>
          </h1>
          <p className="mb-12 max-w-2xl text-lg font-light text-[#6B7280] md:text-xl">
            Detailed analysis of how we restore trust, counter harmful narratives, and rebuild
            digital legacies.
          </p>
          <div
            ref={heroStatsRef}
            className="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-3"
            role="list"
            aria-label="Case studies at a glance"
          >
            {heroStatCards.map((card) => (
              <div key={card.label} role="listitem" className={heroStatCardClass}>
                <div className="mb-1 text-4xl font-extrabold tabular-nums transition-transform duration-300 ease-out group-hover:scale-105 motion-reduce:group-hover:scale-100">
                  <StatNumber
                    className="inline"
                    end={card.end}
                    suffix={card.suffix ?? ""}
                    start={heroStatsLive}
                  />
                </div>
                <div className="font-body text-sm font-medium tracking-wide text-[#6B7280]">
                  {card.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="sticky top-[4.5rem] z-30 -mx-0 border-b border-slate-200/80 bg-[#F5F7FA]/90 shadow-[0_6px_32px_-8px_rgba(15,35,60,0.1)] backdrop-blur-md md:top-16">
        <div className="mx-auto min-w-0 max-w-6xl space-y-0 px-4 py-5 md:px-6 md:py-6">
          <div
            className="relative rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white via-white to-slate-50/90 p-5 shadow-[0_1px_2px_rgba(15,35,60,0.04),0_12px_32px_-12px_rgba(15,35,60,0.08)] ring-1 ring-slate-200/50 sm:p-6"
          >
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#2d8a2d] via-[#4CAF50] to-sky-500/70"
              aria-hidden
            />
            <div className="space-y-6 sm:space-y-7">
              <div className="flex justify-end border-b border-slate-200/60 pb-4 sm:pb-5">
                <Motion.button
                  type="button"
                  onClick={resetFilters}
                  whileTap={{ scale: 0.96 }}
                  className="w-auto shrink-0 rounded-lg border border-slate-200/90 bg-slate-50/80 px-2.5 py-1.5 text-xs font-semibold text-slate-800 shadow-sm transition hover:border-[#4CAF50]/55 hover:bg-[#4CAF50]/8 sm:px-3 sm:py-1.5 sm:text-sm"
                >
                  Clear filters
                </Motion.button>
              </div>

          {industryChips.length > 0 ? (
            <div className="min-w-0">
              <p className="mb-2.5 text-sm font-extrabold uppercase tracking-wider text-slate-600">
                Quick industries
              </p>
              <div
                className="-mx-0.5 flex min-w-0 max-w-full flex-nowrap gap-1.5 overflow-x-auto overflow-y-visible overscroll-x-contain px-0.5 pb-1.5 pl-0 pr-2 [scrollbar-gutter:stable] [scrollbar-width:thin] [scroll-padding-inline-end:0.75rem] touch-pan-x sm:gap-2 sm:pr-3 sm:[scroll-padding-inline-end:1.25rem]"
                role="group"
                aria-label="Filter by industry"
              >
                {industryChips.map((ind) => {
                  const on = industry === ind;
                  return (
                    <Motion.button
                      key={ind}
                      type="button"
                      onClick={() => setIndustry(on ? ALL : ind)}
                      whileTap={{ scale: 0.96 }}
                      className={[
                        "shrink-0 whitespace-nowrap rounded-full border px-2.5 py-1.5 text-left text-xs font-semibold leading-tight transition sm:px-3 sm:py-1.5 sm:text-sm sm:font-bold sm:leading-snug",
                        on
                          ? "border-[#3d9a3d] bg-gradient-to-b from-[#4CAF50]/18 to-[#4CAF50]/10 text-navy shadow-sm ring-1 ring-[#4CAF50]/20"
                          : "border-slate-200/90 bg-white text-slate-800 shadow-sm hover:-translate-y-px hover:border-slate-300 hover:shadow-md",
                      ].join(" ")}
                      title={ind}
                    >
                      {ind.length > 42 ? `${ind.slice(0, 40)}…` : ind}
                    </Motion.button>
                  );
                })}
                <div
                  className="shrink-0 select-none [width:0.5rem] sm:[width:0.75rem]"
                  aria-hidden
                />
              </div>
            </div>
          ) : null}

          <div
            className="group grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
            role="group"
            aria-label="Refine by industry, profile, challenge, and duration"
          >
            {[
              {
                id: "f-ind",
                label: "Industry",
                value: industry,
                set: setIndustry,
                opts: industryOptions,
              },
              {
                id: "f-pro",
                label: "Profile",
                value: profile,
                set: setProfile,
                opts: profileOptions,
              },
              {
                id: "f-cha",
                label: "Challenge type",
                value: challenge,
                set: setChallenge,
                opts: challengeOptions,
              },
              {
                id: "f-dur",
                label: "Duration",
                value: duration,
                set: setDuration,
                opts: durationOptions,
              },
            ].map(({ id, label, value, set, opts }) => (
              <div key={id} className="group/field">
                <label
                  className="mb-2 block text-left text-sm font-extrabold uppercase tracking-wider text-slate-600"
                  htmlFor={id}
                >
                  {label}
                </label>
                <div className="relative">
                  <select
                    id={id}
                    className={baseSelectClass}
                    value={value}
                    onChange={(e) => set(e.target.value)}
                    title={value}
                  >
                    {opts.map((o) => (
                      <option key={o} value={o} title={o === ALL ? "" : o}>
                        {o === ALL ? "All" : o}
                      </option>
                    ))}
                  </select>
                  <SelectChevron />
                </div>
              </div>
            ))}
          </div>

          {hasActive ? (
            <div className="flex min-h-0 flex-col gap-2.5 border-t border-slate-200/80 pt-5 sm:pt-6">
              <p className="text-sm font-extrabold uppercase tracking-wider text-slate-600">
                Active
              </p>
              <div className="flex min-h-0 flex-wrap items-center gap-2">
                {industry !== ALL && (
                  <ActiveChip
                    onRemove={() => setIndustry(ALL)}
                    title={industry}
                  >
                    {industry}
                  </ActiveChip>
                )}
                {profile !== ALL && (
                  <ActiveChip
                    onRemove={() => setProfile(ALL)}
                    title={profile}
                  >
                    {profile}
                  </ActiveChip>
                )}
                {challenge !== ALL && (
                  <ActiveChip
                    onRemove={() => setChallenge(ALL)}
                    title={challenge}
                  >
                    {challenge}
                  </ActiveChip>
                )}
                {duration !== ALL && (
                  <ActiveChip
                    onRemove={() => setDuration(ALL)}
                    title={duration}
                  >
                    {duration}
                  </ActiveChip>
                )}
                <span className="ml-auto text-sm font-semibold text-slate-600">
                  {filtered.length} result{filtered.length === 1 ? "" : "s"}
                </span>
              </div>
            </div>
          ) : null}
            </div>
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <Motion.div
          className="mx-auto max-w-lg px-4 py-20 text-center md:px-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white text-3xl shadow-sm">
            <Filter className="h-8 w-8 text-slate-400" />
          </div>
          <p className="font-heading text-lg font-bold text-slate-900">
            Nothing matches
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Remove a filter or clear all to see the full set of 16 case studies.
          </p>
          <Motion.button
            type="button"
            onClick={resetFilters}
            whileTap={{ scale: 0.97 }}
            className="mt-6 inline-flex items-center justify-center rounded-xl border-2 border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-900 shadow-sm transition hover:border-[#4CAF50]/50 hover:bg-slate-50"
          >
            Reset filters
          </Motion.button>
        </Motion.div>
      ) : (
        <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-14 sm:pt-16 md:px-6 md:pb-12 md:pt-20">
          <ul className="list-none space-y-6 sm:space-y-7 md:space-y-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((c, i) => (
                <CaseStudyListCard key={c.n} study={c} index={i} />
              ))}
            </AnimatePresence>
          </ul>
        </div>
      )}

      <div className="mt-6 pb-16 md:mt-8 md:pb-24">
        <CaseStudyPageCta />
      </div>
    </main>
  );
}
