import { useCallback, useEffect, useState } from "react";
import {
  BarChart3,
  Check,
  Clock,
  Lock,
  Newspaper,
  Search,
  Star,
  Wrench,
  Zap,
} from "lucide-react";
import { SeoHead } from "../components/SeoHead.jsx";
import { cn } from "@/lib/utils";
import { FREE_RISK_SCAN_PATH } from "@/constants/freeRiskScan.js";
import { AUDIENCE_PATH } from "@/constants/whoWeServePaths.js";
import { BlogGuideCtaPanel } from "@/components/blog/BlogGuideCtaSection.jsx";
import { DiyInternalLink } from "@/components/blog/diy/DiyGuideUi.jsx";
import { DIY_REPUTATION_GUIDE_PATH } from "../data/blogs/diyReputationGuide.js";
import { REMOVE_NEGATIVE_SEARCH_RESULTS_PATH } from "../data/blogs/removeNegativeSearchResultsGuide.js";
import { SUPPRESS_NEGATIVE_GUIDE_PATH } from "../data/blogs/suppressNegativeContentGuide.js";
import {
  REPUTATION_REPAIR_TIMELINE_PATH,
  reputationRepairTimelineHero,
  reputationRepairTimelineListing,
  reputationRepairTimelineMetaDescription,
  reputationRepairTimelineSeoTitle,
  reputationRepairTimelineToc,
} from "../data/blogs/reputationRepairTimelineGuide.js";
import {
  DIY_VS_PRO_POINTS,
  FIXING_PILLARS,
  GUIDE_NAV,
  HERO_STATS,
  RED_FLAGS,
  RELATED_ARTICLES,
  REPAIR_PHASES,
  SCROLL_SPY_ORDER,
  TIMELINE_FACTORS,
  TIMELINE_SCENARIOS,
} from "../data/blogs/reputationRepairTimelineInteractive.js";
import {
  DiyAccordion,
  DiyKeyBox,
  DiyLeadHighlight,
  DiyRelatedReading,
  DiySectionHeader,
  DiyGuideToc,
  MobileGuideNav,
  ReadingProgressRail,
  StepPicker,
} from "../components/blog/diy/DiyGuideUi.jsx";
import "../styles/r360-diy-interactive.css";

const SERVICES_PATH = "/services";
const CASE_STUDIES_PATH = "/case-studies";
const ABOUT_PATH = "/about";

const FACTOR_ICONS = {
  source: Newspaper,
  volume: BarChart3,
  footprint: Search,
  reviews: Star,
  speed: Zap,
  quality: Wrench,
};

function RedFlagAccordion({ id, title, children, open, onToggle }) {
  return (
    <DiyAccordion id={id} title={title} open={open} onToggle={onToggle}>
      {children}
    </DiyAccordion>
  );
}

export default function BlogReputationRepairTimelinePage() {
  const [readingPct, setReadingPct] = useState(0);
  const [activeNavId, setActiveNavId] = useState("");
  const [openAccordion, setOpenAccordion] = useState({});
  const [factorId, setFactorId] = useState(TIMELINE_FACTORS[0].id);
  const [scenarioId, setScenarioId] = useState(TIMELINE_SCENARIOS[0].id);
  const [repairPhase, setRepairPhase] = useState(1);

  const toggleAccordion = useCallback((key) => {
    setOpenAccordion((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const height = doc.scrollHeight - doc.clientHeight;
      setReadingPct(height > 0 ? (doc.scrollTop / height) * 100 : 0);

      const y = window.scrollY;
      let current = "";
      for (const sid of SCROLL_SPY_ORDER) {
        const el = document.getElementById(sid);
        if (!el) continue;
        if (y >= el.offsetTop - 160) current = sid;
      }
      setActiveNavId(GUIDE_NAV.some((g) => g.id === current) ? current : "");
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
    return () => document.documentElement.classList.remove("scroll-smooth");
  }, []);

  const factor = TIMELINE_FACTORS.find((f) => f.id === factorId) ?? TIMELINE_FACTORS[0];
  const scenario =
    TIMELINE_SCENARIOS.find((s) => s.id === scenarioId) ?? TIMELINE_SCENARIOS[0];

  const repairPhaseBodies = {
    phase1: (
      <>
        Every engagement begins with a thorough audit of your current search presence - mapping every result across
        the first three pages, identifying the authority and backlink profile of damaging content, assessing your
        existing positive digital assets, and defining the gap between where you are now and where you need to be.
        This is where your{" "}
        <DiyInternalLink href={FREE_RISK_SCAN_PATH}>free reputation scan</DiyInternalLink> gives you the starting
        picture. The strategy built in this phase determines everything that follows.
      </>
    ),
    phase2: (
      <>
        This phase involves creating and optimising the content that will ultimately outrank the damaging material.
        That includes SEO-optimised articles and thought leadership pieces, profile pages on high-authority platforms
        (LinkedIn, Crunchbase, industry directories), press releases, and in many cases editorial placements in
        relevant publications. The quality and authority of these assets directly determines how quickly they climb in
        rankings. For{" "}
        <DiyInternalLink href={AUDIENCE_PATH.executives}>executives and C-suite leaders</DiyInternalLink>, this phase
        often includes personal brand content that positions them as a named authority in their field.
      </>
    ),
    phase3: (
      <>
        Content without backlinks rarely outranks entrenched negative results. This phase involves a strategic{" "}
        <DiyInternalLink href={REMOVE_NEGATIVE_SEARCH_RESULTS_PATH}>
          negative link suppression
        </DiyInternalLink>{" "}
        campaign - directing link authority toward your positive pages so they compete effectively in search. This is
        often the phase that separates fast results from slow ones: a well-executed link-building campaign can
        accelerate suppression dramatically.
      </>
    ),
    phase4: (
      <>
        By the end of month two, most clients see positive content beginning to move into the top 20 results. By month
        three, some of it has reached page one. This is typically the point at which the narrative visible to someone
        searching your name or brand begins to change perceptibly. For{" "}
        <DiyInternalLink href={AUDIENCE_PATH.businesses}>businesses</DiyInternalLink> with review management as part of
        their engagement, improved ratings often become visible at this stage too.
      </>
    ),
    phase5: (
      <>
        The final phase is about pushing damaging content entirely off page one - and keeping it there. This requires
        continued content publication, ongoing link signals, and active monitoring. Google&apos;s algorithm re-evaluates
        rankings continuously; without sustained effort, initial gains can erode. This is why ongoing{" "}
        <DiyInternalLink href={DIY_REPUTATION_GUIDE_PATH}>reputation management</DiyInternalLink> rather than a
        one-time fix produces the most durable results.
      </>
    ),
  };

  const repairSteps = REPAIR_PHASES.map((p) => ({
    n: p.n,
    timespan: p.timespan,
    title: p.title,
    body: repairPhaseBodies[p.bodyKey],
  }));

  return (
    <>
      <SeoHead
        title={reputationRepairTimelineSeoTitle}
        description={reputationRepairTimelineMetaDescription}
        canonicalPath={REPUTATION_REPAIR_TIMELINE_PATH}
        ogImage={reputationRepairTimelineListing.image}
      />

      <div className="r360-diy-interactive scroll-smooth pb-1 font-body text-jet antialiased">
        <div className="diy-hero-band" id="intro">
          <span className="diy-hero-badge">{reputationRepairTimelineHero.badge}</span>
          <h1 className="diy-hero-title">{reputationRepairTimelineHero.title}</h1>
          <p className="diy-hero-lead">{reputationRepairTimelineHero.lead}</p>
          <div className="diy-meta-grid">
            {reputationRepairTimelineHero.meta.map((item) => (
              <div key={item.label}>
                <div className="diy-meta-value">{item.value}</div>
                <div className="diy-meta-label">{item.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-8 flex items-center justify-center gap-2 font-body text-sm text-steel">
            <Clock className="h-4 w-4 text-navy" aria-hidden />
            {reputationRepairTimelineListing.readTime} read
          </p>
        </div>

        <div
          className="pointer-events-none fixed right-0 bottom-0 left-0 z-40 h-1.5 overflow-hidden bg-slate-200"
          aria-hidden
        >
          <div
            className="absolute inset-0 bg-green transition-[clip-path] duration-150 ease-out"
            style={{
              clipPath: `inset(0 0 ${100 - Math.min(100, Math.max(0, readingPct))}% 0)`,
            }}
          />
        </div>

        <div className="mx-auto max-w-[min(100%,90rem)] px-4 pb-4 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pt-12">
          <div className="flex flex-col gap-8 pb-4 lg:flex-row lg:gap-0">
            <aside className="hidden w-64 shrink-0 lg:sticky lg:top-28 lg:block lg:h-[calc(100dvh-8rem)] lg:overflow-y-auto lg:border-r lg:border-slate-200/80 lg:pr-6 lg:pt-2">
              <h4 className="mb-4 font-heading text-xs font-bold tracking-widest text-steel uppercase">
                Guide Index
              </h4>
              <nav className="flex flex-col gap-1 text-sm text-steel" aria-label="Guide index">
                {GUIDE_NAV.map(({ id, label }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className={cn(
                      "border-l-2 py-2 pl-3 font-body no-underline transition-all hover:text-navy",
                      activeNavId === id
                        ? "border-green font-bold text-navy"
                        : "border-transparent",
                    )}
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </aside>

            <main className="min-w-0 flex-1 px-0 pb-20 sm:px-2 lg:max-w-[52rem] lg:px-10">
              <MobileGuideNav nav={GUIDE_NAV} activeNavId={activeNavId} readingPct={readingPct} />

              <div className="mb-10 font-body text-lg text-steel">
                <p className="mb-6">
                  It&apos;s one of the first questions everyone asks: <em>&quot;How long will this take?&quot;</em>{" "}
                  The most accurate answer - the one that actually helps you plan - is: it depends. But that
                  doesn&apos;t mean the answer is vague. The timeline for online reputation repair is highly
                  predictable once you understand the variables that drive it.
                </p>
                <p className="mb-6">
                  After seven years managing reputations for founders, executives, businesses, and individuals
                  across the US, Canada, and Australia:{" "}
                  <strong>most clients see meaningful, visible improvements within 60 to 90 days</strong>. Full
                  page-one transformation - where Google reflects who you actually are - typically takes 3 to 12
                  months, depending on severity.
                </p>
                <p>
                  This guide breaks down what drives those timelines, what each phase looks like, and what you
                  should realistically expect - whether you&apos;re dealing with a single damaging article or a
                  full-scale reputation crisis.
                </p>
              </div>

              <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {HERO_STATS.map((stat) => (
                  <div
                    key={stat.value}
                    className="rounded-2xl bg-navy p-6 text-center text-white shadow-md"
                  >
                    <p className="font-heading text-3xl font-black text-green md:text-4xl">{stat.value}</p>
                    <p className="mt-2 font-body text-sm leading-snug text-white/90">{stat.label}</p>
                  </div>
                ))}
              </div>

              <DiyGuideToc
                items={reputationRepairTimelineToc}
                title="What You'll Learn"
                ariaLabel="What you'll learn"
              />

              <section className="mb-20 scroll-mt-36" id="what-fixing-means">
                <DiySectionHeader number="01" title='What "Fixing" a Reputation Actually Means' />
                <p className="mb-6 font-body text-lg text-steel">
                  Before talking timelines, it&apos;s worth clarifying what reputation repair involves. Most people
                  underestimate the scope. &quot;Fixing&quot; an online reputation is not a single action - it&apos;s a
                  sustained campaign across three fronts:
                </p>
                <ul className="mb-8 space-y-4">
                  {FIXING_PILLARS.map((pillar) => (
                    <li
                      key={pillar.title}
                      className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 font-body text-base text-steel shadow-sm"
                    >
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-green" aria-hidden />
                      <span>
                        <strong className="text-navy">{pillar.title}</strong> - {pillar.body}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mb-6 font-body text-base text-steel">
                  Of these,{" "}
                  <DiyInternalLink href={SUPPRESS_NEGATIVE_GUIDE_PATH}>
                    suppression is almost always the most reliable and fastest path
                  </DiyInternalLink>{" "}
                  to visible results. Removal is ideal when achievable, but depends on where content lives and
                  whether legal leverage exists. Most realistic strategies combine both.
                </p>
                <DiyKeyBox variant="insight" title="Key point">
                  &quot;Fixed&quot; doesn&apos;t mean negative content disappears from the internet forever. It means what
                  people see on page one of Google accurately represents your credibility, accomplishments, and
                  value. That&apos;s what moves decisions.
                </DiyKeyBox>
              </section>

              <section className="mb-20 scroll-mt-36" id="factors">
                <DiySectionHeader number="02" title="The 6 Factors That Determine Your Timeline" />
                <p className="mb-6 font-body text-lg text-steel">
                  No two reputation situations are identical. The timeline for{" "}
                  <DiyInternalLink href={SERVICES_PATH}>reputation recovery services</DiyInternalLink> is shaped
                  by a combination of factors - each can accelerate or extend the process.
                </p>
                <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {TIMELINE_FACTORS.map((f) => {
                    const Icon = FACTOR_ICONS[f.id] ?? Search;
                    const active = factorId === f.id;
                    return (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => setFactorId(f.id)}
                        className={cn(
                          "flex items-start gap-3 rounded-xl border p-4 text-left transition-all",
                          active
                            ? "border-navy bg-navy/5 ring-2 ring-green/25"
                            : "border-slate-200 bg-white hover:border-navy/20",
                        )}
                      >
                        <Icon
                          className={cn("mt-0.5 h-5 w-5 shrink-0", active ? "text-green" : "text-navy")}
                          aria-hidden
                        />
                        <span className="font-heading text-sm font-bold text-navy">{f.title}</span>
                      </button>
                    );
                  })}
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="font-heading text-sm font-bold tracking-wide text-navy uppercase">
                    {factor.title}
                  </p>
                  <p className="mt-2 font-body text-base leading-relaxed text-steel">{factor.detail}</p>
                </div>
              </section>

              <section className="mb-20 scroll-mt-36" id="timeline-by-scenario">
                <DiySectionHeader number="03" title="Timeline Breakdown by Scenario" />
                <p className="mb-6 font-body text-lg text-steel">
                  Based on our experience handling hundreds of{" "}
                  <DiyInternalLink href={CASE_STUDIES_PATH}>reputation management cases</DiyInternalLink> across
                  individuals and businesses, here is a realistic timeline breakdown by scenario severity. Select a
                  timeline:
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {TIMELINE_SCENARIOS.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setScenarioId(s.id)}
                      className={cn(
                        "ha-pill rounded-full px-4 py-2 font-body text-sm font-semibold transition-colors",
                        scenarioId === s.id
                          ? "bg-navy text-white"
                          : "bg-slate-100 text-navy hover:bg-slate-200",
                      )}
                    >
                      {s.timeline}
                    </button>
                  ))}
                </div>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-navy px-5 py-4 text-white">
                    <p className="font-heading text-xl font-bold">{scenario.timeline}</p>
                    <span className="font-heading text-sm font-semibold text-green">{scenario.recoveryLabel}</span>
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className="font-body text-base leading-relaxed text-steel">{scenario.intro}</p>
                    <ul className="mt-8 space-y-8">
                      {scenario.cases.map((item) => (
                        <li key={item.title}>
                          <h3 className="font-heading text-base font-bold text-navy sm:text-lg">
                            {item.title}
                          </h3>
                          <p className="mt-2 font-body text-base leading-relaxed text-steel">{item.body}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <DiyKeyBox variant="warning" title="Timing is everything">
                  The single biggest lever you have over your timeline is when you start. Negative content that has
                  been ranking for six months is significantly easier to suppress than content that has spent two
                  years accumulating backlinks and engagement. Every month you wait, the gap widens - and so does the
                  effort required to close it.{" "}
                  <DiyInternalLink href={FREE_RISK_SCAN_PATH}>Run a free scan today</DiyInternalLink> to see exactly
                  where you stand.
                </DiyKeyBox>
              </section>

              <section className="mb-20 scroll-mt-36" id="phases">
                <DiySectionHeader number="04" title="What Happens in Each Phase of Reputation Repair" />
                <p className="mb-6 font-body text-lg text-steel">
                  Understanding the timeline isn&apos;t just about knowing how many months are involved - it&apos;s
                  about knowing what&apos;s happening during those months, and why some phases take longer than others.
                  Here&apos;s how a professional{" "}
                  <DiyInternalLink href={SERVICES_PATH}>online reputation management</DiyInternalLink> engagement
                  typically unfolds:
                </p>
                <StepPicker
                  steps={repairSteps}
                  activeStep={repairPhase}
                  onSelectStep={setRepairPhase}
                  panelId="repairPhaseContent"
                />
                <DiyLeadHighlight className="mt-8">
                  <p>
                    The clients who see results fastest are rarely the ones with the easiest situations - they&apos;re the
                    ones who start early, trust the process, and don&apos;t pause the strategy halfway through.
                  </p>
                </DiyLeadHighlight>
              </section>

              <section className="mb-20 scroll-mt-36" id="diy-vs-professional">
                <DiySectionHeader number="05" title="DIY vs. Professional: How Your Approach Affects Speed" />
                <p className="mb-6 font-body text-lg text-steel">
                  You can manage your own online reputation - and for very simple situations (a single
                  low-authority result, a thin negative review profile) a{" "}
                  <DiyInternalLink href={DIY_REPUTATION_GUIDE_PATH}>DIY approach can make meaningful progress</DiyInternalLink>
                  . What it almost never does is match the speed or depth of a professional campaign.
                </p>
                <ul className="mb-8 space-y-3">
                  {DIY_VS_PRO_POINTS.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 font-body text-base text-steel shadow-sm"
                    >
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-green" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="font-body text-base text-steel">
                  For{" "}
                  <DiyInternalLink href={AUDIENCE_PATH.individuals}>individuals</DiyInternalLink>,{" "}
                  <DiyInternalLink href={AUDIENCE_PATH.doctors}>healthcare professionals</DiyInternalLink>,{" "}
                  <DiyInternalLink href={AUDIENCE_PATH.lawyers}>lawyers</DiyInternalLink>, and{" "}
                  <DiyInternalLink href={AUDIENCE_PATH.financialAdvisors}>financial advisors</DiyInternalLink>{" "}
                  where search results directly affect client decisions, the compounding cost of a slower timeline
                  is almost always greater than professional assistance.
                </p>
              </section>

              <section className="mb-20 scroll-mt-36" id="red-flags">
                <DiySectionHeader number="06" title="Red Flags: Promises You Should Never Believe" />
                <p className="mb-8 font-body text-lg text-steel">
                  The reputation management industry contains operators who make promises they cannot keep. Expand
                  each claim below:
                </p>
                <div className="space-y-4">
                  {RED_FLAGS.map((item) => (
                    <RedFlagAccordion
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      open={!!openAccordion[item.id]}
                      onToggle={toggleAccordion}
                    >
                      <p>{item.body}</p>
                    </RedFlagAccordion>
                  ))}
                </div>
                <DiyKeyBox variant="tip" title="The Reputation360 standard">
                  We explain our approach in plain language before you commit. Our{" "}
                  <DiyInternalLink href={FREE_RISK_SCAN_PATH}>free reputation scan</DiyInternalLink> shows what&apos;s
                  visible, what&apos;s damaging, and a realistic recovery view for your case - including honest
                  timelines. Learn more{" "}
                  <DiyInternalLink href={ABOUT_PATH}>about our firm</DiyInternalLink>.
                </DiyKeyBox>
              </section>

              <section className="mb-20 scroll-mt-36" id="start">
                <span className="diy-section-tag">Next step</span>
                <h2 className="mb-6 font-heading text-3xl font-bold text-navy">Your next steps</h2>
                <p className="mb-6 font-body text-lg text-steel">
                  If you&apos;re dealing with negative search results, a damaged review profile, or a{" "}
                  <DiyInternalLink href={AUDIENCE_PATH.businesses}>business reputation</DiyInternalLink> that
                  doesn&apos;t reflect what you deliver, the most important thing right now is understanding exactly
                  what you&apos;re working with.
                </p>
                <p className="mb-6 font-body text-lg text-steel">
                  The earlier you act, the faster results come - and the lower the overall investment. Negative
                  content ranking for two years is exponentially harder to suppress than content from six months
                  ago. Waiting is always the most expensive option.
                </p>
                <p className="mb-8 font-body text-lg text-steel">
                  Whether you&apos;re an individual who Googled yourself, a{" "}
                  <DiyInternalLink href={AUDIENCE_PATH.executives}>C-suite executive</DiyInternalLink> managing a
                  personal brand, or a business owner watching leads dry up - the path forward starts with a clear
                  picture of your current position.
                </p>
                <BlogGuideCtaPanel />
              </section>

              <div className="mb-16 mt-10 border-t border-slate-200/80 pt-10" id="related">
                <DiyRelatedReading articles={RELATED_ARTICLES} />
              </div>
            </main>

            <aside className="hidden w-56 shrink-0 lg:sticky lg:top-28 lg:flex lg:h-[calc(100dvh-8rem)] lg:max-h-[calc(100dvh-8rem)] lg:min-h-0 lg:flex-col lg:overflow-hidden lg:border-l lg:border-slate-200/80 lg:pl-6 lg:pt-2">
              <ReadingProgressRail pct={readingPct} />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
