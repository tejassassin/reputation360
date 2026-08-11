import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import CalendlyInlineWidget from "./CalendlyInlineWidget.jsx";
import { CALENDLY_INLINE_DATA_URL } from "../constants/scheduling.js";

export default function CalendlyBookingModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[10050] flex items-end justify-center p-3 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="calendly-booking-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-[#02254d]/55 backdrop-blur-sm"
        aria-label="Close booking dialog"
        onClick={onClose}
      />
      <div
        className="relative z-[1] flex w-full max-w-3xl flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-200/80 px-5 py-4 sm:px-6 sm:py-5">
          <div>
            <h2
              id="calendly-booking-modal-title"
              className="font-heading text-xl font-bold text-[#02254d] sm:text-2xl"
            >
              Book Your Confidential Consultation
            </h2>
            <p className="mt-1 text-sm text-[#43474e] sm:text-[15px]">
              Schedule directly on Reputation360. You will not be redirected to a third-party site.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-[#02254d] transition hover:bg-slate-50"
            aria-label="Close"
          >
            <X className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>
        <div className="overflow-hidden bg-[#f5f7fa] p-3 sm:p-4">
          <CalendlyInlineWidget dataUrl={CALENDLY_INLINE_DATA_URL} />
        </div>
      </div>
    </div>,
    document.body,
  );
}
