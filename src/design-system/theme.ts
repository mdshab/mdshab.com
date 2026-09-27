import {
  createLightTheme,
  type Theme,
  type BrandVariants,
} from "@fluentui/react-components";

/**
 * mdshab brand ramp — deep cobalt, 16 steps (10 darkest → 160 lightest).
 * Evokes cloud, precision and trust without landing on default-corporate
 * blue. Used by Fluent primitives under the custom light theme.
 */
const brand: BrandVariants = {
  10: "#0a1030",
  20: "#111a45",
  30: "#15255c",
  40: "#173073",
  50: "#183a8a",
  60: "#1a44a1",
  70: "#1c4fb8",
  80: "#1e58cc", // brand primary — deep cobalt
  90: "#3b70d8",
  100: "#5c87e0",
  110: "#7d9de7",
  120: "#9db4ee",
  130: "#bccaf4",
  140: "#d8e0f9",
  150: "#eaf0fc",
  160: "#f7f9fe",
};

const base = createLightTheme(brand);

/**
 * Warm-paper overrides on top of the Fluent light theme so Fluent
 * primitives (buttons, inputs, popovers) share the site's palette.
 * Site-specific tokens (accents, surfaces) live in globals.css.
 */
export const mdshabTheme: Theme = {
  ...base,
  colorNeutralBackground1: "#faf9f6",
  colorNeutralBackground1Hover: "#f1efe9",
  colorNeutralBackground1Pressed: "#e9e6de",
  colorNeutralBackground2: "#f4f2ec",
  colorNeutralBackground3: "#f1efe9",
  colorNeutralBackground4: "#e9e6de",
  colorNeutralForeground1: "#1a1d23",
  colorNeutralForeground2: "#565c66",
  colorNeutralForeground3: "#7c828c",
  colorBrandForeground1: "#1c4fb8",
  colorBrandForeground2: "#173073",
  colorBrandForegroundLink: "#1c4fb8",
  colorCompoundBrandForeground1: "#1e58cc",
  colorCompoundBrandForeground1Hover: "#1c4fb8",
  colorCompoundBrandForeground1Pressed: "#173073",
  colorNeutralStroke1: "#d8d4ca",
  colorNeutralStroke2: "#e4e1d8",
  colorNeutralStrokeAccessible: "#565c66",
  colorBrandStroke1: "#1e58cc",
  colorBrandStroke2: "#5c87e0",
  colorNeutralStrokeDisabled: "#c9c5ba",
  colorTransparentBackgroundHover: "rgba(30, 88, 204, 0.06)",
  colorTransparentBackgroundPressed: "rgba(30, 88, 204, 0.10)",
};
