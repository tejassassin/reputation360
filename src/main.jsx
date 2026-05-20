import { Fragment, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ErrorBoundary } from "./components/ErrorBoundary.jsx";
import App from "./App.jsx";
import { pageForPath } from "./app/lazyPages.jsx";

if (import.meta.env.DEV) {
  console.info(
    "%c[R360 dev]%c Testimonials are inlined in %cHomePage.jsx%c (text only, no Unsplash). If you still see stock photos, you are not loading this build - in this repo run %cnpm run dev%c and use the URL Vite prints. You should see a %cgreen line: “Text client quotes (no image gallery)”.",
    "color:#4CAF50;font-weight:bold",
    "color:inherit;font-weight:normal",
    "color:#1F3B64;font-weight:600",
    "color:inherit;font-weight:normal",
    "font-family:monospace",
    "color:inherit",
    "color:#2e7d32;font-weight:600",
  );
}

function normalizePath(pathname) {
  return pathname.replace(/\/+$/, "") || "/";
}

function RouteFallback() {
  return <div className="min-h-[40vh] flex-1 bg-offwhite" aria-hidden />;
}

const normalizedPath = normalizePath(window.location.pathname);
const page = pageForPath(normalizedPath);

const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error("Missing #root - check index.html");
}

const bootShell = document.getElementById("r360-boot-shell");
const isHomeMobile =
  normalizedPath === "/" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(max-width: 767px)").matches &&
  bootShell;

let mountTarget = rootEl;
if (isHomeMobile) {
  const mount = document.createElement("div");
  mount.id = "r360-app-mount";
  mount.setAttribute("aria-hidden", "true");
  mount.style.visibility = "hidden";
  rootEl.appendChild(mount);
  mountTarget = mount;
}

const Root = import.meta.env.DEV ? StrictMode : Fragment;

const app = (
  <Root>
    <ErrorBoundary>
      <App>
        <Suspense fallback={<RouteFallback />}>{page}</Suspense>
      </App>
    </ErrorBoundary>
  </Root>
);

createRoot(mountTarget).render(app);
