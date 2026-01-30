import React, { useState } from 'react'
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
} from './ui/resizable-navbar'
import logo from "../assets/Logo_360.png";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Services", link: "#services" },
  { name: "Contact", link: "#contact" },
]

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <header className="bg-navy text-white sticky top-0 z-50 shadow-lg">
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
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">Login</NavbarButton>
            <NavbarButton variant="primary">Book a call</NavbarButton>
          </div>
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
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-white font-heading font-medium hover:text-green transition-colors"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
         
              <NavbarButton
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

export default Header