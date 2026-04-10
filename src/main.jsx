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
import CaseStudiesPage from "./pages/CaseStudiesPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

const normalizedPath = window.location.pathname.replace(/\/+$/, "") || "/";

let page = <HomePage />;
if (normalizedPath === "/about") page = <AboutPage />;
else if (normalizedPath === "/services") page = <ServicesPage />;
else if (normalizedPath === "/services/financial-advisors")
  page = <FinancialAdvisorsPage />;
else if (normalizedPath === "/services/job-seekers") page = <JobSeekersPage />;
else if (normalizedPath === "/services/doctors") page = <DoctorsPage />;
else if (normalizedPath === "/services/lawyers") page = <LawyersPage />;
else if (normalizedPath === "/services/executives") page = <ExecutivesPage />;
else if (normalizedPath === "/services/businesses") page = <BusinessesPage />;
else if (normalizedPath === "/case-studies") page = <CaseStudiesPage />;
else if (normalizedPath === "/contact") page = <ContactPage />;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App>{page}</App>
  </StrictMode>,
);
