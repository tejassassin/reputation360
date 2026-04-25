import { useEffect, useRef, useState } from "react";
import { FaqAccordion } from "../components/FaqAccordion";
import {
  IndustryWhatReputation360Section,
  IndustryRealisticTimelineSection,
  REPUTATION360_BUSINESS_STEPS,
} from "../components/industry/IndustryReputation360Sections";
import { SeoHead } from "../components/SeoHead.jsx";
import { SEO } from "../data/seoPageMeta.js";
import {
  ShieldCheck,
  Search,
  Check,
  AlertTriangle,
  Globe2,
  Users,
  TrendingDown,
  BarChart3,
  Star,
  Layers,
  ChevronRight,
  Building2,
  Crosshair,
  Code2,
  ShoppingBag,
  UtensilsCrossed,
  Briefcase,
  Stethoscope,
  UserSearch,
} from "lucide-react";

const BUSINESS_PROBLEM_TILES = [
  {
    id: "b2b-saas",
    label: "B2B Technology & SaaS",
    description:
      "Negative coverage on G2, Trustpilot, and Capterra; press coverage of data breaches or enterprise contract disputes; TechCrunch, Forbes, and Business Insider articles covering funding difficulties; Glassdoor reviews discussing culture or product concerns.",
    Icon: Code2,
  },
  {
    id: "consumer-retail",
    label: "Consumer products & retail",
    description:
      "Marketplace reviews aggregated by Google; Better Business Bureau and Consumer Affairs complaints; social media threads picked up by news aggregators; FTC, FDA, or CPSC regulatory notices.",
    Icon: ShoppingBag,
  },
  {
    id: "hospitality",
    label: "Restaurants, hospitality & local",
    description:
      "Google Business and Yelp aggregates appearing above your own website; news coverage of health inspections or regulatory notices; social media situations that generated searchable press coverage.",
    Icon: UtensilsCrossed,
  },
  {
    id: "professional",
    label: "Professional services",
    description:
      "Glassdoor reviews affecting both talent acquisition and client perception; former client commentary on LinkedIn or industry forums; regulatory references from AICPA, state bar associations, or sector-specific bodies - for consulting, accounting, staffing, and agencies.",
    Icon: Briefcase,
  },
  {
    id: "healthcare",
    label: "Healthcare, pharma & devices",
    description:
      "FDA warning letters and regulatory notices; adverse event coverage in trade and mainstream press; clinical or product liability proceedings that have become publicly indexed; negative coverage in publications like STAT News or Fierce Pharma.",
    Icon: Stethoscope,
  },
];

const BUSINESS_SCALE_METRICS = [
  {
    id: "research",
    figure: "88%",
    blurb: "Research before purchase",
    description:
      "88% of consumers research a business online before making a purchase decision.",
    Icon: Users,
  },
  {
    id: "reviews",
    figure: "94%",
    blurb: "Reviews change decisions",
    description:
      "94% say a negative review has convinced them not to use a business.",
    Icon: Star,
  },
  {
    id: "b2b-sources",
    figure: "7",
    blurb: "Sources B2B buyers consult",
    description:
      "7 content sources consulted on average by B2B buyers before making a vendor decision - search results are among the first.",
    Icon: Layers,
  },
  {
    id: "conversion",
    figure: "22%",
    blurb: "First-page impact",
    description:
      "22% average reduction in organic lead conversion for companies with a negative first-page result for their brand name.",
    Icon: TrendingDown,
  },
];

const BUSINESS_WHY_STAKES_PILLARS = [
  {
    id: "surfaces",
    label: "Multiple reputation surfaces",
    hook: "Company, founders, and products - each can carry damage.",
    body: "A business has multiple reputation surfaces - your company name, your founders' names, your product names. All of them can carry damaging content.",
    Icon: Building2,
  },
  {
    id: "competitive",
    label: "Competitive dynamics",
    hook: "Competitors and platforms target your brand in search.",
    body: "You also face competitive dynamics that individuals do not. Competitors actively create content targeting your brand name in search. Review platforms have become competitive battlegrounds.",
    Icon: Crosshair,
  },
  {
    id: "stakeholders",
    label: "One result, many audiences",
    hook: "Customers, talent, investors, partners, and press all search.",
    body: "Because you serve multiple stakeholders simultaneously - customers, talent, investors, partners, press - a negative result that affects one group often affects all of them.",
    Icon: Users,
  },
];

const BUSINESS_FAQ_ITEMS = [
  {
    id: "remove-reviews",
    question: "Can we remove negative reviews from Google Business or Yelp?",
    answer:
      "Reviews that violate platform policies - fake reviews, reviews from non-customers, defamatory content - can often be reported and removed. Reviews that do not violate policy are addressed through suppression.",
  },
  {
    id: "competitor-targeting",
    question:
      "What if a competitor is specifically targeting our brand name in search?",
    answer:
      "This is more common than most businesses realize. We identify competitor content campaigns targeting your brand and deploy a counter-content strategy that outranks their efforts.",
  },
  {
    id: "audit-scope",
    question:
      "We have multiple products and multiple founders. Do you audit all of them?",
    answer:
      "Yes. A comprehensive audit covers your company name, all founder names, key product names, and relevant brand search terms.",
  },
  {
    id: "ongoing",
    question: "Is this a one-time project or an ongoing engagement?",
    answer:
      "It depends on your situation. Some businesses engage us for a defined suppression project. Others with ongoing reputation risk work with us on a retained basis. We will recommend the appropriate structure after the audit.",
  },
  {
    id: "success",
    question: "How do you measure success?",
    answer:
      "We track search rankings for your target terms weekly throughout the engagement. Success is defined by displacement - negative content moving beyond the pages where your customers actually search.",
  },
];

function BusinessesProblemSection() {
  const [active, setActive] = useState(0);
  const activeTile = BUSINESS_PROBLEM_TILES[active];
  const ActiveIcon = activeTile.Icon;

  return (
    <section
      id="problem-businesses-face"
      className="mt-12 scroll-mt-28 rounded-[24px] border border-[#d9e3ea] bg-white px-5 py-9 shadow-[0_10px_28px_rgba(15,23,42,0.07)] md:mt-16 md:px-9 md:py-11"
    >
      <h2 className="font-heading text-[26px] font-bold leading-[1.12] text-[#0f2e58] md:text-[32px] md:leading-[1.1]">
        The Problem Businesses Face
      </h2>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#e8ecf7] text-[#1f3b64]">
          <Globe2 className="h-5 w-5" aria-hidden />
        </div>
        <p className="max-w-2xl text-[14px] leading-relaxed text-[#3f4f66] md:text-[15px] md:leading-[1.55]">
          No two businesses have the same reputation challenge. But across all of
          them, the mechanism is identical: negative content in search results
          quietly redirects decisions - customers, partners, talent, investment -
          away from your business, without your knowledge and without recourse.
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
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {BUSINESS_PROBLEM_TILES.map((tile, i) => {
            const Icon = tile.Icon;
            const selected = active === i;
            return (
              <button
                key={tile.id}
                type="button"
                aria-pressed={selected}
                aria-label={`${tile.label}. ${selected ? "Showing details" : "Show details"}`}
                onClick={() => setActive(i)}
                className={`group flex flex-col items-center gap-2.5 rounded-2xl border px-2 py-3 text-center outline-none transition-[border-color,box-shadow,background-color,transform] duration-200 focus-visible:ring-2 focus-visible:ring-navy/35 focus-visible:ring-offset-2 motion-safe:active:scale-[0.98] md:px-2.5 md:py-4 ${
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
                <span className="text-[10px] font-semibold leading-snug text-[#0f2e58] md:text-[11px]">
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
                Selected sector
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
        Negative content in search quietly redirects decisions - often before you
        ever know why the deal, the hire, or the headline went the other way.
      </p>
    </section>
  );
}

function BusinessesScaleSection() {
  const [active, setActive] = useState(0);
  const [entered, setEntered] = useState(false);
  const rootRef = useRef(null);
  const activeMetric = BUSINESS_SCALE_METRICS[active];
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
      id="scale-of-the-problem-businesses"
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
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2">
          {BUSINESS_SCALE_METRICS.map((m, i) => {
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
              (Sources: BrightLocal Consumer Survey; Edelman Trust Barometer;
              Demand Gen Report B2B Buyer Survey)
            </em>
          </p>
        </aside>
      </div>
    </section>
  );
}

function BusinessesWhyStakesSection() {
  const [active, setActive] = useState(0);
  const pillar = BUSINESS_WHY_STAKES_PILLARS[active];
  const ActiveIcon = pillar.Icon;

  return (
    <section
      id="why-stakes-different-businesses"
      className="mt-16 scroll-mt-28 rounded-[24px] border border-[#dce3ec] bg-[#f8f9fc] px-5 py-9 md:mt-20 md:px-9 md:py-11"
    >
      <h2 className="max-w-4xl font-heading text-[26px] font-bold leading-[1.12] text-[#0f2e58] md:text-[32px] md:leading-[1.1]">
        Why This Is More Complex for Businesses Than Individuals
      </h2>
      <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-[#5d6c80] md:text-[14px] md:leading-relaxed">
        Three dynamics that multiply risk in search - tap each to read the full
        context.
      </p>

      <div className="mt-8 grid max-w-5xl gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-stretch">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {BUSINESS_WHY_STAKES_PILLARS.map((p, i) => {
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

function BusinessesMarketInsightBanner() {
  return (
    <section
      id="businesses-market-insight"
      className="mt-10 scroll-mt-28 md:mt-12"
    >
      <div className="flex flex-col gap-8 rounded-[28px] bg-[linear-gradient(90deg,#1b3152_0%,#243d5c_55%,#2a4668_100%)] px-6 py-8 text-white shadow-[0_12px_32px_rgba(27,49,82,0.25)] md:flex-row md:items-center md:justify-between md:gap-10 md:px-10 md:py-10">
        <div className="min-w-0 flex-1">
          <p className="inline-flex rounded-full bg-[#24403b] px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#66bb6a] md:px-3 md:py-1 md:text-[10px]">
            Market Insight
          </p>
          <h2 className="mt-3 font-heading text-[19px] font-bold leading-[1.24] md:mt-4 md:text-[24px] lg:text-[27px]">
            <span className="text-[#4eab66]">88%</span>
            <span className="text-white">
              {" "}
              of consumers research you online before buying.{" "}
            </span>
            <span className="text-[#4eab66]">94%</span>
            <span className="text-white">
              {" "}
              have walked away after one bad review.
            </span>
          </h2>
          <p className="mt-2 text-[10px] leading-relaxed text-white md:mt-2.5 md:text-[11px]">
            (Sources: BrightLocal Consumer Survey; Edelman Trust Barometer; Demand
            Gen Report B2B Buyer Survey)
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

function BusinessesFaqSection() {
  return (
    <section
      id="businesses-faqs"
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
        {BUSINESS_FAQ_ITEMS.map((item, index) => (
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

function BusinessesPage() {
  return (
    <>
      <SeoHead
        title={SEO.businesses.title}
        description={SEO.businesses.description}
        canonicalPath={SEO.businesses.path}
      />
    <main className="flex-1 bg-offwhite pt-28 md:pt-32">
      <div className="mx-auto max-w-6xl space-y-10 px-4 py-10 md:px-6 md:py-14">
        <section className="relative overflow-hidden rounded-[8px] bg-[linear-gradient(110deg,#ececf8_0%,#eef3f6_70%,#edf7f3_100%)] px-3 py-6 md:grid md:grid-cols-[1.03fr_0.97fr] md:items-start md:px-4 md:py-7">
          <div className="max-w-[570px]">
            <h1 className="max-w-[560px] font-heading text-[30px] font-bold leading-[1.05] tracking-tight text-[#0f2e58] sm:text-[34px] md:text-[40px]">
              Your Business May Have a Google Problem. Have You Checked?
            </h1>
            <p className="mt-5 max-w-[520px] text-[15px] leading-[1.5] text-[#4f5f75] md:text-[16px]">
              In thirty seconds, it either builds confidence - or costs you the
              deal.
            </p>
            <a
              href="/contact"
              className="ha-pill mt-6 inline-flex items-center gap-2 rounded-[8px] bg-cta-consult px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cta-consult/25 transition hover:brightness-95"
            >
              Book a Free Business Consultation
            </a>
          </div>
          <div className="rounded-[6px] bg-[linear-gradient(180deg,#e8f5ef_0%,#e7f4ee_100%)] px-3 py-3 pt-1 space-y-3 md:px-4 md:py-4">
            {[
              {
                title: "Brand & search footprint",
                text: "We map company, founder, and product names - where negative content ranks and what it will take to displace it.",
                icon: <Building2 className="h-5 w-5 text-[#6ee27d]" />,
              },
              {
                title: "Built for B2B & consumer",
                text: "From SaaS review platforms to local listings and regulatory notices - strategy matches your sector.",
                icon: <ShieldCheck className="h-5 w-5 text-[#6ee27d]" />,
              },
              {
                title: "Displacement that holds",
                text: "Authoritative brand content and review posture so what people find reflects the business you have built.",
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
                    <h3 className="text-[15px] font-semibold leading-tight text-[#1f3b64] md:text-[16px]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[12px] leading-[1.5] text-[#5d6c80] md:text-[13px]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="businesses-moment-of-truth"
          className="ha-lift mt-12 grid scroll-mt-28 overflow-hidden rounded-[24px] border border-[#123f70] shadow-[0_16px_34px_rgba(16,35,64,0.22)] md:mt-16 md:grid-cols-[1fr_1fr] md:items-stretch"
        >
          <div className="relative flex h-full min-h-[360px] flex-col overflow-hidden bg-[#041a30] md:min-h-[520px]">
            <div
              className="pointer-events-none absolute inset-0 bg-cover bg-[center_28%] bg-no-repeat"
              style={{
                backgroundImage: "url('/lawyers-moment-left.jpg')",
              }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[#041a30]/68"
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
            <div className="relative z-10 flex h-full min-h-0 w-full flex-1 flex-col justify-end p-8 font-heading text-white antialiased md:p-10">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#4a1528] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                <span className="h-2 w-2 shrink-0 rounded-full bg-red-500" />
                THE MOMENT OF TRUTH
              </div>
              <div className="mt-5 flex items-center gap-3">
                <UserSearch className="h-5 w-5 shrink-0 text-white/90" />
                <div className="h-px flex-1 bg-white/35" />
              </div>
              <h2 className="fa-invisible-leak-headline mt-5 w-full max-w-none font-heading text-[22px] font-bold leading-[1.06] tracking-tight sm:text-[26px] md:text-[30px]">
                <span className="block whitespace-nowrap">
                  They search your company name.
                </span>
                <span className="block whitespace-nowrap">
                  What they find decides in seconds.
                </span>
              </h2>
            </div>
          </div>
          <div className="flex flex-col justify-center bg-[#072f5f] p-7 text-white md:p-9">
            <div className="rounded-2xl border border-white/10 bg-white/7 px-5 py-6 md:px-6 md:py-7">
              <div className="flex flex-col gap-2 text-sm leading-relaxed text-white/90 md:gap-2.5 md:text-[15px] md:leading-relaxed">
                <span className="block">
                  A prospective customer is about to make a purchasing decision.
                </span>
                <span className="block">
                  A B2B buyer is completing their vendor shortlist.
                </span>
                <span className="block">
                  A senior candidate has just received your offer and is doing their
                  final research.
                </span>
                <span className="block">
                  A journalist is running background before publishing a piece about
                  your sector.
                </span>
                <span className="block">All of them search your company name.</span>
                <span className="block">
                  What they find in the next thirty seconds either confirms their
                  confidence or introduces doubt.
                </span>
                <span className="block">
                  And doubt, at a decision point, almost always resolves against you.
                </span>
              </div>
            </div>
            <div className="mt-5 rounded-xl border border-white/15 bg-[#061f3d]/60 px-4 py-4">
              <p className="text-[13px] font-semibold text-[#86e991] md:text-[14px]">
                They rarely tell you what they found.
              </p>
              <p className="mt-1.5 text-[14px] font-medium italic text-white md:text-[15px]">
                The impression is set before you get a second chance.
              </p>
            </div>
            <p className="mt-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8ce596] md:text-[11px]">
              <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
              Silence is the most expensive feedback
            </p>
          </div>
        </section>

        <BusinessesProblemSection />

        <BusinessesScaleSection />

        <BusinessesWhyStakesSection />

        <IndustryWhatReputation360Section
          sectionId="what-reputation360-does-businesses"
          steps={REPUTATION360_BUSINESS_STEPS}
        />

        <BusinessesMarketInsightBanner />

        <IndustryRealisticTimelineSection
          sectionId="businesses-realistic-timeline"
          headingId="businesses-realistic-timeline-heading"
        />

        <section className="rounded-2xl border border-white/15 bg-[#072f5f] px-6 py-10 text-center text-white shadow-[0_16px_40px_-20px_rgba(7,47,95,0.45)] md:px-10 md:py-12">
          <p className="mx-auto max-w-3xl font-heading leading-snug text-white md:leading-snug">
            <span className="block text-[19px] font-semibold md:text-[23px]">
              Your business has earned its reputation through real work and real
              results. What people find should reflect that.
            </span>
            <span className="mt-2 block text-[19px] font-semibold md:text-[23px]">
              We make sure it does.
            </span>
          </p>
          <a
            href="/contact"
            className="ha-pill mt-7 inline-flex items-center justify-center gap-2 rounded-lg bg-cta-consult px-5 py-3 text-sm font-heading font-medium text-white shadow-sm transition-all duration-200 hover:brightness-95 hover:shadow-lg hover:shadow-cta-consult/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#072f5f]"
          >
            Book a Free Business Consultation
            <ChevronRight className="h-4 w-4 shrink-0" aria-hidden />
          </a>
        </section>

        <BusinessesFaqSection />
      </div>
    </main>
    </>
  );
}

export default BusinessesPage;
