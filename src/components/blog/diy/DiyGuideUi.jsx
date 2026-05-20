import { Check, ChevronDown, Minus, Plus, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function DiyInteractiveHint() {
  return (
    <span className="diy-interactive-hint">
      <Sparkles className="h-3 w-3" aria-hidden />
      Interactive guide
    </span>
  );
}

export function DiyKeyBox({ icon, title, children }) {
  return (
    <div className="diy-key-box">
      <div className="diy-key-box-title">
        <span aria-hidden>{icon}</span>
        <span>{title}</span>
      </div>
      <div className="font-body text-sm leading-relaxed text-jet">{children}</div>
    </div>
  );
}

export function DiyAccordion({ id, title, children, open, onToggle, variant = "default" }) {
  const isMistake = variant === "mistake";
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border",
        isMistake ? "border-destructive/20 bg-destructive/5" : "border-slate-200 bg-white",
      )}
    >
      <button
        type="button"
        className={cn(
          "flex w-full items-center justify-between p-6 text-left font-heading transition-colors",
          isMistake ? "hover:bg-destructive/10" : "hover:bg-slate-50",
        )}
        aria-expanded={open}
        aria-controls={id}
        id={`${id}-btn`}
        onClick={() => onToggle(id)}
      >
        <span className="text-lg font-bold text-charcoal">{title}</span>
        <ChevronDown
          className={cn("h-5 w-5 shrink-0 text-navy transition-transform", open && "rotate-180")}
          aria-hidden
        />
      </button>
      <div
        id={id}
        role="region"
        aria-labelledby={`${id}-btn`}
        className={cn("px-6 pb-6 font-body leading-relaxed text-jet", !open && "hidden")}
      >
        {children}
      </div>
    </div>
  );
}

export function DiyFaqAccordion({ id, title, children, open, onToggle }) {
  return (
    <div className="bg-white">
      <button
        type="button"
        className="flex w-full items-center justify-between p-8 text-left font-heading transition-colors hover:bg-slate-50"
        aria-expanded={open}
        aria-controls={id}
        id={`${id}-btn`}
        onClick={() => onToggle(id)}
      >
        <span className="text-xl font-bold text-charcoal">{title}</span>
        {open ? (
          <Minus className="h-5 w-5 shrink-0 text-navy" aria-hidden />
        ) : (
          <Plus className="h-5 w-5 shrink-0 text-navy" aria-hidden />
        )}
      </button>
      <div
        id={id}
        role="region"
        aria-labelledby={`${id}-btn`}
        className={cn("px-8 pb-8 font-body leading-relaxed text-jet", !open && "hidden")}
      >
        {children}
      </div>
    </div>
  );
}

export function ReadingProgressRail({ pct }) {
  const fill = Math.min(100, Math.max(0, pct));
  const rounded = Math.round(fill);
  const label = rounded >= 100 ? "100% completed" : `${rounded}% completed`;
  const clip = `inset(0 0 ${100 - fill}% 0)`;

  return (
    <div className="flex min-h-0 flex-1 flex-col p-5">
      <div className="w-full shrink-0 text-center">
        <p className="font-heading text-xs font-bold tracking-widest text-steel uppercase">
          Reading progress
        </p>
        <p className="mt-2 font-heading text-3xl font-extrabold tabular-nums text-navy">{rounded}%</p>
        <p className="mt-1 font-body text-sm font-medium text-steel">{label}</p>
      </div>
      <div className="relative mt-5 min-h-0 flex-1">
        <div className="absolute inset-0 flex justify-center px-0.5">
          <div
            className="relative h-full w-3 max-w-full overflow-hidden rounded-full bg-slate-200/90"
            aria-hidden
          >
            <div
              className="absolute inset-0 rounded-full bg-green transition-[clip-path] duration-150 ease-out"
              style={{ clipPath: clip }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Green numbered circles + detail panel (original HTML mock style). */
export function StepPicker({ steps, activeStep, onSelectStep, panelId = "stepContent", hint }) {
  const active = steps.find((s) => s.n === activeStep) ?? steps[0];
  return (
    <div className="my-6">
      {hint ? (
        <p className="mb-3 font-body text-sm font-medium text-slate">{hint}</p>
      ) : null}
      <div className="rounded-xl bg-navy/[0.04] p-4 sm:p-6">
        <div className="flex flex-wrap items-center justify-center gap-y-3 sm:justify-start">
          {steps.map((s, idx) => {
            const filled = s.n <= activeStep;
            const connectorOn = activeStep > idx + 1;
            return (
              <span key={s.n} className="contents">
                <button
                  type="button"
                  className={cn(
                    "flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-heading text-base font-bold transition-all shadow-sm",
                    filled
                      ? "bg-green text-white ring-2 ring-green/30"
                      : "bg-white text-navy ring-2 ring-slate-200 hover:ring-green/50",
                    activeStep === s.n && "scale-110 ring-4 ring-green/25",
                  )}
                  aria-pressed={activeStep === s.n}
                  aria-label={`Step ${s.n}: ${s.title}`}
                  onClick={() => onSelectStep(s.n)}
                >
                  {s.n}
                </button>
                {idx < steps.length - 1 ? (
                  <span
                    className={cn(
                      "mx-1.5 h-1 min-w-[1.5rem] max-w-10 flex-1 rounded-full sm:min-w-[2rem]",
                      connectorOn ? "bg-green" : "bg-slate-300",
                    )}
                    aria-hidden
                  />
                ) : null}
              </span>
            );
          })}
        </div>
        <div
          id={panelId}
          className="mt-5 flex gap-4 rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-5"
        >
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green font-heading text-lg font-bold text-white"
            aria-hidden
          >
            {active.n}
          </div>
          <div className="min-w-0">
            <h4 className="font-heading text-base font-bold text-navy sm:text-lg">{active.title}</h4>
            <p className="mt-2 font-body text-sm leading-relaxed text-jet sm:text-base">{active.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DiyDoAvoidSection({ doItems, avoidItems }) {
  return (
    <div className="mt-5 grid gap-3 md:grid-cols-2">
      <div className="rounded-2xl border-2 border-green/30 bg-green/[0.06] p-5 md:p-6">
        <p className="mb-4 flex items-center gap-2 font-heading text-sm font-bold text-navy">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green text-white">
            <Check className="h-4 w-4" aria-hidden />
          </span>
          Do this
        </p>
        <ul className="space-y-3">
          {doItems.map((item) => (
            <li key={item.title}>
              <p className="font-heading text-sm font-bold text-navy">{item.title}</p>
              <p className="mt-0.5 font-body text-sm text-jet">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 md:p-6">
        <p className="mb-4 flex items-center gap-2 font-heading text-sm font-bold text-navy">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 text-white">
            <X className="h-4 w-4" aria-hidden />
          </span>
          Avoid this
        </p>
        <ul className="space-y-3">
          {avoidItems.map((item) => (
            <li key={item.title}>
              <p className="font-heading text-sm font-bold text-navy">{item.title}</p>
              <p className="mt-0.5 font-body text-sm text-jet">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function StarRating({ count, size = "md", inverted = false }) {
  const filled = Math.min(5, Math.max(0, Number(count) || 0));
  const starSize = size === "sm" ? "text-sm" : "text-xl";
  const color = inverted ? "text-white" : "text-[#4CAF50]";
  return (
    <span
      className={cn("inline-flex gap-px leading-none tracking-tight", starSize)}
      aria-label={`${filled} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={cn(i < filled ? color : inverted ? "text-white/35" : "text-slate-300")}
          aria-hidden
        >
          ★
        </span>
      ))}
    </span>
  );
}

export function DiyPlatformTable({ platforms }) {
  return (
    <div className="diy-table-wrap">
      <table className="diy-comparison-table">
        <thead>
          <tr>
            <th scope="col">Platform</th>
            <th scope="col">Ranking Power</th>
            <th scope="col">Effort Required</th>
            <th scope="col">Best For</th>
          </tr>
        </thead>
        <tbody>
          {platforms.map((p) => (
            <tr key={p.id}>
              <td>
                <strong>{p.name}</strong>
              </td>
              <td>
                <StarRating count={p.stars} />
              </td>
              <td>{p.effort}</td>
              <td>{p.bestFor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ChecklistBlock({ items, checked, onToggle, title, subtitle }) {
  const done = checked.filter(Boolean).length;
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] bg-navy p-8 text-white md:p-14">
      <div className="relative z-10">
        <h2 className="mb-3 font-heading text-2xl font-bold md:text-3xl">{title}</h2>
        {subtitle ? (
          <p className="mb-2 max-w-xl font-body text-base leading-relaxed text-white/85 md:text-lg">
            {subtitle}
          </p>
        ) : null}
        <p className="mb-8 font-heading text-sm font-bold text-green">
          {done} of {items.length} complete - tap each item
        </p>
        <div className="max-w-2xl space-y-3">
          {items.map((label, i) => (
            <label
              key={label}
              className={cn(
                "flex cursor-pointer items-center gap-4 rounded-2xl border border-white/10 p-4 font-body transition-all hover:bg-white/10 md:p-5",
                checked[i] && "border-green bg-green/15",
              )}
            >
              <div className="relative h-6 w-6 shrink-0">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={checked[i]}
                  onChange={() => onToggle(i)}
                />
                <div
                  className={cn(
                    "flex h-6 w-6 items-center justify-center rounded border-2 border-white/40 transition-all",
                    checked[i] && "border-green bg-green",
                  )}
                />
                {checked[i] ? (
                  <Check className="pointer-events-none absolute inset-0 m-auto h-4 w-4 text-navy" aria-hidden />
                ) : null}
              </div>
              <span className="text-base font-medium md:text-lg">{label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DiySectionHeader({ number, title }) {
  return (
    <>
      <span className="diy-section-tag">Section {number}</span>
      <h2 className="mb-6 font-heading text-3xl font-bold text-navy">{title}</h2>
    </>
  );
}

export function MobileGuideNav({ nav, activeNavId, readingPct }) {
  return (
    <div className="diy-mobile-nav lg:hidden">
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="font-heading text-[10px] font-bold tracking-widest text-green uppercase">
          Jump to section
        </span>
        <span className="font-heading text-xs font-bold tabular-nums text-navy">
          {Math.round(readingPct)}%
        </span>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {nav.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={cn(
              "shrink-0 rounded-full px-3 py-1.5 font-body text-xs font-semibold no-underline transition-colors",
              activeNavId === id
                ? "bg-navy text-white"
                : "bg-slate-100 text-slate hover:bg-green/15 hover:text-navy",
            )}
          >
            {label.replace(/^\d+\.\s*/, "")}
          </a>
        ))}
      </div>
    </div>
  );
}
