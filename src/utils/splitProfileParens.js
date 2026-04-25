/**
 * Splits a profile string so the part from the first "(" onward can be shown
 * on its own line (title before, parenthetical on the next line).
 *
 * @param {string} s
 * @returns {{ first: string, rest: string | null }}
 */
export function splitProfileParens(s) {
  if (typeof s !== "string") return { first: "", rest: null };
  const i = s.indexOf("(");
  if (i <= 0) return { first: s, rest: null };
  return {
    first: s.slice(0, i).trimEnd(),
    rest: s.slice(i).trim() || null,
  };
}
