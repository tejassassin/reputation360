import { escapeHtml } from "./html.js";
import {
  ormPageHero,
  ORM_GUIDE_NAV,
} from "../../data/services/onlineReputationManagement.js";
import { ORM_FAQS } from "../../data/services/onlineReputationManagementInteractive.js";

export function ormServicePageToHtml() {
  const sectionBodiesById = {
    "ranking-factors": `
        <h3>Relevance</h3>
        <h3>Authority</h3>
        <h3>Experience</h3>
        <h3>Timeliness</h3>`,
    process: `
        <h3>Phase 01: Audit and Launch</h3>
        <h3>Phase 02: Early Movement</h3>
        <h3>Phase 03: Significant Shift</h3>
        <h3>Phase 04: Full Transformation</h3>`,
  };

  const tocHtml = ORM_GUIDE_NAV.map(
    (item) =>
      `<li><a href="#${item.id}">${escapeHtml(item.label)}</a></li>`,
  ).join("\n");

  const sectionsHtml = ORM_GUIDE_NAV.map(
    (item) => `
      <section id="${item.id}" class="orm-section">
        <h2>${escapeHtml(item.label)}</h2>
        ${sectionBodiesById[item.id] ?? ""}
      </section>`,
  ).join("\n");

  const faqHtml = ORM_FAQS.length
    ? `<section id="faq" class="orm-faq">
        <h2>Frequently Asked Questions</h2>
        ${ORM_FAQS.map(
          (faq) => `<div class="faq-item">
            <h3>${escapeHtml(faq.q)}</h3>
            <p>${escapeHtml(faq.a)}</p>
          </div>`,
        ).join("\n")}
       </section>`
    : "";

  return `
    <header class="orm-service-hero">
      <h1>${escapeHtml(ormPageHero.title)} ${escapeHtml(ormPageHero.titleSubline)}</h1>
      <p class="hero-lead">${escapeHtml(ormPageHero.lead)}</p>
    </header>

    <nav aria-label="Page sections" class="orm-toc">
      <h2>On This Page</h2>
      <ol>
        ${tocHtml}
      </ol>
    </nav>

    <main>
      ${sectionsHtml}
      ${faqHtml}
    </main>
  `;
}
