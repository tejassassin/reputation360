import { useEffect, useRef, useState } from "react";
import { FaqAccordion } from "../components/FaqAccordion";
import { FaqAnswerParagraphs } from "../components/FaqAnswerParagraphs.jsx";
import {
  IndustryWhatReputation360Section,
  IndustryRealisticTimelineSection,
  REPUTATION360_INDIVIDUAL_STEPS,
  REALISTIC_TIMELINE_INDIVIDUAL_PHASES,
} from "../components/industry/IndustryReputation360Sections";
import { ConsultationCtas } from "../components/ConsultationCtas";
import { SeeItInActionSection } from "../components/whoWeServe/SeeItInActionSection.jsx";
import { FurtherReadingSection } from "../components/whoWeServe/FurtherReadingSection.jsx";
import { SeoHead } from "../components/SeoHead.jsx";
import { useLocalizedSeo } from "../hooks/useLocalizedSeo.js";
import { faqAdditionalJsonLdFromItems, mapQuestionAnswerFaqs } from "../data/faqPageSchema.js";
import { PERSONAL_REPUTATION_FAQ_ITEMS as INDIVIDUAL_FAQ_ITEMS } from "../data/whoWeServeAudienceFaqs.js";
import {
  ShieldCheck,
  Search,
  Check,
  AlertTriangle,
  Users,
  Star,
  ChevronRight,
  UserSearch,
  Newspaper,
  ShieldAlert,
  Link2,
  Smartphone,
  DoorOpen,
  Fingerprint,
  Heart,
  Lock,
  BadgeX,
  EyeOff,
  Scale,
  Copyright,
  Globe2,
  History,
  MessageSquareText,
  Share2,
  FileWarning,
  LineChart,
} from "lucide-react";

const removalVsSuppressionDirect = [
  {
    text: "Defamatory content (legal channel)",
    dot: "green",
    Icon: Scale,
  },
  {
    text: "Copyright or privacy violations",
    dot: "green",
    Icon: Copyright,
  },
  {
    text: "Platform terms of service breaches",
    dot: "green",
    Icon: ShieldCheck,
  },
  {
    text: "Right to be forgotten - GDPR-eligible (EU/UK)",
    dot: "green",
    Icon: Globe2,
  },
  {
    text: "Outdated or factually incorrect indexed content",
    dot: "olive",
    Icon: History,
  },
];

const removalVsSuppressionStrategy = [
  { text: "Legacy negative press or articles", Icon: Newspaper },
  { text: "Review-based complaints and forum threads", Icon: MessageSquareText },
  { text: "Social media content outside your control", Icon: Share2 },
  { text: "Content that does not qualify for removal", Icon: FileWarning },
  { text: "Any situation requiring long-term search control", Icon: LineChart },
];

const INDIVIDUAL_WHO_FOR_TILES = [
  {
    id: "news-legal",
    label: "Old News Articles and Legal Records Appearing in Search",
    description:
      "Individuals with old news articles covering a legal matter, an arrest, a court case, or an allegation - regardless of outcome.",
    Icon: Newspaper,
  },
  {
    id: "defamation",
    label: "Online Defamation and Harassment Damaging Your Reputation",
    description:
      "People who have been the subject of defamatory content, false accusations, or targeted harassment campaigns online.",
    Icon: ShieldAlert,
  },
  {
    id: "family-link",
    label: "Mistakenly Linked to Someone Else's Negative Content",
    description:
      "Those whose name is associated with a family member's or former partner's negative content in search.",
    Icon: Link2,
  },
  {
    id: "social-past",
    label: "Past Social Media Posts Appearing in Google Search Results",
    description:
      "People whose personal social media content from years ago is now ranking in search and creating problems.",
    Icon: Smartphone,
  },
  {
    id: "high-control",
    label: "Rebuilding Your Reputation After Leaving a High-Control Group",
    description:
      "Individuals who have left a cult, a high-control group, or an organization that has generated content about them they cannot control.",
    Icon: DoorOpen,
  },
  {
    id: "common-name",
    label: "Negative Results for the Wrong Person With Your Name",
    description:
      "People with a common name who are negatively affected by results belonging to a different person.",
    Icon: Fingerprint,
  },
];

const INDIVIDUAL_SCALE_METRICS = [
  {
    id: "searched",
    figure: "85%",
    blurb: "How People Search Your Name Before Every Meeting",
    description:
      "85% of adults say they have searched someone's name online before meeting them - professionally or personally.",
    Icon: Search,
  },
  {
    id: "reconsider",
    figure: "70%",
    blurb: "How One Negative Result Creates Doubt and Second Thoughts",
    description:
      "70% say something negative in a search result would cause them to reconsider a relationship or opportunity.",
    Icon: Users,
  },
  {
    id: "still-ranks",
    figure: "Still",
    blurb: "How Old Content Still Causes Live Reputation Damage",
    description:
      "Content that is years old, resolved, or factually wrong still ranks - and still does damage - without any warning to the person it concerns.",
    Icon: Star,
  },
];

const INDIVIDUAL_WHY_PILLARS = [
  {
    id: "private",
    label: "Why Personal Reputation Management Must Be Private & Confidential",
    hook: "Your consultation stays between you and us.",
    body: "Consultation, audit, and strategy stay between you and us - no visible signal that you are managing your reputation.",
    Icon: Lock,
  },
  {
    id: "removal-first",
    label: "Removal First, Suppression When Needed: Our Dual Approach",
    hook: "Ethical removal paths come before displacement.",
    body: "We pursue every ethical removal path before building the positive presence that displaces what cannot come down.",
    Icon: ShieldCheck,
  },
  {
    id: "your-story",
    label: "A Personal Reputation Strategy Built Around Your Genuine Story",
    hook: "Not a template - a plan for what you face.",
    body: "Not a template - a careful audit and a plan for what you are actually dealing with, at a pace you are comfortable with.",
    Icon: Heart,
  },
];

function IndividualsWhoForSection() {
  const [active, setActive] = useState(0);
  const activeTile = INDIVIDUAL_WHO_FOR_TILES[active];
  const ActiveIcon = activeTile.Icon;

  return (
    <section
      id="who-individuals-page-for"
      className="mt-12 scroll-mt-28 rounded-[24px] border border-[#d9e3ea] bg-white px-5 py-9 shadow-[0_10px_28px_rgba(15,23,42,0.07)] md:mt-16 md:px-9 md:py-11"
    >
      <h2 className="font-heading text-[26px] font-bold leading-[1.12] text-[#0f2e58] md:text-[32px] md:leading-[1.1]">
        Who Needs Personal Reputation Management?
      </h2>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-b border-[#e2e8f0] pb-4">
        <p className="text-xs font-medium text-[#5d6c80] md:text-[13px]">
          Six common situations we help with
        </p>
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_minmax(280px,360px)] lg:items-start">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {INDIVIDUAL_WHO_FOR_TILES.map((tile, i) => {
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
                <h3 style={{position:'absolute',left:'-9999px',width:'1px',height:'1px',overflow:'hidden'}}>{tile.label}</h3>
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
          aria-label="Selected audience"
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
                Selected
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
    </section>
  );
}

function IndividualsScaleSection() {
  const [active, setActive] = useState(0);
  const [entered, setEntered] = useState(false);
  const rootRef = useRef(null);
  const activeMetric = INDIVIDUAL_SCALE_METRICS[active];
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
      id="scale-of-the-problem-individuals"
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
          The Real Impact of Negative Search Results on Your Personal Reputation
        </h2>
      </div>

      <div className="relative mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] lg:items-stretch">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 md:gap-4">
          {INDIVIDUAL_SCALE_METRICS.map((m, i) => {
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
                <h3 style={{position:'absolute',left:'-9999px',width:'1px',height:'1px',overflow:'hidden'}}>{m.blurb}</h3>
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
              (Sources: Pew Research Center; Harris Poll Online Reputation Survey)
            </em>
          </p>
        </aside>
      </div>
    </section>
  );
}

function IndividualsWhySection() {
  const [active, setActive] = useState(0);
  const pillar = INDIVIDUAL_WHY_PILLARS[active];
  const ActiveIcon = pillar.Icon;

  return (
    <section
      id="why-personal-reputation-different"
      className="mt-16 scroll-mt-28 rounded-[24px] border border-[#dce3ec] bg-[#f8f9fc] px-5 py-9 md:mt-20 md:px-9 md:py-11"
    >
      <h2 className="max-w-4xl font-heading text-[26px] font-bold leading-[1.12] text-[#0f2e58] md:text-[32px] md:leading-[1.1]">
        Why Personal Reputation Cases Require a Different Approach
      </h2>
      <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-[#5d6c80] md:text-[14px] md:leading-relaxed">
        Three realities personal cases carry in search.
      </p>

      <div className="mt-8 grid max-w-5xl gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-stretch">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {INDIVIDUAL_WHY_PILLARS.map((p, i) => {
            const Icon = p.Icon;
            const isSelected = active === i;
            return (
              <article
                key={p.id}
                className={`flex flex-col items-center rounded-2xl border px-3 py-4 text-center outline-none transition-all duration-200 sm:py-5 ${
                  isSelected
                    ? "border-[#1f3b64] bg-white shadow-[0_12px_28px_-14px_rgba(31,59,100,0.22)] ring-1 ring-[#1f3b64]/15"
                    : "border-[#dfe6ee] bg-white/70"
                }`}
              >
                <h3 className="font-heading text-[13px] font-semibold leading-tight text-[#0f2e58] md:text-sm">
                  {p.label}
                </h3>
                <button
                  type="button"
                  aria-pressed={isSelected}
                  aria-label={`${p.label}: ${p.body}`}
                  onClick={() => setActive(i)}
                  className="mt-3 flex w-full flex-col items-center rounded-xl outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#1f3b64]/30 focus-visible:ring-offset-2"
                >
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl shadow-sm transition-[background-color,color,box-shadow] duration-200 ${
                      isSelected
                        ? "bg-[#1f3b64] text-white shadow-[0_6px_16px_-4px_rgba(31,59,100,0.45)]"
                        : "bg-[#f0f2f7] text-[#1f3b64]/80"
                    }`}
                  >
                    <Icon
                      className="h-5 w-5"
                      aria-hidden
                      strokeWidth={isSelected ? 2.25 : 1.75}
                      absoluteStrokeWidth
                    />
                  </span>
                  <span className="mt-2 text-[11px] leading-snug text-[#5d6c80] md:text-[12px]">
                    {p.hook}
                  </span>
                </button>
              </article>
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

function IndividualsWhatCanBeDoneSection() {
  const [removalFocus, setRemovalFocus] = useState(null);

  const removalLeftShell =
    "ha-lift relative flex h-full min-h-full min-w-0 w-full flex-col border-0 p-5 text-left outline-none transition-[box-shadow,background-color,ring,opacity] duration-200 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-navy/35 sm:p-6 md:p-7";
  const removalLeftActive =
    "cursor-pointer bg-white ring-2 ring-inset ring-navy/25 [box-shadow:inset_0_0_0_1px_rgba(31,59,100,0.06)]";
  const removalLeftInactive =
    "cursor-pointer bg-gradient-to-br from-white to-[#f3f6fa] [box-shadow:inset_0_0_0_1px_rgba(31,59,100,0.04)] hover:bg-white hover:[box-shadow:inset_0_0_0_1px_rgba(31,59,100,0.08)]";

  const removalRightShell =
    "ha-lift relative flex h-full min-h-full min-w-0 w-full flex-col border-0 p-5 text-left outline-none transition-[box-shadow,background-color,ring,opacity] duration-200 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-300/45 sm:p-6 md:p-7";
  const removalRightActive =
    "cursor-pointer bg-gradient-to-br from-[#061f3d] via-[#072f5f] to-[#0c4a7a] ring-2 ring-inset ring-emerald-400/40 [box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.06)]";
  const removalRightInactive =
    "cursor-pointer bg-gradient-to-br from-[#051a33] via-[#072f5f] to-[#082f52] [box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.05)] hover:[box-shadow:inset_0_0_0_1px_rgba(167,243,208,0.12)]";

  return (
    <section id="what-can-be-done-individuals" className="mt-12 scroll-mt-28 md:mt-16">
      <h2 className="text-center font-heading text-3xl font-bold tracking-tight text-navy md:text-4xl">
        Removal vs Suppression: Which Do You Need?
      </h2>
      <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-navy/70 md:text-lg">
        Not every negative result can be permanently deleted. Here is an honest
        breakdown of both routes - most clients benefit from a combination.
      </p>
      <div className="mt-8 grid w-full min-w-0 grid-cols-1 overflow-hidden rounded-2xl border border-navy/12 shadow-[0_18px_44px_-20px_rgba(15,35,60,0.18)] md:grid-cols-2 md:items-stretch md:[grid-template-columns:minmax(0,1fr)_minmax(0,1fr)]">
        <article
          role="button"
          tabIndex={0}
          aria-pressed={removalFocus === "direct"}
          aria-label="Direct removal - select to highlight this option"
          onClick={() => setRemovalFocus("direct")}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setRemovalFocus("direct");
            }
          }}
          className={`${removalLeftShell} ${
            removalFocus === "direct" ? removalLeftActive : removalLeftInactive
          } ${
            removalFocus === "suppression"
              ? "opacity-[0.88] md:opacity-[0.92]"
              : ""
          } border-b border-navy/10 md:border-b-0 md:border-r`}
        >
          <div className="flex min-h-0 w-full min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#fff5f5] via-[#ffecec] to-[#ffd6d6] shadow-sm ring-1 ring-red-200/70 sm:h-12 sm:w-12">
              <BadgeX
                className="h-5 w-5 text-[#b91c1c]"
                strokeWidth={1.65}
                aria-hidden
              />
            </div>
            <div className="min-w-0 w-full flex-1 basis-0">
              <div className="flex flex-wrap items-start justify-between gap-2 gap-y-2">
                <h3
                  className={`min-w-0 flex-1 font-heading text-lg font-bold leading-tight sm:text-xl ${
                    removalFocus === "direct" ? "text-navy" : "text-navy/75"
                  }`}
                >
                  Direct Content Removal: When It's Possible
                </h3>
                {removalFocus === "direct" ? (
                  <span className="shrink-0 rounded-full bg-navy px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-white shadow-sm">
                    Selected
                  </span>
                ) : null}
              </div>
              <p className="mt-3 max-w-none text-sm leading-relaxed text-navy/75 sm:text-[15px]">
                Permanent deletion of content from its source. Only available under
                qualifying circumstances, which we assess during your consultation.
              </p>
              <ul className="mt-5 w-full min-w-0 space-y-2.5 text-sm leading-snug text-navy/85 sm:text-[15px]">
                {removalVsSuppressionDirect.map((item) => {
                  const RowIcon = item.Icon;
                  const isOlive = item.dot === "olive";
                  return (
                    <li
                      key={item.text}
                      className="group/row flex w-full min-w-0 gap-2.5 rounded-lg py-1 transition-colors duration-200 hover:bg-navy/[0.03]"
                    >
                      <div
                        className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg shadow-sm ring-1 transition-transform duration-200 group-hover/row:scale-[1.02] ${
                          isOlive
                            ? "bg-gradient-to-br from-[#faf6ef] to-[#ede4d3] ring-amber-200/80"
                            : "bg-gradient-to-br from-[#ecfdf3] to-[#d1fae0] ring-emerald-200/80"
                        }`}
                      >
                        <RowIcon
                          className={`h-3.5 w-3.5 ${
                            isOlive ? "text-[#6b5b2e]" : "text-[#166534]"
                          }`}
                          strokeWidth={1.65}
                          aria-hidden
                        />
                      </div>
                      <span className="min-w-0 flex-1 basis-0 pt-0.5 leading-snug">
                        {item.text}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </article>
        <article
          role="button"
          tabIndex={0}
          aria-pressed={removalFocus === "suppression"}
          aria-label="Suppression strategy - select to highlight this option"
          onClick={() => setRemovalFocus("suppression")}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setRemovalFocus("suppression");
            }
          }}
          className={`${removalRightShell} ${
            removalFocus === "suppression"
              ? removalRightActive
              : removalRightInactive
          } ${
            removalFocus === "direct"
              ? "opacity-[0.9] md:opacity-[0.94]"
              : ""
          }`}
        >
          <div className="flex min-h-0 w-full min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#0f4a5c] via-[#0d3d52] to-[#082f45] shadow-md ring-1 ring-white/15 sm:h-12 sm:w-12">
              <EyeOff
                className="h-5 w-5 text-[#86efac]"
                strokeWidth={1.65}
                aria-hidden
              />
            </div>
            <div className="min-w-0 w-full flex-1 basis-0">
              <div className="flex flex-wrap items-start justify-between gap-2 gap-y-2">
                <h3
                  className={`min-w-0 flex-1 font-heading text-lg font-bold leading-tight text-white sm:text-xl ${
                    removalFocus === "suppression"
                      ? "text-white"
                      : "text-white/90"
                  }`}
                >
                  Suppression Strategy: When Removal Isn't Possible
                </h3>
                {removalFocus === "suppression" ? (
                  <span className="shrink-0 rounded-full border border-emerald-300/40 bg-emerald-400/15 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-emerald-50 shadow-sm backdrop-blur-sm">
                    Selected
                  </span>
                ) : null}
              </div>
              <p className="mt-3 max-w-none text-sm leading-relaxed text-white/88 sm:text-[15px]">
                The most reliable and broadly applicable method. We build content
                that outranks negative results and pushes them to page 3 and beyond -
                effective even for content that cannot be removed.
              </p>
              <ul className="mt-5 w-full min-w-0 space-y-2.5 text-sm leading-snug text-white/92 sm:text-[15px]">
                {removalVsSuppressionStrategy.map((item) => {
                  const RowIcon = item.Icon;
                  return (
                    <li
                      key={item.text}
                      className="group/row flex w-full min-w-0 gap-2.5 rounded-lg py-1 transition-colors duration-200 hover:bg-white/[0.06]"
                    >
                      <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/10 shadow-inner ring-1 ring-white/15 backdrop-blur-sm transition-transform duration-200 group-hover/row:scale-[1.02]">
                        <RowIcon
                          className="h-3.5 w-3.5 text-emerald-200/95"
                          strokeWidth={1.65}
                          aria-hidden
                        />
                      </div>
                      <span className="min-w-0 flex-1 basis-0 pt-0.5 leading-snug">
                        {item.text}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function IndividualsMarketInsightBanner() {
  return (
    <section
      id="individuals-market-insight"
      className="mt-10 scroll-mt-28 md:mt-12"
    >
      <div className="flex flex-col gap-8 rounded-[28px] bg-[linear-gradient(90deg,#1b3152_0%,#243d5c_55%,#2a4668_100%)] px-6 py-8 text-white shadow-[0_12px_32px_rgba(27,49,82,0.25)] md:flex-row md:items-center md:justify-between md:gap-10 md:px-10 md:py-10">
        <div className="min-w-0 flex-1">
          <p className="inline-flex rounded-full bg-[#24403b] px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#66bb6a] md:px-3 md:py-1 md:text-[10px]">
            Market Insight
          </p>
          <div
            className="mt-3 text-[19px] font-semibold leading-[1.24] md:mt-4 md:text-[24px] lg:text-[27px]"
            role="group"
            aria-label="Search behavior statistics"
          >
            <p className="m-0">
              <span className="font-heading text-[#4eab66]">85%</span>
              <span className="text-white">
                {" "}
                of people search your name before meeting you.{" "}
              </span>
              <span className="font-heading text-[#4eab66]">70%</span>
              <span className="text-white">
                {" "}
                will reconsider based on what they find.
              </span>
            </p>
          </div>
          <p className="mt-2 text-[10px] leading-relaxed text-white md:mt-2.5 md:text-[11px]">
            (Sources: Pew Research Center; Harris Poll Online Reputation Survey)
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

function IndividualsFaqSection() {
  return (
    <section
      id="individuals-faqs"
      className="mt-14 scroll-mt-28 rounded-[24px] border border-[#dce3ec] bg-[#f8f9fc] px-5 py-9 shadow-[0_10px_28px_rgba(15,23,42,0.04)] md:mt-16 md:px-9 md:py-11"
    >
      <h2 className="max-w-4xl font-heading text-[26px] font-bold leading-[1.12] text-[#0f2e58] md:text-[32px] md:leading-[1.1]">
        Frequently Asked Questions About Personal Reputation Management
      </h2>
      <div className="mt-3 h-1.5 w-20 rounded-full bg-[#79df86]" />
      <div className="mt-8 max-w-4xl space-y-4">
        {INDIVIDUAL_FAQ_ITEMS.map((item, index) => (
          <FaqAccordion
            key={item.id}
            question={item.question}
            defaultOpen={index === 0}
          >
            <FaqAnswerParagraphs answer={item.answer} />
          </FaqAccordion>
        ))}
      </div>
    </section>
  );
}

function IndividualsPage() {
  const seo = useLocalizedSeo("individuals");
  return (
    <>
      <SeoHead
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.path}
        additionalJsonLd={faqAdditionalJsonLdFromItems(
          mapQuestionAnswerFaqs(INDIVIDUAL_FAQ_ITEMS),
        )}
      />
    <main className="flex-1 bg-offwhite">
      <div className="mx-auto max-w-6xl space-y-10 px-4 py-10 md:px-6 md:py-14">
        <section className="relative overflow-hidden rounded-[8px] bg-[linear-gradient(110deg,#ececf8_0%,#eef3f6_70%,#edf7f3_100%)] px-3 py-6 md:grid md:grid-cols-[1.03fr_0.97fr] md:items-start md:px-4 md:py-7">
          <div className="max-w-[580px]">
            <h1 className="max-w-[560px] font-heading text-[22px] font-bold leading-[1.12] tracking-tight text-[#0f2e58] sm:text-[26px] md:text-[30px] lg:text-[34px]">Personal Reputation Management Services — Take Back Control of Your Google Results</h1>
            <p className="mt-5 max-w-[520px] text-[15px] leading-[1.5] text-[#4f5f75] md:text-[16px]">
              When your name is searched, old stories shouldn&apos;t own your next
              chapter.
            </p>
            <ConsultationCtas
              variant="inlineLight"
              consultHref="/contact"
              consultLabel="Book a Free Confidential Consultation"
              wrapperClassName="mt-6"
            />
          </div>
          <div className="rounded-[6px] bg-[linear-gradient(180deg,#e8f5ef_0%,#e7f4ee_100%)] px-3 py-3 pt-1 space-y-3 md:px-4 md:py-4">
            {[
              {
                title: "Private & confidential",
                text: "Consultation, audit, and strategy stay between you and us - no visible signal that you are managing your reputation.",
                icon: <Lock className="h-5 w-5 text-[#6ee27d]" />,
              },
              {
                title: "Removal first, suppression when needed",
                text: "We pursue every ethical removal path before building the positive presence that displaces what cannot come down.",
                icon: <ShieldCheck className="h-5 w-5 text-[#6ee27d]" />,
              },
              {
                title: "Built around your story",
                text: "Not a template - a careful audit and a plan for what you are actually dealing with, at a pace you are comfortable with.",
                icon: <Heart className="h-5 w-5 text-[#6ee27d]" />,
              },
            ].map((item) => (
              <article
                key={item.title}
                className="ha-lift rounded-3xl border border-[#dbe3e8] bg-white px-4 py-4 shadow-[0_10px_24px_rgba(20,40,70,0.10)] md:px-5 md:py-5"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0">{item.icon}</div>
                  <div>
                    <p className="text-[15px] font-semibold leading-tight text-[#1f3b64] md:text-[16px]">
                      {item.title}
                    </p>
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
          id="individuals-moment-of-truth"
          className="ha-lift mt-12 grid scroll-mt-28 overflow-hidden rounded-[24px] border border-[#123f70] shadow-[0_16px_34px_rgba(16,35,64,0.22)] md:mt-16 md:grid-cols-[1fr_1fr] md:items-stretch"
        >
          <div className="relative flex h-full min-h-[360px] flex-col overflow-hidden bg-[#041a30] md:min-h-[520px]">
            <div
              className="pointer-events-none absolute inset-0 bg-cover bg-[center_28%] bg-no-repeat"
              style={{
                backgroundImage: "url('/job-seekers-moment-left.jpg')",
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
                How Negative Search Results Affect Individuals
              </h2>
            </div>
          </div>
          <div className="flex flex-col justify-center bg-[#072f5f] p-7 text-white md:p-9">
            <div className="rounded-2xl border border-white/10 bg-white/7 px-5 py-6 md:px-6 md:py-7">
              <div className="flex flex-col gap-2 text-sm leading-relaxed text-white/90 md:gap-2.5 md:text-[15px] md:leading-relaxed">
                <span className="block">
                  You did not expect to be in this situation.
                </span>
                <span className="block">
                  Maybe it was a news article from a difficult period in your life.
                </span>
                <span className="block">
                  A legal matter that was resolved years ago.
                </span>
                <span className="block">
                  Something posted about you by someone else - an ex-partner, a
                  former colleague, or a person who wanted to cause harm.
                </span>
                <span className="block">
                  A social media post from a version of yourself that no longer
                  exists.
                </span>
                <span className="block">
                  Whatever it is, it appears when people search your name.
                </span>
                <span className="block">
                  And because it appears, it follows you - into new relationships, new
                  communities, new opportunities - without anyone telling you
                  directly.
                </span>
                <span className="block">
                  You are reading this because you know it is there.
                </span>
                <span className="block">
                  You know it is affecting things. And you want it to stop.
                </span>
              </div>
            </div>
            <div className="mt-5 rounded-xl border border-white/15 bg-[#061f3d]/60 px-4 py-4">
              <p className="text-[13px] font-semibold text-[#86e991] md:text-[14px]">
                You are not imagining the weight of it.
              </p>
              <p className="mt-1.5 text-[14px] font-medium italic text-white md:text-[15px]">
                Naming the problem is the first step toward changing what people see.
              </p>
            </div>
            <p className="mt-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8ce596] md:text-[11px]">
              <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
              Silence is the most expensive feedback
            </p>
          </div>
        </section>

        <IndividualsWhoForSection />

        <IndividualsScaleSection />

        <IndividualsWhySection />

        <IndividualsWhatCanBeDoneSection />

        <IndustryWhatReputation360Section
          sectionId="what-reputation360-does-individuals"
          steps={REPUTATION360_INDIVIDUAL_STEPS}
          sectionTitleTag="h2"
          sectionTitle="Our Personal Reputation Management Service"
          stepDetailTitleTag="p"
        />

        <IndividualsMarketInsightBanner />

        <IndustryRealisticTimelineSection
          sectionId="individuals-realistic-timeline"
          headingId="individuals-realistic-timeline-heading"
          sectionTitleTag="h2"
          sectionTitle="Personal Reputation Repair Timeline"
          phaseDetailTitleTag="p"
        />

        <SeeItInActionSection
          audiencePath={seo.path}
          sectionTitleTag="h2"
          cardTitleTag="h3"
        />

        <FurtherReadingSection
          audiencePath={seo.path}
          sectionTitleTag="h2"
          cardTitleTag="h3"
        />

        <section className="!mt-20 md:!mt-32 rounded-2xl border border-white/15 bg-[#072f5f] px-6 py-10 text-center text-white shadow-[0_16px_40px_-20px_rgba(7,47,95,0.45)] md:px-10 md:py-12">
          <p className="mx-auto max-w-3xl font-heading leading-snug text-white md:leading-snug">
            <span className="block text-[19px] font-semibold md:text-[23px]">
              You&apos;ve moved on. What Google shows should reflect that.
            </span>
            <span className="mt-2 block text-[19px] font-semibold md:text-[23px]">
              We help you get there.
            </span>
          </p>
          <ConsultationCtas
            variant="inlineDarkFooter"
            consultHref="/contact"
            consultLabel="Book a Free Confidential Consultation"
            consultSuffix={<ChevronRight className="h-4 w-4 shrink-0" aria-hidden />}
            wrapperClassName="mt-7"
          />
        </section>

        <IndividualsFaqSection />
      </div>
    </main>
    </>
  );
}

export default IndividualsPage;
