/** @type {Record<string, () => Promise<{ article: import('./types.js').Pack20Article }>>} */
const PACK20_LOADERS = {
  "how-to-suppress-negative-search-results-reputation360-framework": () =>
    import("./blog01.js"),
  "rank-positive-content-above-negative-results-reputation360-strategy": () =>
    import("./blog02.js"),
  "removal-vs-suppression-which-actually-works-reputation360": () => import("./blog03.js"),
  "old-social-media-posts-showing-up-google-reputation360-guide": () => import("./blog05.js"),
  "negative-links-cost-jobs-deals-real-cases-reputation360": () => import("./blog06.js"),
  "remove-court-records-google-reputation360": () => import("./blog07.js"),
  "crisis-management-reputation-recovery-reputation360-playbook": () => import("./blog08.js"),
  "linkedin-profile-optimization-search-results-reputation360-checklist": () =>
    import("./blog09.js"),
  "what-recruiters-google-about-you-reputation360-insider-report": () => import("./blog10.js"),
  "fix-reputation-before-job-interview-reputation360-guide": () => import("./blog11.js"),
  "own-your-first-page-control-google-results-reputation360": () => import("./blog12.js"),
  "why-first-google-result-matters-psychology-reputation360": () => import("./blog13.js"),
  "hidden-cost-ignoring-online-reputation-reputation360-analysis": () => import("./blog14.js"),
  "online-reputation-management-best-practices-reputation360-methodology": () =>
    import("./blog15.js"),
  "roi-reputation-management-what-clients-see-reputation360": () => import("./blog16.js"),
  "building-positive-google-presence-profile-claiming-guide-reputation360": () =>
    import("./blog17.js"),
  "monitoring-online-reputation-tools-tactics-reputation360": () => import("./blog18.js"),
  "social-media-reputation-management-multi-platform-strategy-reputation360": () =>
    import("./blog19.js"),
  "ai-search-changes-reputation-chatgpt-beyond-reputation360-guide": () => import("./blog20.js"),
};

/**
 * @param {string} slug
 * @returns {Promise<import('./types.js').Pack20Article | undefined>}
 */
export async function loadPack20Article(slug) {
  const loader = PACK20_LOADERS[slug];
  if (!loader) return undefined;
  return (await loader()).article;
}

/** @param {import('./types.js').Pack20Article} related */
export function pack20RelatedFromArticle(related) {
  return {
    title: related.listing.title,
    href: related.path,
    category: related.listing.category,
    readTime: related.listing.readTime.includes("read")
      ? related.listing.readTime
      : `${related.listing.readTime} read`,
    image: related.listing.image,
    imageAlt: related.listing.imageAlt,
  };
}

/**
 * @param {import('./types.js').Pack20Article} article
 */
export async function loadPack20RelatedArticles(article) {
  if (article.relatedReading?.length) {
    return article.relatedReading;
  }
  const related = [];
  for (const slug of article.relatedSlugs ?? []) {
    const match = await loadPack20Article(slug);
    if (match) related.push(pack20RelatedFromArticle(match));
  }
  return related;
}
