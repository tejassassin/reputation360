import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CrawlableSiteNav } from "./components/CrawlableSiteNav.jsx";
import DeferredGlobalContactDock from "./components/DeferredGlobalContactDock.jsx";
import { applyNewTabToAnchors } from "./lib/internalLinkProps.js";

function App({ children }) {
  useEffect(() => {
    let frame = 0;
    let observer = null;
    let cancelled = false;

    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => applyNewTabToAnchors());
    };

    const start = () => {
      if (cancelled) return;
      schedule();
      observer = new MutationObserver(schedule);
      observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
      });
    };

    if (typeof window.requestIdleCallback === "function") {
      const idleId = window.requestIdleCallback(start, { timeout: 2500 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback(idleId);
        cancelAnimationFrame(frame);
        observer?.disconnect();
      };
    }

    const timeoutId = window.setTimeout(start, 1200);
    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
      cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, []);

  return (
    <>
      <div className="relative flex min-h-screen min-h-[100dvh] flex-col overflow-x-clip bg-offwhite">
        <CrawlableSiteNav />
        <Header />
        {children}
        <Footer />
      </div>
      <DeferredGlobalContactDock />
    </>
  );
}

export default App;
