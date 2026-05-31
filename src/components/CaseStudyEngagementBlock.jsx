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
      <div className={compact ? "text-right" : ""}>
        {showLabel ? (
          <p className="mb-0.5 text-[0.65rem] font-extrabold uppercase tracking-widest text-slate-500">
            Engagement
          </p>
        ) : null}
        <p className={`flex flex-wrap items-baseline gap-x-1.5 gap-y-0 font-heading font-extrabold leading-none tracking-tight ${compact ? "justify-end" : ""}`}>
          <span className={`bg-gradient-to-br from-navy via-[#2E5B88] to-green bg-clip-text tabular-nums text-transparent ${compact ? "text-4xl md:text-[2.75rem]" : "text-5xl sm:text-6xl md:text-7xl"}`}>
            {e.value}
          </span>
          <span className={`font-bold text-navy ${compact ? "text-[1.1rem] md:text-xl" : "text-2xl sm:text-3xl"}`}>{e.unit}</span>
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
