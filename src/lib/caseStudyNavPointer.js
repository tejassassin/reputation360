/**
 * One significant character for compact “pointer” section nav (all case studies).
 * Strips leading "The" / "Our" and trailing parentheticals, then takes the first alnum.
 * @param {string} heading
 * @returns {string}
 */
export function caseStudySectionNavLetter(heading) {
  const t = String(heading)
    .replace(/^(The|Our|A|An)\s+/i, "")
    .replace(/\s*\([^)]*\)\s*$/g, "")
    .trim();
  const m = t.match(/[A-Za-z0-9]/u);
  return m ? m[0].toUpperCase() : "•";
}
