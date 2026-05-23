import { cn } from "@/lib/utils";
import {
  DiyAccordion,
  DiyFaqAccordion,
  DiyKeyBox,
  DiyLeadHighlight,
  DiySectionHeader,
  StepPicker,
} from "../diy/DiyGuideUi.jsx";

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
          {block.text}
        </p>
      );
    }

    if (block.type === "lead") {
      return (
        <DiyLeadHighlight key={key} variant="panel" label={block.label}>
          <p>{block.text}</p>
        </DiyLeadHighlight>
      );
    }

    if (block.type === "keyBox") {
      return (
        <DiyKeyBox key={key} variant={block.variant ?? "insight"} title={block.title}>
          <p>{block.text}</p>
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
        />
      );
    }

    if (block.type === "pills") {
      const pillKey = block.pickerKey ?? `${sectionId}-pills`;
      const activeId = pillState[pillKey] ?? block.items[0]?.id;
      const active = block.items.find((item) => item.id === activeId) ?? block.items[0];
      return (
        <div key={key} className="my-6">
          <div className="mb-4 flex flex-wrap gap-2">
            {block.items.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setPillState(pillKey, item.id)}
                className={cn(
                  "rounded-full border px-4 py-2 font-heading text-sm font-semibold transition-all",
                  activeId === item.id
                    ? "border-navy bg-navy text-white shadow-md"
                    : "border-slate-200 bg-white text-steel hover:border-navy/30",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            {active?.title ? (
              <h4 className="mb-3 font-heading text-lg font-bold text-navy">{active.title}</h4>
            ) : null}
            <p className="font-body text-base leading-relaxed text-steel">{active?.body}</p>
          </div>
        </div>
      );
    }

    if (block.type === "accordion") {
      return (
        <div key={key} className="my-6 space-y-0 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          {block.items.map((item) => (
            <DiyAccordion
              key={item.id}
              id={item.id}
              title={item.title}
              open={!!accordionState[item.id]}
              onToggle={toggleAccordion}
            >
              <p>{item.body}</p>
            </DiyAccordion>
          ))}
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
            <li key={item}>{item}</li>
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
            <p>{f.a}</p>
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
