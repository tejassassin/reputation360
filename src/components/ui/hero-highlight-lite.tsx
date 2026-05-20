import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/** LCP-friendly hero wrapper with CSS-only dot grid (no motion). */
export function HeroHighlightLite({
  children,
  className,
  containerClassName,
  dotPattern = true,
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  /** Static dot grid behind headline copy (CSS only). */
  dotPattern?: boolean;
}) {
  return (
    <div
      className={cn(
        "group relative flex w-full items-center justify-center overflow-hidden",
        containerClassName,
      )}
    >
      {dotPattern ? (
        <div
          className="r360-hero-dot-grid pointer-events-none absolute inset-0 z-0 opacity-[0.42] max-md:opacity-[0.38] md:opacity-50"
          aria-hidden
        />
      ) : null}
      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
}
