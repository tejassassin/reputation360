import React from "react";
import { Compare } from "./ui/compare";
import image from "../assets/WhatWeDo.png";

function WhatWeDo() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
        <div className="lg:w-[60%] min-h-110 bg-steel/10 rounded-2xl flex items-center justify-center overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35),0_12px_24px_-8px_rgba(0,0,0,0.2)]">
          <img
            src={image}
            alt="What We Do"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="lg:w-[60%] flex flex-col justify-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-6">
            About Reputation360
          </h2>
          <p className="font-body text-steel text-lg leading-relaxed mb-4">
            Reputation360 helps individuals and brands take control of how they
            are perceived online. With 13 years of hands-on experience in online
            reputation management, SEO, branding, content strategy, and digital
            marketing, we build reputations that are credible, resilient, and
            built to last.
          </p>
          <p className="font-body text-steel text-lg leading-relaxed">
           Our focus is long-term reputation health, not quick fixes -
            building trust, safety, and future opportunities for career growth
            and personal confidence.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
