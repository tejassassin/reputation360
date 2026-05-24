import { useMemo } from "react";
import { parseEngagementMonths } from "../utils/parseEngagement.js";

/**
 * @param {object} props
 * @param {{ duration: string }} props.study
 * @param {boolean} [props.showLabel]
 */
export function CaseStudyEngagementBlock({ study, showLabel = true }) {
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
          <span className="bg-gradient-to-r from-navy via-slate to-green bg-clip-text text-5xl tabular-nums text-transparent sm:text-6xl md:text-7xl">
            {e.value}
          </span>
          <span className="text-2xl font-bold text-slate sm:text-3xl">{e.unit}</span>
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
      <p className="font-heading text-2xl font-extrabold leading-tight text-navy sm:text-3xl">
        {e.full}
      </p>
    </div>
  );
}
