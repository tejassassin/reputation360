import { internalAnchorProps } from "../../lib/internalLinkProps.js";

const CONTENT_RAIL = "relative mx-auto w-full max-w-6xl px-5 md:px-8";

/**
 * @param {object} props
 * @param {string} props.id
 * @param {string} props.heading
 * @param {Array<{ text: string, href?: string }>} props.parts
 */
export function ServicePageRelatedOutcomesSection({ id, heading, parts }) {
  return (
    <section id={id} className="scroll-mt-36 bg-[#f4f6fb] pt-8 pb-10 md:pt-10 md:pb-12">
      <div className={CONTENT_RAIL}>
        <h2 className="max-w-4xl font-heading text-2xl font-extrabold leading-[1.12] tracking-tight text-[#1F3B64] md:text-[2.1rem]">
          {heading}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 [text-wrap:pretty] md:text-lg">
          {parts.map((part, index) =>
            part.href ? (
              <a
                key={`${part.href}-${index}`}
                href={part.href}
                {...internalAnchorProps(part.href)}
                className="font-semibold text-[#1F3B64] underline-offset-2 hover:underline"
              >
                {part.text}
              </a>
            ) : (
              <span key={`text-${index}`}>{part.text}</span>
            ),
          )}
        </p>
      </div>
    </section>
  );
}
