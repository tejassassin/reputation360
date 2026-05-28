import { BLOG_INDEX_PATH } from "../../constants/blogPaths.js";
import { PACK20_BY_SLUG } from "../../data/blogs/pack20/catalog.js";
import {
  DIY_REPUTATION_GUIDE_PATH,
  diyReputationGuideHero,
} from "../../data/blogs/diyReputationGuide.js";
import {
  REMOVE_NEGATIVE_SEARCH_RESULTS_PATH,
  removeNegativeSearchResultsHero,
} from "../../data/blogs/removeNegativeSearchResultsGuide.js";
import {
  REPUTATION_REPAIR_TIMELINE_PATH,
  reputationRepairTimelineHero,
} from "../../data/blogs/reputationRepairTimelineGuide.js";
import {
  REMOVE_NEWS_ARTICLES_FROM_GOOGLE_PATH,
  removeNewsArticlesFromGoogleHero,
} from "../../data/blogs/removeNewsArticlesFromGoogleGuide.js";
import { SUPPRESS_NEGATIVE_GUIDE_PATH } from "../../data/blogs/suppressNegativeGuideMeta.js";
import { getCaseStudyBySlug } from "../../data/caseStudies/index.js";
import { normalizeCanonicalPath } from "../canonicalHrefFromPath.js";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { stripSuppressNegativeGuidePreamble } from "../../data/blogs/suppressNegativeGuideStrip.js";
import { HOME_FROM_OUR_BLOG_SUBHEADING } from "../../data/homeFromOurBlog.js";
import { isWhoWeServeAudiencePath } from "./whoWeServeAudienceLinksToHtml.js";

const prerenderRoot = join(dirname(fileURLToPath(import.meta.url)), "../..");

/** @param {import("../../data/blogs/pack20/types.js").Pack20Article} article */
function pack20ProbeSentence(article) {
  const block = article.introBlocks?.find((b) => b.type === "p");
  if (block?.text) return block.text;
  if (article.hero?.lead) return article.hero.lead;
  return article.listing.title;
}

function loadSuppressNegativeFirstParagraph() {
  const mdPath = join(
    prerenderRoot,
    "data/blogs/suppress-negative-content-guide.md",
  );
  const md = stripSuppressNegativeGuidePreamble(readFileSync(mdPath, "utf8"));
  const chunk = md
    .split(/\n{2,}/)
    .map((s) => s.trim())
    .find((s) => s && !s.startsWith("#"));
  return (
    chunk
      ?.replace(/^#+\s+/gm, "")
      .replace(/\*\*/g, "")
      .replace(/\s+/g, " ")
      .slice(0, 120) ?? null
  );
}

/**
 * A distinctive plain-text sentence that must appear in static HTML for SEO acceptance.
 * @param {string} pathname
 * @returns {string | null}
 */
export function getPrerenderProbeSentence(pathname) {
  const path = normalizeCanonicalPath(pathname);

  if (path === "/") {
    return HOME_FROM_OUR_BLOG_SUBHEADING;
  }

  if (path === "/services") {
    return "Real results from our reputation management work";
  }

  if (path === "/about") {
    return "A sample of results we've delivered for our clients";
  }

  if (path === BLOG_INDEX_PATH) {
    return "Expert articles on negative link suppression, crisis management, and long-term reputation strategy.";
  }

  if (path === "/case-studies") {
    return "Detailed analysis of how we restore trust, counter harmful narratives, and rebuild digital legacies.";
  }

  const blogMatch = path.match(/^\/blog\/([^/]+)$/);
  if (blogMatch) {
    const slug = decodeURIComponent(blogMatch[1]);
    const packArticle = PACK20_BY_SLUG.get(slug);
    if (packArticle) return pack20ProbeSentence(packArticle);

    if (path === SUPPRESS_NEGATIVE_GUIDE_PATH) {
      return loadSuppressNegativeFirstParagraph();
    }

    if (path === DIY_REPUTATION_GUIDE_PATH) {
      return diyReputationGuideHero.lead;
    }

    if (path === REMOVE_NEGATIVE_SEARCH_RESULTS_PATH) {
      return removeNegativeSearchResultsHero.lead;
    }

    if (path === REPUTATION_REPAIR_TIMELINE_PATH) {
      return reputationRepairTimelineHero.lead;
    }

    if (path === REMOVE_NEWS_ARTICLES_FROM_GOOGLE_PATH) {
      return removeNewsArticlesFromGoogleHero.lead;
    }
  }

  const caseMatch = path.match(/^\/case-studies\/([^/]+)$/);
  if (caseMatch) {
    const study = getCaseStudyBySlug(caseMatch[1]);
    return study?.summary ?? study?.listTitle ?? null;
  }

  if (isWhoWeServeAudiencePath(path)) {
    return "See It In Action";
  }

  return null;
}
