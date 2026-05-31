import { useState } from "react";
import { AnimatePresence, motion as Motion } from "motion/react";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Building2,
  Check,
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
  X,
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
              <p className="text-[17px] leading-[1.75] text-[#374151]">
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
                className={`relative mt-3.5 max-w-[34rem] text-[16.5px] leading-[1.75] ${
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
                      <div className="text-[16.5px] leading-[1.65] text-[#374151] transition-colors duration-300 group-hover:text-[#2f445f]">
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
              <p className="font-heading text-[17px] font-semibold text-[#1F3B64]">
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

      <div className="mt-12">
        <RbsReveal className="max-w-none">
          <div className="mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#4CAF50]">
              {RBS_WHY_EXIST.eyebrow}
            </p>
            <h3 className="mt-[14px] font-heading text-[2.5rem] font-bold leading-[1.15] text-[#1F3B64]">
              {RBS_WHY_EXIST.title}
            </h3>
            <div className="mt-5 h-[3px] w-12 rounded-full bg-[#4CAF50]" aria-hidden />
            <p className="mt-6 max-w-none text-[16.5px] leading-[1.8] text-[#4B5563]">
              {RBS_WHY_EXIST.intro.replace(` ${RBS_WHY_EXIST.introEmphasis}`, "")}{" "}
              <span className="font-medium text-[#1F3B64]">{RBS_WHY_EXIST.introEmphasis}</span>
            </p>
          </div>
        </RbsReveal>

        <RbsReveal delay={0.06} className="max-w-none">
          <div className="overflow-hidden rounded-t-[16px]">
            <div className="grid gap-[2px] md:grid-cols-2">
              {RBS_WHY_EXIST.scenarios.map((scenario, index) => (
                <Motion.div
                  key={scenario.audience}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10, scale: 1.015 }}
                  viewport={rbsInView}
                  transition={{
                    y: { type: "spring", stiffness: 340, damping: 22 },
                    scale: { type: "spring", stiffness: 280, damping: 22 },
                    opacity: { duration: 0.46, delay: 0.1 + index * 0.08, ease: rbsEase },
                  }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[2px] border border-[#dbe5f0] bg-[linear-gradient(180deg,#ffffff_0%,#fbfdff_100%)] px-9 py-10 shadow-[0_10px_28px_-24px_rgba(31,59,100,0.16)] transition-[box-shadow,transform,background-color,border-color,ring] duration-300 hover:border-[#1F3B64]/24 hover:bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)] hover:shadow-[0_34px_72px_-30px_rgba(31,59,100,0.34)] hover:ring-1 hover:ring-[#4CAF50]/18"
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(76,175,80,0.09),transparent_46%),radial-gradient(circle_at_100%_100%,rgba(46,91,136,0.08),transparent_44%)]" />
                  </div>
                  <div
                    className="absolute inset-x-0 top-0 h-1 bg-[#4CAF50] transition-all duration-300 group-hover:h-[6px] group-hover:bg-[#79df86] group-hover:shadow-[0_0_22px_rgba(76,175,80,0.36)]"
                    aria-hidden
                  />
                  <p className="font-heading text-[10px] font-semibold uppercase tracking-[0.22em] text-[#4CAF50]">
                    {scenario.eyebrow}
                  </p>
                  <h3 className="mt-[10px] max-w-[20rem] font-heading text-[22px] font-bold leading-[1.2] text-[#1F3B64] transition-colors duration-200 group-hover:text-[#0f2e58]">
                    {scenario.audience}
                  </h3>
                  <p className="mt-5 text-[16.5px] leading-[1.8] text-[#4B5563] transition-colors duration-200 group-hover:text-[#374151]">
                    {scenario.text}
                  </p>

                  <div className="mt-7">
                    <p className="font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
                      {scenario.whereLabel}
                    </p>
                    <div className="mt-3 flex flex-col gap-2">
                      {scenario.signals.map((signal) => (
                        <div
                          key={signal}
                          className="flex items-center gap-[10px] text-[15.5px] text-[#374151] transition-colors duration-200 group-hover:text-[#32455f]"
                        >
                          <span
                            className="h-[6px] w-[6px] shrink-0 rounded-full bg-[#4CAF50] transition-all duration-200 group-hover:scale-110 group-hover:bg-[#2d8f47]"
                            aria-hidden
                          />
                          <span>{signal}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#1F3B64] px-[18px] py-[10px] font-heading text-[12px] font-semibold tracking-[0.02em] text-white transition-[background-color,box-shadow,transform] duration-300 group-hover:bg-[#173050] group-hover:shadow-[0_22px_38px_-18px_rgba(31,59,100,0.32)] group-hover:-translate-y-1">
                      {scenario.tag}
                      <span className="text-[14px] text-[#4CAF50] transition-transform duration-200 group-hover:translate-x-0.5">
                        &rarr;
                      </span>
                    </span>
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-[4px_1fr] items-center gap-7 rounded-b-[16px] bg-[#1F3B64] px-10 py-10">
            <div className="min-h-[60px] self-stretch rounded-full bg-[#4CAF50]" aria-hidden />
            <p className="font-heading text-[18px] font-semibold leading-[1.65] text-white">
              {RBS_WHY_EXIST.conclusion.replace(` ${RBS_WHY_EXIST.conclusionEmphasis}`, "")}{" "}
              <span className="text-[#4CAF50]">{RBS_WHY_EXIST.conclusionEmphasis}</span>
            </p>
          </div>
        </RbsReveal>
      </div>
    </RbsSection>
  );
}

export function RbsSpecializedServicesSection() {
  const [activeId, setActiveId] = useState(RBS_SPECIALIZED_SERVICES[0].id);
  const active =
    RBS_SPECIALIZED_SERVICES.find((service) => service.id === activeId) ??
    RBS_SPECIALIZED_SERVICES[0];
  const serviceMeta = {
    "personal-branding": {
      panelTag: "Individual Reputation",
      navTag: "Individual Reputation",
      sideTitle: "Questions We Answer",
    },
    "linkedin-branding": {
      panelTag: "Platform Authority",
      navTag: "Platform Authority",
      sideTitle: "LinkedIn Authority System",
    },
    "employer-branding": {
      panelTag: "Talent Reputation",
      navTag: "Talent Reputation",
      sideTitle: "Candidate Trust Audit",
    },
    "thought-leadership": {
      panelTag: "Authority Building",
      navTag: "Authority Building",
      sideTitle: "Ideas Worth Publishing",
    },
    "social-media": {
      panelTag: "Digital Presence",
      navTag: "Digital Presence",
      sideTitle: "Reputation-Safe Social System",
    },
    "performance-marketing": {
      panelTag: "Paid Visibility",
      navTag: "Paid Visibility",
      sideTitle: "Assets We Amplify",
    },
    "brand-strategy": {
      panelTag: "Positioning",
      navTag: "Positioning",
      sideTitle: "Foundation Questions",
    },
    consultation: {
      panelTag: "Start Here",
      navTag: "Start Here",
      sideTitle: "Questions We Answer",
    },
  };
  const activeMeta = serviceMeta[active.id] ?? {
    panelTag: "Specialized Service",
    navTag: "Service",
    sideTitle: active.frameworkTitle,
  };
  const activeIntroParagraph = active.paragraphs[0] ?? "";
  const activeExtraParagraphs = active.paragraphs.slice(1);
  const isConsultation = active.id === "consultation";

  return (
    <section
      id="services"
      className={`${RBS_SCROLL_TARGET_CLASS} overflow-hidden bg-[#f5f7fa] py-16 md:py-20`}
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="overflow-hidden rounded-[1.9rem] border border-[#193154] bg-white shadow-[0_24px_60px_-34px_rgba(20,53,95,0.22)]">
          <div className="bg-[#1F3B64] px-6 py-12 md:px-10 md:py-12">
            <RbsReveal className="max-w-[600px]">
              <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.24em] text-[#4CAF50]">
                What We Do
              </p>
              <h2 className="mt-3 font-heading text-[2.35rem] font-bold leading-[1.15] text-white md:text-[2.8rem]">
                Our Specialized Services
              </h2>
              <p className="mt-4 max-w-none text-[14px] leading-[1.7] text-[#93A8C4] md:text-[15px] lg:whitespace-nowrap">
                ORM is where most clients begin. These services are what you add when you need to go deeper - into one specific layer of how you're perceived online.
              </p>
            </RbsReveal>
          </div>

          <div className="grid xl:grid-cols-[280px_minmax(0,1fr)]">
            <Motion.aside
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={rbsInView}
              transition={{ duration: 0.45, ease: rbsEase }}
              className="border-b border-[#E5E7EB] bg-white xl:sticky xl:top-24 xl:h-fit xl:self-start xl:border-b-0 xl:border-r"
            >
              <div className="px-6 pb-6 pt-8">
                <p className="font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
                  Services
                </p>
              </div>
              <ul className="space-y-1 pb-3">
                {RBS_SPECIALIZED_SERVICES.filter((service) => service.id !== "consultation").map((service, index) => {
                  const selected = activeId === service.id;
                  const meta = serviceMeta[service.id] ?? activeMeta;
                  return (
                    <li key={service.id}>
                      <button
                        type="button"
                        onClick={() => setActiveId(service.id)}
                        className={`flex w-full items-center gap-3 border-l-[3px] px-6 py-3.5 text-left transition-all duration-200 ${
                          selected
                            ? "border-l-[#4CAF50] bg-[#F0FBF0]"
                            : "border-l-transparent hover:bg-[#F5F7FA]"
                        }`}
                      >
                        <span className="font-heading text-[11px] font-bold text-[#4CAF50]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="min-w-0 flex-1">
                          <h3 style={{position:'absolute',left:'-9999px',width:'1px',height:'1px',overflow:'hidden'}}>{service.title}</h3>
                          <span className="block font-heading text-[15px] font-semibold leading-[1.3] text-[#1F3B64] md:text-[16px]">
                            {service.title}
                          </span>
                          <span className="mt-0.5 block text-[10px] text-[#6B7280]">{meta.navTag}</span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
              <div className="mx-6 my-3 h-px bg-[#F3F4F6]" />
              <button
                type="button"
                onClick={() => setActiveId("consultation")}
                className={`mx-4 mb-6 block w-[calc(100%-2rem)] rounded-[10px] px-4 py-3.5 text-left transition-all duration-200 ${
                  activeId === "consultation"
                    ? "bg-[#153355] ring-2 ring-inset ring-[#4CAF50]/65"
                    : "bg-[#1F3B64] hover:opacity-95"
                }`}
              >
                <p className="font-heading text-[10px] font-semibold uppercase tracking-[0.15em] text-[#4CAF50]">
                  Start Here
                </p>
                <h3 style={{position:'absolute',left:'-9999px',width:'1px',height:'1px',overflow:'hidden'}}>Reputation Consultation</h3>
                <p className="mt-1 font-heading text-[13px] font-semibold text-white">Reputation Consultation</p>
                <p className="mt-1 text-[12px] leading-[1.4] text-[#93A8C4]">
                  Not sure where to begin? Start here.
                </p>
              </button>
            </Motion.aside>

            <div className="px-6 py-10 md:px-10 md:py-12">
              <AnimatePresence mode="wait" initial={false}>
                <Motion.article
                  key={active.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.34, ease: rbsEase }}
                  className={isConsultation ? "consult-panel" : ""}
                >
                  <p className="font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4CAF50]">
                    {activeMeta.panelTag}
                  </p>
                  <p className="mt-2 font-heading text-[2rem] font-bold leading-[1.2] text-[#1F3B64] md:text-[2.2rem]">
                    {active.title}
                  </p>
                  <p className="mt-2 text-[17px] italic leading-[1.6] text-[#6B7280]">{active.kicker}</p>
                  <div className="mt-6 h-[3px] w-10 rounded-full bg-[#4CAF50]" aria-hidden />

                  {isConsultation ? (
                    <div className="mt-8 rounded-[12px] border-l-4 border-[#4CAF50] bg-[#1F3B64] px-7 py-7">
                      <p className="text-[16px] leading-[1.8] text-[#CBD5E1]">
                        {activeIntroParagraph}{" "}
                        {activeExtraParagraphs[0] ? (
                          <span className="font-medium text-white">{activeExtraParagraphs[0]}</span>
                        ) : null}
                      </p>
                    </div>
                  ) : (
                    <p className="mt-7 max-w-none text-[17px] leading-[1.85] text-[#374151]">
                      {activeIntroParagraph}
                    </p>
                  )}

                  <div className="mt-8 grid gap-5 lg:grid-cols-2">
                    <RbsHoverCard
                      hoverY={-3}
                      hoverScale={1.003}
                      className="rounded-[12px] border border-[#E5E7EB] bg-white px-6 py-6 shadow-[0_1px_4px_rgba(0,0,0,0.05)]"
                    >
                      <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4CAF50]">
                        What We Help With
                      </p>
                      <ul className="mt-4 space-y-2.5">
                        {active.helpWith.slice(0, 7).map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-[16px] leading-[1.55] text-[#4B5563]">
                            <span className="mt-[6px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#4CAF50]" aria-hidden />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </RbsHoverCard>

                    <RbsHoverCard
                      hoverY={-3}
                      hoverScale={1.003}
                      className="rounded-[12px] border border-[#E5E7EB] bg-white px-6 py-6 shadow-[0_1px_4px_rgba(0,0,0,0.05)]"
                    >
                      <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4CAF50]">
                        {isConsultation ? activeMeta.sideTitle : active.frameworkTitle || activeMeta.sideTitle}
                      </p>
                      {active.frameworkIntro ? (
                        <p className="mt-4 text-[15px] leading-[1.65] text-[#4B5563]">
                          {active.frameworkIntro}
                        </p>
                      ) : null}
                      {active.frameworkQuestionsIntro ? (
                        <p className="mt-3 text-[15px] leading-[1.65] text-[#4B5563]">
                          {active.frameworkQuestionsIntro}
                        </p>
                      ) : null}
                      <ul className="mt-4 space-y-2.5">
                        {active.frameworkItems.slice(0, 8).map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-[16px] leading-[1.55] text-[#4B5563]">
                            <span className="mt-[6px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#4CAF50]" aria-hidden />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </RbsHoverCard>
                  </div>

                  <div className="mt-8 rounded-[12px] bg-[#1F3B64] px-7 py-6">
                    <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)] md:items-center">
                      <div>
                        <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4CAF50]">
                          Best For
                        </p>
                        <p className="mt-2 text-[16px] leading-[1.7] text-[#CBD5E1]">{active.bestFor}</p>
                      </div>
                      <div className="hidden bg-[#2E5B88] md:block md:self-stretch" aria-hidden />
                      <div>
                        <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4CAF50]">
                          Reputation Outcome
                        </p>
                        <p className="mt-2 text-[16px] leading-[1.7] text-[#CBD5E1]">{active.outcome}</p>
                      </div>
                    </div>
                  </div>

                  {(activeExtraParagraphs.length > (isConsultation ? 1 : 0) || active.quote || active.testimonial) ? (
                    <RbsExpandableBlock title="Read the full service details" className="mt-8">
                      <div className="space-y-4">
                        {activeExtraParagraphs.slice(isConsultation ? 1 : 0).map((paragraph) => (
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
                </Motion.article>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function RbsBeforeAfterSection() {
  const columns = [
    {
      title: "Before",
      items: RBS_BEFORE_ITEMS,
      Icon: X,
      panelClass: "border-[#ead7d7] bg-[linear-gradient(180deg,#fff9f9_0%,#fffdfd_100%)]",
      titleClass: "text-[#7b2f2f]",
      itemBase:
        "border border-[#efdada] bg-white/92 text-[#7b3a3a] shadow-[0_8px_26px_-22px_rgba(123,47,47,0.12)]",
      stepClass: "bg-[#f7e6e6] text-[#7b2f2f]",
      iconClass: "text-[#a24444]",
      accentClass: "bg-[#a24444]",
      counterClass: "text-[#9c6666]",
    },
    {
      title: "After",
      items: RBS_AFTER_ITEMS,
      Icon: Check,
      panelClass: "border-[#d6efe1] bg-[linear-gradient(180deg,#fbfefc_0%,#f3fbf5_100%)]",
      titleClass: "text-[#195f3a]",
      itemBase:
        "border border-[#dcefe2] bg-white/92 text-[#466286] shadow-[0_8px_26px_-22px_rgba(20,53,95,0.1)]",
      stepClass: "bg-[#e3f3e8] text-[#195f3a]",
      iconClass: "text-[#2e8f47]",
      accentClass: "bg-[#2e8f47]",
      counterClass: "text-[#5f916f]",
    },
  ];

  return (
    <RbsSection id="before-after" title="Before and After Reputation360">
      <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
        {columns.map((column, columnIndex) => {
          const Icon = column.Icon;

          return (
            <RbsReveal key={column.title} delay={columnIndex * 0.06}>
              <div className={`rounded-[2rem] border p-6 md:p-7 lg:p-8 ${column.panelClass}`}>
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <h3 className={`font-heading text-[2rem] font-bold md:text-[2.15rem] ${column.titleClass}`}>
                    {column.title}
                  </h3>
                  <p className={`font-heading text-xs font-semibold ${column.counterClass}`}>
                    {column.items.length} {column.items.length === 1 ? "item" : "items"}
                  </p>
                </div>

                <ul className="mt-6 space-y-4" role="list" aria-label={column.title}>
                  {column.items.map((item, index) => (
                    <li key={item}>
                      <div className={`group relative flex gap-4 rounded-[1.4rem] px-5 py-5 ${column.itemBase}`}>
                        <span
                          className={`pointer-events-none absolute inset-y-5 left-0 w-1 rounded-full ${column.accentClass}`}
                          aria-hidden
                        />
                        <span
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[1rem] font-heading text-base font-bold ${column.stepClass}`}
                          aria-hidden
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <Icon
                          className={`mt-1 h-6 w-6 shrink-0 ${column.iconClass}`}
                          aria-hidden
                          strokeWidth={2.25}
                        />
                        <p className="min-w-0 flex-1 text-sm leading-relaxed md:text-[15px]">
                          {item}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </RbsReveal>
          );
        })}
      </div>
    </RbsSection>
  );
}

export function RbsAssetsSection() {
  const assetIcons = [
    Briefcase,
    Linkedin,
    Building2,
    FileText,
    Lightbulb,
    Users,
    MessageSquareText,
    Target,
    BadgeCheck,
    Search,
    CircleDollarSign,
    ShieldCheck,
    Sparkles,
  ];

  const assetShells = [
    "bg-[linear-gradient(180deg,#ffffff_0%,#f8fcf9_100%)]",
    "bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)]",
    "bg-[linear-gradient(180deg,#ffffff_0%,#fbfbff_100%)]",
  ];

  return (
    <RbsSection
      id="assets"
      title="Reputation Assets We Build"
      lead={[
        "These services produce tangible, lasting assets - not just strategies. Depending on the service, Reputation360 can help create or improve:",
        "Every asset is built with one question in mind: will this make the right people trust you more?",
      ]}
      tone="mint"
      headerClassName="max-w-none"
    >
      <div className="mt-8 overflow-hidden rounded-[2rem] border border-[#dbe5f0] bg-[linear-gradient(180deg,rgba(255,255,255,0.88)_0%,rgba(246,251,247,0.96)_100%)] p-5 shadow-[0_24px_56px_-36px_rgba(20,53,95,0.2)] md:mt-10 md:p-6">
        <ul className="grid list-none gap-4 p-0 sm:grid-cols-2 xl:grid-cols-3">
          {RBS_ASSETS.map((item, index) => {
            const Icon = assetIcons[index % assetIcons.length] ?? Sparkles;
            const shell = assetShells[index % assetShells.length];

            return (
              <RbsHoverCard
                key={item}
                as={Motion.li}
                delay={index * 0.04}
                hoverY={-4}
                hoverScale={1.006}
                className={`group relative overflow-hidden rounded-[1.6rem] border border-[#dbe5f0] p-5 shadow-[0_16px_38px_-32px_rgba(20,53,95,0.16)] transition-[border-color,box-shadow,background-color] duration-200 hover:border-[#4CAF50]/32 hover:shadow-[0_22px_44px_-26px_rgba(20,53,95,0.18)] ${
                  index === RBS_ASSETS.length - 1 ? "xl:col-start-2" : ""
                } ${shell}`}
              >
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#4CAF50_0%,#7cc986_55%,#2E5B88_100%)] opacity-80"
                  aria-hidden
                />
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[1rem] bg-[#14355f]/6 text-[#14355f] ring-1 ring-[#14355f]/8 transition-[transform,background-color,color] duration-200 group-hover:scale-105 group-hover:bg-[#4CAF50]/12 group-hover:text-[#237340]">
                    <Icon className="h-5 w-5" aria-hidden strokeWidth={2.1} />
                  </span>
                  <span className="font-heading text-[11px] font-bold tracking-[0.16em] text-[#14355f]/26" aria-hidden>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#4CAF50]">
                  Asset {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 font-heading text-[1.05rem] font-bold leading-snug text-[#14355f] md:text-[1.12rem]">
                  {item}
                </p>
              </RbsHoverCard>
            );
          })}
        </ul>
      </div>

      <div className="mt-12 overflow-hidden rounded-[1.6rem] border border-[#dbe5f0] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] shadow-[0_20px_46px_-34px_rgba(20,53,95,0.18)]">
        <div className="border-b border-[#dbe5f0] px-5 py-4 md:px-6">
          <h3 className="font-heading text-lg font-bold text-[#14355f] md:text-[1.35rem]">
            Built Around Reputation, Not Vanity Metrics
          </h3>
        </div>
        <div className="px-5 py-5 md:px-6 md:py-6">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)] lg:items-start">
            <div>
              <div className="space-y-4 text-base leading-relaxed text-slate-600 md:text-lg">
                <p>Most marketing agencies optimize for reach, impressions, and engagement. We optimize for perception.</p>
                <p>
                  That distinction matters. An article that reaches a million people and leaves them confused about who you are is not a reputation asset. A LinkedIn post that earns 50 responses from the right investors, clients, or partners is.
                </p>
                <p>
                  Reputation360 measures success differently. We ask whether the digital assets we create are improving how the right audiences understand, evaluate, and trust you - not whether they generated traffic.
                </p>
                <p>Every piece of content, every profile, every campaign, and every recommendation is built around:</p>
              </div>
              <div className="mt-6 rounded-[1.4rem] bg-[#14355f] px-5 py-5 shadow-[0_18px_40px_-24px_rgba(20,53,95,0.28)]">
                <p className="font-heading text-xl font-bold text-white">
                  Your digital presence should build trust before the first conversation.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {RBS_PERCEPTION_METRICS.map((item, index) => (
                <RbsHoverCard
                  key={item}
                  hoverY={-3}
                  hoverScale={1.01}
                  className="group rounded-[1.3rem] border border-[#dbe5f0] bg-white/92 px-4 py-4 shadow-[0_10px_24px_-20px_rgba(20,53,95,0.12)] transition-[border-color,box-shadow,background-color] duration-200 hover:border-[#4CAF50]/28 hover:bg-white hover:shadow-[0_18px_34px_-22px_rgba(20,53,95,0.16)]"
                >
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#4CAF50] transition-colors duration-200 group-hover:text-[#2d8f47]">
                    Metric {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#14355f] transition-colors duration-200 group-hover:text-[#0f2e58]">
                    {item}
                  </p>
                </RbsHoverCard>
              ))}
            </div>
          </div>
        </div>
      </div>
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
              <h3 style={{position:'absolute',left:'-9999px',width:'1px',height:'1px',overflow:'hidden'}}>{item.title}</h3>
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
            <p className="mt-4 font-heading text-2xl font-bold text-white">{step.title}</p>
            <p className="mt-3 text-base leading-relaxed text-slate-100/85">{step.body}</p>
          </Motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-10">
        <RbsReveal>
          <div className="overflow-hidden rounded-[1.75rem] border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.06)_100%)] shadow-[0_20px_46px_-32px_rgba(0,0,0,0.38)] backdrop-blur-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4 md:px-6">
              <div>
                <h3 className="font-heading text-[1.4rem] font-bold text-white md:text-[1.6rem]">
                  What We Don&apos;t Do
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-3 py-2">
                <span className="font-heading text-lg font-bold text-white">
                  {String(RBS_DONT_DO.length).padStart(2, "0")}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#ffd3d3]">
                  guardrails
                </span>
              </div>
            </div>
            <div className="px-5 py-5 md:px-6 md:py-6">
              <ul className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {RBS_DONT_DO.map((item) => (
                  <li key={item}>
                    <Motion.div
                      whileHover={{ y: -3, scale: 1.008 }}
                      transition={{ duration: 0.22, ease: rbsEase }}
                      className="group relative flex h-full gap-3 rounded-[1.15rem] border border-[#b85c5c]/18 bg-white/[0.05] px-4 py-4 shadow-[0_14px_28px_-22px_rgba(0,0,0,0.18)] transition-[background-color,border-color,box-shadow] duration-200 hover:border-[#d36b6b]/28 hover:bg-white/[0.08] hover:shadow-[0_24px_40px_-24px_rgba(0,0,0,0.28)]"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[0.9rem] bg-[#ffb3b3]/10 text-[#ffb3b3] transition-[transform,background-color,color] duration-200 group-hover:scale-105 group-hover:bg-[#7f2d2d]/28 group-hover:text-white">
                            <X className="h-5 w-5" aria-hidden strokeWidth={2.2} />
                          </span>
                          <p className="min-w-0 text-sm leading-relaxed text-slate-100/88 transition-[color,transform] duration-200 group-hover:translate-x-0.5 group-hover:text-white md:text-[15px]">
                            {item}
                          </p>
                        </div>
                      </div>
                    </Motion.div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </RbsReveal>
      </div>
    </RbsSection>
  );
}

export function RbsWhyReputation360Section() {
  return (
    <RbsSection
      id="why-r360"
      title="Why Choose Reputation360 for Reputation Building?"
      tone="mint"
      lead="We are not a general digital marketing agency that also does reputation work. Reputation is the only thing we do."
      contentClassName="mt-10"
    >
      <div className="mt-10">
        <RbsReveal>
          <div className="overflow-hidden rounded-[2rem] border border-[#dbe5f0] bg-white shadow-[0_24px_54px_-34px_rgba(20,53,95,0.18)]">
            <div className="px-6 py-6 md:px-8 md:py-8">
              <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,1.18fr)_minmax(20rem,0.82fr)]">
                <RbsHoverCard
                  hoverY={-4}
                  hoverScale={1.006}
                  className="group rounded-[1.6rem] border border-[#dbe5f0] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-6 py-6 shadow-[0_20px_42px_-30px_rgba(20,53,95,0.16)] transition-[border-color,box-shadow] duration-200 hover:border-[#c9d8ea] hover:shadow-[0_24px_50px_-30px_rgba(20,53,95,0.22)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 style={{position:'absolute',left:'-9999px',width:'1px',height:'1px',overflow:'hidden'}}>The Standard</h3>
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4CAF50]">
                        The Standard
                      </p>
                      <h3 className="mt-3 max-w-[18ch] font-heading text-[1.45rem] font-bold leading-[1.12] text-[#14355f] md:text-[1.75rem]">
                        Reputation work should hold up under scrutiny
                      </h3>
                    </div>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[1rem] bg-[#4CAF50]/10 text-[#237340] ring-1 ring-[#4CAF50]/18 transition-transform duration-200 group-hover:scale-105">
                      <BadgeCheck className="h-5 w-5" aria-hidden strokeWidth={2.1} />
                    </span>
                  </div>
                  <p className="mt-5 text-[16px] leading-[1.82] text-slate-600 md:text-[17px]">
                    {RBS_WHY_R360[1]}
                  </p>
                </RbsHoverCard>

                <div className="grid gap-4">
                  <RbsHoverCard
                    hoverY={-3}
                    hoverScale={1.004}
                    className="group rounded-[1.4rem] border border-[#dbe5f0] bg-white px-5 py-5 shadow-[0_16px_34px_-28px_rgba(20,53,95,0.12)] transition-[border-color,box-shadow] duration-200 hover:border-[#cfe3d4] hover:shadow-[0_20px_40px_-28px_rgba(20,53,95,0.18)]"
                  >
                    <h3 style={{position:'absolute',left:'-9999px',width:'1px',height:'1px',overflow:'hidden'}}>Reputation Lens</h3>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#4CAF50]">
                      Reputation Lens
                    </p>
                    <p className="mt-3 text-[15px] leading-[1.8] text-slate-600 md:text-[16px]">
                      {RBS_WHY_R360[2]}
                    </p>
                  </RbsHoverCard>

                  <RbsHoverCard
                    hoverY={-3}
                    hoverScale={1.004}
                    className="group rounded-[1.4rem] border border-[#dbe5f0] bg-[linear-gradient(180deg,#fbfefc_0%,#f7fbff_100%)] px-5 py-5 shadow-[0_16px_34px_-28px_rgba(20,53,95,0.12)] transition-[border-color,box-shadow] duration-200 hover:border-[#cfe3d4] hover:shadow-[0_20px_40px_-28px_rgba(20,53,95,0.18)]"
                  >
                    <h3 style={{position:'absolute',left:'-9999px',width:'1px',height:'1px',overflow:'hidden'}}>Outcome</h3>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#4CAF50]">
                      Outcome
                    </p>
                    <p className="mt-3 text-[15px] leading-[1.8] text-[#14355f] md:text-[16px]">
                      {RBS_WHY_R360[4]}
                    </p>
                  </RbsHoverCard>
                </div>
              </div>

              <RbsHoverCard
                delay={0.04}
                hoverY={-4}
                hoverScale={1.004}
                className="group mt-5 overflow-hidden rounded-[1.6rem] border border-[#dbe5f0] bg-white shadow-[0_20px_42px_-30px_rgba(20,53,95,0.16)] transition-[border-color,box-shadow] duration-200 hover:border-[#c9d8ea] hover:shadow-[0_24px_50px_-30px_rgba(20,53,95,0.22)]"
              >
                <div className="grid gap-0 md:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)]">
                  <div className="border-b border-[#dbe5f0] bg-[linear-gradient(180deg,#f8fbff_0%,#f5faf6_100%)] px-5 py-5 md:border-b-0 md:border-r">
                    <h3 style={{position:'absolute',left:'-9999px',width:'1px',height:'1px',overflow:'hidden'}}>Experience</h3>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4CAF50]">
                      Experience
                    </p>
                    <p className="mt-3 max-w-[16ch] font-heading text-[1.2rem] font-bold leading-[1.3] text-[#14355f] md:text-[1.35rem]">
                      Reputation-first thinking, built through direct practice
                    </p>
                  </div>
                  <div className="px-5 py-5 md:px-6">
                    <p className="text-[15px] leading-[1.82] text-slate-600 md:text-[16px]">
                      {RBS_WHY_R360[3]}
                    </p>
                  </div>
                </div>
              </RbsHoverCard>
            </div>
          </div>
        </RbsReveal>
      </div>
    </RbsSection>
  );
}

export function RbsWhoForSection() {
  const audienceIcons = [
    Briefcase,
    Building2,
    ShieldCheck,
    Linkedin,
    Users,
    Layers3,
    MessageSquareText,
    Sparkles,
  ];

  return (
    <RbsSection
      id="who-for"
      title="Who These Services Are For"
      tone="mint"
      contentClassName="mt-10"
    >
      <div className="mt-8 overflow-hidden rounded-[2rem] border border-[#dbe5f0] bg-white shadow-[0_24px_54px_-34px_rgba(20,53,95,0.18)] md:mt-10">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#dbe5f0] bg-[linear-gradient(180deg,#f8fbff_0%,#f4faf5_100%)] px-6 py-5 md:px-8">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#4CAF50]">
              Audience Fit
            </p>
            <p className="mt-1 font-heading text-[1.2rem] font-bold text-[#14355f] md:text-[1.35rem]">
              These services are built for specific reputation situations
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#dbe5f0] bg-white px-4 py-2 shadow-[0_10px_24px_-18px_rgba(20,53,95,0.14)]">
            <span className="font-heading text-xl font-bold text-[#14355f]">
              {String(RBS_WHO_FOR.length).padStart(2, "0")}
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#6B7280]">
              audiences
            </span>
          </div>
        </div>

        <div className="grid gap-px bg-[#e6edf4] sm:grid-cols-2 xl:grid-cols-4">
          {RBS_WHO_FOR.map((item, index) => {
            const Icon = audienceIcons[index % audienceIcons.length] ?? Sparkles;
            const softShell =
              index % 4 === 0
                ? "bg-[linear-gradient(180deg,#ffffff_0%,#fbfefc_100%)]"
                : index % 4 === 1
                  ? "bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)]"
                  : index % 4 === 2
                    ? "bg-[linear-gradient(180deg,#ffffff_0%,#fbfbff_100%)]"
                    : "bg-[linear-gradient(180deg,#ffffff_0%,#f8fcfb_100%)]";

            return (
              <RbsHoverCard
                key={item}
                delay={index * 0.04}
                hoverY={-4}
                hoverScale={1.006}
                className={`group relative min-h-[220px] p-5 transition-[box-shadow,background-color] duration-200 hover:z-10 hover:shadow-[0_22px_42px_-24px_rgba(20,53,95,0.16)] md:p-6 ${softShell}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[1rem] bg-[#14355f]/6 text-[#14355f] ring-1 ring-[#14355f]/8 transition-[transform,background-color,color] duration-200 group-hover:scale-105 group-hover:bg-[#4CAF50]/12 group-hover:text-[#237340]">
                    <Icon className="h-5 w-5" aria-hidden strokeWidth={2.1} />
                  </span>
                  <span className="font-heading text-[11px] font-bold tracking-[0.16em] text-[#14355f]/26" aria-hidden>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#4CAF50]">
                  Audience {String(index + 1).padStart(2, "0")}
                </p>
                <h3 style={{position:'absolute',left:'-9999px',width:'1px',height:'1px',overflow:'hidden'}}>{item}</h3>
                <p className="mt-2 text-[15px] leading-[1.65] text-[#14355f] md:text-[16px]">
                  {item}
                </p>
              </RbsHoverCard>
            );
          })}
        </div>
      </div>
    </RbsSection>
  );
}

export function RbsFaqSection() {
  return (
    <RbsSection id="faq" title="Frequently Asked Questions" tone="mint">
      <div className="mt-8 space-y-4 md:mt-10">
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
  "why-r360": RbsWhyReputation360Section,
  "who-for": RbsWhoForSection,
  faq: RbsFaqSection,
  start: RbsCtaSection,
};

export const RBS_SECTION_LINKS = RBS_GUIDE_NAV;
