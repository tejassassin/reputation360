import { ArrowRight, Check } from "lucide-react";
import HomeReputationScoreGauge from "./HomeReputationScoreGauge.jsx";
import {
  HOME_REPUTATION_PUBLIC_RANGES,
  HOME_REPUTATION_SCORE_TRUST_POINTS,
} from "../../data/homeReputationScoreDisplay.js";
import { freeScanLinkProps } from "../../constants/freeRiskScan.js";
import { internalAnchorProps } from "../../lib/internalLinkProps.js";
import { R360_CTA_REPUTATION_SCAN_SOLID } from "../../lib/ctaVariants.js";
import { trackFreeReputationScanClick } from "../../lib/conversionAnalytics.js";

export default function HomeFreeReputationScoreSection() {
  const scanHref = freeScanLinkProps.href;

  return (
    <section
      className="r360-home-reputation-score-section border-t border-slate-200/80 bg-offwhite text-center"
      aria-labelledby="home-reputation-score-heading"
    >
      <div className="r360-site-container r360-home-reputation-score-shell">
        <div className="r360-home-reputation-score-inner mx-auto flex w-full flex-col items-center">
          <p className="r360-home-reputation-score-eyebrow font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-[#2E5B88]">
            FREE REPUTATION SCAN
          </p>

          <h2
            id="home-reputation-score-heading"
            className="r360-home-reputation-score-heading mt-3 font-heading text-2xl font-bold leading-tight tracking-tight text-navy sm:text-3xl lg:text-4xl"
          >
            Your online reputation has a score. Discover yours.
          </h2>

          <p className="r360-home-reputation-score-support mx-auto mt-4 max-w-[36rem] font-body text-base leading-relaxed text-steel sm:text-lg">
            Your confidential report includes a personalized reputation score based on what appears
            across the first three pages of Google.
          </p>

          <div className="r360-home-reputation-score-gauge-wrap mt-8 w-full sm:mt-10">
            <HomeReputationScoreGauge />
          </div>

          <ul
            className="r360-home-reputation-score-legend m-0 mt-5 flex list-none flex-wrap items-center justify-center gap-x-4 gap-y-2 p-0 font-body text-sm text-charcoal sm:mt-6 sm:gap-x-6"
            aria-label="Reputation score ranges on a 0 to 100 scale"
          >
            {HOME_REPUTATION_PUBLIC_RANGES.map((item) => (
              <li key={item.id} className="inline-flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ backgroundColor: item.dotColor }}
                  aria-hidden="true"
                />
                <span className="font-medium">
                  {item.label} {item.range}
                </span>
              </li>
            ))}
          </ul>

          <div className="r360-home-reputation-score-cta-wrap mt-8 sm:mt-9">
            <a
              href={scanHref}
              {...internalAnchorProps(scanHref)}
              onClick={() => trackFreeReputationScanClick("home_reputation_score_section")}
              className={`${R360_CTA_REPUTATION_SCAN_SOLID} ha-pill inline-flex w-full max-w-md items-center justify-center gap-2 rounded-xl px-8 py-3.5 font-heading text-sm font-bold text-white sm:w-auto sm:text-base`}
            >
              Get My Free Reputation Score
              <ArrowRight className="h-5 w-5 shrink-0" strokeWidth={2.25} aria-hidden="true" />
            </a>
          </div>

          <ul className="r360-home-reputation-score-trust m-0 mt-6 flex list-none flex-wrap items-center justify-center gap-x-5 gap-y-2 p-0 font-body text-sm text-steel sm:gap-x-8">
            {HOME_REPUTATION_SCORE_TRUST_POINTS.map((point) => (
              <li key={point} className="inline-flex items-center gap-1.5">
                <Check className="h-4 w-4 shrink-0 text-green" strokeWidth={2.25} aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
