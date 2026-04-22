import { useState } from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Month-by-month milestones as an interactive “realistic timeline”
 * (same interaction pattern as Industry → Realistic Timeline; brand token palette only).
 * @param {object} props
 * @param {Array<{ time: string; text: string }>} props.items
 * @param {string} [props.headingForLabel]
 */
export function CaseStudyMilestoneInteractive({ items, headingForLabel = "Milestones" }) {
  const [active, setActive] = useState(0);
  const n = items.length;
  const cur = items[active];

  if (!n) return null;

  return (
    <div
      className="max-w-full"
      role="group"
      aria-label={`${headingForLabel}: select a period, use previous and next, or use arrow keys.`}
    >
      <p className="mb-4 text-[0.8rem] leading-relaxed text-[#5d6c80] md:text-sm">
        Tap a period, use <span className="whitespace-nowrap font-medium text-[#3f4f66]">Previous / Next</span>
        , or focus this area and use arrow keys, Home, or End.
      </p>

      <div
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight" || e.key === "ArrowDown") {
            e.preventDefault();
            setActive((i) => Math.min(n - 1, i + 1));
          }
          if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
            e.preventDefault();
            setActive((i) => Math.max(0, i - 1));
          }
          if (e.key === "Home") {
            e.preventDefault();
            setActive(0);
          }
          if (e.key === "End") {
            e.preventDefault();
            setActive(n - 1);
          }
        }}
        className="max-w-5xl rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-[#1f3b64]/30 focus-visible:ring-offset-2 md:rounded-2xl"
      >
        <div className="relative -mx-1 overflow-x-auto pb-2 pl-1 [-ms-overflow-style:none] [scrollbar-width:none] md:mx-0 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden">
          <div className="flex min-w-[min(100%,560px)] flex-row flex-nowrap items-center px-1 md:min-w-0 md:px-0">
            {items.flatMap((p, i) => {
              const selected = active === i;
              const btn = (
                <button
                  key={`m-${i}-${p.time}`}
                  type="button"
                  aria-pressed={selected}
                  aria-label={p.text ? `${p.time}. ${p.text}` : p.time}
                  onClick={() => setActive(i)}
                  className={`group flex min-w-0 max-w-[9rem] shrink-0 flex-col items-center rounded-2xl px-1.5 py-2 outline-none transition-opacity focus-visible:ring-2 focus-visible:ring-[#1f3b64]/35 focus-visible:ring-offset-2 md:max-w-[11rem] md:px-2.5 md:py-2 ${
                    selected ? "" : "opacity-[0.88] hover:opacity-100"
                  }`}
                >
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-[color,box-shadow,background-color] duration-200 md:h-12 md:w-12 ${
                      selected
                        ? "bg-[#e8eef9] text-[#0f2e58] shadow-[inset_0_0_0_2px_#0f2e58]"
                        : "bg-[#f0f2f7] text-[#1f3b64]/75 group-hover:text-[#1f3b64]"
                    }`}
                  >
                    <Calendar
                      className="h-5 w-5 md:h-6 md:w-6"
                      aria-hidden
                      strokeWidth={selected ? 2.25 : 1.75}
                      absoluteStrokeWidth
                    />
                  </span>
                  <span
                    className={`mt-1.5 break-words text-center font-mono text-[0.6rem] font-extrabold leading-tight tracking-tight sm:text-[0.65rem] ${
                      selected ? "text-[#0f2e58]" : "text-[#5d6c80]"
                    }`}
                  >
                    {p.time}
                  </span>
                </button>
              );
              if (i >= n - 1) {
                return [btn];
              }
              const seg = (
                <div
                  key={`m-seg-${i}`}
                  className={`mx-0.5 h-1 min-w-4 flex-1 rounded-full transition-colors duration-300 md:mx-2.5 ${
                    active > i ? "bg-[#0f2e58]" : "bg-[#e5eaf2]"
                  }`}
                  aria-hidden
                />
              );
              return [btn, seg];
            })}
          </div>
        </div>
        <p className="mt-1 text-left text-[0.7rem] text-[#5d6c80] md:hidden sm:text-[0.7rem]">
          Swipe the row to see every period. Connectors show progress.
        </p>

        <aside
          className="mt-5 rounded-2xl border border-[#1f3b64]/10 bg-[#f8f9fc] p-4 shadow-sm md:mt-6 md:p-6"
          aria-live="polite"
        >
          <div className="flex flex-col gap-3 border-b border-[#dfe6ee] pb-4 sm:flex-row sm:items-center sm:gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center self-start rounded-xl bg-[#e8eef9] text-[#0f2e58] shadow-[inset_0_0_0_2px_#0f2e58] sm:h-14 sm:w-14">
              <Calendar className="h-6 w-6" aria-hidden strokeWidth={2.25} absoluteStrokeWidth />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-[#1f3b64]/45 sm:text-[0.65rem]">
                Selected period
              </p>
              <p className="mt-0.5 font-mono text-sm font-extrabold leading-snug text-[#0f2e58] sm:text-base">
                {cur?.time}
              </p>
            </div>
            <span className="inline-flex w-fit items-center justify-center rounded-full bg-white px-3 py-1.5 font-heading text-xs font-bold text-[#0f2e58] ring-1 ring-[#dfe6ee] tabular-nums sm:ml-auto">
              {active + 1} / {n}
            </span>
          </div>
          {cur?.text ? (
            <p className="mt-3 text-[0.95rem] leading-relaxed text-[#3f4f66] [text-wrap:pretty] sm:mt-4 sm:text-base sm:leading-relaxed">
              {cur.text}
            </p>
          ) : null}
        </aside>

        <div className="mt-4 flex flex-wrap items-center justify-start gap-2.5 md:mt-5">
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-full border border-[#dfe6ee] bg-white px-3.5 py-2.5 text-sm font-semibold text-[#0f2e58] shadow-sm transition-colors hover:border-[#1f3b64]/30 hover:bg-[#f8f9fc] disabled:pointer-events-none disabled:opacity-40"
            disabled={active === 0}
            onClick={() => setActive((i) => Math.max(0, i - 1))}
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
            Previous
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-full border border-[#dfe6ee] bg-white px-3.5 py-2.5 text-sm font-semibold text-[#0f2e58] shadow-sm transition-colors hover:border-[#1f3b64]/30 hover:bg-[#f8f9fc] disabled:pointer-events-none disabled:opacity-40"
            disabled={active === n - 1}
            onClick={() => setActive((i) => Math.min(n - 1, i + 1))}
          >
            Next
            <ChevronRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
}
