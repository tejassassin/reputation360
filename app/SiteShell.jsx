"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import { BreadcrumbBar } from "@/components/BreadcrumbBar.jsx";
import Footer from "@/components/Footer.jsx";
import DeferredGlobalContactDock from "@/components/DeferredGlobalContactDock.jsx";
import { applyNewTabToAnchors } from "@/lib/internalLinkProps.js";

/**
 * Visible site chrome for Next.js SSR routes (no hidden crawl-only nav).
 * @param {{ children: import('react').ReactNode }} props
 */
export function SiteShell({ children }) {
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
        <Header />
        <BreadcrumbBar />
        {children}
        <Footer />
      </div>
      <DeferredGlobalContactDock />
    </>
  );
}
