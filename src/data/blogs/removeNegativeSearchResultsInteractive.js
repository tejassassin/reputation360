export const GUIDE_NAV = [
  { id: "intro", label: "Introduction" },
  { id: "understand", label: "What You're Up Against" },
  { id: "can-you-remove", label: "Can You Remove?" },
  { id: "removal-tactics", label: "Removal Tactics" },
  { id: "suppression", label: "Suppression" },
  { id: "monitoring", label: "Monitoring" },
  { id: "professional", label: "Expert Help" },
  { id: "start", label: "Next Step" },
];

export const SCROLL_SPY_ORDER = [
  "intro",
  "understand",
  "can-you-remove",
  "removal-tactics",
  "suppression",
  "monitoring",
  "professional",
  "start",
];

export const HERO_STATS = [
  { value: "75%", label: "of users never scroll past page 1 of Google results" },
  { value: "85%", label: "of consumers trust online search as much as personal recommendations" },
  { value: "1 in 3", label: "businesses have lost a client due to negative online content" },
];

export const NEGATIVE_CONTENT_TYPES = [
  {
    id: "press",
    label: "Press & news",
    detail: "Negative coverage on high-authority media outlets that outrank your owned pages.",
  },
  {
    id: "complaints",
    label: "Complaint sites",
    detail: "Ripoff Report, PissedConsumer, and similar platforms built to rank for brand names.",
  },
  {
    id: "reviews",
    label: "Reviews",
    detail: "Low-star or misleading reviews on Google, Trustpilot, Glassdoor, or Yelp.",
  },
  {
    id: "defamation",
    label: "Defamation",
    detail: "False or harmful posts from individuals that may qualify for legal or platform action.",
  },
  {
    id: "outdated",
    label: "Outdated info",
    detail: "Old stories or profiles that no longer reflect who you are today.",
  },
  {
    id: "social",
    label: "Social & forums",
    detail: "Threads and posts that spread misinformation or context-stripped narratives.",
  },
  {
    id: "legal",
    label: "Public records",
    detail: "Court filings, arrest records, or legal documents indexed in search.",
  },
];

export const REMOVAL_PATH_ACCORDIONS = [
  {
    id: "google-remove",
    title: "What Google can remove directly",
    body: "Google offers limited removal for personally identifiable information (PII), non-consensual intimate images, policy-violating content (doxxing, revenge porn), and outdated cached URLs. Use the Remove Outdated Content tool or Legal Removal Request form. Delisting does not delete the source page - it can be re-crawled if the publisher keeps it live.",
  },
  {
    id: "publisher",
    title: "What requires publisher action",
    body: "Most articles, reviews, and complaint posts must be changed or removed at the source. That means contacting editors, using platform dispute flows, or pursuing legal routes (defamation, DMCA) when content is demonstrably false or uses your copyrighted material without permission.",
  },
  {
    id: "suppression-path",
    title: "When suppression is the faster path",
    body: "Removal is ideal but often slow or impossible without leverage. Strategic suppression - flooding page one with authoritative positive assets - frequently produces visible movement in 60-120 days and is the backbone of professional reputation repair.",
  },
];

export const REMOVAL_STEPS = [
  {
    n: 1,
    title: "Request removal from the publisher",
    body: "Contact the site owner, editor, or webmaster with a professional, specific request. Explain why the content is inaccurate, outdated, or harmful. Smaller sites and bloggers often comply when the facts are wrong.",
  },
  {
    n: 2,
    title: "File a legal takedown (where applicable)",
    body: "Demonstrably false, damaging content may support a defamation claim. A cease-and-desist from counsel often prompts removal without litigation. DMCA takedowns apply when your copyrighted images or text were used without permission.",
  },
  {
    n: 3,
    title: "Use Google's official removal tools",
    body: "Submit through Search Console or Google's removal forms for outdated pages, sensitive PII, or policy-violating content. Even partial delisting buys time while you pursue the publisher.",
  },
  {
    n: 4,
    title: "Dispute reviews on the platform",
    body: "For fake or policy-breaking Google reviews, dispute via Google Business Profile. Glassdoor, Yelp, and Trustpilot have their own moderation paths. Flagged reviews can be removed when they breach guidelines.",
  },
  {
    n: 5,
    title: "Explore RTBF where it applies",
    body: "In the EU and certain regions, GDPR Right to Be Forgotten requests may delist specific personal information from Google results. Circumstances are narrow and require a formal submission to Google's dedicated team.",
  },
];

export const SUPPRESSION_TACTICS = [
  {
    id: "platforms",
    title: "High-authority platforms",
    body: "Optimize profiles on LinkedIn, Crunchbase, industry publications, Medium, and major directories. Google favors trusted domains - a strong network of verified profiles competes for branded name searches.",
  },
  {
    id: "content",
    title: "Consistent SEO content",
    body: "Publish optimized thought leadership, press, interviews, and blog posts targeting your name and brand. Fresh, relevant content with the right keywords pushes stale negative URLs down over time.",
  },
  {
    id: "backlinks",
    title: "Strategic backlinks",
    body: "Positive pages rarely outrank negatives without links. Build authority to the assets you control so they earn the rankings you need on page one.",
  },
  {
    id: "website",
    title: "Own your website",
    body: "Your site is the most controllable asset in search. Technical SEO, rich branded content, and regular updates help it hold multiple page-one positions.",
  },
];

export const MONITORING_CHECKLIST = [
  "Google Alerts set for your name, brand, and key executives",
  "Review platforms checked weekly for new posts",
  "Branded search results audited on page 1 and page 2 monthly",
  "Social mention sentiment tracked for emerging issues",
  "Reputation monitoring tool or partner providing 24-hour alerts",
];

export const EXPERT_SIGNALS = [
  "Multiple negative results on page one",
  "Damaging content on high-authority news or review sites",
  "DIY removal attempts have failed",
  "Revenue, hiring, or investor relations are affected",
  "You need rapid response during an active crisis",
  "You are a founder, executive, or public-facing professional",
];

export const RELATED_ARTICLES = [
  {
    title:
      "How to Suppress Negative Content: The Professional's Guide to Online Reputation Control",
    href: "/blog/how-to-suppress-negative-content-professionals-guide",
    category: "Reputation Strategy",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Strategy review on laptop",
  },
  {
    title: "Take Control of Your Online Reputation: A Comprehensive Self-Management Guide",
    href: "/blog/diy-online-reputation-management-complete-guide",
    category: "DIY Guide",
    readTime: "25 min read",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Person reviewing search results",
  },
  {
    title: "Personal reputation management for individuals",
    href: "/who-we-serve/individual",
    category: "Who We Serve",
    readTime: "Services",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Professional portrait",
  },
];
