import { lazy } from "react";
import ServicesPage from "../pages/ServicesPage.jsx";
import {
  AUDIENCE_PATH,
  LEGACY_SERVICE_AUDIENCE_PATH,
  WHO_WE_SERVE_HUB_PATH,
} from "../constants/whoWeServePaths.js";
import { BLOG_INDEX_PATH } from "../constants/blogPaths.js";
import { DIY_REPUTATION_GUIDE_SLUG } from "../data/blogs/diyReputationGuide.js";
import { SUPPRESS_NEGATIVE_GUIDE_SLUG } from "../data/blogs/suppressNegativeContentGuide.js";
import { REMOVE_NEGATIVE_SEARCH_RESULTS_SLUG } from "../data/blogs/removeNegativeSearchResultsGuide.js";
import { REPUTATION_REPAIR_TIMELINE_SLUG } from "../data/blogs/reputationRepairTimelineGuide.js";
import { REMOVE_NEWS_ARTICLES_FROM_GOOGLE_SLUG } from "../data/blogs/removeNewsArticlesFromGoogleGuide.js";
import { PACK20_SLUGS } from "../data/blogs/pack20/slugs.js";
import { FREE_RISK_SCAN_PATH } from "../constants/freeRiskScan.js";

const AboutPage = lazy(() => import("../pages/AboutPage.jsx"));
const OnlineReputationManagementPage = lazy(
  () => import("../pages/OnlineReputationManagementPage.jsx"),
);
const FinancialAdvisorsPage = lazy(() => import("../pages/FinancialAdvisorsPage.jsx"));
const JobSeekersPage = lazy(() => import("../pages/JobSeekersPage.jsx"));
const DoctorsPage = lazy(() => import("../pages/DoctorsPage.jsx"));
const LawyersPage = lazy(() => import("../pages/LawyersPage.jsx"));
const ExecutivesPage = lazy(() => import("../pages/ExecutivesPage.jsx"));
const BusinessesPage = lazy(() => import("../pages/BusinessesPage.jsx"));
const IndividualsPage = lazy(() => import("../pages/IndividualsPage.jsx"));
const CaseStudiesPage = lazy(() => import("../pages/CaseStudiesPage.jsx"));
const CaseStudyDetailPage = lazy(() => import("../pages/CaseStudyDetailPage.jsx"));
const ContactPage = lazy(() => import("../pages/ContactPage.jsx"));
const FaqsPage = lazy(() => import("../pages/FaqsPage.jsx"));
const InsightsBlogsPage = lazy(() => import("../pages/InsightsBlogsPage.jsx"));
const BlogSuppressNegativeContentGuidePage = lazy(
  () => import("../pages/BlogSuppressNegativeContentGuidePage.jsx"),
);
const BlogDiyReputationGuidePage = lazy(
  () => import("../pages/BlogDiyReputationGuidePage.jsx"),
);
const BlogRemoveNegativeSearchResultsPage = lazy(
  () => import("../pages/BlogRemoveNegativeSearchResultsPage.jsx"),
);
const BlogReputationRepairTimelinePage = lazy(
  () => import("../pages/BlogReputationRepairTimelinePage.jsx"),
);
const BlogRemoveNewsArticlesFromGooglePage = lazy(
  () => import("../pages/BlogRemoveNewsArticlesFromGooglePage.jsx"),
);
const BlogPack20ArticlePage = lazy(() => import("../pages/BlogPack20ArticlePage.jsx"));
const GuidePage = lazy(() => import("../pages/GuidePage.jsx"));
const AcceptableUsePolicyPage = lazy(() => import("../pages/AcceptableUsePolicyPage.jsx"));
const CookiePolicyPage = lazy(() => import("../pages/CookiePolicyPage.jsx"));
const PrivacyPolicyPage = lazy(() => import("../pages/PrivacyPolicyPage.jsx"));
const RefundPolicyPage = lazy(() => import("../pages/RefundPolicyPage.jsx"));
const TermsOfServicePage = lazy(() => import("../pages/TermsOfServicePage.jsx"));
const TermsOfUsePage = lazy(() => import("../pages/TermsOfUsePage.jsx"));
const DmcaCopyrightPolicyPage = lazy(() => import("../pages/DmcaCopyrightPolicyPage.jsx"));
const FreeRiskScanPage = lazy(() => import("../pages/FreeRiskScanPage.jsx"));
const FreeScanAdminPage = lazy(() => import("../pages/FreeScanAdminPage.jsx"));

const audienceRouteRows = [
  [IndividualsPage, AUDIENCE_PATH.individuals, LEGACY_SERVICE_AUDIENCE_PATH.individuals],
  [
    FinancialAdvisorsPage,
    AUDIENCE_PATH.financialAdvisors,
    LEGACY_SERVICE_AUDIENCE_PATH.financialAdvisors,
  ],
  [ExecutivesPage, AUDIENCE_PATH.executives, LEGACY_SERVICE_AUDIENCE_PATH.executives],
  [DoctorsPage, AUDIENCE_PATH.doctors, LEGACY_SERVICE_AUDIENCE_PATH.doctors],
  [LawyersPage, AUDIENCE_PATH.lawyers, LEGACY_SERVICE_AUDIENCE_PATH.lawyers],
  [JobSeekersPage, AUDIENCE_PATH.jobSeekers, LEGACY_SERVICE_AUDIENCE_PATH.jobSeekers],
  [BusinessesPage, AUDIENCE_PATH.businesses, LEGACY_SERVICE_AUDIENCE_PATH.businesses],
];

function audiencePageForPath(path) {
  for (const [Page, canonicalPath, legacyPath] of audienceRouteRows) {
    if (path === canonicalPath || path === legacyPath) return <Page />;
  }
  return null;
}

/** Non-home routes only. Imported from a separate chunk so "/" does not preload every page. */
export function pageForNonHomePath(path) {
  if (path === "/about") return <AboutPage />;
  if (path === "/services") return <ServicesPage />;
  if (path === "/services/online-reputation-management") {
    return <OnlineReputationManagementPage />;
  }
  if (path === WHO_WE_SERVE_HUB_PATH) {
    window.location.replace(AUDIENCE_PATH.individuals);
    return null;
  }
  const audiencePage = audiencePageForPath(path);
  if (audiencePage) return audiencePage;
  if (path === "/case-studies") return <CaseStudiesPage />;
  const caseStudyPath = path.match(/^\/case-studies\/([^/]+)$/);
  if (caseStudyPath) {
    return <CaseStudyDetailPage caseStudySlug={caseStudyPath[1]} />;
  }
  if (path === "/contact") return <ContactPage />;
  if (path === FREE_RISK_SCAN_PATH) return <FreeRiskScanPage />;
  if (path === "/ai-reputation-scan") {
    window.location.replace(FREE_RISK_SCAN_PATH);
    return null;
  }
  if (path === "/free-scan-admin") return <FreeScanAdminPage />;
  if (path === BLOG_INDEX_PATH) return <InsightsBlogsPage />;
  const blogPost = path.match(/^\/blog\/([^/]+)$/);
  if (blogPost) {
    const slug = blogPost[1];
    if (slug === SUPPRESS_NEGATIVE_GUIDE_SLUG) {
      return <BlogSuppressNegativeContentGuidePage />;
    }
    if (slug === DIY_REPUTATION_GUIDE_SLUG) {
      return <BlogDiyReputationGuidePage />;
    }
    if (slug === REMOVE_NEGATIVE_SEARCH_RESULTS_SLUG) {
      return <BlogRemoveNegativeSearchResultsPage />;
    }
    if (slug === REPUTATION_REPAIR_TIMELINE_SLUG) {
      return <BlogReputationRepairTimelinePage />;
    }
    if (slug === REMOVE_NEWS_ARTICLES_FROM_GOOGLE_SLUG) {
      return <BlogRemoveNewsArticlesFromGooglePage />;
    }
    if (PACK20_SLUGS.has(slug)) {
      return <BlogPack20ArticlePage key={slug} slug={slug} />;
    }
  }
  if (path === "/resources/guide") return <GuidePage />;
  if (path === "/resources/faqs") return <FaqsPage />;
  if (path === "/privacy-policy") return <PrivacyPolicyPage />;
  if (path === "/terms-of-service") return <TermsOfServicePage />;
  if (path === "/terms-of-use") return <TermsOfUsePage />;
  if (path === "/cookie-policy") return <CookiePolicyPage />;
  if (path === "/refund-policy") return <RefundPolicyPage />;
  if (path === "/acceptable-use-policy") return <AcceptableUsePolicyPage />;
  if (path === "/dmca-copyright-policy") return <DmcaCopyrightPolicyPage />;
  return null;
}
