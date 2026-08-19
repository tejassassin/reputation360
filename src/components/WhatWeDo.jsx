import React from "react";
import AboutReputationVisual from "./AboutReputationVisual.jsx";

function WhatWeDo() {
  return (
    <section
      className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16 lg:px-8"
      aria-labelledby="about-reputation360-heading"
    >
      <div className="flex flex-col items-stretch gap-12 lg:flex-row lg:gap-16">
        <div className="ha-lift min-w-0 overflow-hidden rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35),0_12px_24px_-8px_rgba(0,0,0,0.2)] lg:w-[60%]">
          <AboutReputationVisual />
        </div>

        <div className="flex flex-col justify-center lg:w-[60%]">
          <h2
            id="about-reputation360-heading"
            className="font-heading mb-6 text-3xl font-bold text-navy md:text-4xl"
          >
            About Reputation360 - Shaping How You Appear on Google and AI Search
          </h2>
          <p className="mb-4 font-body text-lg leading-relaxed text-steel">
            Reputation360 helps individuals and brands take control of how
            they&apos;re perceived online. We&apos;re client-first and
            results-driven, with every strategy designed to deliver measurable
            improvements in how you appear across search.
          </p>
          <p className="font-body text-lg leading-relaxed text-steel">
            AI-powered search has transformed how people discover and evaluate
            information - and we&apos;ve evolved alongside it. We&apos;re
            already delivering real, visible gains in how our clients appear
            across Google AI Overviews and other AI-powered search experiences,
            helping protect and strengthen their reputations wherever people are
            searching.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
