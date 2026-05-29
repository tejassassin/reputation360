import { DIY_REPUTATION_GUIDE_FAQS } from "./blogFaqsRewritten.js";

export const DIY_GUIDE_NAV = [
  { id: "intro", label: "Introduction" },
  { id: "audit", label: "Reputation Audit" },
  { id: "google", label: "Google Results" },
  { id: "positive", label: "Positive Content" },
  { id: "review", label: "Reviews & Ratings" },
  { id: "social", label: "Social Media" },
  { id: "monitor", label: "Monitoring" },
  { id: "crisis", label: "Crisis Response" },
  { id: "advanced", label: "Advanced Tactics" },
  { id: "myths", label: "DIY Myths" },
  { id: "checklist", label: "Monthly Checklist" },
  { id: "start", label: "Get Started" },
  { id: "faq", label: "FAQ" },
];

export const DIY_SCROLL_SPY_ORDER = DIY_GUIDE_NAV.map((n) => n.id);

export const AMPLIFY_PLATFORMS_EXPAND = {
  heading: "Expand Across Multiple Platforms",
  lead:
    "Don't limit yourself to one or two platforms. The more social media and content platforms you maintain, the more control you have over your online narrative. Each platform you're active on is another opportunity to rank on page 1 for searches about you.",
  listIntro: "Consider building a presence on:",
  closing:
    "The more platforms you engage on consistently, the more positive real estate you own on the internet. Each active profile pushes down negative content and gives Google multiple positive URLs to show when people search for you.",
  platforms: [
    "LinkedIn",
    "X (Twitter)",
    "Instagram",
    "Medium",
    "Substack",
    "SlideShare",
    "Issuu",
    "Vocal Media",
    "Muck Rack",
    "Crunchbase",
    "Wellfound",
    "Contently",
  ],
};

export const AUDIT_STEPS = [
  {
    n: 1,
    title: "Use incognito/private browsing",
    body: "Visit usearchfrom.com in incognito mode and search your name there. This removes personalization bias from your results and shows what unbiased, unpersonalized search results actually look like for you across multiple search engines.",
    bodyParts: [
      { text: "Visit " },
      { text: "usearchfrom.com", href: "https://www.usearchfrom.com" },
      {
        text: " in incognito mode and search your name there. This removes personalization bias from your results and shows what unbiased, unpersonalized search results actually look like for you across multiple search engines.",
      },
    ],
  },
  {
    n: 2,
    title: "Search variations",
    body: 'Try your full name, first + last, first + middle + last, and common nicknames. Include your profession (e.g., "John Smith entrepreneur").',
  },
  {
    n: 3,
    title: "Check multiple search engines",
    body: "Do not just rely on Google. Check Bing, DuckDuckGo, and Yahoo. Results vary, and your reputation on all platforms matters.",
  },
  {
    n: 4,
    title: "Document everything",
    body: "Screenshot the first 3-5 pages of results. Create a spreadsheet listing every result, the URL, what it says about you, and your assessment (positive, neutral, or negative).",
  },
];

export const GBP_STEPS = [
  {
    n: 1,
    title: "Claim your profile",
    body: "Visit business.google.com and search for yourself. If your profile exists, claim it. If not, create one using your real name and location.",
  },
  {
    n: 2,
    title: "Complete 100% of your profile",
    body: "Add a professional photo, comprehensive bio, services/expertise, business hours, phone, website, and complete all available fields.",
  },
  {
    n: 3,
    title: "Add your attributes and specialties",
    body: "For professionals: list your certifications, specialties, and languages. For business owners: add key services and expertise areas.",
  },
  {
    n: 4,
    title: "Solicit and respond to reviews",
    body: "Ask clients/colleagues to leave reviews. Respond to every review - positive and negative. This signals that you are responsive and professional.",
  },
];

export const SUPPRESSION_STEPS = [
  {
    n: 1,
    title: "Identify negative keywords",
    body: 'Which search queries show negative content about you? Examples: "John Smith scam," "Jane Doe lawsuit," "CEO company failure"',
  },
  {
    n: 2,
    title: "Create Positive Content",
    body: "Instead of directly addressing negative keywords, focus on creating high-quality, valuable content around your expertise, achievements, and positive narrative.",
  },
  {
    n: 3,
    title: "Publish on high-authority platforms",
    body: "Medium, LinkedIn, and industry publications have domain authority that gives your content ranking power.",
  },
  {
    n: 4,
    title: "Optimize for featured snippets",
    body: "Use bulleted lists, clear headers, and direct answers to questions. Featured snippets appear above organic results.",
  },
  {
    n: 5,
    title: "Monitor and update",
    body: "Work on your platforms every week with consistent activity - share insights, engage with comments, respond to reviews. Check monthly if your content ranks for target keywords and refresh your top-performing articles every 6-8 weeks to maintain ranking power.",
  },
];

export const REVIEW_RESPONSE_STEPS = [
  {
    n: 1,
    title: "Acknowledge and empathize (non-defensive)",
    body: 'Example: "Thank you for taking the time to share your feedback. We are sorry to hear you had this experience."',
  },
  {
    n: 2,
    title: "Take responsibility or clarify facts",
    body: "Do not make excuses. If you made a mistake, own it. If there is a factual error, politely correct it with evidence.",
  },
  {
    n: 3,
    title: "Offer a resolution and move offline",
    body: 'Example: "We would like to make this right. Please email us at [email] or call [number] so we can resolve this privately."',
  },
];

export {
  CONTENT_PLATFORMS_RANKING,
  CONTENT_PLATFORMS_STRATEGY_AVOID,
  CONTENT_PLATFORMS_STRATEGY_DO,
  CONTENT_PLATFORMS_WHY,
} from "./contentPlatformsRanking.js";

export const RESULT_CATEGORIES = [
  {
    id: "positive",
    label: "Positive",
    desc: "Authentic content that helps your reputation",
    color: "border-green bg-green/5",
  },
  {
    id: "neutral",
    label: "Neutral",
    desc: "Factual but non-promotional content",
    color: "border-slate-300 bg-slate-50",
  },
  {
    id: "negative",
    label: "Negative",
    desc: "Harmful, outdated, or misleading content",
    color: "border-destructive/30 bg-destructive/5",
  },
];

export const CRISIS_TIERS = [
  {
    id: "tier1",
    label: "Tier 1 - Critical",
    summary: "False accusations, defamation, threats",
    detail:
      "Consult a lawyer immediately. Document everything. Contact the platform for removal. Do NOT engage with the person directly on social media.",
  },
  {
    id: "tier2",
    label: "Tier 2 - High",
    summary: "Negative client review, critical press, social attack",
    detail:
      "Use the 3-step review response formula. Move conversations offline. Begin counter-content within 48 hours.",
  },
  {
    id: "tier3",
    label: "Tier 3 - Medium",
    summary: "Forum criticism, outdated info ranking high",
    detail:
      "Request updates from the source. Publish fresher, optimized content. Monitor weekly until pushed down.",
  },
  {
    id: "tier4",
    label: "Tier 4 - Low",
    summary: "Minor mentions, niche platform criticism",
    detail:
      "Monitor but do not overreact. Focus energy on building positive assets that dominate page 1.",
  },
];

export const DIY_TIMELINE_PHASES = [
  {
    id: "p1",
    range: "Weeks 1-2",
    summary: "Audit and foundation",
    detail:
      "Claim profiles, create and optimize social media platforms, set up Google Alerts, and document your baseline search results.",
  },
  {
    id: "p2",
    range: "Weeks 3-8",
    summary: "Content and early movement",
    detail:
      "Publish weekly on 2-3 platforms. Initial suppression efforts start showing as new positive URLs enter the top 10.",
  },
  {
    id: "p3",
    range: "Weeks 8-12",
    summary: "First-page shift",
    detail:
      "Positive content ranks higher. Negative items move toward page 2. Review velocity and responses accelerate trust signals.",
  },
  {
    id: "p4",
    range: "3-6 months",
    summary: "Page 1 dominance",
    detail:
      "Full first-page control with positive results. Ongoing monitoring prevents new negatives from sticking.",
  },
];

export const DIY_MYTHS = [
  {
    id: "diy-myth-1",
    title: 'Myth: "Delete my old accounts and the problem goes away."',
    body: "Abandoned profiles can still rank or get scraped. Claim, update, or properly close accounts - don't leave zombie pages that contradict your current story.",
  },
  {
    id: "diy-myth-2",
    title: 'Myth: "One viral positive post will fix everything."',
    body: "A single post rarely outranks entrenched negative URLs. Sustainable suppression needs multiple authoritative assets over weeks, not days.",
  },
  {
    id: "diy-myth-3",
    title: 'Myth: "I should respond to every critic publicly."',
    body: "Public fights refresh negative pages and attract attention. Professional, brief responses plus offline resolution work better.",
  },
];

export const DIY_MISTAKES = [
  {
    id: "diy-mistake-1",
    title: "Engaging emotionally on social media",
    body: "Defensive threads rank higher and spread faster. Pause 24 hours, then respond with a calm, factual statement-or not at all.",
  },
  {
    id: "diy-mistake-2",
    title: "Buying fake positive reviews",
    body: "Social media and review platforms use automated systems to catch fake reviews, fake accounts leaving reviews, or paid review schemes. If caught, your profile gets deleted, suspended, or flagged for extra monitoring - making the damage far worse than having honest reviews.",
  },
  {
    id: "diy-mistake-3",
    title: "Ignoring the issue",
    body: "Negative content does not age out on high-authority sites. Without new positive signals, page 1 stays damaged for years.",
  },
  {
    id: "diy-mistake-4",
    title: "Stopping after 30 days",
    body: "Suppression is momentum. Most DIY practitioners quit before Google has enough fresh authority to reorder results.",
  },
];

export const DIY_CHECKLIST = [
  "I searched my name in incognito on Google, Bing, and DuckDuckGo this month.",
  "My Google Business Profile and LinkedIn are 100% complete and current.",
  "I published at least one piece of positive, optimized content this month.",
  "I responded to every new review within 48 hours.",
  "Google Alerts are active for my name, brand, and key negative terms.",
];

export const DIY_FAQS = DIY_REPUTATION_GUIDE_FAQS;

export const SOCIAL_PLATFORMS = [
  {
    id: "linkedin",
    title: "LinkedIn",
    tips: [
      "Complete every profile section with detailed expertise",
      "Post insights 2-3 times per week",
      "Publish LinkedIn articles for branded searches",
      "Collect recommendations from clients and colleagues",
    ],
  },
  {
    id: "twitter",
    title: "Twitter/X",
    tips: [
      "Share genuine field insights consistently",
      "Engage in relevant conversations professionally",
      "Avoid reactive controversy that can spread fast",
      "Announce wins and speaking engagements",
    ],
  },
  {
    id: "instagram",
    title: "Instagram",
    tips: [
      "Use a professional headshot and optimize your bio with your role and expertise",
      "Post 80% expertise content and 20% personal moments to build credibility",
      "Highlight client wins, speaking engagements, and case studies",
      "Maintain consistent username, photo, and bio across all platforms (LinkedIn, Twitter, website)",
    ],
  },
];
