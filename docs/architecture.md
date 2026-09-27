# Architecture

mdshab.com is a statically prerendered Next.js App Router application.
Content lives in typed TypeScript modules; pages read from those modules at
build time and produce static HTML. There is no database, no API layer and
no client-side data fetching — the whole site ships as pages plus a small
amount of hydration for interactive islands.

```
src/
├── app/                    # Routes (App Router)
│   ├── layout.tsx          # Metadata, fonts, FluentProvider, JSON-LD, skip link
│   ├── page.tsx            # Homepage (professional narrative, 10 sections)
│   ├── opengraph-image.tsx # Build-time generated OG image (satori)
│   ├── globals.css         # Design tokens + all custom styling
│   ├── sitemap.ts          # ~190-URL sitemap with hreflang alternates
│   ├── robots.ts
│   ├── not-found.tsx
│   ├── work/               # Case studies + [case] detail (was /lab)
│   ├── thinking/           # Principles + models
│   ├── contact/            # Conversion page
│   ├── humanity/           # Timeline + [event] detail pages (EN)
│   ├── journey/            # Career chapters
│   ├── ideas/              # [thinker] + questions/[question] (EN)
│   ├── mind/               # Breathing + reflections (EN)
│   ├── writing/            # Article list + [article] (MDX bodies)
│   ├── about/  now/
├── components/
│   ├── command-palette/    # ⌘K global search (client component, EN pages)
│   ├── home/               # HomeMain — shared EN/FA homepage sections
│   ├── humanity/           # SpatialTimeline, EventCard, TimelineList
│   ├── mind/               # BreathingExercise (motion, reduced-motion aware)
│   ├── navigation/         # SiteHeader, SiteFooter (locale-aware)
│   ├── icons.tsx           # Inline SVG channel icons
│   └── providers/          # FluentProvider wrapper ("use client")
├── content/                # The content graph (typed data, no CMS)
│   ├── site.ts             # Identity, contact channels, nav model
│   ├── home.ts             # Homepage copy (EN)
│   ├── contact.ts          # Contact page copy (EN)
│   ├── work/               # Case studies (EN)
│   ├── thinking/           # Principles + models (EN)
│   ├── history/            # 115 events in 4 era files + threads + index
│   ├── ideas/              # 34 thinkers, 10 questions
│   ├── journey/            # 5 chapters, 11 entries
│   ├── mind/               # 6 reflections + the Now list
│   └── writing/            # 6 article metas + MDX bodies
├── design-system/
│   ├── theme.ts            # mdshab light theme on a Fluent light theme
│   └── fonts.ts            # next/font/local
├── lib/
│   ├── format.ts           # formatYear (BCE), formatEventRange, formatDate
│   └── search-index.ts     # ⌘K index built from the content graph
└── types/
    └── content.ts          # Every content interface; the graph schema
```

## Rendering strategy

- Everything is static. `generateStaticParams` prerenders all 115 event
  pages, 34 thinker pages, 10 question pages, 4 case study pages and 6
  articles. The production build emits ~186 pages.
- `/humanity` accepts `?thread=&region=&category=` search params. The page
  reads them via `await searchParams` (Next 16 async request API) and
  renders filtered static HTML per request; filter "navigation" is plain
  `<Link>` hrefs, so filters work without JavaScript.
- MDX articles are statically imported in
  `src/app/writing/[article]/page.tsx` and mapped by slug. `next.config.ts`
  sets `providerImportSource: null` so the MDX output has no
  `@mdx-js/react` dependency — articles are React Server Components.
- `/lab/*` and retired `/fa/*` URLs 308-redirect to their English
  successors (`next.config.ts` redirects; the Persian edition was
  retired in 2026-09 by owner decision).


## Theming

`FluentProvider` wraps the app through a `"use client"` boundary
(`src/components/providers/fluent-provider.tsx`). The mdshab theme spreads
overrides over `createLightTheme(brandRamp)`:

- surfaces `#faf9f6` / raised `#ffffff`, ink `#1a1d23`
- brand ramp: deep cobalt, primary `#1e58cc`
- the provider inherits the site font stack (`--font-family-base`
  override) so Fluent primitives never fall back to Segoe UI

Most visible styling does not come from Fluent components — Fluent supplies
the accessible interaction primitives and token system, while the
editorial look is custom CSS in `globals.css` driven by CSS custom
properties. See [design-system.md](design-system.md).

Fonts are self-hosted with `next/font/local` (variable woff2 files
under `public/fonts/`), exposed as CSS variables `--font-sans`,
`--font-serif`, `--font-mono`.

## Interactive islands

Only three components ship JavaScript:

1. **CommandPalette** — global ⌘K/Ctrl+K. The search index
   (`src/lib/search-index.ts`) is built from the same content modules the
   pages use: static pages + every event, thread, thinker, question,
   journey entry, case study and article. Implements the WAI-ARIA
   combobox pattern (`role=combobox`, `aria-activedescendant`,
   `role=listbox`/`option`), Arrow/Enter/Escape keys, and navigates with
   `router.push`. An empty query returns the section pages as entry
   points.
2. **BreathingExercise** — phase machine on `setInterval`, circle
   animation via `motion/react`. `useReducedMotion()` swaps the animated
   circle for a still one and text-only phases. Session state resets
   cleanly; no persistence, no gamification.
3. **FluentProvider** — theme context only.

Everything else — filters, pagers, anchor TOCs, the mobile nav scroll —
is links and CSS.

## The timeline's dual rendering

`/humanity` renders the same dataset twice:

- **Spatial timeline** (`.timeline-spatial-only`): a horizontally
  scrollable band, positioned with `d3-scale` (`scaleLinear` domain
  `[-1200, 2030]` → `[0, 100]%`) via a `--spatial-x` translate custom
  property (logical-property safe). Cards alternate above/below a center
  rail with a `--stagger` custom property for collision avoidance.
  Inside an `overflow-x: auto` group with `tabIndex=0` and an
  explanatory `aria-label`, it is hidden below 64rem.
- **Chronological list** (`.timeline-list-only`): a semantic `<ol>` of
  event cards, the only view on mobile (`< 64rem`) — and the one screen
  readers and text browsers get on desktop.

Filters keep both views in sync because both derive from the same
filtered array.

## OG image generation

`app/opengraph-image.tsx` renders the share card at build time with
`next/og` (satori) using subset Space Grotesk TTFs from `assets/`
(static instances cut from the variable font with fonttools — satori
does not accept woff2/variable fonts). Twitter metadata falls back to
the same image.

## Build pipeline

- `npm run lint` — eslint (flat config), zero-warning policy
- `npx tsc --noEmit` — strict mode
- `npm run build` — Turbopack production build; must pass to ship

The MDX loader spawns a worker that binds a local port; in sandboxed
environments where that is denied, run `npm run build` outside the
sandbox (a normal terminal is fine).
