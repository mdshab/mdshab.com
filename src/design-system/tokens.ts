/**
 * mdshab design tokens — single source of truth for the visual language.
 *
 * Concept: Modern Editorial × Swiss Clarity × High-End Technology Product.
 * Light-first: warm paper background, graphite ink, one deep cobalt
 * accent. The library sections (humanity, ideas, mind, writing) keep
 * tonal wayfinding accents, tuned for AA contrast on light surfaces.
 */

export const accents = {
  /** History / Humanity — burnished amber (darkened for light bg) */
  history: "#8f5e14",
  /** Technology / Journey / Work — the brand cobalt */
  tech: "#1c4fb8",
  /** Ideas — ink violet */
  ideas: "#67509c",
  /** Mind — deep sage */
  mind: "#4e6b52",
  /** Lab / Work — steel */
  lab: "#3e5a78",
  /** Writing — editorial rust */
  writing: "#9a4a26",
} as const;

export type AccentKey = keyof typeof accents;

/** Surfaces — warm paper ramp (light-first) */
export const surfaces = {
  base: "#faf9f6",
  raised: "#ffffff",
  inset: "#f1efe9",
  border: "rgba(26, 29, 35, 0.10)",
  borderStrong: "rgba(26, 29, 35, 0.20)",
} as const;

/** Ink — graphite foreground ramp */
export const ink = {
  primary: "#1a1d23",
  secondary: "#565c66",
  muted: "#6f747d",
  inverse: "#faf9f6",
} as const;

/** Brand ramp for the Fluent theme (10 = darkest → 160 = lightest). Deep cobalt. */
export const brandRamp = {
  10: "#0a1030",
  20: "#111a45",
  30: "#15255c",
  40: "#173073",
  50: "#183a8a",
  60: "#1a44a1",
  70: "#1c4fb8",
  80: "#1e58cc",
  90: "#3b70d8",
  100: "#5c87e0",
  110: "#7d9de7",
  120: "#9db4ee",
  130: "#bccaf4",
  140: "#d8e0f9",
  150: "#eaf0fc",
  160: "#f7f9fe",
} as const;

/** Accent rgb triplets for rgba() usage in CSS */
export const accentRgb: Record<AccentKey, string> = {
  history: "143, 94, 20",
  tech: "28, 79, 184",
  ideas: "103, 80, 156",
  mind: "78, 107, 82",
  lab: "62, 90, 120",
  writing: "154, 74, 38",
};

/** Section accent mapping used by navigation, section markers, and cards */
export const sectionAccents: Record<string, AccentKey> = {
  humanity: "history",
  journey: "tech",
  ideas: "ideas",
  mind: "mind",
  lab: "tech",
  work: "tech",
  thinking: "tech",
  writing: "writing",
};
