"use client";

import { useEffect, useRef, useState } from "react";
import { HOME_REPUTATION_SCORE_PREVIEW } from "../../data/homeReputationScoreDisplay.js";

const ARC_LENGTH = 283;
const { score, max, arcFraction } = HOME_REPUTATION_SCORE_PREVIEW;

export default function HomeReputationScoreGauge() {
  const rootRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const finish = () => setRevealed(true);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finish();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          finish();
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -5% 0px", threshold: 0.15 },
    );

    observer.observe(node);

    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      finish();
    }

    const fallback = window.setTimeout(finish, 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  const dashOffset = revealed ? ARC_LENGTH * (1 - arcFraction) : ARC_LENGTH;

  return (
    <div ref={rootRef} className="r360-home-reputation-score-gauge mx-auto w-full max-w-[22rem] sm:max-w-[26rem]">
      <p className="mb-3 font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-steel">
        REPUTATION SCORE
      </p>

      <div
        className="relative mx-auto aspect-[260/168] w-full max-w-[26rem]"
        role="img"
        aria-label={`${score} out of ${max}`}
      >
        <svg
          viewBox="0 0 260 168"
          className="h-full w-full"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M 28 128 A 102 102 0 0 1 232 128"
            fill="none"
            stroke="#DCE6F0"
            strokeWidth="18"
            strokeLinecap="round"
          />
          <path
            d="M 28 128 A 102 102 0 0 1 232 128"
            fill="none"
            stroke="#4CAF50"
            strokeWidth="18"
            strokeLinecap="round"
            strokeDasharray={ARC_LENGTH}
            strokeDashoffset={dashOffset}
            className="r360-home-reputation-score-gauge-arc motion-reduce:transition-none"
          />
        </svg>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 text-center">
          <p className="font-heading font-bold tabular-nums text-navy">
            <span className="text-[clamp(2.75rem,8vw,4rem)] leading-none">{score}</span>
            <span className="text-[clamp(1.25rem,3.5vw,1.75rem)] font-semibold text-steel">/{max}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
