/**
 * mdshab design tokens — single source of truth for the visual language.
 *
 * Concept: Archive × Engineering Terminal × Modern Editorial × Observatory
 * Dark-first (near-black warm charcoal), warm off-white ink, restrained
 * semantic accents. Light values are derived in globals.css where needed.
 */

export const accents = {
  /** History / Humanity — warm amber */
  history: "#d4a24e",
  /** Technology / Journey — cool electric tone, desaturated for calm */
  tech: "#6fb3c4",
  /** Ideas — restrained violet */
  ideas: "#a493c7",
  /** Mind — quiet sage */
  mind: "#93ac99",
  /** Lab — Workbench/infrastructure: steel */
  lab: "#8fa3b8",
  /** Writing — editorial red-brown */
  writing: "#c98a6b",
} as const;

export type AccentKey = keyof typeof accents;

/** Surfaces — warm charcoal ramp (dark-first) */
export const surfaces = {
  base: "#151412",
  raised: "#1c1a17",
  overlay: "#232019",
  border: "rgba(236, 229, 214, 0.10)",
  borderStrong: "rgba(236, 229, 214, 0.18)",
} as const;

/** Ink — warm off-white foreground ramp */
export const ink = {
  primary: "#ece5d6",
  secondary: "#a89e8c",
  muted: "#7d7566",
  inverse: "#1a1815",
} as const;

/** Brand ramp for the Fluent theme (10 = darkest → 160 = lightest). Cool technical tone. */
export const brandRamp = {
  10: "#0e1a1d",
  20: "#123037",
  30: "#164652",
  40: "#1a5c6c",
  50: "#1e7286",
  60: "#2388a0",
  70: "#2f9cb2",
  80: "#57aec1",
  90: "#7abfd0",
  100: "#93cbd8",
  110: "#abd6e0",
  120: "#c0e0e8",
  130: "#d3e9ee",
  140: "#e3f1f4",
  150: "#f0f7f9",
  160: "#f9fcfd",
} as const;

/** Accent rgb triplets for rgba() usage in CSS */
export const accentRgb: Record<AccentKey, string> = {
  history: "212, 162, 78",
  tech: "111, 179, 196",
  ideas: "164, 147, 199",
  mind: "147, 172, 153",
  lab: "143, 163, 184",
  writing: "201, 138, 107",
};

/** Section accent mapping used by navigation, section markers, and cards */
export const sectionAccents: Record<string, AccentKey> = {
  humanity: "history",
  journey: "tech",
  ideas: "ideas",
  mind: "mind",
  lab: "lab",
  writing: "writing",
};
