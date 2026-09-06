/**
 * Shared dark-section field: Primary Navy only (#1F3B64 / `navy`).
 * Green stays in UI, not in large blurs.
 */
function BrandSectionBackdrop() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-navy" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-[length:38px_38px] opacity-40"
        aria-hidden
      />
    </>
  );
}

export default BrandSectionBackdrop;
