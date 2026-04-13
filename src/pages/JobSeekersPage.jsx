import { useEffect, useRef, useState } from "react";
import { FaqAccordion } from "../components/FaqAccordion";
import {
  IndustryWhatReputation360Section,
  IndustryRealisticTimelineSection,
} from "../components/industry/IndustryReputation360Sections";
import { calendlyNewTabProps } from "../constants/scheduling";
import {
  ShieldCheck,
  Search,
  Check,
  AlertTriangle,
  UserRoundX,
  Newspaper,
  Eye,
  UserSearch,
  Globe2,
  Scale,
  Star,
  MessagesSquare,
  History,
  RefreshCw,
  ShieldAlert,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

const JOB_SEEKER_PROBLEM_TILES = [
  {
    id: "news-legal",
    label: "News & legal press",
    description:
      "News articles from a difficult period-a legal matter, a workplace dispute, a business failure-that still rank when someone searches your name.",
    Icon: Newspaper,
  },
  {
    id: "court",
    label: "Court records",
    description:
      "Court records and legal proceedings that are publicly indexed and surface ahead of your current professional story.",
    Icon: Scale,
  },
  {
    id: "social",
    label: "Old social posts",
    description:
      "Old social media content that no longer reflects who you are today but still appears in results and shapes first impressions.",
    Icon: History,
  },
  {
    id: "third-party",
    label: "Third-party content",
    description:
      "Content posted by former employers, colleagues, or people from your personal life that ranks for your name without context you control.",
    Icon: UserRoundX,
  },
  {
    id: "employer-reviews",
    label: "Employer reviews",
    description:
      "Negative Glassdoor, Indeed, or similar references if you were previously in a leadership or visible role-and they follow you in search.",
    Icon: Star,
  },
  {
    id: "same-name",
    label: "Mistaken identity",
    description:
      "Results for a different person who shares your name-creating confusion before a recruiter ever opens your profile.",
    Icon: UserSearch,
  },
  {
    id: "forums",
    label: "Forums & threads",
    description:
      "Blog posts, forum threads, or Reddit discussions mentioning you in an unflattering or outdated context.",
    Icon: MessagesSquare,
  },
  {
    id: "cached",
    label: "Cached results",
    description:
      "Removed but cached content that still appears in Google results or preview snippets long after you thought it was gone.",
    Icon: RefreshCw,
  },
];

const JOB_SEEKER_SCALE_METRICS = [
  {
    id: "recruiter-research",
    figure: "77%",
    blurb: "Recruiters research you before they decide",
    description:
      "77% of recruiters and hiring managers research candidates online before making a hiring decision.",
    Icon: UserSearch,
  },
  {
    id: "eliminated",
    figure: "56%",
    blurb: "Eliminated after something surfaced online",
    description:
      "56% say they have eliminated a candidate based on something they found online.",
    Icon: UserRoundX,
  },
  {
    id: "no-contact",
    figure: "47%",
    blurb: "Won't reach out if search raises concerns",
    description:
      "47% say they would not even contact a candidate if their online search raised concerns.",
    Icon: ShieldAlert,
  },
  {
    id: "self-search",
    figure: "Only 6%",
    blurb: "Candidates who search their own name first",
    description:
      "Only 6% of candidates ever think to search their own name before applying.",
    Icon: Eye,
  },
];

const JOB_SEEKER_FAQ_ITEMS = [
  {
    id: "legal-ethical",
    question: "Is reputation suppression legal and ethical?",
    answer:
      "Entirely. We do not alter, hack, or tamper with any existing content. We build new, legitimate, high-quality content that earns its ranking through genuine authority.",
  },
  {
    id: "removal-google",
    question: "Can old content really be removed from Google?",
    answer:
      "Sometimes, yes. Depending on the platform, the nature of the content, and applicable privacy laws, direct removal is possible. We pursue removal wherever it is achievable. Where it is not, suppression achieves the same practical outcome.",
  },
  {
    id: "vs-linkedin",
    question: "How is this different from just improving my LinkedIn?",
    answer:
      "LinkedIn optimization is one part of what we do, but on its own it rarely displaces content that has built significant ranking authority. A strategic, multi-property approach is required to reliably move negative results down.",
  },
  {
    id: "where-to-start",
    question:
      "I'm not sure if anything bad appears for my name. Where do I start?",
    answer:
      "Start with a free consultation. We will run the search and show you exactly what we find.",
  },
  {
    id: "timeline-results",
    question: "How long does it take to see results?",
    answer:
      "For most job seekers, meaningful displacement of the primary damaging result happens within two to four months. More complex situations may take up to eight to twelve months. We will give you an honest estimate upfront.",
  },
];

const WHY_DIFFICULT_JOB_SEEKER_PILLARS = [
  {
    id: "on-your-own",
    label: "On your own",
    hook: "No dedicated team to manage your public footprint.",
    body: "Unlike a business that can invest in ongoing brand management, a job seeker is typically navigating this alone - often during an already stressful period of transition.",
    Icon: UserSearch,
  },
  {
    id: "silent-signals",
    label: "Silent signals",
    hook: "Silence rarely means your search results are fine.",
    body: "There is also a timing problem. The damage is happening now, with every application you submit - but you will not receive clear feedback telling you that your search results are the issue. You may interpret silence as a skills gap or a competitive market, when the real obstacle is something Google is showing that you have never even looked at.",
    Icon: MessagesSquare,
  },
  {
    id: "practical-path",
    label: "The practical path forward",
    hook: "What actually moves what recruiters see first.",
    body: "Every week your search results remain unchanged is another set of opportunities quietly closing. Building a stronger, more authoritative online presence is how negative content gets displaced from the first page of results - the page that decides whether you get a call.",
    Icon: TrendingUp,
  },
];

function JobSeekersScaleSection() {
  const [active, setActive] = useState(0);
  const [entered, setEntered] = useState(false);
  const rootRef = useRef(null);
  const activeMetric = JOB_SEEKER_SCALE_METRICS[active];
  const ActiveIcon = activeMetric.Icon;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setEntered(true);
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={rootRef}
      id="scale-of-the-problem-job-seekers"
      className="relative mt-12 scroll-mt-28 overflow-hidden rounded-[28px] border border-[#0a2748]/40 bg-[linear-gradient(148deg,#041528_0%,#082441_42%,#0c3054_100%)] px-5 py-9 text-white shadow-[0_28px_64px_-28px_rgba(4,21,40,0.65)] md:mt-16 md:px-9 md:py-11"
    >
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#4eab66]/12 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-[#3b82f6]/10 blur-3xl"
        aria-hidden
      />

      <div className="relative flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="font-heading text-[26px] font-bold leading-tight tracking-tight md:text-[32px]">
          The Scale of the Problem
        </h2>
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/45">
          Tap a metric to explore
        </p>
      </div>

      <div className="relative mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] lg:items-stretch">
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {JOB_SEEKER_SCALE_METRICS.map((m, i) => {
            const Icon = m.Icon;
            const selected = active === i;
            return (
              <button
                key={m.id}
                type="button"
                aria-pressed={selected}
                aria-label={`${m.figure}: ${m.description}`}
                onClick={() => setActive(i)}
                style={{
                  transitionDelay: entered ? `${i * 55}ms` : "0ms",
                }}
                className={`flex flex-col items-start rounded-2xl border px-4 py-4 text-left outline-none transition-all duration-300 motion-safe:hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#8ce596]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#041528] md:px-5 md:py-5 ${
                  entered
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                } ${
                  selected
                    ? "border-[#8ce596]/55 bg-white/[0.12] shadow-[0_16px_40px_-18px_rgba(0,0,0,0.45)] ring-1 ring-[#8ce596]/35"
                    : "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.07]"
                }`}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0a2038] text-[#8ce596] shadow-inner shadow-black/20">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="mt-4 font-heading text-[28px] font-bold leading-none tracking-tight text-white tabular-nums md:text-[34px]">
                  {m.figure}
                </span>
                <span className="mt-2 text-[11px] font-semibold leading-snug text-white/70 md:text-xs">
                  {m.blurb}
                </span>
              </button>
            );
          })}
        </div>

        <aside
          className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#061a2e]/80 p-5 backdrop-blur-sm md:p-6 lg:sticky lg:top-28 lg:self-start"
          aria-live="polite"
        >
          <div>
            <div className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#8ce596]">
                <ActiveIcon className="h-5 w-5" aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                  Selected insight
                </p>
                <p className="mt-1 font-heading text-2xl font-bold tabular-nums tracking-tight text-white md:text-3xl">
                  {activeMetric.figure}
                </p>
              </div>
            </div>
            <p className="mt-5 text-[14px] leading-relaxed text-white/85 md:text-[15px] md:leading-relaxed">
              {activeMetric.description}
            </p>
          </div>
          <p className="mt-6 border-t border-white/10 pt-4 text-[10px] leading-relaxed text-white/45 md:text-[11px]">
            <em>
              (Source: CareerBuilder Annual Candidate Behaviour Report; Jobvite
              Recruiter Nation Survey)
            </em>
          </p>
        </aside>
      </div>
    </section>
  );
}

function JobSeekersWhyDifficultSection() {
  const [active, setActive] = useState(0);
  const pillar = WHY_DIFFICULT_JOB_SEEKER_PILLARS[active];
  const ActiveIcon = pillar.Icon;

  return (
    <section
      id="why-particularly-difficult-job-seekers"
      className="mt-16 scroll-mt-28 rounded-[24px] border border-[#dce3ec] bg-[#f8f9fc] px-5 py-9 md:mt-20 md:px-9 md:py-11"
    >
      <h2 className="max-w-4xl font-heading text-[26px] font-bold leading-[1.12] text-[#0f2e58] md:text-[32px] md:leading-[1.1]">
        Why This Is Particularly Difficult for Job Seekers
      </h2>
      <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-[#5d6c80] md:text-[14px] md:leading-relaxed">
        Three realities job seekers hit in search - tap each to read the full
        context.
      </p>

      <div className="mt-8 grid max-w-5xl gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-stretch">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {WHY_DIFFICULT_JOB_SEEKER_PILLARS.map((p, i) => {
            const Icon = p.Icon;
            const selected = active === i;
            return (
              <button
                key={p.id}
                type="button"
                aria-pressed={selected}
                aria-label={`${p.label}: ${p.body}`}
                onClick={() => setActive(i)}
                className={`flex flex-col items-center rounded-2xl border px-3 py-4 text-center outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#1f3b64]/30 focus-visible:ring-offset-2 sm:py-5 ${
                  selected
                    ? "border-[#1f3b64] bg-white shadow-[0_12px_28px_-14px_rgba(31,59,100,0.22)] ring-1 ring-[#1f3b64]/15"
                    : "border-[#dfe6ee] bg-white/70 hover:border-[#1f3b64]/25 hover:bg-white"
                }`}
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl shadow-sm transition-[background-color,color,box-shadow] duration-200 ${
                    selected
                      ? "bg-[#1f3b64] text-white shadow-[0_6px_16px_-4px_rgba(31,59,100,0.45)]"
                      : "bg-[#f0f2f7] text-[#1f3b64]/80"
                  }`}
                >
                  <Icon
                    className="h-5 w-5"
                    aria-hidden
                    strokeWidth={selected ? 2.25 : 1.75}
                    absoluteStrokeWidth
                  />
                </span>
                <span className="mt-3 font-heading text-[13px] font-semibold leading-tight text-[#0f2e58] md:text-sm">
                  {p.label}
                </span>
                <span className="mt-2 text-[11px] leading-snug text-[#5d6c80] md:text-[12px]">
                  {p.hook}
                </span>
              </button>
            );
          })}
        </div>

        <aside
          className="flex flex-col justify-center rounded-2xl border border-[#1f3b64]/10 bg-white p-5 shadow-sm md:p-6 lg:sticky lg:top-28 lg:self-start"
          aria-live="polite"
        >
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1f3b64] text-white shadow-md md:h-11 md:w-11">
              <ActiveIcon
                className="h-5 w-5 md:h-6 md:w-6"
                aria-hidden
                strokeWidth={2.25}
                absoluteStrokeWidth
              />
            </span>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1f3b64]/45">
                Full context
              </p>
              <p className="mt-1 font-heading text-sm font-semibold text-[#0f2e58] md:text-base">
                {pillar.label}
              </p>
            </div>
          </div>
          <p className="mt-4 text-[14px] leading-relaxed text-[#3f4f66] md:text-[15px] md:leading-relaxed">
            {pillar.body}
          </p>
        </aside>
      </div>
    </section>
  );
}

function JobSeekersFaqSection() {
  return (
    <section
      id="job-seeker-faqs"
      className="mt-14 scroll-mt-28 rounded-[24px] border border-[#dce3ec] bg-[#f8f9fc] px-5 py-9 shadow-[0_10px_28px_rgba(15,23,42,0.04)] md:mt-16 md:px-9 md:py-11"
    >
      <h2 className="max-w-4xl font-heading text-[26px] font-bold leading-[1.12] text-[#0f2e58] md:text-[32px] md:leading-[1.1]">
        FAQs
      </h2>
      <div className="mt-3 h-1.5 w-20 rounded-full bg-[#79df86]" />
      <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-[#5d6c80] md:text-[14px]">
        Tap a question to expand or collapse the answer.
      </p>
      <div className="mt-8 max-w-4xl space-y-4">
        {JOB_SEEKER_FAQ_ITEMS.map((item, index) => (
          <FaqAccordion
            key={item.id}
            question={item.question}
            defaultOpen={index === 0}
          >
            <p className="text-[15px] leading-relaxed">{item.answer}</p>
          </FaqAccordion>
        ))}
      </div>
    </section>
  );
}

function JobSeekersMarketInsightBanner() {
  return (
    <section id="job-seeker-market-insight" className="mt-10 scroll-mt-28 md:mt-12">
      <div className="flex flex-col gap-8 rounded-[28px] bg-[linear-gradient(90deg,#1b3152_0%,#243d5c_55%,#2a4668_100%)] px-6 py-8 text-white shadow-[0_12px_32px_rgba(27,49,82,0.25)] md:flex-row md:items-center md:justify-between md:gap-10 md:px-10 md:py-10">
        <div className="min-w-0 flex-1">
          <p className="inline-flex rounded-full bg-[#24403b] px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#66bb6a] md:px-3 md:py-1 md:text-[10px]">
            Market Insight
          </p>
          <h2 className="mt-3 font-heading text-[19px] font-bold leading-[1.24] md:mt-4 md:text-[24px] lg:text-[27px]">
            <span className="text-[#4eab66]">77%</span>
            <span className="text-white">
              {" "}
              of recruiters research candidates online before they call.{" "}
            </span>
            <span className="text-[#4eab66]">56%</span>
            <span className="text-white">
              {" "}
              have eliminated a candidate based on something they found online.
            </span>
          </h2>
          <p className="mt-2.5 font-heading text-[14px] font-semibold leading-snug text-white md:mt-3 md:text-[16px]">
            Make sure they like what they find.
          </p>
          <p className="mt-2 text-[12px] leading-relaxed text-white/80 md:mt-2.5 md:text-[13px]">
            (Source: CareerBuilder Annual Candidate Behaviour Report; Jobvite
            Recruiter Nation Survey)
          </p>
        </div>
        <div className="flex shrink-0 justify-center md:justify-end">
          <div className="flex h-[76px] w-[76px] items-center justify-center rounded-2xl border-2 border-[#4eab66] bg-transparent md:h-[88px] md:w-[88px]">
            <div className="relative flex h-11 w-11 items-center justify-center md:h-[52px] md:w-[52px]">
              <Search
                className="absolute text-white"
                strokeWidth={1.75}
                size={46}
                aria-hidden
              />
              <Check
                className="relative z-10 text-white"
                strokeWidth={3}
                size={18}
                style={{ marginTop: "-4px" }}
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function JobSeekersProblemSection() {
  const [active, setActive] = useState(0);
  const activeTile = JOB_SEEKER_PROBLEM_TILES[active];
  const ActiveIcon = activeTile.Icon;

  return (
    <section
      id="problem-job-seekers-face"
      className="mt-12 scroll-mt-28 rounded-[24px] border border-[#d9e3ea] bg-white px-5 py-9 shadow-[0_10px_28px_rgba(15,23,42,0.07)] md:mt-16 md:px-9 md:py-11"
    >
      <h2 className="font-heading text-[26px] font-bold leading-[1.12] text-[#0f2e58] md:text-[32px] md:leading-[1.1]">
        The Problem Job Seekers Face
      </h2>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#e8ecf7] text-[#1f3b64]">
          <Globe2 className="h-5 w-5" aria-hidden />
        </div>
        <p className="max-w-2xl text-[14px] leading-relaxed text-[#3f4f66] md:text-[15px] md:leading-[1.55]">
          Most people have no idea what appears when someone Googles their name.
          And most assume that if something is old, or resolved, or unfair, it no
          longer matters. It does.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-b border-[#e2e8f0] pb-4">
        <h3 className="font-heading text-base font-semibold text-[#0f2e58] md:text-lg">
          Where damaging content typically appears:
        </h3>
        <p className="text-xs font-medium text-[#5d6c80] md:text-[13px]">
          Tap an icon to see the full context
        </p>
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_minmax(280px,360px)] lg:items-start">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {JOB_SEEKER_PROBLEM_TILES.map((tile, i) => {
            const Icon = tile.Icon;
            const selected = active === i;
            return (
              <button
                key={tile.id}
                type="button"
                aria-pressed={selected}
                aria-label={`${tile.label}. ${selected ? "Showing details" : "Show details"}`}
                onClick={() => setActive(i)}
                className={`group flex flex-col items-center gap-2.5 rounded-2xl border px-2.5 py-3.5 text-center outline-none transition-[border-color,box-shadow,background-color,transform] duration-200 focus-visible:ring-2 focus-visible:ring-navy/35 focus-visible:ring-offset-2 motion-safe:active:scale-[0.98] md:px-3 md:py-4 ${
                  selected
                    ? "border-[#1f3b64] bg-[#eef2ff] shadow-[0_10px_26px_-12px_rgba(31,59,100,0.35)] ring-2 ring-[#1f3b64]/15"
                    : "border-[#dfe6ee] bg-[#fafbfd] hover:border-[#1f3b64]/28 hover:bg-white hover:shadow-[0_8px_22px_-14px_rgba(31,59,100,0.18)]"
                }`}
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl shadow-sm transition-[transform,background-color,color,box-shadow] duration-200 md:h-12 md:w-12 ${
                    selected
                      ? "scale-105 bg-[#1f3b64] text-white shadow-[0_6px_16px_-4px_rgba(31,59,100,0.45)]"
                      : "bg-white text-[#1f3b64] group-hover:scale-105"
                  }`}
                >
                  <Icon
                    className="h-5 w-5 md:h-6 md:w-6"
                    aria-hidden
                    strokeWidth={selected ? 2.25 : 1.75}
                    absoluteStrokeWidth
                  />
                </span>
                <span className="text-[11px] font-semibold leading-snug text-[#0f2e58] md:text-xs">
                  {tile.label}
                </span>
              </button>
            );
          })}
        </div>

        <aside
          className="rounded-2xl border border-[#1f3b64]/12 bg-[linear-gradient(160deg,#f4f6fc_0%,#eef2fb_55%,#e8edf8_100%)] p-5 md:p-6 lg:sticky lg:top-28"
          aria-live="polite"
          aria-label="Selected risk source"
        >
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1f3b64] text-white shadow-md md:h-11 md:w-11">
              <ActiveIcon
                className="h-5 w-5 md:h-6 md:w-6"
                aria-hidden
                strokeWidth={2.25}
                absoluteStrokeWidth
              />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-navy/45">
                Selected source
              </p>
              <p className="mt-1 font-heading text-sm font-semibold text-[#0f2e58] md:text-base">
                {activeTile.label}
              </p>
            </div>
          </div>
          <p className="mt-4 text-[14px] leading-relaxed text-[#3f4f66] md:text-[15px] md:leading-relaxed">
            {activeTile.description}
          </p>
        </aside>
      </div>

      <p className="mt-8 rounded-xl border border-[#1f3b64]/10 bg-[#f8fafc] px-4 py-3.5 text-center text-[14px] font-semibold leading-snug text-[#0f2e58] md:px-6 md:text-[15px]">
        Any one of these on page one when a recruiter searches your name can
        quietly remove you from consideration-often before you ever find out why.
      </p>
    </section>
  );
}

function JobSeekersPage() {
  return (
    <main className="flex-1 pt-28 md:pt-32 bg-offwhite">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-14 space-y-10">
        <section className="relative overflow-hidden rounded-[8px] bg-[linear-gradient(110deg,#ececf8_0%,#eef3f6_70%,#edf7f3_100%)] px-3 py-6 md:px-4 md:py-7 grid gap-5 md:grid-cols-[1.03fr_0.97fr] items-start">
          <div className="max-w-[570px]">
            <h1 className="font-heading text-[34px] md:text-[40px] leading-[1.02] text-[#0f2e58] font-bold tracking-tight max-w-[520px]">
              Recruiters Google You Before They Call. What Do They Find?
            </h1>
            <p className="mt-5 text-[#4f5f75] text-[15px] md:text-[16px] leading-[1.5] max-w-[520px]">
              Ensure your digital reputation reflects your true professional
              value before a recruiter ever hits 'Search'.
            </p>
            <a
              {...calendlyNewTabProps}
              className="ha-pill mt-6 inline-flex items-center gap-2 rounded-[8px] bg-[#153f70] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(7,47,95,0.24)] hover:bg-[#0b3c75]"
            >
              Book a Free Confidential Consultation
            </a>
          </div>
          <div className="rounded-[6px] bg-[linear-gradient(180deg,#e8f5ef_0%,#e7f4ee_100%)] px-3 py-3 md:px-4 md:py-4 space-y-3 pt-1">
            {[
              {
                title: "Trust Restored",
                text: "We help top-tier candidates regain control of their public narrative through ethical suppression.",
                icon: <ShieldCheck className="h-5 w-5 text-[#6ee27d]" />,
              },
              {
                title: "Discretion Guaranteed",
                text: "Your career transition is handled with absolute confidentiality and professional care.",
                icon: <ShieldCheck className="h-5 w-5 text-[#6ee27d]" />,
              },
              {
                title: "Career Authority",
                text: "We build high-authority profiles to ensure your best achievements rank at the very top.",
                icon: <Search className="h-5 w-5 text-[#6ee27d]" />,
              },
            ].map((item) => (
              <article
                key={item.title}
                className="ha-lift rounded-3xl border border-[#dbe3e8] bg-white px-4 py-4 shadow-[0_10px_24px_rgba(20,40,70,0.10)] md:px-5 md:py-5"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-[15px] md:text-[16px] leading-tight font-semibold text-[#1f3b64]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[12px] md:text-[13px] leading-[1.5] text-[#5d6c80]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 md:mt-16 grid md:grid-cols-[1fr_1fr] overflow-hidden rounded-[24px] border border-[#123f70] shadow-[0_16px_34px_rgba(16,35,64,0.22)]">
          <div className="relative min-h-[340px] overflow-hidden bg-[#041a30] md:min-h-[500px]">
            <div
              className="pointer-events-none absolute inset-0 bg-cover bg-[center_24%] bg-no-repeat"
              style={{ backgroundImage: "url('/job-seekers-moment-left.png')" }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[#041a30]/68"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(3,12,26,0.82)_0%,rgba(4,18,36,0.35)_28%,transparent_42%,rgba(4,18,36,0.4)_58%,rgba(3,12,24,0.92)_82%,#020a14_100%)]"
              aria-hidden
            />
            <div className="relative z-10 flex min-h-[340px] flex-col justify-end p-8 font-heading text-white antialiased md:min-h-[500px] md:p-10">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#4a1528] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                <span className="h-2 w-2 shrink-0 rounded-full bg-red-500" />
                THE MOMENT OF TRUTH
              </div>
              <div className="mt-5 flex items-center gap-3">
                <UserSearch className="h-5 w-5 shrink-0 text-white/90" />
                <div className="h-px flex-1 bg-white/35" />
              </div>
              <h2 className="fa-invisible-leak-headline mt-5 w-full max-w-none font-heading text-[26px] font-bold leading-[1.08] tracking-tight sm:text-[30px] md:text-[34px]">
                <span className="block whitespace-nowrap">
                  A recruiter searches your name
                </span>
                <span className="block whitespace-nowrap">
                  before the first interview.
                </span>
              </h2>
            </div>
          </div>
          <div className="flex flex-col justify-center bg-[#072f5f] p-7 text-white md:p-9">
            <div className="rounded-2xl border border-white/10 bg-white/7 px-5 py-6 md:px-6 md:py-7">
              <div className="space-y-3 text-sm leading-relaxed text-white/90 md:text-[15px] md:leading-relaxed">
                <p>Your CV is strong.</p>
                <p>Your experience is relevant.</p>
                <p>Your references are solid.</p>
                <p>
                  But before any of that gets evaluated, something else happens first.
                </p>
                <p>
                  The hiring manager searches your name. In under a minute, they form a judgment based entirely on what Google shows.
                </p>
                <p className="font-semibold text-white">
                  If that page shows anything uncomfortable, your application quietly moves to the bottom.
                </p>
              </div>
            </div>
            <div className="mt-5 rounded-xl border border-white/15 bg-[#061f3d]/60 px-4 py-4">
              <p className="text-[13px] font-semibold text-[#86e991] md:text-[14px]">
                No one tells you why.
              </p>
              <p className="mt-1.5 text-[14px] font-medium italic text-white md:text-[15px]">
                The opportunity simply vanishes.
              </p>
            </div>
            <p className="mt-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8ce596] md:text-[11px]">
              <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
              Silence is the most expensive feedback
            </p>
          </div>
        </section>

        <JobSeekersProblemSection />

        <JobSeekersScaleSection />

        <JobSeekersWhyDifficultSection />

        <IndustryWhatReputation360Section />

        <JobSeekersMarketInsightBanner />

        <IndustryRealisticTimelineSection />

        <JobSeekersFaqSection />

        <section className="rounded-2xl border border-white/15 bg-[#072f5f] px-6 py-10 text-center text-white shadow-[0_16px_40px_-20px_rgba(7,47,95,0.45)] md:px-10 md:py-12">
          <p className="mx-auto max-w-3xl font-heading leading-snug text-white md:leading-snug">
            <span className="block text-[19px] font-semibold md:text-[23px]">
              Your past does not have to follow you into every future opportunity.
            </span>
            <span className="mt-2 block whitespace-nowrap text-[19px] font-semibold md:text-[23px]">
              We make sure it doesn&apos;t.
            </span>
          </p>
          <a
            {...calendlyNewTabProps}
            className="ha-pill mt-7 inline-flex items-center justify-center gap-2 rounded-lg bg-green px-5 py-3 text-sm font-heading font-medium text-white shadow-sm transition-all duration-200 hover:bg-green/90 hover:shadow-lg hover:shadow-green/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#072f5f]"
          >
            Book a Free Confidential Consultation
            <ChevronRight className="h-4 w-4 shrink-0" aria-hidden />
          </a>
        </section>
      </div>
    </main>
  );
}

export default JobSeekersPage;
