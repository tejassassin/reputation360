import { bodyParagraphsToHtml, escapeHtml } from "./html.js";
import { moreCaseStudiesSectionHtml } from "./moreCaseStudiesToHtml.js";

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

  const pagePath = `/case-studies/${study.slug}`;
  const moreCaseStudies = moreCaseStudiesSectionHtml(pagePath);

  return `<header>
  <h1>${escapeHtml(study.listTitle)}</h1>
  <p>${escapeHtml(study.industry)}</p>
  <p>${escapeHtml(study.profile)}</p>
  <p>${escapeHtml(study.challengeType)}</p>
  <p>${escapeHtml(study.duration)}</p>
  <p>${escapeHtml(study.summary)}</p>
</header>
${sections}
${moreCaseStudies}`;
}
