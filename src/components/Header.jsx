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
import logo from "../assets/Logo_360.png";
import { CALENDLY_URL } from "../constants/scheduling";
import {
  CONTACT_EMAIL,
  contactMailtoHref,
  contactWhatsAppHref,
  handleMailtoClick,
} from "../constants/contact.js";
import { AUDIENCE_PATH } from "../constants/whoWeServePaths.js";
import { internalAnchorProps } from "../lib/internalLinkProps.js";
import {
  FREE_REPUTATION_SCAN_LABEL,
  FREE_RISK_SCAN_PATH,
} from "../constants/freeRiskScan.js";

const navItems = [
  { name: "Home", link: "/" },
  {
    name: "About",
    link: "/about",
    children: [
      { name: "About Us", link: "/about" },
      { name: "Contact", link: "/contact" },
    ],
  },
  { name: "Services", link: "/services" },
  {
    name: "Who We Serve?",
    link: "/who-we-serve",
    parentNonNavigable: true,
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
      { name: FREE_REPUTATION_SCAN_LABEL, link: FREE_RISK_SCAN_PATH },
    ],
  },
];

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const logoFetchPriority =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 767px)").matches
      ? "low"
      : "high";
  return (
    <header className="min-h-0 overflow-visible text-white fixed inset-x-0 top-0 z-50 bg-navy shadow-lg">
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-13 h-13 rounded-full bg-white flex items-center justify-center pl-1">
              <img
                src={logo}
                alt="Reputation360 logo"
                className="w-10 h-10 object-contain"
              />
            </div>
            <span className="font-heading font-bold text-xl">
              Reputation360
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/"
              className="font-heading font-medium text-sm hover:text-green transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="font-heading font-medium text-sm hover:text-green transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              className="font-heading font-medium text-sm hover:text-green transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="font-heading font-medium text-sm hover:text-green transition-colors"
            >
              Contact
            </a>
          </nav>
          <button className="bg-green hover:bg-green/90 text-white font-heading font-medium px-5 py-2 rounded-lg transition-colors">
            Get Started
          </button>
        </div>
      </div> */}

      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo
            logoSrc={logo}
            brandName="Reputation360"
            logoFetchPriority={logoFetchPriority}
          />
          <NavItems items={navItems} />
          <div
            className={cn(
              "relative z-20 flex shrink-0 items-center justify-end gap-2 sm:gap-3",
              "lg:col-start-3 lg:row-start-1 lg:border-l lg:border-white/20 lg:pl-6",
            )}
          >
            <NavbarButton
              href={FREE_RISK_SCAN_PATH}
              {...internalAnchorProps(FREE_RISK_SCAN_PATH)}
              variant="secondary"
              className="!px-4 !py-2 text-sm sm:!px-5 sm:text-sm"
            >
              {FREE_REPUTATION_SCAN_LABEL}
            </NavbarButton>
            <NavbarButton
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              Book a call
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo
            logoSrc={logo}
            brandName="Reputation360"
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
                {item.parentNonNavigable && item.children?.length ? (
                  <a
                    href={item.link}
                    {...internalAnchorProps(item.link)}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="relative block rounded-lg px-2 py-1 font-heading font-medium text-white transition-all hover:bg-white/10 hover:text-green"
                  >
                    {item.name}
                  </a>
                ) : (
                  <a
                    href={item.link}
                    {...internalAnchorProps(item.link)}
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
                    className="ha-nudge mt-2 ml-4 block rounded-md py-1 text-sm text-white/85 font-heading transition-colors hover:bg-white/10 hover:text-green"
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
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
                className="w-full"
              >
                {FREE_REPUTATION_SCAN_LABEL}
              </NavbarButton>
              <NavbarButton
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
              <div className="flex w-full justify-center gap-4">
                <a
                  href={contactWhatsAppHref()}
                  target="_blank"
                  rel="noopener noreferrer"
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
    </header>
  );
}

export default Header;
