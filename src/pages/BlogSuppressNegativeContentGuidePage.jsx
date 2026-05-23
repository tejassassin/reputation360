import { Fragment, useCallback, useEffect, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  Clock,
  Link2,
  ListChecks,
  Lock,
  Minus,
  Plus,
  Stethoscope,
  Wallet,
  Scale,
  Briefcase,
  TrendingDown,
} from "lucide-react";
import { SeoHead } from "../components/SeoHead.jsx";
import { cn } from "@/lib/utils";
import { calendlyCtaButtonClass } from "@/constants/scheduling";
import { ConsultationCtas } from "@/components/ConsultationCtas";
import { DiyInternalLink, DiyLeadHighlight } from "@/components/blog/diy/DiyGuideUi.jsx";
import { BLOG_INDEX_PATH } from "@/constants/blogPaths.js";
import { AUDIENCE_PATH, WHO_WE_SERVE_HUB_PATH } from "@/constants/whoWeServePaths.js";
import { DIY_REPUTATION_GUIDE_PATH } from "../data/blogs/diyReputationGuide.js";
import {
  SUPPRESS_NEGATIVE_GUIDE_PATH,
  suppressNegativeGuideHero,
  suppressNegativeGuideListing,
  suppressNegativeGuideMetaDescription,
  suppressNegativeGuideSeoTitle,
} from "../data/blogs/suppressNegativeContentGuide.js";
import "../styles/r360-diy-interactive.css";

const GUIDE_NAV = [
  { id: "intro", label: "Introduction" },
  { id: "silent-crisis", label: "The Silent Crisis" },
  { id: "stakes", label: "The Stakes" },
  { id: "impact", label: "The Cost of Ignoring" },
  { id: "permanence", label: "Why it Sticks" },
  { id: "myths", label: "Myths & Realities" },
  { id: "works", label: "What Actually Works" },
  { id: "framework", label: "5-Step Framework" },
  { id: "scenarios", label: "Case Scenarios" },
  { id: "timeline", label: "Timeline Expectations" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "checklist", label: "Safety Checklist" },
  { id: "faq", label: "FAQ" },
];

const SCROLL_SPY_ORDER = [
  "intro",
  "silent-crisis",
  "stakes",
  "impact",
  "permanence",
  "myths",
  "works",
  "framework",
  "scenarios",
  "timeline",
  "mistakes",
  "checklist",
  "2026-context",
  "faq",
  "start",
];

const MYTHS = [
  {
    id: "myth-1",
    title: (
      <span className="font-heading text-lg font-bold leading-snug text-charcoal">
        <span className="text-destructive">Myth #1:</span>{" "}
        &quot;Just call Google and ask them to take it down.&quot;
      </span>
    ),
    body: (
      <div className="border-t border-slate-100 pt-4 font-body">
        <p className="mb-2 flex items-center gap-2 font-heading font-bold text-navy">
          <Check className="h-4 w-4 shrink-0 text-green" aria-hidden />
          The Reality:
        </p>
        <p className="text-steel">
          Google almost never removes legal content. Your strategy must focus on <strong>suppression</strong>- pushing
          negative links to page 2 and 3 through authority creation.
        </p>
      </div>
    ),
  },
  {
    id: "myth-2",
    title: (
      <span className="font-heading text-lg font-bold leading-snug text-charcoal">
        <span className="text-destructive">Myth #2:</span>{" "}
        &quot;Sue the person who wrote the review to delete it.&quot;
      </span>
    ),
    body: (
      <div className="border-t border-slate-100 pt-4 font-body">
        <p className="mb-2 flex items-center gap-2 font-heading font-bold text-navy">
          <Check className="h-4 w-4 shrink-0 text-green" aria-hidden />
          The Reality:
        </p>
        <p className="text-steel">
          Legal action often triggers the <strong>Streisand Effect</strong>, bringing even more visibility to the
          negativity. Suppression is quieter, safer, and more permanent.
        </p>
      </div>
    ),
  },
  {
    id: "myth-3",
    title: (
      <span className="font-heading text-lg font-bold leading-snug text-charcoal">
        <span className="text-destructive">Myth #3:</span>{" "}
        &quot;Wait it out. Eventually, it will just go away.&quot;
      </span>
    ),
    body: (
      <div className="border-t border-slate-100 pt-4 font-body">
        <p className="mb-2 flex items-center gap-2 font-heading font-bold text-navy">
          <Check className="h-4 w-4 shrink-0 text-green" aria-hidden />
          The Reality:
        </p>
        <p className="text-steel">
          Negative content on high-authority sites (like news or forums) is &quot;sticky.&quot; Without active
          suppression, it can remain on the first page for over a decade.
        </p>
      </div>
    ),
  },
];

const MISTAKES = [
  {
    id: "mistake-1",
    title: "Mistake #1: Direct Engagement with Hostile Platforms",
    body: 'Replying to an angry review or thread often refreshes the "last updated" date for Google, actually helping that negative link stay at the top. Never "feed the trolls."',
  },
  {
    id: "mistake-2",
    title: "Mistake #2: Using Low-Quality 'Burying' Services",
    body: "Cheap services use bot-generated content. Google's AI can spot this instantly and may penalize your entire digital footprint, making the situation worse.",
  },
  {
    id: "mistake-3",
    title: "Mistake #3: Lack of Domain Diversification",
    body: "Relying only on social media is a risk. You need a mix of owned domains (.com, .org), news citations, and professional profiles to create a robust shield.",
  },
  {
    id: "mistake-4",
    title: "Mistake #4: Abandoning the Process Too Early",
    body: "Suppression is a momentum game. Stopping after 3 months often allows the negative content to spring back up. Long-term authority is the only permanent solution.",
  },
  {
    id: "mistake-5",
    title: "Mistake #5: Not Using Professional Reputation Management Services",
    body: "Attempting to remove negative search results or suppress negative content alone often fails because individuals lack authority-building access. Professional reputation repair services have established relationships with high-authority platforms and understand Google's algorithm nuances that solo attempts miss.",
  },
];

const FAQS = [
  {
    id: "faq-1",
    q: "How long does suppression take?",
    a: "Typical results begin appearing within 90 days. Professional-grade suppression that clears the first page usually requires 6 to 12 months of consistent authority building.",
  },
  {
    id: "faq-2",
    q: "Can the negative content come back?",
    a: "Suppression is a dynamic battle. If the negative content is on a high-authority site (like a major news outlet), you must maintain your positive assets to ensure they remain ranked higher.",
  },
  {
    id: "faq-3",
    q: "Is suppression ethical?",
    a: "Absolutely. Suppression is about ensuring that a single moment or an unfair criticism doesn't define a lifetime of professional achievement. It is about balancing the narrative with your actual contributions.",
  },
  {
    id: "faq-4",
    q: "How long does it actually take to remove negative search results?",
    a: "Timeline depends on the authority of the negative links and your target audience. Pushing down negative search results typically takes 60-90 days for early movement, 6+ months for full first-page clearance. Our case studies show most clients see measurable improvement within 120 days.",
  },
  {
    id: "faq-5",
    q: "What's the difference between reputation repair and reputation management?",
    a: "Reputation repair is crisis-focused - removing or suppressing active negative content. Reputation management is ongoing - monitoring your online presence, building positive assets, and maintaining your professional reputation long-term. Most professionals need both: immediate repair followed by continuous monitoring.",
  },
  {
    id: "faq-6",
    q: "Can you legally suppress or remove negative content from Google?",
    a: "Yes. Suppression (pushing down negative search results through legitimate positive content) is 100% ethical and legal. Removal is legal only when content violates Google's policies (defamatory, illegal, non-consensual intimate content, etc.). We specialize in both: removal where possible, suppression where appropriate.",
  },
  {
    id: "faq-7",
    q: "Is this service different from traditional online reputation management agencies?",
    a: "Most generic online reputation management companies use black-hat tactics or build low-quality content. At Reputation360, our reputation repair services focus on authentic authority - we help executives, doctors, lawyers, and founders build genuine professional narratives that naturally overshadow outdated or unfair content.",
  },
];

const STEPS = [
  {
    n: 1,
    title: "Step 1: Comprehensive Reputation Audit & Negative Link Analysis",
    body: "Map every keyword and search variant that triggers negative content. This audit identifies which negative articles and harmful links are damaging your first-page results. Identify 'Low-Hanging Fruit' sites where your influence is highest. You cannot remove negative content from Google if you haven't fully measured what you're fighting. You cannot solve a problem you haven't fully measured.",
    bullets: (
      <ul className="mt-0 space-y-3 pl-0 font-body">
        <li className="flex items-start gap-3 text-sm text-steel">
          <BarChart3 className="mt-0.5 h-4 w-4 shrink-0 text-navy" aria-hidden />
          Audit all search variants (Name + Company, Name + Review, etc.)
        </li>
        <li className="flex items-start gap-3 text-sm text-steel">
          <Link2 className="mt-0.5 h-4 w-4 shrink-0 text-navy" aria-hidden />
          Catalog the &quot;Authority Score&quot; of negative URLs.
        </li>
        <li className="flex items-start gap-3 text-sm text-steel">
          <ListChecks className="mt-0.5 h-4 w-4 shrink-0 text-navy" aria-hidden />
          Identify reputation monitoring needs to prevent future negative content
        </li>
      </ul>
    ),
    extra: (
      <p className="mt-4 font-body text-sm leading-relaxed text-steel sm:text-base">
        For a structured walkthrough of how to conduct this audit yourself - including which search variants to check
        and how to score each result - see our{" "}
        <DiyInternalLink href={DIY_REPUTATION_GUIDE_PATH}>complete reputation audit guide</DiyInternalLink>.
      </p>
    ),
  },
  {
    n: 2,
    title: "Step 2: Optimize Existing Digital Assets",
    body: 'Turn your LinkedIn, professional bios, and company site into Google-favored "Super Assets" that dominate the top slots. Most professionals have existing profiles that are simply under-optimized for search authority.',
    extra: (
      <DiyLeadHighlight>
        <p>
          Optimization isn&apos;t just about keywords; it&apos;s about building meaningful, interconnected digital
          authority.
        </p>
      </DiyLeadHighlight>
    ),
  },
  {
    n: 3,
    title: "Step 3: Content Creation & Saturation",
    body: 'Produce high-authority articles and multimedia. Google prioritizes "freshness" and "authority"- use this to bury stale negativity. The goal is to flood the first page with content you control.\n\nThis phase of Google reputation management focuses on pushing down negative search results through authority-building.',
    extra: (
      <div className="mt-4 grid grid-cols-2 gap-3 md:gap-4">
        {["Video Interviews", "Industry Whitepapers", "Press Releases", "Podcast Features"].map((t) => (
          <div key={t} className="rounded-xl border border-slate-200 bg-white p-3 text-center text-xs font-bold text-steel">
            {t}
          </div>
        ))}
      </div>
    ),
  },
  {
    n: 4,
    title: "Step 4: Citations and Link Building",
    body: 'Build credibility through backlinks. A profile with 50 quality links will always outrank a blog post with none. Link building provides the "gravity" that keeps your positive content anchored at the top of search results.\n\nAs these reputation repair assets mature, you\'ll see negative links and articles gradually disappear from Google\'s first page.',
  },
  {
    n: 5,
    title: "Step 5: Strategic Scenario Planning",
    body: 'Establish a "Shield" system that detects new mentions instantly, allowing for rapid suppression before content gains traction. Reputation management is not a one-time project; it is an ongoing defensive posture.',
  },
];

const TIMELINE_PHASES = [
  {
    id: "p1",
    range: "Month 1-2",
    summary: "Asset Creation & Baseline Auditing",
    detail:
      "We establish measurement baselines and complete your reputation audit, inventory existing assets, and begin publishing foundational authority pages so Google has fresh signals to crawl and shift focus away from negative search results.",
  },
  {
    id: "p2",
    range: "Month 3-5",
    summary: "First Page Movement & Negative Content Pushed Down",
    detail:
      "Your positive content begins ranking on Google's first page, and previously dominant negative articles start moving to page 2+.",
  },
  {
    id: "p3",
    range: "Month 6-9",
    summary: "Significant Suppression (Top 10 Clearance)",
    detail:
      "Most negative links and articles are successfully pushed down past page 1. Your reputation repair strategy is showing measurable ROI - leads report cleaner, more professional first impressions when they Google your name.",
  },
  {
    id: "p4",
    range: "Month 12+",
    summary: "Long-term Shielding & Reputation Monitoring",
    detail:
      "Ongoing reputation monitoring services ensure new negative content is caught early. Your improved Google search reputation is protected through consistent content updates and brand authority maintenance.",
  },
];

function MythAccordion({ id, title, children, open, onToggle }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <button
        type="button"
        className="flex w-full items-center justify-between p-6 text-left font-heading transition-colors hover:bg-slate-50"
        aria-expanded={open}
        aria-controls={id}
        id={`${id}-btn`}
        onClick={() => onToggle(id)}
      >
        <span className="block text-left">{title}</span>
        <ChevronDown
          className={cn("h-5 w-5 shrink-0 text-navy transition-transform", open && "rotate-180")}
          aria-hidden
        />
      </button>
      <div
        id={id}
        role="region"
        aria-labelledby={`${id}-btn`}
        className={cn("px-6 pb-6 leading-relaxed", !open && "hidden")}
      >
        {children}
      </div>
    </div>
  );
}

function MistakeAccordion({ id, title, children, open, onToggle }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-destructive/20 bg-destructive/5">
      <button
        type="button"
        className="flex w-full items-center justify-between p-6 text-left font-heading transition-colors hover:bg-destructive/10"
        aria-expanded={open}
        aria-controls={id}
        id={`${id}-btn`}
        onClick={() => onToggle(id)}
      >
        <span className="text-lg font-bold text-charcoal">{title}</span>
        <ChevronDown
          className={cn("h-5 w-5 shrink-0 text-navy transition-transform", open && "rotate-180")}
          aria-hidden
        />
      </button>
      <div
        id={id}
        role="region"
        aria-labelledby={`${id}-btn`}
        className={cn("px-6 pb-6 font-body leading-relaxed text-steel", !open && "hidden")}
      >
        {children}
      </div>
    </div>
  );
}

function FaqAccordion({ id, title, children, open, onToggle }) {
  return (
    <div className="bg-white">
      <button
        type="button"
        className="flex w-full items-center justify-between p-8 text-left font-heading transition-colors hover:bg-slate-50"
        aria-expanded={open}
        aria-controls={id}
        id={`${id}-btn`}
        onClick={() => onToggle(id)}
      >
        <span className="text-xl font-bold text-charcoal">{title}</span>
        {open ? (
          <Minus className="h-5 w-5 shrink-0 text-navy" aria-hidden />
        ) : (
          <Plus className="h-5 w-5 shrink-0 text-navy" aria-hidden />
        )}
      </button>
      <div
        id={id}
        role="region"
        aria-labelledby={`${id}-btn`}
        className={cn("px-8 pb-8 font-body leading-relaxed text-steel", !open && "hidden")}
      >
        {children}
      </div>
    </div>
  );
}

function ReadingProgressRail({ pct }) {
  const fill = Math.min(100, Math.max(0, pct));
  const rounded = Math.round(fill);
  const label = rounded >= 100 ? "100% completed" : `${rounded}% completed`;
  const clip = `inset(0 0 ${100 - fill}% 0)`;

  return (
    <div className="flex min-h-0 flex-1 flex-col p-5">
      <div className="w-full shrink-0 text-center">
        <p className="font-heading text-xs font-bold tracking-widest text-steel uppercase">Reading progress</p>
        <p className="mt-2 font-heading text-3xl font-extrabold tabular-nums text-navy">{rounded}%</p>
        <p className="mt-1 font-body text-sm font-medium text-steel">{label}</p>
      </div>
      <div className="relative mt-5 min-h-0 flex-1">
        <div className="absolute inset-0 flex justify-center px-0.5">
          <div className="relative h-full w-3 max-w-full overflow-hidden rounded-full bg-slate-200/90" aria-hidden>
            <div
              className="absolute inset-0 rounded-full bg-green transition-[clip-path] duration-150 ease-out"
              style={{ clipPath: clip }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BlogSuppressNegativeContentGuidePage() {
  const [readingPct, setReadingPct] = useState(0);
  const [activeNavId, setActiveNavId] = useState("");
  const [openAccordion, setOpenAccordion] = useState({});
  const [activeStep, setActiveStep] = useState(1);
  const [activeScenario, setActiveScenario] = useState("chen");
  const [checklist, setChecklist] = useState([false, false, false, false, false]);
  const [timelinePhase, setTimelinePhase] = useState(0);

  const toggleAccordion = useCallback((key) => {
    setOpenAccordion((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const winScroll = doc.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setReadingPct(scrolled);

      const y = window.scrollY;
      let current = "";
      for (const sid of SCROLL_SPY_ORDER) {
        const el = document.getElementById(sid);
        if (!el) continue;
        const sectionTop = el.offsetTop;
        if (y >= sectionTop - 160) current = sid;
      }
      const inSidebar = GUIDE_NAV.some((g) => g.id === current);
      setActiveNavId(inSidebar ? current : "");
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
    return () => document.documentElement.classList.remove("scroll-smooth");
  }, []);

  const activeStepData = STEPS.find((s) => s.n === activeStep) ?? STEPS[0];
  const phase = TIMELINE_PHASES[timelinePhase] ?? TIMELINE_PHASES[0];

  return (
    <>
      <SeoHead
        title={suppressNegativeGuideSeoTitle}
        description={suppressNegativeGuideMetaDescription}
        canonicalPath={SUPPRESS_NEGATIVE_GUIDE_PATH}
        ogImage={suppressNegativeGuideListing.image}
      />

      <div className="r360-diy-interactive scroll-smooth pb-1 font-body text-jet antialiased">
        <div className="diy-hero-band" id="intro">
          <span className="diy-hero-badge">{suppressNegativeGuideHero.badge}</span>
          <h1 className="diy-hero-title">{suppressNegativeGuideHero.title}</h1>
          <p className="diy-hero-lead">{suppressNegativeGuideHero.lead}</p>
          <p className="mt-8 flex items-center justify-center gap-2 font-body text-sm text-steel">
            <Clock className="h-4 w-4 text-navy" aria-hidden />
            {suppressNegativeGuideListing.readTime} read
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
            {/* Left: Guide index */}
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
                      activeNavId && activeNavId === id
                        ? "border-green font-bold text-navy"
                        : "border-transparent",
                    )}
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Center: article */}
            <main className="min-w-0 flex-1 px-0 pb-20 sm:px-2 lg:max-w-[52rem] lg:px-10">
              <section className="mb-20 scroll-mt-36 font-body" id="silent-crisis">
                <h2 className="mb-8 font-heading text-3xl font-bold text-navy">The Silent Crisis Affecting Your Credibility</h2>
                <DiyLeadHighlight variant="panel" label="What happens">
                  <p>
                    <strong>It starts with a search.</strong> A prospective patient, a potential high-value client, or
                    a future partner enters your name. Then they see it - a lingering negative headline, an unfair review,
                    or a misrepresentative archive. In today&apos;s online world, they&apos;ll either find the negative
                    content on Google&apos;s first page - or they won&apos;t find you at all. Our guide shows you how to
                    remove negative search results and reclaim your digital presence.
                  </p>
                </DiyLeadHighlight>
                <div className="mt-10 flex flex-col gap-6">
                  <div className="flex flex-col items-stretch gap-6 rounded-2xl border-l-8 border-green bg-navy/5 p-6 sm:flex-row sm:items-center sm:p-8">
                    <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center self-center rounded-full bg-green font-heading text-2xl font-black text-navy sm:self-auto">
                      88%
                    </div>
                    <div>
                      <span className="mb-1 block font-heading text-xs font-bold tracking-widest text-navy uppercase">
                        Quick fact
                      </span>
                      <p className="font-body font-medium italic text-steel">
                        &quot;88% of consumers trust online reviews as much as personal recommendations. If they find it
                        on page one, it is their truth.&quot;
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch gap-6 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:flex-row sm:items-center sm:p-8">
                    <div className="relative mx-auto flex aspect-square w-full max-w-[10.5rem] shrink-0 flex-col items-center justify-center gap-1.5 self-center overflow-hidden rounded-2xl bg-linear-to-br from-navy via-navy to-slate-900 p-4 text-center shadow-[0_12px_40px_-12px_rgba(15,23,42,0.45)] ring-1 ring-white/10 sm:mx-0 sm:max-w-[11.5rem] sm:self-auto">
                      <div
                        className="pointer-events-none absolute inset-0 opacity-[0.12]"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.9) 0%, transparent 55%)",
                        }}
                        aria-hidden
                      />
                      <TrendingDown
                        className="relative z-10 h-6 w-6 text-green sm:h-7 sm:w-7"
                        strokeWidth={2.25}
                        aria-hidden
                      />
                      <p className="relative z-10 font-heading text-3xl font-black tabular-nums leading-none text-green sm:text-[2rem]">
                        22%
                      </p>
                      <p className="relative z-10 max-w-[9rem] font-heading text-[0.65rem] font-bold leading-snug tracking-wide text-white uppercase sm:text-xs">
                        Drop in Revenue
                      </p>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-body font-medium text-steel">
                        A single negative link on Google&apos;s first page results in a 22% loss of qualified leads
                        annually.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 text-lg text-steel">
                  <p>
                    At <DiyInternalLink href="/about">Reputation360</DiyInternalLink>, we have helped hundreds of
                    professionals - from{" "}
                    <DiyInternalLink href={WHO_WE_SERVE_HUB_PATH}>
                      neurosurgeons to hedge fund managers
                    </DiyInternalLink>{" "}
                    - reclaim their digital identities. Our proven online reputation management and negative link
                    suppression strategies work by understanding that the internet doesn&apos;t have a &apos;forget&apos;
                    button, but it does have a hierarchy. Our mission is to ensure your hierarchy reflects your
                    excellence.
                  </p>
                </div>
              </section>

              <section className="mb-20 scroll-mt-36" id="stakes">
                <h2 className="mb-8 font-heading text-3xl font-bold text-navy">
                  The Stakes: Why Google Reputation Management Matters
                </h2>
                <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
                  <p className="mb-6 font-body text-lg leading-relaxed text-steel">
                    The Business Impact narrative is clear: A single negative link on the first page can result in a
                    22% drop in business. If three negative links appear, that number skyrockets to 59.2%.
                  </p>
                  <div className="rounded-2xl bg-navy p-6 text-white md:p-8">
                    <p className="mb-3 font-heading text-xl font-bold">The Math of Reputation Loss</p>
                    <p className="font-body text-slate-300">
                      For a firm generating $10M in revenue, a first-page negative result doesn&apos;t just &quot;look
                      bad&quot;-it translates to a measurable loss of approximately{" "}
                      <span className="font-heading text-2xl font-black text-green">$3 million annually</span> in
                      potential business that simply never materializes.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-20 scroll-mt-36" id="impact">
                <h2 className="mb-6 flex flex-wrap items-center gap-3 font-heading text-3xl font-bold text-navy">
                  <Wallet className="h-8 w-8 shrink-0 text-navy" aria-hidden />
                  The cost of ignoring your reputation
                </h2>
                <p className="mb-8 font-body text-lg text-steel">
                  Ignoring negative search results - whether through inaction or ineffective tactics - costs you leads.
                  These aren&apos;t just PR problems; they&apos;re structural leaks in your business model.
                </p>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                  <div className="group cursor-default rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-navy/35 hover:bg-slate-50 hover:shadow-lg motion-reduce:transform-none md:p-8">
                    <div className="mb-5 h-2 w-full overflow-hidden rounded-full bg-slate-100 transition-colors group-hover:bg-navy/10">
                      <div className="h-full w-1/4 bg-navy/25 transition-all duration-300 group-hover:w-1/3 group-hover:bg-navy/50" />
                    </div>
                    <h3 className="mb-2 font-heading text-sm font-bold tracking-widest text-steel uppercase">
                      Small Practice
                    </h3>
                    <div className="mb-1 font-heading text-3xl font-extrabold text-navy transition-colors group-hover:text-slate-800">
                      $45,000+
                    </div>
                    <p className="font-body text-sm text-steel">
                      Estimated revenue lost to un-converted search leads annually.
                    </p>
                  </div>
                  <div className="group z-10 cursor-default rounded-3xl border border-navy/20 bg-navy p-6 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:brightness-110 motion-reduce:transform-none md:scale-[1.02] md:p-8">
                    <div className="mb-5 h-2 w-full overflow-hidden rounded-full bg-white/20">
                      <div className="h-full w-1/2 bg-green transition-all duration-300 group-hover:w-3/5" />
                    </div>
                    <h3 className="mb-2 font-heading text-sm font-bold tracking-widest text-white/75 uppercase">
                      Mid-Sized Firm
                    </h3>
                    <div className="mb-1 font-heading text-3xl font-extrabold">$180,000+</div>
                    <p className="font-body text-sm text-white/85">
                      Average impact for established firms with localized negative press.
                    </p>
                  </div>
                  <div className="group cursor-default rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green/50 hover:shadow-lg motion-reduce:transform-none md:p-8">
                    <div className="mb-5 h-2 w-full overflow-hidden rounded-full bg-slate-100 transition-colors group-hover:bg-green/15">
                      <div className="h-full w-full bg-navy/55 transition-all group-hover:bg-navy" />
                    </div>
                    <h3 className="mb-2 font-heading text-sm font-bold tracking-widest text-steel uppercase">
                      Enterprise / Elite
                    </h3>
                    <div className="mb-1 font-heading text-3xl font-extrabold text-navy">$1.2M+</div>
                    <p className="font-body text-sm text-steel">
                      Global impact for high-net-worth individuals and corporate entities.
                    </p>
                  </div>
                </div>
                <p className="mt-8 font-body text-lg leading-relaxed text-steel">
                  If you&apos;re in the early stages and want to understand what you can address yourself before bringing
                  in professional support, our{" "}
                  <DiyInternalLink href={DIY_REPUTATION_GUIDE_PATH}>
                    DIY Online Reputation Management guide
                  </DiyInternalLink>{" "}
                  walks through the foundational steps. For situations where the damage is already on page 1,
                  professional intervention is usually the faster path.
                </p>
              </section>

              <section className="mb-20 scroll-mt-36" id="permanence">
                <h2 className="mb-8 font-heading text-3xl font-bold text-navy">Why Negative Content Sticks</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    {
                      t: "The Permanence Problem",
                      d: "Unlike a bad news cycle of the past, the internet is indexed. Without active intervention, a decade-old error remains a day-one discovery.",
                    },
                    {
                      t: "The Multiplier Effect",
                      d: "One negative link encourages others to post similar content, creating a compounding cycle of reputation erosion.",
                    },
                    {
                      t: "The Streisand Effect",
                      d: "Attempting to delete content often draws more attention to it. Suppression is the sophisticated alternative to a public battle.",
                    },
                    {
                      t: "The Search Algorithm Reality",
                      d: "Every day without a strategy to remove negative articles from Google compounds your reputation damage. The algorithm doesn't forget - it just keeps serving yesterday's problems to tomorrow's prospects.",
                    },
                  ].map((card, i) => (
                    <div
                      key={card.t}
                      className={cn(
                        "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 ease-out",
                        "hover:-translate-y-1 hover:border-green/40 hover:shadow-md motion-reduce:hover:translate-y-0",
                        "motion-safe:animate-[r360-card-rise_0.55s_ease-out_both]",
                      )}
                      style={{ animationDelay: `${i * 90}ms` }}
                    >
                      <h3 className="mb-3 font-heading font-bold text-navy">{card.t}</h3>
                      <p className="font-body text-sm leading-relaxed text-steel">{card.d}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-20 scroll-mt-36" id="myths">
                <h2 className="mb-8 font-heading text-3xl font-bold text-navy">
                  What doesn&apos;t work (and what does) - Myth vs. reality
                </h2>
                <div className="space-y-4">
                  {MYTHS.map((m) => (
                    <MythAccordion key={m.id} id={m.id} title={m.title} open={!!openAccordion[m.id]} onToggle={toggleAccordion}>
                      {m.body}
                    </MythAccordion>
                  ))}
                </div>
              </section>

              <section className="mb-20 scroll-mt-36" id="works">
                <h2 className="mb-6 font-heading text-3xl font-bold text-navy">What actually works</h2>
                <div className="rounded-[2rem] bg-navy p-8 text-white md:p-10">
                  <p className="font-body text-lg leading-relaxed text-slate-200">
                    Real reputation control is built on three pillars:{" "}
                    <span className="font-heading font-bold text-green">Ownership, Optimization, and Outreach.</span>{" "}
                    Unlike quick fixes that fail, authentic reputation repair requires pushing down negative search
                    results through strategic Google reputation management. By creating a network of high-authority
                    assets that you own, you force Google&apos;s algorithm to prioritize your current, professional
                    narrative over outdated or unfair mentions.
                  </p>
                </div>
              </section>

              <section className="mb-20 scroll-mt-36" id="framework">
                <h2 className="mb-6 font-heading text-3xl font-bold text-navy">The 5-Step Framework</h2>
                <div className="flex max-w-4xl flex-col gap-4">
                  <div className="flex flex-wrap items-center justify-center gap-y-2 sm:justify-start">
                    {STEPS.map((s, idx) => {
                      const filled = s.n <= activeStep;
                      const connectorBlue = activeStep > idx + 1;
                      return (
                        <Fragment key={s.n}>
                          <button
                            type="button"
                            className={cn(
                              "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 font-heading text-sm font-bold transition-all sm:h-11 sm:w-11",
                              filled
                                ? "border-navy bg-navy text-white shadow-sm"
                                : "border-slate-300 bg-white text-navy hover:border-navy/50",
                            )}
                            aria-pressed={activeStep === s.n}
                            aria-label={`Step ${s.n}`}
                            onClick={() => setActiveStep(s.n)}
                          >
                            {s.n}
                          </button>
                          {idx < STEPS.length - 1 ? (
                            <div
                              className={cn(
                                "mx-1 h-0.5 min-w-[1.25rem] max-w-12 flex-1 rounded-full transition-colors sm:mx-1.5 sm:min-w-[2rem]",
                                connectorBlue ? "bg-navy" : "bg-slate-300",
                              )}
                              aria-hidden
                            />
                          ) : null}
                        </Fragment>
                      );
                    })}
                  </div>
                  <div
                    className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5 md:rounded-2xl"
                    id="stepContent"
                  >
                    <h3 className="mb-3 font-heading text-lg font-extrabold text-navy sm:text-xl">
                      {activeStepData.title}
                    </h3>
                    <p className="mb-3 font-body text-sm leading-relaxed whitespace-pre-line text-steel sm:mb-4 sm:text-base">
                      {activeStepData.body}
                    </p>
                    {activeStepData.bullets ?? null}
                    {activeStepData.extra ?? null}
                  </div>
                </div>
              </section>

              <section className="mb-20 scroll-mt-36" id="scenarios">
                <h2 className="mb-8 font-heading text-3xl font-bold text-navy">Real Professional Scenarios</h2>
                <div className="grid gap-4 md:grid-cols-3">
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setActiveScenario("chen")}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveScenario("chen");
                      }
                    }}
                    className={cn(
                      "flex cursor-pointer flex-col items-start gap-3 rounded-2xl border p-5 text-left font-body transition-all md:p-6",
                      activeScenario === "chen"
                        ? "border-navy bg-navy/5 shadow-md ring-2 ring-navy/30"
                        : "border-slate-200 bg-white hover:border-navy/30 hover:shadow-sm",
                    )}
                  >
                    <div className="flex w-full items-center justify-between gap-2">
                      <span className="font-heading text-xs font-bold tracking-widest text-steel uppercase">
                        Case 1
                      </span>
                      <Stethoscope className="h-5 w-5 shrink-0 text-navy" aria-hidden />
                    </div>
                    <p className="font-heading text-sm font-bold leading-snug text-navy md:text-base">
                      Case 1:{" "}
                      <DiyInternalLink
                        href={AUDIENCE_PATH.doctors}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Dr. Sarah Chen
                      </DiyInternalLink>{" "}
                      - How to Remove Negative Articles from Google (#2 Ranking)
                    </p>
                    <span className="text-xs font-semibold text-navy underline-offset-2 hover:underline">
                      {activeScenario === "chen" ? "Selected" : "View this case"}
                    </span>
                  </div>
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setActiveScenario("johnson")}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveScenario("johnson");
                      }
                    }}
                    className={cn(
                      "flex cursor-pointer flex-col items-start gap-3 rounded-2xl border p-5 text-left font-body transition-all md:p-6",
                      activeScenario === "johnson"
                        ? "border-navy bg-navy/5 shadow-md ring-2 ring-navy/30"
                        : "border-slate-200 bg-white hover:border-navy/30 hover:shadow-sm",
                    )}
                  >
                    <div className="flex w-full items-center justify-between gap-2">
                      <span className="font-heading text-xs font-bold tracking-widest text-steel uppercase">
                        Case 2
                      </span>
                      <Scale className="h-5 w-5 shrink-0 text-navy" aria-hidden />
                    </div>
                    <p className="font-heading text-sm font-bold leading-snug text-navy md:text-base">
                      Case 2:{" "}
                      <DiyInternalLink
                        href={AUDIENCE_PATH.lawyers}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Attorney Marcus Johnson
                      </DiyInternalLink>{" "}
                      - Reputation Recovery from Negative Press
                    </p>
                    <span className="text-xs font-semibold text-navy underline-offset-2 hover:underline">
                      {activeScenario === "johnson" ? "Selected" : "View this case"}
                    </span>
                  </div>
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setActiveScenario("mitchell")}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveScenario("mitchell");
                      }
                    }}
                    className={cn(
                      "flex cursor-pointer flex-col items-start gap-3 rounded-2xl border p-5 text-left font-body transition-all md:p-6",
                      activeScenario === "mitchell"
                        ? "border-navy bg-navy/5 shadow-md ring-2 ring-navy/30"
                        : "border-slate-200 bg-white hover:border-navy/30 hover:shadow-sm",
                    )}
                  >
                    <div className="flex w-full items-center justify-between gap-2">
                      <span className="font-heading text-xs font-bold tracking-widest text-steel uppercase">
                        Case 3
                      </span>
                      <Briefcase className="h-5 w-5 shrink-0 text-navy" aria-hidden />
                    </div>
                    <p className="font-heading text-sm font-bold leading-snug text-navy md:text-base">
                      Case 3:{" "}
                      <DiyInternalLink
                        href={AUDIENCE_PATH.executives}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Sarah Mitchell, Founder
                      </DiyInternalLink>{" "}
                      - Executive Reputation Management
                    </p>
                    <span className="text-xs font-semibold text-navy underline-offset-2 hover:underline">
                      {activeScenario === "mitchell" ? "Selected" : "View this case"}
                    </span>
                  </div>
                </div>
                <div
                  key={activeScenario}
                  className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 md:rounded-3xl md:p-10"
                >
                  {activeScenario === "chen" ? (
                    <div id="chen">
                      <h4 className="mb-5 font-heading text-lg font-bold leading-snug text-navy md:text-xl">
                        Case 1:{" "}
                        <DiyInternalLink href={AUDIENCE_PATH.doctors}>Dr. Sarah Chen</DiyInternalLink> - How to Remove
                        Negative Articles from Google (#2 Ranking)
                      </h4>
                      <p className="font-body leading-relaxed text-steel">
                        Our negative content suppression strategy involved creating a series of high-authority medical
                        guides on her own .com domain and establishing her as a contributor on Healthline. Within 180
                        days, the negative blog - previously #2 for her name search - was pushed down to page 3, and
                        her own professional content dominated Google&apos;s first page.
                      </p>
                    </div>
                  ) : activeScenario === "johnson" ? (
                    <div id="johnson">
                      <h4 className="mb-5 font-heading text-lg font-bold leading-snug text-navy md:text-xl">
                        Case 2:{" "}
                        <DiyInternalLink href={AUDIENCE_PATH.lawyers}>Attorney Marcus Johnson</DiyInternalLink> -
                        Reputation Recovery from Negative Press
                      </h4>
                      <p className="font-body leading-relaxed text-steel">
                        An old, dismissed legal dispute continued surfacing on Google when potential clients searched his
                        name. Our reputation recovery strategy involved identifying which negative articles and links were
                        most damaging, then systematically building authoritative legal content and professional profiles
                        to push down negative Google results. Result: Within 6 months, the outdated dispute article dropped
                        from position #4 to page 2, while his own case studies and credentials claimed positions #1-3.
                      </p>
                    </div>
                  ) : (
                    <div id="mitchell">
                      <h4 className="mb-5 font-heading text-lg font-bold leading-snug text-navy md:text-xl">
                        Case 3:{" "}
                        <DiyInternalLink href={AUDIENCE_PATH.executives}>Sarah Mitchell, Founder</DiyInternalLink> -
                        Executive Reputation Management
                      </h4>
                      <p className="font-body leading-relaxed text-steel">
                        As a founder scaling her SaaS company, Sarah needed to establish thought leadership while
                        suppressing an old blog post about a failed startup. Our executive reputation management service
                        created a targeted strategy: publish on major tech blogs, speaking engagements, and LinkedIn
                        articles. This shifted search results so that her professional reputation dominated instead of the
                        negative archive. Result: Transformed from one negative link on page 1 to zero negative content
                        in the top 10 results within 4 months.
                      </p>
                    </div>
                  )}
                </div>
              </section>

              <section className="mb-20 scroll-mt-36" id="timeline">
                <h2 className="mb-6 font-heading text-3xl font-bold text-navy">How Long Really?</h2>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {TIMELINE_PHASES.map((p, i) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setTimelinePhase(i)}
                      className={cn(
                        "rounded-2xl border p-5 text-left font-body transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/40",
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
                </div>
                <p className="mt-4 font-body text-sm italic text-steel">
                  Timeline expectations: Typical results begin appearing within 90 days. Professional-grade suppression
                  requires consistent effort.
                </p>
              </section>

              <section className="mb-20 scroll-mt-36" id="mistakes">
                <h2 className="mb-8 font-heading text-3xl font-bold text-navy">Common Critical Mistakes</h2>
                <div className="space-y-4">
                  {MISTAKES.map((m) => (
                    <MistakeAccordion key={m.id} id={m.id} title={m.title} open={!!openAccordion[m.id]} onToggle={toggleAccordion}>
                      <p>{m.body}</p>
                    </MistakeAccordion>
                  ))}
                </div>
              </section>

              <section className="mb-20 scroll-mt-36" id="checklist">
                <div className="relative overflow-hidden rounded-[2.5rem] bg-navy p-8 text-white md:p-14">
                  <div className="pointer-events-none absolute top-0 right-0 p-10 text-white/10 md:p-12">
                    <ListChecks className="h-40 w-40 md:h-48 md:w-48" aria-hidden />
                  </div>
                  <div className="relative z-10">
                    <h2 className="mb-3 font-heading text-2xl font-bold md:text-3xl">
                      Quick checklist: Am I doing this right?
                    </h2>
                    <p className="mb-8 max-w-xl font-body text-base leading-relaxed text-white/85 md:text-lg">
                      Self-evaluate your current reputation strategy. If you miss more than two checkmarks, your
                      authority is at risk.
                    </p>
                    <div className="max-w-2xl space-y-3" id="checklist-container">
                      {[
                        "I have claimed my name on all Tier-1 social platforms.",
                        "My professional website is on the first page of Google.",
                        "I publish authoritative content at least once per month.",
                        "I am notified instantly of any new online mentions.",
                        "I have a reputation monitoring system that alerts me to new negative content within 24 hours.",
                      ].map((label, i) => (
                        <label
                          key={label}
                          className={cn(
                            "flex cursor-pointer items-center gap-4 rounded-2xl border border-white/10 p-4 font-body transition-all hover:bg-white/10 md:p-5",
                            checklist[i] && "border-green bg-green/15",
                          )}
                        >
                          <div className="relative h-6 w-6 shrink-0">
                            <input
                              type="checkbox"
                              className="sr-only"
                              checked={checklist[i]}
                              onChange={() =>
                                setChecklist((prev) => {
                                  const next = [...prev];
                                  next[i] = !next[i];
                                  return next;
                                })
                              }
                            />
                            <div
                              className={cn(
                                "flex h-6 w-6 items-center justify-center rounded border-2 border-white/40 transition-all",
                                checklist[i] && "border-green bg-green",
                              )}
                            />
                            {checklist[i] ? (
                              <Check className="pointer-events-none absolute inset-0 m-auto h-4 w-4 text-navy" aria-hidden />
                            ) : null}
                          </div>
                          <span className="text-base font-medium md:text-lg">{label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-20 scroll-mt-36 font-body" id="2026-context">
                <h2 className="mb-6 font-heading text-3xl font-bold text-navy">Why This Matters in 2026</h2>
                <p className="text-lg leading-relaxed text-steel">
                  With the rise of AI-driven search experiences, the &quot;First Impression&quot; has moved from being
                  just a list of links to a summarized narrative. If you don&apos;t control the data feeding these
                  models, they will hallucinate or amplify the negatives.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-steel">
                  We cover the latest shifts in search and reputation strategy in our{" "}
                  <DiyInternalLink href={BLOG_INDEX_PATH}>insights blog</DiyInternalLink> - updated regularly by our
                  team of practitioners.
                </p>
              </section>

              <section className="mb-20 scroll-mt-36" id="faq">
                <h2 className="mb-8 font-heading text-3xl font-bold text-navy">FAQ: Your Remaining Questions</h2>
                <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                  {FAQS.map((f) => (
                    <FaqAccordion key={f.id} id={f.id} title={f.q} open={!!openAccordion[f.id]} onToggle={toggleAccordion}>
                      {f.id === "faq-5" ? (
                        <p>
                          Reputation repair is crisis-focused - removing or suppressing active negative content.
                          Reputation management is ongoing - monitoring your online presence, building positive assets,
                          and maintaining your professional reputation long-term. Both are part of what we do at
                          Reputation360. Learn more about{" "}
                          <DiyInternalLink href={WHO_WE_SERVE_HUB_PATH}>who we work with</DiyInternalLink> and how we
                          approach each situation.
                        </p>
                      ) : (
                        <p>{f.a}</p>
                      )}
                    </FaqAccordion>
                  ))}
                </div>
              </section>

              <section className="mb-20 scroll-mt-36" id="start">
                <h2 className="mb-6 font-heading text-3xl font-bold text-navy">The next step & start today</h2>
                <div className="mb-10 font-body text-lg text-steel">
                  <p>
                    The first step is always the reputation audit. Knowing exactly where you stand allows you to move
                    from a position of anxiety to a position of action. Our free consultation reviews your online
                    world, identifies negative links affecting your Google reputation, and outlines your personalized
                    reputation repair strategy. Whether you work with Reputation360 or take these steps yourself, the cost of
                    inaction - in leads, revenue, and credibility - only grows with time.
                  </p>
                </div>
                <div className="mx-auto w-full max-w-6xl">
                  <div className="rounded-3xl bg-[linear-gradient(120deg,#08284f,#0f3f73)] px-6 py-10 text-center text-white shadow-lg md:px-12 md:py-12">
                    <h2 className="mb-3 font-heading text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
                      Get your free consultation
                    </h2>
                    <p className="mx-auto mb-6 max-w-3xl font-body text-sm leading-relaxed text-white/85 sm:text-base md:text-lg">
                      Book a short call: we review your online world, set expectations, and outline practical next
                      steps. No obligation.
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
                </div>
              </section>
            </main>

            {/* Right: reading progress fills this sticky column */}
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
