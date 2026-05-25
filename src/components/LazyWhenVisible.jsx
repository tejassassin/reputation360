import { useEffect, useRef, useState } from "react";

/**
 * Renders children only after the placeholder enters (or nears) the viewport.
 * Use with React.lazy + Suspense for below-the-fold sections.
 */
export function LazyWhenVisible({
  children,
  fallback = null,
  rootMargin = "280px 0px",
  minHeight,
  className = "",
  /** When true, render children immediately (for SEO-critical link sections). */
  eager = false,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(
    () => eager || typeof IntersectionObserver === "undefined",
  );

  useEffect(() => {
    if (eager) return;
    const el = ref.current;
    if (!el || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.01 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [eager, rootMargin, visible]);

  const style = minHeight ? { minHeight } : undefined;

  return (
    <div ref={ref} className={className} style={style}>
      {visible ? children : fallback}
    </div>
  );
}
