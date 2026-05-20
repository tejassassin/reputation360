import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/** CSS-only headline highlight (no Motion - safe for home hero LCP). */
export function Highlight({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "r360-hero-highlight relative inline rounded-lg bg-linear-to-r from-indigo-500 to-purple-400 px-1 pb-1 tracking-normal whitespace-normal dark:from-green-400 dark:to-emerald-400 dark:text-white",
        className,
      )}
    >
      {children}
    </span>
  );
}
