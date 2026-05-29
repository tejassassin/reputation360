import { blogPostPath } from "../constants/blogPaths.js";
import { AUDIENCE_PATH } from "../constants/whoWeServePaths.js";
import { PACK20_FAQ_SCHEMA_BY_PATH } from "./blogs/pack20/pack20FaqRegistry.js";
import { HOME_FAQ_ITEMS } from "./homeFaqItems.js";
import { SERVICES_FAQ_ITEMS } from "./servicesFaqItems.js";
import {
  buildFaqPageSchema,
  mapQaFaqs,
  mapQuestionAnswerFaqs,
  RESOURCES_FAQ_SCHEMA_ITEMS,
} from "./faqPageSchema.js";
import {
  BUSINESS_FAQ_ITEMS,
  DOCTOR_FAQ_ITEMS,
  EXECUTIVE_FAQ_ITEMS,
  FINANCIAL_ADVISOR_FAQ_ITEMS,
  JOB_SEEKER_FAQ_ITEMS,
  LAWYER_FAQ_ITEMS,
  PERSONAL_REPUTATION_FAQ_ITEMS,
} from "./whoWeServeAudienceFaqs.js";
import { DIY_FAQS } from "./blogs/diyReputationGuideInteractive.js";
import { SUPPRESS_NEGATIVE_GUIDE_FAQS } from "./blogs/suppressNegativeGuideFaqs.js";
import {
  REMOVE_NEGATIVE_SEARCH_RESULTS_FAQS,
  REMOVE_NEWS_ARTICLES_FAQS,
  REPUTATION_REPAIR_TIMELINE_FAQS,
} from "./blogs/blogFaqsRewritten.js";

const DIY_REPUTATION_GUIDE_PATH = blogPostPath(
  "diy-online-reputation-management-complete-guide",
);
const SUPPRESS_NEGATIVE_GUIDE_PATH = blogPostPath(
  "how-to-suppress-negative-content-professionals-guide",
);
const REMOVE_NEGATIVE_SEARCH_RESULTS_PATH = blogPostPath(
  "remove-negative-search-results-from-google",
);
const REPUTATION_REPAIR_TIMELINE_PATH = blogPostPath(
  "how-long-does-it-take-to-fix-online-reputation",
);
const REMOVE_NEWS_ARTICLES_FROM_GOOGLE_PATH = blogPostPath(
  "can-you-remove-news-articles-from-google-search",
);

/** @type {Record<string, { question: string, answer: string }[]>} */
const FAQ_ITEMS_BY_PATH = {
  "/": mapQuestionAnswerFaqs(HOME_FAQ_ITEMS),
  "/services": mapQuestionAnswerFaqs(SERVICES_FAQ_ITEMS),
  "/resources/faqs": RESOURCES_FAQ_SCHEMA_ITEMS,
  [AUDIENCE_PATH.individuals]: mapQuestionAnswerFaqs(PERSONAL_REPUTATION_FAQ_ITEMS),
  [AUDIENCE_PATH.financialAdvisors]: mapQuestionAnswerFaqs(FINANCIAL_ADVISOR_FAQ_ITEMS),
  [AUDIENCE_PATH.executives]: mapQuestionAnswerFaqs(EXECUTIVE_FAQ_ITEMS),
  [AUDIENCE_PATH.doctors]: mapQuestionAnswerFaqs(DOCTOR_FAQ_ITEMS),
  [AUDIENCE_PATH.lawyers]: mapQuestionAnswerFaqs(LAWYER_FAQ_ITEMS),
  [AUDIENCE_PATH.jobSeekers]: mapQuestionAnswerFaqs(JOB_SEEKER_FAQ_ITEMS),
  [AUDIENCE_PATH.businesses]: mapQuestionAnswerFaqs(BUSINESS_FAQ_ITEMS),
  [DIY_REPUTATION_GUIDE_PATH]: mapQaFaqs(DIY_FAQS),
  [SUPPRESS_NEGATIVE_GUIDE_PATH]: mapQaFaqs(SUPPRESS_NEGATIVE_GUIDE_FAQS),
  [REMOVE_NEGATIVE_SEARCH_RESULTS_PATH]: mapQaFaqs(REMOVE_NEGATIVE_SEARCH_RESULTS_FAQS),
  [REPUTATION_REPAIR_TIMELINE_PATH]: mapQaFaqs(REPUTATION_REPAIR_TIMELINE_FAQS),
  [REMOVE_NEWS_ARTICLES_FROM_GOOGLE_PATH]: mapQaFaqs(REMOVE_NEWS_ARTICLES_FAQS),
  ...PACK20_FAQ_SCHEMA_BY_PATH,
};

/**
 * FAQPage JSON-LD for a canonical route path (static HTML + build scripts).
 * @param {string} pathname
 */
export function getFaqPageSchemaForPath(pathname) {
  const items = FAQ_ITEMS_BY_PATH[pathname];
  if (!items?.length) {
    return null;
  }
  return buildFaqPageSchema(items);
}
