import { lazy, Suspense, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import DeferredGlobalContactDock from "./components/DeferredGlobalContactDock.jsx";
import { LazyWhenVisible } from "./components/LazyWhenVisible.jsx";

const Footer = lazy(() => import("./components/Footer"));

function App({ children }) {
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented) return;
      if (typeof e.button === "number" && e.button !== 0) return;
      const el = e.target;
      if (!(el instanceof Element)) return;
      const a = el.closest("a[href]");
      if (!a || !(a instanceof HTMLAnchorElement)) return;
      const rawHref = a.getAttribute("href")?.trim() ?? "";
      if (
        rawHref.startsWith("mailto:") ||
        rawHref.startsWith("tel:") ||
        rawHref.startsWith("sms:")
      ) {
        return;
      }
      if (a.target === "_blank" || a.hasAttribute("download")) return;
      let url;
      try {
        url = new URL(a.href);
      } catch {
        return;
      }
      if (url.protocol !== "http:" && url.protocol !== "https:") return;
      if (url.origin !== window.location.origin) return;
      if (
        url.pathname === window.location.pathname &&
        url.search === window.location.search
      ) {
        return;
      }
      const hrefAttr = a.getAttribute("href");
      if (hrefAttr?.startsWith("#")) return;
      e.preventDefault();
      window.location.assign(url.href);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return (
    <>
      <div className="relative flex min-h-screen min-h-[100dvh] flex-col overflow-x-clip bg-offwhite">
        <Header />
        {children}
        <LazyWhenVisible minHeight="12rem" fallback={<div className="min-h-[12rem] bg-charcoal" aria-hidden />}>
          <Suspense fallback={<div className="min-h-[12rem] bg-charcoal" aria-hidden />}>
            <Footer />
          </Suspense>
        </LazyWhenVisible>
      </div>
      <DeferredGlobalContactDock />
    </>
  );
}

export default App;
