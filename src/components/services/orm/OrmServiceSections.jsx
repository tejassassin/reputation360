import { useState } from "react";
import { AnimatePresence, motion as Motion } from "motion/react";
import {
  ArrowRight,
  Award,
  Check,
  Eye,
  History,
  Layers,
  Scale,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Target,
  Users,
  X,
  Zap,
} from "lucide-react";
import { ConsultationCtas } from "../../ConsultationCtas.jsx";
import { OrmHeroVisual } from "./OrmHeroVisual.jsx";
import { FaqAccordion } from "../../FaqAccordion.jsx";
import { externalAnchorProps } from "../../../lib/internalLinkProps.js";
import { ormPageHero } from "../../../data/services/onlineReputationManagement.js";
import {
  BEFORE_OUTREACH_AVOID,
  BEFORE_OUTREACH_DO,
  ORM_BENEFITS,
  ORM_CTA,
  ORM_FAQS,
  ORM_INCLUDES_INTRO,
  ORM_PROCESS_NOTE,
  ORM_PROCESS_PHASES,
  ORM_WHAT_IS_CALLOUT,
  ORM_WHAT_IS_PARAGRAPHS,
  ORM_WHY_R360_INTRO,
  ORM_BEFORE_OUTREACH_INTRO,
  RANKING_FACTORS,
  RANKING_FACTORS_CLOSING,
  RANKING_FACTORS_INTRO,
  SERVICE_INCLUDES,
  WHY_MATTERS_TABS,
  WHY_R360_DIFFERENTIATORS,
  WHO_NEEDS_ORM,
} from "../../../data/services/onlineReputationManagementInteractive.js";
import { WHO_WE_SERVE_AUDIENCES } from "../../../data/whoWeServeAudiences.js";
import { ORM_SCROLL_TARGET_CLASS } from "../../../data/services/onlineReputationManagement.js";

const CONTACT_PATH = "/contact";

const FACTOR_ICONS = {
  relevance: Target,
  authority: Scale,
  experience: Sparkles,
  timeliness: History,
};

const audienceIconById = Object.fromEntries(
  WHO_WE_SERVE_AUDIENCES.map((a) => [a.id, a.icon]),
);

const ORM_AUDIENCE_ICON_ID = {
  financial: "financial-advisors",
};

const WHY_R360_ICON_BY_ID = {
  speed: Zap,
  tailored: SlidersHorizontal,
  both: Layers,
  expertise: Award,
  difficult: ShieldCheck,
  transparency: Eye,
};

const ORM_BENEFIT_ICONS = {
  trust: ShieldCheck,
  opportunities: Sparkles,
  conversions: Target,
  investor: Layers,
  protection: History,
  peace: Award,
};

const ormRevealViewport = { once: true, amount: 0.12 };

function audienceIconForOrmTile(audienceId) {
  const catalogId = ORM_AUDIENCE_ICON_ID[audienceId] ?? audienceId;
  return audienceIconById[catalogId] ?? Users;
}

const tileBtn =
  "group flex min-h-[7.25rem] flex-col items-center justify-center gap-3 rounded-2xl border px-3 py-4 text-center outline-none transition-[border-color,box-shadow,background-color,transform] duration-200 focus-visible:ring-2 focus-visible:ring-navy/35 focus-visible:ring-offset-2 motion-safe:active:scale-[0.98] sm:min-h-[7.75rem] md:min-h-[8.25rem] md:px-4 md:py-5";

const tileSelected =
  "border-[#1f3b64] bg-[#eef2ff] shadow-[0_10px_26px_-12px_rgba(31,59,100,0.35)] ring-2 ring-[#1f3b64]/15";

const tileIdle =
  "border-[#dfe6ee] bg-[#fafbfd] hover:border-[#1f3b64]/28 hover:bg-white hover:shadow-[0_8px_22px_-14px_rgba(31,59,100,0.18)]";

/** Shared horizontal rail with Services subnav (`max-w-6xl` + matching padding). */
const ORM_CONTENT_RAIL = "mx-auto w-full max-w-6xl px-5 md:px-8";

/** Section rhythm aligned with About page (`aboutSectionSpacing` / `aboutFirstContentSpacing`). */
const ORM_SECTION_SPACING = "pt-16 pb-20 md:pt-20 md:pb-24";
/** First section after hero - header clearance lives on the hero, not here. */
const ORM_FIRST_SECTION_SPACING = "pt-16 pb-20 md:pt-20 md:pb-24";

/** Full-bleed navy band - matches About `#what-we-dont` background layers. */
function OrmWhatWeDontBackground() {
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
        className="pointer-events-none absolute -right-24 top-1/2 h-[min(70vh,32rem)] w-[min(90vw,32rem)] -translate-y-1/2 rounded-full bg-[#1F3B64]/50 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_1px_1px,rgba(107,116,128,0.14)_1px,transparent_0)] [background-size:40px_40px]"
        aria-hidden
      />
    </>
  );
}

const ORM_SECTION_TONES = {
  sage: {
    shell: "relative overflow-hidden border-y border-slate-200/60",
    decor: (
      <>
        <div
          className="pointer-events-none absolute inset-0 bg-[#f0f4f2]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-[#4CAF50]/[0.08] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-[#2E5B88]/[0.06] blur-3xl"
          aria-hidden
        />
      </>
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
      <>
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,#f8fafc_0%,#eef6ff_40%,#f0fdf4_100%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-0 top-0 h-80 w-80 translate-x-1/4 rounded-full bg-[#4CAF50]/[0.06] blur-3xl"
          aria-hidden
        />
      </>
    ),
  },
  /** About "How We Work" - soft blue center wash. */
  blue: {
    shell: "relative overflow-hidden",
    decor: (
      <>
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#f8fafc_0%,#eef2ff_42%,#e8eeff_58%,#f8fafc_100%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-[#2E5B88]/[0.12] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#1F3B64]/[0.08] blur-3xl"
          aria-hidden
        />
      </>
    ),
  },
  /** About "What We Don't Do" - brand navy gradient band. */
  navy: {
    shell: "relative overflow-hidden text-white",
    decor: <OrmWhatWeDontBackground />,
  },
  white: {
    shell: "relative bg-white",
    decor: null,
  },
  page: {
    shell: "relative overflow-hidden",
    decor: null,
  },
};

function OrmSectionShell({
  id,
  tone = "page",
  first = false,
  className = "",
  children,
  ...rest
}) {
  const surface = ORM_SECTION_TONES[tone] ?? ORM_SECTION_TONES.page;
  const spacing = first ? ORM_FIRST_SECTION_SPACING : ORM_SECTION_SPACING;

  return (
    <section
      id={id}
      className={`${ORM_SCROLL_TARGET_CLASS} ${surface.shell} ${spacing} ${className}`}
      {...rest}
    >
      {surface.decor}
      <div className={`relative ${ORM_CONTENT_RAIL}`}>{children}</div>
    </section>
  );
}

function OrmSectionHeading({ title, lead, headingId, variant = "default" }) {
  const onDark = variant === "onDark";

  return (
    <div className="mb-10 md:mb-14">
      <h2
        id={headingId}
        className={`max-w-4xl font-heading text-3xl font-extrabold leading-[1.12] tracking-tight md:text-[2.1rem] ${
          onDark
            ? "text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.25)]"
            : "text-[#1F3B64]"
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-4 h-1 rounded-full ${
          onDark
            ? "w-16 bg-gradient-to-r from-[#4CAF50] to-cyan-300 shadow-[0_0_24px_rgba(76,175,80,0.2)]"
            : "w-16 bg-gradient-to-r from-[#4CAF50] to-[#2E5B88]"
        }`}
        aria-hidden
      />
      {lead ? (
        <p
          className={`mt-4 w-full max-w-none text-base leading-relaxed md:text-lg ${
            onDark ? "text-slate-100/88" : "text-slate-600"
          }`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}

function DocSection({
  id,
  title,
  lead,
  children,
  className = "",
  contentClassName = "",
  tone = "page",
  first = false,
}) {
  const headingVariant = tone === "navy" ? "onDark" : "default";

  return (
    <OrmSectionShell id={id} tone={tone} first={first} className={className}>
      <OrmSectionHeading title={title} lead={lead} variant={headingVariant} />
      {contentClassName ? <div className={contentClassName}>{children}</div> : children}
    </OrmSectionShell>
  );
}

function OrmHeroHeadline({ title, subline }) {
  const pageOne = "Page One";
  const idx = title.indexOf(pageOne);
  if (idx === -1) {
    return (
      <>
        {title}
        {subline ? (
          <>
            <br />
            {subline}
          </>
        ) : null}
      </>
    );
  }
  return (
    <>
      {title.slice(0, idx)}
      <span className="text-[#3d9a52]">{pageOne}</span>
      {title.slice(idx + pageOne.length)}
      {subline ? (
        <>
          <br />
          {subline}
        </>
      ) : null}
    </>
  );
}

export function OrmServiceHero() {
  return (
    <header
      id="orm-hero"
      className="relative overflow-hidden border-b border-slate-200/70 bg-white pb-12 pt-28 md:pb-16 md:pt-32"
      aria-labelledby="orm-hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-15%,rgba(76,175,80,0.07),transparent_52%),linear-gradient(180deg,#f8fafc_0%,#ffffff_55%)]"
        aria-hidden
      />
      <div className={`relative z-10 ${ORM_CONTENT_RAIL} text-left`}>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#4CAF50]">
          Online Reputation Management
        </p>
        <h1
          id="orm-hero-heading"
          className="font-heading text-[1.75rem] font-extrabold leading-[1.1] tracking-tight text-[#1F3B64] sm:text-4xl md:text-[2.75rem] lg:text-5xl xl:text-[3.25rem] xl:leading-[1.08]"
        >
          <OrmHeroHeadline title={ormPageHero.title} subline={ormPageHero.titleSubline} />
        </h1>
        <div
          className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#2E5B88]"
          aria-hidden
        />
        <p className="mt-5 w-full max-w-none text-pretty text-base leading-relaxed text-slate-600 md:mt-6 md:text-lg md:leading-relaxed lg:text-xl lg:leading-relaxed">
          {ormPageHero.lead}
        </p>
        <ConsultationCtas
          variant="onLight"
          freeScanLabel="Book Your Free Reputation Audit"
          consultLabel="Speak to an Expert"
          consultHref={CONTACT_PATH}
          consultLinkProps={externalAnchorProps(CONTACT_PATH)}
          consultSuffix={
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          }
          wrapperClassName="mt-8 justify-start lg:mt-10"
        />
      </div>
    </header>
  );
}

export function OrmWhatIsSection() {
  return (
    <DocSection
      id="what-is-orm"
      title="What Is Online Reputation Management?"
      tone="sage"
      first
    >
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-14">
        <div className="min-w-0 space-y-5">
          {ORM_WHAT_IS_PARAGRAPHS.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="w-full max-w-none text-base leading-relaxed text-slate-600 md:text-lg lg:leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
          <blockquote className="w-full max-w-none rounded-2xl border border-slate-200/80 bg-white/90 px-5 py-4 text-base font-medium leading-relaxed text-[#1F3B64] shadow-sm md:px-6 md:py-5 md:text-lg lg:leading-relaxed">
            <span
              className="mb-2 block h-1 w-10 rounded-full bg-[#4CAF50]"
              aria-hidden
            />
            {ORM_WHAT_IS_CALLOUT}
          </blockquote>
        </div>
        <div className="relative mx-auto w-full min-w-0 max-w-2xl lg:mx-0 lg:max-w-none lg:justify-self-stretch">
          <OrmHeroVisual />
        </div>
      </div>
    </DocSection>
  );
}

function parseWhyMattersBullet(text) {
  const leading = text.match(/^(\d+%)\s+([\s\S]+)$/);
  if (leading) {
    return { kind: "stat", stat: leading[1], text };
  }
  const embedded = text.match(/up to \d+%/i);
  if (embedded) {
    return { kind: "stat", stat: embedded[0], text };
  }
  return { kind: "narrative", text };
}

function whyMattersStatCaption(text, stat) {
  if (text.startsWith(`${stat} `)) {
    return text.slice(stat.length + 1);
  }
  return text;
}

function WhyMattersFeaturedStat({ stat, text }) {
  const caption = whyMattersStatCaption(text, stat);

  return (
    <div className="group flex flex-col gap-4 rounded-2xl border border-[#4CAF50]/25 bg-gradient-to-r from-[#f0faf4] via-white to-white p-6 transition-[border-color,box-shadow,transform] duration-200 motion-safe:hover:-translate-y-0.5 hover:border-[#4CAF50]/45 hover:shadow-[0_18px_44px_-22px_rgba(31,59,100,0.14)] sm:flex-row sm:items-center sm:gap-8 md:p-8">
      <p className="shrink-0 font-heading text-5xl font-black leading-none tracking-tight text-[#1f3b64] transition-transform duration-200 group-hover:scale-105 sm:w-32 sm:text-center md:text-6xl">
        {stat}
      </p>
      <p className="text-base leading-relaxed text-navy/85 md:text-lg md:leading-relaxed">
        {caption}
      </p>
    </div>
  );
}

function WhyMattersStatsGrid({ items }) {
  return (
    <div
      className={`grid gap-3 ${
        items.length >= 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"
      }`}
      role="list"
    >
      {items.map((item) => {
        const caption = whyMattersStatCaption(item.text, item.stat);

        return (
          <article
            key={item.key}
            className="group flex h-full flex-col rounded-xl border border-navy/10 bg-[#f8fafc] p-5 transition-[border-color,box-shadow,transform,background-color] duration-200 motion-safe:hover:-translate-y-0.5 hover:border-[#79df86]/40 hover:bg-white hover:shadow-[0_14px_36px_-18px_rgba(31,59,100,0.14)] md:p-6"
          >
            <p className="font-heading text-3xl font-black leading-none text-[#1f3b64] transition-transform duration-200 group-hover:scale-105 md:text-4xl">
              {item.stat}
            </p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/80 md:text-[15px]">
              {caption}
            </p>
          </article>
        );
      })}
    </div>
  );
}

function WhyMattersPointsList({ items }) {
  return (
    <ul className="space-y-3" role="list">
      {items.map((item) => (
        <li
          key={item.key}
          className="group flex cursor-default gap-4 rounded-xl border border-navy/10 bg-white px-5 py-4 shadow-[0_8px_28px_-22px_rgba(31,59,100,0.12)] transition-[border-color,box-shadow,transform] duration-200 motion-safe:hover:-translate-y-0.5 hover:border-[#79df86]/40 hover:shadow-[0_14px_36px_-18px_rgba(31,59,100,0.16)] md:px-6 md:py-5"
        >
          <span
            className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#4CAF50]/12 text-[#2d8f47] transition-[background-color,color,transform] duration-200 group-hover:scale-105 group-hover:bg-[#1f3b64] group-hover:text-white"
            aria-hidden
          >
            <Check className="h-4 w-4" strokeWidth={2.5} />
          </span>
          <p className="text-base leading-relaxed text-navy/80 transition-colors duration-200 group-hover:text-navy md:text-[17px] md:leading-relaxed">
            {item.text}
          </p>
        </li>
      ))}
    </ul>
  );
}

function WhyMattersTabBody({ bullets }) {
  const parsed = bullets.map((text) => ({ ...parseWhyMattersBullet(text), key: text }));
  const statItems = parsed.filter((item) => item.kind === "stat");
  const narrativeItems = parsed.filter((item) => item.kind === "narrative");

  return (
    <div className="space-y-5">
      {statItems.length === 1 ? (
        <WhyMattersFeaturedStat stat={statItems[0].stat} text={statItems[0].text} />
      ) : statItems.length > 0 ? (
        <WhyMattersStatsGrid items={statItems} />
      ) : null}
      {narrativeItems.length > 0 ? <WhyMattersPointsList items={narrativeItems} /> : null}
    </div>
  );
}

export function OrmWhyMattersSection() {
  const [tabId, setTabId] = useState(WHY_MATTERS_TABS[0].id);
  const tab = WHY_MATTERS_TABS.find((t) => t.id === tabId) ?? WHY_MATTERS_TABS[0];
  const panelId = "orm-why-matters-panel";

  const onTabListKeyDown = (event) => {
    const index = WHY_MATTERS_TABS.findIndex((t) => t.id === tabId);
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      setTabId(WHY_MATTERS_TABS[Math.min(index + 1, WHY_MATTERS_TABS.length - 1)].id);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      setTabId(WHY_MATTERS_TABS[Math.max(index - 1, 0)].id);
    } else if (event.key === "Home") {
      event.preventDefault();
      setTabId(WHY_MATTERS_TABS[0].id);
    } else if (event.key === "End") {
      event.preventDefault();
      setTabId(WHY_MATTERS_TABS[WHY_MATTERS_TABS.length - 1].id);
    }
  };

  return (
    <DocSection
      id="why-matters"
      title="Why Your Online Reputation Matters More Than Ever"
      tone="gradient"
    >
      <div
        className="inline-flex w-full max-w-full flex-col rounded-xl border border-navy/10 bg-[#eef2f6] p-1 sm:w-auto sm:flex-row"
        role="tablist"
        aria-label="Who this affects"
        onKeyDown={onTabListKeyDown}
      >
        {WHY_MATTERS_TABS.map((t) => {
          const selected = tabId === t.id;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={panelId}
              id={`orm-why-matters-tab-${t.id}`}
              onClick={() => setTabId(t.id)}
              className={`min-w-0 flex-1 rounded-lg px-4 py-2.5 font-heading text-sm font-semibold transition sm:flex-none sm:px-5 md:text-[15px] ${
                selected
                  ? "bg-white text-navy shadow-sm ring-1 ring-navy/10"
                  : "text-navy/70 hover:text-navy"
              }`}
            >
              <h3 className="font-heading text-sm font-semibold inline">{t.label}</h3>
            </button>
          );
        })}
      </div>
      <AnimatePresence mode="wait" initial={false}>
        <Motion.div
          key={tab.id}
          id={panelId}
          role="tabpanel"
          aria-labelledby={`orm-why-matters-tab-${tab.id}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_20px_56px_-32px_rgba(15,35,60,0.14)]"
          aria-live="polite"
        >
          <div className="border-b border-navy/8 bg-[#f8fafc] px-6 py-6 md:px-8 md:py-7">
            <p className="max-w-none text-base leading-relaxed text-navy/85 md:text-lg md:leading-relaxed">
              {tab.lead}
            </p>
          </div>
          <div className="px-6 py-6 md:px-8 md:py-7">
            <WhyMattersTabBody bullets={tab.bullets} />
          </div>
          {tab.closing ? (
            <div className="border-t border-navy/8 bg-gradient-to-r from-[#1f3b64] to-[#2e5b88] px-6 py-6 md:px-8 md:py-7">
              <p className="font-heading text-lg font-semibold leading-relaxed text-white md:text-xl md:leading-snug">
                {tab.closing}
              </p>
            </div>
          ) : null}
        </Motion.div>
      </AnimatePresence>
    </DocSection>
  );
}

export function OrmRankingFactorsSection() {
  const [activeId, setActiveId] = useState(RANKING_FACTORS[0].id);
  const factor = RANKING_FACTORS.find((f) => f.id === activeId) ?? RANKING_FACTORS[0];
  const ActiveIcon = FACTOR_ICONS[factor.id] ?? Target;
  const panelId = "orm-ranking-factor-panel";

  return (
    <DocSection
      id="ranking-factors"
      title="Why Negative Articles Rank So Well in Search Results"
      lead={RANKING_FACTORS_INTRO}
      tone="navy"
    >
      <div
        className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:gap-3"
        role="tablist"
        aria-label="Ranking factors"
      >
        {RANKING_FACTORS.map((f) => {
          const Icon = FACTOR_ICONS[f.id] ?? Target;
          const selected = f.id === activeId;
          return (
            <button
              key={f.id}
              type="button"
              role="tab"
              id={`orm-ranking-factor-tab-${f.id}`}
              aria-selected={selected}
              aria-controls={panelId}
              onClick={() => setActiveId(f.id)}
              className={`flex flex-col items-center gap-2 rounded-xl border px-3 py-3.5 text-center outline-none transition focus-visible:ring-2 focus-visible:ring-[#7df5b9]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f3b64] sm:px-4 sm:py-4 ${
                selected
                  ? "border-white/25 bg-white text-navy shadow-lg shadow-black/15"
                  : "border-white/15 bg-white/8 text-white/85 hover:border-white/25 hover:bg-white/12"
              }`}
            >
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                  selected ? "bg-[#1f3b64] text-white" : "bg-white/12 text-[#7df5b9]"
                }`}
              >
                <Icon className="h-5 w-5" aria-hidden strokeWidth={2} />
              </span>
              <span className="font-heading text-sm font-bold leading-snug">{f.label}</span>
            </button>
          );
        })}
      </div>

      <div className="sr-only">
        {RANKING_FACTORS.map((f) => (
          <h3 key={f.id}>{f.label}</h3>
        ))}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <Motion.div
          key={factor.id}
          id={panelId}
          role="tabpanel"
          aria-labelledby={`orm-ranking-factor-tab-${factor.id}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 rounded-2xl border border-white/12 bg-white p-5 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.35)] md:mt-6 md:p-7"
        >
          <div className="flex items-center gap-3 border-b border-navy/8 pb-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1f3b64] text-white shadow-sm">
              <ActiveIcon className="h-5 w-5" aria-hidden strokeWidth={2} />
            </span>
            <p className="font-heading text-xl font-bold text-navy">{factor.label}</p>
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-2 md:gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-navy/45">
                Why it ranks
              </p>
              <p className="mt-2 text-base leading-relaxed text-navy/80">{factor.means}</p>
            </div>
            <div className="rounded-xl border border-[#79df86]/30 bg-[#f4fbf6] px-4 py-4 md:px-5 md:py-5">
              <p className="text-xs font-bold uppercase tracking-wide text-[#1a5c38]">
                How we respond
              </p>
              <p className="mt-2 text-base leading-relaxed text-navy/85">{factor.suppression}</p>
            </div>
          </div>
        </Motion.div>
      </AnimatePresence>

      <p className="mt-6 w-full max-w-none text-center text-sm leading-relaxed text-slate-100/88 md:mt-8 md:text-base">
        {RANKING_FACTORS_CLOSING}
      </p>
    </DocSection>
  );
}

export function OrmBenefitsSection() {
  return (
    <DocSection
      id="benefits"
      title="The Benefits of Online Reputation Management"
      tone="canvas"
      lead="Strong ORM does not only fix what is broken. It builds a search presence that earns trust, opens doors, and holds up when something goes wrong."
    >
      <ul className="grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
        {ORM_BENEFITS.map((b, index) => {
          const Icon = ORM_BENEFIT_ICONS[b.id] ?? Sparkles;
          const step = String(index + 1).padStart(2, "0");

          return (
            <Motion.li
              key={b.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={ormRevealViewport}
              transition={{ duration: 0.42, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="min-w-0"
            >
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 shadow-[0_12px_40px_-24px_rgba(31,59,100,0.12)] transition-[border-color,box-shadow,transform] duration-200 motion-safe:hover:-translate-y-0.5 hover:border-[#79df86]/40 hover:shadow-[0_18px_44px_-20px_rgba(31,59,100,0.16)] md:p-7">
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#4CAF50]/12 text-[#2d8f47] transition-[background-color,color,transform] duration-200 group-hover:scale-105 group-hover:bg-[#1f3b64] group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={2} aria-hidden />
                  </span>
                  <span
                    className="font-heading text-sm font-bold tabular-nums text-navy/20 transition-colors duration-200 group-hover:text-[#4CAF50]/70"
                    aria-hidden
                  >
                    {step}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold leading-snug text-navy transition-colors duration-200 group-hover:text-[#0f2e58] md:text-xl">
                  {b.title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-navy/75 transition-colors duration-200 group-hover:text-navy/90 md:text-[17px] md:leading-relaxed">
                  {b.body}
                </p>
              </article>
            </Motion.li>
          );
        })}
      </ul>
    </DocSection>
  );
}

export function OrmWhoNeedsSection() {
  const [audienceId, setAudienceId] = useState(WHO_NEEDS_ORM[0].id);
  const audience = WHO_NEEDS_ORM.find((a) => a.id === audienceId) ?? WHO_NEEDS_ORM[0];
  const Icon = audienceIconForOrmTile(audience.id);

  return (
    <DocSection id="who-needs" title="Who Needs Online Reputation Management?" tone="blue">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,28rem)] lg:items-stretch lg:gap-12 xl:grid-cols-[minmax(0,1.2fr)_minmax(320px,30rem)]">
        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-4">
          {WHO_NEEDS_ORM.map((a) => {
            const TileIcon = audienceIconForOrmTile(a.id);
            const selected = audienceId === a.id;
            return (
              <button
                key={a.id}
                type="button"
                aria-pressed={selected}
                aria-label={`${a.label}. ${selected ? "Showing details" : "Show details"}`}
                onClick={() => setAudienceId(a.id)}
                className={`${tileBtn} ${selected ? tileSelected : tileIdle}`}
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl shadow-sm transition-[transform,background-color,color,box-shadow] duration-200 md:h-14 md:w-14 ${
                    selected
                      ? "scale-105 bg-[#1f3b64] text-white shadow-[0_6px_16px_-4px_rgba(31,59,100,0.45)]"
                      : "bg-white text-[#1f3b64] group-hover:scale-105"
                  }`}
                >
                  <TileIcon
                    className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7"
                    aria-hidden
                    strokeWidth={selected ? 2.25 : 1.75}
                  />
                </span>
                <span className="text-sm font-semibold leading-snug text-[#0f2e58] md:text-[15px]">
                  {a.label}
                </span>
              </button>
            );
          })}
        </div>
        <aside
          className="flex min-h-[15rem] flex-col rounded-2xl border border-[#1f3b64]/12 bg-[linear-gradient(160deg,#f4f6fc_0%,#eef2fb_55%,#e8edf8_100%)] p-6 shadow-[0_20px_50px_-32px_rgba(15,35,60,0.14)] md:min-h-[17rem] md:p-8 lg:sticky lg:top-28 lg:min-h-0"
          aria-live="polite"
          aria-label="Selected audience"
        >
          <div className="flex items-start gap-4">
            <span className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1f3b64] text-white shadow-md md:h-14 md:w-14">
              <Icon className="h-6 w-6 md:h-7 md:w-7" aria-hidden strokeWidth={2.25} />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-navy/45">
                Selected
              </p>
              <p className="mt-1.5 font-heading text-lg font-semibold text-[#0f2e58] md:text-xl">
                {audience.title}
              </p>
            </div>
          </div>
          <p className="mt-5 flex-1 text-base leading-relaxed text-[#3f4f66] md:mt-6 md:text-[17px] md:leading-relaxed">
            {audience.body}
          </p>
        </aside>
      </div>
    </DocSection>
  );
}

export function OrmIncludesSection() {
  const [openId, setOpenId] = useState(SERVICE_INCLUDES[0].id);

  return (
    <DocSection
      id="whats-included"
      title="What Our Online Reputation Management Service Includes"
      lead={ORM_INCLUDES_INTRO}
      tone="canvas"
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {SERVICE_INCLUDES.map((item) => {
          const open = openId === item.id;
          return (
            <button
              key={item.id}
              type="button"
              aria-expanded={open}
              onClick={() => setOpenId(open ? "" : item.id)}
              className={`ha-lift rounded-2xl border p-5 text-left outline-none transition focus-visible:ring-2 focus-visible:ring-navy/30 md:p-6 ${
                open
                  ? "border-navy/20 bg-[#f2f5ff] shadow-[0_12px_40px_-24px_rgba(31,59,100,0.18)] ring-1 ring-navy/10"
                  : "border-navy/10 bg-white hover:border-navy/18 hover:bg-[#fafbfd]"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-heading text-lg font-bold text-navy">{item.title}</h3>
                <span
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg text-lg font-bold transition ${
                    open ? "bg-navy text-white" : "bg-navy/8 text-navy"
                  }`}
                  aria-hidden
                >
                  {open ? "−" : "+"}
                </span>
              </div>
              <AnimatePresence initial={false}>
                {open ? (
                  <Motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 overflow-hidden text-sm leading-relaxed text-navy/75 md:text-[15px]"
                  >
                    {item.body}
                  </Motion.p>
                ) : null}
              </AnimatePresence>
            </button>
          );
        })}
      </div>
    </DocSection>
  );
}

export function OrmProcessSection() {
  const [active, setActive] = useState(0);
  const phase = ORM_PROCESS_PHASES[active] ?? ORM_PROCESS_PHASES[0];
  const phaseNum = String(phase.n).padStart(2, "0");
  const panelId = `orm-process-panel-${phase.n}`;

  const onTabListKeyDown = (event) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      setActive((i) => Math.min(i + 1, ORM_PROCESS_PHASES.length - 1));
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (event.key === "Home") {
      event.preventDefault();
      setActive(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setActive(ORM_PROCESS_PHASES.length - 1);
    }
  };

  return (
    <DocSection
      id="process"
      title="Our Process: How We Deliver Results"
      tone="gradient"
      contentClassName="mt-10 md:mt-12"
    >
      <div className="overflow-hidden rounded-2xl border border-navy/12 bg-white shadow-[0_16px_48px_-28px_rgba(31,59,100,0.12)]">
        <div
          className="grid grid-cols-2 divide-x divide-navy/[0.08] border-b border-navy/10 md:grid-cols-4"
          role="tablist"
          aria-label="ORM campaign phases"
          onKeyDown={onTabListKeyDown}
        >
          {ORM_PROCESS_PHASES.map((p, index) => {
            const num = String(p.n).padStart(2, "0");
            const selected = active === index;
            return (
              <button
                key={p.n}
                type="button"
                role="tab"
                aria-selected={selected}
                id={`orm-process-tab-${p.n}`}
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
                <h3
                  style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}
                >
                  Phase {num}: {p.title}
                </h3>
              </button>
            );
          })}
        </div>

        <div className="h-1 bg-navy/[0.06]" aria-hidden>
          <Motion.div
            className="h-full bg-gradient-to-r from-[#1f3b64] via-[#2e5b88] to-[#2a8c3e]"
            initial={false}
            animate={{
              width: `${((active + 1) / ORM_PROCESS_PHASES.length) * 100}%`,
            }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <div
          id={panelId}
          role="tabpanel"
          aria-labelledby={`orm-process-tab-${phase.n}`}
          className="relative min-h-[12rem] overflow-hidden p-6 md:min-h-[13rem] md:p-8 lg:p-10"
        >
          <AnimatePresence mode="wait" initial={false}>
            <Motion.div
              key={phase.n}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <span className="inline-flex rounded-full bg-navy px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white">
                  Phase {phaseNum}
                </span>
                <span className="font-heading text-2xl font-bold leading-tight text-navy md:text-3xl">
                  {phase.timespan}
                </span>
              </div>
              <p className="mt-4 font-heading text-xl font-bold text-navy md:text-2xl">
                Phase {phaseNum}: {phase.title}
              </p>
              <p className="mt-4 w-full max-w-none text-base leading-relaxed text-navy/75 md:text-lg md:leading-relaxed">
                {phase.body}
              </p>
            </Motion.div>
          </AnimatePresence>
        </div>
      </div>
      <p className="mt-8 w-full max-w-none text-sm leading-relaxed text-navy/70 md:mt-10 md:text-base">
        {ORM_PROCESS_NOTE}
      </p>
    </DocSection>
  );
}

const BEFORE_OUTREACH_COLUMN = {
  do: {
    title: "What to Do",
    items: BEFORE_OUTREACH_DO,
    Icon: Check,
    panelClass:
      "border-[#79df86]/25 bg-gradient-to-br from-[#f0faf3] to-white",
    titleClass: "text-[#1a5c38]",
    stepClass: "bg-[#e8f7ec] text-[#1a5c38]",
    iconClass: "text-[#2a8c3e]",
    itemBase:
      "border border-[#79df86]/22 bg-white text-navy/80 shadow-[0_8px_24px_-18px_rgba(31,59,100,0.1)] transition-[border-color,box-shadow,transform] duration-200 motion-safe:hover:-translate-y-px hover:border-[#79df86]/40 hover:shadow-[0_12px_32px_-16px_rgba(31,59,100,0.14)]",
    accentClass: "bg-[#2a8c3e]",
    counterClass: "text-[#1a5c38]/70",
  },
  avoid: {
    title: "What Not to Do",
    items: BEFORE_OUTREACH_AVOID,
    Icon: X,
    panelClass:
      "border-[#b85c5c]/25 bg-gradient-to-br from-[#fdf4f4] to-white",
    titleClass: "text-[#6b2a2a]",
    stepClass: "bg-[#fae8e8] text-[#6b2a2a]",
    iconClass: "text-[#8b3a3a]",
    itemBase:
      "border border-[#b85c5c]/22 bg-white text-[#6b2a2a]/85 shadow-[0_8px_24px_-18px_rgba(127,45,45,0.08)] transition-[border-color,box-shadow,transform] duration-200 motion-safe:hover:-translate-y-px hover:border-[#b85c5c]/38 hover:shadow-[0_12px_32px_-16px_rgba(127,45,45,0.12)]",
    accentClass: "bg-[#8b3a3a]",
    counterClass: "text-[#6b2a2a]/70",
  },
};

function BeforeOutreachTipColumn({ variant }) {
  const config = BEFORE_OUTREACH_COLUMN[variant];
  const { title, items, Icon } = config;

  return (
    <div className={`rounded-2xl border p-6 md:p-7 lg:p-8 ${config.panelClass}`}>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h3 className={`font-heading text-lg font-bold md:text-xl ${config.titleClass}`}>
          {title}
        </h3>
        <p className={`font-heading text-xs font-semibold ${config.counterClass}`}>
          {items.length} {items.length === 1 ? "tip" : "tips"}
        </p>
      </div>
      <ul className="mt-5 space-y-2.5" role="list" aria-label={title}>
        {items.map((item, index) => (
          <li key={item}>
            <div
              className={`group relative flex gap-3 rounded-xl py-3.5 pl-5 pr-4 ${config.itemBase}`}
            >
              <span
                className={`pointer-events-none absolute inset-y-3 left-0 w-1 rounded-full ${config.accentClass}`}
                aria-hidden
              />
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-heading text-xs font-bold ${config.stepClass}`}
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <Icon
                className={`mt-0.5 h-5 w-5 shrink-0 ${config.iconClass}`}
                aria-hidden
                strokeWidth={2.25}
              />
              <p className="min-w-0 flex-1 text-sm leading-relaxed md:text-[15px]">{item}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function OrmBeforeOutreachSection() {
  return (
    <DocSection
      id="before-outreach"
      title="Is There Anything You Can Do Before Reaching Out?"
      lead={ORM_BEFORE_OUTREACH_INTRO}
      tone="blue"
    >
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <BeforeOutreachTipColumn variant="do" />
        <BeforeOutreachTipColumn variant="avoid" />
      </div>
    </DocSection>
  );
}

const ormInView = { once: true, amount: 0.18 };

export function OrmWhyR360Section() {
  return (
    <section
      id="why-r360"
      className={`${ORM_SCROLL_TARGET_CLASS} relative overflow-hidden ${ORM_SECTION_SPACING} text-white`}
    >
      <OrmWhatWeDontBackground />
      <div className={`relative ${ORM_CONTENT_RAIL}`}>
        <Motion.div
          className="mb-12 text-left md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={ormInView}
          transition={{ duration: 0.55 }}
        >
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.25)] md:text-[2.1rem]">
            Why Choose Reputation360 for ORM?
          </h2>
          <div
            className="mt-4 h-0.5 w-16 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#2E5B88] shadow-[0_0_24px_rgba(76,175,80,0.2)]"
            aria-hidden
          />
          <p className="mt-5 max-w-none text-base leading-relaxed text-slate-100/90 md:mt-6 md:text-lg md:leading-relaxed lg:text-xl lg:leading-relaxed">
            {ORM_WHY_R360_INTRO}
          </p>
        </Motion.div>

        <div className="pt-10 md:pt-12">
          <div className="flex flex-wrap justify-center gap-5 md:gap-6">
          {WHY_R360_DIFFERENTIATORS.map((d, i) => {
            const Icon = WHY_R360_ICON_BY_ID[d.id] ?? Zap;
            return (
              <Motion.div
                key={d.id}
                className="w-full md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] lg:max-w-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={ormInView}
                transition={{ duration: 0.45, delay: i * 0.05 }}
              >
                <Motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 380, damping: 26 }}
                  className="group h-full rounded-2xl border border-white/18 bg-gradient-to-b from-white/[0.1] to-white/[0.04] p-8 text-center shadow-[0_8px_40px_-12px_rgba(10,20,40,0.5)] ring-1 ring-inset ring-white/10 backdrop-blur-md transition-colors duration-300 hover:border-[#4CAF50]/40 hover:from-white/[0.14] hover:to-white/[0.06] hover:shadow-[0_16px_50px_-14px_rgba(31,59,100,0.45),0_0_0_1px_rgba(76,175,80,0.1)] md:p-9"
                >
                  <div className="mb-5 flex flex-col items-center gap-3">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/20 bg-[#0f1c2c]/85 text-[#7df5b9] shadow-inner shadow-black/20 ring-1 ring-[#4CAF50]/35">
                      <Icon className="h-6 w-6" strokeWidth={2} aria-hidden />
                    </div>
                    <h3 className="font-heading text-base font-extrabold leading-snug text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.2)] md:text-lg">
                      {d.label}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-100/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.15)] md:text-[15px]">
                    {d.body}
                  </p>
                </Motion.div>
              </Motion.div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function OrmFaqSection() {
  return (
    <OrmSectionShell id="faq" tone="canvas" aria-labelledby="orm-faq-heading">
      <OrmSectionHeading
        title="Frequently Asked Questions"
        headingId="orm-faq-heading"
      />
      <div className="w-full space-y-4">
        {ORM_FAQS.map((item, index) => (
          <FaqAccordion key={item.q} question={item.q} defaultOpen={index === 0}>
            <p className="text-[15px] leading-relaxed">{item.a}</p>
          </FaqAccordion>
        ))}
      </div>
    </OrmSectionShell>
  );
}

export function OrmCtaSection() {
  return (
    <OrmSectionShell id="start" tone="page" className="pb-20 md:pb-24">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#0f2344] via-[#1F3B64] to-[#0a1628] px-6 py-10 text-center text-white shadow-[0_32px_80px_-24px_rgba(7,20,40,0.55)] md:rounded-[3rem] md:px-12 md:py-14 lg:px-16 lg:py-16">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#2E5B88]/35 blur-[100px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#4CAF50]/25 blur-[100px]"
          aria-hidden
        />
        <div className="relative z-10">
          <h2 className="font-heading text-3xl font-extrabold md:text-4xl lg:text-[2.35rem]">
            {ORM_CTA.title}
          </h2>
          {ORM_CTA.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg"
            >
              {paragraph}
            </p>
          ))}
          <ConsultationCtas
            variant="onDark"
            freeScanLabel="Book Your Free Reputation Audit"
            consultLabel="Call to Speak with an Expert"
            consultHref={CONTACT_PATH}
            consultLinkProps={externalAnchorProps(CONTACT_PATH)}
            wrapperClassName="mt-7 justify-center"
            consultClassName="ha-pill inline-flex rounded-md bg-cta-consult px-5 py-3 text-sm font-semibold text-white shadow-md shadow-cta-consult/20 hover:brightness-95"
            freeScanClassName="ha-pill inline-flex rounded-md border-2 border-white/35 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/55 hover:bg-white/15"
          />
          <p className="mx-auto mt-6 w-full max-w-7xl text-center text-sm text-white/75 md:whitespace-nowrap md:text-[15px] lg:text-base">
            {ORM_CTA.servingLine}
          </p>
        </div>
      </div>
    </OrmSectionShell>
  );
}
