import { NEGATIVE_LINK_SUPPRESSION_PATH } from "../../constants/servicePaths.js";

export const NLS_PAGE_PATH = NEGATIVE_LINK_SUPPRESSION_PATH;

export const nlsPageSeoTitle = "Negative Link Suppression Services | Reputation360";

export const nlsPageMetaDescription =
  "One harmful search result is enough to cost you clients, deals, and opportunities. Reputation360 pushes damaging content off page one - ethically, precisely, and permanently. Get a free search analysis.";

export const nlsPageHero = {
  title: "Negative Link Suppression Services - Push Down Harmful Google Results",
  titleHighlight: "",
  leadParagraphs: [
    "Damaging search results don't go away on their own.",
    "Reputation360's Negative Link Suppression displaces harmful content from page one and replaces it with what you want people to see.",
  ],
  trustLine:
    "Confidential. No obligation. Results across the US, Canada, and Australia.",
  freeScanLabel: "Get Your Free Search Analysis",
  consultLabel: "Speak to a Specialist",
};

export const NLS_GUIDE_NAV = [
  { id: "what-is", label: "What Is Negative Link Suppression?" },
  { id: "why-costs", label: "Why Harmful Search Results Cost You More Than You Realize" },
  { id: "search-results", label: "Understanding What Is in Your Search Results" },
  { id: "removal-vs-suppression", label: "Content Removal vs. Negative Link Suppression" },
  { id: "when-suppression", label: "When Is Negative Link Suppression the Right Approach?" },
  { id: "feasibility", label: "Not All Negative Content Is the Same" },
  { id: "content-types", label: "What Types of Harmful Content Can Be Suppressed?" },
  { id: "process", label: "How Our Negative Link Suppression Process Works" },
  { id: "timeline", label: "How Long Does It Take?" },
  { id: "who-we-help", label: "Who We Help" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "start", label: "One Conversation Changes What People Find First" },
];

export const NLS_SCROLL_TARGET_CLASS = "scroll-mt-36 md:scroll-mt-40";

export const NLS_SCROLL_SPY_ORDER = NLS_GUIDE_NAV.map((item) => item.id);
