import { useState } from "react";
import { motion as Motion, useReducedMotion } from "motion/react";
import {
  Activity,
  Calendar,
  CheckCircle2,
  Copy,
  FileText,
  MapPinned,
  Route,
  Sparkles,
  Target,
} from "lucide-react";

/**
 * @param {string} heading
 */
function SectionGlyph({ heading }) {
  const h = heading.toLowerCase();
  const common = "h-5 w-5 shrink-0";
  if (h.includes("challenge")) {
    return <Target className={common} strokeWidth={2.1} aria-hidden />;
  }
  if (h.includes("baseline")) {
    return <Activity className={common} strokeWidth={2.1} aria-hidden />;
  }
  if (h.includes("objective") || h.includes("goal")) {
    return <MapPinned className={common} strokeWidth={2.1} aria-hidden />;
  }
  if (h.includes("strategy") || h.includes("approach")) {
    return <Route className={common} strokeWidth={2.1} aria-hidden />;
  }
  if (h.includes("milestone") || h.includes("month")) {
    return <Calendar className={common} strokeWidth={2.1} aria-hidden />;
  }
  if (h.includes("result") || h.includes("outcome") || h.includes("impact")) {
    return <Sparkles className={common} strokeWidth={2.1} aria-hidden />;
  }
  if (h.includes("deliver") || h.includes("execut") || h.includes("action")) {
    return <CheckCircle2 className={common} strokeWidth={2.1} aria-hidden />;
  }
  return <FileText className={common} strokeWidth={2.1} aria-hidden />;
}

/**
 * Split on blank lines; preserve internal line breaks with pre-line.
 * @param {object} props
 * @param {string} props.text
 * @param {string} [props.className]
 */
function FormattedCaseBody({ text, className = "" }) {
  const parts = String(text).trim().split(/\n\n+/);
  if (parts.length > 1) {
    return (
      <div className={className}>
        {parts.map((p, j) => (
          <p key={j} className="mb-4 whitespace-pre-line last:mb-0 [text-wrap:pretty]">
            {p}
          </p>
        ))}
      </div>
    );
  }
  return (
    <div className={`whitespace-pre-line [text-wrap:pretty] ${className}`.trim()}>
      {text}
    </div>
  );
}

/**
 * @param {object} props
 * @param {string} props.id
 * @param {{ heading: string; body: string }} props.section
 * @param {number} props.index
 */
export function CaseStudySectionBlock({ id, section, index }) {
  const reduce = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const n = index + 1;
  const label = n < 10 ? `0${n}` : String(n);

  const copyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    void navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Motion.section
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -8% 0px" }}
      variants={{
        hidden: { opacity: 0, y: 28 },
        show: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 380, damping: 32, mass: 0.9 },
        },
      }}
      whileHover={reduce ? undefined : { y: -3 }}
      className={[
        "group/section relative scroll-mt-36 overflow-hidden rounded-3xl border-2 border-slate-200/90",
        "bg-gradient-to-br from-white via-white to-slate-50/90 text-left",
        "shadow-[0_10px_32px_-22px_rgba(15,35,60,0.1)] ring-1 ring-slate-200/40",
        "will-change-transform",
        "hover:border-slate-300/85 hover:shadow-[0_22px_50px_-18px_rgba(15,35,60,0.2),0_0_0_1px_rgba(45,138,45,0.08)]",
        "md:scroll-mt-32",
        index > 0 ? "mt-4" : "mt-5",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className="h-1 w-full origin-left scale-x-[0.88] bg-gradient-to-r from-navy/80 via-slate/70 to-[#4CAF50] transition duration-500 ease-out group-hover/section:scale-x-100"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_100%_0%,rgba(45,138,45,0.05),transparent_50%)] opacity-0 transition duration-500 group-hover/section:opacity-100"
        aria-hidden
      />

      <div className="relative z-[1] p-6 sm:p-7 md:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
          <div className="flex w-full min-w-0 items-start justify-between gap-3 sm:gap-4">
            <div className="flex min-w-0 items-start gap-3 sm:gap-4">
              <div
                className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-50 to-white text-navy shadow-sm ring-1 ring-slate-200/50 transition duration-300 group-hover/section:scale-105 group-hover/section:border-[#4CAF50]/30 group-hover/section:ring-[#4CAF50]/15"
                aria-hidden
              >
                <SectionGlyph heading={section.heading} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                  <span className="inline-flex items-center rounded-lg bg-slate-100/90 px-2.5 py-0.5 font-mono text-xs font-bold tabular-nums text-slate-500 ring-1 ring-slate-200/80 transition group-hover/section:bg-[#4CAF50]/10 group-hover/section:text-navy group-hover/section:ring-[#4CAF50]/20">
                    {label}
                  </span>
                </div>
                <h2 className="mt-2.5 text-xl font-extrabold tracking-tight text-navy transition group-hover/section:text-charcoal sm:text-2xl md:leading-tight">
                  {section.heading}
                </h2>
              </div>
            </div>

            <button
              type="button"
              onClick={copyLink}
              className="group/btn -mr-1 grid h-9 w-9 shrink-0 place-items-center self-start rounded-xl border border-transparent text-slate-400 transition hover:border-slate-200/90 hover:bg-white hover:text-navy sm:h-10 sm:w-10"
              aria-label={copied ? "Link copied" : "Copy link to this section"}
              title="Copy link to this section"
            >
              {copied ? (
                <CheckCircle2
                  className="h-4 w-4 text-[#2d8a2d] sm:h-5 sm:w-5"
                  strokeWidth={2.2}
                />
              ) : (
                <Copy
                  className="h-4 w-4 transition group-hover/btn:scale-110 sm:h-[1.1rem] sm:w-[1.1rem]"
                  strokeWidth={2.2}
                />
              )}
            </button>
          </div>
        </div>

        <div className="relative mt-5 border-l-2 border-slate-200/80 pl-4 transition sm:mt-6 sm:pl-6 group-hover/section:border-l-[#4CAF50]/45">
          <div
            className="text-base font-normal leading-[1.82] text-slate-700 [text-wrap:pretty] md:text-[1.05rem] md:leading-[1.85] [&>p:empty]:hidden"
          >
            <FormattedCaseBody
              text={section.body}
              className="[&_p]:text-slate-700"
            />
          </div>
        </div>
      </div>
    </Motion.section>
  );
}
