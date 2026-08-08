import { Suspense, lazy, useEffect, useRef, useState } from "react";

/**
 * Renders children only when the placeholder scrolls into view.
 * Uses IntersectionObserver with a generous rootMargin so the
 * component starts loading before it's visible.
 */
export default function LazySection({ children, minHeight = "12rem", className }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (!visible) {
    return <div ref={ref} className={className} style={{ minHeight }} aria-hidden />;
  }

  return <Suspense fallback={<div style={{ minHeight }} />}>{children}</Suspense>;
}
