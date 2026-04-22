/**
 * Truncated preview from the “The Challenge” section for list cards
 * (does not alter the stored case study text).
 * @param {{ sections: { heading: string; body: string }[] }} study
 */
export function caseStudyListTeaser(study) {
  const ch = study.sections.find((s) => s.heading === "The Challenge");
  if (!ch) return "";
  const text = ch.body
    .replace(/\n+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (text.length <= 220) return text;
  const cut = text.slice(0, 217);
  const last = cut.lastIndexOf(" ");
  return (last > 0 ? cut.slice(0, last) : cut) + "…";
}
