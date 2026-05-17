import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
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
} from "lucide-react";
import { SeoHead } from "../components/SeoHead.jsx";
import { cn } from "@/lib/utils";
import { calendlyCtaButtonClass, calendlyNewTabProps } from "@/constants/scheduling";
import {
  SUPPRESS_NEGATIVE_GUIDE_PATH,
  suppressNegativeGuideListing,
} from "../data/blogs/suppressNegativeContentGuide.js";

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
];

const STEPS = [
  {
    n: 1,
    title: "Step 1: Comprehensive Reputation Audit",
    body: 'Map every keyword and search variant that triggers negative content. Identify "Low-Hanging Fruit" sites where your influence is highest. You cannot solve a problem you haven\'t fully measured.',
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
      </ul>
    ),
  },
  {
    n: 2,
    title: "Step 2: Optimize Existing Digital Assets",
    body: 'Turn your LinkedIn, professional bios, and company site into Google-favored "Super Assets" that dominate the top slots. Most professionals have existing profiles that are simply under-optimized for search authority.',
    extra: (
      <p className="rounded-xl border-l-4 border-navy bg-offwhite p-4 font-body text-sm italic text-steel">
        &quot;Optimization isn&apos;t just about keywords; it&apos;s about building meaningful, interconnected digital
        authority.&quot;
      </p>
    ),
  },
  {
    n: 3,
    title: "Step 3: Content Creation & Saturation",
    body: 'Produce high-authority articles and multimedia. Google prioritizes "freshness" and "authority"- use this to bury stale negativity. The goal is to flood the first page with content you control.',
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
    body: 'Build credibility through backlinks. A profile with 50 quality links will always outrank a blog post with none. Link building provides the "gravity" that keeps your positive content anchored at the top of search results.',
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
      "We establish measurement baselines, inventory existing assets, and begin publishing foundational authority pages so Google has fresh signals to crawl.",
  },
  {
    id: "p2",
    range: "Month 3-5",
    summary: "First Page Movement & Indexing",
    detail:
      "New and optimized assets start earning impressions; weaker negative URLs begin slipping as your owned properties gain traction and internal links strengthen.",
  },
  {
    id: "p3",
    range: "Month 6-9",
    summary: "Significant Suppression (Top 10 Clearance)",
    detail:
      "This is typically where meaningful shifts appear: stronger positives consolidate in the top 10 while high-friction negatives lose visibility for priority queries.",
  },
  {
    id: "p4",
    range: "Month 12+",
    summary: "Long-term Shielding & Maintenance",
    detail:
      "Ongoing publishing, monitoring, and citation hygiene keep your narrative resilient so negatives do not re-surface when algorithms refresh.",
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
  const rounded = Math.min(100, Math.max(0, Math.round(pct)));
  const label = rounded >= 100 ? "100% completed" : `${rounded}% completed`;

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm backdrop-blur-sm">
      <p className="font-heading text-xs font-bold tracking-widest text-steel uppercase">Reading progress</p>
      <p className="mt-2 font-heading text-3xl font-extrabold tabular-nums text-navy">{rounded}%</p>
      <p className="mt-1 font-body text-sm font-medium text-steel">{label}</p>
      <div className="mt-5 flex justify-center">
        <div className="relative h-52 w-2.5 overflow-hidden rounded-full bg-slate-200" aria-hidden>
          <div
            className="absolute right-0 bottom-0 left-0 rounded-full bg-green transition-[height] duration-150 ease-out"
            style={{ height: `${rounded}%` }}
          />
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
  const [checklist, setChecklist] = useState([false, false, false, false]);
  const [timelinePhase, setTimelinePhase] = useState(0);

  const metaDescription = useMemo(() => {
    const t = suppressNegativeGuideListing.excerpt;
    return t.length <= 160 ? t : `${t.slice(0, 157).trimEnd()}...`;
  }, []);

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
        if (y >= sectionTop - 120) current = sid;
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
        title="How to Suppress Negative Content: The Professional's Guide to Online Reputation Control | Reputation360"
        description={metaDescription}
        canonicalPath={SUPPRESS_NEGATIVE_GUIDE_PATH}
        ogImage={suppressNegativeGuideListing.image}
      />

      <div className="scroll-smooth bg-offwhite pb-1 font-body text-charcoal antialiased">
        {/* Reading progress: full-width bar fixed to bottom of viewport */}
        <div
          className="pointer-events-none fixed right-0 bottom-0 left-0 z-40 h-1 bg-slate-200"
          aria-hidden
        >
          <div
            className="h-full bg-green transition-[width] duration-150 ease-out"
            style={{ width: `${Math.min(100, Math.max(0, readingPct))}%` }}
          />
        </div>

        <div className="mx-auto max-w-[min(100%,90rem)] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 pt-8 pb-4 lg:flex-row lg:gap-0">
            {/* Left: Guide index */}
            <aside className="hidden w-64 shrink-0 lg:sticky lg:top-6 lg:block lg:h-[calc(100dvh-1.5rem)] lg:overflow-y-auto lg:border-r lg:border-slate-200/80 lg:pr-6 lg:pt-4">
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
            <main className="min-w-0 flex-1 px-0 pb-20 sm:px-2 lg:px-10">
              <header className="mb-16 scroll-mt-28 font-heading" id="intro">
                <h1 className="mb-8 text-4xl leading-tight font-extrabold text-navy md:text-5xl lg:text-6xl">
                  {suppressNegativeGuideListing.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 border-y border-slate-200 py-6 font-body text-steel">
                  <div className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5 shrink-0 text-navy" aria-hidden />
                    <span className="text-sm font-medium">Read time: 8 minutes</span>
                  </div>
                </div>
              </header>

              <section className="mb-20 scroll-mt-28 font-body" id="silent-crisis">
                <h2 className="mb-8 font-heading text-3xl font-bold text-navy">The Silent Crisis Affecting Your Credibility</h2>
                <div className="relative mt-8">
                  <p className="mb-8 font-heading text-2xl leading-relaxed font-bold italic text-charcoal md:text-3xl">
                    &quot;It starts with a search. A prospective patient, a potential high-value client, or a future
                    partner enters your name. Then they see it-a lingering negative headline, an unfair review, or a
                    misrepresentative archive.&quot;
                  </p>
                  <p className="text-lg leading-loose text-steel">
                    In that split second, your authority evaporates. This is the Silent Crisis: the unseen exit of
                    qualified leads who never call because Google&apos;s first page has already told them a story you
                    didn&apos;t write. Suppression isn&apos;t about hiding truth; it&apos;s about reclaiming the
                    context of your professional narrative.
                  </p>
                </div>
                <div className="mt-10 flex flex-col items-stretch gap-6 rounded-2xl border-l-8 border-green bg-navy/5 p-6 sm:flex-row sm:items-center sm:p-8">
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
                <div className="mt-10 text-lg text-steel">
                  <p>
                    At Reputation360, we have helped hundreds of professionals-from neurosurgeons to hedge fund
                    managers-reclaim their digital identities. We understand that the internet doesn&apos;t have a
                    &quot;forget&quot; button, but it does have a hierarchy. Our mission is to ensure your hierarchy
                    reflects your excellence.
                  </p>
                </div>
              </section>

              <section className="mb-20 scroll-mt-28" id="stakes">
                <h2 className="mb-8 font-heading text-3xl font-bold text-navy">The Stakes: Why This Matters</h2>
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

              <section className="mb-20 scroll-mt-28" id="impact">
                <h2 className="mb-6 flex flex-wrap items-center gap-3 font-heading text-3xl font-bold text-navy">
                  <Wallet className="h-8 w-8 shrink-0 text-navy" aria-hidden />
                  The cost of ignoring your reputation
                </h2>
                <p className="mb-8 font-body text-lg text-steel">
                  Negative search results aren&apos;t just a PR problem; they are a structural leak in your business
                  model. Use the visualizer below to see the estimated annual loss by practice size.
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
              </section>

              <section className="mb-20 scroll-mt-28" id="permanence">
                <h2 className="mb-8 font-heading text-3xl font-bold text-navy">Why Negative Content Sticks</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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

              <section className="mb-20 scroll-mt-28" id="myths">
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

              <section className="mb-20 scroll-mt-28" id="works">
                <h2 className="mb-6 font-heading text-3xl font-bold text-navy">What actually works</h2>
                <div className="rounded-[2rem] bg-navy p-8 text-white md:p-10">
                  <p className="mb-4 font-body text-lg">
                    Real reputation control is built on three pillars:{" "}
                    <span className="font-heading font-bold text-green">Ownership, Optimization, and Outreach.</span>
                  </p>
                  <p className="font-body text-slate-300">
                    By creating a network of high-authority assets that you own, you force Google&apos;s algorithm to
                    prioritize your current, professional narrative over outdated or unfair mentions.
                  </p>
                </div>
              </section>

              <section className="mb-20 scroll-mt-28" id="framework">
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
                    <p className="mb-3 font-body text-sm leading-relaxed text-steel sm:mb-4 sm:text-base">
                      {activeStepData.body}
                    </p>
                    {activeStepData.bullets ?? null}
                    {activeStepData.extra ?? null}
                  </div>
                </div>
              </section>

              <section className="mb-20 scroll-mt-28" id="scenarios">
                <h2 className="mb-8 font-heading text-3xl font-bold text-navy">Real Professional Scenarios</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => setActiveScenario("chen")}
                    className={cn(
                      "flex flex-col items-start gap-3 rounded-2xl border p-5 text-left font-body transition-all md:p-6",
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
                    <p className="font-heading text-lg font-bold text-navy">Dr. Sarah Chen</p>
                    <p className="text-sm text-steel">Unfair staff blog ranking #2 for her name.</p>
                    <span className="text-xs font-semibold text-navy underline-offset-2 hover:underline">
                      {activeScenario === "chen" ? "Selected" : "View this case"}
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveScenario("johnson")}
                    className={cn(
                      "flex flex-col items-start gap-3 rounded-2xl border p-5 text-left font-body transition-all md:p-6",
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
                    <p className="font-heading text-lg font-bold text-navy">Attorney Marcus Johnson</p>
                    <p className="text-sm text-steel">Old dismissed dispute still surfacing for prospects.</p>
                    <span className="text-xs font-semibold text-navy underline-offset-2 hover:underline">
                      {activeScenario === "johnson" ? "Selected" : "View this case"}
                    </span>
                  </button>
                </div>
                <div
                  key={activeScenario}
                  className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 md:rounded-3xl md:p-10"
                >
                  {activeScenario === "chen" ? (
                    <div id="chen">
                      <h4 className="mb-3 font-heading text-xl font-bold text-navy">The Case of the Unfair Review</h4>
                      <p className="mb-5 font-body leading-relaxed text-steel">
                        Dr. Chen faced a viral, misrepresentative blog post from an disgruntled former staff member. It
                        appeared as the #2 result for her name.
                      </p>
                      <div className="rounded-2xl border-l-4 border-green bg-offwhite p-5 md:p-6">
                        <span className="mb-2 block font-heading text-xs font-bold text-navy uppercase">
                          The solution
                        </span>
                        <p className="font-body text-sm italic text-steel">
                          &quot;We created a series of high-authority medical guides on her own .com domain and
                          established her as a contributor on Healthline. Within 180 days, the negative blog was on
                          page 3.&quot;
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div id="johnson">
                      <h4 className="mb-3 font-heading text-xl font-bold text-navy">The Case of the Old Scandal</h4>
                      <p className="mb-5 font-body leading-relaxed text-steel">
                        Marcus had a 10-year-old local news story about a dismissed legal dispute that still haunted his
                        firm&apos;s online presence.
                      </p>
                      <div className="rounded-2xl border-l-4 border-green bg-offwhite p-5 md:p-6">
                        <span className="mb-2 block font-heading text-xs font-bold text-navy uppercase">
                          The solution
                        </span>
                        <p className="font-body text-sm italic text-steel">
                          &quot;Through strategic professional citation building and the launch of a legal insights
                          podcast, we pushed the archive link out of the top 20 results, ensuring it no longer impacted
                          new client intake.&quot;
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </section>

              <section className="mb-20 scroll-mt-28" id="timeline">
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

              <section className="mb-20 scroll-mt-28" id="mistakes">
                <h2 className="mb-8 font-heading text-3xl font-bold text-navy">Common Critical Mistakes</h2>
                <div className="space-y-4">
                  {MISTAKES.map((m) => (
                    <MistakeAccordion key={m.id} id={m.id} title={m.title} open={!!openAccordion[m.id]} onToggle={toggleAccordion}>
                      <p>{m.body}</p>
                    </MistakeAccordion>
                  ))}
                </div>
              </section>

              <section className="mb-20 scroll-mt-28" id="checklist">
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

              <section className="mb-20 scroll-mt-28 font-body" id="2026-context">
                <h2 className="mb-6 font-heading text-3xl font-bold text-navy">Why This Matters in 2026</h2>
                <p className="text-lg leading-relaxed text-steel">
                  With the rise of AI-driven search experiences, the &quot;First Impression&quot; has moved from being
                  just a list of links to a summarized narrative. If you don&apos;t control the data feeding these
                  models, they will hallucinate or amplify the negatives.
                </p>
              </section>

              <section className="mb-20 scroll-mt-28" id="faq">
                <h2 className="mb-8 font-heading text-3xl font-bold text-navy">FAQ: Your Remaining Questions</h2>
                <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                  {FAQS.map((f) => (
                    <FaqAccordion key={f.id} id={f.id} title={f.q} open={!!openAccordion[f.id]} onToggle={toggleAccordion}>
                      <p>{f.a}</p>
                    </FaqAccordion>
                  ))}
                </div>
              </section>

              <section className="mb-20 scroll-mt-28" id="start">
                <h2 className="mb-6 font-heading text-3xl font-bold text-navy">The next step & start today</h2>
                <div className="mb-10 font-body text-lg text-steel">
                  <p>
                    The first step is always the audit. Knowing exactly where you stand allows you to move from a
                    position of anxiety to a position of action. Whether you work with us or take these steps yourself,
                    the cost of inaction only grows with time.
                  </p>
                </div>
                <section className="overflow-hidden rounded-2xl bg-linear-to-br from-navy via-slate to-navy px-6 py-12 text-center text-white shadow-xl sm:rounded-3xl sm:px-10 sm:py-14 md:px-14 md:py-16">
                  <h2 className="mb-4 font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-[2.35rem]">
                    Get your free consultation
                  </h2>
                  <p className="mx-auto mb-10 max-w-2xl font-body text-base text-white/90 sm:text-lg">
                    Book a short call with our team. We&apos;ll review your search landscape, explain what is realistic,
                    and map practical next steps- no obligation.
                  </p>
                  <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
                    <a
                      {...calendlyNewTabProps}
                      className={cn(
                        "ha-pill inline-flex min-w-[14rem] items-center justify-center gap-2 rounded-xl px-8 py-3.5 font-heading text-base font-semibold shadow-lg transition hover:brightness-95 sm:py-4 sm:text-lg",
                        calendlyCtaButtonClass,
                      )}
                    >
                      Book a Free Consultation
                      <ArrowRight className="h-5 w-5 shrink-0" aria-hidden />
                    </a>
                    <a
                      {...calendlyNewTabProps}
                      className={cn(
                        "ha-pill inline-flex min-w-[14rem] items-center justify-center rounded-xl border-2 border-white/40 bg-white/10 px-8 py-3.5 font-heading text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 sm:py-4 sm:text-lg",
                      )}
                    >
                      Speak with a Partner
                    </a>
                  </div>
                  <p className="mt-8 flex items-center justify-center gap-2 font-body text-sm font-medium text-white/75">
                    <Lock className="h-3.5 w-3.5 text-green" aria-hidden />
                    Confidential strategy call - same booking flow used across the site
                  </p>
                </section>
              </section>
            </main>

            {/* Right: reading progress + meter */}
            <aside className="hidden w-56 shrink-0 lg:sticky lg:top-6 lg:block lg:h-fit lg:max-h-[calc(100dvh-1.5rem)] lg:overflow-y-auto lg:border-l lg:border-slate-200/80 lg:pl-6 lg:pt-4">
              <ReadingProgressRail pct={readingPct} />
            </aside>
          </div>
        </div>

        <footer className="mt-16 w-full bg-navy text-white">
          <div className="mx-auto flex max-w-[min(100%,90rem)] flex-col items-center justify-between gap-8 px-8 py-14 md:flex-row">
            <div>
              <div className="mb-2 font-heading text-xl font-bold text-green">Reputation360</div>
              <p className="max-w-xs font-body text-sm text-slate-400">
                The global leader in elite online reputation management and executive digital privacy.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <a className="font-body text-sm text-slate-300 no-underline transition-opacity hover:text-white" href="/privacy-policy">
                Privacy Policy
              </a>
              <a className="font-body text-sm text-slate-300 no-underline transition-opacity hover:text-white" href="/terms-of-service">
                Terms of Service
              </a>
              <a className="font-body text-sm text-slate-300 no-underline transition-opacity hover:text-white" href="/acceptable-use-policy">
                Security
              </a>
              <a className="font-body text-sm text-slate-300 no-underline transition-opacity hover:text-white" href="/contact">
                Support
              </a>
            </div>
            <div className="font-body text-sm text-slate-500">© 2024 Reputation360. All rights reserved.</div>
          </div>
        </footer>
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
