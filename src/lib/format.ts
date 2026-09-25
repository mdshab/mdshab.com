import type { HistoryEvent } from "@/types/content";

/**
 * Format a year for display: negative years are BCE.
 * Examples: -1200 → "1200 BCE", 868 → "868 CE", 2007 → "2007"
 */
export function formatYear(year: number, options?: { ce?: boolean }): string {
  if (year < 0) {
    return `${Math.abs(year)} BCE`;
  }
  // For very old CE years, disambiguate; modern years stand alone.
  return options?.ce && year < 1000 ? `${year} CE` : String(year);
}

/** Format an event's date range, e.g. "1324" or "1200 – 550 BCE" or "c. 1905 – 1915" */
export function formatEventRange(event: HistoryEvent): string {
  const prefix = event.approximate ? "c. " : "";
  if (event.endYear !== undefined) {
    const start = formatYear(event.startYear, { ce: true });
    const end = formatYear(event.endYear, { ce: true });
    return `${prefix}${start} – ${end}`;
  }
  return `${prefix}${formatYear(event.startYear, { ce: true })}`;
}

/** Long-form date for articles: "2026-09-01" → "September 1, 2026" */
export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

/** Group key for timeline eras. */
export function eraOf(year: number): string {
  if (year < -800) return "1000–800 BCE";
  if (year < -500) return "800–500 BCE";
  if (year < -200) return "500–200 BCE";
  if (year < 0) return "200 BCE – 1 CE";
  if (year < 500) return "1–500 CE";
  if (year < 1000) return "500–1000";
  if (year < 1500) return "1000–1500";
  if (year < 1700) return "1500–1700";
  if (year < 1900) return "1700–1900";
  return "1900–present";
}
