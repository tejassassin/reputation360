import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion as Motion } from "motion/react";
import {
  AlertTriangle,
  ArrowRight,
  Briefcase,
  Building2,
  Camera,
  CheckCircle2,
  Clock,
  Database,
  MessageSquareWarning,
  Minus,
  Newspaper,
  Scale,
  Share2,
  ShieldCheck,
  Star,
  Stethoscope,
  Target,
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

function useScrollActiveStep(stepCount) {
  const [active, setActive] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    const update = () => {
      const trigger = window.innerHeight * 0.38;
      let next = 0;
      itemRefs.current.forEach((el, index) => {
        if (!el) return;
        if (el.getBoundingClientRect().top <= trigger) next = index;
      });
      setActive((prev) => (prev === next ? prev : next));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [stepCount]);

  return { active, itemRefs };
}

function nlsProcessStepBadgeClass(index, active) {
  if (index < active) {
    return "bg-[#4CAF50] text-white shadow-md";
  }
  if (index === active) {
    return "bg-[#1f3b64] text-white shadow-[0_0_0_4px_rgba(76,175,80,0.35)] ring-2 ring-[#4CAF50]/50";
  }
  return "bg-slate-200 text-navy/45 shadow-sm";
}

function nlsProcessConnectorClass(index, active) {
  if (index < active) {
    return "bg-[#4CAF50]";
  }
  if (index === active) {
    return "bg-gradient-to-b from-[#4CAF50] via-[#4CAF50]/60 to-slate-200";
  }
  return "bg-slate-200";
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

function NlsSectionHeading({ title, lead, variant = "default", titleOneLine = false }) {
  const onDark = variant === "onDark";
  return (
    <div className="mb-10 md:mb-14">
      <h2
        className={`font-heading text-3xl font-extrabold leading-[1.12] tracking-tight md:text-[2.1rem] ${
          titleOneLine ? "max-w-none md:whitespace-nowrap md:text-[1.65rem] lg:text-[2.1rem]" : "max-w-4xl"
        } ${onDark ? "text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.25)]" : "text-[#1F3B64]"}`}
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

function DocSection({
  id,
  title,
  lead,
  children,
  tone = "page",
  first = false,
  contentClassName = "",
  titleOneLine = false,
}) {
  const headingVariant = tone === "navy" ? "onDark" : "default";
  return (
    <NlsSectionShell id={id} tone={tone} first={first}>
      <NlsReveal>
        <NlsSectionHeading
          title={title}
          lead={lead}
          variant={headingVariant}
          titleOneLine={titleOneLine}
        />
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
            Comparison of content removal and Negative Link Suppression
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

function nlsWhenSuppressionShortLabel(scenario) {
  if (scenario.startsWith("The content is accurate")) return "Outdated but accurate";
  if (scenario.startsWith("Removal")) return "Removal failed";
  if (scenario.startsWith("You are facing")) return "Ongoing attacks";
  if (scenario.startsWith("The content is old")) return "Stale content";
  if (scenario.startsWith("You are anticipating")) return "Proactive defense";
  return scenario.split(" ").slice(0, 3).join(" ");
}

export function NlsWhenSuppressionSection() {
  const [active, setActive] = useState(0);
  const row = NLS_WHEN_SUPPRESSION_ROWS[active] ?? NLS_WHEN_SUPPRESSION_ROWS[0];
  const panelId = "nls-when-suppression-panel";

  const onTabListKeyDown = (event) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      setActive((i) => Math.min(i + 1, NLS_WHEN_SUPPRESSION_ROWS.length - 1));
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (event.key === "Home") {
      event.preventDefault();
      setActive(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setActive(NLS_WHEN_SUPPRESSION_ROWS.length - 1);
    }
  };

  return (
    <DocSection id="when-suppression" title="When Is Negative Link Suppression the Right Approach?" tone="sage">
      <Motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={nlsInView}
        transition={{ duration: 0.45, ease: nlsEase }}
        className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_16px_48px_-28px_rgba(31,59,100,0.12)]"
      >
        <div
          className="border-b border-navy/10 p-3 md:p-4"
          role="tablist"
          aria-label="When suppression is the right approach"
          onKeyDown={onTabListKeyDown}
        >
          <ul className="m-0 flex list-none gap-2 overflow-x-auto p-0 [-ms-overflow-style:none] [scrollbar-width:none] sm:flex-wrap sm:overflow-visible [&::-webkit-scrollbar]:hidden">
            {NLS_WHEN_SUPPRESSION_ROWS.map((item, index) => {
              const selected = active === index;
              const shortLabel = nlsWhenSuppressionShortLabel(item.scenario);
              return (
                <li key={item.scenario} className="shrink-0 sm:shrink">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    id={`nls-when-tab-${index}`}
                    aria-controls={panelId}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActive(index)}
                    onMouseEnter={() => setActive(index)}
                    className={`rounded-xl border px-3.5 py-2.5 text-left outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-navy/30 sm:px-4 sm:py-3 ${
                      selected
                        ? "border-navy bg-navy text-white shadow-md"
                        : "border-navy/12 bg-[#f8fafc] text-navy hover:border-[#79df86]/40 hover:bg-white hover:shadow-sm"
                    }`}
                  >
                    <span className="block font-heading text-xs font-bold leading-snug sm:text-sm">
                      {shortLabel}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div
          id={panelId}
          role="tabpanel"
          aria-labelledby={`nls-when-tab-${active}`}
          className="p-5 md:p-7"
        >
          <AnimatePresence mode="wait" initial={false}>
            <Motion.div
              key={row.scenario}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.24, ease: nlsEase }}
            >
              <p className="text-xs font-bold uppercase tracking-wide text-navy/45">
                Scenario {String(active + 1).padStart(2, "0")} of {String(NLS_WHEN_SUPPRESSION_ROWS.length).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-heading text-lg font-bold leading-snug text-navy md:text-xl">
                {row.scenario}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/75 md:text-base">{row.why}</p>
            </Motion.div>
          </AnimatePresence>
        </div>
      </Motion.div>
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
                Negative Link Suppression Feasibility
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
      title="Not All Negative Content Is the Same: Removal and Negative Link Suppression Feasibility"
      lead={NLS_FEASIBILITY_INTRO}
      tone="gradient"
      titleOneLine
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

const HARMFUL_CONTENT_ICONS = [
  Newspaper,
  MessageSquareWarning,
  Star,
  Camera,
  Clock,
  Share2,
  Target,
  Database,
  Scale,
];

function parseHarmfulContentType(item) {
  const dash = item.indexOf(" - ");
  if (dash === -1) return { title: item, description: "" };
  return {
    title: item.slice(0, dash),
    description: item.slice(dash + 3),
  };
}

const NLS_HARMFUL_CONTENT_PARSED = NLS_HARMFUL_CONTENT_TYPES.map(parseHarmfulContentType);

export function NlsContentTypesSection() {
  const [active, setActive] = useState(0);
  const entry = NLS_HARMFUL_CONTENT_PARSED[active] ?? NLS_HARMFUL_CONTENT_PARSED[0];
  const Icon = HARMFUL_CONTENT_ICONS[active] ?? Newspaper;
  const panelId = "nls-content-types-panel";

  const onTabListKeyDown = (event) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      setActive((i) => Math.min(i + 1, NLS_HARMFUL_CONTENT_PARSED.length - 1));
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (event.key === "Home") {
      event.preventDefault();
      setActive(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setActive(NLS_HARMFUL_CONTENT_PARSED.length - 1);
    }
  };

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
        className="mb-5 text-base text-slate-600 md:mb-6 md:text-lg"
      >
        Reputation360&apos;s Negative Link Suppression methodology is effective across a broad range of content types:
      </Motion.p>

      <Motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={nlsInView}
        transition={{ duration: 0.45, ease: nlsEase }}
        className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_16px_48px_-28px_rgba(31,59,100,0.12)]"
      >
        <div
          className="border-b border-navy/10 p-3 md:p-4"
          role="tablist"
          aria-label="Harmful content types we suppress"
          onKeyDown={onTabListKeyDown}
        >
          <ul className="m-0 grid list-none grid-cols-2 gap-2.5 p-0 sm:grid-cols-3 sm:gap-3">
            {NLS_HARMFUL_CONTENT_PARSED.map((item, index) => {
              const selected = active === index;
              const TabIcon = HARMFUL_CONTENT_ICONS[index] ?? Newspaper;
              return (
                <li key={item.title}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    id={`nls-content-tab-${index}`}
                    aria-controls={panelId}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActive(index)}
                    onMouseEnter={() => setActive(index)}
                    className={`flex min-h-[4.75rem] w-full items-center gap-3 rounded-xl border px-3.5 py-3.5 text-left outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-navy/30 sm:min-h-[5.25rem] sm:gap-3.5 sm:px-4 sm:py-4 ${
                      selected
                        ? "border-navy bg-navy text-white shadow-md"
                        : "border-navy/10 bg-[#f8fafc] text-navy hover:border-[#79df86]/40 hover:bg-white hover:shadow-sm"
                    }`}
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors sm:h-12 sm:w-12 ${
                        selected ? "bg-white/15 text-[#7df5b9]" : "bg-[#e8f7ec] text-[#1a5c38]"
                      }`}
                    >
                      <TabIcon className="h-5 w-5 sm:h-[1.375rem] sm:w-[1.375rem]" aria-hidden strokeWidth={2.25} />
                    </span>
                    <span
                      className={`line-clamp-2 min-w-0 flex-1 font-heading text-sm font-bold leading-snug sm:text-[15px] md:text-base ${
                        selected ? "text-white" : "text-navy"
                      }`}
                    >
                      {item.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div
          id={panelId}
          role="tabpanel"
          aria-labelledby={`nls-content-tab-${active}`}
          className="p-5 md:p-7"
        >
          <AnimatePresence mode="wait" initial={false}>
            <Motion.div
              key={entry.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.24, ease: nlsEase }}
              className="flex gap-4 sm:gap-5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e8f7ec] text-[#1a5c38] ring-1 ring-[#79df86]/30 sm:h-14 sm:w-14">
                <Icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden strokeWidth={2} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold uppercase tracking-wide text-navy/45">
                  Content type {String(active + 1).padStart(2, "0")} of{" "}
                  {String(NLS_HARMFUL_CONTENT_PARSED.length).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-heading text-lg font-bold leading-snug text-navy md:text-xl">
                  {entry.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/75 md:text-base">{entry.description}</p>
              </div>
            </Motion.div>
          </AnimatePresence>
        </div>
      </Motion.div>
    </DocSection>
  );
}

export function NlsProcessSection() {
  const { active, itemRefs } = useScrollActiveStep(NLS_PROCESS_STEPS.length);

  return (
    <DocSection id="process" title="How Our Negative Link Suppression Process Works" tone="blue">
      <ol className="relative list-none space-y-0 p-0">
        {NLS_PROCESS_STEPS.map((step, index) => {
          const isActive = index === active;
          const isPast = index < active;
          return (
            <Motion.li
              key={step.step}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={nlsInView}
              transition={{ duration: 0.42, delay: index * 0.06, ease: nlsEase }}
              className="relative flex gap-4 pb-8 last:pb-0 md:gap-5"
            >
              {index < NLS_PROCESS_STEPS.length - 1 ? (
                <span
                  className={`absolute left-5 top-12 bottom-0 w-px transition-colors duration-500 ${nlsProcessConnectorClass(index, active)}`}
                  aria-hidden
                />
              ) : null}
              <Motion.span
                className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-heading text-sm font-bold transition-[background-color,box-shadow,color] duration-500 motion-reduce:transition-none ${nlsProcessStepBadgeClass(index, active)}`}
                animate={{ scale: isActive ? 1.1 : 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 24 }}
                aria-current={isActive ? "step" : undefined}
              >
                {step.step}
              </Motion.span>
              <NlsHoverLift
                as={Motion.div}
                className={`min-w-0 flex-1 rounded-2xl border bg-white p-4 shadow-sm transition-[border-color,box-shadow,background-color] duration-500 md:p-5 ${
                  isActive
                    ? "border-[#79df86]/50 shadow-[0_16px_40px_-22px_rgba(42,140,62,0.18)]"
                    : isPast
                      ? "border-navy/10 hover:border-[#79df86]/35 hover:shadow-[0_16px_40px_-22px_rgba(31,59,100,0.14)]"
                      : "border-navy/10 opacity-90 hover:border-[#79df86]/35 hover:opacity-100 hover:shadow-[0_16px_40px_-22px_rgba(31,59,100,0.14)]"
                }`}
              >
                <h3
                  className={`font-heading text-base font-bold md:text-lg ${
                    isActive ? "text-[#0f2e58]" : "text-navy"
                  }`}
                >
                  {step.phase}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/75 md:text-[15px]">{step.body}</p>
              </NlsHoverLift>
            </Motion.li>
          );
        })}
      </ol>
    </DocSection>
  );
}

export function NlsTimelineSection() {
  const [active, setActive] = useState(0);
  const phase = NLS_TIMELINE_PHASES[active] ?? NLS_TIMELINE_PHASES[0];
  const phaseNum = String(phase.n).padStart(2, "0");
  const panelId = `nls-timeline-panel-${phase.n}`;

  const onTabListKeyDown = (event) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      setActive((i) => Math.min(i + 1, NLS_TIMELINE_PHASES.length - 1));
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (event.key === "Home") {
      event.preventDefault();
      setActive(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setActive(NLS_TIMELINE_PHASES.length - 1);
    }
  };

  return (
    <DocSection
      id="timeline"
      title="How Long Does It Take?"
      tone="gradient"
      contentClassName="mt-10 md:mt-12"
    >
      <div className="overflow-hidden rounded-2xl border border-navy/12 bg-white shadow-[0_16px_48px_-28px_rgba(31,59,100,0.12)]">
        <div
          className="grid grid-cols-2 divide-x divide-navy/[0.08] border-b border-navy/10 md:grid-cols-4"
          role="tablist"
          aria-label="Suppression campaign timeline phases"
          onKeyDown={onTabListKeyDown}
        >
          {NLS_TIMELINE_PHASES.map((p, index) => {
            const num = String(p.n).padStart(2, "0");
            const selected = active === index;
            return (
              <button
                key={p.n}
                type="button"
                role="tab"
                aria-selected={selected}
                id={`nls-timeline-tab-${p.n}`}
                aria-controls={panelId}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
                className={`group relative px-4 py-5 text-left outline-none transition-[background-color,box-shadow] duration-300 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-navy/30 md:px-6 md:py-6 ${
                  selected ? "bg-[#f2f5ff]" : "bg-white hover:bg-[#f8fafc]"
                }`}
              >
                <span
                  className={`inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] transition-colors duration-300 md:text-xs ${
                    selected ? "bg-navy text-white" : "bg-navy/8 text-navy/55"
                  }`}
                >
                  Phase {num}
                </span>
                <span className="mt-2 block font-heading text-base font-bold text-navy md:text-lg">
                  {p.timespan}
                </span>
                <span className="mt-1 block text-xs font-medium leading-snug text-navy/60 md:text-sm">
                  {p.title}
                </span>
              </button>
            );
          })}
        </div>

        <div className="h-1 bg-navy/[0.06]" aria-hidden>
          <Motion.div
            className="h-full bg-gradient-to-r from-[#1f3b64] via-[#2e5b88] to-[#2a8c3e]"
            initial={false}
            animate={{
              width: `${((active + 1) / NLS_TIMELINE_PHASES.length) * 100}%`,
            }}
            transition={{ duration: 0.45, ease: nlsEase }}
          />
        </div>

        <div
          id={panelId}
          role="tabpanel"
          aria-labelledby={`nls-timeline-tab-${phase.n}`}
          className="relative min-h-[12rem] overflow-hidden p-6 md:min-h-[13rem] md:p-8 lg:p-10"
        >
          <AnimatePresence mode="wait" initial={false}>
            <Motion.div
              key={phase.n}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: nlsEase }}
            >
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <span className="inline-flex rounded-full bg-navy px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white">
                  Phase {phaseNum}
                </span>
                <span className="font-heading text-2xl font-bold leading-tight text-navy md:text-3xl">
                  {phase.timespan}
                </span>
              </div>
              <h3 className="mt-4 font-heading text-xl font-bold text-navy md:text-2xl">
                Phase {phaseNum}: {phase.title}
              </h3>
              <p className="mt-4 w-full max-w-none text-base leading-relaxed text-navy/75 md:text-lg md:leading-relaxed">
                {phase.body}
              </p>
            </Motion.div>
          </AnimatePresence>
        </div>
      </div>
      <p className="mt-8 w-full max-w-none text-sm leading-relaxed text-navy/70 md:mt-10 md:text-base">
        {NLS_TIMELINE_NOTE}
      </p>
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
  const activeIndex = NLS_WHO_WE_HELP.findIndex((w) => w.id === activeId);
  const entry = NLS_WHO_WE_HELP[activeIndex] ?? NLS_WHO_WE_HELP[0];
  const Icon = WHO_ICONS[entry.id] ?? Users;
  const panelId = `nls-who-panel-${entry.id}`;

  const onTabListKeyDown = (event) => {
    const index = activeIndex < 0 ? 0 : activeIndex;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      const next = NLS_WHO_WE_HELP[Math.min(index + 1, NLS_WHO_WE_HELP.length - 1)];
      if (next) setActiveId(next.id);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      const prev = NLS_WHO_WE_HELP[Math.max(index - 1, 0)];
      if (prev) setActiveId(prev.id);
    } else if (event.key === "Home") {
      event.preventDefault();
      setActiveId(NLS_WHO_WE_HELP[0].id);
    } else if (event.key === "End") {
      event.preventDefault();
      setActiveId(NLS_WHO_WE_HELP[NLS_WHO_WE_HELP.length - 1].id);
    }
  };

  return (
    <DocSection id="who-we-help" title="Who We Help" tone="navy">
      <div
        id={panelId}
        role="tabpanel"
        aria-labelledby={`nls-who-tab-${entry.id}`}
        className="relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-white/14 via-white/8 to-white/4 p-6 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.5)] ring-1 ring-inset ring-white/10 backdrop-blur-md md:p-8 lg:p-10"
      >
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#4CAF50]/15 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-1/4 h-40 w-40 rounded-full bg-[#2E5B88]/30 blur-3xl"
          aria-hidden
        />
        <AnimatePresence mode="wait" initial={false}>
          <Motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: nlsEase }}
            className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10"
          >
            <div className="flex shrink-0 flex-col items-center gap-4 lg:w-[11.5rem]">
              <span className="flex h-20 w-20 items-center justify-center rounded-[1.35rem] bg-[#1f3b64] text-[#7df5b9] shadow-[0_16px_40px_-12px_rgba(0,0,0,0.45)] ring-2 ring-white/15 lg:h-24 lg:w-24">
                <Icon className="h-9 w-9 lg:h-10 lg:w-10" aria-hidden strokeWidth={2} />
              </span>
              <div className="flex gap-1.5" aria-hidden>
                {NLS_WHO_WE_HELP.map((w) => (
                  <span
                    key={w.id}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      w.id === activeId ? "w-6 bg-[#7df5b9]" : "w-1.5 bg-white/25"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="min-w-0 flex-1 text-center lg:text-left">
              <h3 className="font-heading text-2xl font-bold leading-tight text-white md:text-3xl">
                {entry.who}
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-100/90 md:text-lg lg:mx-0">
                {entry.why}
              </p>
              {entry.href ? (
                <a
                  href={entry.href}
                  {...externalAnchorProps(entry.href)}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#7df5b9] px-6 py-3 font-heading text-sm font-bold text-[#0f2344] shadow-[0_8px_24px_-8px_rgba(125,245,185,0.55)] transition hover:bg-[#9ef9c9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7df5b9]"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
              ) : null}
            </div>
          </Motion.div>
        </AnimatePresence>
      </div>

      <div
        className="mt-5"
        role="tablist"
        aria-label="Who we help"
        onKeyDown={onTabListKeyDown}
      >
        <ul className="m-0 flex list-none flex-wrap justify-center gap-3 p-0 lg:gap-4">
          {NLS_WHO_WE_HELP.map((w) => {
            const WIcon = WHO_ICONS[w.id] ?? Users;
            const selected = w.id === activeId;
            return (
              <li
                key={w.id}
                className="w-[calc(50%-0.375rem)] min-w-[9.5rem] max-w-[14.5rem] sm:w-[calc(33.333%-0.5rem)] sm:max-w-[15rem] lg:w-[calc(25%-0.75rem)] lg:max-w-[16rem]"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  id={`nls-who-tab-${w.id}`}
                  aria-controls={panelId}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveId(w.id)}
                  onMouseEnter={() => setActiveId(w.id)}
                  className={`group flex h-full w-full flex-col items-center gap-3 rounded-2xl border px-3 py-4 text-center outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#7df5b9]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2f4d] sm:px-4 sm:py-5 ${
                    selected
                      ? "border-[#7df5b9]/50 bg-white text-navy shadow-[0_16px_40px_-20px_rgba(0,0,0,0.4)]"
                      : "border-white/15 bg-white/[0.07] text-white hover:border-white/28 hover:bg-white/12"
                  }`}
                >
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                      selected
                        ? "bg-[#1f3b64] text-[#7df5b9]"
                        : "bg-white/10 text-[#7df5b9] group-hover:bg-white/14"
                    }`}
                  >
                    <WIcon className="h-5 w-5" aria-hidden strokeWidth={2.25} />
                  </span>
                  <span
                    className={`line-clamp-3 font-heading text-sm font-bold leading-snug sm:text-[15px] ${
                      selected ? "text-navy" : "text-white"
                    }`}
                  >
                    {w.who}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
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
