import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CrawlableSiteNav } from "./components/CrawlableSiteNav.jsx";
import DeferredGlobalContactDock from "./components/DeferredGlobalContactDock.jsx";

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
