"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { BRAND_LOGO_SRC } from "../constants/brandAssets.js";
import {
  INSTAGRAM_PROFILE_URL,
  LINKEDIN_COMPANY_URL,
} from "../constants/brandProfiles.js";
import {
  CONTACT_EMAIL,
  contactMailtoHref,
  handleMailtoClick,
} from "../constants/contact.js";
import {
  NEGATIVE_LINK_SUPPRESSION_PATH,
  ONLINE_REPUTATION_MANAGEMENT_PATH,
  REPUTATION_BUILDING_SERVICES_PATH,
} from "../constants/servicePaths.js";
import { LOGO_ALT_FOOTER } from "../constants/imageAlt.js";
import { externalAnchorProps, internalAnchorProps } from "../lib/internalLinkProps.js";
import { AUDIENCE_PATH } from "../constants/whoWeServePaths.js";

const FACEBOOK_PROFILE_URL =
  "https://www.facebook.com/profile.php?id=61572090900344&mibextid=ZbWKwL";

/** All legal / policy pages shown under the Policies column. */
const POLICY_LINKS = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms and Conditions", href: "/terms-of-service" },
  { name: "Cookie Policy", href: "/cookie-policy" },
  { name: "Refund Policy", href: "/refund-policy" },
  { name: "DMCA / Copyright Policy", href: "/dmca-copyright-policy" },
];

const QUICK_LINKS = [
  { name: "About Us", href: "/about" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Contact", href: "/contact" },
  { name: "Free Reputation Scan", href: "/free-reputation-scan" },
];

const SERVICES_LINKS = [
  { name: "Online Reputation Management", href: ONLINE_REPUTATION_MANAGEMENT_PATH },
  { name: "Negative Link Suppression", href: NEGATIVE_LINK_SUPPRESSION_PATH },
  {
    name: "Social Media Reputation Management",
    href: `${REPUTATION_BUILDING_SERVICES_PATH}#services`,
  },
  { name: "AI Reputation Management", href: ONLINE_REPUTATION_MANAGEMENT_PATH },
  { name: "Reputation Building Services", href: REPUTATION_BUILDING_SERVICES_PATH },
];

const RESOURCES_LINKS = [
  { name: "Insights and Blogs", href: "/blog" },
  { name: "Reputation Management Guide", href: "/resources/guide" },
  { name: "FAQs", href: "/resources/faqs" },
  { name: "ORM Glossary", href: "/resources/online-reputation-management-glossary" },
];

const WHO_WE_SERVE_LINKS = [
  { name: "Individuals", href: AUDIENCE_PATH.individuals },
  { name: "Executives and C-Suite Leaders", href: AUDIENCE_PATH.executives },
  { name: "Doctors and Healthcare Professionals", href: AUDIENCE_PATH.doctors },
  { name: "Lawyers and Attorneys", href: AUDIENCE_PATH.lawyers },
  { name: "Financial Advisors", href: AUDIENCE_PATH.financialAdvisors },
  { name: "Real Estate Agents and Brokers", href: AUDIENCE_PATH.realEstate },
  { name: "Job Seekers", href: AUDIENCE_PATH.jobSeekers },
  { name: "Businesses and Companies", href: AUDIENCE_PATH.businesses },
];

const FOOTER_NAV_GROUPS = [
  { id: "quick-links", title: "Quick Links", links: QUICK_LINKS },
  { id: "services", title: "Services", links: SERVICES_LINKS },
  { id: "resources", title: "Resources", links: RESOURCES_LINKS },
  { id: "who-we-serve", title: "Who We Serve", links: WHO_WE_SERVE_LINKS },
  { id: "policies", title: "Policies", links: POLICY_LINKS },
];

const linkClassName =
  "r360-footer-link ha-nudge inline-block max-w-full rounded px-1 font-body text-sm leading-relaxed transition-colors";

const headingClassName = "r360-footer-heading font-heading mb-3 text-base font-semibold text-white";

function FooterLinkList({ links }) {
  return (
    <ul className="space-y-2.5">
      {links.map((item) => (
        <li key={item.href}>
          <a href={item.href} {...internalAnchorProps(item.href)} className={linkClassName}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

function FooterNavColumn({ title, links }) {
  return (
    <div className="min-w-0">
      <p className={headingClassName}>{title}</p>
      <FooterLinkList links={links} />
    </div>
  );
}

function FooterNavAccordion({ group, isOpen, onToggle }) {
  const panelId = `r360-footer-panel-${group.id}`;

  return (
    <div className="r360-footer-accordion border-b border-white/10">
      <button
        type="button"
        id={`r360-footer-trigger-${group.id}`}
        className="r360-footer-accordion-trigger flex w-full items-center justify-between gap-3 py-3.5 text-left font-heading text-base font-semibold text-white"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span>{group.title}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-white/70 transition-transform duration-200 motion-reduce:transition-none ${isOpen ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={`r360-footer-trigger-${group.id}`}
        hidden={!isOpen}
        className={isOpen ? "pb-4" : ""}
      >
        <FooterLinkList links={group.links} />
      </div>
    </div>
  );
}

function SocialIconLink({ href, label, children }) {
  return (
    <a
      href={href}
      {...externalAnchorProps(href)}
      aria-label={label}
      className="r360-footer-social inline-flex h-10 w-10 shrink-0 touch-manipulation items-center justify-center rounded-full text-white/80 transition-colors hover:text-[#4CAF50] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4CAF50]"
    >
      {children}
    </a>
  );
}

function FooterBrandColumn() {
  return (
    <div className="min-w-0">
      <div className="mb-4 flex min-w-0 items-center gap-2">
        <div className="flex h-[3.25rem] w-[3.25rem] shrink-0 items-center justify-center overflow-hidden rounded-full bg-white pl-0.5">
          <img
            src={BRAND_LOGO_SRC}
            alt={LOGO_ALT_FOOTER}
            width={36}
            height={36}
            decoding="async"
            className="ml-1 object-contain"
          />
        </div>
        <span className="shrink-0 font-heading text-lg font-bold">Reputation360</span>
      </div>
      <p className="r360-footer-brand-copy max-w-sm font-body text-sm leading-relaxed">
        Your trusted partner in building and protecting online reputations since 2019.
      </p>
      <a
        href={contactMailtoHref()}
        onClick={handleMailtoClick}
        className={`${linkClassName} mt-5 block break-all text-[0.9375rem] font-medium`}
      >
        {CONTACT_EMAIL}
      </a>
      <div className="mt-5 flex flex-wrap items-center gap-0.5">
        <SocialIconLink href={LINKEDIN_COMPANY_URL} label="LinkedIn">
          <svg className="h-[1.375rem] w-[1.375rem]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </SocialIconLink>
        <SocialIconLink href={INSTAGRAM_PROFILE_URL} label="Instagram">
          <svg className="h-[1.375rem] w-[1.375rem]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </SocialIconLink>
        <SocialIconLink href={FACEBOOK_PROFILE_URL} label="Facebook">
          <svg className="h-[1.375rem] w-[1.375rem]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </SocialIconLink>
      </div>
    </div>
  );
}

function Footer() {
  const [openAccordionId, setOpenAccordionId] = useState(null);

  function toggleAccordion(id) {
    setOpenAccordionId((current) => (current === id ? null : id));
  }

  return (
    <footer id="r360-static-footer" className="r360-site-footer bg-charcoal text-white">
      <div className="r360-site-container r360-footer-shell">
        <div className="r360-footer-grid hidden md:grid">
          <FooterBrandColumn />
          <FooterNavColumn title="Quick Links" links={QUICK_LINKS} />
          <FooterNavColumn title="Services" links={SERVICES_LINKS} />
          <FooterNavColumn title="Resources" links={RESOURCES_LINKS} />
          <FooterNavColumn title="Who We Serve" links={WHO_WE_SERVE_LINKS} />
          <FooterNavColumn title="Policies" links={POLICY_LINKS} />
        </div>

        <div className="md:hidden">
          <FooterBrandColumn />
          <nav className="r360-footer-accordion-nav mt-6" aria-label="Footer">
            {FOOTER_NAV_GROUPS.map((group) => (
              <FooterNavAccordion
                key={group.id}
                group={group}
                isOpen={openAccordionId === group.id}
                onToggle={() => toggleAccordion(group.id)}
              />
            ))}
          </nav>
        </div>

        <div className="r360-footer-legal border-t border-white/10">
          <div className="r360-footer-legal-inner">
            <p className="r360-footer-legal-copy m-0 font-body text-left text-xs leading-relaxed">
              © 2026 Reputation360. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
