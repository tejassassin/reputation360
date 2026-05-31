import { useMemo } from "react";
import { parseEngagementMonths } from "../utils/parseEngagement.js";

/**
 * @param {object} props
 * @param {{ duration: string }} props.study
 * @param {boolean} [props.showLabel]
 * @param {boolean} [props.compact]
 */
export function CaseStudyEngagementBlock({ study, showLabel = true, compact = false }) {
  const e = useMemo(
    () => parseEngagementMonths(study.duration),
    [study.duration],
  );
  if (e.value) {
    return (
      <div>
        {showLabel ? (
          <p className="mb-0.5 text-xs font-extrabold uppercase tracking-wider text-steel">
            Engagement
          </p>
        ) : null}
        <p className="flex flex-wrap items-baseline gap-x-2 gap-y-0 font-heading font-extrabold leading-none tracking-tight">
          <span className={`bg-gradient-to-r from-navy via-slate to-green bg-clip-text tabular-nums text-transparent ${compact ? "text-3xl md:text-4xl" : "text-5xl sm:text-6xl md:text-7xl"}`}>
            {e.value}
          </span>
          <span className={`font-bold text-slate ${compact ? "text-lg md:text-xl" : "text-2xl sm:text-3xl"}`}>{e.unit}</span>
        </p>
      </div>
    );
  }
  return (
    <div>
      {showLabel ? (
        <p className="mb-0.5 text-xs font-extrabold uppercase tracking-wider text-steel">
          Timeline
        </p>
      ) : null}
      <p className={`font-heading font-extrabold leading-tight text-navy ${compact ? "text-xl md:text-2xl" : "text-2xl sm:text-3xl"}`}>
        {e.full}
      </p>
    </div>
  );
}
