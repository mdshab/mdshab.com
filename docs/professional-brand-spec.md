# Professional brand specification

This document records the durable strategic decisions behind the 2026
repositioning of mdshab.com, so future maintainers (human or agent) can
extend the site without re-deriving them.

## Audience

- **Primary:** recruiters, hiring managers, founders, CTOs/CPOs, VPs of
  Product, engineering leaders — people deciding whether to open a
  conversation with Mehdi about a role, a project, or an advisory
  engagement.
- **Secondary:** fellow practitioners arriving from the writing and the
  personal library (history, ideas, mind).
- **Acquisition path assumed:** LinkedIn → mdshab.com → 10–30 second
  scan → decision to explore or start a conversation.

The site must answer, fast, what LinkedIn cannot: how Mehdi thinks, how
technically deep he is, what he has actually built and shaped, and why
his Product × Technology combination is unusual.

## Positioning

> **Product-minded, technically deep.**
> I turn complex infrastructure into products people can use.

- Direction: **technical product management** for cloud & AI
  infrastructure.
- Differentiator: the career climbed the *whole stack* — analog telephony
  → networking → datacenter/NOC → cloud → product. Product judgment with
  operational scar tissue.
- Voice: calm, senior, specific, evidence over adjectives. Never
  "visionary/rockstar/passionate". Never CV language ("responsible
  for…").

### The 10-second test

The first viewport must communicate: who (Mehdi Shabestari), what
category (technical PM, cloud & AI infrastructure), why valuable (20
years up the stack + scale of services), evidence hint (facts strip),
next action (Explore my work / Let's talk).

## Hierarchy

Professional conversion dominates; the personal library is preserved
one click deep, never deleted.

```
/                hero → impact → problems → work → thinking → depth →
                 journey → writing → beyond work → final CTA
/work            case studies (practice + built in public)
/thinking        principles + models (abstraction ladder, telecom→cloud map)
/journey         five chapters, artifact, ladder
/writing         essays (EN)
/about           professional narrative + beyond work + facts
/contact         intents + channels
/humanity /ideas /mind /now      personal library (EN)
/fa/…            Persian edition of the professional core
```

- Primary nav: Work, Thinking, Journey, Writing, About (5 links) +
  language switch + compact CTA.
- The old `/lab` routes 308-redirect into `/work` and
  `/thinking#anchor`.

## Content rules (non-negotiable)

1. **Factual integrity.** Only facts already published on this site (or
   explicitly approved) may appear. The closed set of career facts
   lives in `content/journey/journey.ts`. No invented metrics, team
   sizes, outcomes, quotes, or customers. Qualitative over fabricated
   quantitative.
2. **Confidentiality.** The cloud employer is named only as "a
   global-scale cloud provider". Case studies describe judgment, not
   internal architecture. The `/work` page says this out loud.
3. **No course/certificate signaling.** Knowledge is demonstrated via
   reasoning, case studies, and writing — not announced.
4. **No placeholders.** No "coming soon", no fake channels. Contact
   channels render only what exists in `content/site.ts`
   (GitHub is verified via the repository remote; LinkedIn/email
   appear the moment their URLs are added there).

## Case-study philosophy

4 strong studies beat 20 shallow ones. Structure: context → problem →
why it mattered → my role → constraints → discovery → product reasoning
→ trade-offs → outcome → what I learned (use the subset that serves the
story). The unit of credibility is *judgment*: what was hard, what
alternatives existed, what was traded away.

## Localization

- English at `/`, Persian at `/fa` (home, work + cases, thinking,
  journey, about, contact). Library routes stay EN-only and the fa
  footer labels them in Persian.
- Persian is authored content (intent-translated, natural professional
  Persian; Latin technical terms where that is normal usage), never
  machine-mirrored UI.
- Typography: Vazirmatn, self-hosted, scoped to `[dir="rtl"]` so EN
  pages never download it. Independent size/leading scale for Persian;
  no letter-spacing on Arabic script; `.mono-meta` swaps to Vazirmatn
  in RTL (JetBrains Mono has no Arabic-script glyphs).
- Structure: `app/fa/*` renders through the same server components as
  EN from `content/i18n/fa.ts`; `/fa/layout.tsx` wraps pages in
  `lang="fa" dir="rtl"`.
- hreflang + sitemap alternates for every bilingual route; per-page
  `alternates.languages` metadata.

## Visual system

Light-first, modern editorial × Swiss clarity. See
[design-system.md](design-system.md) for tokens.

## Accessibility & performance bar

- WCAG 2.2 AA intent: visible focus, keyboard paths, contrast ≥ 4.5 for
  body text (muted ink was darkened specifically for this), logical DOM
  order, reduced-motion respected.
- Static generation only; JS limited to the command palette, breathing
  exercise, and Fluent provider. No trackers, no analytics, ever.

## Maintenance quick starts

- Add a case study → `content/work/work.ts` (+ fa twin in
  `content/i18n/fa.ts`), everything else derives.
- Add a principle → `content/thinking/thinking.ts` (+ fa).
- Add a contact channel → fill `linkedin`/`email` in `content/site.ts`;
  header, contact page, footer pick it up.
- Add an essay → registry + MDX under `content/writing/`.
