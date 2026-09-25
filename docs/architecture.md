# Architecture

mdshab.com is a statically prerendered Next.js App Router application.
Content lives in typed TypeScript modules; pages read from those modules at
build time and produce static HTML. There is no database, no API layer and
no client-side data fetching — the whole site ships as pages plus a small
amount of hydration for interactive islands.

```
src/
├── app/                    # Routes (App Router)
│   ├── layout.tsx          # Metadata, fonts, FluentProvider, skip link
│   ├── page.tsx            # Homepage (four narrative acts)
│   ├── globals.css         # Design tokens + all custom styling
│   ├── sitemap.ts          # 179-URL sitemap from content modules
│   ├── robots.ts
│   ├── not-found.tsx
│   ├── humanity/           # Timeline + [event] detail pages
│   ├── journey/            # Career chapters
│   ├── ideas/              # [thinker] + questions/[question]
│   ├── mind/               # Breathing + reflections
│   ├── lab/                # Case studies + [project]
│   ├── writing/            # Article list + [article] (MDX bodies)
│   ├── about/  now/
├── components/
│   ├── command-palette/    # ⌘K global search (client component)
│   ├── humanity/           # SpatialTimeline, EventCard, TimelineList
│   ├── mind/               # BreathingExercise (motion, reduced-motion aware)
│   ├── navigation/         # SiteHeader, SiteFooter
│   └── providers/          # FluentProvider wrapper ("use client")
├── content/                # The content graph (typed data, no CMS)
│   ├── history/            # 115 events in 4 era files + threads + index
│   ├── ideas/              # 34 thinkers, 10 questions
│   ├── journey/            # 5 chapters, 11 entries
│   ├── lab/                # 4 projects (8-section case studies)
│   ├── mind/               # 6 reflections + the Now list
│   └── writing/            # 6 article metas + MDX bodies
├── design-system/
│   ├── theme.ts            # mdshab theme on a Fluent dark theme
│   └── fonts.ts            # next/font/local, siteFonts export
├── lib/
│   ├── format.ts           # formatYear (BCE), formatEventRange, formatDate
│   └── search-index.ts     # ⌘K index built from the content graph
└── types/
    └── content.ts          # Every content interface; the graph schema
```

## Rendering strategy

- Everything is static. `generateStaticParams` prerenders all 115 event
  pages, 34 thinker pages, 10 question pages, 4 lab projects and 6
  articles. The production build emits 183 pages.
- `/humanity` accepts `?thread=&region=&category=` search params. The page
  reads them via `await searchParams` (Next 16 async request API) and
  renders filtered static HTML per request; filter "navigation" is plain
  `<Link>` hrefs, so filters work without JavaScript.
- MDX articles are statically imported in
  `src/app/writing/[article]/page.tsx` and mapped by slug. `next.config.ts`
  sets `providerImportSource: null` so the MDX output has no
  `@mdx-js/react` dependency — articles are React Server Components.

## Theming

`FluentProvider` wraps the app through a `"use client"` boundary
(`src/components/providers/fluent-provider.tsx`). The mdshab theme spreads
overrides over `createDarkTheme(webBrandRamp)`:

- surfaces `#151412` / raised `#1c1a17`, ink `#ece5d6`
- section accents: history `#d4a24e`, tech `#6fb3c4`, ideas `#a493c7`,
  mind `#93ac99`

Most visible styling does not come from Fluent components — Fluent supplies
the accessible interaction primitives and token system, while the archive ×
terminal × editorial look is custom CSS in `globals.css` driven by CSS
custom properties.

Fonts are self-hosted with `next/font/local` (variable woff2 files under
`public/fonts/`), exposed as CSS variables `--font-sans`, `--font-serif`,
`--font-mono`.

## Interactive islands

Only three components ship JavaScript:

1. **CommandPalette** — global ⌘K/Ctrl+K. The search index
   (`src/lib/search-index.ts`) is built from the same content modules the
   pages use: 9 static pages + every event, thread, thinker, question,
   journey entry, lab project and article. implements the WAI-ARIA
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
  scrollable band, positioned with `d3-scale`
  (`scaleLinear` domain `[-1200, 2030]` → `[0, 100]%`). Cards alternate
  above/below a center rail with a `--stagger` custom property for
  collision avoidance. Inside an `overflow-x: auto` group with
  `tabIndex=0` and an explanatory `aria-label`, it is hidden below
  64rem and from users who don't want it.
- **Chronological list** (`.timeline-list-only`): a semantic `<ol>` of
  event cards, the only view on mobile (`< 64rem`) — and the one screen
  readers and text browsers get on desktop (`display: none` is visual
  only; the list is also the accessible fallback because the spatial band
  is `aria-hidden`-free but wrapped in a labeled group pointing to the
  list).

Filters keep both views in sync because both derive from the same
filtered array.

## Build pipeline

- `npm run lint` — eslint (flat config), zero-warning policy
- `npx tsc --noEmit` — strict mode
- `npm run build` — Turbopack production build; must pass to ship

The MDX loader spawns a worker that binds a local port; in sandboxed
environments where that is denied, run `npm run build` outside the
sandbox (a normal terminal is fine).
