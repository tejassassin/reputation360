import { blogPostPath } from "../constants/blogPaths.js";
import {
  buildBlogPostingSchema,
  guideListingToSchemaInput,
  pack20ArticleToSchemaInput,
} from "./articleSchema.js";
import { diyReputationGuideListing, diyReputationGuideMetaDescription } from "./blogs/diyReputationGuide.js";
import { PACK20_ARTICLES } from "./blogs/pack20/catalog.js";
import {
  removeNegativeSearchResultsListing,
  removeNegativeSearchResultsMetaDescription,
} from "./blogs/removeNegativeSearchResultsGuide.js";
import {
  removeNewsArticlesFromGoogleListing,
  removeNewsArticlesFromGoogleMetaDescription,
} from "./blogs/removeNewsArticlesFromGoogleGuide.js";
import {
  reputationRepairTimelineListing,
  reputationRepairTimelineMetaDescription,
} from "./blogs/reputationRepairTimelineGuide.js";
import {
  suppressNegativeGuideListing,
  suppressNegativeGuideMetaDescription,
} from "./blogs/suppressNegativeGuideMeta.js";

const DIY_REPUTATION_GUIDE_PATH = blogPostPath(
  "diy-online-reputation-management-complete-guide",
);
const SUPPRESS_NEGATIVE_GUIDE_PATH = blogPostPath(
  "how-to-suppress-negative-content-professionals-guide",
);
const REMOVE_NEGATIVE_SEARCH_RESULTS_PATH = blogPostPath(
  "remove-negative-search-results-from-google",
);
const REMOVE_NEWS_ARTICLES_PATH = blogPostPath(
  "can-you-remove-news-articles-from-google-search",
);
const REPUTATION_REPAIR_TIMELINE_PATH = blogPostPath(
  "how-long-does-it-take-to-fix-online-reputation",
);

/** @type {Record<string, ReturnType<typeof buildBlogPostingSchema>>} */
const ARTICLE_SCHEMA_BY_PATH = {
  [DIY_REPUTATION_GUIDE_PATH]: buildBlogPostingSchema(
    guideListingToSchemaInput(
      DIY_REPUTATION_GUIDE_PATH,
      diyReputationGuideListing,
      diyReputationGuideMetaDescription,
    ),
  ),
  [SUPPRESS_NEGATIVE_GUIDE_PATH]: buildBlogPostingSchema(
    guideListingToSchemaInput(
      SUPPRESS_NEGATIVE_GUIDE_PATH,
      suppressNegativeGuideListing,
      suppressNegativeGuideMetaDescription,
    ),
  ),
  [REMOVE_NEGATIVE_SEARCH_RESULTS_PATH]: buildBlogPostingSchema(
    guideListingToSchemaInput(
      REMOVE_NEGATIVE_SEARCH_RESULTS_PATH,
      removeNegativeSearchResultsListing,
      removeNegativeSearchResultsMetaDescription,
    ),
  ),
  [REMOVE_NEWS_ARTICLES_PATH]: buildBlogPostingSchema(
    guideListingToSchemaInput(
      REMOVE_NEWS_ARTICLES_PATH,
      removeNewsArticlesFromGoogleListing,
      removeNewsArticlesFromGoogleMetaDescription,
    ),
  ),
  [REPUTATION_REPAIR_TIMELINE_PATH]: buildBlogPostingSchema(
    guideListingToSchemaInput(
      REPUTATION_REPAIR_TIMELINE_PATH,
      reputationRepairTimelineListing,
      reputationRepairTimelineMetaDescription,
    ),
  ),
  ...Object.fromEntries(
    PACK20_ARTICLES.map((article) => [
      article.path,
      buildBlogPostingSchema(pack20ArticleToSchemaInput(article)),
    ]),
  ),
};

/**
 * BlogPosting JSON-LD for a canonical blog route (static HTML + build scripts).
 * @param {string} pathname
 */
export function getArticleSchemaForPath(pathname) {
  return ARTICLE_SCHEMA_BY_PATH[pathname] ?? null;
}
