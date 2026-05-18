import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import { ErrorBoundary } from "./components/ErrorBoundary.jsx";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import FinancialAdvisorsPage from "./pages/FinancialAdvisorsPage.jsx";
import JobSeekersPage from "./pages/JobSeekersPage.jsx";
import DoctorsPage from "./pages/DoctorsPage.jsx";
import LawyersPage from "./pages/LawyersPage.jsx";
import ExecutivesPage from "./pages/ExecutivesPage.jsx";
import BusinessesPage from "./pages/BusinessesPage.jsx";
import IndividualsPage from "./pages/IndividualsPage.jsx";
import CaseStudiesPage from "./pages/CaseStudiesPage.jsx";
import WhoWeServePage from "./pages/WhoWeServePage.jsx";
import CaseStudyDetailPage from "./pages/CaseStudyDetailPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import FaqsPage from "./pages/FaqsPage.jsx";
import InsightsBlogsPage from "./pages/InsightsBlogsPage.jsx";
import BlogSuppressNegativeContentGuidePage from "./pages/BlogSuppressNegativeContentGuidePage.jsx";
import GuidePage from "./pages/GuidePage.jsx";
import AcceptableUsePolicyPage from "./pages/AcceptableUsePolicyPage.jsx";
import CookiePolicyPage from "./pages/CookiePolicyPage.jsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.jsx";
import RefundPolicyPage from "./pages/RefundPolicyPage.jsx";
import TermsOfServicePage from "./pages/TermsOfServicePage.jsx";
import TermsOfUsePage from "./pages/TermsOfUsePage.jsx";
import DmcaCopyrightPolicyPage from "./pages/DmcaCopyrightPolicyPage.jsx";
import { AUDIENCE_PATH, LEGACY_SERVICE_AUDIENCE_PATH } from "./constants/whoWeServePaths.js";
import { BLOG_INDEX_PATH } from "./constants/blogPaths.js";
import { SUPPRESS_NEGATIVE_GUIDE_SLUG } from "./data/blogs/suppressNegativeContentGuide.js";

if (import.meta.env.DEV) {
  console.info(
    "%c[R360 dev]%c Testimonials are inlined in %cHomePage.jsx%c (text only, no Unsplash). If you still see stock photos, you are not loading this build - in this repo run %cnpm run dev%c and use the URL Vite prints. You should see a %cgreen line: “Text client quotes (no image gallery)”.",
    "color:#4CAF50;font-weight:bold",
    "color:inherit;font-weight:normal",
    "color:#1F3B64;font-weight:600",
    "color:inherit;font-weight:normal",
    "font-family:monospace",
    "color:inherit",
    "color:#2e7d32;font-weight:600",
  );
}

function normalizePath(pathname) {
  return pathname.replace(/\/+$/, "") || "/";
}

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

function pageForPath(path) {
  if (path === "/about") return <AboutPage />;
  if (path === "/services") return <ServicesPage />;
  if (path === "/who-we-serve") return <WhoWeServePage />;
  const audiencePage = audiencePageForPath(path);
  if (audiencePage) return audiencePage;
  if (path === "/case-studies") return <CaseStudiesPage />;
  const caseStudyPath = path.match(/^\/case-studies\/([^/]+)$/);
  if (caseStudyPath) {
    return <CaseStudyDetailPage caseStudySlug={caseStudyPath[1]} />;
  }
  if (path === "/contact") return <ContactPage />;
  if (path === BLOG_INDEX_PATH) return <InsightsBlogsPage />;
  const blogPost = path.match(/^\/blog\/([^/]+)$/);
  if (blogPost) {
    const slug = blogPost[1];
    if (slug === SUPPRESS_NEGATIVE_GUIDE_SLUG) {
      return <BlogSuppressNegativeContentGuidePage />;
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
  return <HomePage />;
}

const normalizedPath = normalizePath(window.location.pathname);
const page = pageForPath(normalizedPath);

const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error("Missing #root - check index.html");
}

const app = (
  <StrictMode>
    <ErrorBoundary>
      <App>{page}</App>
    </ErrorBoundary>
  </StrictMode>
);

// If react-snap pre-rendered this page, hydrate the existing HTML.
// Otherwise (dev, or a route not pre-rendered) do a fresh render.
if (rootEl.hasChildNodes()) {
  hydrateRoot(rootEl, app);
} else {
  createRoot(rootEl).render(app);
}
