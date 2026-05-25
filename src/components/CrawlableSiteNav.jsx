import { CASE_STUDIES } from "../data/caseStudies/index.js";
import { reputationServices } from "../data/reputationServices.jsx";
import { AUDIENCE_PATH } from "../constants/whoWeServePaths.js";
import { FREE_RISK_SCAN_PATH } from "../constants/freeRiskScan.js";

const MAIN_PAGES = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Online Reputation Management Services" },
  { href: "/who-we-serve", label: "Who We Serve" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Insights and Blogs" },
  { href: "/contact", label: "Contact" },
  { href: FREE_RISK_SCAN_PATH, label: "Free Reputation Scan" },
  { href: "/resources/guide", label: "Reputation Guide" },
  { href: "/resources/faqs", label: "FAQs" },
];

const AUDIENCE_LINKS = [
  { href: AUDIENCE_PATH.individuals, label: "Personal Reputation Management Services" },
  {
    href: AUDIENCE_PATH.financialAdvisors,
    label: "Online Reputation Management for Financial Advisors",
  },
  { href: AUDIENCE_PATH.executives, label: "Executive Reputation Repair Solutions" },
  { href: AUDIENCE_PATH.doctors, label: "Healthcare Reputation Management Services" },
  { href: AUDIENCE_PATH.lawyers, label: "Lawyer Reputation Management Solutions" },
  { href: AUDIENCE_PATH.jobSeekers, label: "Personal Branding for Job Seekers" },
  { href: AUDIENCE_PATH.businesses, label: "Business Reputation Management Services" },
];

/**
 * Always-mounted HTML nav so internal links exist in the DOM on first paint
 * (not deferred by LazyWhenVisible). Visually hidden; available to crawlers and DevTools.
 */
export function CrawlableSiteNav() {
  return (
    <nav
      id="r360-crawl-nav"
      aria-label="Site navigation links"
      className="sr-only"
    >
      <p className="font-heading text-sm font-bold text-navy">Site pages</p>
      <ul className="list-none space-y-1 p-0">
        {MAIN_PAGES.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
      <p className="mt-4 font-heading text-sm font-bold text-navy">Who we serve</p>
      <ul className="list-none space-y-1 p-0">
        {AUDIENCE_LINKS.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
      <p className="mt-4 font-heading text-sm font-bold text-navy">Our services</p>
      <ul className="list-none space-y-1 p-0">
        {reputationServices.map((s) => (
          <li key={s.id}>
            <a href="/services">{s.title}</a>
          </li>
        ))}
      </ul>
      <p className="mt-4 font-heading text-sm font-bold text-navy">Case studies</p>
      <ul className="list-none space-y-1 p-0">
        {CASE_STUDIES.map((study) => (
          <li key={study.n}>
            <a href={`/case-studies/${study.slug}`}>{study.listTitle}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
