import { lazy, Suspense, useEffect, useState } from "react";

const Footer = lazy(() => import("./Footer.jsx"));

/**
 * Defers the site footer until idle so it does not compete with hero LCP on mobile.
 */
export default function DeferredFooter() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const show = () => {
      if (!cancelled) setReady(true);
    };

    if (typeof window.requestIdleCallback === "function") {
      const idleId = window.requestIdleCallback(show, { timeout: 3500 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback(idleId);
      };
    }

    const timeoutId = window.setTimeout(show, 2000);
    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, []);

  if (!ready) {
    return <div className="min-h-[12rem] bg-charcoal" aria-hidden />;
  }

  return (
    <Suspense fallback={<div className="min-h-[12rem] bg-charcoal" aria-hidden />}>
      <Footer />
    </Suspense>
  );
}
