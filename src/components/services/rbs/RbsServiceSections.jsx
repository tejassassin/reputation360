import { useState } from "react";
import { AnimatePresence, motion as Motion } from "motion/react";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Building2,
  CheckCircle2,
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

function RbsSection({ id, title, lead, tone = "light", children, contentClassName = "" }) {
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
          <div className="max-w-4xl">
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
    <header className="relative overflow-hidden border-b border-slate-200/70 bg-white pb-14 pt-28 md:pb-18 md:pt-32">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(76,175,80,0.08),transparent_28%),linear-gradient(180deg,#f8fbff_0%,#ffffff_52%,#f6fbf7_100%)]"
        aria-hidden
      />
      <div className={`relative ${RBS_CONTENT_RAIL}`}>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_23rem] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4CAF50]">
              {rbsPageHero.eyebrow}
            </p>
            <h1 className="mt-4 font-heading text-[1.85rem] font-extrabold leading-[1.05] tracking-tight text-[#14355f] sm:text-4xl md:text-[3rem] lg:text-[3.4rem]">
              <RbsHeroHeadline />
            </h1>
            <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#2E5B88]" aria-hidden />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 md:text-lg">
              {rbsPageHero.leadParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
            <ConsultationCtas
              variant="onLight"
              consultLabel={rbsPageHero.ctaLabel}
              consultHref={rbsPageHero.consultHref}
              consultLinkProps={internalAnchorProps(rbsPageHero.consultHref)}
              wrapperClassName="mt-8 justify-start"
              consultSuffix={<ArrowRight className="h-4 w-4" aria-hidden />}
            />
            <p className="mt-5 text-sm text-slate-500 md:text-[15px]">{rbsPageHero.trustLine}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-[1.75rem] border border-[#dfe8f1] bg-white p-5 shadow-[0_20px_48px_-28px_rgba(20,53,95,0.22)]">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4CAF50]">
                Broad work
              </p>
              <h2 className="mt-2 font-heading text-xl font-bold text-[#14355f]">
                Search control
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                ORM and Negative Link Suppression improve what people find when they search.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-[#d6efe1] bg-[linear-gradient(180deg,#fbfefc_0%,#f2fbf5_100%)] p-5 shadow-[0_20px_48px_-28px_rgba(76,175,80,0.18)]">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#2a7a3a]">
                Deep work
              </p>
              <h2 className="mt-2 font-heading text-xl font-bold text-[#1b5e20]">
                Layer-specific reputation building
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                These services strengthen the one specific layer of perception that needs more depth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export function RbsTwoKindsSection() {
  return (
    <RbsSection
      id="two-kinds"
      title={RBS_TWO_KINDS.title}
      lead={[RBS_TWO_KINDS.intro, ...RBS_GO_DEEPER.paragraphs]}
      tone="mint"
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {[
          {
            heading: "Broad reputation work",
            body: RBS_TWO_KINDS.broad,
            accent: "Foundational",
            shell: "border-[#dce5ef] bg-white",
          },
          {
            heading: "Deep reputation work",
            body: RBS_TWO_KINDS.deep,
            accent: "Focused depth",
            shell: "border-[#d6efe1] bg-[linear-gradient(180deg,#fbfefc_0%,#f3fbf5_100%)]",
          },
        ].map((card) => (
          <div
            key={card.heading}
            className={`rounded-[1.75rem] border p-6 shadow-[0_16px_40px_-28px_rgba(20,53,95,0.2)] md:p-7 ${card.shell}`}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4CAF50]">
              {card.accent}
            </p>
            <h3 className="mt-2 font-heading text-2xl font-bold text-[#14355f]">{card.heading}</h3>
            <p className="mt-4 text-base leading-relaxed text-slate-600">{card.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-[1.75rem] border border-[#dfe8f1] bg-white px-6 py-5 shadow-[0_16px_40px_-30px_rgba(20,53,95,0.18)]">
        <p className="text-base leading-relaxed text-slate-600 md:text-lg">{RBS_TWO_KINDS.examples}</p>
        <p className="mt-4 font-semibold text-[#14355f]">{RBS_TWO_KINDS.closing}</p>
      </div>
    </RbsSection>
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
      lead={[
        "Reputation is not a single thing. It is a stack of perceptions built across different platforms, audiences, and contexts. Online reputation management addresses the search layer. These services address everything beneath it.",
        "ORM handles the top layer. These services handle the depth of every other one.",
      ]}
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)]">
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
              <div
                key={row.layer}
                className={`grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] border-b border-[#e6edf4] last:border-b-0 ${
                  index % 2 === 0 ? "bg-white" : "bg-[#fbfdff]"
                }`}
              >
                <div className="flex items-start gap-3 px-5 py-4 md:px-6">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef4fb] text-[#14355f]">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="font-heading text-base font-bold leading-snug text-[#14355f]">
                    {row.layer}
                  </span>
                </div>
                <div className="px-5 py-4 text-sm leading-relaxed text-slate-600 md:px-6 md:text-[15px]">
                  {row.controls}
                </div>
              </div>
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
                  <button
                    key={row.focus}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`w-full rounded-2xl border px-4 py-3.5 text-left transition-all duration-300 ${
                      selected
                        ? "border-[#14355f] bg-[#14355f] text-white shadow-[0_14px_30px_-18px_rgba(20,53,95,0.38)]"
                        : "border-[#dbe5f0] bg-[#fbfdff] text-[#14355f] hover:border-[#4CAF50]/35 hover:bg-white"
                    }`}
                  >
                    <span className="block text-sm font-semibold leading-relaxed">{row.focus}</span>
                  </button>
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

      <div className="mt-10 rounded-[2rem] border border-[#dbe5f0] bg-white p-6 shadow-[0_24px_60px_-38px_rgba(20,53,95,0.2)] md:p-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4CAF50]">
          {RBS_WHY_EXIST.title}
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {RBS_WHY_EXIST.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 44)} className="text-base leading-relaxed text-slate-600">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
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
        <div className="rounded-[1.9rem] border border-[#dbe5f0] bg-white p-4 shadow-[0_24px_60px_-34px_rgba(20,53,95,0.18)]">
          <ul className="space-y-2">
            {RBS_SPECIALIZED_SERVICES.map((service, index) => {
              const selected = activeId === service.id;
              const Icon = SERVICE_ICONS[service.title] ?? Sparkles;
              return (
                <li key={service.id}>
                  <button
                    type="button"
                    onClick={() => setActiveId(service.id)}
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
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

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
                {active.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="text-base leading-relaxed text-slate-600 md:text-lg">
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

              <div className="space-y-5">
                <div className="rounded-[1.75rem] border border-[#dbe5f0] bg-[#fbfdff] p-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4CAF50]">
                    {active.frameworkTitle}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{active.frameworkIntro}</p>
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
                </div>

                <div className="rounded-[1.75rem] border border-[#dbe5f0] bg-white p-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4CAF50]">
                    What we help with
                  </p>
                  <ul className="mt-4 space-y-2">
                    {active.helpWith.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#2E5B88]" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 rounded-2xl bg-[linear-gradient(180deg,#f8fbff_0%,#f5faf6_100%)] px-4 py-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#14355f]/50">
                      Best for
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{active.bestFor}</p>
                    <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.15em] text-[#14355f]/50">
                      Reputation outcome
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{active.outcome}</p>
                  </div>
                </div>
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
          <div
            key={column.title}
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
          </div>
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
          <li
            key={item}
            className="group rounded-[1.65rem] border border-[#dbe5f0] bg-white p-5 shadow-[0_18px_40px_-32px_rgba(20,53,95,0.18)] transition hover:-translate-y-0.5 hover:border-[#4CAF50]/35"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#4CAF50]">
              Asset {String(index + 1).padStart(2, "0")}
            </p>
            <p className="mt-3 font-heading text-lg font-bold leading-snug text-[#14355f]">{item}</p>
          </li>
        ))}
      </ul>
      <div className="mt-10 rounded-[1.9rem] border border-[#dbe5f0] bg-white p-6 shadow-[0_20px_50px_-34px_rgba(20,53,95,0.18)] md:p-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4CAF50]">
          Built Around Reputation, Not Vanity Metrics
        </p>
        <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-600 md:text-lg">
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
      </div>
    </RbsSection>
  );
}

export function RbsProcessSection() {
  return (
    <RbsSection
      id="process"
      title="Our Reputation-Building Process"
      tone="navy"
      contentClassName="mt-10"
    >
      <div className="grid gap-5 lg:grid-cols-5">
        {RBS_PROCESS_STEPS.map((step) => (
          <div
            key={step.n}
            className="rounded-[1.65rem] border border-white/14 bg-white/10 p-5 shadow-[0_18px_42px_-30px_rgba(0,0,0,0.45)] backdrop-blur-sm"
          >
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#7df5b9]">
              Step {String(step.n).padStart(2, "0")}
            </span>
            <h3 className="mt-4 font-heading text-xl font-bold text-white">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-100/85">{step.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="rounded-[1.9rem] border border-white/14 bg-white/8 p-6 backdrop-blur-sm">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#7df5b9]">
            What We Don't Do
          </p>
          <ul className="mt-5 space-y-3">
            {RBS_DONT_DO.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-100/88">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#7df5b9]" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 font-semibold text-white">Reputation is a long game. We play it seriously.</p>
        </div>

        <div className="rounded-[1.9rem] border border-white/14 bg-white/8 p-6 backdrop-blur-sm">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#7df5b9]">
            Why Reputation360?
          </p>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-100/88">
            {RBS_WHY_R360.map((paragraph) => (
              <p key={paragraph.slice(0, 44)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </RbsSection>
  );
}

export function RbsWhoForSection() {
  return (
    <RbsSection id="who-for" title="Who These Services Are For">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {RBS_WHO_FOR.map((item) => (
          <div
            key={item}
            className="rounded-[1.6rem] border border-[#dbe5f0] bg-white p-5 shadow-[0_18px_40px_-34px_rgba(20,53,95,0.16)]"
          >
            <p className="text-base leading-relaxed text-[#14355f]">{item}</p>
          </div>
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
          <FaqAccordion key={item.q} question={item.q} defaultOpen={index === 0}>
            <p>{item.a}</p>
          </FaqAccordion>
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
        <div className="mx-auto max-w-4xl rounded-[2.2rem] border border-white/15 bg-white/8 px-6 py-10 text-center shadow-[0_28px_70px_-34px_rgba(0,0,0,0.42)] backdrop-blur-sm md:px-10 md:py-12">
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
        </div>
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
