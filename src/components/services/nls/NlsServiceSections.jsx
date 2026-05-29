import { useState } from "react";
import { AnimatePresence, motion as Motion } from "motion/react";
import {
  AlertTriangle,
  ArrowRight,
  Briefcase,
  Building2,
  Check,
  CheckCircle2,
  Minus,
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

const nlsInView = { once: true, amount: 0.12 };
const nlsEase = [0.22, 1, 0.36, 1];

function NlsReveal({ children, className = "", delay = 0, y = 18 }) {
  return (
    <Motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={nlsInView}
      transition={{ duration: 0.48, delay, ease: nlsEase }}
      className={className}
    >
      {children}
    </Motion.div>
  );
}

function NlsHoverLift({
  children,
  className = "",
  lift = -5,
  scale = 1.015,
  as: Component = Motion.div,
}) {
  return (
    <Component
      whileHover={{ y: lift, scale }}
      transition={{ type: "spring", stiffness: 380, damping: 26 }}
      className={`motion-reduce:transform-none ${className}`}
    >
      {children}
    </Component>
  );
}

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
      <NlsReveal>
        <NlsSectionHeading title={title} lead={lead} variant={headingVariant} />
      </NlsReveal>
      <NlsReveal delay={0.07} className={contentClassName}>
        {children}
      </NlsReveal>
    </NlsSectionShell>
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
        <Motion.h1
          id="nls-hero-heading"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: nlsEase }}
          className="w-full max-w-none font-heading text-[1.65rem] font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-[2.65rem] lg:text-5xl xl:text-[3.25rem] xl:leading-[1.08]"
        >
          <NlsHeroHeadline title={nlsPageHero.title} highlight={nlsPageHero.titleHighlight} />
        </Motion.h1>
        <div className="mt-5 w-full max-w-none space-y-4 md:mt-7 md:space-y-5">
          {nlsPageHero.leadParagraphs.map((paragraph, index) => (
            <Motion.p
              key={paragraph.slice(0, 48)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 + index * 0.1, ease: nlsEase }}
              className="w-full max-w-none text-base leading-relaxed text-slate-300/90 md:text-lg md:leading-relaxed lg:text-xl lg:leading-relaxed"
            >
              {paragraph}
            </Motion.p>
          ))}
        </div>
        <Motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32, ease: nlsEase }}
          className="mt-8"
        >
          <ConsultationCtas
            variant="onDark"
            freeScanLabel={nlsPageHero.freeScanLabel}
            consultLabel={nlsPageHero.consultLabel}
            consultHref={CONTACT_PATH}
            consultLinkProps={externalAnchorProps(CONTACT_PATH)}
            consultSuffix={
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            }
            wrapperClassName="justify-center lg:justify-start"
          />
        </Motion.div>
        <Motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.42 }}
          className="mt-5 w-full max-w-none text-sm text-slate-400/90 md:text-[15px] lg:mx-0"
        >
          {nlsPageHero.trustLine}
        </Motion.p>
      </div>
    </header>
  );
}

export function NlsWhatIsSection() {
  return (
    <DocSection id="what-is" title="What Is Negative Link Suppression?" tone="sage" first>
      <div className="space-y-5">
        {NLS_WHAT_IS_PARAGRAPHS.map((p, index) => (
          <Motion.p
            key={p.slice(0, 48)}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={nlsInView}
            transition={{ duration: 0.45, delay: index * 0.08, ease: nlsEase }}
            className="text-base leading-relaxed text-slate-600 md:text-lg"
          >
            {p}
          </Motion.p>
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
        {NLS_WHY_COSTS_ROWS.map((r, index) => {
          const selected = r.id === activeId;
          return (
            <Motion.button
              key={r.id}
              type="button"
              onClick={() => setActiveId(r.id)}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={nlsInView}
              transition={{ duration: 0.4, delay: index * 0.06, ease: nlsEase }}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`rounded-xl border px-4 py-3 text-left transition-colors focus-visible:ring-2 focus-visible:ring-navy/30 ${
                selected
                  ? "border-navy bg-navy text-white shadow-md"
                  : "border-navy/12 bg-white text-navy hover:border-[#79df86]/40 hover:shadow-md"
              }`}
            >
              <span className="font-heading text-sm font-bold">{r.perspective}</span>
            </Motion.button>
          );
        })}
      </div>
      <AnimatePresence mode="wait" initial={false}>
        <Motion.div
          key={row.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.28, ease: nlsEase }}
          className="mt-5 rounded-2xl border border-navy/10 bg-white p-6 shadow-[0_16px_48px_-28px_rgba(15,35,60,0.1)] transition-shadow duration-300 hover:shadow-[0_20px_52px_-24px_rgba(15,35,60,0.16)] md:p-8"
        >
          <p className="text-xs font-bold uppercase tracking-wide text-navy/45">The real impact</p>
          <p className="mt-3 text-base leading-relaxed text-navy/80 md:text-lg">{row.impact}</p>
        </Motion.div>
      </AnimatePresence>
      <Motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={nlsInView}
        transition={{ duration: 0.45, delay: 0.1, ease: nlsEase }}
        whileHover={{ y: -2 }}
        className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/80 px-5 py-4 text-base leading-relaxed text-amber-950/90 transition-[border-color,box-shadow] duration-300 hover:border-amber-300 hover:shadow-[0_12px_32px_-20px_rgba(180,83,9,0.2)] md:px-6"
      >
        {NLS_WHY_COSTS_CLOSING}
      </Motion.p>
    </DocSection>
  );
}

const SEARCH_RESULT_CATEGORY_CONFIG = {
  risk: {
    Icon: AlertTriangle,
    shell:
      "border-rose-200/90 bg-white shadow-[0_16px_48px_-28px_rgba(190,18,60,0.12)] ring-rose-100/60",
    shellHover:
      "hover:border-rose-300 hover:shadow-[0_28px_60px_-22px_rgba(190,18,60,0.28)] hover:ring-rose-200/80",
    bar: "from-rose-500 via-rose-400 to-amber-400",
    iconWrap: "bg-rose-100 text-rose-700 ring-rose-200/80",
    iconWrapHover: "group-hover/card:scale-110 group-hover/card:bg-rose-200 group-hover/card:shadow-md",
    listIcon: "text-rose-500",
    listItemHover: "hover:bg-rose-50/90",
    actionPanel: "border-rose-200/80 bg-gradient-to-r from-rose-50 to-rose-50/40",
    actionPanelHover: "group-hover/card:border-rose-300 group-hover/card:from-rose-100/90 group-hover/card:to-rose-50",
    actionText: "text-rose-950/90",
  },
  neutral: {
    Icon: Minus,
    shell:
      "border-slate-200/90 bg-white shadow-[0_16px_48px_-28px_rgba(31,59,100,0.1)]",
    shellHover:
      "hover:border-slate-300 hover:shadow-[0_28px_60px_-22px_rgba(31,59,100,0.18)]",
    bar: "from-slate-400 via-slate-300 to-slate-200",
    iconWrap: "bg-slate-100 text-slate-600 ring-slate-200/80",
    iconWrapHover: "group-hover/card:scale-110 group-hover/card:bg-slate-200/90 group-hover/card:shadow-md",
    listIcon: "text-slate-400",
    listItemHover: "hover:bg-slate-100/90",
    actionPanel: "border-slate-200/90 bg-gradient-to-r from-slate-50 to-white",
    actionPanelHover:
      "group-hover/card:border-slate-300 group-hover/card:from-slate-100 group-hover/card:to-white",
    actionText: "text-[#1F3B64]",
  },
  positive: {
    Icon: CheckCircle2,
    shell:
      "border-[#79df86]/45 bg-white shadow-[0_16px_48px_-28px_rgba(42,140,62,0.12)] ring-[#4CAF50]/15",
    shellHover:
      "hover:border-[#79df86]/70 hover:shadow-[0_28px_60px_-22px_rgba(42,140,62,0.22)] hover:ring-[#4CAF50]/25",
    bar: "from-[#4CAF50] via-emerald-400 to-[#7df5b9]",
    iconWrap: "bg-[#e8f7ec] text-[#1a5c38] ring-[#79df86]/40",
    iconWrapHover:
      "group-hover/card:scale-110 group-hover/card:bg-[#d4f0dc] group-hover/card:shadow-md",
    listIcon: "text-[#2a8c3e]",
    listItemHover: "hover:bg-[#f0faf3]",
    actionPanel: "border-[#79df86]/35 bg-gradient-to-r from-[#f0faf3] to-[#f4fbf6]",
    actionPanelHover:
      "group-hover/card:border-[#79df86]/55 group-hover/card:from-[#e8f7ec] group-hover/card:to-[#f4fbf6]",
    actionText: "text-[#1a5c38]",
  },
};

function splitSearchResultExamples(examples) {
  return examples.split("; ").map((item) => item.trim()).filter(Boolean);
}

function capitalizeExampleItem(text) {
  if (!text) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function NlsSearchResultCategoryCard({ category, index }) {
  const config = SEARCH_RESULT_CATEGORY_CONFIG[category.tone];
  const Icon = config.Icon;
  const items = splitSearchResultExamples(category.examples);

  return (
    <Motion.li
      className={`group/card flex h-full flex-col overflow-hidden rounded-2xl border transition-[box-shadow,border-color,transform] duration-300 motion-reduce:transition-none motion-reduce:hover:transform-none ${config.shell} ${config.shellHover}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <div
        className={`h-1.5 w-full bg-gradient-to-r transition-all duration-300 group-hover/card:h-2 ${config.bar}`}
        aria-hidden
      />
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex items-center gap-3">
          <span
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 transition-all duration-300 ${config.iconWrap} ${config.iconWrapHover}`}
          >
            <Icon className="h-5 w-5" strokeWidth={2.25} aria-hidden />
          </span>
          <div>
            <h3 className="font-heading text-xl font-bold text-navy transition-colors duration-300 group-hover/card:text-[#0f2e58]">
              {category.label}
            </h3>
            <p className="text-xs font-bold uppercase tracking-wide text-navy/45">Examples</p>
          </div>
        </div>
        <ul className="mt-5 flex-1 space-y-1.5" role="list">
          {items.map((item) => {
            const label = capitalizeExampleItem(item);
            return (
              <li
                key={item}
                className={`flex gap-2.5 rounded-lg px-2 py-2 text-sm leading-snug text-navy/78 transition-colors duration-200 md:text-[15px] md:leading-relaxed ${config.listItemHover}`}
              >
                <Icon
                  className={`mt-0.5 h-4 w-4 shrink-0 transition-transform duration-200 group-hover/card:scale-105 ${config.listIcon}`}
                  strokeWidth={2.25}
                  aria-hidden
                />
                <span>{label}</span>
              </li>
            );
          })}
        </ul>
        <div
          className={`mt-5 rounded-xl border px-4 py-3.5 transition-all duration-300 ${config.actionPanel} ${config.actionPanelHover}`}
        >
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-navy/45">What to do</p>
          <p className={`mt-1.5 text-sm font-semibold leading-snug md:text-[15px] ${config.actionText}`}>
            {category.action}
          </p>
        </div>
      </div>
    </Motion.li>
  );
}

export function NlsSearchResultsSection() {
  return (
    <DocSection
      id="search-results"
      title="Understanding What Is in Your Search Results"
      lead={NLS_SEARCH_RESULTS_INTRO}
      tone="canvas"
    >
      <ul className="grid list-none items-stretch gap-5 p-0 md:gap-6 lg:grid-cols-3">
        {NLS_SEARCH_RESULT_CATEGORIES.map((cat, index) => (
          <NlsSearchResultCategoryCard key={cat.id} category={cat} index={index} />
        ))}
      </ul>
      <Motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={nlsInView}
        transition={{ duration: 0.45, ease: nlsEase }}
        className="mt-8 text-base leading-relaxed text-slate-600 md:text-lg"
      >
        {NLS_SEARCH_RESULTS_CLOSING}
      </Motion.p>
    </DocSection>
  );
}

function NlsRemovalComparisonTable() {
  const [hoveredRow, setHoveredRow] = useState(null);

  return (
    <Motion.div
      className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_12px_40px_-24px_rgba(31,59,100,0.12)] transition-[box-shadow,border-color] duration-300 hover:border-navy/20 hover:shadow-[0_24px_56px_-24px_rgba(31,59,100,0.2)]"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
          <caption className="sr-only">
            Comparison of content removal and negative link suppression
          </caption>
          <thead>
            <tr className="border-b border-navy/10 bg-[#f4f7fb]">
              <th className="px-4 py-3 font-heading text-xs font-bold uppercase tracking-wide text-navy/55 md:px-5" />
              <th className="px-4 py-3 font-heading text-xs font-bold uppercase tracking-wide text-navy transition-colors duration-200 md:px-5">
                Content Removal
              </th>
              <th className="px-4 py-3 font-heading text-xs font-bold uppercase tracking-wide text-[#1a5c38] transition-colors duration-200 md:px-5">
                Negative Link Suppression
              </th>
            </tr>
          </thead>
          <tbody>
            {NLS_REMOVAL_VS_SUPPRESSION_ROWS.map((row, i) => {
              const isHovered = hoveredRow === i;
              const baseBg = i % 2 === 1 ? "bg-[#fafbfd]/80" : "bg-white";
              return (
                <Motion.tr
                  key={row.aspect}
                  onMouseEnter={() => setHoveredRow(i)}
                  onMouseLeave={() => setHoveredRow(null)}
                  className={`group/row transition-colors duration-300 motion-reduce:transition-none ${
                    isHovered
                      ? "bg-gradient-to-r from-[#eef4ff] via-white to-[#f0faf3] shadow-[inset_4px_0_0_0_#1f3b64,inset_-4px_0_0_0_#4CAF50]"
                      : baseBg
                  }`}
                >
                  <th
                    className={`px-4 py-3.5 align-top font-heading text-sm font-bold transition-colors duration-300 md:px-5 ${
                      isHovered ? "text-[#0f2e58]" : "text-navy"
                    }`}
                  >
                    <span className="inline-flex items-center gap-2">
                      <span
                        className={`h-2 w-2 shrink-0 rounded-full transition-all duration-300 ${
                          isHovered
                            ? "scale-100 bg-[#4CAF50] opacity-100"
                            : "scale-75 bg-navy/20 opacity-0 group-hover/row:opacity-100"
                        }`}
                        aria-hidden
                      />
                      {row.aspect}
                    </span>
                  </th>
                  <td
                    className={`px-4 py-3.5 align-top text-sm leading-relaxed transition-all duration-300 md:px-5 ${
                      isHovered
                        ? "bg-[#eef4ff]/90 text-navy/90"
                        : "text-navy/75 hover:bg-[#f4f7fb]/80"
                    }`}
                  >
                    {row.removal}
                  </td>
                  <td
                    className={`px-4 py-3.5 align-top text-sm leading-relaxed transition-all duration-300 md:px-5 ${
                      isHovered
                        ? "bg-[#f0faf3]/95 text-navy/90"
                        : "text-navy/75 hover:bg-[#f4fbf6]/80"
                    }`}
                  >
                    {row.suppression}
                  </td>
                </Motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Motion.div>
  );
}

export function NlsRemovalVsSuppressionSection() {
  return (
    <DocSection
      id="removal-vs-suppression"
      title="Content Removal vs. Negative Link Suppression: What Is the Difference?"
      tone="blue"
    >
      <NlsRemovalComparisonTable />
      <Motion.blockquote
        className="mt-8 rounded-2xl border border-amber-200/70 bg-amber-50/90 px-5 py-4 text-base leading-relaxed text-amber-950/90 transition-[border-color,box-shadow,transform] duration-300 hover:border-amber-300 hover:shadow-[0_12px_32px_-20px_rgba(180,83,9,0.25)] md:px-6 md:py-5"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.4, delay: 0.08 }}
        whileHover={{ y: -2 }}
      >
        {NLS_PUBLISHER_NOTE}
      </Motion.blockquote>
    </DocSection>
  );
}

export function NlsWhenSuppressionSection() {
  return (
    <DocSection id="when-suppression" title="When Is Suppression the Right Approach?" tone="white">
      <ul className="space-y-4">
        {NLS_WHEN_SUPPRESSION_ROWS.map((row, index) => (
          <Motion.li
            key={row.scenario}
            initial={{ opacity: 0, x: index % 2 === 0 ? -14 : 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={nlsInView}
            transition={{ duration: 0.42, delay: index * 0.07, ease: nlsEase }}
          >
            <NlsHoverLift
              as={Motion.div}
              className="rounded-2xl border border-navy/10 bg-[#f8fafc] p-5 transition-[border-color,box-shadow] duration-300 hover:border-[#79df86]/35 hover:bg-white hover:shadow-[0_16px_40px_-24px_rgba(31,59,100,0.12)] md:p-6"
            >
              <h3 className="font-heading text-base font-bold text-navy md:text-lg">{row.scenario}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/75 md:text-[15px]">{row.why}</p>
            </NlsHoverLift>
          </Motion.li>
        ))}
      </ul>
    </DocSection>
  );
}

function NlsFeasibilityTable() {
  const [hoveredRow, setHoveredRow] = useState(null);

  return (
    <Motion.div
      className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_12px_40px_-24px_rgba(31,59,100,0.12)] transition-[box-shadow,border-color] duration-300 hover:border-navy/20 hover:shadow-[0_24px_56px_-24px_rgba(31,59,100,0.2)]"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={nlsInView}
      transition={{ duration: 0.45, ease: nlsEase }}
      whileHover={{ y: -3 }}
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
          <caption className="sr-only">Removal and suppression feasibility by content type</caption>
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
            {NLS_FEASIBILITY_ROWS.map((row, i) => {
              const isHovered = hoveredRow === i;
              const baseBg = i % 2 === 1 ? "bg-[#fafbfd]/80" : "bg-white";
              return (
                <Motion.tr
                  key={row.contentType}
                  onMouseEnter={() => setHoveredRow(i)}
                  onMouseLeave={() => setHoveredRow(null)}
                  className={`group/row transition-colors duration-300 ${
                    isHovered
                      ? "bg-gradient-to-r from-[#eef4ff] via-white to-[#f0faf3] shadow-[inset_4px_0_0_0_#1f3b64,inset_-4px_0_0_0_#4CAF50]"
                      : baseBg
                  }`}
                >
                  <th
                    className={`px-4 py-3.5 align-top font-heading text-sm font-bold transition-colors duration-300 md:px-5 ${
                      isHovered ? "text-[#0f2e58]" : "text-navy"
                    }`}
                  >
                    {row.contentType}
                  </th>
                  <td
                    className={`px-4 py-3.5 align-top text-sm leading-relaxed transition-all duration-300 md:px-5 ${
                      isHovered ? "bg-[#eef4ff]/90 text-navy/90" : "text-navy/75 hover:bg-[#f4f7fb]/80"
                    }`}
                  >
                    {row.removal}
                  </td>
                  <td
                    className={`px-4 py-3.5 align-top text-sm leading-relaxed transition-all duration-300 md:px-5 ${
                      isHovered ? "bg-[#f0faf3]/95 text-navy/90" : "text-navy/75 hover:bg-[#f4fbf6]/80"
                    }`}
                  >
                    {row.suppression}
                  </td>
                </Motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Motion.div>
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
      <NlsFeasibilityTable />
      <Motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={nlsInView}
        transition={{ duration: 0.45, ease: nlsEase }}
        className="mt-8 text-base leading-relaxed text-slate-600 md:text-lg"
      >
        {NLS_FEASIBILITY_CLOSING}
      </Motion.p>
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
      <Motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={nlsInView}
        transition={{ duration: 0.4, ease: nlsEase }}
        className="mb-6 text-base text-slate-600 md:text-lg"
      >
        Reputation360&apos;s suppression methodology is effective across a broad range of content types:
      </Motion.p>
      <ul className="grid list-none gap-3 p-0 md:grid-cols-2">
        {NLS_HARMFUL_CONTENT_TYPES.map((item, index) => (
          <Motion.li
            key={item.slice(0, 40)}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={nlsInView}
            transition={{ duration: 0.4, delay: (index % 4) * 0.05, ease: nlsEase }}
          >
            <NlsHoverLift
              as={Motion.div}
              className="flex h-full gap-3 rounded-xl border border-navy/10 bg-white p-4 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-[#79df86]/40 hover:shadow-[0_14px_36px_-20px_rgba(31,59,100,0.14)]"
            >
              <Check
                className="mt-0.5 h-5 w-5 shrink-0 text-[#2a8c3e] transition-transform duration-200 group-hover:scale-110"
                strokeWidth={2.25}
                aria-hidden
              />
              <span className="text-sm leading-relaxed text-navy/80 md:text-[15px]">{item}</span>
            </NlsHoverLift>
          </Motion.li>
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
          <Motion.li
            key={step.step}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={nlsInView}
            transition={{ duration: 0.42, delay: index * 0.06, ease: nlsEase }}
            className="relative flex gap-4 pb-8 last:pb-0 md:gap-5"
          >
            {index < NLS_PROCESS_STEPS.length - 1 ? (
              <span
                className="absolute left-5 top-12 bottom-0 w-px bg-gradient-to-b from-[#4CAF50]/50 to-[#2E5B88]/20"
                aria-hidden
              />
            ) : null}
            <Motion.span
              className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1f3b64] font-heading text-sm font-bold text-white shadow-md"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              {step.step}
            </Motion.span>
            <NlsHoverLift
              as={Motion.div}
              className="min-w-0 flex-1 rounded-2xl border border-navy/10 bg-white p-4 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-[#79df86]/35 hover:shadow-[0_16px_40px_-22px_rgba(31,59,100,0.14)] md:p-5"
            >
              <h3 className="font-heading text-base font-bold text-navy md:text-lg">{step.phase}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/75 md:text-[15px]">{step.body}</p>
            </NlsHoverLift>
          </Motion.li>
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
      <Motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={nlsInView}
        transition={{ duration: 0.45, ease: nlsEase }}
        whileHover={{ y: -4 }}
        className="overflow-hidden rounded-2xl border border-navy/12 bg-white shadow-[0_16px_48px_-28px_rgba(31,59,100,0.12)] transition-[box-shadow,border-color] duration-300 hover:border-navy/20 hover:shadow-[0_24px_56px_-24px_rgba(31,59,100,0.18)]"
      >
        <div className="grid grid-cols-2 divide-x divide-navy/[0.08] border-b border-navy/10 md:grid-cols-4">
          {NLS_TIMELINE_PHASES.map((p, index) => {
            const selected = active === index;
            return (
              <Motion.button
                key={p.n}
                type="button"
                onClick={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
                whileHover={{ backgroundColor: selected ? undefined : "rgba(248,250,252,0.9)" }}
                whileTap={{ scale: 0.98 }}
                className={`px-3 py-4 text-left transition-colors duration-200 md:px-5 md:py-5 ${
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
              </Motion.button>
            );
          })}
        </div>
        <AnimatePresence mode="wait" initial={false}>
          <Motion.div
            key={phase.n}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: nlsEase }}
            className="p-6 md:p-8"
          >
            <h3 className="font-heading text-xl font-bold text-navy">
              Phase {phaseNum}: {phase.title}
            </h3>
            <p className="mt-3 w-full max-w-none text-base leading-relaxed text-navy/75">{phase.body}</p>
          </Motion.div>
        </AnimatePresence>
      </Motion.div>
      <Motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={nlsInView}
        transition={{ duration: 0.4, ease: nlsEase }}
        className="mt-6 text-sm leading-relaxed text-navy/70 md:text-base"
      >
        {NLS_TIMELINE_NOTE}
      </Motion.p>
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
        {NLS_WHO_WE_HELP.map((w, index) => {
          const WIcon = WHO_ICONS[w.id] ?? Users;
          const selected = w.id === activeId;
          return (
            <Motion.button
              key={w.id}
              type="button"
              onClick={() => setActiveId(w.id)}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={nlsInView}
              transition={{ duration: 0.38, delay: index * 0.05, ease: nlsEase }}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors duration-200 ${
                selected
                  ? "border-white/25 bg-white text-navy shadow-lg"
                  : "border-white/15 bg-white/8 text-white hover:border-white/25 hover:bg-white/12"
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
            </Motion.button>
          );
        })}
      </div>
      <AnimatePresence mode="wait" initial={false}>
        <Motion.div
          key={entry.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.28, ease: nlsEase }}
          className="mt-6 rounded-2xl border border-white/12 bg-white/10 p-6 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-white/20 hover:bg-white/14 hover:shadow-[0_20px_50px_-24px_rgba(0,0,0,0.35)] md:p-8"
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
      <NlsReveal>
        <NlsSectionHeading title="Frequently Asked Questions" />
      </NlsReveal>
      <div className="space-y-4">
        {NLS_FAQS.map((item, index) => (
          <Motion.div
            key={item.q}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={nlsInView}
            transition={{ duration: 0.4, delay: index * 0.05, ease: nlsEase }}
            className="transition-transform duration-200 hover:-translate-y-0.5"
          >
            <FaqAccordion question={item.q} defaultOpen={index === 0}>
              <p className="text-[15px] leading-relaxed">{item.a}</p>
            </FaqAccordion>
          </Motion.div>
        ))}
      </div>
    </NlsSectionShell>
  );
}

export function NlsCtaSection() {
  return (
    <NlsSectionShell id="start" tone="page" className="pb-20 md:pb-24">
      <Motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={nlsInView}
        transition={{ duration: 0.55, ease: nlsEase }}
      >
        <NlsHoverLift
          as={Motion.div}
          lift={-6}
          scale={1.01}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#0f2344] via-[#1F3B64] to-[#0a1628] px-6 py-10 text-center text-white shadow-[0_32px_80px_-24px_rgba(7,20,40,0.55)] transition-[border-color,box-shadow] duration-300 hover:border-white/20 hover:shadow-[0_40px_96px_-28px_rgba(7,20,40,0.65)] md:rounded-[3rem] md:px-12 md:py-14"
        >
          <Motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={nlsInView}
            transition={{ duration: 0.45, delay: 0.08, ease: nlsEase }}
            className="font-heading text-3xl font-extrabold md:text-4xl"
          >
            {NLS_CTA.title}
          </Motion.h2>
          <div className="mx-auto mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-white/85 md:text-lg">
            {NLS_CTA.paragraphs.map((p, index) => (
              <Motion.p
                key={p.slice(0, 40)}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={nlsInView}
                transition={{ duration: 0.4, delay: 0.12 + index * 0.08, ease: nlsEase }}
              >
                {p}
              </Motion.p>
            ))}
          </div>
          <Motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={nlsInView}
            transition={{ duration: 0.45, delay: 0.28, ease: nlsEase }}
          >
            <ConsultationCtas
              variant="onDark"
              freeScanLabel={NLS_CTA.freeScanLabel}
              consultLabel={NLS_CTA.consultLabel}
              consultHref={CONTACT_PATH}
              consultLinkProps={externalAnchorProps(CONTACT_PATH)}
              wrapperClassName="mt-8 justify-center"
            />
          </Motion.div>
          <Motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={nlsInView}
            transition={{ duration: 0.45, delay: 0.36 }}
            className="mt-5 text-sm text-white/70"
          >
            {NLS_CTA.trustLine}
          </Motion.p>
        </NlsHoverLift>
      </Motion.div>
    </NlsSectionShell>
  );
}
