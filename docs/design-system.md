# Design system

The visual language of mdshab.com: **modern editorial × Swiss clarity ×
high-end technology product**. Light-first, warm paper, graphite ink,
one deep cobalt accent. Typography does the work; decoration stays out
of the way.

## Principles

1. **Typography carries the identity.** Space Grotesk (display/UI),
   Newsreader (editorial long-form), JetBrains Mono (metadata). No
   gradients, orbs, glassmorphism, or decoration-as-design.
2. **One accent.** Deep cobalt `#1c4fb8` for actions, links, focus, and
   section indexing. The personal library keeps tonal wayfinding
   accents (amber/violet/sage/rust) tuned for AA contrast on light
   surfaces — differentiation, not carnival.
3. **Paper, not dashboard.** Warm off-white surfaces, hairline borders,
   generous whitespace, restrained radii (6/10/14px), soft shadows only
   on interactive lift.
4. **Logical properties everywhere.** `inset-inline-*`,
   `margin-inline-*`, `border-inline-*` so the Persian edition mirrors
   without a second stylesheet.

## Tokens (`src/design-system/tokens.ts` + `:root` in globals.css)

| Token | Value | Use |
| --- | --- | --- |
| `--bg` | `#faf9f6` | page background (warm paper) |
| `--bg-raised` | `#ffffff` | cards, palette panel |
| `--bg-inset` | `#f1efe9` | code chips, insets |
| `--ink` | `#1a1d23` | primary text (16.0:1) |
| `--ink-secondary` | `#565c66` | body secondary (6.4:1) |
| `--ink-muted` | `#6f747d` | meta text (4.5:1 — AA) |
| `--accent` | `#1c4fb8` | brand cobalt (7.0:1 on paper) |
| `--accent-strong` | `#173073` | hover/pressed |
| `--on-accent` | `#f7f9fe` | text on cobalt |
| `--border` | `rgba(26,29,35,.10)` | hairlines |
| `--border-strong` | `rgba(26,29,35,.22)` | emphasized hairlines |
| `--radius-s/m/l` | `6/10/14px` | control / card / panel |
| `--gutter` | `clamp(1.25rem, 4vw, 3rem)` | page gutters |
| `--section-space` | `clamp(4rem, 9vw, 7.5rem)` | macro rhythm |

Library wayfinding accents (light-bg tuned):
history `#8f5e14` · tech `#1c4fb8` · ideas `#67509c` · mind `#4e6b52` ·
lab `#3e5a78` · writing `#9a4a26`.

## Type scale

Fluid, clamped: `--text-xs` .75rem → `--text-hero`
`clamp(2.6rem, 1.9rem+3.8vw, 4.9rem)`. Display headings: Space Grotesk
600, tracking −0.02em, `text-wrap: balance`. Body: 1rem/1.6 on 68ch
measure max. Editorial prose: Newsreader at `clamp(1.05–1.2rem)/1.75`.

### Persian (RTL) tuning

Vazirmatn scoped to `[dir="rtl"]`; separate hero/heading scale
(Persian runs optically smaller — hero clamps ~20% lower); body 1.03rem
/ 1.85; **letter-spacing 0 always** (tracking breaks joining);
`.mono-meta` becomes Vazirmatn 500 (JetBrains has no Arabic glyphs);
Latin runs inside Persian text (code, handles) get `dir="ltr"` spans.

## Motion

Hover/edge transitions at 0.15s; card lift `translateY(-2px)` +
`--shadow-soft`. No scroll hijacking, no parallax, no marquees.
`prefers-reduced-motion` collapses all animation globally.

## Focus

`:focus-visible` — 2px cobalt outline, 2px offset, 2px radius. Never
removed. Skip-link to `#main` on every page.

## Fluent UI usage

Fluent v9 supplies accessible interaction primitives under a custom
light theme (`design-system/theme.ts`, cobalt brand ramp). Provider
inherits the site font stack (`--font-family-base` override) so nothing
renders in Segoe UI. The site must not look like an out-of-the-box
Fluent app — custom CSS owns the identity.

## Iconography

Spare, single system: hand-drawn 24px / 1.7-stroke inline SVGs
(`components/icons.tsx`) for contact channels; Fluent icons for
functional UI (search). No decorative icon sprinkling.

## OG image

Generated at build by `app/opengraph-image.tsx` (next/og + satori) from
subset Space Grotesk TTFs in `assets/` (created with
`fonttools varLib.instancer` + `subset`). Warm paper background, name,
positioning line, facts strip. No photo dependency.
