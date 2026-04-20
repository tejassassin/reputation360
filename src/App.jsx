import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App({ children }) {
  // Full document loads on internal route changes so `main.jsx` always runs with the correct path.
  // This avoids any stale React tree when moving between pages (dev HMR / client nav edge cases).
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

  return (
    <div className="min-h-screen flex flex-col bg-offwhite">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default App;
