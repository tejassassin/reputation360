import { useEffect, useState } from "react";
import { normalizeCanonicalPath, R360_PATHCHANGE_EVENT } from "../lib/canonicalHrefFromPath.js";

function readPathname() {
  if (typeof window === "undefined") return "/";
  return normalizeCanonicalPath(window.location.pathname);
}

/** Tracks `window.location.pathname` across popstate and in-app path updates. */
export function useDocumentPathname() {
  const [pathname, setPathname] = useState(readPathname);

  useEffect(() => {
    const sync = () => setPathname(readPathname());
    sync();
    window.addEventListener("popstate", sync);
    window.addEventListener(R360_PATHCHANGE_EVENT, sync);
    return () => {
      window.removeEventListener("popstate", sync);
      window.removeEventListener(R360_PATHCHANGE_EVENT, sync);
    };
  }, []);

  return pathname;
}
