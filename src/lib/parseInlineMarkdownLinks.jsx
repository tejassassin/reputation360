import { internalAnchorProps } from "./internalLinkProps.js";

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

/**
 * Renders plain text with inline markdown links: [label](href)
 * @param {string} text
 * @param {string} [linkClassName]
 */
export function parseInlineMarkdownLinks(text, linkClassName = "font-semibold text-navy underline-offset-2 hover:underline") {
  const nodes = [];
  let last = 0;
  let match;

  while ((match = LINK_RE.exec(text)) !== null) {
    if (match.index > last) {
      nodes.push(text.slice(last, match.index));
    }
    const href = match[2];
    nodes.push(
      <a
        key={`${match.index}-${href}`}
        href={href}
        {...internalAnchorProps(href)}
        className={linkClassName}
      >
        {match[1]}
      </a>,
    );
    last = match.index + match[0].length;
  }

  if (last < text.length) {
    nodes.push(text.slice(last));
  }

  if (nodes.length === 0) {
    return text;
  }

  return nodes;
}
