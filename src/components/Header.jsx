import React, { useState } from "react";
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
    link: "/services/financial-advisors",
    children: [
      { name: "Individuals", link: "/services/individuals" },
      { name: "Financial Advisors", link: "/services/financial-advisors" },
      { name: "Job Seekers", link: "/services/job-seekers" },
      {
        name: "Doctors & Healthcare Professionals",
        link: "/services/doctors",
      },
      { name: "Lawyers & Attorneys", link: "/services/lawyers" },
      {
        name: "Executives & C-Suite Leaders",
        link: "/services/executives",
      },
      {
        name: "Businesses & Companies",
        link: "/services/businesses",
      },
    ],
  },
  { name: "Case Studies", link: "/case-studies" },
  {
    name: "Resources",
    link: "/resources/blogs",
    children: [
      { name: "Insights & Blogs", link: "/resources/blogs" },
      { name: "Guide", link: "/resources/guide" },
      { name: "FAQs", link: "/resources/faqs" },
    ],
  },
];

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="bg-navy text-white fixed top-0 left-0 right-0 z-50 shadow-lg">
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
          <NavbarLogo logoSrc={logo} brandName="Reputation360" />
          <NavItems items={navItems} />
          <NavbarButton
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            Book a call
          </NavbarButton>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo logoSrc={logo} brandName="Reputation360" />
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
                <a
                  href={item.link}
                  onClick={(e) => {
                    if (item.link === "#" && item.children?.length) {
                      e.preventDefault();
                      return;
                    }
                    setIsMobileMenuOpen(false);
                  }}
                  className="relative rounded-lg px-2 py-1 text-white font-heading font-medium transition-all hover:scale-[1.02] hover:bg-white/10 hover:text-green"
                >
                  <span className="block">{item.name}</span>
                </a>
                {item.children?.map((subItem) => (
                  <a
                    key={`mobile-sublink-${item.name}-${subItem.name}`}
                    href={subItem.link}
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
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </header>
  );
}

export default Header;
