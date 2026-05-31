import { useEffect, useRef, useState } from "react";
import { FaqAccordion } from "../components/FaqAccordion";
import { FaqAnswerParagraphs } from "../components/FaqAnswerParagraphs.jsx";
import {
  IndustryWhatReputation360Section,
  IndustryRealisticTimelineSection,
  REPUTATION360_REAL_ESTATE_STEPS,
} from "../components/industry/IndustryReputation360Sections";
import { ConsultationCtas } from "../components/ConsultationCtas";
import { SeeItInActionSection } from "../components/whoWeServe/SeeItInActionSection.jsx";
import { FurtherReadingSection } from "../components/whoWeServe/FurtherReadingSection.jsx";
import { SeoHead } from "../components/SeoHead.jsx";
import { useLocalizedSeo } from "../hooks/useLocalizedSeo.js";
import { faqAdditionalJsonLdFromItems, mapQuestionAnswerFaqs } from "../data/faqPageSchema.js";
import { REAL_ESTATE_FAQ_ITEMS } from "../data/whoWeServeAudienceFaqs.js";
import {
  ShieldCheck,
  FileWarning,
  AlertTriangle,
  Star,
  Activity,
  ChevronRight,
  Scale,
  Newspaper,
  MessagesSquare,
  Linkedin,
  Globe2,
  UserSearch,
  TrendingUp,
  Search,
  Check,
  Lock,
  ShieldAlert,
} from "lucide-react";

const REAL_ESTATE_PROBLEM_TILES = [
  {
    id: "review-portals",
    label: "Yelp & review portals",
    description:
      "Negative reviews or consumer complaints on Yelp, Google Business, and aggregator sites.",
    Icon: Star,
  },
  {
    id: "zillow-realtor",
    label: "Zillow & Realtor.com",
    description:
      "Low star ratings, bad client transaction reviews, or disputes on key real estate platforms.",
    Icon: ShieldCheck,
  },
  {
    id: "social-media",
    label: "Social complaints",
    description:
      "Damaging comments, posts, or tags on Facebook, Instagram, or local community pages.",
    Icon: Linkedin,
  },
  {
    id: "local-press",
    label: "Local press & news",
    description:
      "Searchable local news coverage of contract disputes, client disagreements, or market controversies.",
    Icon: Newspaper,
  },
  {
    id: "complaint-boards",
    label: "Complaint directories",
    description:
      "Outdated complaints indexed on BBB, Ripoff Report, or other consumer complaint boards.",
    Icon: FileWarning,
  },
  {
    id: "forums",
    label: "Community forums",
    description:
      "Forum discussions on Reddit or Nextdoor questioning your professional integrity or conduct.",
    Icon: MessagesSquare,
  },
  {
    id: "legal-records",
    label: "Legal disputes",
    description:
      "Searchable records of commission disputes, lawsuits, or broker licensing proceedings.",
    Icon: Scale,
  },
];

function RealEstateProblemSection() {
  const [active, setActive] = useState(0);
  const activeTile = REAL_ESTATE_PROBLEM_TILES[active];
  const ActiveIcon = activeTile.Icon;

  return (
    <section
      id="problem-real-estate-professionals-face"
      className="mt-12 scroll-mt-28 rounded-[24px] border border-[#d9e3ea] bg-white px-5 py-9 shadow-[0_10px_28px_rgba(15,23,42,0.07)] md:mt-16 md:px-9 md:py-11"
    >
      <h2 className="font-heading text-[26px] font-bold leading-[1.12] text-[#0f2e58] md:text-[32px] md:leading-[1.1]">
        The Problem Real Estate Professionals Face
      </h2>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#e8ecf7] text-[#1f3b64]">
          <Globe2 className="h-5 w-5" aria-hidden />
        </div>
        <p className="max-w-2xl text-[14px] leading-relaxed text-[#3f4f66] md:text-[15px] md:leading-[1.55]">
          Real estate is a referral business built entirely on personal trust. A single damaging
          search result - a retaliatory complaint from a difficult client, an outdated dispute, a
          misleading article, or content that simply tells the wrong story - can quietly undermine
          years of hard-earned credibility.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-b border-[#e2e8f0] pb-4">
        <h3 className="font-heading text-base font-semibold text-[#0f2e58] md:text-lg">
          Where damaging content typically appears:
        </h3>
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_minmax(280px,360px)] lg:items-start">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {REAL_ESTATE_PROBLEM_TILES.map((tile, i) => {
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
        Any one of these, sitting on page one of Google for your name, is silently redirecting
        clients away from you every day.
      </p>
    </section>
  );
}

const REAL_ESTATE_SCALE_METRICS = [
  {
    id: "homebuyer-research",
    figure: "97%",
    blurb: "Homebuyers research agents online",
    description:
      "97% of homebuyers research agents online before making contact. Nearly every potential client will search your name before they speak to you.",
    Icon: UserSearch,
  },
  {
    id: "page-one",
    figure: "95%",
    blurb: "Never look beyond page one",
    description:
      "95% of people never look beyond the first page of search results. If damaging content sits there, it is doing harm every single day.",
    Icon: Search,
  },
  {
    id: "revenue-uplift",
    figure: "5-9%",
    blurb: "Revenue increase per star rating gain",
    description:
      "A one-star rating increase can drive a 5-9% revenue uplift (Harvard Business School). In real estate, where individual transactions generate thousands in commission, that is a material difference.",
    Icon: TrendingUp,
  },
  {
    id: "referral-loop",
    figure: "88%",
    blurb: "Referrals depend on search results",
    description:
      "88% of buyers would use the same agent again or refer them - but only if they can find them first. Your digital presence determines whether that referral loop closes.",
    Icon: Globe2,
  },
];

function RealEstateScaleSection() {
  const [active, setActive] = useState(0);
  const [entered, setEntered] = useState(false);
  const rootRef = useRef(null);
  const activeMetric = REAL_ESTATE_SCALE_METRICS[active];
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
          {REAL_ESTATE_SCALE_METRICS.map((m, i) => {
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
                  entered ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
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
            (Sources: Harvard Business School; National Association of Realtors; BrightLocal
            Professional Services Survey)
          </p>
        </aside>
      </div>
    </section>
  );
}

const REAL_ESTATE_WHY_HARDER_PILLARS = [
  {
    id: "permanent",
    label: "Entrenched negative press",
    hook: "News articles and public complaints hold search positions.",
    body: "Most agents assume that negative content will eventually fade, or that time alone will push it down. In practice, that rarely happens. Search engines favour authoritative, established content. A critical article on a news site or a dispute on a high-authority platform will often hold its position for years - regardless of how many positive transactions follow.",
    Icon: Lock,
  },
  {
    id: "limitations",
    label: "Standard active limits",
    hook: "Just posting more updates rarely moves hard results.",
    body: "The other assumption is that building a stronger presence is simply a matter of being more active online. Posting more content, maintaining social profiles, and ensuring listings are up to date are all worthwhile - but they rarely move a deeply entrenched negative result. The internet does not self-correct.",
    Icon: ShieldAlert,
  },
  {
    id: "suppression",
    label: "Technical suppression path",
    hook: "Search algorithms require authority at scale to shift.",
    body: "What is required is a structured, technically informed approach: one that understands how search algorithms rank content, which content types carry the most authority, and how to systematically build a search presence that displaces harmful results from the positions that matter most.",
    Icon: TrendingUp,
  },
];

function RealEstateWhyHarderSection() {
  const [active, setActive] = useState(0);
  const pillar = REAL_ESTATE_WHY_HARDER_PILLARS[active];
  const ActiveIcon = pillar.Icon;

  return (
    <section
      id="why-harder-than-most"
      className="mt-16 scroll-mt-28 rounded-[24px] border border-[#dce3ec] bg-[#f8f9fc] px-5 py-9 md:mt-20 md:px-9 md:py-11"
    >
      <h2 className="max-w-4xl font-heading text-[26px] font-bold leading-[1.12] text-[#0f2e58] md:text-[32px] md:leading-[1.1]">
        Why This Is Harder Than You Think
      </h2>
      <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-[#5d6c80] md:text-[14px] md:leading-relaxed">
        Three constraints real estate professionals hit in search.
      </p>

      <div className="mt-8 grid max-w-5xl gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-stretch">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {REAL_ESTATE_WHY_HARDER_PILLARS.map((p, i) => {
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

function RealEstateFaqSection() {
  return (
    <section
      id="real-estate-faqs"
      className="mt-14 scroll-mt-28 rounded-[24px] border border-[#dce3ec] bg-[#f8f9fc] px-5 py-9 shadow-[0_10px_28px_rgba(15,23,42,0.04)] md:mt-16 md:px-9 md:py-11"
    >
      <h2 className="max-w-4xl font-heading text-[26px] font-bold leading-[1.12] text-[#0f2e58] md:text-[32px] md:leading-[1.1]">
        Frequently Asked Questions
      </h2>
      <div className="mt-3 h-1.5 w-20 rounded-full bg-[#79df86]" />
      <div className="mt-8 max-w-4xl space-y-4">
        {REAL_ESTATE_FAQ_ITEMS.map((item, index) => (
          <FaqAccordion key={item.id} question={item.question} defaultOpen={index === 0}>
            <FaqAnswerParagraphs answer={item.answer} />
          </FaqAccordion>
        ))}
      </div>
    </section>
  );
}

function RealEstateMarketInsightBanner() {
  return (
    <section id="real-estate-market-insight" className="mt-10 scroll-mt-28 md:mt-12">
      <div className="flex flex-col gap-8 rounded-[28px] bg-[linear-gradient(90deg,#1b3152_0%,#243d5c_55%,#2a4668_100%)] px-6 py-8 text-white shadow-[0_12px_32px_rgba(27,49,82,0.25)] md:flex-row md:items-center md:justify-between md:gap-10 md:px-10 md:py-10">
        <div className="min-w-0 flex-1">
          <p className="inline-flex rounded-full bg-[#24403b] px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#66bb6a] md:px-3 md:py-1 md:text-[10px]">
            Market Insight
          </p>
          <h2 className="mt-3 font-heading text-[19px] font-bold leading-[1.24] md:mt-4 md:text-[24px] lg:text-[27px]">
            <span className="text-[#4eab66]">97%</span>
            <span className="text-white"> of homebuyers research agents online. </span>
            <span className="text-[#4eab66]">95%</span>
            <span className="text-white"> check review and profile links before calling.</span>
          </h2>
          <p className="mt-2.5 font-heading text-[14px] font-semibold leading-snug text-white md:mt-3 md:text-[16px]">
            Make sure they trust what they find.
          </p>
          <p className="mt-2 text-[12px] leading-relaxed text-white/80 md:mt-2.5 md:text-[13px]">
            (Source: National Association of Realtors)
          </p>
        </div>
        <div className="flex shrink-0 justify-center md:justify-end">
          <div className="flex h-[76px] w-[76px] items-center justify-center rounded-2xl border-2 border-[#4eab66] bg-transparent md:h-[88px] md:w-[88px]">
            <div className="relative flex h-11 w-11 items-center justify-center md:h-[52px] md:w-[52px]">
              <Search className="absolute text-white" strokeWidth={1.75} size={46} aria-hidden />
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

function RealEstateBusinessImpactSection() {
  const [entered, setEntered] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
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
      ref={sectionRef}
      id="real-estate-business-impact"
      className="mt-16 scroll-mt-28 space-y-8"
    >
      <h2 className="font-heading text-[26px] font-bold leading-[1.12] text-[#0f2e58] md:text-[32px] md:leading-[1.1]">
        The Direct Business Impact of Online Reputation
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Lead Generation",
            text: "Your search presence is your first showing. Agents with a clean, credible page one attract higher-quality inbound enquiries.",
            Icon: TrendingUp,
            color: "text-emerald-500 bg-emerald-50",
          },
          {
            title: "Client Acquisition Cost",
            text: "A strong reputation reduces what you spend to win business. Referrals cost nothing and convert at the highest rate.",
            Icon: Globe2,
            color: "text-blue-500 bg-blue-50",
          },
          {
            title: "Recruiting & Relationships",
            text: "Top brokerages check your online presence before they recruit you. They want agents who understand brand alignment.",
            Icon: UserSearch,
            color: "text-indigo-500 bg-indigo-50",
          },
          {
            title: "Pricing Power",
            text: "Well-regarded agents can hold their commission rates. Conversations start from a position of earned trust.",
            Icon: ShieldCheck,
            color: "text-teal-500 bg-teal-50",
          },
        ].map((item, i) => {
          const Icon = item.Icon;
          return (
            <article
              key={item.title}
              style={{
                transitionDelay: entered ? `${i * 75}ms` : "0ms",
              }}
              className={`ha-lift rounded-2xl border border-[#dfe6ee] bg-white p-6 shadow-sm hover:border-[#1f3b64]/25 hover:shadow-md transition-all duration-300 ${
                entered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.color} mb-4`}>
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="font-heading font-bold text-[17px] md:text-[18px] text-[#0f2e58]">{item.title}</h3>
              <p className="mt-2.5 text-[14px] md:text-[15px] text-[#4f5f75] leading-relaxed">{item.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function RealEstateChecklistSection() {
  const [entered, setEntered] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
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

  const checklistItems = [
    {
      title: "Google your name in an incognito window",
      text: "What appears in the first ten results? Would a stranger find what they see reassuring?",
      Icon: Search,
      badgeColor: "text-blue-600 bg-blue-50 border-blue-100",
    },
    {
      title: "Check your last post date",
      text: "When did you last share something of value publicly? An inactive presence signals stagnation.",
      Icon: Activity,
      badgeColor: "text-amber-600 bg-amber-50 border-amber-100",
    },
    {
      title: "Verify consistency across platforms",
      text: "Is your contact info, title, and firm name identical everywhere? Inconsistency erodes trust with search engines and clients.",
      Icon: ShieldCheck,
      badgeColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
    },
    {
      title: "Assess your local competition",
      text: "Search the top agents in your market. How does your search presence compare? What impression does theirs create versus yours?",
      Icon: Scale,
      badgeColor: "text-purple-600 bg-purple-50 border-purple-100",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="re-checklist-section"
      className="mt-16 scroll-mt-28 space-y-8"
    >
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <p className="inline-flex rounded-full bg-[#eef2ff] border border-blue-100/50 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue-600 shadow-sm">
          5-Minute Assessment
        </p>
        <h2 className="font-heading text-[26px] font-bold leading-[1.12] text-[#0f2e58] md:text-[32px] md:leading-[1.1] tracking-tight">
          Quick Reputation Checklist: Where Do You Stand?
        </h2>
        <p className="text-[14px] leading-relaxed text-[#5d6c80] md:text-[15px] md:leading-relaxed">
          Before reaching out to us — or even if you decide not to — take five minutes to run this assessment on your digital footprint:
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {checklistItems.map((item, i) => {
          const Icon = item.Icon;
          return (
            <div
              key={i}
              style={{
                transitionDelay: entered ? `${i * 100}ms` : "0ms",
              }}
              className={`group ha-lift flex items-start gap-4 rounded-[22px] border border-[#dfe6ee] bg-white p-5 md:p-6 shadow-sm hover:border-[#1f3b64]/25 hover:shadow-md transition-all duration-300 ${
                entered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${item.badgeColor} shadow-sm transition-transform duration-200 group-hover:scale-105`}>
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h3 className="font-heading font-bold text-[17px] md:text-[18px] text-[#0f2e58] group-hover:text-[#1f3b64] transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] md:text-[15px] text-[#4f5f75] leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* The 5th and hardest question as a custom high-impact card in a split-grid layout */}
      <div
        style={{
          transitionDelay: entered ? "400ms" : "0ms",
        }}
        className={`relative overflow-hidden rounded-[28px] border border-[#1f3b64]/30 bg-[linear-gradient(145deg,#0a1931_0%,#0f284e_50%,#08162d_100%)] p-8 md:p-10 text-white shadow-xl transition-all duration-500 ${
          entered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#8ce596]/8 blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

        <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#8ce596]/10 border border-[#8ce596]/20 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8ce596]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8ce596] animate-pulse" />
              The Hard Question
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold leading-[1.2] text-white tracking-tight">
              &ldquo;Would you hire yourself based solely on what you find online right now?&rdquo;
            </h3>
            <div className="h-1.5 w-16 rounded-full bg-[#8ce596]/85" />
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/[0.07] p-6 backdrop-blur-sm shadow-md">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#8ce596]/15 border border-[#8ce596]/30 text-[#8ce596] shadow-sm">
                <AlertTriangle className="h-5 w-5" aria-hidden />
              </span>
              <div className="space-y-3">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#8ce596]">
                  Moment of Truth
                </p>
                <p className="text-[15px] md:text-[16px] text-white font-medium leading-relaxed">
                  Be completely honest. If a potential client or seller searches your name and finds a mix of inactive profiles, outdated listings, or negative results—would they feel confident signing with you, or would they keep looking?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RealEstatePage() {
  const seo = useLocalizedSeo("realEstate");
  return (
    <>
      <SeoHead
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.path}
        additionalJsonLd={faqAdditionalJsonLdFromItems(
          mapQuestionAnswerFaqs(REAL_ESTATE_FAQ_ITEMS),
        )}
      />
      <main className="flex-1 bg-offwhite pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-14 space-y-10">
          <section className="rounded-[8px] bg-[linear-gradient(110deg,#ececf8_0%,#eef3f6_70%,#edf7f3_100%)] px-3 py-6 md:px-4 md:py-7 grid gap-5 md:grid-cols-[1.03fr_0.97fr] items-start">
            <div className="max-w-[570px]">
              <h1 className="font-heading text-[34px] md:text-[40px] leading-[1.02] text-[#0f2e58] font-bold tracking-tight max-w-[520px]">
                Online Reputation Management for Real Estate Agents & Brokers
              </h1>
              <p className="mt-5 text-[#4f5f75] text-[15px] md:text-[16px] leading-[1.5] max-w-[520px]">
                Your next client will Google you before they call you. What they find in those first
                few results determines whether they reach out, or quietly move on.
              </p>
              <ConsultationCtas
                variant="inlineLight"
                consultLabel="Book a Free Confidential Consultation"
                wrapperClassName="mt-6"
              />
            </div>
            <div className="rounded-[6px] bg-[linear-gradient(180deg,#e8f5ef_0%,#e7f4ee_100%)] px-3 py-3 md:px-4 md:py-4 space-y-3 pt-1">
              {[
                {
                  title: "Trust Restored",
                  text: "We help real estate professionals take control of their public search narrative through ethical suppression.",
                  icon: <ShieldCheck className="h-5 w-5 text-[#6ee27d]" />,
                },
                {
                  title: "Discretion Guaranteed",
                  text: "Your privacy and commercial reputation are protected throughout the entire process.",
                  icon: <ShieldCheck className="h-5 w-5 text-[#6ee27d]" />,
                },
                {
                  title: "SEO Authority",
                  text: "We leverage high-authority directory networks and listings to ensure long-term ranking stability.",
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
                className="pointer-events-none absolute inset-0 bg-cover bg-[center_28%] bg-no-repeat opacity-40"
                style={{
                  backgroundImage: "url('/financial-advisors-moment-left.jpg')",
                }}
                aria-hidden
              />
              <div className="pointer-events-none absolute inset-0 bg-[#071a33]/68" aria-hidden />
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
                  <Search className="h-5 w-5 shrink-0 text-white/90" strokeWidth={2} />
                  <div className="h-px flex-1 bg-white/30" />
                </div>
                <h2 className="fa-invisible-leak-headline mt-5 w-full max-w-none font-heading text-[26px] font-bold leading-[1.08] tracking-tight sm:text-[30px] md:text-[34px]">
                  <span className="block">A seller Googles your name</span>
                  <span className="block">before the listing appointment.</span>
                </h2>
              </div>
            </div>
            <div className="bg-[#072f5f] text-white p-8 md:p-10 flex flex-col justify-center">
              <div className="rounded-2xl border border-white/10 bg-white/7 px-5 py-6 md:px-6 md:py-7">
                <div className="space-y-3 text-sm leading-relaxed text-white/90 md:text-[15px] md:leading-relaxed">
                  <p>In real estate, trust is not built in the room.</p>
                  <p>It is built on the screen, before you ever make your pitch.</p>
                  <p>
                    A single negative reviews page or critical blog link is enough to make a referral
                    quietly choose someone else.
                  </p>
                  <p>Reputation360 helps real estate professionals take back control.</p>
                </div>
                <div className="mt-6 space-y-3 border-t border-white/15 pt-6 text-sm font-semibold leading-relaxed text-[#86e991] md:text-[15px] md:leading-relaxed">
                  <p>If what they find is clear and positive, they call.</p>
                  <p>If they find controversy, they move on. You never know it happened.</p>
                  <p className="font-semibold italic text-white/90">But it keeps happening.</p>
                </div>
              </div>
              <p className="mt-7 inline-flex items-center gap-2 text-[#8ce596] tracking-[0.14em] uppercase text-[10px] font-semibold">
                <AlertTriangle className="h-3 w-3" />
                Silence is the most expensive feedback
              </p>
            </div>
          </section>

          <section className="mt-12 scroll-mt-28 space-y-8" id="real-estate-careers-impact">
            <h2 className="font-heading text-[26px] font-bold leading-[1.12] text-[#0f2e58] md:text-[32px] md:leading-[1.1]">
              How a Poor Online Presence Limits Real Estate Careers
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <article className="rounded-2xl border border-[#dfe6ee] bg-white p-6 shadow-sm">
                <h3 className="font-heading text-lg font-bold text-[#0f2e58]">
                  For New Agents: Building Credibility from Zero
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4f5f75]">
                  Becoming a real estate agent without investing in your online presence is like
                  opening an office with no signage. Potential clients cannot find you — and when
                  they do, there is nothing to build confidence. New agents face unique challenges: no
                  track record to point to, a limited referral network, and immediate competition
                  from established agents. Your digital presence becomes your proof of
                  professionalism before you have the history to speak for itself.
                </p>
              </article>
              <article className="rounded-2xl border border-[#dfe6ee] bg-white p-6 shadow-sm">
                <h3 className="font-heading text-lg font-bold text-[#0f2e58]">
                  For Experienced Agents: Protecting and Leveraging
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4f5f75]">
                  Established agents often have the business but underestimate how much an unmanaged or
                  damaged search presence is costing them at the margins. Clients who do not call.
                  Referrals that go elsewhere. Top brokerages that look at your digital footprint
                  before they look at your numbers. Your track record means nothing if the first page
                  of results does not reflect it.
                </p>
              </article>
              <article className="rounded-2xl border border-[#dfe6ee] bg-white p-6 shadow-sm">
                <h3 className="font-heading text-lg font-bold text-[#0f2e58]">
                  For Brokers & Agency Owners: Your Brand Is on the Line
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4f5f75]">
                  When you run a brokerage, your personal reputation and your business reputation are
                  inseparable. A negative result for your name or your agency affects every agent
                  under your brand, every recruitment conversation, and every new client who searches
                  before signing. The stakes are higher, and the complexity of managing reputation
                  across an organisation is greater — which is why specialist support matters more, not
                  less.
                </p>
              </article>
            </div>
          </section>

          <RealEstateProblemSection />

          <RealEstateScaleSection />

          <RealEstateWhyHarderSection />

          <IndustryWhatReputation360Section steps={REPUTATION360_REAL_ESTATE_STEPS} />

          <RealEstateMarketInsightBanner />

          <RealEstateBusinessImpactSection />

          <IndustryRealisticTimelineSection />

          <RealEstateChecklistSection />

          <SeeItInActionSection audiencePath={seo.path} />

          <FurtherReadingSection audiencePath={seo.path} />

          <section className="rounded-2xl border border-white/15 bg-[#072f5f] px-6 py-10 text-center text-white shadow-[0_16px_40px_-20px_rgba(7,47,95,0.45)] md:px-10 md:py-12">
            <p className="mx-auto max-w-3xl font-heading text-[19px] font-semibold leading-snug text-white md:text-[23px] md:leading-snug">
              <span className="block">Your next listing should not be cost by an unmanaged search presence.</span>
              <span className="mt-2 block">We make sure it isn&apos;t.</span>
            </p>
            <ConsultationCtas
              variant="inlineDarkFooter"
              consultLabel="Book a Free Confidential Consultation"
              consultSuffix={<ChevronRight className="h-4 w-4 shrink-0" aria-hidden />}
              wrapperClassName="mt-7"
            />
          </section>

          <RealEstateFaqSection />
        </div>
      </main>
    </>
  );
}

export default RealEstatePage;
