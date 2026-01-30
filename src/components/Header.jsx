import React from 'react'
import logo from "../assets/Logo_360.png";


function Header() {
  return (
    <header className="bg-navy text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              href="#features"
              className="font-heading font-medium text-sm hover:text-green transition-colors"
            >
              Features
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
      </div>
    </header>
  );
}

export default Header