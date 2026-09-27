import localFont from "next/font/local";

/**
 * Self-hosted webfonts (SIL OFL). Downloaded into /public/fonts so the site
 * has zero runtime dependency on Google Fonts (important where connectivity
 * to Google services is unreliable). Variable fonts.
 */

/** Display sans — headlines, navigation, product UI */
export const sans = localFont({
  src: "../../public/fonts/space-grotesk.woff2",
  variable: "--font-sans",
  display: "swap",
  weight: "300 700",
});

/** Editorial serif — history, philosophy, long-form reading */
export const serif = localFont({
  src: "../../public/fonts/newsreader.woff2",
  variable: "--font-serif",
  display: "swap",
  weight: "200 800",
  style: "normal",
});

/** Monospace — dates, coordinates, technical metadata, terminal */
export const mono = localFont({
  src: "../../public/fonts/jetbrains-mono.woff2",
  variable: "--font-mono",
  display: "swap",
  weight: "100 800",
});

/** Aggregate for the root layout's html className. */
export const siteFonts = { sans, serif, mono };
