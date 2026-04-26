import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
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
import CaseStudyDetailPage from "./pages/CaseStudyDetailPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import FaqsPage from "./pages/FaqsPage.jsx";
import InsightsBlogsPage from "./pages/InsightsBlogsPage.jsx";
import GuidePage from "./pages/GuidePage.jsx";
import LegalNoticePage from "./pages/LegalNoticePage.jsx";

if (import.meta.env.DEV) {
  console.info(
    "%c[R360 dev]%c Testimonials are inlined in %cHomePage.jsx%c (text only, no Unsplash). If you still see stock photos, you are not loading this build — in this repo run %cnpm run dev%c and use the URL Vite prints. You should see a %cgreen line: “Text client quotes (no image gallery)”.",
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

function pageForPath(path) {
  if (path === "/about") return <AboutPage />;
  if (path === "/services") return <ServicesPage />;
  if (path === "/services/financial-advisors") return <FinancialAdvisorsPage />;
  if (path === "/services/job-seekers") return <JobSeekersPage />;
  if (path === "/services/doctors") return <DoctorsPage />;
  if (path === "/services/lawyers") return <LawyersPage />;
  if (path === "/services/executives") return <ExecutivesPage />;
  if (path === "/services/businesses") return <BusinessesPage />;
  if (path === "/services/individuals") return <IndividualsPage />;
  if (path === "/case-studies") return <CaseStudiesPage />;
  const caseStudyPath = path.match(/^\/case-studies\/([^/]+)$/);
  if (caseStudyPath) {
    return <CaseStudyDetailPage caseStudySlug={caseStudyPath[1]} />;
  }
  if (path === "/contact") return <ContactPage />;
  if (path === "/resources/blogs") return <InsightsBlogsPage />;
  if (path === "/resources/guide") return <GuidePage />;
  if (path === "/resources/faqs") return <FaqsPage />;
  if (path === "/privacy-policy")
    return <LegalNoticePage variant="privacy" />;
  if (path === "/terms-of-service")
    return <LegalNoticePage variant="terms" />;
  if (path === "/cookie-policy")
    return <LegalNoticePage variant="cookies" />;
  return <HomePage />;
}

const normalizedPath = normalizePath(window.location.pathname);
const page = pageForPath(normalizedPath);

const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error("Missing #root - check index.html");
}

createRoot(rootEl).render(
  <StrictMode>
    <ErrorBoundary>
      <App>{page}</App>
    </ErrorBoundary>
  </StrictMode>,
);
