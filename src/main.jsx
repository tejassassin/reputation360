import { Fragment, StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ErrorBoundary } from "./components/ErrorBoundary.jsx";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import { SITE_HTML_LANG } from "./constants/siteUrl.js";

document.documentElement.lang = SITE_HTML_LANG;

document.getElementById("r360-prerender")?.remove();

const NonHomeRoutes = lazy(() =>
  import("./app/nonHomeRoutes.jsx").then((mod) => ({
    default: function NonHomeRoutes({ path }) {
      return mod.pageForNonHomePath(path) ?? <HomePage />;
    },
  })),
);

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

const routeFallback = <div className="min-h-[40vh] flex-1 bg-offwhite" aria-hidden />;

const normalizedPath = normalizePath(window.location.pathname);
const isHome = normalizedPath === "/";

const page = isHome ? (
  <HomePage />
) : (
  <NonHomeRoutes path={normalizedPath} />
);

const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error("Missing #root - check index.html");
}

const Root = import.meta.env.DEV ? StrictMode : Fragment;

const app = (
  <Root>
    <ErrorBoundary>
      <App>
        {isHome ? page : <Suspense fallback={routeFallback}>{page}</Suspense>}
      </App>
    </ErrorBoundary>
  </Root>
);

createRoot(rootEl).render(app);
