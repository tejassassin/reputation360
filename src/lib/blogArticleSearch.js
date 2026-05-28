/**
 * @param {string | null | undefined} raw
 */
export function normalizeBlogSearchQuery(raw) {
  if (!raw) return "";
  return String(raw).trim().replace(/\s+/g, " ");
}

/**
 * @param {{ title?: string; excerpt?: string; category?: string; filter?: string }} article
 * @param {string} query
 */
export function articleMatchesBlogSearch(article, query) {
  const q = normalizeBlogSearchQuery(query).toLowerCase();
  if (!q) return true;

  const haystack = [article.title, article.excerpt, article.category, article.filter]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return haystack.includes(q);
}

/**
 * @param {string | null | undefined} search
 */
export function blogSearchResultsPath(search) {
  const q = normalizeBlogSearchQuery(search);
  if (!q) return "/blog";
  return `/blog?q=${encodeURIComponent(q)}`;
}
