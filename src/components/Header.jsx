import React, { useCallback, useEffect, useRef, useState } from "react";
import { Mail } from "lucide-react";
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
  R360_DESKTOP_NAV_MIN_WIDTH_PX,
  R360_MOBILE_NAV_MENU_ID,
  R360_MOBILE_NAV_INERT_SELECTOR,
} from "./ui/resizable-navbar";
import { BRAND_LOGO_SRC } from "../constants/brandAssets.js";
import { internalAnchorProps } from "../lib/internalLinkProps.js";
import {
  CONTACT_EMAIL,
  contactMailtoHref,
  handleMailtoClick,
} from "../constants/contact.js";
import { AUDIENCE_PATH } from "../constants/whoWeServePaths.js";
import {
  FREE_REPUTATION_SCAN_LABEL,
  FREE_RISK_SCAN_PATH,
} from "../constants/freeRiskScan.js";
import {
  CONSULTATION_FORM_ID,
  FREE_CONSULTATION_HREF,
  FREE_CONSULTATION_NAV_LABEL,
  isHomePath,
  scrollToFreeConsultation,
} from "../constants/homeConsultation.js";
import {
  trackConsultationFormScrollSuccess,
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
  const hasForm = typeof document !== "undefined" && document.getElementById(CONSULTATION_FORM_ID);
  if (hasForm && (isHomePath() || window.location.pathname.replace(/\/+$/, "") === "/about")) {
    e.preventDefault();
    scrollToFreeConsultation({ onSuccess: trackConsultationFormScrollSuccess });
  }
}

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuWasOpenRef = useRef(false);
  const mobileMenuToggleRef = useRef(null);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((open) => !open);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      mobileMenuWasOpenRef.current = true;
      return;
    }
    if (mobileMenuWasOpenRef.current) {
      requestAnimationFrame(() => {
        mobileMenuToggleRef.current?.focus({ preventScroll: true });
      });
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${R360_DESKTOP_NAV_MIN_WIDTH_PX}px)`);
    const onChange = () => {
      if (mq.matches) {
        setIsMobileMenuOpen(false);
      }
    };
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(
    () => () => {
      document.body.style.overflow = "";
      document.querySelectorAll(R360_MOBILE_NAV_INERT_SELECTOR).forEach((el) => {
        el.removeAttribute("inert");
      });
    },
    [],
  );

  const logoFetchPriority =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 767px)").matches
      ? "low"
      : "high";

  const desktopCtaScanClass =
    "!rounded-2xl !border !border-white/35 !bg-transparent !px-3 !py-2 !text-sm !text-white hover:!bg-white/10 hover:!text-white xl:!px-4 xl:!py-2.5 2xl:!px-5";

  const desktopCtaConsultClass =
    "!rounded-2xl !border-0 !bg-green !px-3 !py-2 !text-sm !text-white hover:!brightness-95 xl:!px-4 xl:!py-2.5 2xl:!px-5";

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-[var(--r360-header-height)] items-center overflow-x-clip bg-navy shadow-[0_10px_36px_rgba(0,0,0,0.2)]">
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
              "r360-header-desktop-ctas relative z-20 flex min-w-0 max-w-full shrink items-stretch justify-self-end",
              "min-[1440px]:col-start-3 min-[1440px]:row-start-1 min-[1440px]:gap-4 xl:gap-5 2xl:gap-6",
            )}
          >
            <span
              className="r360-header-desktop-ctas__divider hidden shrink-0 min-[1440px]:block"
              aria-hidden
            />
            <div className="flex min-w-0 max-w-full shrink items-center gap-2 xl:gap-3">
            <NavbarButton
              href={FREE_RISK_SCAN_PATH}
              {...internalAnchorProps(FREE_RISK_SCAN_PATH)}
              variant="secondary"
              onClick={() => trackFreeReputationScanClick("header")}
              className={desktopCtaScanClass}
            >
              {FREE_REPUTATION_SCAN_LABEL}
            </NavbarButton>
            <NavbarButton
              href={FREE_CONSULTATION_HREF}
              {...internalAnchorProps(FREE_CONSULTATION_HREF)}
              variant="primary"
              onClick={(e) => handleConsultationNavClick(e, "header")}
              className={desktopCtaConsultClass}
            >
              {FREE_CONSULTATION_NAV_LABEL}
            </NavbarButton>
            </div>
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
              ref={mobileMenuToggleRef}
              isOpen={isMobileMenuOpen}
              onClick={toggleMobileMenu}
              controlsId={R360_MOBILE_NAV_MENU_ID}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={closeMobileMenu}
            menuId={R360_MOBILE_NAV_MENU_ID}
          >
            {navItems.map((item, idx) => (
              <div key={`mobile-link-${idx}`} className="w-full min-w-0">
                {(item.children?.length ?? 0) > 0 ? (
                  <a
                    href={item.link ?? item.children[0]?.link ?? "#"}
                    {...internalAnchorProps(item.link ?? item.children[0]?.link ?? "#")}
                    onClick={closeMobileMenu}
                    className="relative block rounded-lg px-2 py-1 text-white font-heading font-medium transition-all hover:bg-white/10 hover:text-green"
                  >
                    {item.name}
                  </a>
                ) : (
                  <a
                    href={item.link ?? "#"}
                    {...internalAnchorProps(item.link ?? "#")}
                    onClick={closeMobileMenu}
                    className="relative block rounded-lg px-2 py-1 text-white font-heading font-medium transition-all hover:bg-white/10 hover:text-green"
                  >
                    {item.name}
                  </a>
                )}
                {item.children?.map((subItem) => (
                  <a
                    key={`mobile-sublink-${item.name}-${subItem.name}`}
                    href={subItem.link}
                    {...internalAnchorProps(subItem.link)}
                    onClick={closeMobileMenu}
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
            <div className="r360-mobile-nav-cta-stack flex w-full min-w-0 flex-col gap-4 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
              <NavbarButton
                href={FREE_RISK_SCAN_PATH}
                {...internalAnchorProps(FREE_RISK_SCAN_PATH)}
                onClick={() => {
                  trackFreeReputationScanClick("header_mobile");
                  closeMobileMenu();
                }}
                variant="secondary"
                className="w-full !rounded-2xl !border !border-white/35 !bg-transparent !px-4 !py-2.5 !text-white hover:!bg-white/10 hover:!text-white"
              >
                {FREE_REPUTATION_SCAN_LABEL}
              </NavbarButton>
              <NavbarButton
                href={FREE_CONSULTATION_HREF}
                {...internalAnchorProps(FREE_CONSULTATION_HREF)}
                onClick={(e) => {
                  handleConsultationNavClick(e, "header_mobile");
                  closeMobileMenu();
                }}
                variant="primary"
                className="w-full !rounded-2xl !border-0 !bg-green !px-4 !py-2.5 !text-white hover:!brightness-95"
              >
                {FREE_CONSULTATION_NAV_LABEL}
              </NavbarButton>
              <div className="flex w-full justify-center">
                <a
                  href={contactMailtoHref()}
                  onClick={(e) => {
                    handleMailtoClick(e);
                    queueMicrotask(closeMobileMenu);
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
