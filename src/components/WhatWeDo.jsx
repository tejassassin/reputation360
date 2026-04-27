import React from "react";
import AboutReputationVisual from "./AboutReputationVisual.jsx";

function WhatWeDo() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="flex flex-col items-stretch gap-12 lg:flex-row lg:gap-16">
        <div className="ha-lift min-w-0 overflow-hidden rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35),0_12px_24px_-8px_rgba(0,0,0,0.2)] lg:w-[60%]">
          <AboutReputationVisual />
        </div>

        <div className="flex flex-col justify-center lg:w-[60%]">
          <h2 className="font-heading mb-6 text-3xl font-bold text-navy md:text-4xl">
            About Reputation360
          </h2>
          <p className="mb-4 font-body text-lg leading-relaxed text-steel">
            Reputation360 helps individuals and brands take control of how they
            are perceived online. With seven years of hands-on experience in
            online reputation management, SEO, branding, content strategy, and
            digital marketing, we build reputations that are credible,
            resilient, and built to last.
          </p>
          <p className="font-body text-lg leading-relaxed text-steel">
            Our focus is long-term reputation health, not quick fixes - building
            trust, safety, and future opportunities for career growth and
            personal confidence.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
