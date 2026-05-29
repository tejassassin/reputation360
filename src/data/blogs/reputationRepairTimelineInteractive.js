import { AUDIENCE_PATH } from "../../constants/whoWeServePaths.js";
import { DIY_REPUTATION_GUIDE_PATH } from "./diyReputationGuide.js";
import { REMOVE_NEGATIVE_SEARCH_RESULTS_PATH } from "./removeNegativeSearchResultsGuide.js";
import { SUPPRESS_NEGATIVE_GUIDE_PATH } from "./suppressNegativeGuideMeta.js";

export const GUIDE_NAV = [
  { id: "intro", label: "Introduction" },
  { id: "what-fixing-means", label: "What Fixing Means" },
  { id: "factors", label: "Timeline Factors" },
  { id: "timeline-by-scenario", label: "By Scenario" },
  { id: "phases", label: "Repair Phases" },
  { id: "diy-vs-professional", label: "DIY vs. Pro" },
  { id: "red-flags", label: "Red Flags" },
  { id: "faq", label: "FAQ" },
  { id: "start", label: "Next Step" },
];

export const SCROLL_SPY_ORDER = [
  "intro",
  "what-fixing-means",
  "factors",
  "timeline-by-scenario",
  "phases",
  "diy-vs-professional",
  "red-flags",
  "faq",
  "start",
];

export const HERO_STATS = [
  { value: "60-90", label: "days for first visible page-one improvements in most cases" },
  { value: "98%", label: "of Reputation360 clients achieve page-one clearing" },
  { value: "3-12", label: "months for full reputation transformation, depending on severity" },
];

export const FIXING_PILLARS = [
  {
    title: "Removal",
    body: "Pursuing deletion at the source through publisher outreach, legal routes, or Google removal tools where content qualifies.",
  },
  {
    title: "Suppression",
    body: "Building authoritative positive content that outranks damaging results, pushing them off page one where fewer than 1% of people look.",
  },
  {
    title: "Monitoring",
    body: "Ongoing surveillance so new threats are caught and addressed before they gain traction.",
  },
];

export const TIMELINE_FACTORS = [
  {
    id: "source",
    title: "Type & source of content",
    detail:
      "A negative post on a low-authority blog is easier to suppress than a story on Forbes, BBC, or a major trade publication.",
  },
  {
    id: "volume",
    title: "Number of negative results",
    detail:
      "One damaging result is a different challenge from five or six negatives across page one - each needs more positive content to displace.",
  },
  {
    id: "footprint",
    title: "Existing digital footprint",
    detail:
      "Strong LinkedIn, a solid website, and press give you a foundation. Almost no positive presence means a longer runway.",
  },
  {
    id: "reviews",
    title: "Review platform involvement",
    detail:
      "Negative Google, Glassdoor, or Trustpilot ratings add a separate dimension - volume and recency of positive reviews matter.",
  },
  {
    id: "speed",
    title: "How quickly you act",
    detail:
      "Content ranking for years with backlinks is harder to suppress than something that appeared last month. Early action shortens timelines.",
  },
  {
    id: "quality",
    title: "Strategy & execution quality",
    detail:
      "Content quality, placement authority, and SEO precision directly affect how fast positive results climb.",
  },
];

export const TIMELINE_SCENARIOS = [
  {
    id: "1-3",
    timeline: "1-3 months",
    recoveryLabel: "Fastest Recovery",
    speed: "fast",
    intro:
      "You're dealing with limited, low-authority damage and have a reasonable existing digital presence to build from. This is the best-case scenario - and one where early action makes the biggest difference.",
    cases: [
      {
        title: "1-2 negative results on low-authority sites or blogs",
        body: "With a solid existing digital footprint and a targeted content and link strategy, positive results can displace low-authority content relatively quickly. Suppression begins within weeks.",
      },
      {
        title: "Negative review profile with a handful of bad reviews",
        body: "A proactive review generation campaign, combined with platform dispute processes where applicable, can shift ratings and sentiment visibility within 4-8 weeks.",
      },
      {
        title: "Recently published negative content (under 3 months old)",
        body: "Content that hasn't yet accumulated backlinks or engagement signals is significantly easier to outrank before it becomes entrenched. Acting fast is the single biggest advantage here.",
      },
    ],
  },
  {
    id: "3-6",
    timeline: "3-6 months",
    recoveryLabel: "Moderate Recovery",
    speed: "medium",
    intro:
      "The damage is more established or comes from more authoritative sources. Results are still very achievable, but require a sustained content and link-building campaign to displace what's ranking.",
    cases: [
      {
        title: "1-2 results on high-authority news sites or trade publications",
        body: "High-domain-authority content requires high-authority counter-content and targeted link building. Editorial placements and thought leadership articles are the primary tools here.",
      },
      {
        title: "3-4 negative results spread across page one",
        body: "Volume increases the complexity - each result needs to be outranked individually. A broader content strategy across multiple platforms is required to reclaim enough page-one positions.",
      },
      {
        title: "Thin digital presence with 1-2 damaging results",
        body: "When there is little existing positive content to amplify, the first phase involves building the foundation - profiles, articles, and press placements - before suppression gains meaningful traction.",
      },
    ],
  },
  {
    id: "6-12",
    timeline: "6-12 months",
    recoveryLabel: "Complex Recovery",
    speed: "slow",
    intro:
      "Multiple entrenched results, a widespread review problem, or content that has been ranking long enough to build real authority. Full page-one recovery is the goal - and it's achievable, but it's a sustained effort.",
    cases: [
      {
        title: "5-6 negative results dominating page one",
        body: "This level of saturation requires a high volume of high-quality content and links. Each page-one position needs to be reclaimed with content that outcompetes it on every SEO signal.",
      },
      {
        title: "Reputation crisis with widespread media coverage",
        body: "Viral or broadly covered negative stories accumulate backlinks rapidly, making them far more resistant to suppression. A multi-channel reputation management strategy combining content, PR, and link building is required.",
      },
      {
        title: "Historical content that has been ranking for 1-3 years",
        body: "Long-established results have significant ranking momentum. Overcoming that momentum requires sustained positive content production over multiple months before full displacement occurs.",
      },
    ],
  },
  {
    id: "12-plus",
    timeline: "12+ months",
    recoveryLabel: "Long-Term Rebuild",
    speed: "slow",
    intro:
      "The most serious situations - deeply entrenched, high-authority content, widespread coverage, or near-zero positive digital presence. Full recovery is still very much achievable, but it requires a long-term commitment and a comprehensive strategy across every channel.",
    cases: [
      {
        title: "Major national or international media coverage (3+ years old)",
        body: "Content from outlets like the BBC, Forbes, or major national newspapers carries extreme domain authority and typically hundreds of backlinks. Displacing it requires years of sustained positive authority-building.",
      },
      {
        title: "Full page-one saturation with no positive presence",
        body: "When every result on page one is damaging and there is almost no existing positive digital footprint to build from, the rebuild must be comprehensive - covering personal brand, company presence, review platforms, and earned media simultaneously.",
      },
      {
        title: "Ongoing legal or regulatory coverage generating new content",
        body: "When negative content is being actively generated - by ongoing litigation, regulatory proceedings, or continued media interest - suppression must run in parallel with the new content being produced. These cases require the deepest strategic engagement and long-term monitoring.",
      },
    ],
  },
];

export const REPAIR_PHASES = [
  {
    n: 1,
    timespan: "Weeks 1-2: Audit & Strategy",
    title: "Deep Diagnosis",
    bodyKey: "phase1",
  },
  {
    n: 2,
    timespan: "Weeks 2-6: Content & Asset Creation",
    title: "Building the Positive Infrastructure",
    bodyKey: "phase2",
  },
  {
    n: 3,
    timespan: "Weeks 4-12: Link Building & Amplification",
    title: "Building the Authority Signal",
    bodyKey: "phase3",
  },
  {
    n: 4,
    timespan: "Month 2-4: First Visible Results",
    title: "Rankings Begin to Shift",
    bodyKey: "phase4",
  },
  {
    n: 5,
    timespan: "Month 3-12: Consolidation & Dominance",
    title: "Locking In the New Narrative",
    bodyKey: "phase5",
  },
];

export const DIY_VS_PRO_POINTS = [
  "Editorial placements through established publication relationships",
  "Technical SEO depth: schema, canonicals, internal linking, crawl signals",
  "Link-building outreach infrastructure built over years",
  "Platform dispute expertise (Google, Glassdoor, Trustpilot)",
  "Production speed - professional teams publish needed volume in weeks",
];

export const RED_FLAGS = [
  {
    id: "rf-48h",
    title: '"We can remove it in 48 hours"',
    body: "Genuine removal from a third-party site or Google index takes days to weeks at minimum - often longer. Promises otherwise are misleading.",
  },
  {
    id: "rf-guarantee",
    title: '"We guarantee removal"',
    body: "No ethical firm guarantees removal - publishers, Google, or courts decide. Suppression can be delivered with high confidence; removal cannot be guaranteed.",
  },
  {
    id: "rf-2weeks",
    title: '"Results in 2 weeks"',
    body: "Google needs time to crawl, index, and re-rank. Meaningful page-one changes under a month are rare and often not sustainable.",
  },
  {
    id: "rf-proprietary",
    title: '"Proprietary de-indexing system"',
    body: "There is no secret system. De-indexing happens via Google policy, legal order, or publisher action only.",
  },
  {
    id: "rf-vague",
    title: "No transparency about methods",
    body: "A reputable firm should explain what they will do, why, and what results to expect. Vague talk about 'our process' is a warning sign.",
  },
];

export const RELATED_ARTICLES = [
  {
    title: "How to Remove or Suppress Negative Search Results from Google",
    href: REMOVE_NEGATIVE_SEARCH_RESULTS_PATH,
    category: "Google Reputation",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Reviewing search results",
  },
  {
    title: "How to Suppress Negative Content: The Professional's Guide to Online Reputation Control",
    href: SUPPRESS_NEGATIVE_GUIDE_PATH,
    category: "Reputation Strategy",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Strategy on laptop",
  },
  {
    title: "Take Control of Your Online Reputation: A Comprehensive Self-Management Guide",
    href: DIY_REPUTATION_GUIDE_PATH,
    category: "DIY Guide",
    readTime: "25 min read",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Professional planning reputation",
  },
  {
    title: "Reputation360 Case Studies - See Real Results",
    href: "/case-studies",
    category: "Case Studies",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Team reviewing results",
  },
  {
    title: "Our Reputation Management Services - What We Do and How",
    href: "/services",
    category: "Services",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Consultation meeting",
  },
];
