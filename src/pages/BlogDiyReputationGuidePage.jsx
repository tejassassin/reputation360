import { useCallback, useEffect, useState } from "react";
import { Check, Clock, Search } from "lucide-react";
import { SeoHead } from "../components/SeoHead.jsx";
import { BlogFurtherReadingSection } from "../components/blog/BlogFurtherReadingSection.jsx";
import { BlogShareSection } from "../components/blog/BlogShareSection.jsx";
import {
  articleAdditionalJsonLdFromInput,
  guideListingToSchemaInput,
  mergeAdditionalJsonLd,
} from "../data/articleSchema.js";
import { faqAdditionalJsonLdFromItems, mapQaFaqs } from "../data/faqPageSchema.js";
import { cn } from "@/lib/utils";
import { FREE_RISK_SCAN_PATH } from "@/constants/freeRiskScan.js";
import { AUDIENCE_PATH } from "@/constants/whoWeServePaths.js";
import { BlogGuideCtaSection } from "@/components/blog/BlogGuideCtaSection.jsx";
import { BLOG_PATHS } from "../data/blogs/blogInternalPaths.js";
import { SUPPRESS_NEGATIVE_GUIDE_PATH } from "../data/blogs/suppressNegativeContentGuide.js";
import {
  DIY_REPUTATION_GUIDE_PATH,
  diyReputationGuideHero,
  diyReputationGuideListing,
  diyReputationGuideMetaDescription,
  diyReputationGuideSeoTitle,
  diyReputationGuideToc,
} from "../data/blogs/diyReputationGuide.js";
import {
  AMPLIFY_PLATFORMS_EXPAND,
  AUDIT_STEPS,
  CONTENT_PLATFORMS_RANKING,
  CONTENT_PLATFORMS_STRATEGY_AVOID,
  CONTENT_PLATFORMS_STRATEGY_DO,
  CONTENT_PLATFORMS_WHY,
  CRISIS_TIERS,
  DIY_CHECKLIST,
  DIY_FAQS,
  DIY_GUIDE_NAV,
  DIY_MISTAKES,
  DIY_MYTHS,
  DIY_SCROLL_SPY_ORDER,
  DIY_TIMELINE_PHASES,
  GBP_STEPS,
  RESULT_CATEGORIES,
  REVIEW_RESPONSE_STEPS,
  SOCIAL_PLATFORMS,
  SUPPRESSION_STEPS,
} from "../data/blogs/diyReputationGuideInteractive.js";
import {
  ChecklistBlock,
  DiyDoAvoidSection,
  DiyAccordion,
  DiyFaqAccordion,
  DiyInternalLink,
  DiyKeyBox,
  DiySectionHeader,
  DiyGuideToc,
  MobileGuideNav,
  ReadingProgressRail,
  StarRating,
  StepPicker,
} from "../components/blog/diy/DiyGuideUi.jsx";
import "../styles/r360-diy-interactive.css";

export default function BlogDiyReputationGuidePage() {
  const [readingPct, setReadingPct] = useState(0);
  const [activeNavId, setActiveNavId] = useState("");
  const [openAccordion, setOpenAccordion] = useState({});
  const [auditStep, setAuditStep] = useState(1);
  const [gbpStep, setGbpStep] = useState(1);
  const [suppressionStep, setSuppressionStep] = useState(1);
  const [reviewStep, setReviewStep] = useState(1);
  const [activeResultCat, setActiveResultCat] = useState("positive");
  const [crisisTier, setCrisisTier] = useState(0);
  const [timelinePhase, setTimelinePhase] = useState(0);
  const [socialTab, setSocialTab] = useState("linkedin");
  const [checklist, setChecklist] = useState(DIY_CHECKLIST.map(() => false));

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
      for (const sid of DIY_SCROLL_SPY_ORDER) {
        const el = document.getElementById(sid);
        if (!el) continue;
        if (y >= el.offsetTop - 160) current = sid;
      }
      setActiveNavId(DIY_GUIDE_NAV.some((g) => g.id === current) ? current : "");
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
    return () => document.documentElement.classList.remove("scroll-smooth");
  }, []);

  const phase = DIY_TIMELINE_PHASES[timelinePhase] ?? DIY_TIMELINE_PHASES[0];
  const crisis = CRISIS_TIERS[crisisTier] ?? CRISIS_TIERS[0];
  const social = SOCIAL_PLATFORMS.find((p) => p.id === socialTab) ?? SOCIAL_PLATFORMS[0];

  return (
    <>
      <SeoHead
        title={diyReputationGuideSeoTitle}
        description={diyReputationGuideMetaDescription}
        canonicalPath={DIY_REPUTATION_GUIDE_PATH}
        ogImage={diyReputationGuideListing.image}
        additionalJsonLd={mergeAdditionalJsonLd(
          faqAdditionalJsonLdFromItems(mapQaFaqs(DIY_FAQS)),
          articleAdditionalJsonLdFromInput(
            guideListingToSchemaInput(
              DIY_REPUTATION_GUIDE_PATH,
              diyReputationGuideListing,
              diyReputationGuideMetaDescription,
            ),
          ),
        )}
      />

      <div className="r360-diy-interactive scroll-smooth pb-1 font-body text-jet antialiased">
        <div className="diy-hero-band" id="intro">
          <span className="diy-hero-badge">{diyReputationGuideHero.badge}</span>
          <h1 className="diy-hero-title">{diyReputationGuideHero.title}</h1>
          <p className="diy-hero-lead">{diyReputationGuideHero.lead}</p>
          <div className="diy-meta-grid">
            {diyReputationGuideHero.meta.map((item) => (
              <div key={item.label}>
                <div className="diy-meta-value">{item.value}</div>
                <div className="diy-meta-label">{item.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-8 flex items-center justify-center gap-2 font-body text-sm text-steel">
            <Clock className="h-4 w-4 text-navy" aria-hidden />
            {diyReputationGuideListing.readTime} read
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
              <h3 className="mb-4 font-heading text-xs font-bold tracking-widest text-steel uppercase">
                Guide Index
              </h3>
              <nav className="flex flex-col gap-1 text-sm text-steel" aria-label="Guide index">
                {DIY_GUIDE_NAV.map(({ id, label }) => (
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
              <MobileGuideNav nav={DIY_GUIDE_NAV} activeNavId={activeNavId} readingPct={readingPct} />

              <DiyGuideToc items={diyReputationGuideToc} />

              <section className="mb-20 scroll-mt-36" id="audit">
                <DiySectionHeader number="01" title="Conduct a Complete Online Reputation Audit" />
                <p className="mb-8 font-body text-lg text-steel">
                  Before you can fix your reputation, you need to understand what exists. A thorough audit
                  reveals what people see when they search for you and establishes a baseline for improvement. You
                  can also run a{" "}
                  <DiyInternalLink href={FREE_RISK_SCAN_PATH}>free reputation scan</DiyInternalLink> to see exactly
                  what&apos;s ranking for your name right now.
                </p>

                <h3 className="mb-4 flex items-center gap-2 font-heading text-xl font-bold text-slate">
                  <Search className="h-6 w-6 shrink-0" aria-hidden />
                  Step 1: Google yourself (properly)
                </h3>
                <StepPicker
                  steps={AUDIT_STEPS}
                  activeStep={auditStep}
                  onSelectStep={setAuditStep}
                  panelId="auditStepContent"
                />

                <h3 className="mb-4 mt-10 font-heading text-xl font-bold text-slate">Step 3: Analyze your results</h3>
                <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {RESULT_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setActiveResultCat(cat.id)}
                      className={cn(
                        "rounded-2xl border-2 p-4 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/40",
                        activeResultCat === cat.id
                          ? cn(cat.color, "shadow-md ring-2 ring-green/30")
                          : "border-slate-200 bg-white hover:border-navy/25",
                      )}
                    >
                      <p className="font-heading text-lg font-bold text-navy">{cat.label}</p>
                      <p className="mt-1 font-body text-xs text-steel">{cat.desc}</p>
                    </button>
                  ))}
                </div>

                <DiyKeyBox variant="insight" title="Critical finding from our data">
                  88% of consumers trust online information about a person or business as much as personal
                  recommendations.
                </DiyKeyBox>
              </section>

              <section className="mb-20 scroll-mt-36" id="google">
                <DiySectionHeader number="02" title="Master Google Search Results Management" />
                <p className="mb-8 font-body text-lg text-steel">
                  Google is where your reputation is decided. Focus on the top 10 results - 90% of people never
                  scroll past page 1.
                </p>

                <h3 className="mb-4 font-heading text-xl font-bold text-slate">Claim and optimize Google Business Profile</h3>
                <StepPicker
                  steps={GBP_STEPS}
                  activeStep={gbpStep}
                  onSelectStep={setGbpStep}
                  panelId="gbpStepContent"
                />

                <h3 className="mb-4 mt-10 font-heading text-xl font-bold text-slate">
                  Content Platforms That Rank Well
                </h3>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {CONTENT_PLATFORMS_RANKING.map((p) => (
                    <div
                      key={p.id}
                      className="rounded-2xl border border-slate-200 bg-white p-5"
                    >
                      <p className="font-heading font-bold text-navy">{p.name}</p>
                      <p className="mt-2">
                        <StarRating count={p.stars} />
                      </p>
                      <p className="mt-2 font-body text-xs text-steel">Effort: {p.effort}</p>
                      <p className="mt-2 font-body text-sm text-steel">
                        <strong className="text-navy">Best for:</strong> {p.bestFor}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="my-8 max-w-3xl">
                  <h3 className="mb-4 font-heading text-lg font-bold text-navy">
                    Why Platform Choice Matters
                  </h3>
                  <div className="space-y-4 font-body text-base leading-relaxed text-steel">
                    {CONTENT_PLATFORMS_WHY.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                <div className="my-8">
                  <h3 className="mb-4 font-heading text-lg font-bold text-navy">
                    Strategy for Maximum Impact
                  </h3>
                  <DiyDoAvoidSection
                    doItems={CONTENT_PLATFORMS_STRATEGY_DO}
                    avoidItems={CONTENT_PLATFORMS_STRATEGY_AVOID}
                  />
                </div>

                <p className="mb-6 font-body text-base leading-relaxed text-steel">
                  When it comes to pushing negative results off page 1, content volume alone isn&apos;t enough - you
                  need a deliberate suppression strategy. For a complete breakdown of how this works, read our{" "}
                  <DiyInternalLink href={SUPPRESS_NEGATIVE_GUIDE_PATH}>
                    Professional&apos;s Guide to Suppressing Negative Content
                  </DiyInternalLink>
                  .
                </p>

                <h3 className="mb-4 mt-10 font-heading text-xl font-bold text-slate">
                  Content strategy for reputation suppression
                </h3>
                <StepPicker
                  steps={SUPPRESSION_STEPS}
                  activeStep={suppressionStep}
                  onSelectStep={setSuppressionStep}
                  panelId="suppressionStepContent"
                />
              </section>

              <section className="mb-20 scroll-mt-36" id="positive">
                <DiySectionHeader number="03" title="Create and Amplify Positive Content" />
                <p className="mb-8 font-body text-lg text-steel">
                  You control your narrative. Positive content creation is the foundation of sustainable reputation
                  management.
                </p>

                <h3 className="mb-4 font-heading text-xl font-bold text-slate">
                  {AMPLIFY_PLATFORMS_EXPAND.heading}
                </h3>
                <p className="mb-4 font-body text-base leading-relaxed text-steel">
                  {AMPLIFY_PLATFORMS_EXPAND.lead}
                </p>
                <p className="mb-4 font-body text-base font-semibold text-navy">
                  {AMPLIFY_PLATFORMS_EXPAND.listIntro}
                </p>
                <ul className="mb-6 flex flex-wrap gap-2">
                  {AMPLIFY_PLATFORMS_EXPAND.platforms.map((platform) => (
                    <li
                      key={platform}
                      className="rounded-full border border-slate-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-navy shadow-sm"
                    >
                      {platform}
                    </li>
                  ))}
                </ul>
                <p className="mb-10 font-body text-base leading-relaxed text-steel">
                  {AMPLIFY_PLATFORMS_EXPAND.closing}
                </p>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                  {[
                    { pct: "80%", label: "Valuable, educational content", w: "w-4/5" },
                    { pct: "15%", label: "Community engagement", w: "w-3/5" },
                    { pct: "5%", label: "Direct promotional CTA", w: "w-1/5" },
                  ].map((card) => (
                    <div
                      key={card.pct}
                      className="group cursor-default rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green/40 hover:shadow-lg motion-reduce:transform-none md:p-8"
                    >
                      <div className="mb-5 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                        <div
                          className={cn(
                            "h-full bg-green transition-all duration-300 group-hover:bg-navy",
                            card.w,
                          )}
                        />
                      </div>
                      <div className="mb-1 font-heading text-3xl font-extrabold text-navy">{card.pct}</div>
                      <p className="font-body text-sm text-steel">{card.label}</p>
                    </div>
                  ))}
                </div>
                <DiyKeyBox variant="tip" title="The 30-day content challenge">
                  Publish one piece per week across 2-3 platforms. By day 30 you will have multiple positive URLs
                  competing for page 1.
                </DiyKeyBox>
              </section>

              <section className="mb-20 scroll-mt-36" id="review">
                <DiySectionHeader number="04" title="Take Control of Your Reviews & Ratings" />
                <p className="mb-6 font-body text-lg text-steel">
                  <strong>The math:</strong> One 1-star review can be offset by 8-10 authentic five-star reviews. Your
                  public response matters as much as the rating.
                </p>
                <h3 className="mb-4 font-heading text-xl font-bold text-slate">The 3-step response formula</h3>
                <StepPicker
                  steps={REVIEW_RESPONSE_STEPS}
                  activeStep={reviewStep}
                  onSelectStep={setReviewStep}
                  panelId="reviewStepContent"
                />
                <p className="mt-8 font-body text-base leading-relaxed text-steel">
                  See how we&apos;ve handled targeted review attacks and coordinated campaigns in{" "}
                  <DiyInternalLink href="/case-studies">our case studies</DiyInternalLink> - including a{" "}
                  <DiyInternalLink href="/case-studies/the-review-that-almost-ended-the-surgeons-career">
                    surgeon whose practice was nearly destroyed by a single complaint
                  </DiyInternalLink>
                  , and a{" "}
                  <DiyInternalLink href="/case-studies/the-family-lawyer-and-the-client-vendetta">
                    family lawyer targeted by a former client
                  </DiyInternalLink>
                  .
                </p>
              </section>

              <section className="mb-20 scroll-mt-36" id="social">
                <DiySectionHeader number="05" title="Optimize Your Social Media Presence" />
                <div className="mb-6 flex flex-wrap gap-2">
                  {SOCIAL_PLATFORMS.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSocialTab(p.id)}
                      className={cn(
                        "rounded-full px-5 py-2 font-heading text-sm font-semibold transition-all",
                        socialTab === p.id
                          ? "bg-navy text-white shadow-md"
                          : "bg-white text-navy ring-1 ring-slate-200 hover:ring-navy/30",
                      )}
                    >
                      {p.title}
                    </button>
                  ))}
                </div>
                <div
                  key={socialTab}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
                >
                  <h3 className="mb-4 font-heading text-xl font-bold text-navy">{social.title}</h3>
                  <ul className="space-y-3 pl-0">
                    {social.tips.map((tip) => (
                      <li key={tip} className="flex items-start gap-3 font-body text-steel">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-green" aria-hidden />
                        {tip}
                      </li>
                    ))}
                  </ul>
                  {socialTab === "linkedin" && (
                    <p className="mt-6 border-t border-slate-100 pt-6 font-body text-base leading-relaxed text-steel">
                      Maintaining a strong, consistent presence across multiple platforms takes real discipline. If
                      you&apos;d rather have experts handle your digital footprint while you focus on your work,
                      explore our{" "}
                      <DiyInternalLink href={AUDIENCE_PATH.individuals}>
                        Personal Reputation Management Services
                      </DiyInternalLink>
                      .
                    </p>
                  )}
                </div>
              </section>

              <section className="mb-20 scroll-mt-36" id="monitor">
                <DiySectionHeader number="06" title="Implement Continuous Reputation Monitoring" />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {[
                    {
                      t: "Google Alerts",
                      d: "Free email alerts when your name appears online.",
                      href: BLOG_PATHS.monitoring,
                    },
                    { t: "Search Console", d: "Track queries and rankings for your site." },
                    { t: "Review tools", d: "Mention, Brand24, or Hootsuite for cross-platform mentions." },
                    { t: "Native analytics", d: "LinkedIn, Instagram, and X analytics for engagement." },
                  ].map((card, i) => (
                    <div
                      key={card.t}
                      className={cn(
                        "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green/40 hover:shadow-md motion-reduce:hover:translate-y-0",
                        "motion-safe:animate-[r360-card-rise_0.55s_ease-out_both]",
                      )}
                      style={{ animationDelay: `${i * 90}ms` }}
                    >
                      <h3 className="mb-2 font-heading font-bold text-navy">
                        {card.href ? (
                          <DiyInternalLink href={card.href}>{card.t}</DiyInternalLink>
                        ) : (
                          card.t
                        )}
                      </h3>
                      <p className="font-body text-sm text-steel">{card.d}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-20 scroll-mt-36" id="crisis">
                <DiySectionHeader number="07" title="Respond to Negative Content Strategically" />
                <p className="mb-6 font-body text-lg text-steel">
                  Take 24 hours before responding. Then assess severity and choose the right playbook.
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {CRISIS_TIERS.map((tier, i) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setCrisisTier(i)}
                      className={cn(
                        "rounded-2xl border p-5 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/40",
                        crisisTier === i
                          ? "border-navy bg-navy text-white shadow-lg ring-2 ring-green/40"
                          : "border-slate-200 bg-white hover:border-navy/25 hover:bg-slate-50",
                      )}
                    >
                      <p className={cn("font-heading text-sm font-bold", crisisTier === i ? "text-white" : "text-navy")}>
                        {tier.label}
                      </p>
                      <p className={cn("mt-2 text-xs", crisisTier === i ? "text-white/85" : "text-steel")}>
                        {tier.summary}
                      </p>
                    </button>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-inner md:p-6">
                  <p className="font-heading text-sm font-bold text-navy">{crisis.label}</p>
                  <p className="mt-2 font-body text-sm leading-relaxed text-steel">{crisis.detail}</p>
                </div>
                <p className="mt-6 font-body text-base leading-relaxed text-steel">
                  Every situation is different - what works for a low-tier forum post will fail against coordinated
                  defamation. Browse{" "}
                  <DiyInternalLink href="/case-studies">see real examples</DiyInternalLink> of how we&apos;ve
                  navigated reputation crises across industries, from executives facing boardroom leaks to doctors
                  dealing with media coverage of patient complaints.
                </p>
                <div className="mt-8 space-y-4">
                  {DIY_MISTAKES.map((m) => (
                    <DiyAccordion
                      key={m.id}
                      id={m.id}
                      title={m.title}
                      open={!!openAccordion[m.id]}
                      onToggle={toggleAccordion}
                      variant="mistake"
                    >
                      <p>{m.body}</p>
                    </DiyAccordion>
                  ))}
                </div>
              </section>

              <section className="mb-20 scroll-mt-36" id="advanced">
                <DiySectionHeader number="08" title="Advanced Suppression & Link Building Tactics" />
                <p className="mb-6 font-body text-lg text-steel">
                  When negative URLs will not budge, a structured{" "}
                  <DiyInternalLink href={BLOG_PATHS.suppressFramework}>
                    suppress negative results
                  </DiyInternalLink>{" "}
                  plan combines content, profiles, and links to push them off page one.
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {DIY_TIMELINE_PHASES.map((p, i) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setTimelinePhase(i)}
                      className={cn(
                        "rounded-2xl border p-5 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/40",
                        timelinePhase === i
                          ? "border-navy bg-navy text-white shadow-lg ring-2 ring-green/40"
                          : "border-slate-200 bg-white hover:border-navy/25 hover:bg-slate-50",
                      )}
                    >
                      <div className={cn("mb-1 font-heading font-bold", timelinePhase === i ? "text-white" : "text-navy")}>
                        {p.range}
                      </div>
                      <p className={cn("text-xs", timelinePhase === i ? "text-white/85" : "text-steel")}>{p.summary}</p>
                      <p className="mt-3 text-[11px] font-semibold text-green">
                        {timelinePhase === i ? "Showing details below" : "Click for details"}
                      </p>
                    </button>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-inner md:p-6">
                  <p className="font-heading text-sm font-bold text-navy">{phase.range}</p>
                  <p className="mt-2 font-body text-sm leading-relaxed text-steel">{phase.detail}</p>
                  {timelinePhase === 1 && (
                    <p className="mt-4 font-body text-sm leading-relaxed text-steel">
                      This phase is where most DIY efforts either gain momentum or stall. For a detailed breakdown
                      of what effective suppression content looks like - and how to build links that actually move
                      the needle - read{" "}
                      <DiyInternalLink href={SUPPRESS_NEGATIVE_GUIDE_PATH}>
                        The Professional&apos;s Guide to Suppressing Negative Content
                      </DiyInternalLink>
                      .
                    </p>
                  )}
                  {timelinePhase === 3 && (
                    <p className="mt-4 font-body text-sm leading-relaxed text-steel">
                      By month 6, you should be seeing meaningful movement. If progress is slower than expected - or if
                      the negative content is particularly entrenched - this is the point where{" "}
                      <DiyInternalLink href="/services">professional suppression support</DiyInternalLink> can
                      dramatically accelerate your timeline.
                    </p>
                  )}
                </div>
              </section>

              <section className="mb-20 scroll-mt-36" id="myths">
                <span className="diy-section-tag">Bonus</span>
                <h2 className="mb-6 font-heading text-3xl font-bold text-navy">DIY myths vs. reality</h2>
                <p className="mb-6 font-body text-steel">Expand each myth to see what actually works.</p>
                <div className="space-y-4">
                  {DIY_MYTHS.map((m) => (
                    <DiyAccordion key={m.id} id={m.id} title={m.title} open={!!openAccordion[m.id]} onToggle={toggleAccordion}>
                      <p>{m.body}</p>
                    </DiyAccordion>
                  ))}
                </div>
              </section>

              <section className="mb-20 scroll-mt-36" id="checklist">
                <ChecklistBlock
                  title="Monthly reputation checklist"
                  subtitle="Self-evaluate each month. If you miss more than two items, prioritize fixes before publishing more content."
                  items={DIY_CHECKLIST}
                  checked={checklist}
                  onToggle={(i) =>
                    setChecklist((prev) => {
                      const next = [...prev];
                      next[i] = !next[i];
                      return next;
                    })
                  }
                />
              </section>

              <BlogGuideCtaSection
                sectionTitle="Start Managing Your Online Reputation Today"
                sectionLead="Start with a free scan to see what ranks for your name, or book a consultation for a personalized plan."
              />

              <section className="mb-20 scroll-mt-36" id="faq">
                <h2 className="mb-8 font-heading text-3xl font-bold text-navy">FAQ</h2>
                <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                  {DIY_FAQS.map((f) => (
                    <DiyFaqAccordion
                      key={f.id}
                      id={f.id}
                      title={f.q}
                      open={!!openAccordion[f.id]}
                      onToggle={toggleAccordion}
                    >
                      <p>{f.a}</p>
                    </DiyFaqAccordion>
                  ))}
                </div>
              </section>

              <BlogShareSection
                title={diyReputationGuideListing.title}
                canonicalPath={DIY_REPUTATION_GUIDE_PATH}
                className="mb-10"
              />

              <BlogFurtherReadingSection blogPath={DIY_REPUTATION_GUIDE_PATH} className="mb-10" />
            </main>

            <aside className="hidden w-56 shrink-0 lg:sticky lg:top-28 lg:flex lg:h-[calc(100dvh-8rem)] lg:max-h-[calc(100dvh-8rem)] lg:min-h-0 lg:flex-col lg:overflow-hidden lg:border-l lg:border-slate-200/80 lg:pl-6 lg:pt-2">
              <ReadingProgressRail pct={readingPct} />
            </aside>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes r360-card-rise {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
