import { blogPostPath } from "../../constants/blogPaths.js";

export const REMOVE_NEWS_ARTICLES_FROM_GOOGLE_SLUG =
  "can-you-remove-news-articles-from-google-search";

export const REMOVE_NEWS_ARTICLES_FROM_GOOGLE_PATH = blogPostPath(
  REMOVE_NEWS_ARTICLES_FROM_GOOGLE_SLUG,
);

export const removeNewsArticlesFromGoogleListing = {
  id: "remove-news-articles-google",
  slug: REMOVE_NEWS_ARTICLES_FROM_GOOGLE_SLUG,
  filter: "Suppression & Removal",
  category: "Suppression & Removal",
  title: "Can You Remove News Articles From Google Search? Online Reputation Management Guide",
  excerpt:
    "Can a news article be removed from Google? When removal is possible, when it isn't, and what actually works to protect your reputation online.",
  date: "May 22, 2026",
  author: "Reputation360",
  readTime: "11 minutes",
  image:
    "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80",
  imageAlt: "Newspaper and digital news headlines",
};

export const removeNewsArticlesFromGoogleSeoTitle =
  "Can You Remove News Articles from Google? | Reputation360";

export const removeNewsArticlesFromGoogleMetaDescription =
  "Find out when Google removes news articles - and what to do when it won't. Publisher requests, legal routes & expert suppression explained.";

export const removeNewsArticlesFromGoogleHero = {
  badge: "Google Reputation Management",
  title: "Can You Remove News Articles From Google Search? Online Reputation Management Guide",
  lead:
    "Removal from Google and removal from the web are not the same thing. This guide explains when Google will act, when publishers might, and what works when they won't.",
};

export const removeNewsArticlesFromGoogleToc = [
  { id: "how-google-works", label: "01. Why Google Shows News Articles" },
  { id: "when-google-removes", label: "02. When Google Will Remove Content" },
  { id: "publisher-removal", label: "03. Publisher Removal Requests" },
  { id: "legal-routes", label: "04. Legal Routes" },
  { id: "when-removal-fails", label: "05. When Removal Isn't Possible" },
  { id: "who-this-affects", label: "06. Who This Affects Most" },
];
