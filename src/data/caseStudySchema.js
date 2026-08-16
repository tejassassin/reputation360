import { METADATA_BASE } from "../constants/siteUrl.js";
import { getCaseStudyImage } from "../components/CaseStudyMetaPill.jsx";
import { ORGANIZATION_ID } from "./localBusinessSchema.js";
import { FOUNDING_YEAR } from "../constants/brandProfiles.js";
import { getCaseStudyBySlug } from "./caseStudies/index.js";

export const JSONLD_CASE_STUDY_ARTICLE_ID = "r360-jsonld-case-study-article";

/** Stable publish date for anonymised case studies (no per-study dates in CMS). */
const CASE_STUDY_DATE_PUBLISHED = `${FOUNDING_YEAR}-06-01`;

/**
 * @param {import("./caseStudies/types.js").CaseStudy & { slug: string }} study
 * @returns {Record<string, unknown> | null}
 */
export function buildCaseStudyArticleSchema(study) {
  const headline = study.listTitle?.trim();
  const description = (study.metaDescription || study.summary || "").trim();
  const slug = study.slug?.trim();
  if (!headline || !description || !slug) {
    return null;
  }

  const path = `/case-studies/${slug}`;
  const url = `${METADATA_BASE}${path}`;
  const image = getCaseStudyImage(study.n);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline,
    description,
    image: [image],
    datePublished: CASE_STUDY_DATE_PUBLISHED,
    dateModified: CASE_STUDY_DATE_PUBLISHED,
    author: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

/**
 * @param {string} pathname
 * @returns {{ id: string; data: Record<string, unknown> }[]}
 */
export function caseStudyArticleJsonLdBlocks(pathname) {
  const match = pathname.match(/^\/case-studies\/([^/]+)$/);
  if (!match) {
    return [];
  }
  const study = getCaseStudyBySlug(decodeURIComponent(match[1]));
  if (!study) {
    return [];
  }
  const data = buildCaseStudyArticleSchema(study);
  if (!data) {
    return [];
  }
  return [{ id: JSONLD_CASE_STUDY_ARTICLE_ID, data }];
}
