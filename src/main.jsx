import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import FinancialAdvisorsPage from "./pages/FinancialAdvisorsPage.jsx";
import CaseStudiesPage from "./pages/CaseStudiesPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

const path = window.location.pathname;

let page = <HomePage />;
if (path === "/about") page = <AboutPage />;
else if (path === "/services") page = <ServicesPage />;
else if (path === "/services/financial-advisors") page = <FinancialAdvisorsPage />;
else if (path === "/case-studies") page = <CaseStudiesPage />;
else if (path === "/contact") page = <ContactPage />;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App>{page}</App>
  </StrictMode>,
);
