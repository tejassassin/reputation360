import { useEffect, useRef, useState } from "react";
import { FaqAccordion } from "../components/FaqAccordion";
import {
  IndustryWhatReputation360Section,
  IndustryRealisticTimelineSection,
  REPUTATION360_FINANCIAL_ADVISOR_STEPS,
} from "../components/industry/IndustryReputation360Sections";
import { calendlyNewTabProps } from "../constants/scheduling";
import { SeoHead } from "../components/SeoHead.jsx";
import { SEO } from "../data/seoPageMeta.js";
import {
  ShieldCheck,
  FileWarning,
  AlertTriangle,
  Star,
  Activity,
  ChevronRight,
  Scale,
  Landmark,
  Newspaper,
  ClipboardList,
  MessagesSquare,
  Linkedin,
  Globe2,
  History,
  UserSearch,
  TrendingUp,
  DollarSign,
  Lock,
  ShieldAlert,
  Search,
  Check,
} from "lucide-react";

const FINANCIAL_ADVISOR_PROBLEM_TILES = [
  {
    id: "finra",
    label: "FINRA BrokerCheck",
    description:
      "FINRA BrokerCheck disclosures and enforcement actions",
    Icon: ShieldCheck,
  },
  {
    id: "sec",
    label: "SEC records",
    description:
      "SEC investigation records and administrative proceedings",
    Icon: Scale,
  },
  {
    id: "cftc",
    label: "CFTC & state",
    description:
      "CFTC and state securities regulator disciplinary records",
    Icon: Landmark,
  },
  {
    id: "press",
    label: "Financial press",
    description:
      "Wall Street Journal, Bloomberg, Reuters, and MarketWatch coverage of regulatory proceedings",
    Icon: Newspaper,
  },
  {
    id: "cfpb",
    label: "CFPB & portals",
    description:
      "Complaints filed on CFPB, state attorney general portals, and consumer forums",
    Icon: ClipboardList,
  },
  {
    id: "reviews",
    label: "Reviews & listings",
    description:
      "Negative client reviews on Google Business, Yelp, and financial aggregator directories",
    Icon: Star,
  },
  {
    id: "forums",
    label: "Forums",
    description:
      "Forum discussions on Reddit, Bogleheads, and financial communities mentioning your name",
    Icon: MessagesSquare,
  },
  {
    id: "linkedin",
    label: "LinkedIn & social",
    description:
      "LinkedIn posts or articles by disgruntled former clients or colleagues",
    Icon: Linkedin,
  },
  {
    id: "news",
    label: "Archived news",
    description:
      "Old news coverage of market events where your name or firm was mentioned critically",
    Icon: History,
  },
];

const FINANCIAL_ADVISOR_FAQ_ITEMS = [
  {
    id: "legal-ethical",
    question: "Is reputation suppression legal and ethical?",
    answer:
      "Entirely. We do not alter, hack, or tamper with any existing content. We build new, legitimate, high-quality content that earns its ranking through genuine authority.",
  },
  {
    id: "finra-brokercheck",
    question: "Can FINRA BrokerCheck records actually be suppressed?",
    answer:
      "The records remain on FINRA's database. What changes is whether those pages appear prominently when someone searches your name on Google. Through content strategy and SEO, it is entirely possible to move those results to page two or beyond.",
  },
  {
    id: "discretion",
    question: "Will my clients or colleagues know I am doing this?",
    answer:
      "No. Everything we do is outward-facing content building. The content we create - articles, profiles, website - simply appears as a natural part of your professional digital presence.",
  },
  {
    id: "timeline-results",
    question: "How long before I see results?",
    answer:
      "Meaningful displacement of primary negative results typically takes eight to twelve months, depending on the strength of what we are working against. We will give you a case-specific estimate in your initial consultation.",
  },
  {
    id: "removal-vs-suppression",
    question: "What if removal is possible?",
    answer:
      "Where genuine removal is possible - through privacy law requests, platform policy, or direct publisher outreach - we pursue it. Removal is always the preferred outcome. Suppression is the strategy we deploy when removal is not achievable.",
  },
];

function FinancialAdvisorsProblemSection() {
  const [active, setActive] = useState(0);
  const activeTile = FINANCIAL_ADVISOR_PROBLEM_TILES[active];
  const ActiveIcon = activeTile.Icon;

  return (
    <section
      id="problem-financial-professionals-face"
      className="mt-12 scroll-mt-28 rounded-[24px] border border-[#d9e3ea] bg-white px-5 py-9 shadow-[0_10px_28px_rgba(15,23,42,0.07)] md:mt-16 md:px-9 md:py-11"
    >
      <h2 className="font-heading text-[26px] font-bold leading-[1.12] text-[#0f2e58] md:text-[32px] md:leading-[1.1]">
        The Problem Financial Professionals Face
      </h2>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#e8ecf7] text-[#1f3b64]">
          <Globe2 className="h-5 w-5" aria-hidden />
        </div>
        <p className="max-w-2xl text-[14px] leading-relaxed text-[#3f4f66] md:text-[15px] md:leading-[1.55]">
          Your reputation lives in places you do not control. Regulatory
          databases, financial news archives, complaint portals, and aggregator
          sites all rank prominently for advisor names - and all of them are
          indexed by Google.
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
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {FINANCIAL_ADVISOR_PROBLEM_TILES.map((tile, i) => {
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
        Any one of these, sitting on page one of Google for your name, is silently
        redirecting clients away from you every day.
      </p>
    </section>
  );
}

const ADVISOR_SCALE_METRICS = [
  {
    id: "hnw-research",
    figure: "87%",
    blurb: "HNW investors research you before they wire",
    description:
      "87% of high-net-worth individuals research their financial advisor online before committing funds",
    Icon: UserSearch,
  },
  {
    id: "disclosure-dropoff",
    figure: "74%",
    blurb: "Walk away after a page-one disclosure",
    description:
      "74% say they would not proceed with an advisor if they found a regulatory disclosure on the first page of results",
    Icon: FileWarning,
  },
  {
    id: "conversion",
    figure: "3x",
    blurb: "Strong presence, stronger close rate",
    description:
      "3x higher conversion from initial inquiry to onboarded client reported by advisors with a clean, authoritative online presence",
    Icon: TrendingUp,
  },
  {
    id: "aum-leak",
    figure: "$500K-$2M+",
    blurb: "Estimated annual loss from one bad result",
    description:
      "$500K-$2M+ estimated annual AUM loss from a single negative result on page one, depending on practice size",
    Icon: DollarSign,
  },
];

function FinancialAdvisorsScaleSection() {
  const [active, setActive] = useState(0);
  const [entered, setEntered] = useState(false);
  const rootRef = useRef(null);
  const activeMetric = ADVISOR_SCALE_METRICS[active];
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
      id="scale-of-the-problem"
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
          {ADVISOR_SCALE_METRICS.map((m, i) => {
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
            (Sources: Edelman Trust Barometer Financial Services Report; BrightLocal
            Professional Services Survey)
          </p>
        </aside>
      </div>
    </section>
  );
}

const WHY_HARDER_PILLARS = [
  {
    id: "permanent",
    label: "Permanent record",
    hook: "Source material survives closure, payment, or time.",
    body: "Regulatory records are permanent. A FINRA disclosure or SEC order, once public, cannot be erased from the source. News articles covering proceedings do not disappear because a case was resolved or a penalty was paid.",
    Icon: Lock,
  },
  {
    id: "limited-response",
    label: "Limited response",
    hook: "Public replies can trigger more regulatory exposure.",
    body: "You also cannot respond publicly to many complaints without risking further regulatory scrutiny. A single complaint can generate multiple pages of indexed content - and your options for direct response are severely limited.",
    Icon: ShieldAlert,
  },
  {
    id: "suppression",
    label: "Suppression path",
    hook: "Authority at scale is what moves rankings.",
    body: "This is why suppression is the most effective strategy available: building a stronger, more authoritative presence that displaces negative content from visible search results.",
    Icon: TrendingUp,
  },
];

function FinancialAdvisorsWhyHarderSection() {
  const [active, setActive] = useState(0);
  const pillar = WHY_HARDER_PILLARS[active];
  const ActiveIcon = pillar.Icon;

  return (
    <section
      id="why-harder-than-most"
      className="mt-16 scroll-mt-28 rounded-[24px] border border-[#dce3ec] bg-[#f8f9fc] px-5 py-9 md:mt-20 md:px-9 md:py-11"
    >
      <h2 className="max-w-4xl font-heading text-[26px] font-bold leading-[1.12] text-[#0f2e58] md:text-[32px] md:leading-[1.1]">
        Why This Is Harder for You Than Most
      </h2>
      <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-[#5d6c80] md:text-[14px] md:leading-relaxed">
        Three constraints advisors hit in search - tap each to read the full
        context.
      </p>

      <div className="mt-8 grid max-w-5xl gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-stretch">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {WHY_HARDER_PILLARS.map((p, i) => {
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

function FinancialAdvisorsFaqSection() {
  return (
    <section
      id="financial-advisor-faqs"
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
        {FINANCIAL_ADVISOR_FAQ_ITEMS.map((item, index) => (
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

function FinancialAdvisorsMarketInsightBanner() {
  return (
    <section
      id="financial-advisor-market-insight"
      className="mt-10 scroll-mt-28 md:mt-12"
    >
      <div className="flex flex-col gap-8 rounded-[28px] bg-[linear-gradient(90deg,#1b3152_0%,#243d5c_55%,#2a4668_100%)] px-6 py-8 text-white shadow-[0_12px_32px_rgba(27,49,82,0.25)] md:flex-row md:items-center md:justify-between md:gap-10 md:px-10 md:py-10">
        <div className="min-w-0 flex-1">
          <p className="inline-flex rounded-full bg-[#24403b] px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#66bb6a] md:px-3 md:py-1 md:text-[10px]">
            Market Insight
          </p>
          <h2 className="mt-3 font-heading text-[19px] font-bold leading-[1.24] md:mt-4 md:text-[24px] lg:text-[27px]">
            <span className="text-[#4eab66]">96%</span>
            <span className="text-white">
              {" "}
              of clients research you online before they call.{" "}
            </span>
            <span className="text-[#4eab66]">83%</span>
            <span className="text-white"> check reviews before anything else.</span>
          </h2>
          <p className="mt-2.5 font-heading text-[14px] font-semibold leading-snug text-white md:mt-3 md:text-[16px]">
            Make sure they like what they find.
          </p>
          <p className="mt-2 text-[12px] leading-relaxed text-white/80 md:mt-2.5 md:text-[13px]">
            (Source: Wealthtender)
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

function FinancialAdvisorsPage() {
  return (
    <>
      <SeoHead
        title={SEO.financialAdvisors.title}
        description={SEO.financialAdvisors.description}
        canonicalPath={SEO.financialAdvisors.path}
      />
    <main className="flex-1 pt-28 md:pt-32 bg-offwhite">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-14 space-y-10">
        <section className="rounded-[8px] bg-[linear-gradient(110deg,#ececf8_0%,#eef3f6_70%,#edf7f3_100%)] px-3 py-6 md:px-4 md:py-7 grid gap-5 md:grid-cols-[1.03fr_0.97fr] items-start">
          <div className="max-w-[570px]">
            <h1 className="font-heading text-[34px] md:text-[40px] leading-[1.02] text-[#0f2e58] font-bold tracking-tight max-w-[520px]">
              Your Clients Research You Before Every Meeting. What Are They
              Finding?
            </h1>
            <p className="mt-5 text-[#4f5f75] text-[15px] md:text-[16px] leading-[1.5] max-w-[520px]">
              The wrong answer to that question costs more than you think.
            </p>
            <a
              {...calendlyNewTabProps}
              className="ha-pill mt-6 inline-flex items-center gap-2 rounded-[8px] bg-cta-consult px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cta-consult/25 transition hover:brightness-95"
            >
              Book a Free Confidential Consultation
            </a>
          </div>
          <div className="rounded-[6px] bg-[linear-gradient(180deg,#e8f5ef_0%,#e7f4ee_100%)] px-3 py-3 md:px-4 md:py-4 space-y-3 pt-1">
            {[
              {
                title: "Trust Restored",
                text: "We help financial professionals regain control of their public narrative through ethical suppression.",
                icon: <ShieldCheck className="h-5 w-5 text-[#6ee27d]" />,
              },
              {
                title: "Discretion Guaranteed",
                text: "Your privacy is our priority throughout the entire suppression process.",
                icon: <ShieldCheck className="h-5 w-5 text-[#6ee27d]" />,
              },
              {
                title: "SEO Authority",
                text: "We leverage high-authority networks to ensure long-term ranking stability.",
                icon: <Activity className="h-5 w-5 text-[#6ee27d]" />,
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

        <section className="ha-lift mt-10 md:mt-14 grid md:grid-cols-[1fr_1fr] overflow-hidden rounded-[24px] border border-[#123f70] shadow-[0_16px_34px_rgba(16,35,64,0.22)]">
          <div className="relative min-h-[360px] overflow-hidden bg-[#071a33] md:min-h-[520px]">
            <div
              className="pointer-events-none absolute inset-0 bg-cover bg-[center_28%] bg-no-repeat"
              style={{
                backgroundImage: "url('/financial-advisors-moment-left.jpg')",
              }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[#071a33]/68"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_58%_50%_at_50%_30%,rgba(90,130,190,0.18)_0%,transparent_62%)]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(3,12,26,0.82)_0%,rgba(4,18,36,0.35)_28%,transparent_42%,rgba(4,18,36,0.4)_58%,rgba(3,12,24,0.92)_82%,#020a14_100%)]"
              aria-hidden
            />
            <div className="relative z-10 flex min-h-[360px] flex-col justify-end p-8 font-heading text-white antialiased md:min-h-[520px] md:p-10">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#4a1528] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                <span className="h-2 w-2 shrink-0 rounded-full bg-red-500" />
                THE MOMENT OF TRUTH
              </div>
              <div className="mt-5 flex items-center gap-3">
                <Search
                  className="h-5 w-5 shrink-0 text-white/90"
                  strokeWidth={2}
                />
                <div className="h-px flex-1 bg-white/30" />
              </div>
              <h2 className="fa-invisible-leak-headline mt-5 w-full max-w-none font-heading text-[26px] font-bold leading-[1.08] tracking-tight sm:text-[30px] md:text-[34px]">
                <span className="block whitespace-nowrap">
                  A client searches your name
                </span>
                <span className="block whitespace-nowrap">
                  before the first interview.
                </span>
              </h2>
            </div>
          </div>
          <div className="bg-[#072f5f] text-white p-8 md:p-10">
            <div className="rounded-2xl border border-white/10 bg-white/7 px-5 py-6 md:px-6 md:py-7">
              <div className="space-y-3 text-sm leading-relaxed text-white/90 md:text-[15px] md:leading-relaxed">
                <p>
                  A prospective client searches your name before taking your call.
                </p>
                <p>In under sixty seconds, they have formed a judgment.</p>
                <p>
                  Not based on your track record. Not based on your certifications
                  or your years in practice.
                </p>
                <p>Based entirely on what Google decided to show them.</p>
              </div>
              <div className="mt-6 space-y-3 border-t border-white/15 pt-6 text-sm font-semibold leading-relaxed text-[#86e991] md:text-[15px] md:leading-relaxed">
                <p>
                  If what appears is a regulatory disclosure, a news article covering
                  an investigation, or a complaint on a financial forum - they
                  quietly move on.
                </p>
                <p>You never find out.</p>
                <p className="font-semibold italic text-white/90">
                  But it keeps happening.
                </p>
              </div>
            </div>
            <p className="mt-7 inline-flex items-center gap-2 text-[#8ce596] tracking-[0.14em] uppercase text-[10px] font-semibold">
              <AlertTriangle className="h-3 w-3" />
              Silence is the most expensive feedback
            </p>
          </div>
        </section>

        <FinancialAdvisorsProblemSection />

        <FinancialAdvisorsScaleSection />

        <FinancialAdvisorsWhyHarderSection />

        <IndustryWhatReputation360Section
          steps={REPUTATION360_FINANCIAL_ADVISOR_STEPS}
        />

        <FinancialAdvisorsMarketInsightBanner />

        <IndustryRealisticTimelineSection />

        <section className="rounded-2xl border border-white/15 bg-[#072f5f] px-6 py-10 text-center text-white shadow-[0_16px_40px_-20px_rgba(7,47,95,0.45)] md:px-10 md:py-12">
          <p className="mx-auto max-w-3xl font-heading text-[19px] font-semibold leading-snug text-white md:text-[23px] md:leading-snug">
            <span className="block whitespace-nowrap">
              A regulatory record from years ago should not define who you are today.
            </span>
            <span className="mt-2 block whitespace-nowrap">
              We make sure it doesn&apos;t.
            </span>
          </p>
          <a
            {...calendlyNewTabProps}
            className="ha-pill mt-7 inline-flex items-center justify-center gap-2 rounded-lg bg-cta-consult px-5 py-3 text-sm font-heading font-medium text-white shadow-sm transition-all duration-200 hover:brightness-95 hover:shadow-lg hover:shadow-cta-consult/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#072f5f]"
          >
            Book a Free Confidential Consultation
            <ChevronRight className="h-4 w-4 shrink-0" aria-hidden />
          </a>
        </section>

        <FinancialAdvisorsFaqSection />
      </div>
    </main>
    </>
  );
}

export default FinancialAdvisorsPage;
