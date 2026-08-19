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
            Reputation360 helps individuals and brands take control of how they
            are perceived online. We build credible, resilient reputations
            designed to strengthen trust over the long term.
          </p>
          <p className="mb-4 font-body text-lg leading-relaxed text-steel">
            We care deeply about the people we work with, and that commitment
            shapes every strategy we create, with a focus on delivering
            meaningful, measurable improvements in how you appear across Google
            Search and AI-powered search experiences.
          </p>
          <p className="mb-4 font-body text-lg leading-relaxed text-steel">
            As the way people discover information continues to evolve, we help
            clients manage not just traditional Google Search results, but also
            how they are represented across AI-powered platforms.
          </p>
          <p className="font-body text-lg leading-relaxed text-steel">
            The result is a stronger digital presence, greater trust, and the
            confidence to move forward in your career, your business, and your
            future.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
