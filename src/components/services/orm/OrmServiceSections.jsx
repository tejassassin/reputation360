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

/** Section rhythm aligned with About page (`aboutSectionSpacing` / `aboutFirstContentSpacing`). */
const ORM_SECTION_SPACING = "pt-16 pb-20 md:pt-20 md:pb-24";
const ORM_FIRST_SECTION_SPACING = "pt-28 pb-20 md:pt-36 md:pb-24";

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
      <div className="relative mx-auto max-w-6xl px-6">{children}</div>
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

function OrmHeroHeadline({ title }) {
  const pageOne = "Page One";
  const idx = title.indexOf(pageOne);
  if (idx === -1) {
    return title;
  }
  return (
    <>
      {title.slice(0, idx)}
      <span className="text-[#7df5b9]">{pageOne}</span>
      {title.slice(idx + pageOne.length)}
    </>
  );
}

export function OrmServiceHero() {
  return (
    <header
      className="relative flex min-h-[min(460px,calc(100vh-10.5rem))] flex-col overflow-hidden bg-[#050a18] text-white md:min-h-[min(520px,calc(100vh-11rem))]"
      aria-labelledby="orm-hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_12%_-8%,rgba(76,175,80,0.22),transparent_52%),radial-gradient(ellipse_65%_45%_at_100%_0%,rgba(46,91,136,0.4),transparent_50%),linear-gradient(165deg,#050a18_0%,#1F3B64_42%,#0a1628_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.32] [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:48px_48px]"
        aria-hidden
      />
      <Motion.div
        className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-[#4CAF50]/20 blur-[100px]"
        aria-hidden
        animate={{ x: [0, 28, 0], y: [0, 16, 0] }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <Motion.div
        className="pointer-events-none absolute -right-16 bottom-20 h-64 w-64 rounded-full bg-[#2E5B88]/25 blur-[90px]"
        aria-hidden
        animate={{ x: [0, -20, 0], y: [0, -12, 0] }}
        transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center px-5 pb-14 pt-36 text-center sm:pt-40 md:px-8 md:pb-16 md:pt-44 lg:px-8 lg:text-left">
        <h1
          id="orm-hero-heading"
          className="font-heading text-[1.75rem] font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-[2.75rem] lg:text-5xl xl:text-[3.25rem] xl:leading-[1.08]"
        >
          <OrmHeroHeadline title={ormPageHero.title} />
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300/90 md:mt-6 md:text-lg lg:mx-0 lg:max-w-none lg:mt-7">
          {ormPageHero.lead}
        </p>
        <ConsultationCtas
          variant="onDark"
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
          wrapperClassName="mt-8 justify-center lg:mt-10 lg:justify-start"
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
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 xl:gap-12">
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
        <div className="relative mx-auto w-full min-w-0 max-w-xl lg:mx-0 lg:max-w-none lg:justify-self-end">
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

function WhyMattersStatCard({ stat, text, featured = false }) {
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_12px_40px_-24px_rgba(31,59,100,0.12)] transition-[border-color,box-shadow,transform] duration-200 motion-safe:hover:-translate-y-0.5 hover:border-[#79df86]/40 hover:shadow-[0_18px_44px_-20px_rgba(31,59,100,0.16)] ${
        featured ? "min-h-[280px] md:min-h-full" : ""
      }`}
    >
      <div
        className={`flex flex-1 flex-col justify-center bg-gradient-to-br from-[#1f3b64] via-[#2e5b88] to-[#2a8c3e] ${
          featured ? "px-6 py-10 md:px-8 md:py-12" : "px-5 py-5 md:px-6 md:py-6"
        }`}
      >
        <p
          className={`font-heading font-black leading-none tracking-tight text-white ${
            featured ? "text-5xl md:text-6xl lg:text-7xl" : "text-4xl md:text-5xl"
          }`}
        >
          {stat}
        </p>
      </div>
      <p
        className={`flex-1 leading-relaxed text-navy/80 ${
          featured
            ? "px-6 py-5 text-base md:px-8 md:py-6 md:text-lg"
            : "px-5 py-4 text-sm md:px-6 md:py-5 md:text-[15px]"
        }`}
      >
        {text}
      </p>
    </article>
  );
}

function WhyMattersInsightCard({ text }) {
  return (
    <article className="group flex h-full gap-4 rounded-2xl border border-navy/10 bg-white p-5 shadow-[0_10px_32px_-22px_rgba(31,59,100,0.12)] transition-[border-color,box-shadow] duration-200 hover:border-[#79df86]/35 hover:shadow-[0_14px_36px_-18px_rgba(31,59,100,0.14)] md:gap-5 md:p-6">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1f3b64] text-white shadow-sm transition group-hover:bg-[#2a8c3e] md:h-14 md:w-14">
        <Check className="h-6 w-6 md:h-7 md:w-7" aria-hidden strokeWidth={2.25} />
      </span>
      <p className="flex-1 text-base leading-relaxed text-navy/80 md:text-lg md:leading-relaxed">
        {text}
      </p>
    </article>
  );
}

function WhyMattersIndividualsLayout({ statItem, narrativeItems }) {
  return (
    <div
      className="mt-6 grid gap-4 md:grid-cols-2 md:grid-rows-2"
      role="list"
      aria-label="Key points for individuals"
    >
      <div className="md:row-span-2">
        <WhyMattersStatCard stat={statItem.stat} text={statItem.text} featured />
      </div>
      {narrativeItems.map((item, index) => (
        <WhyMattersInsightCard key={item.key} text={item.text} />
      ))}
    </div>
  );
}

function WhyMattersBulletCards({ bullets }) {
  const parsed = bullets.map((text) => ({ ...parseWhyMattersBullet(text), key: text }));
  const statItems = parsed.filter((item) => item.kind === "stat");
  const narrativeItems = parsed.filter((item) => item.kind === "narrative");

  if (statItems.length === 1 && narrativeItems.length === 2 && bullets.length === 3) {
    return (
      <WhyMattersIndividualsLayout statItem={statItems[0]} narrativeItems={narrativeItems} />
    );
  }

  return (
    <div className="mt-6 space-y-4">
      {statItems.length > 0 ? (
        <div
          className={`grid gap-4 ${
            statItems.length === 3 ? "md:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3"
          }`}
          role="list"
        >
          {statItems.map((item) => (
            <WhyMattersStatCard key={item.key} stat={item.stat} text={item.text} />
          ))}
        </div>
      ) : null}
      {narrativeItems.length > 0 ? (
        <div className="space-y-3" role="list">
          {narrativeItems.map((item) => (
            <WhyMattersInsightCard key={item.key} text={item.text} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function OrmWhyMattersSection() {
  const [tabId, setTabId] = useState(WHY_MATTERS_TABS[0].id);
  const tab = WHY_MATTERS_TABS.find((t) => t.id === tabId) ?? WHY_MATTERS_TABS[0];

  return (
    <DocSection
      id="why-matters"
      title="Why Your Online Reputation Matters More Than Ever"
      tone="gradient"
    >
      <div className="flex flex-wrap gap-2">
        {WHY_MATTERS_TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            aria-pressed={tabId === t.id}
            onClick={() => setTabId(t.id)}
            className={`rounded-full border px-4 py-2 font-heading text-sm font-semibold transition ${
              tabId === t.id
                ? "border-navy bg-navy text-white shadow-md"
                : "border-navy/12 bg-white text-navy hover:border-[#79df86]/50"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait" initial={false}>
        <Motion.div
          key={tab.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 rounded-2xl border border-navy/10 bg-white p-6 shadow-[0_16px_48px_-28px_rgba(15,35,60,0.1)] md:p-8"
          aria-live="polite"
        >
          <h3 className="font-heading text-xl font-bold text-navy">{tab.label}</h3>
          <p className="mt-4 rounded-xl border border-navy/8 bg-[#f4f7fb] px-5 py-4 text-base leading-relaxed text-navy/80 md:text-lg">
            {tab.lead}
          </p>
          <WhyMattersBulletCards bullets={tab.bullets} />
          {tab.closing ? (
            <div className="mt-6 overflow-hidden rounded-2xl bg-gradient-to-br from-[#061f3d] via-[#0f3b64] to-[#1a4a7a] px-6 py-6 shadow-[0_16px_48px_-20px_rgba(7,47,95,0.35)] md:px-8 md:py-7">
              <p className="font-heading text-lg font-semibold leading-relaxed text-white md:text-xl">
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
  return (
    <DocSection
      id="ranking-factors"
      title="Why Negative Articles Rank So Well in Search Results"
      lead={RANKING_FACTORS_INTRO}
      tone="navy"
    >
      <ul className="grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4 xl:gap-5">
        {RANKING_FACTORS.map((f) => {
          const Icon = FACTOR_ICONS[f.id] ?? Target;
          return (
            <li
              key={f.id}
              className="ha-lift flex flex-col rounded-2xl border border-navy/10 bg-white p-5 shadow-[0_12px_40px_-24px_rgba(31,59,100,0.12)] md:p-6"
            >
              <div className="flex items-center gap-3 border-b border-navy/8 pb-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1f3b64] text-white shadow-sm">
                  <Icon className="h-5 w-5" aria-hidden strokeWidth={2} />
                </span>
                <h3 className="font-heading text-lg font-bold text-navy">{f.label}</h3>
              </div>
              <div className="mt-4 flex flex-1 flex-col">
                <p className="text-xs font-bold uppercase tracking-wide text-navy/45">
                  What It Means
                </p>
                <p className="mt-2 text-sm leading-relaxed text-navy/75 md:text-[15px]">
                  {f.means}
                </p>
                <p className="mt-5 text-xs font-bold uppercase tracking-wide text-[#1a5c38]">
                  Why It Matters for Suppression
                </p>
                <p className="mt-2 text-sm leading-relaxed text-navy/75 md:text-[15px]">
                  {f.suppression}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
      <p className="mt-8 w-full max-w-none text-base leading-relaxed text-slate-100/90 md:text-lg">
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
    >
      <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_16px_48px_-28px_rgba(15,35,60,0.1)]">
        <div
          className="hidden border-b border-navy/10 bg-gradient-to-r from-[#f2f5ff] to-[#f8fafc] md:grid md:grid-cols-[minmax(12rem,34%)_1fr] md:gap-8 md:px-6 md:py-3.5"
          aria-hidden
        >
          <p className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-navy/55">
            Benefit
          </p>
          <p className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-[#1a5c38]">
            What It Delivers
          </p>
        </div>
        <ul className="list-none divide-y divide-navy/[0.08] p-0">
          {ORM_BENEFITS.map((b, index) => (
            <li
              key={b.id}
              tabIndex={0}
              className={`group relative grid cursor-default gap-2 overflow-hidden px-5 py-4 outline-none transition-[background-color,box-shadow,transform] duration-200 md:grid-cols-[minmax(12rem,34%)_1fr] md:items-start md:gap-8 md:px-6 md:py-5 motion-safe:hover:-translate-y-px motion-safe:hover:shadow-[0_12px_32px_-16px_rgba(31,59,100,0.2)] hover:z-[1] hover:bg-[#f0faf3] focus-visible:z-[1] focus-visible:bg-[#f0faf3] focus-visible:shadow-[0_12px_32px_-16px_rgba(31,59,100,0.2)] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#79df86]/45 ${
                index % 2 === 1 ? "bg-[#fafbfd]/80" : "bg-white"
              }`}
            >
              <span
                className="pointer-events-none absolute inset-y-0 left-0 w-1 origin-center scale-y-0 bg-[#2a8c3e] transition-transform duration-200 group-hover:scale-y-100 group-focus-visible:scale-y-100 motion-reduce:transition-none"
                aria-hidden
              />
              <h3 className="font-heading text-base font-bold leading-snug text-navy transition-colors duration-200 group-hover:text-[#0f2e58] group-focus-visible:text-[#0f2e58] md:text-[17px]">
                {b.title}
              </h3>
              <p className="text-sm leading-relaxed text-navy/75 transition-colors duration-200 group-hover:text-navy/85 group-focus-visible:text-navy/85 md:text-[15px] md:leading-relaxed">
                {b.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
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
              <h3 className="mt-4 font-heading text-xl font-bold text-navy md:text-2xl">
                Phase {phaseNum}: {phase.title}
              </h3>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-navy/75 md:text-lg md:leading-relaxed">
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
    stepIdle: "bg-[#e8f7ec] text-[#1a5c38]",
    stepHover: "group-hover:bg-[#d4f0dc] group-focus-visible:bg-[#d4f0dc]",
    iconClass: "text-[#2a8c3e]",
    itemBase:
      "border border-transparent bg-white/40 text-navy/72 transition-[background-color,border-color,color] duration-300 ease-out hover:border-[#79df86]/30 hover:bg-white/95 hover:text-navy/88 focus-visible:border-[#79df86]/35 focus-visible:bg-white focus-visible:text-navy",
    accentClass: "bg-[#2a8c3e]",
    counterClass: "text-[#1a5c38]/70",
    hint: "Hover or use arrow keys to move through each tip.",
  },
  avoid: {
    title: "What Not to Do",
    items: BEFORE_OUTREACH_AVOID,
    Icon: X,
    panelClass:
      "border-[#b85c5c]/25 bg-gradient-to-br from-[#fdf4f4] to-white",
    titleClass: "text-[#6b2a2a]",
    stepIdle: "bg-[#fae8e8] text-[#6b2a2a]",
    stepHover: "group-hover:bg-[#f5d4d4] group-focus-visible:bg-[#f5d4d4]",
    iconClass: "text-[#8b3a3a]",
    itemBase:
      "border border-transparent bg-white/50 text-[#6b2a2a]/75 transition-[background-color,border-color,color] duration-300 ease-out hover:border-[#b85c5c]/30 hover:bg-white/95 hover:text-[#6b2a2a]/92 focus-visible:border-[#b85c5c]/35 focus-visible:bg-white focus-visible:text-[#5c2828]",
    accentClass: "bg-[#8b3a3a]",
    counterClass: "text-[#6b2a2a]/70",
    hint: "Hover or use arrow keys to move through each warning.",
  },
};

function BeforeOutreachTipColumn({ variant }) {
  const config = BEFORE_OUTREACH_COLUMN[variant];
  const { title, items, Icon, hint } = config;
  const [activeIndex, setActiveIndex] = useState(0);
  const listId = `orm-before-outreach-${variant}`;

  const onListKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, items.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (event.key === "Home") {
      event.preventDefault();
      setActiveIndex(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setActiveIndex(items.length - 1);
    }
  };

  return (
    <div
      className={`rounded-2xl border p-6 md:p-7 lg:p-8 ${config.panelClass}`}
      onKeyDown={onListKeyDown}
    >
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h3 className={`font-heading text-lg font-bold md:text-xl ${config.titleClass}`}>
          {title}
        </h3>
        <p
          className={`font-heading text-xs font-semibold tabular-nums ${config.counterClass}`}
          aria-live="polite"
        >
          {activeIndex + 1} of {items.length}
        </p>
      </div>
      <p className="mt-2 text-xs text-navy/50">{hint}</p>
      <ul
        id={listId}
        role="listbox"
        aria-label={title}
        aria-activedescendant={`${listId}-option-${activeIndex}`}
        className="mt-5 space-y-2.5"
      >
        {items.map((item, index) => {
          const selected = activeIndex === index;
          return (
            <li key={item} role="presentation">
              <button
                type="button"
                role="option"
                id={`${listId}-option-${index}`}
                aria-selected={selected}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`group relative flex w-full gap-3 rounded-xl px-4 py-3.5 text-left outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                  variant === "do"
                    ? "focus-visible:ring-[#79df86]/50"
                    : "focus-visible:ring-[#b85c5c]/45"
                } ${config.itemBase}`}
              >
                <span
                  className={`pointer-events-none absolute inset-y-3 left-0 w-1 rounded-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus-visible:opacity-100 ${config.accentClass}`}
                  aria-hidden
                />
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-heading text-xs font-bold transition-colors duration-300 ease-out ${config.stepIdle} ${config.stepHover}`}
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Icon
                  className={`mt-0.5 h-5 w-5 shrink-0 ${config.iconClass}`}
                  aria-hidden
                  strokeWidth={2.25}
                />
                <span className="min-w-0 flex-1 text-sm leading-relaxed transition-colors duration-300 ease-out md:text-[15px]">
                  {item}
                </span>
              </button>
            </li>
          );
        })}
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
    <>
      <OrmSectionShell tone="canvas" className="pb-10 md:pb-12">
        <OrmSectionHeading title="Why Reputation360?" lead={ORM_WHY_R360_INTRO} />
      </OrmSectionShell>

      <section
        id="why-r360"
        className={`${ORM_SCROLL_TARGET_CLASS} relative overflow-hidden ${ORM_SECTION_SPACING} text-white`}
      >
        <OrmWhatWeDontBackground />
        <div className="relative mx-auto max-w-7xl px-6">
          <Motion.div
            className="mb-12 text-center md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={ormInView}
            transition={{ duration: 0.55 }}
          >
            <h3 className="font-heading text-3xl font-extrabold tracking-tight text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.25)] md:text-[2.1rem]">
              What Sets Us Apart
            </h3>
            <div
              className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#2E5B88] shadow-[0_0_24px_rgba(76,175,80,0.2)]"
              aria-hidden
            />
          </Motion.div>

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
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/20 bg-[#0f1c2c]/85 text-[#86efac] shadow-inner shadow-black/20 ring-1 ring-[#2E5B88]/40 transition-colors duration-300 group-hover:border-[#4CAF50]/35 group-hover:text-emerald-200">
                        <Icon className="h-6 w-6" strokeWidth={2} aria-hidden />
                      </div>
                      <h4 className="font-heading text-base font-extrabold leading-snug text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.2)] md:text-lg">
                        {d.label}
                      </h4>
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
      </section>
    </>
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
          <p className="mx-auto mt-6 max-w-2xl text-sm text-white/75 md:text-base">
            {ORM_CTA.servingLine}
          </p>
        </div>
      </div>
    </OrmSectionShell>
  );
}
