import React from "react";
import { OUR_SERVICES_SECTION_INTRO } from "../data/reputationServices";
import { OurServicesGrid } from "./OurServicesGrid";

function OurServices() {
  return (
    <section
      className="relative overflow-hidden py-12 text-white md:py-16 lg:py-20"
      aria-labelledby="our-services-heading"
    >
      {/* Reference palette: #051626 → #0a253e with a soft teal center glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#020911] via-[#051626] to-[#0a253e]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(10,40,60,0.5),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.12)_1px,transparent_0)] bg-[length:40px_40px] opacity-40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-[#4ade80]/[0.08] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full bg-[#0a253e] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-[min(100%,1720px)] px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20">
        <div className="mx-auto mb-5 max-w-5xl text-center md:mb-6 lg:max-w-6xl">
          <h2
            id="our-services-heading"
            className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl"
          >
            Our Services
          </h2>
          <div
            className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-gradient-to-r from-[#4ade80] to-cyan-400/90"
            aria-hidden
          />
          <p className="mx-auto mt-4 max-w-4xl px-2 font-body text-base leading-relaxed text-[#94a3b8] md:text-lg md:leading-relaxed">
            {OUR_SERVICES_SECTION_INTRO}
          </p>
        </div>

        <div className="w-full p-4 sm:p-5 md:p-6 lg:p-8">
          <OurServicesGrid />
        </div>
      </div>
    </section>
  );
}

export default OurServices;
