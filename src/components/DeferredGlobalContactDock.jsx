import { lazy, Suspense, useEffect, useState } from "react";

const GlobalContactDock = lazy(() => import("./GlobalContactDock.jsx"));

/**
 * Loads the floating dock (chatbot + email) after first paint / idle time
 * so it does not compete with LCP on the home hero.
 */
export default function DeferredGlobalContactDock() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const show = () => {
      if (!cancelled) setReady(true);
    };

    const idleTimeout =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(max-width: 767px)").matches
        ? 4200
        : 2800;

    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(show, { timeout: idleTimeout });
      return () => {
        cancelled = true;
        window.cancelIdleCallback(id);
      };
    }

    const t = window.setTimeout(show, idleTimeout > 3000 ? 2200 : 1600);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
    };
  }, []);

  if (!ready) return null;

  return (
    <Suspense fallback={null}>
      <GlobalContactDock />
    </Suspense>
  );
}
