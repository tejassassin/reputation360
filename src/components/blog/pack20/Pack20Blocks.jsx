import { Fragment } from "react";
import {
  ArrowRight,
  Check,
  Facebook,
  Globe,
  Linkedin,
  MessageCircle,
  Newspaper,
  PenLine,
  UserRound,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DiyAccordion,
  DiyFaqAccordion,
  DiyKeyBox,
  DiyLeadHighlight,
  DiySectionHeader,
  StepPicker,
} from "../diy/DiyGuideUi.jsx";

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
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-blue-600 underline decoration-blue-600 underline-offset-2 transition-colors hover:text-blue-800 hover:decoration-blue-800"
      >
        {part.text}
      </a>
    );
  });
}

/** @type {Record<string, import('lucide-react').LucideIcon>} */
const PILL_ICONS = {
  "social-profiles": Linkedin,
  linkedin: Linkedin,
  press: Newspaper,
  "thought-leadership": PenLine,
  owned: Globe,
  x: MessageCircle,
  facebook: Facebook,
  instagram: UserRound,
  reddit: MessageCircle,
};

/**
 * @param {import('../../../data/blogs/pack20/types.js').Pack20PillItem[]} items
 * @param {string} pillKey
 * @param {Record<string, string>} pillState
 * @param {(key: string, value: string) => void} setPillState
 * @param {(item: import('../../../data/blogs/pack20/types.js').Pack20PillItem) => import('react').ReactNode} [renderBody]
 */
function ContentTypePicker({ items, pillKey, pillState, setPillState, renderBody }) {
  const activeId = pillState[pillKey] ?? items[0]?.id;
  const active = items.find((item) => item.id === activeId) ?? items[0];
  const ActiveIcon = PILL_ICONS[active?.id ?? ""] ?? UserRound;

  return (
    <div className="diy-content-picker my-8">
      <div className="diy-content-picker-grid" role="tablist" aria-label="Content types">
        {items.map((item, index) => {
          const selected = activeId === item.id;
          const Icon = PILL_ICONS[item.id] ?? UserRound;
          return (
            <button
              key={item.id}
              id={`${pillKey}-${item.id}-tab`}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setPillState(pillKey, item.id)}
              className={cn(
                "diy-content-picker-tile motion-reduce:transform-none",
                selected && "is-selected",
              )}
            >
              <span className="diy-content-picker-tile__num" aria-hidden>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="diy-content-picker-tile__icon" aria-hidden>
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <span className="diy-content-picker-tile__label">{item.label}</span>
            </button>
          );
        })}
      </div>
      <div
        key={activeId}
        role="tabpanel"
        className="diy-content-picker-panel"
        aria-labelledby={`${pillKey}-${activeId}-tab`}
      >
        <div className="diy-content-picker-panel__accent" aria-hidden>
          <ActiveIcon className="h-5 w-5" strokeWidth={2} />
        </div>
        <div className="min-w-0 flex-1">
          {active?.title ? (
            <h4 className="font-heading text-lg font-bold leading-snug text-navy sm:text-xl">
              <Pack20RichText text={active.title} parts={active.titleParts} />
            </h4>
          ) : null}
          <p className="mt-3 font-body text-base leading-relaxed text-steel">
            {renderBody && active ? renderBody(active) : active?.body}
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * @param {import('../../../data/blogs/pack20/types.js').Pack20DoDontColumn} column
 * @param {"do"|"dont"} variant
 */
function DoDontColumn({ column, variant }) {
  const isDo = variant === "do";
  const Icon = isDo ? Check : X;

  return (
    <div
      className={cn(
        "diy-do-dont-column",
        isDo ? "diy-do-dont-column--do" : "diy-do-dont-column--dont",
      )}
    >
      <div className="diy-do-dont-column__header">{column.title}</div>
      <ul className="diy-do-dont-column__list">
        {column.items.map((item) => (
          <li key={typeof item === "string" ? item : item.text} className="diy-do-dont-column__item">
            <span
              className={cn(
                "diy-do-dont-column__icon",
                isDo ? "diy-do-dont-column__icon--do" : "diy-do-dont-column__icon--dont",
              )}
              aria-hidden
            >
              <Icon className="h-4 w-4" strokeWidth={2.5} />
            </span>
            <span className="diy-do-dont-column__text">
              {typeof item === "string" ? item : <Pack20RichText text={item.text} parts={item.parts} />}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * @param {import('../../../data/blogs/pack20/types.js').Pack20CompareItem[]} items
 * @param {string} pickerKey
 * @param {Record<string, string>} pillState
 * @param {(key: string, value: string) => void} setPillState
 */
function CaseCompare({ items, pickerKey, pillState, setPillState }) {
  const hasFocus = Object.prototype.hasOwnProperty.call(pillState, pickerKey);
  const activeId = pillState[pickerKey] ?? items[0]?.id;
  const showPanel = (id) => activeId === id;

  const focusPanel = (id) => {
    setPillState(pickerKey, id);
  };

  return (
    <div className="diy-case-compare">
      <div className="diy-case-compare-tabs md:hidden" role="tablist" aria-label="Case study">
        {items.map((item) => {
          const selected = activeId === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => focusPanel(item.id)}
              className={cn(
                "ha-pill rounded-full px-4 py-2 font-body text-sm font-semibold transition-colors",
                selected ? "bg-navy text-white" : "bg-slate-100 text-navy hover:bg-slate-200",
              )}
            >
              {item.title}
            </button>
          );
        })}
      </div>
      <div className="diy-case-compare-grid">
        {items.map((item, index) => {
          const tone = item.tone ?? (item.id === "outcome" ? "after" : "before");
          const isBefore = tone === "before";
          const focused = hasFocus && activeId === item.id;
          const dimmed = hasFocus && activeId !== item.id;

          return (
            <Fragment key={item.id}>
              {index > 0 ? (
                <div className="diy-case-compare-arrow max-md:hidden" aria-hidden>
                  <ArrowRight className="h-6 w-6" strokeWidth={2} />
                </div>
              ) : null}
              <button
                type="button"
                role="tab"
                aria-selected={focused || (!hasFocus && index === 0)}
                onClick={() => focusPanel(item.id)}
                className={cn(
                  "diy-case-compare-panel motion-reduce:transform-none",
                  isBefore ? "diy-case-compare-panel--before" : "diy-case-compare-panel--after",
                  !showPanel(item.id) && "max-md:hidden",
                  focused && "is-focused",
                  dimmed && "is-dimmed max-md:hidden",
                )}
              >
                <div className="diy-case-compare-panel__header">{item.title}</div>
                <p className="diy-case-compare-panel__body">
                  <Pack20RichText text={item.body} parts={item.parts} />
                </p>
              </button>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

/**
 * @param {object} props
 * @param {import('../../../data/blogs/pack20/types.js').Pack20Block[]} props.blocks
 * @param {string} props.sectionId
 * @param {Record<string, number>} props.pickerState
 * @param {(key: string, value: number) => void} props.setPickerState
 * @param {Record<string, string>} props.pillState
 * @param {(key: string, value: string) => void} props.setPillState
 * @param {Record<string, boolean>} props.accordionState
 * @param {(key: string) => void} props.toggleAccordion
 */
export function Pack20Blocks({
  blocks,
  sectionId,
  pickerState,
  setPickerState,
  pillState,
  setPillState,
  accordionState,
  toggleAccordion,
}) {
  return blocks.map((block, index) => {
    const key = `${sectionId}-${index}`;

    if (block.type === "p") {
      return (
        <p key={key} className="mb-6 font-body text-lg leading-relaxed text-steel">
          <Pack20RichText text={block.text} parts={block.parts} />
        </p>
      );
    }

    if (block.type === "lead") {
      return (
        <DiyLeadHighlight key={key} variant="panel" label={block.label}>
          <p>
            <Pack20RichText text={block.text} parts={block.parts} />
          </p>
        </DiyLeadHighlight>
      );
    }

    if (block.type === "keyBox") {
      return (
        <DiyKeyBox key={key} variant={block.variant ?? "insight"} title={block.title}>
          <p>
            <Pack20RichText text={block.text} parts={block.parts} />
          </p>
        </DiyKeyBox>
      );
    }

    if (block.type === "steps") {
      const pickerKey = block.pickerKey ?? `${sectionId}-steps`;
      const active = pickerState[pickerKey] ?? block.steps[0]?.n ?? 1;
      return (
        <StepPicker
          key={key}
          steps={block.steps}
          activeStep={active}
          onSelectStep={(n) => setPickerState(pickerKey, n)}
          panelId={`${pickerKey}-panel`}
          renderTitle={(step) => <Pack20RichText text={step.title} parts={step.titleParts} />}
          renderBody={(step) => <Pack20RichText text={step.body} parts={step.parts} />}
        />
      );
    }

    if (block.type === "pills") {
      const pillKey = block.pickerKey ?? `${sectionId}-pills`;
      return (
        <ContentTypePicker
          key={key}
          items={block.items}
          pillKey={pillKey}
          pillState={pillState}
          setPillState={setPillState}
          renderBody={(item) => <Pack20RichText text={item.body} parts={item.parts} />}
        />
      );
    }

    if (block.type === "accordion") {
      return (
        <div key={key} className="my-6 space-y-0 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          {block.items.map((item) => (
            <DiyAccordion
              key={item.id}
              id={item.id}
              title={<Pack20RichText text={item.title} parts={item.titleParts} />}
              open={!!accordionState[item.id]}
              onToggle={toggleAccordion}
            >
              <p>
                <Pack20RichText text={item.body} parts={item.parts} />
              </p>
            </DiyAccordion>
          ))}
        </div>
      );
    }

    if (block.type === "compare") {
      const compareKey = block.pickerKey ?? `${sectionId}-compare`;
      return (
        <CaseCompare
          key={key}
          items={block.items}
          pickerKey={compareKey}
          pillState={pillState}
          setPillState={setPillState}
        />
      );
    }

    if (block.type === "doDont") {
      return (
        <div key={key} className="diy-do-dont" role="group" aria-label="Crisis response checklist">
          <DoDontColumn column={block.do} variant="do" />
          <DoDontColumn column={block.dont} variant="dont" />
        </div>
      );
    }

    if (block.type === "cards") {
      return (
        <ul key={key} className="mb-8 grid gap-4 sm:grid-cols-2">
          {block.items.map((item) => (
            <li
              key={item.title}
              className="ha-lift rounded-2xl border border-slate-200 bg-white p-5 shadow-sm motion-reduce:transform-none"
            >
              <h4 className="mb-2 font-heading text-base font-bold text-navy">{item.title}</h4>
              <p className="font-body text-sm leading-relaxed text-steel">{item.body}</p>
            </li>
          ))}
        </ul>
      );
    }

    if (block.type === "bullets") {
      return (
        <ul key={key} className="mb-8 list-disc space-y-2 pl-6 font-body text-lg text-steel">
          {block.items.map((item) => (
            <li key={typeof item === "string" ? item : item.text}>
              {typeof item === "string" ? item : <Pack20RichText text={item.text} parts={item.parts} />}
            </li>
          ))}
        </ul>
      );
    }

    if (block.type === "stats") {
      return (
        <div key={key} className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {block.items.map((item) => (
            <div
              key={item.label}
              className="ha-lift rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm motion-reduce:transform-none"
            >
              <div className="font-heading text-3xl font-black text-navy">{item.value}</div>
              <div className="mt-1 font-body text-sm text-steel">{item.label}</div>
            </div>
          ))}
        </div>
      );
    }

    return null;
  });
}

export function Pack20FaqSection({ faqs, accordionState, toggleAccordion }) {
  if (!faqs?.length) return null;
  return (
    <section className="mb-20 scroll-mt-36" id="faq">
      <h2 className="mb-8 font-heading text-3xl font-bold text-navy">FAQ</h2>
      <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
        {faqs.map((f) => (
          <DiyFaqAccordion
            key={f.id}
            id={f.id}
            title={f.q}
            open={!!accordionState[f.id]}
            onToggle={toggleAccordion}
          >
            <p>
              <Pack20RichText text={f.a} parts={f.aParts} />
            </p>
          </DiyFaqAccordion>
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
