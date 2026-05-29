import { AUDIENCE_PATH } from "../../constants/whoWeServePaths.js";
import { DIY_REPUTATION_GUIDE_PATH } from "./diyReputationGuide.js";
import { REMOVE_NEGATIVE_SEARCH_RESULTS_PATH } from "./removeNegativeSearchResultsGuide.js";
import { SUPPRESS_NEGATIVE_GUIDE_PATH } from "./suppressNegativeGuideMeta.js";

export const GUIDE_NAV = [
  { id: "intro", label: "Introduction" },
  { id: "how-google-works", label: "How Google Works" },
  { id: "when-google-removes", label: "Google Removal" },
  { id: "publisher-removal", label: "Publisher Route" },
  { id: "legal-routes", label: "Legal Options" },
  { id: "when-removal-fails", label: "Suppression" },
  { id: "who-this-affects", label: "Who It Affects" },
  { id: "start", label: "Next Step" },
];

export const SCROLL_SPY_ORDER = [
  "intro",
  "how-google-works",
  "when-google-removes",
  "publisher-removal",
  "legal-routes",
  "when-removal-fails",
  "who-this-affects",
  "start",
];

export const GOOGLE_REMOVAL_PATHS = [
  {
    id: "outdated",
    label: "Outdated or deleted content",
    verdict: "yes",
    verdictLabel: "Often works",
    body: "If a news article has already been deleted from the publication's website but still appears in Google via cache or an outdated index entry, you can request removal through Google's Remove Outdated Content tool. This is the fastest and most reliable path Google offers - but only when the page is genuinely gone from the source.",
  },
  {
    id: "pii",
    label: "Personally identifiable information",
    verdict: "sometimes",
    verdictLabel: "Sometimes",
    body: "Google may remove certain types of personally identifiable information (PII) from search results - including financial details, government ID numbers, medical records, login credentials, and content designed to facilitate identity theft or fraud. If a news article exposes this data, a formal removal request stands a reasonable chance of success.",
  },
  {
    id: "policy",
    label: "Policy violations",
    verdict: "rarely",
    verdictLabel: "Rarely for news",
    body: "Google will act on content that violates specific policies - non-consensual intimate images, content endangering minors, doxxing that creates physical risk, and similar categories. News articles rarely qualify, but review Google's current policy list if you believe the content crosses one of these lines.",
  },
];

export const LEGAL_ROUTE_ACCORDIONS = [
  {
    id: "defamation",
    title: "Defamation and cease-and-desist",
    body: "If a news article contains demonstrably false statements that have caused measurable harm, you may have grounds for defamation. A formal letter from a solicitor identifying false statements and demanding correction or removal often prompts action when a polite request failed. The content must be factually false - not merely unflattering or opinion-based. Fair comment and honest opinion are generally protected.",
  },
  {
    id: "dmca",
    title: "DMCA takedowns",
    body: "If a news article used your copyrighted material without permission - photographs, original writing, proprietary research - a DMCA takedown can compel the publisher and Google to remove the infringing material. This applies to copyright violations specifically, not to the article being damaging on its own.",
  },
  {
    id: "rtbf",
    title: "Right to be forgotten (EU)",
    body: "For individuals with significant EU connections, GDPR's Right to Be Forgotten allows requests to delist certain content from Google's European index. It does not delete the article - it removes the link from European search - and Google weighs privacy against journalistic value case by case. Outcomes are not guaranteed, but old, irrelevant negative coverage can qualify.",
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
    title: "See Real Reputation Recovery Results - Reputation360 Case Studies",
    href: "/case-studies",
    category: "Case Studies",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Team reviewing results",
  },
  {
    title: "Our Services - Google Reputation Management, Negative Link Suppression & More",
    href: "/services",
    category: "Services",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Consultation meeting",
  },
];
