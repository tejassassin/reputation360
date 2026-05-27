/** @param {string} text */
export function p(text) {
  return { t: "p", text };
}

/** @param {string} text */
export function pStrong(text) {
  return { t: "p-strong", text };
}

/** @param {(string | { s?: string, r?: string })[]} items */
export function ul(items) {
  return { t: "ul", items };
}

/** @param {string} s @param {string} r */
export function li(s, r) {
  return { s, r };
}
