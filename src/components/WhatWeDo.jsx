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
            What we do (in simple terms)
          </h2>
          <p className="font-body text-steel text-lg leading-relaxed mb-4">
            We help reduce the visibility of negative, misleading, or unfair
            content on Google and strengthen accurate, positive results that
            deserve to rank.
          </p>
          <p className="font-body text-steel text-lg leading-relaxed">
            Our focus: long-term reputation health - not quick fixes. We ensure
            that your online reputation builds trust, safety, and future
            opportunities for career growth and personal confidence.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
