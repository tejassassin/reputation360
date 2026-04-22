import { motion as Motion, useReducedMotion } from "motion/react";
import { CheckCircle2, ListChecks, Target } from "lucide-react";
import { CaseStudyMilestoneInteractive } from "./CaseStudyMilestoneInteractive.jsx";
import {
  getIconListLines,
  getSectionKind,
  parseMilestoneItems,
} from "../utils/caseStudySectionTypes.js";

/**
 * @param {object} props
 * @param {string} props.text
 * @param {string} [props.className]
 */
function ProseBlock({ text, className = "" }) {
  const parts = String(text).trim().split(/\n\n+/);
  if (parts.length > 1) {
    return (
      <div className={className}>
        {parts.map((p, j) => (
          <p
            key={j}
            className="mb-4 whitespace-pre-line last:mb-0 [text-wrap:pretty]"
          >
            {p}
          </p>
        ))}
      </div>
    );
  }
  return (
    <div
      className={`whitespace-pre-line [text-wrap:pretty] text-slate-700 ${className}`.trim()}
    >
      {text}
    </div>
  );
}

/**
 * @param {object} props
 * @param {string[]} props.lines
 * @param {'strategy' | 'results' | 'challenge'} props.variant
 */
function IconLineList({ lines, variant }) {
  const reduce = useReducedMotion();

  const rowClass =
    "group/li flex items-start gap-3 rounded-2xl border border-transparent py-0.5 pl-0.5 pr-1 transition duration-200 hover:border-slate-200/60 hover:bg-white/90 hover:shadow-sm";

  return (
    <ul className="m-0 list-none space-y-2.5 p-0 sm:space-y-3">
      {lines.map((line, i) => {
        const icon =
          variant === "results" ? (
            <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={2.1} />
          ) : variant === "challenge" ? (
            <Target className="h-3.5 w-3.5" strokeWidth={2.1} />
          ) : (
            <ListChecks className="h-3.5 w-3.5" strokeWidth={2.1} />
          );
        const inner = (
          <>
            <span
              className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-slate-100/95 to-white text-navy ring-1 ring-slate-200/70 transition group-hover/li:from-[#4CAF50]/20 group-hover/li:to-white group-hover/li:text-[#1d4d1d] group-hover/li:ring-[#4CAF50]/30"
              aria-hidden
            >
              {icon}
            </span>
            <span className="min-w-0 flex-1 pt-0.5 text-[0.95rem] leading-[1.75] text-slate-700 [text-wrap:pretty] sm:text-base md:leading-[1.82]">
              {line}
            </span>
          </>
        );
        if (reduce) {
          return (
            <li key={i} className={rowClass}>
              {inner}
            </li>
          );
        }
        return (
          <Motion.li
            key={i}
            className={rowClass}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: Math.min(i * 0.04, 0.35) }}
          >
            {inner}
          </Motion.li>
        );
      })}
    </ul>
  );
}

/**
 * @param {object} props
 * @param {string} props.heading
 * @param {string} props.body
 */
export function CaseStudyBodyRenderer({ heading, body }) {
  const kind = getSectionKind(heading);
  const miles = parseMilestoneItems(body, heading);
  if (miles && miles.length >= 2) {
    return (
      <div className="overflow-x-hidden rounded-2xl border border-[#dce3ec] bg-white p-4 shadow-sm sm:p-5">
        <CaseStudyMilestoneInteractive
          items={miles}
          headingForLabel={heading}
        />
      </div>
    );
  }

  const lines = getIconListLines(body, heading, false);
  if (lines && lines.length) {
    if (kind === "challenge" && lines[0] && lines[0].length > 200) {
      const [first, ...rest] = lines;
      return (
        <div className="space-y-5">
          <p className="whitespace-pre-line text-[0.95rem] leading-[1.82] text-slate-700 [text-wrap:pretty] first-letter:float-left first-letter:mr-2 first-letter:mt-0.5 first-letter:font-heading first-letter:text-3xl first-letter:font-extrabold first-letter:leading-none first-letter:text-navy sm:text-base md:leading-[1.85] md:first-letter:text-4xl">
            {first}
          </p>
          {rest.length > 0 ? (
            <IconLineList lines={rest} variant="challenge" />
          ) : null}
        </div>
      );
    }
    if (kind === "strategy" || kind === "results") {
      return (
        <IconLineList
          lines={lines}
          variant={kind === "results" ? "results" : "strategy"}
        />
      );
    }
  }

  return <ProseBlock text={body} className="text-slate-700" />;
}
