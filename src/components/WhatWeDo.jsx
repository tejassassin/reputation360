import AboutReputationVisual from "./AboutReputationVisual.jsx";

function WhatWeDo() {
  return (
    <div
      className="r360-what-we-do-section bg-offwhite"
      role="region"
      aria-labelledby="about-reputation360-heading"
    >
      <div className="r360-site-container r360-what-we-do-shell">
        <div className="r360-what-we-do-grid grid grid-cols-1 items-start">
          <div className="r360-what-we-do-copy order-1 min-w-0 lg:order-2">
            <h2
              id="about-reputation360-heading"
              className="r360-what-we-do-heading font-heading font-bold text-navy"
            >
              About Reputation360: Building Stronger Reputations Across Google and AI Search
            </h2>
            <p className="r360-what-we-do-body font-body leading-relaxed">
              Reputation360 helps individuals and businesses take control of how they appear online.
              We deliver industry-leading reputation management services at highly competitive prices,
              supported by experienced specialists and strategies built around each client&apos;s specific
              challenges and goals.
            </p>
            <p className="r360-what-we-do-body font-body leading-relaxed">
              We are at the forefront of reputation management for Google AI Overviews and AI-powered
              search. Our strategies influence not only what people find in traditional search results,
              but also how individuals and businesses are represented when AI platforms summarize,
              interpret and present information about them.
            </p>
          </div>

          <div className="r360-what-we-do-visual order-2 min-w-0 lg:order-1">
            <div className="r360-what-we-do-visual-card ha-lift h-fit self-start overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_12px_40px_-16px_rgba(31,59,100,0.18)]">
              <AboutReputationVisual />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
