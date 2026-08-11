import { useEffect, useRef } from "react";

const CALENDLY_WIDGET_SCRIPT_SRC =
  "https://assets.calendly.com/assets/external/widget.js";

/**
 * Inline Calendly widget (no redirect off-domain).
 *
 * Calendly's script will render an iframe into `data-url` containers.
 */
export default function CalendlyInlineWidget({ dataUrl }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const containerEl = containerRef.current;
    if (!containerEl) return;

    // Avoid duplicating if Calendly is already initialized.
    containerEl.innerHTML = "";

    const existingScript = document.querySelector(
      `script[src="${CALENDLY_WIDGET_SCRIPT_SRC}"]`,
    );

    const init = () => {
      // Prefer explicit initialization if available.
      if (window.Calendly?.initInlineWidget) {
        window.Calendly.initInlineWidget({
          url: dataUrl,
          parentElement: containerEl,
        });
        return;
      }

      // Fallback: widget.js auto-parses `[data-url]` containers.
      // No-op here because script loading + data-url should handle it.
    };

    let scriptEl = existingScript;
    let didAddScript = false;

    if (scriptEl) {
      // Script may already be loaded.
      init();
    } else {
      scriptEl = document.createElement("script");
      scriptEl.src = CALENDLY_WIDGET_SCRIPT_SRC;
      scriptEl.async = true;
      didAddScript = true;
      scriptEl.addEventListener("load", init);
      document.body.appendChild(scriptEl);
    }

    return () => {
      // Clean up widget DOM regardless of how we initialized it.
      if (containerRef.current) containerRef.current.innerHTML = "";

      // Remove only the script we added, so we don't break other widgets.
      if (didAddScript && scriptEl) {
        try {
          scriptEl.remove();
        } catch {
          // Ignore cleanup failures.
        }
      }
    };
  }, [dataUrl]);

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget min-h-[700px] min-w-[320px] w-full"
      data-url={dataUrl}
      style={{ borderRadius: "0.75rem" }}
    />
  );
}

