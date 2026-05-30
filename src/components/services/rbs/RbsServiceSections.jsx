import { useState } from "react";
import { AnimatePresence, motion as Motion } from "motion/react";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Compass,
  FileText,
  Layers3,
  Lightbulb,
  Linkedin,
  MessageSquareText,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { ConsultationCtas } from "../../ConsultationCtas.jsx";
import { FaqAccordion } from "../../FaqAccordion.jsx";
import { internalAnchorProps } from "../../../lib/internalLinkProps.js";
import {
  RBS_AFTER_ITEMS,
  RBS_ASSETS,
  RBS_BEFORE_ITEMS,
  RBS_CONTACT_PATH,
  RBS_DONT_DO,
  RBS_FAQ_FOOTNOTE,
  RBS_FAQS,
  RBS_FINAL_CTA,
  RBS_GO_DEEPER,
  RBS_GUIDE_NAV,
  RBS_LAYER_ROWS,
  rbsPageHero,
  RBS_PERCEPTION_METRICS,
  RBS_PROCESS_STEPS,
  RBS_SCROLL_TARGET_CLASS,
  RBS_SPECIALIZED_SERVICES,
  RBS_STRENGTHEN_ROWS,
  RBS_TWO_KINDS,
  RBS_WHO_FOR,
  RBS_WHY_EXIST,
  RBS_WHY_R360,
} from "../../../data/services/reputationBuildingServices.js";

const rbsEase = [0.22, 1, 0.36, 1];
const rbsInView = { once: true, amount: 0.15 };
const RBS_CONTENT_RAIL = "mx-auto w-full max-w-6xl px-5 md:px-8";

const LAYER_ICONS = {
  "Search Reputation": Search,
  "Personal Reputation": Briefcase,
  "LinkedIn Reputation": Linkedin,
  "Employer Reputation": Users,
  "Social Reputation": MessageSquareText,
  "Brand Reputation": Building2,
  "Paid Visibility": CircleDollarSign,
};

const SERVICE_ICONS = {
  "Personal Branding & Executive Reputation": Briefcase,
  "LinkedIn Personal Branding": Linkedin,
  "Employer Branding & Talent Reputation": Users,
  "Thought Leadership & Editorial Visibility": Lightbulb,
  "Social Media Reputation Building": MessageSquareText,
  "Performance Marketing for Reputation Growth": CircleDollarSign,
  "Brand Strategy & Reputation Positioning": Compass,
  "Reputation Consultation": Sparkles,
};

function RbsReveal({ children, className = "", delay = 0, y = 18 }) {
  return (
    <Motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={rbsInView}
      transition={{ duration: 0.5, delay, ease: rbsEase }}
      className={className}
    >
      {children}
    </Motion.div>
  );
}

function RbsHoverCard({
  children,
  className = "",
  delay = 0,
  y = 18,
  hoverY = -6,
  hoverScale = 1.012,
  as: Component = Motion.div,
}) {
  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={rbsInView}
      transition={{ duration: 0.48, delay, ease: rbsEase }}
      whileHover={{ y: hoverY, scale: hoverScale }}
      className={`motion-reduce:transform-none ${className}`}
    >
      {children}
    </Component>
  );
}

function RbsExpandableBlock({
  title,
  children,
  defaultOpen = false,
  tone = "light",
  className = "",
}) {
  const shell =
    tone === "navy"
      ? "border-white/14 bg-white/8 text-white"
      : "border-[#dbe5f0] bg-white text-[#14355f]";
  const summaryText = tone === "navy" ? "text-white" : "text-[#14355f]";

  return (
    <details
      className={`group overflow-hidden rounded-[1.6rem] border ${shell} ${className}`}
      defaultOpen={defaultOpen}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden">
        <span className={`font-heading text-lg font-bold ${summaryText}`}>{title}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180 ${
            tone === "navy" ? "text-[#7df5b9]" : "text-[#4CAF50]"
          }`}
          aria-hidden
        />
      </summary>
      <div className="px-5 pb-5 pt-1">{children}</div>
    </details>
  );
}

function RbsSection({
  id,
  title,
  lead,
  tone = "light",
  children,
  contentClassName = "",
  headerClassName = "",
}) {
  const toneClass =
    tone === "navy"
      ? "relative overflow-hidden bg-[linear-gradient(155deg,#12325b_0%,#163a67_45%,#224d79_100%)] text-white"
      : tone === "mint"
        ? "relative overflow-hidden bg-[linear-gradient(145deg,#fbfdfb_0%,#f1faf3_45%,#f3f8ff_100%)]"
        : "relative overflow-hidden bg-white";

  const titleClass = tone === "navy" ? "text-white" : "text-[#14355f]";
  const leadClass = tone === "navy" ? "text-slate-100/88" : "text-slate-600";

  return (
    <section
      id={id}
      className={`${RBS_SCROLL_TARGET_CLASS} ${toneClass} py-16 md:py-20`}
    >
      {tone === "navy" ? (
        <>
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(125,245,185,0.18),transparent_34%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(46,91,136,0.36),transparent_38%)]"
            aria-hidden
          />
        </>
      ) : null}
      <div className={`relative ${RBS_CONTENT_RAIL}`}>
        <RbsReveal>
          <div className={`max-w-4xl ${headerClassName}`}>
            <h2 className={`font-heading text-3xl font-extrabold leading-[1.08] tracking-tight md:text-[2.3rem] ${titleClass}`}>
              {title}
            </h2>
            <div
              className={`mt-4 h-1 w-16 rounded-full ${
                tone === "navy"
                  ? "bg-gradient-to-r from-[#7df5b9] to-cyan-300"
                  : "bg-gradient-to-r from-[#4CAF50] to-[#2E5B88]"
              }`}
              aria-hidden
            />
            {lead ? (
              <div className={`mt-5 space-y-4 text-base leading-relaxed md:text-lg ${leadClass}`}>
                {(Array.isArray(lead) ? lead : [lead]).map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            ) : null}
          </div>
        </RbsReveal>
        <RbsReveal delay={0.06} className={contentClassName}>
          {children}
        </RbsReveal>
      </div>
    </section>
  );
}

function RbsHeroHeadline() {
  const idx = rbsPageHero.title.indexOf("Services");
  if (idx === -1) return rbsPageHero.title;
  return (
    <>
      {rbsPageHero.title.slice(0, idx)}
      <span className="text-[#4CAF50]">Services</span>
      {rbsPageHero.title.slice(idx + "Services".length)}
    </>
  );
}

export function RbsServiceHero() {
  return (
    <header
      id="rbs-hero"
      className="relative overflow-hidden border-b border-slate-200/70 bg-white pb-12 pt-28 md:pb-16 md:pt-32"
      aria-labelledby="rbs-hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-15%,rgba(76,175,80,0.07),transparent_52%),linear-gradient(180deg,#f8fafc_0%,#ffffff_55%)]"
        aria-hidden
      />
      <div className={`relative z-10 ${RBS_CONTENT_RAIL} text-left`}>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#4CAF50]">
          {rbsPageHero.eyebrow}
        </p>
        <h1
          id="rbs-hero-heading"
          className="font-heading text-[1.75rem] font-extrabold leading-[1.1] tracking-tight text-[#1F3B64] sm:text-4xl md:text-[2.75rem] lg:text-5xl xl:text-[3.25rem] xl:leading-[1.08]"
        >
          <RbsHeroHeadline />
        </h1>
        <div
          className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#2E5B88]"
          aria-hidden
        />
        <div className="mt-5 w-full max-w-none space-y-4 md:mt-6 md:space-y-5">
          {rbsPageHero.leadParagraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="w-full max-w-none text-pretty text-base leading-relaxed text-slate-600 md:text-lg md:leading-relaxed lg:text-xl lg:leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
        <ConsultationCtas
          variant="onLight"
          consultLabel={rbsPageHero.ctaLabel}
          consultHref={rbsPageHero.consultHref}
          consultLinkProps={internalAnchorProps(rbsPageHero.consultHref)}
          consultSuffix={<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />}
          wrapperClassName="mt-8 justify-start lg:mt-10"
        />
        <p className="mt-5 w-full max-w-none text-sm text-slate-500 md:text-[15px]">
          {rbsPageHero.trustLine}
        </p>
      </div>
    </header>
  );
}

export function RbsTwoKindsSection() {
  const [workFocus, setWorkFocus] = useState(null);
  const introEmphasis =
    "These services are for clients ready to invest in one specific layer of how they're perceived online.";
  const introBody =
    RBS_GO_DEEPER.paragraphs[0]?.replace(` ${introEmphasis}`, "") ?? RBS_GO_DEEPER.paragraphs[0];

  const comparisonCards = [
    {
      id: "broad",
      heading: RBS_TWO_KINDS.broadTitle,
      body: RBS_TWO_KINDS.broad,
      accent: RBS_TWO_KINDS.broadLabel,
      shell:
        "text-[#1F3B64]",
      text: "text-[#4B5563]",
      accentText: "text-[#4CAF50]",
      shellBase:
        "ha-lift relative flex h-full flex-col overflow-hidden rounded-[14px] border-0 px-7 py-8 text-left outline-none transition-[box-shadow,background-color,ring,opacity,transform] duration-200 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3B64]/35",
      active:
        "bg-white ring-2 ring-inset ring-[#1F3B64]/25 opacity-100 [box-shadow:inset_0_0_0_1px_rgba(31,59,100,0.06),0_18px_44px_-20px_rgba(15,35,60,0.18)]",
      inactive:
        "bg-gradient-to-br from-white to-[#f3f6fa] [box-shadow:inset_0_0_0_1px_rgba(31,59,100,0.04),0_10px_24px_-20px_rgba(15,35,60,0.12)] hover:bg-white hover:[box-shadow:inset_0_0_0_1px_rgba(31,59,100,0.08),0_18px_44px_-20px_rgba(15,35,60,0.18)]",
    },
    {
      id: "deep",
      heading: RBS_TWO_KINDS.deepTitle,
      body: RBS_TWO_KINDS.deep,
      accent: RBS_TWO_KINDS.deepLabel,
      shell:
        "text-white",
      text: "text-[#B8C9DF]",
      accentText: "text-[#4CAF50]",
      shellBase:
        "ha-lift relative flex h-full flex-col overflow-hidden rounded-[14px] border-0 px-7 py-8 text-left outline-none transition-[box-shadow,background-color,ring,opacity,transform] duration-200 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-300/45",
      active:
        "bg-gradient-to-br from-[#061f3d] via-[#072f5f] to-[#0c4a7a] ring-2 ring-inset ring-emerald-400/40 opacity-100 [box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.06),0_18px_44px_-20px_rgba(15,35,60,0.28)]",
      inactive:
        "bg-gradient-to-br from-[#051a33] via-[#072f5f] to-[#082f52] [box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.05),0_12px_28px_-20px_rgba(15,35,60,0.18)] hover:[box-shadow:inset_0_0_0_1px_rgba(167,243,208,0.12),0_18px_44px_-20px_rgba(15,35,60,0.28)]",
    },
  ];

  return (
    <section
      id="two-kinds"
      className={`${RBS_SCROLL_TARGET_CLASS} relative overflow-hidden bg-[linear-gradient(180deg,#f5f7fa_0%,#f3f6fb_100%)] py-16 md:py-20`}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(76,175,80,0.05),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(46,91,136,0.05),transparent_38%)]"
        aria-hidden
      />
      <div className={`relative ${RBS_CONTENT_RAIL}`}>
        <div className="w-full">
          <RbsReveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#4CAF50]">
              {RBS_TWO_KINDS.eyebrow}
            </p>
            <h2 className="mt-3 font-heading text-[2.25rem] font-bold leading-[1.2] text-[#1F3B64] md:text-[2.4rem]">
              {RBS_TWO_KINDS.title}
            </h2>
            <div className="mt-3 h-[3px] w-12 rounded-full bg-[#4CAF50]" aria-hidden />
          </RbsReveal>

          <RbsReveal delay={0.05} className="mt-9">
            <div className="rounded-r-[12px] rounded-l-none border-l-[3px] border-[#4CAF50] bg-white px-[26px] py-[22px] shadow-[0_1px_4px_rgba(0,0,0,0.05)]">
              <p className="text-[15.5px] leading-[1.75] text-[#374151]">
                {introBody}{" "}
                <span className="font-medium text-[#1F3B64]">{introEmphasis}</span>
              </p>
            </div>
          </RbsReveal>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {comparisonCards.map((card, index) => (
            <Motion.article
              key={card.heading}
              role="button"
              tabIndex={0}
              aria-pressed={workFocus === card.id}
              onMouseEnter={() => setWorkFocus(card.id)}
              onMouseLeave={() => setWorkFocus(null)}
              onFocus={() => setWorkFocus(card.id)}
              onBlur={() => setWorkFocus(null)}
              onClick={() => setWorkFocus(card.id)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setWorkFocus(card.id);
                }
              }}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={rbsInView}
              transition={{ duration: 0.48, delay: index * 0.08, ease: rbsEase }}
              whileHover={{ y: -4 }}
              className={`${card.shellBase} ${card.shell} ${
                workFocus === card.id ? card.active : card.inactive
              } ${
                workFocus && workFocus !== card.id ? "opacity-[0.88] md:opacity-[0.92]" : ""
              }`}
            >
              <p
                className={`relative text-[10px] font-semibold uppercase tracking-[0.22em] ${card.accentText}`}
              >
                {card.accent}
              </p>
              <h3
                className={`relative mt-3.5 font-heading text-[22px] font-bold leading-[1.25] ${
                  workFocus === card.id
                    ? card.id === "deep"
                      ? "text-white"
                      : "text-[#1F3B64]"
                    : card.id === "deep"
                      ? "text-white/90"
                      : "text-[#1F3B64]/78"
                }`}
              >
                {card.heading}
              </h3>
              <p
                className={`relative mt-3.5 max-w-[34rem] text-[14.5px] leading-[1.75] ${
                  card.id === "deep"
                    ? workFocus === card.id
                      ? "text-white/88"
                      : "text-white/80"
                    : workFocus === card.id
                      ? "text-[#4B5563]"
                      : "text-[#4B5563]/88"
                } ${card.text}`}
              >
                {card.body}
              </p>
            </Motion.article>
          ))}
          </div>

          <RbsReveal delay={0.12} className="mt-6">
            <div className="rounded-[14px] border border-[#E5E7EB] bg-white px-8 py-9 shadow-[0_1px_4px_rgba(0,0,0,0.05)]">
              <div className="flex flex-col gap-1.5">
                {RBS_TWO_KINDS.examples.map((example, index) => {
                  const lead = typeof example === "string" ? example : example.lead;
                  const outcome = typeof example === "string" ? "" : example.outcome;

                  return (
                    <Motion.div
                      key={lead}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ x: 6, y: -2 }}
                      viewport={rbsInView}
                      transition={{ duration: 0.42, delay: 0.06 + index * 0.06, ease: rbsEase }}
                      className="group flex items-start gap-[13px] rounded-[12px] px-2 py-2 transition-colors duration-300 hover:bg-[rgba(46,91,136,0.04)]"
                    >
                      <span
                        className="mt-[7px] h-[7px] w-[7px] shrink-0 rounded-full bg-[#4CAF50] transition-all duration-300 group-hover:scale-[1.45] group-hover:bg-[#2E5B88] group-hover:shadow-[0_0_0_6px_rgba(76,175,80,0.12)]"
                        aria-hidden
                      />
                      <div className="text-[15px] leading-[1.65] text-[#374151] transition-colors duration-300 group-hover:text-[#2f445f]">
                        <span className="transition-colors duration-300 group-hover:text-[#33465f]">
                          {lead}
                        </span>
                        <span className="mx-1.5 inline-block font-semibold text-[#2E5B88] transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                        <span className="font-medium transition-colors duration-300 group-hover:text-[#1F3B64]">
                          {outcome}
                        </span>
                      </div>
                    </Motion.div>
                  );
                })}
              </div>
              <div className="mb-[22px] mt-[26px] h-px bg-[#E5E7EB]" aria-hidden />
              <p className="font-heading text-[15.5px] font-semibold text-[#1F3B64]">
                {RBS_TWO_KINDS.closing}
              </p>
            </div>
          </RbsReveal>
        </div>
      </div>
    </section>
  );
}

export function RbsFrameworkSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const selectedRow = RBS_STRENGTHEN_ROWS[activeIndex] ?? RBS_STRENGTHEN_ROWS[0];
  const SelectedIcon = SERVICE_ICONS[selectedRow.service] ?? Target;

  return (
    <RbsSection
      id="framework"
      title="The Reputation Layer Framework"
      headerClassName="max-w-5xl"
      lead={[
        "Reputation is not a single thing. It is a stack of perceptions built across different platforms, audiences, and contexts. Online reputation management addresses the search layer. These services address everything beneath it.",
        "ORM handles the top layer. These services handle the depth of every other one.",
      ]}
    >
      <div className="mt-8 grid gap-8 lg:mt-10 lg:gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)]">
        <div className="overflow-hidden rounded-[1.85rem] border border-[#dbe5f0] bg-white shadow-[0_24px_60px_-34px_rgba(20,53,95,0.2)]">
          <div className="grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] border-b border-[#e6edf4] bg-[linear-gradient(180deg,#f8fbff_0%,#f4f8fd_100%)]">
            <div className="px-5 py-4 font-heading text-xs font-bold uppercase tracking-[0.16em] text-[#14355f]/60 md:px-6">
              Reputation Layer
            </div>
            <div className="px-5 py-4 font-heading text-xs font-bold uppercase tracking-[0.16em] text-[#14355f]/60 md:px-6">
              What It Controls
            </div>
          </div>
          {RBS_LAYER_ROWS.map((row, index) => {
            const Icon = LAYER_ICONS[row.layer] ?? Layers3;
            return (
              <Motion.div
                key={row.layer}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={rbsInView}
                transition={{ duration: 0.4, delay: index * 0.04, ease: rbsEase }}
                whileHover={{ backgroundColor: "rgba(244,250,246,0.98)" }}
                className={`group grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] border-b border-[#e6edf4] last:border-b-0 ${
                  index % 2 === 0 ? "bg-white" : "bg-[#fbfdff]"
                }`}
              >
                <div className="flex items-start gap-3 px-5 py-4 md:px-6">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef4fb] text-[#14355f] shadow-sm transition-colors duration-150 group-hover:bg-[linear-gradient(135deg,#eef7ff_0%,#dff5e7_100%)] group-hover:text-[#1d6a37] group-hover:shadow-[0_14px_28px_-18px_rgba(20,53,95,0.28)] group-hover:ring-1 group-hover:ring-[#bfe8c8]">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="font-heading text-base font-bold leading-snug text-[#14355f] transition-colors duration-150 group-hover:text-[#1f4f7d]">
                    {row.layer}
                  </span>
                </div>
                <div className="px-5 py-4 text-sm leading-relaxed text-slate-600 transition-colors duration-150 group-hover:text-[#2f6a46] md:px-6 md:text-[15px]">
                  {row.controls}
                </div>
              </Motion.div>
            );
          })}
        </div>

        <div>
          <div className="rounded-[1.85rem] border border-[#dbe5f0] bg-white p-5 shadow-[0_24px_60px_-34px_rgba(20,53,95,0.2)] md:p-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4CAF50]">
              Which Layer Do You Need to Strengthen?
            </p>
            <div className="mt-4 space-y-2">
              {RBS_STRENGTHEN_ROWS.map((row, index) => {
                const selected = activeIndex === index;
                return (
                  <Motion.button
                    key={row.focus}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.99 }}
                    className={`w-full rounded-2xl border px-4 py-3.5 text-left transition-all duration-300 ${
                      selected
                        ? "border-[#14355f] bg-[#14355f] text-white shadow-[0_14px_30px_-18px_rgba(20,53,95,0.38)]"
                        : "border-[#dbe5f0] bg-[#fbfdff] text-[#14355f] hover:border-[#4CAF50]/35 hover:bg-white"
                    }`}
                  >
                    <span className="block text-sm font-semibold leading-relaxed">{row.focus}</span>
                  </Motion.button>
                );
              })}
            </div>
            <AnimatePresence mode="wait" initial={false}>
              <Motion.div
                key={selectedRow.service}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.32, ease: rbsEase }}
                className="mt-5 rounded-2xl border border-[#d6efe1] bg-[linear-gradient(180deg,#fbfefc_0%,#f3fbf5_100%)] p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1f3b64] text-[#7df5b9] shadow-sm">
                    <SelectedIcon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#2a7a3a]">
                      Recommended Service
                    </p>
                    <h3 className="mt-1 font-heading text-xl font-bold text-[#14355f]">
                      {selectedRow.service}
                    </h3>
                  </div>
                </div>
              </Motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <RbsExpandableBlock title={RBS_WHY_EXIST.title} className="mt-10">
        <div className="grid gap-4 md:grid-cols-2">
          {RBS_WHY_EXIST.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 44)} className="text-base leading-relaxed text-slate-600">
              {paragraph}
            </p>
          ))}
        </div>
      </RbsExpandableBlock>
    </RbsSection>
  );
}

export function RbsSpecializedServicesSection() {
  const [activeId, setActiveId] = useState(RBS_SPECIALIZED_SERVICES[0].id);
  const active =
    RBS_SPECIALIZED_SERVICES.find((service) => service.id === activeId) ??
    RBS_SPECIALIZED_SERVICES[0];
  const ActiveIcon = SERVICE_ICONS[active.title] ?? Sparkles;

  return (
    <RbsSection
      id="services"
      title="Our Specialized Services"
      lead="These services are built for clients who want to strengthen one specific layer of how they are perceived online."
      tone="mint"
      contentClassName="mt-10"
    >
      <div className="grid gap-6 xl:grid-cols-[20rem_minmax(0,1fr)]">
          <Motion.div
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={rbsInView}
            transition={{ duration: 0.45, ease: rbsEase }}
            className="rounded-[1.9rem] border border-[#dbe5f0] bg-white p-4 shadow-[0_24px_60px_-34px_rgba(20,53,95,0.18)]"
          >
            <ul className="space-y-2">
              {RBS_SPECIALIZED_SERVICES.map((service, index) => {
                const selected = activeId === service.id;
                const Icon = SERVICE_ICONS[service.title] ?? Sparkles;
                return (
                  <li key={service.id}>
                    <Motion.button
                      type="button"
                      onClick={() => setActiveId(service.id)}
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.99 }}
                      className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 text-left transition-all duration-300 ${
                        selected
                          ? "bg-[#14355f] text-white shadow-[0_14px_30px_-18px_rgba(20,53,95,0.4)]"
                          : "bg-[#fbfdff] text-[#14355f] hover:bg-white hover:shadow-sm"
                      }`}
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                          selected ? "bg-white/14 text-[#7df5b9]" : "bg-[#eef4fb] text-[#14355f]"
                        }`}
                      >
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-bold uppercase tracking-[0.15em] opacity-60">
                          Service {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="mt-1 block font-heading text-sm font-bold leading-snug md:text-[15px]">
                          {service.title}
                        </span>
                      </span>
                    </Motion.button>
                  </li>
                );
              })}
            </ul>
          </Motion.div>

        <AnimatePresence mode="wait" initial={false}>
          <Motion.article
            key={active.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.34, ease: rbsEase }}
            className="rounded-[2rem] border border-[#dbe5f0] bg-white p-6 shadow-[0_24px_60px_-34px_rgba(20,53,95,0.22)] md:p-8"
          >
            <div className="flex flex-wrap items-start gap-4 border-b border-[#e7eef6] pb-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#14355f] text-[#7df5b9] shadow-sm">
                <ActiveIcon className="h-7 w-7" aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4CAF50]">
                  Specialized service
                </p>
                <h3 className="mt-2 font-heading text-2xl font-bold leading-tight text-[#14355f] md:text-[2rem]">
                  {active.title}
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-[#14355f]/80">{active.kicker}</p>
              </div>
            </div>

            <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)]">
              <div className="space-y-4">
                {active.paragraphs.slice(0, 2).map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="text-base leading-relaxed text-slate-600 md:text-lg">
                    {paragraph}
                  </p>
                ))}
                {(active.paragraphs.length > 2 || active.quote || active.testimonial) ? (
                  <RbsExpandableBlock title="Read the full service details">
                    <div className="space-y-4">
                      {active.paragraphs.slice(2).map((paragraph) => (
                        <p
                          key={paragraph.slice(0, 48)}
                          className="text-base leading-relaxed text-slate-600 md:text-lg"
                        >
                          {paragraph}
                        </p>
                      ))}
                      {active.quote ? (
                        <blockquote className="rounded-2xl border border-[#dbe5f0] bg-[#f8fbff] px-5 py-4 font-heading text-lg font-semibold leading-relaxed text-[#14355f]">
                          {active.quote}
                        </blockquote>
                      ) : null}
                      {active.testimonial ? (
                        <blockquote className="rounded-2xl border border-[#d6efe1] bg-[#f4fbf6] px-5 py-4 text-base leading-relaxed text-[#14355f]">
                          {active.testimonial}
                        </blockquote>
                      ) : null}
                    </div>
                  </RbsExpandableBlock>
                ) : null}
              </div>

              <div className="space-y-5">
                <RbsExpandableBlock title={active.frameworkTitle} defaultOpen>
                  <p className="text-sm leading-relaxed text-slate-600">{active.frameworkIntro}</p>
                  {active.frameworkQuestionsIntro ? (
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {active.frameworkQuestionsIntro}
                    </p>
                  ) : null}
                  <ul className="mt-4 space-y-2">
                    {active.frameworkItems.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-[#14355f]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#4CAF50]" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </RbsExpandableBlock>

                <RbsExpandableBlock title="What we help with">
                  <ul className="space-y-2">
                    {active.helpWith.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#2E5B88]" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </RbsExpandableBlock>

                <RbsExpandableBlock title="Best for and reputation outcome">
                  <div className="rounded-2xl bg-[linear-gradient(180deg,#f8fbff_0%,#f5faf6_100%)] px-4 py-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#14355f]/50">
                      Best for
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{active.bestFor}</p>
                    <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.15em] text-[#14355f]/50">
                      Reputation outcome
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{active.outcome}</p>
                  </div>
                </RbsExpandableBlock>
              </div>
            </div>
          </Motion.article>
        </AnimatePresence>
      </div>
    </RbsSection>
  );
}

export function RbsBeforeAfterSection() {
  return (
    <RbsSection id="before-after" title="Before and After Reputation360">
      <div className="grid gap-5 lg:grid-cols-2">
        {[
          {
            title: "BEFORE",
            items: RBS_BEFORE_ITEMS,
            shell: "border-[#e7d8d8] bg-[linear-gradient(180deg,#fffafa_0%,#fffefe_100%)]",
            accent: "bg-[#d96b6b]",
          },
          {
            title: "AFTER",
            items: RBS_AFTER_ITEMS,
            shell: "border-[#d6efe1] bg-[linear-gradient(180deg,#fbfefc_0%,#f3fbf5_100%)]",
            accent: "bg-[#4CAF50]",
          },
        ].map((column) => (
          <RbsHoverCard
            key={column.title}
            delay={column.title === "AFTER" ? 0.08 : 0}
            className={`rounded-[1.85rem] border p-6 shadow-[0_20px_52px_-34px_rgba(20,53,95,0.2)] md:p-7 ${column.shell}`}
          >
            <div className="flex items-center gap-3">
              <span className={`h-3 w-3 rounded-full ${column.accent}`} aria-hidden />
              <h3 className="font-heading text-2xl font-bold text-[#14355f]">{column.title}</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {column.items.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-relaxed text-slate-600">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#2E5B88]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </RbsHoverCard>
        ))}
      </div>
    </RbsSection>
  );
}

export function RbsAssetsSection() {
  return (
    <RbsSection
      id="assets"
      title="Reputation Assets We Can Build"
      lead={[
        "These services produce tangible, lasting assets — not just strategies. Depending on the service, Reputation360 can help create or improve:",
        "Every asset is built with one question in mind: will this make the right people trust you more?",
      ]}
      tone="mint"
    >
      <ul className="grid list-none gap-4 p-0 sm:grid-cols-2 xl:grid-cols-3">
        {RBS_ASSETS.map((item, index) => (
          <RbsHoverCard
            key={item}
            as={Motion.li}
            delay={index * 0.04}
            className="group rounded-[1.65rem] border border-[#dbe5f0] bg-white p-5 shadow-[0_18px_40px_-32px_rgba(20,53,95,0.18)] transition hover:-translate-y-0.5 hover:border-[#4CAF50]/35"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#4CAF50]">
              Asset {String(index + 1).padStart(2, "0")}
            </p>
            <p className="mt-3 font-heading text-lg font-bold leading-snug text-[#14355f]">{item}</p>
          </RbsHoverCard>
        ))}
      </ul>
      <RbsExpandableBlock title="Built Around Reputation, Not Vanity Metrics" className="mt-10">
        <div className="space-y-4 text-base leading-relaxed text-slate-600 md:text-lg">
          <p>Most marketing agencies optimize for reach, impressions, and engagement. We optimize for perception.</p>
          <p>
            That distinction matters. An article that reaches a million people and leaves them confused about who you are is not a reputation asset. A LinkedIn post that earns 50 responses from the right investors, clients, or partners is.
          </p>
          <p>
            Reputation360 measures success differently. We ask whether the digital assets we create are improving how the right audiences understand, evaluate, and trust you — not whether they generated traffic.
          </p>
          <p>Every piece of content, every profile, every campaign, and every recommendation is built around:</p>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {RBS_PERCEPTION_METRICS.map((item) => (
            <div key={item} className="rounded-2xl border border-[#dbe5f0] bg-[#fbfdff] px-4 py-4">
              <p className="text-sm leading-relaxed text-[#14355f]">{item}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 font-heading text-xl font-bold text-[#14355f]">
          Your digital presence should build trust before the first conversation.
        </p>
      </RbsExpandableBlock>
    </RbsSection>
  );
}

export function RbsProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const step = RBS_PROCESS_STEPS[activeStep] ?? RBS_PROCESS_STEPS[0];
  return (
    <RbsSection
      id="process"
      title="Our Reputation-Building Process"
      tone="navy"
      contentClassName="mt-10"
    >
      <div className="rounded-[1.9rem] border border-white/14 bg-white/8 p-4 backdrop-blur-sm md:p-5">
        <div className="grid gap-2 md:grid-cols-5">
          {RBS_PROCESS_STEPS.map((item, index) => (
            <Motion.button
              key={item.n}
              type="button"
              onClick={() => setActiveStep(index)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.99 }}
              className={`rounded-2xl px-4 py-3 text-left transition-all duration-300 ${
                activeStep === index
                  ? "bg-white text-[#14355f] shadow-[0_16px_36px_-22px_rgba(0,0,0,0.4)]"
                  : "bg-white/6 text-white hover:bg-white/10"
              }`}
            >
              <span className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] ${
                activeStep === index ? "bg-[#14355f] text-[#7df5b9]" : "bg-white/10 text-[#7df5b9]"
              }`}>
                Step {String(item.n).padStart(2, "0")}
              </span>
              <span className="mt-3 block font-heading text-base font-bold leading-snug">
                {item.title}
              </span>
            </Motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <Motion.div
            key={step.n}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.32, ease: rbsEase }}
            className="mt-4 rounded-[1.75rem] border border-white/14 bg-white/10 p-6 shadow-[0_18px_42px_-30px_rgba(0,0,0,0.45)]"
          >
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#7df5b9]">
              Step {String(step.n).padStart(2, "0")}
            </span>
            <h3 className="mt-4 font-heading text-2xl font-bold text-white">{step.title}</h3>
            <p className="mt-3 text-base leading-relaxed text-slate-100/85">{step.body}</p>
          </Motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <RbsExpandableBlock title="What We Don't Do" tone="navy">
          <ul className="space-y-3">
            {RBS_DONT_DO.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-100/88">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#7df5b9]" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 font-semibold text-white">Reputation is a long game. We play it seriously.</p>
        </RbsExpandableBlock>

        <RbsExpandableBlock title="Why Reputation360?" tone="navy">
          <div className="space-y-4 text-base leading-relaxed text-slate-100/88">
            {RBS_WHY_R360.map((paragraph) => (
              <p key={paragraph.slice(0, 44)}>{paragraph}</p>
            ))}
          </div>
        </RbsExpandableBlock>
      </div>
    </RbsSection>
  );
}

export function RbsWhoForSection() {
  return (
    <RbsSection id="who-for" title="Who These Services Are For">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {RBS_WHO_FOR.map((item, index) => (
          <RbsHoverCard
            key={item}
            delay={index * 0.04}
            className="rounded-[1.6rem] border border-[#dbe5f0] bg-white p-5 shadow-[0_18px_40px_-34px_rgba(20,53,95,0.16)]"
          >
            <p className="text-base leading-relaxed text-[#14355f]">{item}</p>
          </RbsHoverCard>
        ))}
      </div>
    </RbsSection>
  );
}

export function RbsFaqSection() {
  return (
    <RbsSection id="faq" title="Frequently Asked Questions" tone="mint">
      <div className="space-y-4">
        {RBS_FAQS.map((item, index) => (
          <RbsReveal key={item.q} delay={index * 0.04} y={12}>
            <FaqAccordion question={item.q} defaultOpen={index === 0}>
              <p>{item.a}</p>
            </FaqAccordion>
          </RbsReveal>
        ))}
      </div>
      <p className="mt-6 text-sm leading-relaxed text-slate-500">{RBS_FAQ_FOOTNOTE}</p>
    </RbsSection>
  );
}

export function RbsCtaSection() {
  return (
    <section
      id="start"
      className={`${RBS_SCROLL_TARGET_CLASS} relative overflow-hidden bg-[linear-gradient(155deg,#12325b_0%,#163a67_46%,#224d79_100%)] py-18 text-white md:py-22`}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(125,245,185,0.18),transparent_28%)]"
        aria-hidden
      />
      <div className={`relative ${RBS_CONTENT_RAIL}`}>
        <Motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={rbsInView}
          transition={{ duration: 0.55, ease: rbsEase }}
          whileHover={{ y: -4, scale: 1.008 }}
          className="mx-auto max-w-4xl rounded-[2.2rem] border border-white/15 bg-white/8 px-6 py-10 text-center shadow-[0_28px_70px_-34px_rgba(0,0,0,0.42)] backdrop-blur-sm md:px-10 md:py-12 motion-reduce:transform-none"
        >
          <h2 className="font-heading text-3xl font-extrabold leading-[1.08] tracking-tight md:text-[2.5rem]">
            {RBS_FINAL_CTA.title}
          </h2>
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-[#7df5b9] to-cyan-300" aria-hidden />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-100/88 md:text-lg">
            {RBS_FINAL_CTA.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
          <ConsultationCtas
            variant="onDark"
            consultLabel="Book a Free Reputation Consultation"
            consultHref={RBS_CONTACT_PATH}
            consultLinkProps={internalAnchorProps(RBS_CONTACT_PATH)}
            wrapperClassName="mt-8 justify-center"
            consultSuffix={<ArrowRight className="h-4 w-4" aria-hidden />}
          />
        </Motion.div>
      </div>
    </section>
  );
}

export const RBS_SECTION_COMPONENTS_BY_ID = {
  "two-kinds": RbsTwoKindsSection,
  framework: RbsFrameworkSection,
  services: RbsSpecializedServicesSection,
  "before-after": RbsBeforeAfterSection,
  assets: RbsAssetsSection,
  process: RbsProcessSection,
  "who-for": RbsWhoForSection,
  faq: RbsFaqSection,
  start: RbsCtaSection,
};

export const RBS_SECTION_LINKS = RBS_GUIDE_NAV;
