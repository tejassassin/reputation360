import { useState } from "react";
import { AnimatePresence, motion as Motion } from "motion/react";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Check,
  Scale,
  ShieldCheck,
  Stethoscope,
  User,
  Users,
} from "lucide-react";
import { ConsultationCtas } from "../../ConsultationCtas.jsx";
import { FaqAccordion } from "../../FaqAccordion.jsx";
import { externalAnchorProps } from "../../../lib/internalLinkProps.js";
import {
  nlsPageHero,
} from "../../../data/services/negativeLinkSuppression.js";
import {
  NLS_CTA,
  NLS_FAQS,
  NLS_FEASIBILITY_CLOSING,
  NLS_FEASIBILITY_INTRO,
  NLS_FEASIBILITY_ROWS,
  NLS_HARMFUL_CONTENT_TYPES,
  NLS_PROCESS_STEPS,
  NLS_PUBLISHER_NOTE,
  NLS_REMOVAL_VS_SUPPRESSION_ROWS,
  NLS_SEARCH_RESULT_CATEGORIES,
  NLS_SEARCH_RESULTS_CLOSING,
  NLS_SEARCH_RESULTS_INTRO,
  NLS_TIMELINE_NOTE,
  NLS_TIMELINE_PHASES,
  NLS_WHEN_SUPPRESSION_ROWS,
  NLS_WHO_WE_HELP,
  NLS_WHY_COSTS_CLOSING,
  NLS_WHY_COSTS_ROWS,
  NLS_WHAT_IS_PARAGRAPHS,
} from "../../../data/services/negativeLinkSuppressionContent.js";
import { NLS_SCROLL_TARGET_CLASS } from "../../../data/services/negativeLinkSuppression.js";

const CONTACT_PATH = "/contact";

const NLS_SECTION_SPACING = "pt-16 pb-20 md:pt-20 md:pb-24";
const NLS_FIRST_SECTION_SPACING = "pt-16 pb-20 md:pt-20 md:pb-24";

function NlsWhatWeDontBackground() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(175deg,_#1F3B64_0%,_#1a2f4d_38%,_#223a58_70%,_#2E5B88_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_95%_65%_at_50%_-5%,rgba(46,91,136,0.5),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_0%_100%,rgba(76,175,80,0.14),transparent_52%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_1px_1px,rgba(107,116,128,0.14)_1px,transparent_0)] [background-size:40px_40px]"
        aria-hidden
      />
    </>
  );
}

const NLS_SECTION_TONES = {
  sage: {
    shell: "relative overflow-hidden border-y border-slate-200/60",
    decor: (
      <div className="pointer-events-none absolute inset-0 bg-[#f0f4f2]" aria-hidden />
    ),
  },
  gradient: {
    shell: "relative overflow-hidden",
    decor: (
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,#ffffff_0%,#f0fdf4_38%,#eff6ff_72%,#ffffff_100%)]"
        aria-hidden
      />
    ),
  },
  canvas: {
    shell: "relative overflow-hidden",
    decor: (
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,#f8fafc_0%,#eef6ff_40%,#f0fdf4_100%)]"
        aria-hidden
      />
    ),
  },
  blue: {
    shell: "relative overflow-hidden",
    decor: (
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#f8fafc_0%,#eef2ff_42%,#e8eeff_58%,#f8fafc_100%)]"
        aria-hidden
      />
    ),
  },
  navy: {
    shell: "relative overflow-hidden text-white",
    decor: <NlsWhatWeDontBackground />,
  },
  white: { shell: "relative bg-white", decor: null },
  page: { shell: "relative overflow-hidden", decor: null },
};

function NlsSectionShell({
  id,
  tone = "page",
  first = false,
  className = "",
  children,
  ...rest
}) {
  const surface = NLS_SECTION_TONES[tone] ?? NLS_SECTION_TONES.page;
  const spacing = first ? NLS_FIRST_SECTION_SPACING : NLS_SECTION_SPACING;

  return (
    <section
      id={id}
      className={`${NLS_SCROLL_TARGET_CLASS} ${surface.shell} ${spacing} ${className}`}
      {...rest}
    >
      {surface.decor}
      <div className="relative mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}

function NlsSectionHeading({ title, lead, variant = "default" }) {
  const onDark = variant === "onDark";
  return (
    <div className="mb-10 md:mb-14">
      <h2
        className={`max-w-4xl font-heading text-3xl font-extrabold leading-[1.12] tracking-tight md:text-[2.1rem] ${
          onDark ? "text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.25)]" : "text-[#1F3B64]"
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-4 h-1 rounded-full ${
          onDark
            ? "w-16 bg-gradient-to-r from-[#4CAF50] to-cyan-300"
            : "w-16 bg-gradient-to-r from-[#4CAF50] to-[#2E5B88]"
        }`}
        aria-hidden
      />
      {lead ? (
        <div
          className={`mt-4 space-y-4 text-base leading-relaxed md:text-lg ${
            onDark ? "text-slate-100/88" : "text-slate-600"
          }`}
        >
          {(Array.isArray(lead) ? lead : [lead]).map((p) => (
            <p key={p.slice(0, 48)} className="w-full max-w-none">
              {p}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function DocSection({ id, title, lead, children, tone = "page", first = false, contentClassName = "" }) {
  const headingVariant = tone === "navy" ? "onDark" : "default";
  return (
    <NlsSectionShell id={id} tone={tone} first={first}>
      <NlsSectionHeading title={title} lead={lead} variant={headingVariant} />
      {contentClassName ? <div className={contentClassName}>{children}</div> : children}
    </NlsSectionShell>
  );
}

function NlsScrollTable({ children, caption }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_12px_40px_-24px_rgba(31,59,100,0.12)]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
          {caption ? <caption className="sr-only">{caption}</caption> : null}
          {children}
        </table>
      </div>
    </div>
  );
}

function NlsHeroHeadline({ title, highlight }) {
  const idx = title.indexOf(highlight);
  if (idx === -1) return title;
  return (
    <>
      {title.slice(0, idx)}
      <span className="text-[#7df5b9]">{highlight}</span>
      {title.slice(idx + highlight.length)}
    </>
  );
}

export function NlsServiceHero() {
  return (
    <header
      id="nls-hero"
      className="relative flex min-h-[min(520px,calc(100vh-10.5rem))] flex-col overflow-hidden bg-[#050a18] pb-10 pt-28 text-white md:min-h-[min(580px,calc(100vh-11rem))] md:pb-14 md:pt-32"
      aria-labelledby="nls-hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_20%_-10%,rgba(76,175,80,0.18),transparent_50%),radial-gradient(ellipse_70%_50%_at_100%_0%,rgba(31,59,100,0.45),transparent_48%),linear-gradient(165deg,#050a18_0%,#1F3B64_38%,#0a1628_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:48px_48px]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 text-center lg:px-8 lg:text-left">
        <h1
          id="nls-hero-heading"
          className="font-heading text-[1.65rem] font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-[2.65rem] lg:text-5xl"
        >
          <NlsHeroHeadline title={nlsPageHero.title} highlight={nlsPageHero.titleHighlight} />
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300/90 md:mt-6 md:text-lg lg:mx-0 lg:max-w-3xl">
          {nlsPageHero.lead}
        </p>
        <ConsultationCtas
          variant="onDark"
          freeScanLabel={nlsPageHero.freeScanLabel}
          consultLabel={nlsPageHero.consultLabel}
          consultHref={CONTACT_PATH}
          consultLinkProps={externalAnchorProps(CONTACT_PATH)}
          consultSuffix={
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          }
          wrapperClassName="mt-8 justify-center lg:justify-start"
        />
        <p className="mx-auto mt-5 text-sm text-slate-400/90 lg:mx-0">{nlsPageHero.trustLine}</p>
      </div>
    </header>
  );
}

export function NlsWhatIsSection() {
  return (
    <DocSection id="what-is" title="What Is Negative Link Suppression?" tone="sage" first>
      <div className="space-y-5">
        {NLS_WHAT_IS_PARAGRAPHS.map((p) => (
          <p key={p.slice(0, 48)} className="text-base leading-relaxed text-slate-600 md:text-lg">
            {p}
          </p>
        ))}
      </div>
    </DocSection>
  );
}

export function NlsWhyCostsSection() {
  const [activeId, setActiveId] = useState(NLS_WHY_COSTS_ROWS[0].id);
  const row = NLS_WHY_COSTS_ROWS.find((r) => r.id === activeId) ?? NLS_WHY_COSTS_ROWS[0];

  return (
    <DocSection
      id="why-costs"
      title="Why Harmful Search Results Cost You More Than You Realize"
      tone="gradient"
    >
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {NLS_WHY_COSTS_ROWS.map((r) => {
          const selected = r.id === activeId;
          return (
            <button
              key={r.id}
              type="button"
              onClick={() => setActiveId(r.id)}
              className={`rounded-xl border px-4 py-3 text-left transition focus-visible:ring-2 focus-visible:ring-navy/30 ${
                selected
                  ? "border-navy bg-navy text-white shadow-md"
                  : "border-navy/12 bg-white text-navy hover:border-[#79df86]/40"
              }`}
            >
              <span className="font-heading text-sm font-bold">{r.perspective}</span>
            </button>
          );
        })}
      </div>
      <AnimatePresence mode="wait" initial={false}>
        <Motion.div
          key={row.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          className="mt-5 rounded-2xl border border-navy/10 bg-white p-6 shadow-[0_16px_48px_-28px_rgba(15,35,60,0.1)] md:p-8"
        >
          <p className="text-xs font-bold uppercase tracking-wide text-navy/45">The real impact</p>
          <p className="mt-3 text-base leading-relaxed text-navy/80 md:text-lg">{row.impact}</p>
        </Motion.div>
      </AnimatePresence>
      <p className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/80 px-5 py-4 text-base leading-relaxed text-amber-950/90 md:px-6">
        {NLS_WHY_COSTS_CLOSING}
      </p>
    </DocSection>
  );
}

const CATEGORY_STYLES = {
  risk: "border-rose-200/80 bg-gradient-to-br from-rose-50/90 to-white ring-rose-100/80",
  neutral: "border-slate-200/90 bg-gradient-to-br from-slate-50 to-white",
  positive: "border-[#79df86]/40 bg-gradient-to-br from-[#f0faf3] to-white ring-[#4CAF50]/10",
};

export function NlsSearchResultsSection() {
  return (
    <DocSection
      id="search-results"
      title="Understanding What Is in Your Search Results"
      lead={NLS_SEARCH_RESULTS_INTRO}
      tone="canvas"
    >
      <ul className="grid list-none gap-4 p-0 lg:grid-cols-3">
        {NLS_SEARCH_RESULT_CATEGORIES.map((cat) => (
          <li
            key={cat.id}
            className={`flex flex-col rounded-2xl border p-5 shadow-sm md:p-6 ${CATEGORY_STYLES[cat.tone]}`}
          >
            <h3 className="font-heading text-lg font-bold text-navy">{cat.label}</h3>
            <p className="mt-3 text-xs font-bold uppercase tracking-wide text-navy/45">Examples</p>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/75">{cat.examples}</p>
            <p className="mt-4 border-t border-navy/8 pt-4 text-sm font-semibold text-[#1a5c38]">
              {cat.action}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-base leading-relaxed text-slate-600 md:text-lg">{NLS_SEARCH_RESULTS_CLOSING}</p>
    </DocSection>
  );
}

export function NlsRemovalVsSuppressionSection() {
  return (
    <DocSection
      id="removal-vs-suppression"
      title="Content Removal vs. Negative Link Suppression: What Is the Difference?"
      tone="blue"
    >
      <NlsScrollTable caption="Comparison of content removal and negative link suppression">
        <thead>
          <tr className="border-b border-navy/10 bg-[#f4f7fb]">
            <th className="px-4 py-3 font-heading text-xs font-bold uppercase tracking-wide text-navy/55 md:px-5" />
            <th className="px-4 py-3 font-heading text-xs font-bold uppercase tracking-wide text-navy md:px-5">
              Content Removal
            </th>
            <th className="px-4 py-3 font-heading text-xs font-bold uppercase tracking-wide text-[#1a5c38] md:px-5">
              Negative Link Suppression
            </th>
          </tr>
        </thead>
        <tbody>
          {NLS_REMOVAL_VS_SUPPRESSION_ROWS.map((row, i) => (
            <tr
              key={row.aspect}
              className={i % 2 === 1 ? "bg-[#fafbfd]/80" : "bg-white"}
            >
              <th className="px-4 py-3.5 align-top font-heading text-sm font-bold text-navy md:px-5">
                {row.aspect}
              </th>
              <td className="px-4 py-3.5 align-top text-sm leading-relaxed text-navy/75 md:px-5">
                {row.removal}
              </td>
              <td className="px-4 py-3.5 align-top text-sm leading-relaxed text-navy/75 md:px-5">
                {row.suppression}
              </td>
            </tr>
          ))}
        </tbody>
      </NlsScrollTable>
      <blockquote className="mt-8 rounded-2xl border border-amber-200/70 bg-amber-50/90 px-5 py-4 text-base leading-relaxed text-amber-950/90 md:px-6 md:py-5">
        {NLS_PUBLISHER_NOTE}
      </blockquote>
    </DocSection>
  );
}

export function NlsWhenSuppressionSection() {
  return (
    <DocSection id="when-suppression" title="When Is Suppression the Right Approach?" tone="white">
      <ul className="space-y-4">
        {NLS_WHEN_SUPPRESSION_ROWS.map((row) => (
          <li
            key={row.scenario}
            className="rounded-2xl border border-navy/10 bg-[#f8fafc] p-5 md:p-6"
          >
            <h3 className="font-heading text-base font-bold text-navy md:text-lg">{row.scenario}</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy/75 md:text-[15px]">{row.why}</p>
          </li>
        ))}
      </ul>
    </DocSection>
  );
}

export function NlsFeasibilitySection() {
  return (
    <DocSection
      id="feasibility"
      title="Not All Negative Content Is the Same: Removal and Suppression Feasibility"
      lead={NLS_FEASIBILITY_INTRO}
      tone="gradient"
    >
      <NlsScrollTable caption="Removal and suppression feasibility by content type">
        <thead>
          <tr className="border-b border-navy/10 bg-[#f4f7fb]">
            <th className="px-4 py-3 font-heading text-xs font-bold uppercase tracking-wide text-navy md:px-5">
              Content Type
            </th>
            <th className="px-4 py-3 font-heading text-xs font-bold uppercase tracking-wide text-navy/55 md:px-5">
              Removal Feasibility
            </th>
            <th className="px-4 py-3 font-heading text-xs font-bold uppercase tracking-wide text-[#1a5c38] md:px-5">
              Suppression Feasibility
            </th>
          </tr>
        </thead>
        <tbody>
          {NLS_FEASIBILITY_ROWS.map((row, i) => (
            <tr key={row.contentType} className={i % 2 === 1 ? "bg-[#fafbfd]/80" : "bg-white"}>
              <th className="px-4 py-3.5 align-top font-heading text-sm font-bold text-navy md:px-5">
                {row.contentType}
              </th>
              <td className="px-4 py-3.5 align-top text-sm leading-relaxed text-navy/75 md:px-5">
                {row.removal}
              </td>
              <td className="px-4 py-3.5 align-top text-sm leading-relaxed text-navy/75 md:px-5">
                {row.suppression}
              </td>
            </tr>
          ))}
        </tbody>
      </NlsScrollTable>
      <p className="mt-8 text-base leading-relaxed text-slate-600 md:text-lg">{NLS_FEASIBILITY_CLOSING}</p>
    </DocSection>
  );
}

export function NlsContentTypesSection() {
  return (
    <DocSection
      id="content-types"
      title="What Types of Harmful Content Can Be Suppressed?"
      tone="canvas"
    >
      <p className="mb-6 text-base text-slate-600 md:text-lg">
        Reputation360&apos;s suppression methodology is effective across a broad range of content types:
      </p>
      <ul className="grid list-none gap-3 p-0 md:grid-cols-2">
        {NLS_HARMFUL_CONTENT_TYPES.map((item) => (
          <li
            key={item.slice(0, 40)}
            className="flex gap-3 rounded-xl border border-navy/10 bg-white p-4 shadow-sm"
          >
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#2a8c3e]" strokeWidth={2.25} aria-hidden />
            <span className="text-sm leading-relaxed text-navy/80 md:text-[15px]">{item}</span>
          </li>
        ))}
      </ul>
    </DocSection>
  );
}

export function NlsProcessSection() {
  return (
    <DocSection id="process" title="How Our Suppression Process Works" tone="blue">
      <ol className="relative list-none space-y-0 p-0">
        {NLS_PROCESS_STEPS.map((step, index) => (
          <li key={step.step} className="relative flex gap-4 pb-8 last:pb-0 md:gap-5">
            {index < NLS_PROCESS_STEPS.length - 1 ? (
              <span
                className="absolute left-5 top-12 bottom-0 w-px bg-gradient-to-b from-[#4CAF50]/50 to-[#2E5B88]/20"
                aria-hidden
              />
            ) : null}
            <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1f3b64] font-heading text-sm font-bold text-white shadow-md">
              {step.step}
            </span>
            <div className="min-w-0 flex-1 rounded-2xl border border-navy/10 bg-white p-4 shadow-sm md:p-5">
              <h3 className="font-heading text-base font-bold text-navy md:text-lg">{step.phase}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/75 md:text-[15px]">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </DocSection>
  );
}

export function NlsTimelineSection() {
  const [active, setActive] = useState(0);
  const phase = NLS_TIMELINE_PHASES[active] ?? NLS_TIMELINE_PHASES[0];
  const phaseNum = String(phase.n).padStart(2, "0");

  return (
    <DocSection id="timeline" title="How Long Does It Take?" tone="gradient" contentClassName="mt-2">
      <div className="overflow-hidden rounded-2xl border border-navy/12 bg-white shadow-[0_16px_48px_-28px_rgba(31,59,100,0.12)]">
        <div className="grid grid-cols-2 divide-x divide-navy/[0.08] border-b border-navy/10 md:grid-cols-4">
          {NLS_TIMELINE_PHASES.map((p, index) => {
            const selected = active === index;
            return (
              <button
                key={p.n}
                type="button"
                onClick={() => setActive(index)}
                className={`px-3 py-4 text-left transition md:px-5 md:py-5 ${
                  selected ? "bg-[#f2f5ff]" : "bg-white hover:bg-[#f8fafc]"
                }`}
              >
                <span
                  className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                    selected ? "bg-navy text-white" : "bg-navy/8 text-navy/55"
                  }`}
                >
                  Phase {String(p.n).padStart(2, "0")}
                </span>
                <span className="mt-2 block font-heading text-sm font-bold text-navy md:text-base">
                  {p.timespan}
                </span>
                <span className="mt-1 block text-xs text-navy/60">{p.title}</span>
              </button>
            );
          })}
        </div>
        <AnimatePresence mode="wait" initial={false}>
          <Motion.div
            key={phase.n}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="p-6 md:p-8"
          >
            <h3 className="font-heading text-xl font-bold text-navy">
              Phase {phaseNum}: {phase.title}
            </h3>
            <p className="mt-3 w-full max-w-none text-base leading-relaxed text-navy/75">{phase.body}</p>
          </Motion.div>
        </AnimatePresence>
      </div>
      <p className="mt-6 text-sm leading-relaxed text-navy/70 md:text-base">{NLS_TIMELINE_NOTE}</p>
    </DocSection>
  );
}

const WHO_ICONS = {
  individuals: User,
  executives: Briefcase,
  founders: Building2,
  financial: Scale,
  lawyers: Scale,
  doctors: Stethoscope,
  "businesses-attack": ShieldCheck,
};

export function NlsWhoWeHelpSection() {
  const [activeId, setActiveId] = useState(NLS_WHO_WE_HELP[0].id);
  const entry = NLS_WHO_WE_HELP.find((w) => w.id === activeId) ?? NLS_WHO_WE_HELP[0];
  const Icon = WHO_ICONS[entry.id] ?? Users;

  return (
    <DocSection id="who-we-help" title="Who We Help" tone="navy">
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {NLS_WHO_WE_HELP.map((w) => {
          const WIcon = WHO_ICONS[w.id] ?? Users;
          const selected = w.id === activeId;
          return (
            <button
              key={w.id}
              type="button"
              onClick={() => setActiveId(w.id)}
              className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition ${
                selected
                  ? "border-white/25 bg-white text-navy shadow-lg"
                  : "border-white/15 bg-white/8 text-white hover:bg-white/12"
              }`}
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                  selected ? "bg-[#1f3b64] text-white" : "bg-white/12 text-[#7df5b9]"
                }`}
              >
                <WIcon className="h-4 w-4" aria-hidden strokeWidth={2} />
              </span>
              <span className="font-heading text-sm font-bold leading-snug">{w.who}</span>
            </button>
          );
        })}
      </div>
      <AnimatePresence mode="wait" initial={false}>
        <Motion.div
          key={entry.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          className="mt-6 rounded-2xl border border-white/12 bg-white/10 p-6 backdrop-blur-sm md:p-8"
        >
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1f3b64] text-white">
              <Icon className="h-6 w-6" aria-hidden strokeWidth={2} />
            </span>
            <div>
              <h3 className="font-heading text-xl font-bold text-white">{entry.who}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-100/90">{entry.why}</p>
              {entry.href ? (
                <a
                  href={entry.href}
                  {...externalAnchorProps(entry.href)}
                  className="mt-4 inline-flex items-center gap-1.5 font-heading text-sm font-bold text-[#7df5b9] hover:underline"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
              ) : null}
            </div>
          </div>
        </Motion.div>
      </AnimatePresence>
    </DocSection>
  );
}

export function NlsFaqSection() {
  return (
    <NlsSectionShell id="faq" tone="canvas">
      <NlsSectionHeading title="Frequently Asked Questions" />
      <div className="space-y-4">
        {NLS_FAQS.map((item, index) => (
          <FaqAccordion key={item.q} question={item.q} defaultOpen={index === 0}>
            <p className="text-[15px] leading-relaxed">{item.a}</p>
          </FaqAccordion>
        ))}
      </div>
    </NlsSectionShell>
  );
}

export function NlsCtaSection() {
  return (
    <NlsSectionShell id="start" tone="page" className="pb-20 md:pb-24">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#0f2344] via-[#1F3B64] to-[#0a1628] px-6 py-10 text-center text-white shadow-[0_32px_80px_-24px_rgba(7,20,40,0.55)] md:rounded-[3rem] md:px-12 md:py-14">
        <h2 className="font-heading text-3xl font-extrabold md:text-4xl">{NLS_CTA.title}</h2>
        <div className="mx-auto mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-white/85 md:text-lg">
          {NLS_CTA.paragraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
        <ConsultationCtas
          variant="onDark"
          freeScanLabel={NLS_CTA.freeScanLabel}
          consultLabel={NLS_CTA.consultLabel}
          consultHref={CONTACT_PATH}
          consultLinkProps={externalAnchorProps(CONTACT_PATH)}
          wrapperClassName="mt-8 justify-center"
        />
        <p className="mt-5 text-sm text-white/70">{NLS_CTA.trustLine}</p>
      </div>
    </NlsSectionShell>
  );
}
