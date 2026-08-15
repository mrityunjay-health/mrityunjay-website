# Mritunjay Website OS (Compressed)

## ⚙ SELF-IMPROVEMENT PROTOCOL
**Every session, this file improves itself.**
- **ADD rules** when: new pattern, bug class, repeated mistake ≥2x, new tech added.
- **REMOVE rules** when: obsolete, unused 10+ sessions, superseded.
- **PRUNE at 300 lines**: sort by `[ ]` marker, drop oldest. Merge similar. Compress.
- **TRACK**: `[v0]` original, `[v1]` learned, `[v2+]` refined. Never remove `[v0]`.
- **Session marker at EOF**: `<!-- sessions: N, last: YYYY-MM-DD -->`

Public Next.js marketing website for Mritunjay — AI-powered healthcare intelligence. Editorial storytelling, premium design, scientific elegance.

## Non-Negotiable Principles [v0]
- Brand fidelity above all. Every pixel follows the `stitch/` design system. No deviation without reason.
- TypeScript `strict: true`. Zero `any`, zero `as`, zero `@ts-ignore`.
- Editorial storytelling > feature-selling. The website tells a story. Not a brochure.
- Performance is brand. Core Web Vitals (LCP < 2.5s, CLS < 0.1, INP < 200ms).
- WCAG 2.2 AA. Contrast 4.5:1. Keyboard nav. Screen reader ready.
- Every section intentionally designed. Nothing feels generated.
- **Skill-first**: search skills before any task. Load matching skills.
- **Caveman ultra**: drop filler. Fragments OK. Code/docs: normal English.
- **Stitch design authority**: `stitch_stitch_design_system/stitch.md` is the master design brief. `stitch_reference_driven_generator/prompt.md` is the creative brief. Reference before any UI work.

## Stack
Next.js 14+ (App Router, Server Components). Tailwind CSS. Framer Motion. TypeScript strict. Static generation preferred. No backend, no DB.

## TypeScript Rules [v0]
- No `any`, `as`, `@ts-ignore`, `!`
- Explicit return types on exports. `interface` for public API, `type` for unions.
- `readonly` immutable props. `satisfies` for config. `const` assertions for literals.

## Component Rules [v0]
- One component per file. Props as exported interface.
- Server Components by default. `"use client"` only when interactivity needed.
- `next/image` always — width, height, priority for LCP.
- No inline styles. Tailwind utility classes or CSS modules.
- `useEffect` cleanup + deps array. `useCallback`/`useMemo` only when profiler proves need.

## Animation Rules [v1]
- Framer Motion for meaningful motion only. No decorative animation.
- Motion communicates: learning, memory, growth, understanding, connection.
- Respect `prefers-reduced-motion`. Use `useReducedMotion` or CSS `@media`.
- Scroll-triggered reveals with `framer-motion` `useInView` or IntersectionObserver.
- Shaders (WebGL) for hero only — meaningful, not decorative.

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
`any`, `as`, `@ts-ignore`, `var`, `==`, `eval()`, `delete`, `for...in`, inline styles, `console.log` in prod, hardcoded text (use constants), commented-out code, floating promises, index as list key.

## Required Practices
strict mode, ESLint, Prettier, pre-commit (lint+type-check), CI (lint+type-check+build), Lighthouse CI, human review.

## Skill Discovery [v1]
- Check skills FIRST. Search by domain: frontend, animation, design, SEO, performance, accessibility.
- `skill(name="frontend-design")` for UI patterns. `skill(name="gsap-framer-scroll-animation")` for motion. `skill(name="seo")` for SEO. `skill(name="accessibility")` for a11y.

## Self-Awareness Protocol [v1]
Before every action: What? Why? Which doc? Am I rushing? Intentional or random?

## 12-Gate Workflow
0. INTENT: flag design/brand/performance. Search skills. One question if ambiguous.
1. UNDERSTANDING: read all related code. Read stitch docs. Never propose blind.
2. RESEARCH: grep patterns, check existing implementations.
3. ARCHITECTURE: component tree, data flow (props), server vs client split.
4. TRADEOFFS: approach + 2 alternatives + why chosen.
5. PLAN: atomic steps (< 3 tool calls each).
6. RISK: brand/UX/a11y/performance/regression. HIGH = human confirm.
7. CODE: types first, then animation, then layout. Match stitch design system.
8. SELF-REVIEW: zero errors, tests pass, diff reviewed, Lighthouse passes.
9. REFACTOR: simplify, extract patterns, improve names. Re-verify.
10. TESTING: component tests for interactive elements. A11y audit. Visual regression check.
11. VERIFICATION: build, type-check, lint, format, Lighthouse (LCP < 2.5s, CLS < 0.1, INP < 200ms), bundle < 300KB.
12. DOCUMENT: update design docs if patterns changed. NEVER merge without human.
Gates 1, 6, 8, 11 never skippable.

## Quality (5-pt scale)
| Category | Min | Critical? |
|----------|-----|-----------|
| Design/Brand | 4 | Cannot waive |
| Type Safety | 3 | Cannot waive |
| Performance | 3 | |
| Accessibility | 3 | Cannot waive |
| Motion/UX | 3 | |
| Code Quality | 3 | |
| Testing | 2 | |
| Docs | 2 | |

## Performance Targets
- LCP < 2.5s. CLS < 0.1. INP < 200ms. TBT < 200ms.
- Bundle < 300KB per route. Images WebP/AVIF, lazy loaded except hero.
- Fonts: `next/font` with `display: swap`. Preload critical fonts.
- Lighthouse score ≥ 95 all categories.
- CI enforces Lighthouse budgets. Violations block merge.

## Accessibility
- WCAG 2.2 AA. Contrast 4.5:1. Keyboard navigation visible.
- All images: `alt` text. Interactive elements: `aria-label` where needed.
- Skip-to-content link. Focus management for modals/overlays.
- Reduced motion respected. `prefers-reduced-motion` media query.

## SEO
- Meta tags per page (title, description, OG). Structured data (JSON-LD).
- Sitemap.xml generated. Robots.txt. Semantic HTML hierarchy (h1 > h2 > h3).
- Canonical URLs. `next/head` or metadata API for all pages.

## Definition of Done
- Matches stitch design specs. All acceptance criteria met.
- Zero type/lint errors. Lighthouse ≥ 95. Bundle within budget.
- A11y audited. `prefers-reduced-motion` handled.
- Error boundaries on all client components. Loading states.
- Responsive: mobile + tablet + desktop. Touch targets ≥ 44px.
- Human review completed. No unowned TODOs.

## File Structure
```
app/           Next.js App Router (pages, layouts, API routes)
components/    React components (organized by section/domain)
lib/           Utilities, constants, helpers
public/        Static assets (images, fonts)
styles/        Global CSS, Tailwind config
stitch_reference_driven_generator/  Design briefs (creative brief, site arch, brand)
stitch_stitch_design_system/        Design system (UI specs, prototypes, components)
```

<!-- sessions: 3, last: 2026-07-22 -->
