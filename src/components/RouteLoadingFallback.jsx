import { useState, useEffect } from "react";
import logo from "../assets/Logo_360.png";

/**
 * A premium loading transition fallback.
 * Prevents screen flicker by delaying the loading UI by 250ms,
 * and shows a beautiful, branded loading pulse instead of a scary developer error.
 */
export function RouteLoadingFallback({ label = "Loading your experience" }) {
  const [shouldShow, setShouldShow] = useState(false);
  const [showTroubleshoot, setShowTroubleshoot] = useState(false);

  useEffect(() => {
    // Delay showing the loading UI to prevent flashing on fast page loads (UX best practice)
    const showTimer = setTimeout(() => {
      setShouldShow(true);
    }, 250);

    // Only show troubleshooting instructions after a prolonged delay (5 seconds)
    const troubleshootTimer = setTimeout(() => {
      setShowTroubleshoot(true);
    }, 5000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(troubleshootTimer);
    };
  }, []);

  if (!shouldShow) {
    // Keep it empty for the first 250ms to allow immediate mount on fast networks
    return <div className="min-h-screen bg-offwhite" />;
  }

  return (
    <div
      className="flex min-h-[75vh] flex-1 flex-col items-center justify-center bg-offwhite px-6 text-center"
      role="status"
      aria-live="polite"
    >
      <div className="relative flex items-center justify-center">
        {/* Outer glowing ambient ring */}
        <div className="absolute h-24 w-24 animate-ping rounded-full bg-navy/5 opacity-75 duration-1000" />
        
        {/* Inner rotating gradient border */}
        <div className="h-20 w-20 animate-spin rounded-full border-[3px] border-transparent border-t-green border-r-navy/40" />

        {/* Logo center piece with pulsing effect */}
        <div className="absolute flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 hover:scale-105">
          <img
            src={logo}
            alt="Reputation360 logo"
            className="h-10 w-10 animate-pulse object-contain pl-0.5"
          />
        </div>
      </div>

      {/* Elegant label typography */}
      <h2 className="mt-8 font-heading text-lg font-semibold tracking-wide text-navy md:text-xl">
        {label}
        <span className="inline-flex gap-0.5 ml-1">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-green [animation-delay:-0.3s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-navy [animation-delay:-0.15s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-green" />
        </span>
      </h2>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#5d6c80]">
        Securing your connection and preparing assets...
      </p>

      {/* Dev-only troubleshooting advice shown only after 5 seconds in development mode */}
      {showTroubleshoot && import.meta.env.DEV && (
        <div className="mt-10 animate-fade-in rounded-xl border border-amber-200/60 bg-amber-50/50 p-4 text-left max-w-md shadow-sm">
          <h4 className="text-sm font-semibold text-amber-800">Developer Notice</h4>
          <p className="mt-1 text-xs leading-relaxed text-amber-700">
            If this page is hung and does not load, try stopping your local dev server and running{" "}
            <code className="rounded bg-amber-100/80 px-1.5 py-0.5 font-mono text-[11px] font-semibold text-amber-900">
              npm run dev:fresh
            </code>
            , then hard-refresh your browser to clear cache.
          </p>
        </div>
      )}
    </div>
  );
}
