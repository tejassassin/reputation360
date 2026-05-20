import { lazy, Suspense, useEffect, useState } from "react";

const GlobalContactDock = lazy(() => import("./GlobalContactDock.jsx"));

/**
 * Loads the floating dock after idle time or first user interaction so it
 * does not inflate TBT during Lighthouse / first paint.
 */
export default function DeferredGlobalContactDock() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const show = () => {
      if (!cancelled) setReady(true);
    };

    const isMobile =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(max-width: 767px)").matches;
    const idleTimeout = isMobile ? 5000 : 6000;

    const interactionEvents = ["pointerdown", "keydown"];
    const onInteraction = () => show();
    interactionEvents.forEach((name) => {
      window.addEventListener(name, onInteraction, {
        once: true,
        passive: true,
      });
    });

    let idleId = 0;
    let timeoutId = 0;

    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(show, { timeout: idleTimeout });
    } else {
      timeoutId = window.setTimeout(show, idleTimeout);
    }

    return () => {
      cancelled = true;
      interactionEvents.forEach((name) => {
        window.removeEventListener(name, onInteraction);
      });
      if (idleId && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  if (!ready) return null;

  return (
    <Suspense fallback={null}>
      <GlobalContactDock />
    </Suspense>
  );
}
