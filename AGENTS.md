# Mritunjay Website OS (Compressed)

## ⚙ SELF-IMPROVEMENT PROTOCOL
**Every session, this file improves itself.**
- **ADD rules** when: new pattern, bug class, repeated mistake ≥2x, new tech added.
- **REMOVE rules** when: obsolete, unused 10+ sessions, superseded.
- **PRUNE at 300 lines**: sort by `[ ]` marker, drop oldest. Merge similar. Compress.
- **TRACK**: `[v0]` original, `[v1]` learned, `[v2+]` refined. Never remove `[v0]`.
- **Session marker at EOF**: `<!-- sessions: 4, last: 2026-08-17 -->`

Public Next.js marketing website for Mritunjay — AI-powered healthcare intelligence. Editorial storytelling, premium design, scientific elegance.

## Non-Negotiable Principles [v0]
- Brand fidelity above all. Every pixel follows the `stitch/` design system. No deviation without reason.
- TypeScript `strict: true`. Zero `any`, zero `as`, zero `@ts-ignore`.
- Editorial storytelling > feature-selling. The website tells a story. Not a brochure.
- Performance is brand. Core Web Vitals (LCP < 2.5s, CLS < 0.1, INP < 200ms).
- WCAG 2.2 AA. Contrast 4.5:1. Keyboard nav. Screen reader ready.
- Every section intentionally designed. Nothing feels generated.
- **Skill-first**: search skills before any task. Load matching skills (`brandkit`, `design-taste-frontend`, `high-end-visual-design`, `gpt-taste`, `industrial-brutalist-ui`, `full-output-enforcement`, `redesign-existing-projects`).
- **Caveman ultra**: drop filler. Fragments OK. Code/docs: normal English.
- **Stitch design authority**: `stitch_stitch_design_system/stitch.md` is master design brief. `stitch_reference_driven_generator/prompt.md` is creative brief. Reference before any UI work.

## Stack [v2]
Next.js 15.1 (App Router, Server Components). React 19. Tailwind CSS 3.4. Framer Motion 11.18. TypeScript strict. Supabase (PostgreSQL + RLS) for waitlist persistence and API endpoints (`/api/waitlist`).

## Design Taste Rules & Aesthetic Discipline [v2]
- **Three Dials Configuration**: `DESIGN_VARIANCE: 4`, `MOTION_INTENSITY: 3`, `VISUAL_DENSITY: 6` (clinical trust, calm telemetry, high diagnostic rigor).
- **Double-Bezel (Doppelrand) Architecture**: Nested card containers with subtle outer rings, hairlines (`border border-data-node/30`), inner specular highlights, and concentric radii.
- **Zero Em-Dash Rule**: Absolute ban on em-dashes (`—`) across headlines, eyebrows, pills, body copy, and quotes. Use hyphens, colons, or periods.
- **Anti-AI Tell Prohibition**: No numbered section eyebrows (`OUTCOME 01`), no 3-dot macOS window traffic lights, no 3-column equal white-card rows, no robot icons (`smart_toy`), and no generic skeleton rectangles.
- **Hero Headline Rule**: Hero H1 fits within 2 lines on desktop (`max-w-5xl` or `max-w-6xl`). Maximum 4 text elements total in hero stack.
- **Monospace Clinical Telemetry**: All lab values, vitals, confidence scores, and tokens use monospace with tabular figures (`font-mono tabular-nums`).
- **Tactile Button Architecture**: Button-in-button pills with nested circular icon capsules and active haptic feedback (`active:scale-[0.98]`).

## TypeScript Rules [v0]
- No `any`, `as`, `@ts-ignore`, `!`
- Explicit return types on exports (`: ReactElement`). `interface` for public API, `type` for unions.
- `readonly` immutable props. `satisfies` for config. `const` assertions for literals.

## Component Rules [v0]
- One component per file. Props as exported interface.
- Server Components by default. `"use client"` only when interactivity needed.
- `next/image` always — width, height, priority for LCP.
- No inline styles. Tailwind utility classes or CSS modules.
- `useEffect` cleanup + deps array. `useCallback`/`useMemo` only when profiler proves need.

## Animation Rules [v1]
- Framer Motion for meaningful motion only. No decorative animation.
- Living Biological Cell engine: Procedural Canvas with harmonic Simplex noise, 65 BPM cardiac pulse, double-rim lipid refraction, synaptic sparks, and scroll-driven microscopic nucleus dive.
- Motion communicates: learning, memory, growth, understanding, connection.
- Respect `prefers-reduced-motion`. Use `useReducedMotion` or CSS `@media`.
- Scroll-triggered reveals with `framer-motion` `useInView` or IntersectionObserver.
- Animate strictly via `transform` and `opacity`. Never animate `top`, `left`, `width`, or `height`.

## Stitch Design Reference [v1]
The canonical design docs live in `stitch_reference_driven_generator/` and `stitch_stitch_design_system/`:
| Doc | Purpose |
|-----|---------|
| `prompt.md` | Creative brief, design philosophy, hero, motion, trust, conversion |
| `website.md` | Site architecture, navigation, page structure, storytelling flow |
| `design.md` | Visual design language, typography, color, spacing |
| `product.md` | Product positioning, value props, messaging |
| `motion.md` | Motion language, animation principles |
| `stitch.md` | Master design brief, design system principles |
| `critic.md` | Design criticism patterns, quality standards |
| `polisher.md` | Refinement checklist |
| `navigation.md` | Navigation patterns |
| `wireframe.md` | Layout wireframes |

## Naming
- Files: kebab-case. Components: PascalCase. Hooks: camelCase.
- Variables: full words, no abbreviations. Booleans: is/has/should. Arrays: plural.
- Functions: verb+noun. Constants: UPPER_SNAKE_CASE.

## Imports
Order: React/Next → framer-motion → components → lib → types. `import type` for types. No circular imports.

## Comments
- WHY not WHAT. JSDoc on exports. NO commented-out code.
- TODO: `TODO(@username): desc`. No unowned TODOs.

## Forbidden
`any`, `as`, `@ts-ignore`, `var`, `==`, `eval()`, `delete`, `for...in`, inline styles, `console.log` in prod, hardcoded text (use constants), commented-out code, floating promises, index as list key, em-dashes in copy.

## Required Practices
strict mode, ESLint, Prettier, pre-commit (lint+type-check), CI (lint+type-check+build), Lighthouse CI, human review.

## Skill Discovery [v1]
- Check skills FIRST. Search by domain: frontend, animation, design, SEO, performance, accessibility.
- `skill(name="brandkit")`, `skill(name="design-taste-frontend")`, `skill(name="high-end-visual-design")`, `skill(name="gpt-taste")`, `skill(name="industrial-brutalist-ui")`, `skill(name="full-output-enforcement")`, `skill(name="redesign-existing-projects")`.

## Performance Targets
- LCP < 2.5s. CLS < 0.1. INP < 200ms. TBT < 200ms.
- Bundle < 300KB per route. Images WebP/AVIF, lazy loaded except hero.
- Fonts: `next/font` with `display: swap`. Preload critical fonts.
- Lighthouse score ≥ 95 all categories.

## Accessibility
- WCAG 2.2 AA. Contrast 4.5:1. Keyboard navigation visible.
- All images: `alt` text. Interactive elements: `aria-label` where needed.
- Skip-to-content link. Focus management for modals/overlays.
- Reduced motion respected. `prefers-reduced-motion` media query.

## File Structure [v2]
```
app/                 Next.js App Router (pages, layouts, API routes)
  api/waitlist/      POST /api/waitlist endpoint (validation + persistence)
  waitlist/          Dedicated 2026 flagship waitlist page
components/          React components (hero, chat-interface, outcomes, etc.)
lib/                 Utilities, Supabase client helper
types/               Shared TypeScript interfaces (waitlist contracts)
supabase/migrations/ PostgreSQL schema + RLS policies
public/              Static assets (images, fonts)
stitch_reference_driven_generator/  Design briefs & creative references
stitch_stitch_design_system/        Design system specifications
```

<!-- sessions: 4, last: 2026-08-17 -->
