/**
 * Shared backdrops for “Why clients…” and “Who we work with” — only Navy, Slate, Steel
 * in the main field; green stays in UI, not in large blurs (avoids teal / mint cast on blue).
 */
function BrandSectionBackdrop() {
  return (
    <>
      {/* Top-to-bottom: primary navy, deep band, then slate (no green in base paint) */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,_#1F3B64_0%,_#1a2f4d_42%,_#223d5c_72%,_#2E5B88_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_0%,rgba(46,91,136,0.35),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_20%_100%,rgba(31,59,100,0.55),transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(107,116,128,0.1)_1px,transparent_0)] bg-[length:38px_38px] opacity-[0.4]"
        aria-hidden
      />
      {/* No green blur — accent green lives on icons / borders only */}
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-[min(50vh,28rem)] w-[min(80vw,28rem)] rounded-full bg-[#2E5B88]/25 blur-3xl"
        aria-hidden
      />
    </>
  );
}

export default BrandSectionBackdrop;
