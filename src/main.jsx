import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
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
import ContactPage from "./pages/ContactPage.jsx";
import FaqsPage from "./pages/FaqsPage.jsx";
import InsightsBlogsPage from "./pages/InsightsBlogsPage.jsx";
import GuidePage from "./pages/GuidePage.jsx";

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
  if (path === "/contact") return <ContactPage />;
  if (path === "/resources/blogs") return <InsightsBlogsPage />;
  if (path === "/resources/guide") return <GuidePage />;
  if (path === "/resources/faqs") return <FaqsPage />;
  return <HomePage />;
}

const normalizedPath = normalizePath(window.location.pathname);
const page = pageForPath(normalizedPath);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App>{page}</App>
  </StrictMode>,
);
