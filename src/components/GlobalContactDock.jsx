import { createPortal } from "react-dom";
import { FREE_RISK_SCAN_PATH } from "@/constants/freeRiskScan.js";
import R360Chatbot from "./R360Chatbot.jsx";

/**
 * Portaled to document.body so no #root overflow/transform/stacking can block hits.
 * Displays the site chatbot.
 */
export default function GlobalContactDock() {
  if (typeof document === "undefined") return null;

  if (window.location.pathname === FREE_RISK_SCAN_PATH) return null;

  return createPortal(
    <nav
      className="pointer-events-auto fixed bottom-0 right-0 isolate z-[10000] flex max-w-[100vw] flex-col items-end gap-2.5 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pr-[max(0.75rem,env(safe-area-inset-right))] sm:bottom-2 sm:right-2 sm:p-4 md:bottom-4 md:right-4"
      aria-label="Quick contact"
    >
      <div className="relative z-[10001] flex w-auto flex-col items-end">
        <R360Chatbot />
      </div>
    </nav>,
    document.body,
  );
}
