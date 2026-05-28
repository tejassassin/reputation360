import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import { BreadcrumbBar } from "./components/BreadcrumbBar.jsx";
import DeferredFooter from "./components/DeferredFooter.jsx";
import { CrawlableSiteNav } from "./components/CrawlableSiteNav.jsx";
import DeferredGlobalContactDock from "./components/DeferredGlobalContactDock.jsx";
import { applyNewTabToAnchors } from "./lib/internalLinkProps.js";

function App({ children }) {
  useEffect(() => {
    let frame = 0;
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => applyNewTabToAnchors());
    };

    schedule();

    const observer = new MutationObserver(schedule);
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="relative flex min-h-screen min-h-[100dvh] flex-col overflow-x-clip bg-offwhite">
        <CrawlableSiteNav />
        <Header />
        <BreadcrumbBar />
        {children}
        <DeferredFooter />
      </div>
      <DeferredGlobalContactDock />
    </>
  );
}

export default App;
