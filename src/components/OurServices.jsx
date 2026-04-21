import React from "react";
import { OUR_SERVICES_SECTION_INTRO } from "../data/reputationServices";
import { ServicesMatrix } from "./ServicesMatrix";

function OurServices() {
  return (
    <section className="relative overflow-hidden py-28 md:py-32" aria-labelledby="our-services-heading">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#f4f7fb_0%,#fafbfc_35%,#f0f4fa_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4] bg-[radial-gradient(circle_at_1px_1px,rgba(15,35,70,0.08)_1px,transparent_0)] bg-[length:32px_32px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-48 top-1/4 h-[480px] w-[480px] rounded-full bg-[#78dc77]/[0.11] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#1f3b64]/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <p className="mb-4 font-heading text-xs font-bold uppercase tracking-[0.28em] text-[#2E5B88]">
            What we deliver
          </p>
          <h2
            id="our-services-heading"
            className="font-heading text-4xl font-bold tracking-tight text-[#02254d] md:text-5xl"
          >
            Our Services
          </h2>
          <div
            className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#2E5B88]"
            aria-hidden
          />
          <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-steel md:text-lg">
            {OUR_SERVICES_SECTION_INTRO}
          </p>
        </div>

        <div className="rounded-[2rem] border border-[#e5e7eb] bg-white/50 p-6 shadow-[0_40px_100px_-60px_rgba(15,35,70,0.35)] ring-1 ring-white/90 backdrop-blur-[2px] sm:p-8 md:p-10 lg:p-12">
          <ServicesMatrix />
        </div>
      </div>
    </section>
  );
}

export default OurServices;
