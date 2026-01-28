import "./App.css";
import logo from "./assets/Logo_360.png";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { ServicesExpandable } from "@/components/ui/expandable";
import { useEffect, useState } from "react";

function StatNumber({ end, suffix = "", duration = 1500 }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let startTimestamp;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const nextValue = Math.floor(progress * end);
      setValue(nextValue);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [end, duration]);

  return (
    <>
      {value.toLocaleString()}
      {suffix}
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-offwhite">
      {/* Header */}
      <header className="bg-navy text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center pl-1">
                <img
                  src={logo}
                  alt="Reputation360 logo"
                  className="w-9 h-9 object-contain"
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

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-linear-to-br from-navy via-slate to-navy text-white py-20 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green"></span>
              </span>
              <span className="font-body text-sm text-white/90">
                Trusted by 1,700+ businesses worldwide
              </span>
            </div>

            <HeroHighlight containerClassName="h-auto bg-transparent dark:bg-transparent">
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-7xl mb-8 leading-[1.1] tracking-tight">
                Take control of your
                <br className="hidden sm:block" />
                online reputation <Highlight>on your terms</Highlight>
                <span className="text-white/50">,</span>
                <br className="hidden sm:block" />
                <span className="text-white/60">not Google's.</span>
              </h1>
            </HeroHighlight>

            <p className="font-body text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
              Comprehensive reputation management solutions to help businesses
              and individuals maintain a positive online presence and build
              lasting trust.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative bg-green hover:bg-green/90 text-white font-heading font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-lg shadow-lg shadow-green/25 hover:shadow-xl hover:shadow-green/30 hover:-translate-y-0.5">
                <span className="flex items-center gap-2">
                  Start Free Trial
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </button>
              <button className="group border-2 border-white/30 hover:border-white/50 hover:bg-white/5 text-white font-heading font-medium px-8 py-4 rounded-xl transition-all duration-300 text-lg backdrop-blur-sm">
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Watch Demo
                </span>
              </button>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-green/30 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-green/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <p className="font-heading font-bold text-4xl md:text-5xl text-green mb-2">
                    <StatNumber end={13} />
                  </p>
                  <p className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-1">
                    Years Experience
                  </p>
                  <p className="font-body text-xs text-white/60">
                    Online reputation management
                  </p>
                </div>
              </div>
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-green/30 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-green/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <p className="font-heading font-bold text-4xl md:text-5xl text-green mb-2">
                    <StatNumber end={97} suffix="%" />
                  </p>
                  <p className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-1">
                    Success Rate
                  </p>
                  <p className="font-body text-xs text-white/60">
                    Pushing negative links off page one
                  </p>
                </div>
              </div>
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-green/30 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-green/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <p className="font-heading font-bold text-4xl md:text-5xl text-green mb-2">
                    <StatNumber end={1700} suffix="+" />
                  </p>
                  <p className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-1">
                    Happy Clients
                  </p>
                  <p className="font-body text-xs text-white/60">
                    Successful suppression outcomes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-offwhite">
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
        </section>

        {/* Our Services Expandable Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-4">
                Our Services
              </h2>
              <p className="font-body text-steel max-w-2xl mx-auto">
                Comprehensive solutions tailored to build, protect, and elevate
                your brand's presence in the digital landscape.
              </p>
            </div>
            <ServicesExpandable />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-offwhite">
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
                    className={`font-heading font-semibold text-xl mb-2 ${plan.featured ? "text-white" : "text-navy"}`}
                  >
                    {plan.title}
                  </h3>
                  <div className="mb-6">
                    <span
                      className={`font-heading font-bold text-4xl ${plan.featured ? "text-white" : "text-navy"}`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`font-body ${plan.featured ? "text-white/70" : "text-steel"}`}
                    >
                      {plan.period}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-2">
                        <svg
                          className={`w-4 h-4 ${plan.featured ? "text-green" : "text-green"}`}
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
                          className={`font-body text-sm ${plan.featured ? "text-white/90" : "text-steel"}`}
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
                ),
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
