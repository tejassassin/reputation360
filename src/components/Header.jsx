import React, { useState } from "react";
import { Mail } from "lucide-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import {
  Navbar,
  NavBody,
  NavbarLogo,
  NavbarButton,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar";
import { BRAND_LOGO_SRC } from "../constants/brandAssets.js";
import { externalAnchorProps, internalAnchorProps } from "../lib/internalLinkProps.js";
import {
  CONTACT_EMAIL,
  contactMailtoHref,
  contactWhatsAppHref,
  handleMailtoClick,
} from "../constants/contact.js";
import { AUDIENCE_PATH } from "../constants/whoWeServePaths.js";
import {
  FREE_REPUTATION_SCAN_LABEL,
  FREE_RISK_SCAN_PATH,
} from "../constants/freeRiskScan.js";
import {
  FREE_CONSULTATION_HREF,
  FREE_CONSULTATION_NAV_LABEL,
  isHomePath,
  scrollToFreeConsultation,
} from "../constants/homeConsultation.js";
import {
  trackFreeConsultationClick,
  trackFreeReputationScanClick,
} from "../lib/conversionAnalytics.js";
import { LOGO_ALT_NAV } from "../constants/imageAlt.js";
import {
  NEGATIVE_LINK_SUPPRESSION_PATH,
  ONLINE_REPUTATION_MANAGEMENT_PATH,
  REPUTATION_BUILDING_SERVICES_PATH,
} from "../constants/servicePaths.js";
import { ORM_GLOSSARY_PATH } from "../constants/resourcePaths.js";

const navItems = [
  {
    name: "About",
    link: "/about",
    children: [
      { name: "About Us", link: "/about" },
      { name: "Contact", link: "/contact" },
    ],
  },
  {
    name: "Services",
    link: "/services",
    children: [
      {
        name: "Online Reputation Management",
        link: ONLINE_REPUTATION_MANAGEMENT_PATH,
      },
      {
        name: "Negative Link Suppression",
        link: NEGATIVE_LINK_SUPPRESSION_PATH,
      },
      {
        name: "Reputation Building Services",
        link: REPUTATION_BUILDING_SERVICES_PATH,
      },
    ],
  },
  {
    name: "Who We Serve?",
    link: AUDIENCE_PATH.individuals,
    children: [
      { name: "Individuals", link: AUDIENCE_PATH.individuals },
      { name: "Financial Advisors", link: AUDIENCE_PATH.financialAdvisors },
      {
        name: "Executives & C-Suite Leaders",
        link: AUDIENCE_PATH.executives,
      },
      {
        name: "Doctors & Healthcare Professionals",
        link: AUDIENCE_PATH.doctors,
      },
      { name: "Lawyers & Attorneys", link: AUDIENCE_PATH.lawyers },
      { name: "Real Estate Agents & Brokers", link: AUDIENCE_PATH.realEstate },
      { name: "Job Seekers", link: AUDIENCE_PATH.jobSeekers },
      {
        name: "Businesses & Companies",
        link: AUDIENCE_PATH.businesses,
      },
    ],
  },
  { name: "Case Studies", link: "/case-studies" },
  {
    name: "Resources",
    link: "/blog",
    children: [
      { name: "Insights & Blogs", link: "/blog" },
      { name: "Guide", link: "/resources/guide" },
      { name: "FAQs", link: "/resources/faqs" },
      { name: "ORM Glossary", link: ORM_GLOSSARY_PATH },
      {
        name: FREE_REPUTATION_SCAN_LABEL,
        link: FREE_RISK_SCAN_PATH,
        highlighted: true,
      },
    ],
  },
];

function handleConsultationNavClick(e, source) {
  trackFreeConsultationClick(source);
  if (isHomePath()) {
    e.preventDefault();
    scrollToFreeConsultation();
  }
}

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const logoFetchPriority =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 767px)").matches
      ? "low"
      : "high";
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-[var(--r360-header-height)] items-center bg-navy shadow-[0_10px_36px_rgba(0,0,0,0.2)]">
      <div className="r360-site-container r360-header-inner flex h-full min-w-0 items-center">
        <Navbar className="relative min-w-0 w-full max-w-full">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo
            logoSrc={BRAND_LOGO_SRC}
            brandName="Reputation360"
            logoAlt={LOGO_ALT_NAV}
            logoFetchPriority={logoFetchPriority}
          />
          <NavItems items={navItems} />
          <div
            className={cn(
              "relative z-20 flex shrink-0 items-center justify-end gap-2 sm:gap-3",
              "lg:col-start-3 lg:row-start-1 lg:border-l lg:border-white/20 lg:pl-4",
            )}
          >
            <NavbarButton
              href={FREE_RISK_SCAN_PATH}
              {...internalAnchorProps(FREE_RISK_SCAN_PATH)}
              variant="primary"
              onClick={() => trackFreeReputationScanClick("header")}
              className="!rounded-2xl !border-0 !bg-green !px-4 !py-2 !text-sm !text-white hover:!brightness-95 sm:!px-5 sm:!py-2.5"
            >
              {FREE_REPUTATION_SCAN_LABEL}
            </NavbarButton>
            <NavbarButton
              href={FREE_CONSULTATION_HREF}
              {...internalAnchorProps(FREE_CONSULTATION_HREF)}
              variant="secondary"
              onClick={(e) => handleConsultationNavClick(e, "header")}
              className="!rounded-2xl !border !border-white/35 !bg-transparent !px-4 !py-2 !text-sm !text-white hover:!bg-white/10 hover:!text-white sm:!px-5 sm:!py-2.5"
            >
              {FREE_CONSULTATION_NAV_LABEL}
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo
              logoSrc={BRAND_LOGO_SRC}
              brandName="Reputation360"
              logoAlt={LOGO_ALT_NAV}
              logoFetchPriority={logoFetchPriority}
            />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <div key={`mobile-link-${idx}`} className="w-full">
                {(item.children?.length ?? 0) > 0 ? (
                  <a
                    href={item.link ?? item.children[0]?.link ?? "#"}
                    {...internalAnchorProps(item.link ?? item.children[0]?.link ?? "#")}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="relative rounded-lg px-2 py-1 text-white font-heading font-medium transition-all hover:scale-[1.02] hover:bg-white/10 hover:text-green"
                  >
                    <span className="block">{item.name}</span>
                  </a>
                ) : (
                  <a
                    href={item.link ?? "#"}
                    {...internalAnchorProps(item.link ?? "#")}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="relative rounded-lg px-2 py-1 text-white font-heading font-medium transition-all hover:scale-[1.02] hover:bg-white/10 hover:text-green"
                  >
                    <span className="block">{item.name}</span>
                  </a>
                )}
                {item.children?.map((subItem) => (
                  <a
                    key={`mobile-sublink-${item.name}-${subItem.name}`}
                    href={subItem.link}
                    {...internalAnchorProps(subItem.link)}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "ha-nudge mt-2 ml-4 block rounded-md py-1 text-sm text-white/85 font-heading transition-colors hover:bg-white/10 hover:text-green",
                      subItem.highlighted && "text-green",
                    )}
                  >
                    {subItem.name}
                  </a>
                ))}
              </div>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                href={FREE_RISK_SCAN_PATH}
                {...internalAnchorProps(FREE_RISK_SCAN_PATH)}
                onClick={() => {
                  trackFreeReputationScanClick("header_mobile");
                  setIsMobileMenuOpen(false);
                }}
                variant="primary"
                className="w-full !rounded-2xl !border-0 !bg-green !px-4 !py-2.5 !text-white hover:!brightness-95"
              >
                {FREE_REPUTATION_SCAN_LABEL}
              </NavbarButton>
              <NavbarButton
                href={FREE_CONSULTATION_HREF}
                {...internalAnchorProps(FREE_CONSULTATION_HREF)}
                onClick={(e) => {
                  handleConsultationNavClick(e, "header_mobile");
                  setIsMobileMenuOpen(false);
                }}
                variant="secondary"
                className="w-full !rounded-2xl !border !border-white/35 !bg-transparent !px-4 !py-2.5 !text-white hover:!bg-white/10 hover:!text-white"
              >
                {FREE_CONSULTATION_NAV_LABEL}
              </NavbarButton>
              <div className="flex w-full justify-center gap-4">
                <a
                  href={contactWhatsAppHref()}
                  {...externalAnchorProps(contactWhatsAppHref())}
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Chat on WhatsApp with Reputation360"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/40 bg-[#25D366]/90 text-white transition hover:bg-[#25D366]"
                >
                  <IconBrandWhatsapp className="h-6 w-6 shrink-0" stroke={1.5} aria-hidden />
                </a>
                <a
                  href={contactMailtoHref()}
                  onClick={(e) => {
                    handleMailtoClick(e);
                    queueMicrotask(() => setIsMobileMenuOpen(false));
                  }}
                  aria-label={`Email Reputation360 at ${CONTACT_EMAIL}`}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/25 bg-white/10 text-white transition hover:bg-white/15"
                >
                  <Mail className="h-6 w-6 shrink-0" strokeWidth={2} aria-hidden />
                </a>
              </div>
            </div>
          </MobileNavMenu>
        </MobileNav>
        </Navbar>
      </div>
    </header>
  );
}

export default Header;
