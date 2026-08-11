import { Fragment } from "react";
import { anchorTabProps } from "@/lib/internalLinkProps.js";
import { DiySectionHeader } from "../diy/DiyGuideUi.jsx";

const BODY_P =
  "mb-6 font-body text-lg leading-relaxed text-steel";
const SUBHEAD =
  "mb-2 font-heading text-lg font-bold leading-snug text-navy sm:text-xl";

export function Pack20RichText({ text, parts }) {
  if (!parts?.length) {
    return text;
  }

  return parts.map((part, index) => {
    if (!part.href) {
      return <Fragment key={`${part.text}-${index}`}>{part.text}</Fragment>;
    }

    return (
      <a
        key={`${part.href}-${index}`}
        href={part.href}
        {...anchorTabProps(part.href)}
        className="font-semibold text-blue-600 underline decoration-blue-600 underline-offset-2 transition-colors hover:text-blue-800 hover:decoration-blue-800"
      >
        {part.text}
      </a>
    );
  });
}

function PlainParagraph({ text, parts, className = BODY_P }) {
  return (
    <p className={className}>
      <Pack20RichText text={text} parts={parts} />
    </p>
  );
}

/**
 * @param {import('../../../data/blogs/pack20/types.js').Pack20Block[]} blocks
 * @param {string} sectionId
 */
export function Pack20Blocks({ blocks, sectionId }) {
  return blocks.map((block, index) => {
    const key = `${sectionId}-${index}`;

    if (block.type === "p") {
      return <PlainParagraph key={key} text={block.text} parts={block.parts} />;
    }

    if (block.type === "lead") {
      return (
        <p key={key} className={BODY_P}>
          {block.label ? (
            <>
              <span className="font-semibold text-navy">{block.label}: </span>
              <Pack20RichText text={block.text} parts={block.parts} />
            </>
          ) : (
            <Pack20RichText text={block.text} parts={block.parts} />
          )}
        </p>
      );
    }

    if (block.type === "keyBox") {
      return (
        <div key={key} className="mb-6">
          {block.title ? (
            <h3 className={SUBHEAD}>
              <Pack20RichText text={block.title} parts={block.titleParts} />
            </h3>
          ) : null}
          <PlainParagraph
            text={block.text}
            parts={block.parts}
            className="font-body text-lg leading-relaxed text-steel"
          />
        </div>
      );
    }

    if (block.type === "steps") {
      return (
        <ol key={key} className="mb-8 list-none space-y-8 pl-0">
          {block.steps.map((step) => (
            <li key={step.n}>
              <h3 className={SUBHEAD}>
                <span className="text-steel">{String(step.n).padStart(2, "0")}. </span>
                <Pack20RichText text={step.title} parts={step.titleParts} />
              </h3>
              <p className="font-body text-lg leading-relaxed text-steel">
                <Pack20RichText text={step.body} parts={step.parts} />
              </p>
            </li>
          ))}
        </ol>
      );
    }

    if (block.type === "pills") {
      return (
        <div key={key} className="mb-8 space-y-8">
          {block.items.map((item) => (
            <div key={item.id}>
              <h3 className={SUBHEAD}>
                <Pack20RichText
                  text={item.title ?? item.label}
                  parts={item.titleParts}
                />
              </h3>
              <p className="font-body text-lg leading-relaxed text-steel">
                <Pack20RichText text={item.body} parts={item.parts} />
              </p>
            </div>
          ))}
        </div>
      );
    }

    if (block.type === "accordion") {
      return (
        <div key={key} className="mb-8 space-y-8">
          {block.items.map((item) => (
            <div key={item.id}>
              <h3 className={SUBHEAD}>
                <Pack20RichText text={item.title} parts={item.titleParts} />
              </h3>
              <p className="font-body text-lg leading-relaxed text-steel">
                <Pack20RichText text={item.body} parts={item.parts} />
              </p>
            </div>
          ))}
        </div>
      );
    }

    if (block.type === "compare") {
      return (
        <div key={key} className="mb-8 space-y-8">
          {block.items.map((item) => (
            <div key={item.id}>
              <h3 className={SUBHEAD}>{item.title}</h3>
              <p className="font-body text-lg leading-relaxed text-steel">
                <Pack20RichText text={item.body} parts={item.parts} />
              </p>
            </div>
          ))}
        </div>
      );
    }

    if (block.type === "doDont") {
      return (
        <div key={key} className="mb-8 space-y-8">
          {[block.do, block.dont].map((column) => (
            <div key={column.title}>
              <h3 className={SUBHEAD}>{column.title}</h3>
              <ul className="list-disc space-y-2 pl-6 font-body text-lg text-steel">
                {column.items.map((item) => (
                  <li key={typeof item === "string" ? item : item.text}>
                    {typeof item === "string" ? item : (
                      <Pack20RichText text={item.text} parts={item.parts} />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    }

    if (block.type === "cards") {
      return (
        <div key={key} className="mb-8 space-y-8">
          {block.items.map((item) => (
            <div key={item.title}>
              <h3 className={SUBHEAD}>{item.title}</h3>
              <p className="font-body text-lg leading-relaxed text-steel">
                <Pack20RichText text={item.body} parts={item.parts} />
              </p>
            </div>
          ))}
        </div>
      );
    }

    if (block.type === "bullets") {
      return (
        <ul key={key} className="mb-8 list-disc space-y-2 pl-6 font-body text-lg text-steel">
          {block.items.map((item) => (
            <li key={typeof item === "string" ? item : item.text}>
              {typeof item === "string" ? item : (
                <Pack20RichText text={item.text} parts={item.parts} />
              )}
            </li>
          ))}
        </ul>
      );
    }

    if (block.type === "stats") {
      return (
        <ul key={key} className="mb-8 list-disc space-y-2 pl-6 font-body text-lg text-steel">
          {block.items.map((item) => (
            <li key={item.label}>
              <span className="font-semibold text-navy">{item.value}</span>
              {" - "}
              {item.label}
            </li>
          ))}
        </ul>
      );
    }

    return null;
  });
}

export function Pack20FaqSection({ faqs }) {
  if (!faqs?.length) return null;
  return (
    <section className="mb-20 scroll-mt-36" id="faq">
      <h2 className="mb-8 font-heading text-3xl font-bold text-navy">
        Frequently Asked Questions About Online Reputation Management
      </h2>
      <div className="space-y-8">
        {faqs.map((f) => (
          <div key={f.id}>
            <h3 className="mb-3 font-heading text-xl font-bold text-navy">{f.q}</h3>
            <p className="font-body text-lg leading-relaxed text-steel">
              <Pack20RichText text={f.a} parts={f.aParts} />
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Pack20ContentSection({ section, ...blockProps }) {
  return (
    <section className="mb-20 scroll-mt-36" id={section.id}>
      {section.number ? (
        <DiySectionHeader number={section.number} title={section.title} />
      ) : (
        <h2 className="mb-8 font-heading text-3xl font-bold text-navy">{section.title}</h2>
      )}
      <Pack20Blocks blocks={section.blocks} sectionId={section.id} {...blockProps} />
    </section>
  );
}
