import React from "react";

function WhatWeDo() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
        <div className="lg:w-[60%] flex flex-col justify-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-6">
            What we believe
          </h2>
          <p className="font-body text-steel text-lg leading-relaxed mb-4">
            Your impression online should reflect who you truly are today, not
            outdated, misleading, or one-sided search results.
          </p>
          <p className="font-body text-steel text-lg leading-relaxed">
            At Reputation360, we help individuals and brands own their narrative
            — strategically and sustainably.
          </p>
        </div>

        <div className="lg:w-[40%] min-h-80 bg-steel/10 rounded-2xl flex items-center justify-center">
          <div className="text-steel/50 font-body text-sm">Image</div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
