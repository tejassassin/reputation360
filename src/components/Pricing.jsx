import React from "react";

function Pricing() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-4">
          Pricing
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
                ? "bg-navy text-white ring-4 ring-green scale-105 transition-[box-shadow,transform] duration-200 hover:shadow-[0_22px_48px_-14px_rgba(2,37,77,0.35)] hover:ring-[3px] hover:ring-[rgba(120,220,119,0.55)]"
                : "ha-lift border border-steel/10 bg-white"
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
              className={`ha-pill w-full rounded-lg py-3 font-heading font-medium ${
                plan.featured
                  ? "bg-green text-white hover:bg-green/90"
                  : "bg-navy text-white hover:bg-navy/90"
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
