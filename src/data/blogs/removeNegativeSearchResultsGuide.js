import { blogPostPath } from "../../constants/blogPaths.js";

export const REMOVE_NEGATIVE_SEARCH_RESULTS_SLUG = "remove-negative-search-results-from-google";

/** Previous slug; 301 redirect in vercel.json */
export const REMOVE_NEGATIVE_SEARCH_RESULTS_LEGACY_SLUG =
  "how-to-remove-or-suppress-negative-search-results-from-google";

export const REMOVE_NEGATIVE_SEARCH_RESULTS_PATH = blogPostPath(
  REMOVE_NEGATIVE_SEARCH_RESULTS_SLUG,
);

export const removeNegativeSearchResultsListing = {
  id: "remove-negative-search-results",
  slug: REMOVE_NEGATIVE_SEARCH_RESULTS_SLUG,
  filter: "Suppression & Removal",
  category: "Suppression & Removal",
  title: "How to Remove or Suppress Negative Search Results from Google",
  excerpt:
    "Learn proven strategies to remove negative search results from Google where possible - and suppress the rest so page one reflects your real reputation.",
  date: "May 22, 2026",
  author: "Reputation360",
  readTime: "10 minutes",
  image:
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
  imageAlt: "Laptop workspace representing Google search result cleanup",
};

export const removeNegativeSearchResultsSeoTitle =
  "Remove Negative Search Results from Google | Reputation360";

export const removeNegativeSearchResultsMetaDescription =
  "Proven steps to remove or suppress negative Google results: publisher outreach, Google tools, legal routes, and professional suppression - all explained.";

export const removeNegativeSearchResultsHero = {
  badge: "Google Reputation Management",
  title: "How to Remove or Suppress Negative Search Results from Google",
  lead:
    "You Google yourself - and there it is. A damaging article, a scathing review, or outdated press. This guide walks through removal tactics that work and suppression strategies that push harmful results off page one.",
  meta: [
    { value: "75%", label: "Never scroll past page 1" },
    { value: "60-120", label: "Days to suppress (typical)" },
    { value: "100%", label: "Control what ranks" },
  ],
};

export const removeNegativeSearchResultsToc = [
  { id: "understand", label: "01. Understanding What You're Up Against" },
  { id: "can-you-remove", label: "02. Can You Actually Remove Content from Google?" },
  { id: "removal-tactics", label: "03. Step-by-Step Removal Tactics" },
  { id: "suppression", label: "04. Suppression: Pushing Results Down" },
  { id: "monitoring", label: "05. Monitoring Your Google Reputation" },
  { id: "professional", label: "06. When to Bring in an Expert" },
];
