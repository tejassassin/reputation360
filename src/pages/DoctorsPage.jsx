import { useEffect, useRef, useState } from "react";
import { FaqAccordion } from "../components/FaqAccordion";
import {
  IndustryWhatReputation360Section,
  IndustryRealisticTimelineSection,
} from "../components/industry/IndustryReputation360Sections";
import { calendlyNewTabProps } from "../constants/scheduling";
import {
  AlertTriangle,
  Building2,
  Check,
  ChevronRight,
  FileWarning,
  Gavel,
  Globe2,
  MessagesSquare,
  Newspaper,
  Scale,
  Search,
  ShieldAlert,
  ShieldCheck,
  Star,
  TrendingDown,
  TrendingUp,
  UserSearch,
} from "lucide-react";

const DOCTOR_PROBLEM_TILES = [
  {
    id: "reviews-aggregators",
    label: "Reviews & listings",
    description:
      "Healthgrades, Zocdoc, Yelp, and Google Business reviews - aggregated, publicly visible, and often ranking above your own website.",
    Icon: Star,
  },
  {
    id: "state-board",
    label: "State medical board",
    description:
      "State medical board complaints and disciplinary actions that appear in search and on regulatory listings.",
    Icon: Scale,
  },
  {
    id: "fsmb",
    label: "FSMB records",
    description:
      "Federation of State Medical Boards (FSMB) records - indexed and searchable alongside your name.",
    Icon: FileWarning,
  },
  {
    id: "malpractice-courts",
    label: "Court records",
    description:
      "Court records from medical malpractice proceedings that remain findable long after a case is resolved.",
    Icon: Gavel,
  },
  {
    id: "news",
    label: "News coverage",
    description:
      "News coverage of malpractice allegations, even those later dismissed, that still ranks for your name.",
    Icon: Newspaper,
  },
  {
    id: "hospital-sites",
    label: "Hospital reviews",
    description:
      "Hospital review sites where former patients or staff have posted comments that surface in search.",
    Icon: Building2,
  },
  {
    id: "social",
    label: "Social media",
    description:
      "Social media posts naming you in a complaint context that spread faster than formal channels can address.",
    Icon: MessagesSquare,
  },
];

function DoctorsProblemSection() {
  const [active, setActive] = useState(0);
  const activeTile = DOCTOR_PROBLEM_TILES[active];
  const ActiveIcon = activeTile.Icon;

  return (
    <section
      id="problem-healthcare-professionals-face"
      className="mt-12 scroll-mt-28 rounded-[24px] border border-[#d9e3ea] bg-white px-5 py-9 shadow-[0_10px_28px_rgba(15,23,42,0.07)] md:mt-16 md:px-9 md:py-11"
    >
      <h2 className="font-heading text-[26px] font-bold leading-[1.12] text-[#0f2e58] md:text-[32px] md:leading-[1.1]">
        The Problem Healthcare Professionals Face
      </h2>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#e8ecf7] text-[#1f3b64]">
          <Globe2 className="h-5 w-5" aria-hidden />
        </div>
        <p className="max-w-2xl text-[14px] leading-relaxed text-[#3f4f66] md:text-[15px] md:leading-[1.55]">
          Doctors face a reputation landscape unlike almost any other profession.
          You are subject to strict privacy regulations that prevent you from
          responding to patient complaints in detail. You are listed on aggregator
          platforms you did not choose to be on. And the consequences show up
          directly in appointment volumes, referral rates, and the long-term
          growth of your practice.
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
          {DOCTOR_PROBLEM_TILES.map((tile, i) => {
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
        Any one of these on page one when a patient searches your name can quietly
        affect referrals and bookings - often before you ever find out why.
      </p>
    </section>
  );
}

const DOCTOR_SCALE_METRICS = [
  {
    id: "trust-reviews",
    figure: "84%",
    blurb: "Trust reviews like a referral",
    description:
      "84% of patients trust online reviews about doctors as much as a personal recommendation.",
    Icon: Star,
  },
  {
    id: "search-before-booking",
    figure: "77%",
    blurb: "Search before they book",
    description:
      "77% of patients search online before booking a healthcare appointment.",
    Icon: UserSearch,
  },
  {
    id: "star-dropoff",
    figure: "19%",
    blurb: "Inquiries fall when ratings slip",
    description:
      "19% decline in new patient inquiries associated with a drop from 4.0 to 3.5 stars on a major review platform.",
    Icon: TrendingDown,
  },
  {
    id: "few-reviews",
    figure: "<10",
    blurb: "Thin review footprint",
    description:
      "Doctors with fewer than 10 online reviews are significantly more vulnerable to a single negative outlier shifting their overall rating.",
    Icon: AlertTriangle,
  },
];

function DoctorsScaleSection() {
  const [active, setActive] = useState(0);
  const [entered, setEntered] = useState(false);
  const rootRef = useRef(null);
  const activeMetric = DOCTOR_SCALE_METRICS[active];
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
      id="scale-of-the-problem-healthcare"
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
        <h2 className="font-heading text-[26px] font-bold leading-[1.12] md:text-[32px] md:leading-[1.1]">
          The Scale of the Problem
        </h2>
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/45">
          Tap a metric to explore
        </p>
      </div>

      <div className="relative mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] lg:items-stretch">
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {DOCTOR_SCALE_METRICS.map((m, i) => {
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
            (Sources: BrightLocal Healthcare Consumer Survey; Software Advice Patient
            Survey)
          </p>
        </aside>
      </div>
    </section>
  );
}

const DOCTOR_WHY_HARDER_PILLARS = [
  {
    id: "asymmetry",
    label: "The asymmetry",
    hook: "Patients can name you. You cannot reply in kind.",
    body: "You operate under a fundamental asymmetry. A patient can post a detailed, emotionally charged review naming you specifically. You cannot respond with clinical specifics without risking a HIPAA violation. Your professional body may restrict how you engage publicly with complaints.",
    Icon: ShieldAlert,
  },
  {
    id: "others-shape",
    label: "Limited control",
    hook: "Others shape what Google shows.",
    body: "This means the content landscape around your name can be shaped almost entirely by others - while your ability to respond directly is severely limited.",
    Icon: MessagesSquare,
  },
  {
    id: "presence-path",
    label: "The practical path",
    hook: "Authority beats arguing online.",
    body: "The most effective strategy is not responding to complaints. It is building a presence so authoritative and well-ranked that negative content never gets the visibility it needs to do damage.",
    Icon: TrendingUp,
  },
];

const DOCTOR_FAQ_ITEMS = [
  {
    id: "legal-ethical",
    question: "Is reputation suppression legal and ethical?",
    answer:
      "Entirely. We do not alter, hack, or tamper with any existing content. We build new, legitimate, high-quality content that earns its ranking through genuine authority.",
  },
  {
    id: "google-reviews-hipaa",
    question:
      "Can I respond to Google reviews as a doctor without risking a HIPAA violation?",
    answer:
      "General, non-specific responses — acknowledging a concern without confirming or denying patient details — are typically acceptable. However, the more effective long-term strategy is ensuring negative reviews do not rank prominently enough to influence decisions in the first place.",
  },
  {
    id: "state-board-records",
    question: "Can state medical board records be suppressed?",
    answer:
      "The records on the board's own database cannot be removed. What changes is whether those pages rank prominently when someone searches your name. Through strategic content building, it is possible to displace board pages from visible search results in most cases.",
  },
  {
    id: "healthgrades-zocdoc",
    question:
      "What about Healthgrades or Zocdoc — can negative reviews be removed?",
    answer:
      "Reviews that violate the platform's own policies — fake reviews, reviews by non-patients, reviews containing factual inaccuracies — can often be reported and removed. Reviews that do not violate policy are addressed through suppression.",
  },
  {
    id: "timeline-results",
    question: "How long before results improve?",
    answer:
      "Meaningful displacement of primary negative content typically takes three to six months. Review platform improvements can be visible sooner. Full transformation generally takes eight to twelve months. We will give you a case-specific timeline in your consultation.",
  },
];

function DoctorsWhyHarderSection() {
  const [active, setActive] = useState(0);
  const pillar = DOCTOR_WHY_HARDER_PILLARS[active];
  const ActiveIcon = pillar.Icon;

  return (
    <section
      id="why-harder-healthcare-professionals"
      className="mt-16 scroll-mt-28 rounded-[24px] border border-[#dce3ec] bg-[#f8f9fc] px-5 py-9 md:mt-20 md:px-9 md:py-11"
    >
      <h2 className="max-w-4xl font-heading text-[26px] font-bold leading-[1.12] text-[#0f2e58] md:text-[32px] md:leading-[1.1]">
        Why This Is Harder for You Than Most
      </h2>
      <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-[#5d6c80] md:text-[14px] md:leading-relaxed">
        Three realities physicians hit in search - tap each to read the full
        context.
      </p>

      <div className="mt-8 grid max-w-5xl gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-stretch">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {DOCTOR_WHY_HARDER_PILLARS.map((p, i) => {
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

function DoctorsMarketInsightBanner() {
  return (
    <section id="doctor-market-insight" className="mt-10 scroll-mt-28 md:mt-12">
      <div className="flex flex-col gap-8 rounded-[28px] bg-[linear-gradient(90deg,#1b3152_0%,#243d5c_55%,#2a4668_100%)] px-6 py-8 text-white shadow-[0_12px_32px_rgba(27,49,82,0.25)] md:flex-row md:items-center md:justify-between md:gap-10 md:px-10 md:py-10">
        <div className="min-w-0 flex-1">
          <p className="inline-flex rounded-full bg-[#24403b] px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#66bb6a] md:px-3 md:py-1 md:text-[10px]">
            Market Insight
          </p>
          <h2 className="mt-3 font-heading text-[19px] font-bold leading-[1.24] md:mt-4 md:text-[24px] lg:text-[27px]">
            <span className="text-[#4eab66]">1 in 4</span>
            <span className="text-white">
              {" "}
              patients stop considering a provider after reading just{" "}
            </span>
            <span className="text-[#4eab66]">3</span>
            <span className="text-white"> negative reviews.</span>
          </h2>
          <p className="mt-2.5 font-heading text-[14px] font-semibold leading-snug text-white md:mt-3 md:text-[16px]">
            It takes years to build a practice. It takes very little to quietly lose one.
          </p>
          <p className="mt-2 text-[12px] leading-relaxed text-white/80 md:mt-2.5 md:text-[13px]">
            (Source: PatientPop)
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

function DoctorsFaqSection() {
  return (
    <section
      id="doctor-faqs"
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
        {DOCTOR_FAQ_ITEMS.map((item, index) => (
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

function DoctorsPage() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Doctors & Healthcare Professionals | Reputation360";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <main className="flex-1 bg-offwhite pt-28 md:pt-32">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <section className="relative grid items-start gap-5 overflow-hidden rounded-[8px] bg-[linear-gradient(110deg,#ececf8_0%,#eef3f6_70%,#edf7f3_100%)] px-3 py-6 md:grid-cols-[1.03fr_0.97fr] md:px-4 md:py-7">
          <div className="max-w-[570px]">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#1f3b64]/70 md:text-[11px] md:tracking-[0.16em]">
              Doctors &amp; Healthcare Professionals
            </p>
            <h1 className="mt-2 max-w-[520px] font-heading text-[34px] font-bold leading-[1.02] tracking-tight text-[#0f2e58] md:text-[40px]">
              Your Patients Search You Before They Book. What Do They See?
            </h1>
            <p className="mt-5 max-w-[520px] text-[15px] leading-[1.5] text-[#4f5f75] md:text-[16px]">
              One review - fair or not - can empty a waiting room that took years
              to fill.
            </p>
            <a
              {...calendlyNewTabProps}
              className="ha-pill mt-6 inline-flex items-center gap-2 rounded-[8px] bg-[#153f70] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(7,47,95,0.24)] hover:bg-[#0b3c75]"
            >
              Book a Free Confidential Consultation
            </a>
          </div>
          <div className="rounded-[6px] bg-[linear-gradient(180deg,#e8f5ef_0%,#e7f4ee_100%)] px-3 py-3 pt-1 space-y-3 md:px-4 md:py-4">
            {[
              {
                title: "Trust Restored",
                text: "We make sure that when patients search your name, they find the doctor you are - not an outdated result that no longer tells the full story.",
                icon: <ShieldCheck className="h-5 w-5 text-[#6ee27d]" />,
              },
              {
                title: "Discretion Guaranteed",
                text: "Confidential, HIPAA-aware workflows built for healthcare teams - nothing flashy, nothing that puts your practice at risk.",
                icon: <ShieldCheck className="h-5 w-5 text-[#6ee27d]" />,
              },
              {
                title: "Clinical Authority",
                text: "Stronger professional profiles and authoritative assets so credentials, expertise, and your preferred story rank first.",
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

        <section className="mt-12 grid overflow-hidden rounded-[24px] border border-[#123f70] shadow-[0_16px_34px_rgba(16,35,64,0.22)] md:mt-16 md:grid-cols-[1fr_1fr]">
          <div className="relative min-h-[340px] overflow-hidden bg-[#041a30] md:min-h-[500px]">
            <div
              className="pointer-events-none absolute inset-0 bg-cover bg-[center_30%] bg-no-repeat"
              style={{ backgroundImage: "url('/doctors-moment-left.jpg')" }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[#041a30]/68"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_30%,rgba(90,130,190,0.12)_0%,transparent_55%)]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(3,12,26,0.82)_0%,rgba(4,18,36,0.35)_28%,transparent_42%,rgba(4,18,36,0.4)_58%,rgba(3,12,24,0.92)_82%,#020a14_100%)]"
              aria-hidden
            />
            <div className="relative z-10 flex min-h-[340px] flex-col justify-end p-8 font-heading text-white antialiased md:min-h-[500px] md:p-10">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#5c2430] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                <span className="h-2 w-2 shrink-0 rounded-full bg-red-500" />
                THE MOMENT OF TRUTH
              </div>
              <div className="mt-5 flex items-center gap-3">
                <UserSearch
                  className="h-5 w-5 shrink-0 text-white/90"
                  strokeWidth={2}
                  aria-hidden
                />
                <div className="h-px flex-1 bg-white/35" aria-hidden />
              </div>
              <h2 className="fa-invisible-leak-headline mt-5 max-w-none font-heading text-[26px] font-bold leading-[1.12] tracking-tight text-white md:text-[32px] md:leading-[1.1]">
                Before booking, they search your name.
              </h2>
            </div>
          </div>
          <div className="flex flex-col justify-center bg-[#072f5f] p-7 text-white md:p-9">
            <div className="rounded-2xl border border-white/10 bg-white/7 px-5 py-6 md:px-6 md:py-7">
              <div className="space-y-3 text-sm leading-relaxed text-white/90 md:text-[15px] md:leading-relaxed">
                <p>
                  In the time it takes to make a cup of coffee, they have read two
                  reviews and scanned three search results.
                </p>
                <p className="font-semibold text-white">
                  If they find a low rating on Healthgrades, a malpractice
                  reference in a news archive, or a state medical board mention -
                  they quietly book with someone else.
                </p>
              </div>
            </div>
            <div className="mt-5 rounded-xl border border-white/15 bg-[#061f3d]/60 px-4 py-4">
              <p className="text-[13px] font-semibold text-[#86e991] md:text-[14px]">
                You will never know it happened.
              </p>
              <p className="mt-1.5 text-[14px] font-medium italic text-white md:text-[15px]">
                But it happens every week.
              </p>
            </div>
            <p className="mt-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8ce596] md:text-[11px]">
              <AlertTriangle className="h-3.5 w-3.5 shrink-0" aria-hidden />
              Silence is the most expensive feedback you&apos;ll never receive
            </p>
          </div>
        </section>

        <DoctorsProblemSection />

        <DoctorsScaleSection />

        <DoctorsWhyHarderSection />

        <IndustryWhatReputation360Section />

        <DoctorsMarketInsightBanner />

        <IndustryRealisticTimelineSection />

        <section className="mt-10 scroll-mt-28 rounded-2xl border border-white/15 bg-[#072f5f] px-6 py-10 text-center text-white shadow-[0_16px_40px_-20px_rgba(7,47,95,0.45)] md:mt-12 md:px-10 md:py-12">
          <p className="mx-auto max-w-3xl font-heading font-semibold leading-snug text-white md:leading-snug">
            <span className="-mx-1 block min-w-0 md:mx-0">
              <span className="flex justify-center overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] md:overflow-visible [&::-webkit-scrollbar]:hidden">
                <span className="whitespace-nowrap text-[clamp(13px,1.65vw+11px,23px)] md:text-[23px]">
                  A single complaint should not overshadow a career built on patient care.
                </span>
              </span>
            </span>
            <span className="mt-2 block text-[clamp(14px,2.1vw+10px,23px)] md:mt-2 md:text-[23px]">
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

        <DoctorsFaqSection />
      </div>
    </main>
  );
}

export default DoctorsPage;
