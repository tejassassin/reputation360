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
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

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
  }, [rootMargin, visible]);

  const style = minHeight ? { minHeight } : undefined;

  return (
    <div ref={ref} className={className} style={style}>
      {visible ? children : fallback}
    </div>
  );
}
