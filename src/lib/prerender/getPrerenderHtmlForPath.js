import { BLOG_INDEX_PATH } from "../../constants/blogPaths.js";
import { PACK20_BY_SLUG } from "../../data/blogs/pack20/catalog.js";
import { PACK20_ARTICLES } from "../../data/blogs/pack20/catalog.js";
import { DIY_REPUTATION_GUIDE_PATH, diyReputationGuideHero } from "../../data/blogs/diyReputationGuide.js";
import * as diyInteractive from "../../data/blogs/diyReputationGuideInteractive.js";
import { REMOVE_NEGATIVE_SEARCH_RESULTS_PATH, removeNegativeSearchResultsHero } from "../../data/blogs/removeNegativeSearchResultsGuide.js";
import * as removeNegativeInteractive from "../../data/blogs/removeNegativeSearchResultsInteractive.js";
import { REPUTATION_REPAIR_TIMELINE_PATH, reputationRepairTimelineHero } from "../../data/blogs/reputationRepairTimelineGuide.js";
import * as reputationTimelineInteractive from "../../data/blogs/reputationRepairTimelineInteractive.js";
import { REMOVE_NEWS_ARTICLES_FROM_GOOGLE_PATH, removeNewsArticlesFromGoogleHero } from "../../data/blogs/removeNewsArticlesFromGoogleGuide.js";
import * as removeNewsInteractive from "../../data/blogs/removeNewsArticlesFromGoogleInteractive.js";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  SUPPRESS_NEGATIVE_GUIDE_PATH,
  suppressNegativeGuideHero,
} from "../../data/blogs/suppressNegativeGuideMeta.js";
import { stripSuppressNegativeGuidePreamble } from "../../data/blogs/suppressNegativeGuideStrip.js";
import { SUPPRESS_NEGATIVE_GUIDE_FAQS } from "../../data/blogs/suppressNegativeGuideFaqs.js";
import {
  REMOVE_NEGATIVE_SEARCH_RESULTS_FAQS,
  REMOVE_NEWS_ARTICLES_FAQS,
  REPUTATION_REPAIR_TIMELINE_FAQS,
} from "../../data/blogs/blogFaqsRewritten.js";
import { CASE_STUDIES, getCaseStudyBySlug } from "../../data/caseStudies/index.js";
import { normalizeCanonicalPath } from "../canonicalHrefFromPath.js";
import { escapeHtml } from "./html.js";
import { caseStudyToHtml } from "./caseStudyToHtml.js";
import { interactiveGuideToHtml } from "./interactiveGuideToHtml.js";
import { blogIndexToHtml, caseStudiesIndexToHtml } from "./listingPagesToHtml.js";
import { markdownGuideToHtml } from "./markdownToHtml.js";
import { pack20ArticleToHtml } from "./pack20ArticleToHtml.js";
import { prependArticleBreadcrumbHtml } from "./articleBreadcrumb.js";
import { furtherReadingSectionHtml } from "./furtherReadingToHtml.js";
import { homePageToHtml } from "./homePageToHtml.js";
import { aboutPageToHtml } from "./aboutPageToHtml.js";
import { servicesPageToHtml } from "./servicesPageToHtml.js";
import { prependBreadcrumbPrerenderHtml } from "../breadcrumbs.js";
import {
  whoWeServeAudiencePageToHtml,
  WHO_WE_SERVE_AUDIENCE_PATHS,
} from "./whoWeServeAudienceLinksToHtml.js";

const prerenderRoot = join(dirname(fileURLToPath(import.meta.url)), "../..");

/**
 * @param {string} path
 * @param {string} bodyHtml
 */
function wrapBlogPrerender(path, bodyHtml) {
  return prependArticleBreadcrumbHtml(
    path,
    `${bodyHtml}${furtherReadingSectionHtml(path)}`,
  );
}

function loadSuppressNegativeGuideMarkdown() {
  const mdPath = join(
    prerenderRoot,
    "data/blogs/suppress-negative-content-guide.md",
  );
  return stripSuppressNegativeGuidePreamble(readFileSync(mdPath, "utf8"));
}

/**
 * @param {string} pathname
 * @returns {string | null}
 */
export function getPrerenderHtmlForPath(pathname) {
  const path = normalizeCanonicalPath(pathname);

  if (path === "/") {
    return homePageToHtml();
  }

  if (path === "/services") {
    return servicesPageToHtml();
  }

  if (path === "/about") {
    return aboutPageToHtml();
  }

  if (path === BLOG_INDEX_PATH) {
    return blogIndexToHtml();
  }

  if (path === "/case-studies") {
    return caseStudiesIndexToHtml();
  }

  const blogMatch = path.match(/^\/blog\/([^/]+)$/);
  if (blogMatch) {
    const slug = decodeURIComponent(blogMatch[1]);

    const packArticle = PACK20_BY_SLUG.get(slug);
    if (packArticle) {
      return wrapBlogPrerender(path, pack20ArticleToHtml(packArticle));
    }

    if (path === SUPPRESS_NEGATIVE_GUIDE_PATH) {
      return wrapBlogPrerender(
        path,
        markdownGuideToHtml(
          suppressNegativeGuideHero,
          loadSuppressNegativeGuideMarkdown(),
        ).concat(
          SUPPRESS_NEGATIVE_GUIDE_FAQS.length
            ? `<section id="faq"><h2>FAQ</h2>${SUPPRESS_NEGATIVE_GUIDE_FAQS.map((faq) => `<h3>${escapeHtml(faq.q)}</h3><p>${escapeHtml(faq.a)}</p>`).join("")}</section>`
            : "",
        ),
      );
    }

    if (path === DIY_REPUTATION_GUIDE_PATH) {
      return wrapBlogPrerender(
        path,
        interactiveGuideToHtml(
          diyReputationGuideHero,
          diyInteractive,
          diyInteractive.DIY_FAQS,
        ),
      );
    }

    if (path === REMOVE_NEGATIVE_SEARCH_RESULTS_PATH) {
      return wrapBlogPrerender(
        path,
        interactiveGuideToHtml(
          removeNegativeSearchResultsHero,
          removeNegativeInteractive,
          REMOVE_NEGATIVE_SEARCH_RESULTS_FAQS,
        ),
      );
    }

    if (path === REPUTATION_REPAIR_TIMELINE_PATH) {
      return wrapBlogPrerender(
        path,
        interactiveGuideToHtml(
          reputationRepairTimelineHero,
          reputationTimelineInteractive,
          REPUTATION_REPAIR_TIMELINE_FAQS,
        ),
      );
    }

    if (path === REMOVE_NEWS_ARTICLES_FROM_GOOGLE_PATH) {
      return wrapBlogPrerender(
        path,
        interactiveGuideToHtml(
          removeNewsArticlesFromGoogleHero,
          removeNewsInteractive,
          REMOVE_NEWS_ARTICLES_FAQS,
        ),
      );
    }
  }

  const caseMatch = path.match(/^\/case-studies\/([^/]+)$/);
  if (caseMatch) {
    const study = getCaseStudyBySlug(caseMatch[1]);
    if (study) {
      return prependArticleBreadcrumbHtml(path, caseStudyToHtml(study));
    }
  }

  const audienceHtml = whoWeServeAudiencePageToHtml(path);
  if (audienceHtml) return prependBreadcrumbPrerenderHtml(path, audienceHtml);

  return null;
}

/** Routes that receive static article HTML during emit-spa-per-route-html. */
export function prerenderPaths() {
  const paths = new Set(["/", "/about", "/services", BLOG_INDEX_PATH, "/case-studies"]);
  for (const article of PACK20_ARTICLES) {
    paths.add(article.path);
  }
  for (const study of CASE_STUDIES) {
    paths.add(`/case-studies/${study.slug}`);
  }
  paths.add(SUPPRESS_NEGATIVE_GUIDE_PATH);
  paths.add(DIY_REPUTATION_GUIDE_PATH);
  paths.add(REMOVE_NEGATIVE_SEARCH_RESULTS_PATH);
  paths.add(REPUTATION_REPAIR_TIMELINE_PATH);
  paths.add(REMOVE_NEWS_ARTICLES_FROM_GOOGLE_PATH);
  for (const audiencePath of WHO_WE_SERVE_AUDIENCE_PATHS) {
    paths.add(audiencePath);
  }
  return [...paths];
}
