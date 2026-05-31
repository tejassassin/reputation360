import { ORM_GLOSSARY_PAGE, ORM_GLOSSARY_SECTIONS } from "../../data/ormGlossaryData.js";
import { escapeHtml } from "./html.js";

export function ormGlossaryPageToHtml() {
  const leadHtml = ORM_GLOSSARY_PAGE.lead
    .split("\n\n")
    .map((para, i) => {
      const cls = i === 0 ? "hero-description" : "hero-description hero-description--cta";
      return `<p class="${cls}">${escapeHtml(para)}</p>`;
    })
    .join("\n");

  const sectionsHtml = ORM_GLOSSARY_SECTIONS.map((section) => {
    const itemsHtml = section.items.map((item) => {
      const answerProse = item.blocks
        .map((block) => {
          if (block.t === "example") {
            return `
              <div class="glossary-example">
                <strong>Example:</strong>
                <p>${escapeHtml(block.text)}</p>
              </div>`;
          }
          return `<p>${escapeHtml(block.text)}</p>`;
        })
        .join("\n");

      return `
        <div class="glossary-item">
          <h3>${escapeHtml(item.term)}</h3>
          ${answerProse}
        </div>`;
    }).join("\n");

    return `
      <section id="${section.id}" class="glossary-section">
        <h2>${escapeHtml(section.title)}</h2>
        <p class="section-description">${escapeHtml(section.description)}</p>
        <div class="glossary-section-items">
          ${itemsHtml}
        </div>
      </section>`;
  }).join("\n");

  return `
    <header class="glossary-hero">
      <span class="badge">${escapeHtml(ORM_GLOSSARY_PAGE.eyebrow)}</span>
      <h1>${escapeHtml(ORM_GLOSSARY_PAGE.title)}</h1>
      ${leadHtml}
    </header>

    <main>
      ${sectionsHtml}
    </main>
  `;
}
