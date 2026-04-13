import { ChevronDown } from "lucide-react";

/** Expandable FAQ row; pairs with `.faq-details[open] .faq-chevron` in `index.css`. */
export function FaqAccordion({ question, defaultOpen, children }) {
  return (
    <details
      className="faq-details group ha-lift overflow-hidden rounded-xl bg-white shadow-sm"
      defaultOpen={defaultOpen}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between p-6 [&::-webkit-details-marker]:hidden">
        <span className="font-headline-faq text-lg font-semibold text-[#1F3B64]">
          {question}
        </span>
        <ChevronDown
          className="faq-chevron h-6 w-6 shrink-0 text-[#4CAF50] transition-transform"
          aria-hidden
        />
      </summary>
      <div className="border-t border-[#F5F7FA] px-6 pt-4 pb-6 leading-relaxed text-[#6B7280]">
        {children}
      </div>
    </details>
  );
}
