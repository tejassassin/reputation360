import { useEffect, useState } from "react";

/** Tighter below-fold prefetch on mobile so Speed Index and unused JS improve. */
export function useMobileLazyRootMargin() {
  const [rootMargin, setRootMargin] = useState("200px 0px");

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const sync = () => setRootMargin(mq.matches ? "40px 0px" : "280px 0px");
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return rootMargin;
}
