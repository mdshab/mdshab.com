import {
  createDarkTheme,
  type Theme,
  type BrandVariants,
} from "@fluentui/react-components";

/**
 * mdshab brand ramp — a desaturated teal, 16 steps (10 darkest → 160 lightest).
 * Chosen to feel like a terminal glow at night: cool but warm-adjacent,
 * deliberately NOT Microsoft blue and NOT the Fluent default.
 */
const brand: BrandVariants = {
  10: "#0e1a1d",
  20: "#12262b",
  30: "#153339",
  40: "#174147",
  50: "#194f55",
  60: "#1c5e63",
  70: "#1f6d71",
  80: "#227d7f", // brand primary
  90: "#3d8f8e",
  100: "#59a09d",
  110: "#75b1ab",
  120: "#8fc1b9",
  130: "#a8d1c7",
  140: "#c0e0d5",
  150: "#d7eee2",
  160: "#eef9f0",
};

const base = createDarkTheme(brand);

/**
 * Warm-charcoal overrides on top of the Fluent dark theme so Fluent
 * primitives (buttons, inputs, popovers) share the site's palette.
 * Site-specific tokens (accents, surfaces) live in globals.css.
 */
export const mdshabTheme: Theme = {
  ...base,
  colorNeutralBackground1: "#151412",
  colorNeutralBackground1Hover: "#1c1a17",
  colorNeutralBackground1Pressed: "#232019",
  colorNeutralBackground2: "#1c1a17",
  colorNeutralBackground3: "#232019",
  colorNeutralBackground4: "#2a2620",
  colorNeutralForeground1: "#ece5d6",
  colorNeutralForeground2: "#a89e8c",
  colorNeutralForeground3: "#7d7566",
  colorBrandForeground1: "#7abfd0",
  colorBrandForeground2: "#93cbd8",
  colorBrandForegroundLink: "#8ecbd8",
  colorCompoundBrandForeground1: "#7abfd0",
  colorCompoundBrandForeground1Hover: "#93cbd8",
  colorCompoundBrandForeground1Pressed: "#6aabb9",
  colorNeutralStroke1: "#3a362e",
  colorNeutralStroke2: "#2e2a24",
  colorNeutralStrokeAccessible: "#a89e8c",
  colorBrandStroke1: "#7abfd0",
  colorBrandStroke2: "#93cbd8",
  colorNeutralStrokeDisabled: "#4a453c",
  colorTransparentBackgroundHover: "rgba(122, 191, 208, 0.08)",
  colorTransparentBackgroundPressed: "rgba(122, 191, 208, 0.12)",
};
