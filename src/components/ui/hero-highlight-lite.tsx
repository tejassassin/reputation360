import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/** LCP-friendly hero wrapper without motion (used on the home hero, mobile). */
export function HeroHighlightLite({
  children,
  className,
  containerClassName,
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <div
      className={cn(
        "group relative flex w-full items-center justify-center",
        containerClassName,
      )}
    >
      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
}
