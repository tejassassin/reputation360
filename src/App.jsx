import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalContactDock from "./components/GlobalContactDock.jsx";
import { SUPPRESS_NEGATIVE_GUIDE_PATH } from "./data/blogs/suppressNegativeContentGuide.js";

function normalizePath(pathname) {
  return pathname.replace(/\/+$/, "") || "/";
}

function App({ children }) {
  const hideSiteChrome =
    typeof window !== "undefined" &&
    normalizePath(window.location.pathname) === SUPPRESS_NEGATIVE_GUIDE_PATH;
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0) return;
      const el = e.target;
      if (!(el instanceof Element)) return;
      const a = el.closest("a[href]");
      if (!a || !(a instanceof HTMLAnchorElement)) return;
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

  if (hideSiteChrome) {
    return <>{children}</>;
  }

  return (
    <div className="relative flex min-h-screen min-h-[100dvh] flex-col overflow-x-clip bg-offwhite">
      <Header />
      {children}
      <Footer />
      <GlobalContactDock />
    </div>
  );
}

export default App;
