/** @param {string} value */
export function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** @param {string} value */
export function escapeHtmlAttr(value) {
  return escapeHtml(value);
}

/** Prevent inline `</script>` / `<!--` sequences from breaking the HTML parser. */
export function sanitizeDocumentInlineHtml(html) {
  return String(html)
    .replace(/<\/script/gi, "<\\/script")
    .replace(/<!--/g, "<\\!--");
}

/**
 * @param {import("../../data/blogs/pack20/types.js").Pack20RichTextPart[]} [parts]
 * @param {string} text
 */
export function richTextToHtml(text, parts) {
  if (!parts?.length) {
    return escapeHtml(text);
  }
  return parts
    .map((part) => {
      if (!part.href) {
        return escapeHtml(part.text);
      }
      const href = escapeHtmlAttr(part.href);
      const label = escapeHtml(part.text);
      if (part.external) {
        return `<a href="${href}" rel="noopener noreferrer">${label}</a>`;
      }
      return `<a href="${href}">${label}</a>`;
    })
    .join("");
}

/**
 * @param {string} body
 */
export function bodyParagraphsToHtml(body) {
  return String(body || "")
    .split(/\n{2,}/)
    .map((chunk) => chunk.trim())
    .filter(Boolean)
    .map((chunk) => {
      const lines = chunk.split("\n").map((line) => line.trim()).filter(Boolean);
      const bulletLines = lines.filter((line) => /^[•\-*]\s+/.test(line));
      if (bulletLines.length > 0 && bulletLines.length === lines.length) {
        const items = lines
          .map((line) => line.replace(/^[•\-*]\s+/, ""))
          .map((line) => `<li>${escapeHtml(line)}</li>`)
          .join("");
        return `<ul>${items}</ul>`;
      }
      return `<p>${escapeHtml(chunk.replace(/\n/g, " "))}</p>`;
    })
    .join("\n");
}

/**
 * @param {{ href: string; label: string }[]} links
 * @param {string} title
 */
export function linkListToHtml(title, links) {
  if (!links.length) return "";
  const items = links
    .map(
      (link) =>
        `<li><a href="${escapeHtmlAttr(link.href)}">${escapeHtml(link.label)}</a></li>`,
    )
    .join("\n");
  return `<nav aria-label="${escapeHtmlAttr(title)}"><h2>${escapeHtml(title)}</h2><ul>${items}</ul></nav>`;
}
