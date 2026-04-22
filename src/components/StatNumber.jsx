import { useState, useEffect } from "react";

const easeOutCubic = (t) => 1 - (1 - t) ** 3;

/**
 * Animates from 0 to `end` when `start` is true (e.g. section entered viewport).
 * Respects `prefers-reduced-motion: reduce` by jumping to the final value.
 */
export function StatNumber({
  end,
  start = false,
  duration = 1500,
  prefix = "",
  suffix = "",
  className,
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return undefined;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(end);
      return undefined;
    }
    let raf = 0;
    const t0 = performance.now();
    const step = (now) => {
      const t = Math.min((now - t0) / duration, 1);
      setValue(Math.floor(end * easeOutCubic(t)));
      if (t < 1) raf = requestAnimationFrame(step);
      else setValue(end);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, start]);

  return (
    <span className={className}>
      {prefix}
      {value.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
