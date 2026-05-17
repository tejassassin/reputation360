export function Prose({ children }) {
  return (
    <div className="font-body space-y-4 text-base leading-relaxed text-steel [text-wrap:pretty] md:text-lg">
      {children}
    </div>
  );
}

export function Section({ id, n, title, children }) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-slate-200/80 pt-10 first:border-t-0 first:pt-0">
      <h2 className="font-heading mb-5 text-xl font-bold text-navy md:text-2xl">
        {n}. {title}
      </h2>
      {children}
    </section>
  );
}

export function Subheading({ children }) {
  return (
    <h3 className="font-heading mt-6 text-base font-semibold text-navy md:text-lg">{children}</h3>
  );
}

export function BulletList({ items }) {
  return (
    <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-[#4CAF50]">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
