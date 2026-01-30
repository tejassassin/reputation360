import "./App.css";
import logo from "./assets/Logo_360.png";
import { ServicesExpandable } from "@/components/ui/expandable";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhatWeBelieve from "./components/WhatWeBelieve";
import WhatWeDo from "./components/WhatWeDo";
import OurServices from "./components/OurServices";
import WhoWeWorkWith from "./components/WhoWeWorkWith";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-offwhite">
      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        <section id="about">
          <WhatWeBelieve />
        </section>

        <WhatWeDo />

        {/* Features Section */}
        {/* <section id="features" className="py-20 bg-offwhite">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-4">
                Why Choose Reputation360?
              </h2>
              <p className="font-body text-steel max-w-2xl mx-auto">
                We provide end-to-end reputation management services that help
                you monitor, protect, and enhance your brand's online presence.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "🔍",
                  title: "Real-Time Monitoring",
                  desc: "Track mentions and reviews across all major platforms 24/7.",
                },
                {
                  icon: "🛡️",
                  title: "Crisis Management",
                  desc: "Swift response strategies to protect your brand during critical times.",
                },
                {
                  icon: "📈",
                  title: "Review Generation",
                  desc: "Boost positive reviews and build customer trust organically.",
                },
                {
                  icon: "📊",
                  title: "Analytics Dashboard",
                  desc: "Comprehensive insights and reports on your reputation metrics.",
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-steel/10"
                >
                  <div className="w-12 h-12 bg-green/10 rounded-lg flex items-center justify-center text-2xl mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-navy mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-body text-steel text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Our Services Expandable Section */}
        <section id="services">
          <OurServices />
        </section>

        <section id="WhoWeworkWith">
          <WhoWeWorkWith />
        </section>

        {/* About Section */}
        <section className="py-20 bg-offwhite">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-6">
                  Trusted by Businesses Worldwide
                </h2>
                <p className="font-body text-steel mb-6">
                  For over a decade, Reputation360 has been the go-to partner
                  for businesses seeking to establish and maintain a stellar
                  online reputation. Our team of experts combines cutting-edge
                  technology with proven strategies.
                </p>
                <p className="font-body text-steel mb-8">
                  We understand that your reputation is your most valuable
                  asset. That's why we take a personalized approach, tailoring
                  our services to meet your unique needs and goals.
                </p>
                <ul className="space-y-3">
                  {[
                    "Dedicated account managers",
                    "Customized strategies",
                    "Transparent reporting",
                    "24/7 support",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="w-5 h-5 bg-green rounded-full flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="font-body text-charcoal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-slate to-navy rounded-2xl p-8 lg:p-12">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <p className="font-body text-white/90 text-lg italic mb-4">
                    "Reputation360 transformed our online presence completely.
                    Within 6 months, our review ratings improved from 3.2 to 4.8
                    stars."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green rounded-full flex items-center justify-center font-heading font-bold text-white">
                      JD
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-white text-sm">
                        James Davidson
                      </p>
                      <p className="font-body text-white/60 text-xs">
                        CEO, TechStart Inc.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-offwhite">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-4">
                Our Services
              </h2>
              <p className="font-body text-steel max-w-2xl mx-auto">
                Comprehensive solutions designed to address every aspect of your
                online reputation.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Personal Branding",
                  price: "$299",
                  period: "/month",
                  features: [
                    "Social media audit",
                    "Profile optimization",
                    "Content strategy",
                    "Monthly reporting",
                  ],
                },
                {
                  title: "Business Pro",
                  price: "$599",
                  period: "/month",
                  featured: true,
                  features: [
                    "Everything in Personal",
                    "Review management",
                    "SEO optimization",
                    "Crisis response",
                    "24/7 monitoring",
                  ],
                },
                {
                  title: "Enterprise",
                  price: "Custom",
                  period: "",
                  features: [
                    "Everything in Business",
                    "Dedicated team",
                    "Custom integrations",
                    "Executive reporting",
                    "SLA guarantee",
                  ],
                },
              ].map((plan, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl p-8 ${
                    plan.featured
                      ? "bg-navy text-white ring-4 ring-green scale-105"
                      : "bg-white border border-steel/10"
                  }`}
                >
                  {plan.featured && (
                    <span className="inline-block bg-green text-white text-xs font-heading font-semibold px-3 py-1 rounded-full mb-4">
                      Most Popular
                    </span>
                  )}
                  <h3
                    className={`font-heading font-semibold text-xl mb-2 ${
                      plan.featured ? "text-white" : "text-navy"
                    }`}
                  >
                    {plan.title}
                  </h3>
                  <div className="mb-6">
                    <span
                      className={`font-heading font-bold text-4xl ${
                        plan.featured ? "text-white" : "text-navy"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`font-body ${
                        plan.featured ? "text-white/70" : "text-steel"
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-2">
                        <svg
                          className={`w-4 h-4 ${
                            plan.featured ? "text-green" : "text-green"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span
                          className={`font-body text-sm ${
                            plan.featured ? "text-white/90" : "text-steel"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 rounded-lg font-heading font-medium transition-colors ${
                      plan.featured
                        ? "bg-green hover:bg-green/90 text-white"
                        : "bg-navy hover:bg-navy/90 text-white"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact/CTA Section */}
        <section
          id="contact"
          className="py-20 bg-gradient-to-br from-navy to-slate text-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Ready to Transform Your Reputation?
            </h2>
            <p className="font-body text-white/80 max-w-xl mx-auto mb-10">
              Join thousands of businesses that trust Reputation360 to manage
              and enhance their online presence.
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 font-body focus:outline-none focus:ring-2 focus:ring-green"
              />
              <button className="bg-green hover:bg-green/90 text-white font-heading font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
                Get Free Audit
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-22 h-22 rounded-full bg-white flex items-center justify-center pl-1">
                  <img
                    src={logo}
                    alt="Reputation360 logo"
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <span className="font-heading font-bold text-lg">
                  Reputation360
                </span>
              </div>
              <p className="font-body text-white/60 text-sm">
                Your trusted partner in building and protecting online
                reputation since 2013.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {["About Us", "Careers", "Press", "Blog"].map((item, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="font-body text-white/60 text-sm hover:text-green transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {[
                  "Review Management",
                  "SEO Services",
                  "Crisis Management",
                  "Brand Monitoring",
                ].map((item, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="font-body text-white/60 text-sm hover:text-green transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 font-body text-white/60 text-sm">
                <li>hello@reputation360.com</li>
                <li>1-800-REP-360</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-white/50 text-sm">
              © 2026 Reputation360. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="font-body text-white/50 text-sm hover:text-green transition-colors"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
