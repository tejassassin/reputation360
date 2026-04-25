import { splitProfileParens } from "../utils/splitProfileParens.js";

/**
 * Renders `profile` with text before the first "(" on the first line and the
 * remainder (including the "(") on the following line, so long lines do not
 * run off as a single row (used on case study cards and detail).
 *
 * @param {object} props
 * @param {string} props.value
 * @param {string} [props.className] – wrapper span
 * @param {string} [props.line1ClassName]
 * @param {string} [props.line2ClassName] – default adds small top gap
 * @param {string} [props.title] – e.g. full value for native tooltip
 */
export function ProfileValueLines({
  value,
  className = "",
  line1ClassName = "leading-normal",
  line2ClassName = "mt-0.5",
  title,
}) {
  const { first, rest } = splitProfileParens(value);
  if (!rest) {
    return (
      <span className={className} title={title !== undefined ? title : value}>
        {value}
      </span>
    );
  }
  return (
    <span className={className} title={title !== undefined ? title : value}>
      <span className={["block", line1ClassName].filter(Boolean).join(" ")}>{first}</span>
      <span className={["block leading-snug", line2ClassName].filter(Boolean).join(" ")}>{rest}</span>
    </span>
  );
}
