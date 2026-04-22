import { useState } from "react";
import { AnimatePresence, motion as Motion } from "motion/react";
import { calendlyNewTabProps } from "../constants/scheduling";
import {
  FileText,
  TrendingUp,
  WandSparkles,
  Settings,
  UserCircle2,
  MessageSquareText,
  ArrowUpRight,
  Newspaper,
  BrainCog,
  Sparkles,
  BadgeX,
  EyeOff,
  Scale,
  Copyright,
  ShieldCheck,
  Globe2,
  History,
  Share2,
  FileWarning,
  LineChart,
  ChevronDown,
} from "lucide-react";

/** Hero intro under Services - single source so UI always matches intended copy. */
const SERVICES_HERO_INTRO =
  "Every day a damaging result sits on page one, it costs you clients, deals, and trust. Reputation360 manages what people find when they search your name.";

const whatWeDoCards = [
  {
    title: "Negative Link Suppression",
    text: "We push harmful links down and improve what people see first when they search your name or business.",
    icon: <WandSparkles className="h-4 w-4" />,
    iconClass: "bg-[#1f3b64] text-white",
  },
  {
    title: "Positive Content Creation",
    text: "We publish high-quality content across trusted channels to strengthen your reputation footprint.",
    icon: <FileText className="h-4 w-4" />,
    iconClass: "bg-[#1f3b64] text-white",
  },
  {
    title: "Brand & Visibility Growth",
    text: "From profile optimization to social proof, we help your brand look credible and discoverable.",
    icon: <TrendingUp className="h-4 w-4" />,
    iconClass: "bg-[#2a8c3e] text-white",
  },
];

const pageOneTransformationScenarios = [
  {
    id: "individual",
    label: "Individual",
    intro:
      "What a typical page one transformation looks like for an individual:",
    beforeHeader: "Before - page 1 today",
    afterHeader: "After - page 1 at month 11",
    beforeItems: [
      {
        crumb: "regionalnews.com › metro › courts",
        title: "Court filing resurfaced as top story",
        text: "A years-old case file ranks above your own site - often with an inflammatory headline.",
      },
      {
        crumb: "reddit.com › r › ask › thread",
        title: "Anonymous thread repeating allegations",
        text: "Speculation and hearsay treated like fact; nearly impossible to remove at source.",
      },
      {
        crumb: "glassdoor.com › reviews › former",
        title: "One-sided narrative from a single review",
        text: "A damaging review dominates snippets even when your team’s record is strong.",
      },
    ],
    afterItems: [
      {
        crumb: "yourname.com › about",
        title: "Verified personal site & biography",
        text: "Clear narrative, credentials, and contact - written to match how people search for you.",
      },
      {
        crumb: "linkedin.com › in › profile",
        title: "LinkedIn profile with authority signals",
        text: "Headline, featured work, and endorsements aligned to what decision-makers expect.",
      },
      {
        crumb: "crunchbase.com › person",
        title: "Trusted third-party profiles",
        text: "Crunchbase, industry directories, and partner mentions that reinforce legitimacy.",
      },
    ],
    afterNote: "Negative content displaced to page 3+",
  },
  {
    id: "company",
    label: "Company",
    intro:
      "What a typical page one transformation looks like for a company or brand:",
    beforeHeader: "Before - page 1 today",
    afterHeader: "After - page 1 at month 11",
    beforeItems: [
      {
        crumb: "complaintsboard.com › listing",
        title: "Consumer complaint thread ranking high",
        text: "Legacy posts outrank your homepage and careers page for branded searches.",
      },
      {
        crumb: "reddit.com › r › industry",
        title: "Viral thread associating brand with controversy",
        text: "Discussion pages earn rich snippets while your official response is buried.",
      },
      {
        crumb: "glassdoor.com › reviews › overview",
        title: "Low aggregate score above fold",
        text: "A handful of reviews shapes first impressions before prospects read your story.",
      },
    ],
    afterItems: [
      {
        crumb: "yourbrand.com",
        title: "Corporate site with clear positioning",
        text: "Messaging, leadership, and proof points tuned for how buyers and talent search.",
      },
      {
        crumb: "linkedin.com › company",
        title: "Company page & employee advocacy",
        text: "Structured updates and leadership voices that earn space in branded results.",
      },
      {
        crumb: "yourbrand.com › newsroom",
        title: "Press, awards, and analyst coverage",
        text: "Editorial placements and credible citations that reinforce trust at scale.",
      },
    ],
    afterNote: "Negative content displaced to page 3+",
  },
];

const ourResultsCards = [
  {
    stat: "Page 1",
    body: "Cleared for the majority of clients who complete a full campaign",
    footnote:
      "Based on 200+ client engagements, 2019-2024. Results vary by case complexity and source authority.",
  },
  {
    stat: "8-11 months",
    body: "Typical time to meaningful page one displacement for most cases",
    footnote:
      "Moderate cases. High-authority sources or active media coverage may take longer.",
  },
];

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

const serviceTimelinePhases = [
  {
    id: "phase-01",
    phase: "01",
    range: "Weeks 1-4",
    label: "Audit & launch",
    detail:
      "We map everything search engines currently show about you - every result, how strong it is, and how suppressible it is. Your strategy is set, content goes live on trusted sites, and you get your first report.",
  },
  {
    id: "phase-02",
    phase: "02",
    range: "Months 2-4",
    label: "Early movement",
    detail:
      "Your new content starts ranking. Positive results begin climbing. You will see measurable movement in your monthly report - this is where you first see the strategy working.",
  },
  {
    id: "phase-03",
    phase: "03",
    range: "Months 5-8",
    label: "Significant shift",
    detail:
      "For most clients, the main negative results drop off page one during this window. Positive content holds its positions. We keep publishing to reinforce and protect the gains made.",
  },
  {
    id: "phase-04",
    phase: "04",
    range: "Months 8-11",
    label: "Full transformation",
    detail:
      "Substantial transformation holds: unwanted content stays deep in results while what competes for page one reflects your priorities. Cadence moves to protection and selective publishing so positions stay stable.",
  },
];

const whoWeWorkWithCards = [
  {
    id: "individuals",
    title: "Individuals",
    body: "Anyone whose online presence does not reflect who they truly are.",
  },
  {
    id: "executives",
    title: "Executives & C-Suite Leaders",
    body: "Leaders ensuring their influence and legacy are represented accurately online.",
  },
  {
    id: "professionals",
    title: "Doctors & Healthcare Professionals, Lawyers & Attorneys",
    body: "Physicians, lawyers & attorneys, and healthcare professionals managing their digital standing.",
  },
  {
    id: "businesses",
    title: "Businesses & Brands",
    body: "E-commerce, manufacturing, and consumer brands protecting their market reputation.",
  },
];

function FlagshipSuppressionSection() {
  const [scenarioId, setScenarioId] = useState(
    pageOneTransformationScenarios[0].id,
  );
  const scenario =
    pageOneTransformationScenarios.find((s) => s.id === scenarioId) ??
    pageOneTransformationScenarios[0];

  return (
    <div className="rounded-3xl border border-navy/10 bg-white p-6 shadow-[0_24px_60px_-28px_rgba(15,35,60,0.16)] md:p-10 lg:p-12">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy/45">
          Core service
        </p>
        <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-navy/15 bg-[#f4f7fb] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-navy/70">
          <Sparkles className="h-3.5 w-3.5 shrink-0 text-[#2a8c3e]" aria-hidden />
          Flagship offering
        </div>
      </div>

      <h3 className="mt-6 max-w-4xl font-heading text-3xl font-bold leading-[1.12] tracking-tight text-navy md:text-4xl lg:text-[2.35rem]">
        Negative online reputation management & link suppression
      </h3>
      <p className="mt-5 max-w-3xl text-base leading-relaxed text-navy/75 md:text-lg">
        Our primary service. We audit everything search engines surface about you,
        build a content strategy that outranks harmful results, and systematically
        push negative links beyond page one - where virtually no one will find them.
      </p>

      <div className="mt-8 flex flex-col gap-4 border-t border-navy/10 pt-8 lg:flex-row lg:items-end lg:justify-between">
        <p className="max-w-xl text-sm font-medium leading-snug text-navy/70 md:text-[15px]">
          {scenario.intro}
        </p>
        <div
          className="flex shrink-0 flex-wrap gap-2"
          role="tablist"
          aria-label="Example transformation"
        >
          {pageOneTransformationScenarios.map((s) => {
            const selected = s.id === scenarioId;
            return (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setScenarioId(s.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold outline-none transition-all active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-navy/30 focus-visible:ring-offset-2 ${
                  selected
                    ? "bg-navy text-white shadow-md"
                    : "border border-navy/12 bg-offwhite text-navy/80 hover:border-navy/22 hover:bg-white"
                }`}
              >
                {s.label}
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <Motion.div
          key={scenario.id}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 grid gap-4 md:grid-cols-2 md:gap-5"
        >
          <div className="flex min-h-0 flex-col overflow-hidden rounded-2xl border border-red-100/90 bg-white shadow-sm ring-1 ring-red-100/30">
            <div className="bg-gradient-to-r from-[#fde8e8] to-[#fce4e4] px-4 py-3.5 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-red-950/90 md:px-5">
              {scenario.beforeHeader}
            </div>
            <ul className="divide-y divide-navy/[0.07]">
              {scenario.beforeItems.map((item, i) => (
                <Motion.li
                  key={`${scenario.id}-b-${i}`}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.05 + i * 0.06,
                    duration: 0.22,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group"
                >
                  <div className="px-4 py-4 transition-[background-color,box-shadow] duration-200 motion-reduce:transition-none md:px-5 md:py-5 group-hover:bg-red-50/45 group-hover:shadow-[inset_3px_0_0_0_rgba(185,28,28,0.35)]">
                    <p className="font-mono text-[11px] leading-snug text-navy/40">
                      {item.crumb}
                    </p>
                    <p className="mt-2 text-[15px] font-semibold leading-snug text-red-950/90">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-navy/68">
                      {item.text}
                    </p>
                  </div>
                </Motion.li>
              ))}
            </ul>
          </div>

          <div className="flex min-h-0 flex-col overflow-hidden rounded-2xl border border-emerald-100/90 bg-white shadow-sm ring-1 ring-emerald-100/35">
            <div className="bg-gradient-to-r from-[#e6f7ec] to-[#dff3e6] px-4 py-3.5 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-950/90 md:px-5">
              {scenario.afterHeader}
            </div>
            <ul className="divide-y divide-navy/[0.07]">
              {scenario.afterItems.map((item, i) => (
                <Motion.li
                  key={`${scenario.id}-a-${i}`}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.05 + i * 0.06,
                    duration: 0.22,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group"
                >
                  <div className="px-4 py-4 transition-[background-color,box-shadow] duration-200 motion-reduce:transition-none md:px-5 md:py-5 group-hover:bg-emerald-50/50 group-hover:shadow-[inset_3px_0_0_0_rgba(22,101,52,0.4)]">
                    <p className="font-mono text-[11px] leading-snug text-navy/40">
                      {item.crumb}
                    </p>
                    <p className="mt-2 text-[15px] font-semibold leading-snug text-emerald-950/95">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-navy/68">
                      {item.text}
                    </p>
                  </div>
                </Motion.li>
              ))}
            </ul>
            <p className="border-t border-navy/[0.07] bg-[#f8fcfa] px-4 py-3.5 text-center text-sm italic leading-snug text-navy/55 md:px-5">
              {scenario.afterNote}
            </p>
          </div>
        </Motion.div>
      </AnimatePresence>
    </div>
  );
}

function ServicesAbout() {
  const [removalFocus, setRemovalFocus] = useState(null);
  const [timelinePhase, setTimelinePhase] = useState(0);
  /** Index of expanded "Who we work with" card; null = all descriptions collapsed */
  const [whoWeExpanded, setWhoWeExpanded] = useState(null);

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
    <section className="bg-offwhite">
      <div className="mx-auto max-w-6xl space-y-16 px-5 pb-16 pt-8 md:space-y-20 md:px-8 md:pb-20 md:pt-10">
        <div className="rounded-3xl bg-[#f2f5ff] px-6 py-8 md:px-12 md:py-11">
          <h2 className="max-w-3xl font-heading text-4xl font-bold leading-tight text-navy md:text-5xl">
            You Worked Hard to Build Your Reputation. We Make Sure Google
            Reflects It.
          </h2>
          <p className="mt-5 max-w-3xl text-navy/75 text-base leading-relaxed md:text-lg">
            {SERVICES_HERO_INTRO}
          </p>
          <aside
            className="mt-8 max-w-4xl rounded-2xl border border-[#b85c5c]/80 bg-[#fdf4f4] px-5 py-6 shadow-[0_2px_0_rgba(160,64,64,0.06),0_12px_32px_rgba(127,45,45,0.08)] md:rounded-[1.125rem] md:px-8 md:py-7"
            role="note"
            aria-label="Why inaction is costly"
          >
            <div className="flex gap-4 md:gap-5">
              <span
                className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-[#a04040] ring-4 ring-[#a04040]/15 md:mt-2 md:h-3.5 md:w-3.5"
                aria-hidden
              />
              <p className="text-[0.95rem] leading-relaxed text-[#6b2a2a] md:text-base md:leading-relaxed">
                <span className="font-semibold text-[#5c2222]">
                  The cost of doing nothing:{" "}
                </span>
                A negative result in positions 1-3 can cause up to 60% of
                prospective clients to disengage before making contact. Every month
                without intervention compounds the damage - lost deals, declined
                introductions, abandoned applications.
              </p>
            </div>
          </aside>
          <a
            {...calendlyNewTabProps}
            className="ha-pill mt-7 inline-flex rounded-md bg-cta-consult px-5 py-3 text-sm font-semibold text-white shadow-md shadow-cta-consult/20 hover:brightness-95"
          >
            BOOK YOUR FREE CONSULTATION
          </a>
        </div>

        <div>
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div>
              <h3 className="font-heading text-3xl text-navy font-bold">
                What We Do
              </h3>
              <p className="mt-3 max-w-2xl text-navy/70">
                We identify what the internet says about you, reshape the narrative
                with content that reflects your truth, and build the kind of
                authority that makes the right story stick.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-lg bg-[#1e4627] px-4 py-2 text-sm font-semibold text-white">
              <Settings className="h-4 w-4" />
              <span>98% success clearing page 1</span>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {whatWeDoCards.map((card) => (
              <article
                key={card.title}
                className="ha-lift rounded-2xl border border-navy/10 bg-white p-5 shadow-sm hover:bg-[#f6fdf3] hover:border-[#d9f1d2]"
              >
                <div
                  className={`h-12 w-12 rounded-xl text-sm font-semibold grid place-items-center ${card.iconClass}`}
                >
                  {card.icon}
                </div>
                <h4 className="mt-4 font-heading text-lg text-navy font-semibold">
                  {card.title}
                </h4>
                <p className="mt-2 text-sm text-navy/70 leading-relaxed">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div>
              <h3 className="font-heading text-3xl text-navy font-bold">
                Our Results
              </h3>
              <p className="mt-3 max-w-2xl text-navy/70">
                Every figure below comes from a completed engagement. We share them
                so you can walk in knowing what success looks like - and how long it
                realistically takes to get there.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-lg bg-[#1e4627] px-4 py-2 text-sm font-semibold text-white">
              <TrendingUp className="h-4 w-4" />
              <span>200+ engagements (2019-2024)</span>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-navy/[0.07] bg-[#eef2f7]/50 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] sm:p-5 md:p-7">
            <div className="grid gap-5 sm:grid-cols-2 md:gap-6">
              {ourResultsCards.map((item) => (
                <article
                  key={item.stat}
                  className="ha-lift flex flex-col rounded-2xl border border-navy/10 bg-[#f7f6f2] p-7 shadow-[0_10px_38px_-14px_rgba(31,59,100,0.14),0_1px_0_rgba(255,255,255,0.65)_inset] md:rounded-[1.125rem] md:p-9"
                >
                  <h4 className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-navy md:text-[2.625rem]">
                    {item.stat}
                  </h4>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-navy/80 md:text-[17px] md:leading-relaxed">
                    {item.body}
                  </p>
                  <p className="mt-auto border-t border-navy/10 pt-6 text-sm leading-relaxed text-navy/50">
                    {item.footnote}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <FlagshipSuppressionSection />

        <div>
          <h3 className="text-center font-heading text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Removal or suppression?
          </h3>
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
                removalFocus === "direct"
                  ? removalLeftActive
                  : removalLeftInactive
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
                    <h4
                      className={`min-w-0 flex-1 font-heading text-lg font-bold leading-tight sm:text-xl ${
                        removalFocus === "direct" ? "text-navy" : "text-navy/75"
                      }`}
                    >
                      Direct removal
                    </h4>
                    {removalFocus === "direct" ? (
                      <span className="shrink-0 rounded-full bg-navy px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-white shadow-sm">
                        Selected
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-3 max-w-none text-sm leading-relaxed text-navy/75 sm:text-[15px]">
                    Permanent deletion of content from its source. Only available
                    under qualifying circumstances, which we assess during your
                    consultation.
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
                                isOlive
                                  ? "text-[#6b5b2e]"
                                  : "text-[#166534]"
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
                    <h4
                      className={`min-w-0 flex-1 font-heading text-lg font-bold leading-tight text-white sm:text-xl ${
                        removalFocus === "suppression"
                          ? "text-white"
                          : "text-white/90"
                      }`}
                    >
                      Suppression strategy
                    </h4>
                    {removalFocus === "suppression" ? (
                      <span className="shrink-0 rounded-full border border-emerald-300/40 bg-emerald-400/15 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-emerald-50 shadow-sm backdrop-blur-sm">
                        Selected
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-3 max-w-none text-sm leading-relaxed text-white/88 sm:text-[15px]">
                    The most reliable and broadly applicable method. We build content
                    that outranks negative results and pushes them to page 3 and beyond
                    - effective even for content that cannot be removed.
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
        </div>

        <div>
          <h3 className="text-center font-heading text-3xl font-bold tracking-tight text-navy md:text-4xl">
            How Long Does It Take?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm font-medium text-navy/55">
            Click any phase to see what it involves.
          </p>

          <div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-xl border border-navy/12 bg-white shadow-[0_12px_40px_-24px_rgba(31,59,100,0.12)] md:mt-10 md:rounded-2xl">
            <div
              className="grid grid-cols-2 divide-x divide-navy/[0.08] border-b border-navy/10 md:grid-cols-4"
              role="tablist"
              aria-label="Campaign timeline phases"
            >
              {serviceTimelinePhases.map((ph, i) => {
                const selected = timelinePhase === i;
                return (
                  <button
                    key={ph.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    id={`timeline-tab-${ph.id}`}
                    aria-controls={`timeline-panel-${ph.id}`}
                    onClick={() => setTimelinePhase(i)}
                    onKeyDown={(e) => {
                      if (e.key === "ArrowRight") {
                        e.preventDefault();
                        setTimelinePhase((p) =>
                          Math.min(serviceTimelinePhases.length - 1, p + 1),
                        );
                      }
                      if (e.key === "ArrowLeft") {
                        e.preventDefault();
                        setTimelinePhase((p) => Math.max(0, p - 1));
                      }
                      if (e.key === "Home") {
                        e.preventDefault();
                        setTimelinePhase(0);
                      }
                      if (e.key === "End") {
                        e.preventDefault();
                        setTimelinePhase(serviceTimelinePhases.length - 1);
                      }
                    }}
                    className={`group relative px-3 py-4 text-left outline-none transition-[background-color,box-shadow,transform] duration-200 focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-navy/30 md:px-5 md:py-5 ${
                      selected
                        ? "bg-[#f2f5ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]"
                        : "bg-white hover:bg-[#f8fafc] hover:shadow-[inset_0_0_0_1px_rgba(31,59,100,0.04)] motion-safe:active:scale-[0.99]"
                    }`}
                  >
                    <span
                      className={`absolute left-3 right-3 top-0 h-[3px] rounded-b-full transition-colors duration-200 md:left-4 md:right-4 ${
                        selected
                          ? "bg-gradient-to-r from-[#1f3b64] via-[#2e5b88] to-[#2a8c3e]"
                          : "bg-transparent group-hover:bg-navy/12"
                      }`}
                      aria-hidden
                    />
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] transition-colors duration-200 ${
                        selected
                          ? "bg-navy text-white shadow-sm"
                          : "bg-navy/[0.08] text-navy/55 group-hover:bg-navy/[0.12] group-hover:text-navy/70"
                      }`}
                    >
                      Phase {ph.phase}
                    </span>
                    <span
                      className={`mt-2.5 block font-heading text-[15px] font-bold tracking-tight md:text-lg ${
                        selected ? "text-navy" : "text-navy/88 group-hover:text-navy"
                      }`}
                    >
                      {ph.range}
                    </span>
                    <span
                      className={`mt-1 block text-[11px] font-medium leading-snug md:text-xs ${
                        selected
                          ? "text-navy/65"
                          : "text-navy/55 group-hover:text-navy/65"
                      }`}
                    >
                      {ph.label}
                    </span>
                  </button>
                );
              })}
            </div>
            <AnimatePresence mode="wait" initial={false}>
              <Motion.div
                key={serviceTimelinePhases[timelinePhase].id}
                id={`timeline-panel-${serviceTimelinePhases[timelinePhase].id}`}
                role="tabpanel"
                aria-labelledby={`timeline-tab-${serviceTimelinePhases[timelinePhase].id}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="w-full min-w-0 border-t border-navy/[0.06] bg-[#f2f5ff] px-4 py-5 md:px-8 md:py-7"
              >
                <p className="w-full max-w-none text-pretty text-sm leading-relaxed text-navy/85 md:text-base md:leading-relaxed">
                  {serviceTimelinePhases[timelinePhase].detail}
                </p>
              </Motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div>
          <h3 className="text-center font-heading text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Other Services
          </h3>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-4">
            <article className="ha-lift md:col-span-2 rounded-[26px] border border-navy/10 bg-[#dfe5f6] p-6 hover:border-[#d9f1d2] hover:bg-[#f6fdf3]">
              <Newspaper className="h-6 w-6 text-[#1f3b64]" />
              <h4 className="mt-4 font-heading text-[22px] md:text-[18px] leading-[1.2] font-semibold text-[#0f2343]">
                Employer Branding &amp; Talent Reputation
              </h4>
              <p className="mt-5 text-[14px] leading-relaxed text-[#1a2c48]/85 md:text-[15px] md:leading-relaxed">
                The best candidates have options. We make sure your company is the
                one they choose - by shaping a workplace narrative that reflects your
                culture, your values, and the opportunity you actually offer.
              </p>
            </article>

            <article className="ha-lift rounded-[26px] border border-navy/10 bg-white p-6 hover:border-[#d9f1d2] hover:bg-[#f6fdf3]">
              <UserCircle2 className="h-6 w-6 text-[#3b6488]" />
              <h4 className="mt-6 font-heading text-[22px] md:text-[18px] leading-[1.2] font-semibold text-[#142844] md:mt-8">
                LinkedIn Branding
              </h4>
              <p className="mt-5 text-[14px] leading-relaxed text-[#1a2c48]/85 md:text-[15px] md:leading-relaxed">
                A well-built LinkedIn presence opens doors before you knock. We craft
                profiles and content strategies that position you as the authority you
                are - and keep you visible to the people who matter most in your
                industry.
              </p>
            </article>

            <article className="ha-lift flex flex-col rounded-[26px] border border-navy/20 bg-[#0b376a] p-6 text-white md:row-span-2">
              <BrainCog className="ml-auto h-20 w-20 text-white/20" />
              <div className="mt-auto">
                <h4 className="font-heading text-[24px] md:text-[18px] leading-[1.1] font-semibold">
                  Thought
                  <br />
                  Leadership
                </h4>
                <p className="mt-4 text-[14px] leading-relaxed text-white/88 md:text-[15px] md:leading-relaxed">
                  Your expertise deserves an audience. We secure editorial placements
                  in the publications your industry reads - so your insights reach the
                  clients, partners, and peers who shape your next opportunity.
                </p>
              </div>
            </article>

            <article className="ha-lift rounded-[26px] border border-[#b8dfc0] bg-[#d7f0db] p-6 hover:border-[#d9f1d2] hover:bg-[#f6fdf3]">
              <ArrowUpRight className="h-6 w-6 text-[#123d1e]" />
              <h4 className="mt-6 font-heading text-[22px] md:text-[18px] leading-[1.18] font-semibold text-[#13273f] md:mt-8">
                Performance
                <br />
                Marketing
              </h4>
              <p className="mt-5 text-[14px] leading-relaxed text-[#1a2c48]/85 md:text-[15px] md:leading-relaxed">
                Visibility without strategy is noise. We run targeted campaigns that put
                the right message in front of the right audience - driving measurable
                outcomes for your brand, your content, and your business goals.
              </p>
            </article>

            <article className="ha-lift md:col-span-2 rounded-[26px] border border-navy/10 bg-white p-6 hover:border-[#d9f1d2] hover:bg-[#f6fdf3]">
              <MessageSquareText className="h-6 w-6 text-[#1f3b64]" />
              <div className="mt-6 flex items-start justify-between gap-6">
                <div className="min-w-0">
                  <h4 className="font-heading text-[22px] md:text-[18px] leading-[1.2] font-semibold text-[#111f37]">
                    Consultation &amp; Branding
                  </h4>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#1a2c48]/85 md:text-[15px] md:leading-relaxed">
                    Every brand has a story. We help you find it, sharpen it, and
                    communicate it consistently - across every channel, every
                    touchpoint, and every conversation that matters to your growth.
                  </p>
                </div>
                <div className="mt-2 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#072f5f] text-white">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </article>
          </div>
        </div>

        <div id="who-we-work-with" className="scroll-mt-28">
          <h3 className="who-we-work-with-heading text-center font-heading font-bold tracking-tight text-navy">
            Who We Work With
          </h3>
          <div className="mt-6 grid grid-cols-1 items-start gap-4 sm:grid-cols-2 md:mt-8 md:gap-5">
            {whoWeWorkWithCards.map((card, i) => {
              const expanded = whoWeExpanded === i;
              return (
                <div
                  key={card.id}
                  className={`overflow-hidden rounded-2xl border bg-white transition-[border-color,box-shadow] duration-200 ${
                    expanded
                      ? "border-navy/25 shadow-md ring-2 ring-navy/10"
                      : "border-navy/10 shadow-sm hover:border-navy/18 hover:shadow-[0_12px_32px_-18px_rgba(31,59,100,0.1)]"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`who-desc-${card.id}`}
                    id={`who-trigger-${card.id}`}
                    onClick={() =>
                      setWhoWeExpanded((prev) => (prev === i ? null : i))
                    }
                    className="flex w-full items-start justify-between gap-3 p-6 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-navy/30 md:p-7 md:pl-8 md:pr-6"
                  >
                    <h4 className="who-we-work-with-trigger min-w-0 font-heading font-bold text-navy">
                      {card.title}
                    </h4>
                    <ChevronDown
                      className={`mt-0.5 h-5 w-5 shrink-0 text-navy/40 transition-transform duration-200 ${
                        expanded ? "rotate-180 text-navy/70" : ""
                      }`}
                      aria-hidden
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                      expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div
                        id={`who-desc-${card.id}`}
                        role="region"
                        aria-labelledby={`who-trigger-${card.id}`}
                        className="border-t border-navy/10 px-6 pb-6 pt-1 md:px-8 md:pb-7"
                      >
                        <p className="text-sm leading-relaxed text-navy/75 md:text-[15px] md:leading-relaxed">
                          {card.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-3xl bg-[linear-gradient(120deg,#08284f,#0f3f73)] px-6 py-10 md:px-12 md:py-12 text-white shadow-lg">
          <h3 className="text-center font-heading text-3xl md:text-4xl font-bold">
            Ready to See What Is Possible?
          </h3>
          <p className="mt-4 text-center text-white/85 max-w-3xl mx-auto">
            Book a free strategy session and get a practical roadmap for your
            reputation goals, growth timeline, and next best actions.
          </p>
          <div className="mt-7 flex justify-center">
            <a
              {...calendlyNewTabProps}
              className="ha-pill inline-flex rounded-md bg-cta-consult px-5 py-3 text-sm font-semibold text-white shadow-md shadow-cta-consult/20 hover:brightness-95"
            >
              BOOK YOUR FREE CONSULTATION
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesAbout;
