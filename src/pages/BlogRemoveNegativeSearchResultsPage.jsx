import { useCallback, useEffect, useState } from "react";
import { ArrowRight, Check, Clock, Lock, Search, ShieldAlert, TrendingUp } from "lucide-react";
import { SeoHead } from "../components/SeoHead.jsx";
import { cn } from "@/lib/utils";
import { calendlyCtaButtonClass } from "@/constants/scheduling";
import { FREE_RISK_SCAN_PATH } from "@/constants/freeRiskScan.js";
import { ConsultationCtas } from "@/components/ConsultationCtas";
import { DiyInternalLink } from "@/components/blog/diy/DiyGuideUi.jsx";
import { DIY_REPUTATION_GUIDE_PATH } from "../data/blogs/diyReputationGuide.js";
import { SUPPRESS_NEGATIVE_GUIDE_PATH } from "../data/blogs/suppressNegativeContentGuide.js";
import {
  REMOVE_NEGATIVE_SEARCH_RESULTS_PATH,
  removeNegativeSearchResultsHero,
  removeNegativeSearchResultsListing,
  removeNegativeSearchResultsMetaDescription,
  removeNegativeSearchResultsToc,
} from "../data/blogs/removeNegativeSearchResultsGuide.js";
import {
  EXPERT_SIGNALS,
  GUIDE_NAV,
  HERO_STATS,
  MONITORING_CHECKLIST,
  NEGATIVE_CONTENT_TYPES,
  RELATED_ARTICLES,
  REMOVAL_PATH_ACCORDIONS,
  REMOVAL_STEPS,
  SCROLL_SPY_ORDER,
  SUPPRESSION_TACTICS,
} from "../data/blogs/removeNegativeSearchResultsInteractive.js";
import {
  ChecklistBlock,
  DiyAccordion,
  DiyKeyBox,
  DiyRelatedReading,
  DiySectionHeader,
  MobileGuideNav,
  ReadingProgressRail,
  StepPicker,
} from "../components/blog/diy/DiyGuideUi.jsx";
import "../styles/r360-diy-interactive.css";

const SERVICES_PATH = "/services";

function PathAccordion({ id, title, children, open, onToggle }) {
  return (
    <DiyAccordion id={id} title={title} open={open} onToggle={onToggle}>
      {children}
    </DiyAccordion>
  );
}

export default function BlogRemoveNegativeSearchResultsPage() {
  const [readingPct, setReadingPct] = useState(0);
  const [activeNavId, setActiveNavId] = useState("");
  const [openAccordion, setOpenAccordion] = useState({});
  const [removalStep, setRemovalStep] = useState(1);
  const [contentTypeId, setContentTypeId] = useState(NEGATIVE_CONTENT_TYPES[0].id);
  const [suppressionTacticId, setSuppressionTacticId] = useState(SUPPRESSION_TACTICS[0].id);
  const [monitoringChecklist, setMonitoringChecklist] = useState(
    MONITORING_CHECKLIST.map(() => false),
  );

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

  const contentType =
    NEGATIVE_CONTENT_TYPES.find((t) => t.id === contentTypeId) ?? NEGATIVE_CONTENT_TYPES[0];
  const suppressionTactic =
    SUPPRESSION_TACTICS.find((t) => t.id === suppressionTacticId) ?? SUPPRESSION_TACTICS[0];

  return (
    <>
      <SeoHead
        title="How to Remove or Suppress Negative Search Results from Google | Reputation360"
        description={removeNegativeSearchResultsMetaDescription}
        canonicalPath={REMOVE_NEGATIVE_SEARCH_RESULTS_PATH}
        ogImage={removeNegativeSearchResultsListing.image}
      />

      <div className="r360-diy-interactive scroll-smooth pb-1 font-body text-jet antialiased">
        <div className="diy-hero-band" id="intro">
          <span className="diy-hero-badge">{removeNegativeSearchResultsHero.badge}</span>
          <h1 className="diy-hero-title">{removeNegativeSearchResultsHero.title}</h1>
          <p className="diy-hero-lead">{removeNegativeSearchResultsHero.lead}</p>
          <div className="diy-meta-grid">
            {removeNegativeSearchResultsHero.meta.map((item) => (
              <div key={item.label}>
                <div className="diy-meta-value">{item.value}</div>
                <div className="diy-meta-label">{item.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-8 flex items-center justify-center gap-2 font-body text-sm text-steel">
            <Clock className="h-4 w-4 text-navy" aria-hidden />
            {removeNegativeSearchResultsListing.readTime} read
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
                  You Google yourself - and there it is. A damaging article. A scathing review. An
                  outdated news story. Whatever it is, it&apos;s sitting on page one, and it&apos;s costing you
                  clients, credibility, and opportunities every single day.
                </p>
                <p className="mb-6">
                  The question most people ask is: <em>Can I remove it?</em> Sometimes yes - but not
                  always. The more powerful question is: <em>Can I control what people see when they search for me?</em>{" "}
                  That answer is almost always <strong>yes</strong>.
                </p>
                <p>
                  In this guide, we walk through strategies used by{" "}
                  <DiyInternalLink href={SERVICES_PATH}>reputation management professionals</DiyInternalLink>{" "}
                  to remove negative search results from Google where possible - and suppress the ones that
                  can&apos;t be removed, pushing them off page one where they&apos;re unlikely to be seen.
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

              <nav className="diy-toc-numbered scroll-mt-28" aria-label="In this article">
                <h2>In This Article</h2>
                <ul className="diy-toc-numbered-list">
                  {removeNegativeSearchResultsToc.map((item) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>

              <section className="mb-20 scroll-mt-36" id="understand">
                <DiySectionHeader number="01" title="Understanding What You're Up Against" />
                <p className="mb-6 font-body text-lg text-steel">
                  Before you can clean up your Google search results, you need to understand why damaging
                  content ranks in the first place. Google doesn&apos;t decide what&apos;s good or bad - it ranks
                  content based on relevance, authority, and engagement. A negative article on a high-authority
                  news site will almost always outrank a weak company homepage.
                </p>
                <p className="mb-6 font-body text-base text-steel">
                  Select a content type below to see how it typically affects search:
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {NEGATIVE_CONTENT_TYPES.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setContentTypeId(t.id)}
                      className={cn(
                        "ha-pill rounded-full px-4 py-2 font-body text-sm font-semibold transition-colors",
                        contentTypeId === t.id
                          ? "bg-navy text-white"
                          : "bg-slate-100 text-navy hover:bg-slate-200",
                      )}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="font-heading text-sm font-bold tracking-wide text-navy uppercase">
                    {contentType.label}
                  </p>
                  <p className="mt-2 font-body text-base leading-relaxed text-steel">{contentType.detail}</p>
                </div>
                <DiyKeyBox variant="insight" title="Key insight">
                  Not all negative content can be deleted. But nearly all of it can be strategically
                  suppressed. The goal of{" "}
                  <DiyInternalLink href={SERVICES_PATH}>online reputation management</DiyInternalLink> is to
                  ensure positive, accurate content dominates page one - so harmful content becomes virtually
                  invisible.
                </DiyKeyBox>
              </section>

              <section className="mb-20 scroll-mt-36" id="can-you-remove">
                <DiySectionHeader number="02" title="Can You Actually Remove Content from Google?" />
                <p className="mb-8 font-body text-lg text-steel">
                  This is the most common question we hear. The honest answer: it depends on where the content
                  lives and why it exists. Expand each path below:
                </p>
                <div className="space-y-4">
                  {REMOVAL_PATH_ACCORDIONS.map((item) => (
                    <PathAccordion
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      open={!!openAccordion[item.id]}
                      onToggle={toggleAccordion}
                    >
                      <p>{item.body}</p>
                    </PathAccordion>
                  ))}
                </div>
                <p className="mt-8 font-body text-base leading-relaxed text-steel">
                  In our experience,{" "}
                  <DiyInternalLink href={SUPPRESS_NEGATIVE_GUIDE_PATH}>
                    negative content suppression
                  </DiyInternalLink>{" "}
                  is frequently the faster and more reliable path - often producing movement in 60-120 days.
                </p>
              </section>

              <section className="mb-20 scroll-mt-36" id="removal-tactics">
                <DiySectionHeader number="03" title="Step-by-Step: Removal Tactics That Work" />
                <p className="mb-6 font-body text-lg text-steel">
                  If you want to attempt removal before suppression, pursue these channels in order of likelihood
                  of success:
                </p>
                <StepPicker
                  steps={REMOVAL_STEPS}
                  activeStep={removalStep}
                  onSelectStep={setRemovalStep}
                  panelId="removalStepContent"
                />
                <DiyKeyBox variant="warning" title="Important">
                  Avoid third-party services that guarantee removal from complaint sites - many are scams and can
                  amplify the problem. Work with a{" "}
                  <DiyInternalLink href={SERVICES_PATH}>reputable online reputation management firm</DiyInternalLink>{" "}
                  that discloses its methods upfront.
                </DiyKeyBox>
                <p className="mt-6 font-body text-base text-steel">
                  For fake Google reviews, see our{" "}
                  <DiyInternalLink href={`${DIY_REPUTATION_GUIDE_PATH}#review`}>
                    DIY guide section on reviews & ratings
                  </DiyInternalLink>{" "}
                  for a practical walkthrough.
                </p>
              </section>

              <section className="mb-20 scroll-mt-36" id="suppression">
                <DiySectionHeader number="04" title="Suppression: Pushing Negative Results Down" />
                <p className="mb-6 font-body text-lg text-steel">
                  When removal isn&apos;t possible - or while removal is in progress -{" "}
                  <DiyInternalLink href={SUPPRESS_NEGATIVE_GUIDE_PATH}>
                    <strong>negative search result suppression</strong>
                  </DiyInternalLink>{" "}
                  is the most effective long-term strategy. Fewer than 1% of people click to page two, so content
                  off page one effectively disappears from public view.
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {SUPPRESSION_TACTICS.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setSuppressionTacticId(t.id)}
                      className={cn(
                        "rounded-xl border px-4 py-3 text-left font-body text-sm font-semibold transition-all",
                        suppressionTacticId === t.id
                          ? "border-navy bg-navy/5 text-navy ring-2 ring-green/30"
                          : "border-slate-200 bg-white text-steel hover:border-navy/25",
                      )}
                    >
                      {t.title}
                    </button>
                  ))}
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                  <h3 className="font-heading text-xl font-bold text-navy">{suppressionTactic.title}</h3>
                  <p className="mt-3 font-body text-base leading-relaxed text-steel">{suppressionTactic.body}</p>
                </div>
                <blockquote className="diy-pull-quote mt-8">
                  <p>
                    &quot;Suppression isn&apos;t about hiding the truth - it&apos;s about ensuring the complete picture
                    of who you are gets seen. One bad article shouldn&apos;t permanently define you in search
                    results.&quot;
                  </p>
                </blockquote>
                <p className="mt-6 font-body text-base text-steel">
                  For a full professional framework, read{" "}
                  <DiyInternalLink href={SUPPRESS_NEGATIVE_GUIDE_PATH}>
                    How to Suppress Negative Content
                  </DiyInternalLink>
                  . For foundational DIY steps, start with our{" "}
                  <DiyInternalLink href={DIY_REPUTATION_GUIDE_PATH}>DIY reputation management guide</DiyInternalLink>.
                </p>
              </section>

              <section className="mb-20 scroll-mt-36" id="monitoring">
                <DiySectionHeader number="05" title="Monitoring Your Google Search Reputation" />
                <p className="mb-8 font-body text-lg text-steel">
                  Reputation management is ongoing - not a one-time fix. Tap each item as you put it in place:
                </p>
                <ChecklistBlock
                  title="Monitoring checklist"
                  subtitle="The earlier you detect new damaging content, the faster you can respond before it entrenches on page one."
                  items={MONITORING_CHECKLIST}
                  checked={monitoringChecklist}
                  onToggle={(i) =>
                    setMonitoringChecklist((prev) => {
                      const next = [...prev];
                      next[i] = !next[i];
                      return next;
                    })
                  }
                />
                <p className="mt-8 font-body text-base text-steel">
                  Start with a{" "}
                  <DiyInternalLink href={FREE_RISK_SCAN_PATH}>free reputation scan</DiyInternalLink> to see what
                  currently ranks for your name.
                </p>
              </section>

              <section className="mb-20 scroll-mt-36" id="professional">
                <DiySectionHeader number="06" title="When to Bring in a Reputation Management Expert" />
                <p className="mb-6 font-body text-lg text-steel">
                  DIY approaches work when you catch problems early and already have a strong digital presence.
                  Consider professional help if any of these apply:
                </p>
                <ul className="mb-8 space-y-3">
                  {EXPERT_SIGNALS.map((signal) => (
                    <li
                      key={signal}
                      className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 font-body text-base text-steel shadow-sm"
                    >
                      <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-navy" aria-hidden />
                      {signal}
                    </li>
                  ))}
                </ul>
                <div className="rounded-[2rem] bg-navy p-8 text-white md:p-10">
                  <div className="flex items-start gap-4">
                    <TrendingUp className="h-8 w-8 shrink-0 text-green" aria-hidden />
                    <p className="font-body text-lg leading-relaxed text-slate-200">
                      With seven years of hands-on experience, Reputation360 combines technical SEO with proven{" "}
                      <DiyInternalLink href={SUPPRESS_NEGATIVE_GUIDE_PATH}>suppression methodology</DiyInternalLink>
                      . We assess your landscape, build a tailored strategy, execute with precision, and monitor
                      until your search presence reflects who you truly are.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-20 scroll-mt-36" id="start">
                <span className="diy-section-tag">Next step</span>
                <h2 className="mb-6 font-heading text-3xl font-bold text-navy">
                  Ready to clean up your Google search results?
                </h2>
                <p className="mb-8 font-body text-lg text-steel">
                  Get a free, no-obligation view of your current search presence. We&apos;ll identify what&apos;s
                  working against you - and practical next steps to fix it.
                </p>
                <div className="rounded-3xl bg-[linear-gradient(120deg,#08284f,#0f3f73)] px-6 py-10 text-center text-white shadow-lg md:px-12 md:py-12">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                    <Search className="h-6 w-6 text-green" aria-hidden />
                  </div>
                  <h3 className="mb-3 font-heading text-2xl font-bold text-white sm:text-3xl">
                    Get your free reputation audit
                  </h3>
                  <p className="mx-auto mb-6 max-w-xl font-body text-sm text-white/85 sm:text-base">
                    Book a consultation or run a scan - whichever fits your timeline.
                  </p>
                  <ConsultationCtas
                    variant="onDark"
                    consultLabel="Book a Free Consultation"
                    consultSuffix={<ArrowRight className="h-4 w-4 shrink-0" aria-hidden />}
                    wrapperClassName="justify-center"
                    consultClassName={cn(
                      "ha-pill inline-flex w-full max-w-md items-center justify-center gap-2 rounded-xl px-8 py-3.5 font-heading text-sm font-bold shadow-lg shadow-cta-consult/30 transition hover:brightness-95 sm:w-auto md:px-10 md:text-base",
                      calendlyCtaButtonClass,
                    )}
                    freeScanClassName="ha-pill inline-flex w-full max-w-md items-center justify-center rounded-xl border-2 border-white/35 bg-white/10 px-8 py-3.5 font-heading text-sm font-bold text-white backdrop-blur-sm transition hover:border-white/55 hover:bg-white/15 sm:w-auto md:px-10 md:text-base"
                  />
                  <p className="mt-5 flex items-center justify-center gap-2 font-body text-xs font-medium text-white/85 sm:text-sm">
                    <Lock className="h-3 w-3 text-green" aria-hidden />
                    Confidential
                  </p>
                </div>
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
