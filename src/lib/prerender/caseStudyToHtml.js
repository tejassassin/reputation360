import { bodyParagraphsToHtml, escapeHtml, linkListToHtml } from "./html.js";

/**
 * @param {import("../../data/caseStudies/types.js").CaseStudy} study
 */
export function caseStudyToHtml(study) {
  const sections = (study.sections ?? [])
    .map(
      (section) =>
        `<section><h2>${escapeHtml(section.heading)}</h2>${bodyParagraphsToHtml(section.body)}</section>`,
    )
    .join("\n");

  return `<header>
  <h1>${escapeHtml(study.listTitle)}</h1>
  <p>${escapeHtml(study.industry)}</p>
  <p>${escapeHtml(study.profile)}</p>
  <p>${escapeHtml(study.challengeType)}</p>
  <p>${escapeHtml(study.duration)}</p>
  <p>${escapeHtml(study.summary)}</p>
</header>
${sections}`;
}
