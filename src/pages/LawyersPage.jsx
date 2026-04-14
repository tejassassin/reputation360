import { useEffect, useRef, useState } from "react";
import {
  IndustryWhatReputation360Section,
  IndustryRealisticTimelineSection,
} from "../components/industry/IndustryReputation360Sections";
import { calendlyNewTabProps } from "../constants/scheduling";
import {
  Shield,
  Gavel,
  Newspaper,
  AlertTriangle,
  MessagesSquare,
  Scale,
  Search,
  Target,
  Lock,
  FileCheck,
  Landmark,
  ShieldCheck,
  Globe2,
  FileWarning,
  TrendingUp,
  ShieldAlert,
  Building2,
  Star,
  Briefcase,
  Users,
  MapPin,
} from "lucide-react";

const LAWYER_PROBLEM_TILES = [
  {
    id: "bar-discipline",
    label: "Bar complaints & discipline",
    description:
      "State bar complaints and disciplinary proceedings — publicly listed",
    Icon: Scale,
  },
  {
    id: "bar-records",
    label: "Bar records & show-cause",
    description: "State bar association records and show-cause notices",
    Icon: FileWarning,
  },
  {
    id: "court-conduct",
    label: "Court conduct judgments",
    description: "Court judgments referencing professional conduct",
    Icon: Gavel,
  },
  {
    id: "legal-press",
    label: "Legal news & journals",
    description:
      "Legal news coverage in publications like Above the Law, Law360, and local legal journals",
    Icon: Newspaper,
  },
  {
    id: "business-press",
    label: "Business press",
    description:
      "Business press covering cases where your representation drew criticism",
    Icon: Briefcase,
  },
  {
    id: "directories",
    label: "Directories & reviews",
    description:
      "Negative client reviews on Avvo, FindLaw, Martindale-Hubbell, and legal directories",
    Icon: Star,
  },
  {
    id: "opposing-party",
    label: "Opposing-party filings",
    description:
      "Opposing party posts, affidavits, or statements that have become publicly searchable",
    Icon: MessagesSquare,
  },
  {
    id: "forums-social",
    label: "Forums & social",
    description:
      "Forum and social media content from contentious cases or former clients",
    Icon: AlertTriangle,
  },
  {
    id: "firm-employer-reviews",
    label: "Firm staff reviews",
    description:
      "Glassdoor or Indeed reviews from former associates if you run a firm",
    Icon: Users,
  },
];

function LawyersProblemSection() {
  const [active, setActive] = useState(0);
  const activeTile = LAWYER_PROBLEM_TILES[active];
  const ActiveIcon = activeTile.Icon;

  return (
    <section
      id="problem-lawyers-attorneys-face"
      className="mt-12 scroll-mt-28 rounded-[24px] border border-[#d9e3ea] bg-white px-5 py-9 shadow-[0_10px_28px_rgba(15,23,42,0.07)] md:mt-16 md:px-9 md:py-11"
    >
      <h2 className="font-heading text-[26px] font-bold leading-[1.12] text-[#0f2e58] md:text-[32px] md:leading-[1.1]">
        The Problem Lawyers and Attorneys Face
      </h2>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#e8ecf7] text-[#1f3b64]">
          <Globe2 className="h-5 w-5" aria-hidden />
        </div>
        <p className="max-w-2xl text-[14px] leading-relaxed text-[#3f4f66] md:text-[15px] md:leading-[1.55]">
          Legal professionals face a degree of public scrutiny that few other
          professions experience. Your cases generate public records. Opposing
          parties generate searchable content. Regulatory proceedings are indexed.
          And the clients who are most valuable to you — corporations,
          high-net-worth individuals, institutional clients — are also the most
          diligent researchers.
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
          {LAWYER_PROBLEM_TILES.map((tile, i) => {
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

const LAWYERS_SCALE_METRICS = [
  {
    id: "discipline-dropoff",
    figure: "73%",
    blurb: "Walk away after a disciplinary hit",
    description:
      "73% of individuals researching legal services say they would not contact a lawyer if they found a disciplinary record on the first page of results",
    Icon: FileWarning,
  },
  {
    id: "corporate-diligence",
    figure: "68%",
    blurb: "GCs vet outside counsel online",
    description:
      "68% of corporate legal departments conduct online due diligence on outside counsel before retaining them",
    Icon: Building2,
  },
  {
    id: "presence-multiplier",
    figure: "2.4x",
    blurb: "Strong presence, stronger pipeline",
    description:
      "2.4x more organic inquiries received by lawyers with a strong, authoritative online presence compared to peers with an unmanaged digital footprint",
    Icon: TrendingUp,
  },
  {
    id: "page-one-decides",
    figure: "Page 1",
    blurb: "Where retain / no-retain is decided",
    description:
      "Studies of professional-services search behavior consistently show users rarely move past the first page of results when evaluating counsel—making page-one visibility disproportionately decisive for intake",
    Icon: Search,
  },
];

function LawyersScaleSection() {
  const [active, setActive] = useState(0);
  const [entered, setEntered] = useState(false);
  const rootRef = useRef(null);
  const activeMetric = LAWYERS_SCALE_METRICS[active];
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
          {LAWYERS_SCALE_METRICS.map((m, i) => {
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
            (Sources: Thomson Reuters Legal Tracker; Clio Legal Trends Report)
          </p>
        </aside>
      </div>
    </section>
  );
}

const LAWYERS_WHY_HARDER_PILLARS = [
  {
    id: "adversarial",
    label: "Adversarial fallout",
    hook: "Every case creates someone who lost.",
    body: "You work in an adversarial system. Every case creates a party who lost — and sometimes that party produces content about you. The nature of high-profile cases means your name may be associated with controversial matters for years after resolution.",
    Icon: Gavel,
  },
  {
    id: "response-limits",
    label: "Limited public response",
    hook: "Rules constrain how you answer online.",
    body: "You cannot respond to client grievances publicly without potential professional conduct implications. That leaves indexed narratives largely unanswered in the very channels your next client is reading.",
    Icon: ShieldAlert,
  },
  {
    id: "local-gravity",
    label: "Dense local networks",
    hook: "One result, many referral conversations.",
    body: "Your reputation is also more geographically concentrated than most professionals. A single damaging result can affect every referral conversation happening in your local legal community.",
    Icon: MapPin,
  },
];

function LawyersWhyHarderSection() {
  const [active, setActive] = useState(0);
  const pillar = LAWYERS_WHY_HARDER_PILLARS[active];
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
        Three realities attorneys hit in search — tap each to read the full
        context.
      </p>

      <div className="mt-8 grid max-w-5xl gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-stretch">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {LAWYERS_WHY_HARDER_PILLARS.map((p, i) => {
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

function LawyersPage() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Lawyers & Attorneys | Reputation360";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <main className="flex-1 bg-offwhite pt-28 md:pt-32">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <section className="relative grid items-start gap-5 overflow-hidden rounded-[8px] bg-[linear-gradient(110deg,#ececf8_0%,#eef3f6_70%,#edf7f3_100%)] px-3 py-6 md:grid-cols-[1.03fr_0.97fr] md:px-4 md:py-7">
          <div className="max-w-[570px]">
            <h1 className="max-w-[520px] font-heading text-[34px] font-bold leading-[1.02] tracking-tight text-[#0f2e58] md:text-[40px]">
              <span className="block">
                Before a client retains you, they search you.
              </span>
              <span className="mt-1 block md:mt-1.5">
                Your results may already be deciding the brief.
              </span>
            </h1>
            <p className="mt-5 max-w-[520px] text-[15px] leading-[1.5] text-[#4f5f75] md:text-[16px]">
              Your reputation is being read before your proposal is.
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
                text: "We help legal professionals regain control of their public narrative through ethical suppression.",
                icon: <ShieldCheck className="h-5 w-5 text-[#6ee27d]" />,
              },
              {
                title: "Discretion Guaranteed",
                text: "Your privacy and the nature of our work are protected throughout every engagement.",
                icon: <ShieldCheck className="h-5 w-5 text-[#6ee27d]" />,
              },
              {
                title: "Legal Authority",
                text: "Stronger profiles and authoritative assets so your expertise ranks before noise and outdated results.",
                icon: <Gavel className="h-5 w-5 text-[#6ee27d]" />,
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
          <div className="relative flex h-full min-h-[340px] flex-col overflow-hidden bg-[#041a30] md:min-h-[500px]">
            <div
              className="pointer-events-none absolute inset-0 bg-cover bg-[center_28%] bg-no-repeat"
              style={{ backgroundImage: "url('/lawyers-moment-left.jpg')" }}
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
            <div className="relative z-10 flex h-full min-h-0 flex-1 flex-col justify-end p-8 font-heading text-white antialiased md:p-10">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#4a1528] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                <span className="h-2 w-2 shrink-0 rounded-full bg-red-500" />
                THE MOMENT OF TRUTH
              </div>
              <div className="mt-5 flex items-center gap-3">
                <Search
                  className="h-5 w-5 shrink-0 text-white/90"
                  strokeWidth={2}
                  aria-hidden
                />
                <div className="h-px flex-1 bg-white/35" aria-hidden />
              </div>
              <h2 className="fa-invisible-leak-headline mt-5 max-w-none font-heading text-[26px] font-bold leading-[1.12] tracking-tight text-white md:text-[32px] md:leading-[1.1]">
                Every brief begins with a search.
              </h2>
            </div>
          </div>
          <div className="bg-[#072f5f] p-8 text-white md:p-10">
            <div className="rounded-2xl border border-white/10 bg-white/7 px-5 py-6 md:px-6 md:py-7">
              <div className="space-y-3 text-sm leading-relaxed text-white/90 md:text-[15px] md:leading-relaxed">
                <p>
                  A potential client is evaluating three attorneys for a complex
                  commercial dispute.
                </p>
                <p>The credentials are identical.</p>
                <p>The fees are comparable.</p>
                <p>
                  So they do what every client does — they search each name online.
                </p>
                <p>In under sixty seconds, they have formed a judgment.</p>
                <p>Not based on courtroom record.</p>
                <p>Not based on years in practice.</p>
                <p>Based entirely on what Google decided to show them.</p>
              </div>
              <div className="mt-6 space-y-3 border-t border-white/15 pt-6 text-sm font-semibold leading-relaxed text-[#86e991] md:text-[15px] md:leading-relaxed">
                <p>One result is clean. Two are not.</p>
                <p>
                  The brief goes to the first. The other two never find out.
                </p>
                <p className="font-semibold italic text-white/90">
                  But it keeps happening.
                </p>
              </div>
            </div>
            <p className="mt-7 inline-flex items-center gap-2 text-[#8ce596] text-[10px] font-semibold uppercase tracking-[0.14em] md:text-[11px]">
              <AlertTriangle className="h-3 w-3 shrink-0" aria-hidden />
              Silence is the most expensive feedback
            </p>
          </div>
        </section>

        <LawyersProblemSection />

        <LawyersScaleSection />

        <LawyersWhyHarderSection />
      </div>

      <section className="bg-[#f2f3f9] px-4 py-14 md:px-8 md:py-18">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-heading text-[26px] font-bold text-[#1a2b4b] md:text-[32px]">
            Reputation Threats Specific to Legal Professionals
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-16 rounded-full bg-[#4caf50]" />
        </div>
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {[
            {
              icon: AlertTriangle,
              title: "Bar Association Complaints",
              body: "Publicly listed disciplinary actions are often Google-indexed, becoming the first things clients see.",
            },
            {
              icon: Newspaper,
              title: "Negative Media Coverage",
              body: "Case outcomes covered negatively by legal or mainstream news media can linger in search results for decades.",
            },
            {
              icon: MessagesSquare,
              title: "Client Disputes",
              body: "Public disputes posted on prominent legal directories can undermine years of successful practice.",
            },
            {
              icon: Scale,
              title: "Contentious Opposing Parties",
              body: "Aggressive content posted by opposing parties in high-stakes cases designed to damage your standing.",
            },
            {
              icon: Target,
              title: "Competitor Targeting",
              body: "Rival firms publishing strategic content targeting your name and practice in local search results.",
            },
          ].map((card) => {
            const CardIcon = card.icon;
            return (
            <div
              key={card.title}
              className="ha-lift rounded-2xl border border-[#e8eaf2] bg-white p-5 shadow-[0_4px_20px_rgba(26,43,75,0.07)] md:p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fde8ea]">
                <CardIcon className="h-5 w-5 text-[#c62828]" strokeWidth={2} />
              </div>
              <h3 className="mt-4 font-heading text-base font-bold text-[#1a2b4b] md:text-lg">
                {card.title}
              </h3>
              <p className="mt-3 text-[13px] leading-[1.65] text-[#5a6578] md:text-[14px] md:leading-[1.7]">
                {card.body}
              </p>
            </div>
            );
          })}
          <a
            {...calendlyNewTabProps}
            className="ha-lift relative flex min-h-[220px] flex-col items-center justify-center overflow-hidden rounded-2xl bg-[#1a2b4b] p-8 text-center shadow-[0_8px_28px_rgba(26,43,75,0.2)] hover:bg-[#243a5c] sm:min-h-0 lg:min-h-[280px]"
          >
            <Shield
              className="pointer-events-none absolute left-1/2 top-1/2 h-[min(85%,200px)] w-[min(85%,200px)] -translate-x-1/2 -translate-y-1/2 text-white/[0.06]"
              strokeWidth={1}
              aria-hidden
            />
            <p className="relative z-[1] max-w-[240px] font-heading text-[15px] font-bold leading-snug text-white md:text-base">
              Don&apos;t leave your reputation to chance.
            </p>
            <span className="relative z-[1] mt-5 font-heading text-[13px] font-bold uppercase tracking-[0.14em] text-[#7fe08a] md:text-sm uppercase">
              Take command now
            </span>
          </a>
        </div>
      </section>

      <section className="bg-[#eef1f8] px-4 py-14 md:px-8 md:py-18">
        <div className="mx-auto max-w-6xl">
          <IndustryWhatReputation360Section />
          <IndustryRealisticTimelineSection />
        </div>
      </section>

      <section className="bg-white px-4 py-16 text-center md:px-8 md:py-24">
        <h2 className="mx-auto max-w-3xl font-heading text-[28px] font-bold leading-[1.2] text-[#1a2b4b] md:text-[36px] lg:text-[38px]">
          Your Legal Expertise Deserves a Reputation to Match
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-[16px] italic leading-[1.65] text-[#5a6578] md:text-[17px] md:leading-[1.7]">
          Years of experience and results deserve to be the first thing a
          prospective client sees. Reputation360 makes sure they are.
        </p>
        <div className="mx-auto mt-10 flex max-w-xl items-center gap-4 md:mt-12 md:max-w-2xl md:gap-5">
          <div className="h-px min-w-[48px] flex-1 bg-[#d8dee6]" aria-hidden />
          <p className="shrink-0 text-[11px] font-bold tracking-wide text-[#1a2b4b] md:text-xs">
            LexGuard Authority Protocol
          </p>
          <div className="h-px min-w-[48px] flex-1 bg-[#d8dee6]" aria-hidden />
        </div>
      </section>

      <section className="px-4 pb-16 md:px-8 md:pb-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-[#1a2b4b] px-6 py-12 text-center shadow-xl md:px-12 md:py-14">
          <h2 className="font-heading text-[26px] font-bold text-white md:text-[34px]">
            Secure Your Professional Legacy Today.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.6] text-white/80 md:text-[16px]">
            Join elite legal practitioners who trust Reputation360 to manage their
            digital standing with absolute discretion and precision.
          </p>
          <a
            {...calendlyNewTabProps}
            className="ha-pill mt-8 inline-flex items-center justify-center rounded-lg bg-[#4caf50] px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-[#43a047]"
          >
            Book a Free Confidential Consultation
          </a>
          <div className="mx-auto mt-10 flex max-w-lg flex-col items-center justify-center gap-6 text-white/90 sm:flex-row sm:gap-8">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em]">
              <Lock className="h-4 w-4 text-[#7fe08a]" />
              100% Confidential
            </div>
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em]">
              <FileCheck className="h-4 w-4 text-[#7fe08a]" />
              NDA Protected
            </div>
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em]">
              <Landmark className="h-4 w-4 text-[#7fe08a]" />
              Legacy Focused
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LawyersPage;
