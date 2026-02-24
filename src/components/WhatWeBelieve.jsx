import React from "react";
import { Compare } from "./ui/compare";
// import firstImage from "../assets/before1.jpeg";
import firstImage from "../assets/before3.jpeg";

// import secondImage from "../assets/after1.jpeg";
import secondImage from "../assets/before4.jpeg";

function WhatWeBelieve() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
        <div className="lg:w-[60%] flex flex-col justify-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-6">
            What we believe
          </h2>
          <p className="font-body text-steel text-lg leading-relaxed mb-4">
            Your impression online should reflect who you truly are today, not
            outdated, misleading, or one-sided search results. Ignoring
            reputation issues allows negative content to compound, gain
            authority, and become harder to displace. Early intervention reduces
            both cost and timeline.
          </p>

          <p className="font-body text-steel text-lg leading-relaxed">
            At Reputation360, we help individuals and brands own their narrative
            - strategically and sustainably.
          </p>
        </div>

        <div className="lg:w-[60%] h-72 sm:h-96 lg:h-auto lg:min-h-100 bg-steel/10 rounded-2xl flex items-center justify-center overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35),0_12px_24px_-8px_rgba(0,0,0,0.2)]">
          <Compare
            className="w-full h-full"
            firstImage={firstImage}
            secondImage={secondImage}
            firstImageClassName="object-contain object-center w-full h-full"
            secondImageClassname="object-contain object-center w-full h-full"
            slideMode="hover"
          />
        </div>
      </div>
    </div>
  );
}

export default WhatWeBelieve;
