import { createPortal } from "react-dom";
import { FREE_RISK_SCAN_PATH } from "@/constants/freeRiskScan.js";
import R360Chatbot from "./R360Chatbot.jsx";

/**
 * Portaled to document.body so no #root overflow/transform/stacking can block hits.
 * Renders only the new unified Birdeye-style R360Chatbot widget.
 */
export default function GlobalContactDock() {
  if (typeof document === "undefined") return null;

  if (window.location.pathname === FREE_RISK_SCAN_PATH) return null;

  return createPortal(
    <div className="pointer-events-none fixed inset-0 isolate z-[10000] flex items-end justify-end p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pr-[max(0.75rem,env(safe-area-inset-right))] sm:p-4 md:p-6">
      <R360Chatbot />
    </div>,
    document.body,
  );
}
