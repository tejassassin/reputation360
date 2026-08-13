/** @type {Record<string, string>} */
const MONTH_TO_NUM = {
  january: "01",
  february: "02",
  march: "03",
  april: "04",
  may: "05",
  june: "06",
  july: "07",
  august: "08",
  september: "09",
  october: "10",
  november: "11",
  december: "12",
};

/**
 * @param {string | undefined | null} dateStr e.g. "May 23, 2026" or "August 3, 2026"
 * @returns {string | undefined} ISO date YYYY-MM-DD
 */
export function displayDateToIso(dateStr) {
  if (!dateStr || typeof dateStr !== "string") return undefined;
  const match = dateStr.trim().match(/^([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})$/);
  if (!match) return undefined;
  const month = MONTH_TO_NUM[match[1].toLowerCase()];
  if (!month) return undefined;
  const day = String(match[2]).padStart(2, "0");
  return `${match[3]}-${month}-${day}`;
}

/**
 * @param {string | undefined} isoDate YYYY-MM-DD
 * @returns {string | undefined} RFC 822 date for RSS
 */
export function isoDateToRfc822(isoDate) {
  if (!isoDate) return undefined;
  const date = new Date(`${isoDate}T12:00:00.000Z`);
  if (Number.isNaN(date.getTime())) return undefined;
  return date.toUTCString();
}
