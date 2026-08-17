# Mritunjay Website OS & Design Manifest

## ⚙ SELF-IMPROVEMENT PROTOCOL
**Every session, this file improves itself.**
- **ADD rules** when: new pattern, bug class, repeated mistake ≥2x, new tech added.
- **REMOVE rules** when: obsolete, unused 10+ sessions, superseded.
- **PRUNE at 300 lines**: sort by `[ ]` marker, drop oldest. Merge similar. Compress.
- **TRACK**: `[v0]` original, `[v1]` learned, `[v2+]` refined. Never remove `[v0]`.
- **Session marker at EOF**: `<!-- sessions: 5, last: 2026-08-17 -->`

Public Next.js marketing website and clinical intelligence workstation for Mritunjay.

---

## 🏛 The 20 Mritunjay Design Principles [v2]
1. **We Design for Humans, Not Screens**: People open Mritunjay when they are scared, in pain, confused, or vulnerable. Every screen acknowledges that emotional reality.
2. **Reduce Anxiety Before Reducing Clicks**: Less fear > fewer taps. Confidence > speed.
3. **Understanding Comes Before Action**: Interface always answers: What is happening? Why? What happens next? Only then ask them to act.
4. **Information Appears When It Becomes Useful**: Progressive disclosure. No clutter, no dashboards full of numbers.
5. **One Screen, One Purpose**: Home = "I understand my current health"; Consultation = "The system understands me"; Prescription = "I know exactly what to do"; Recovery = "I know whether I am improving".
6. **Silence Is a Feature**: Healthcare apps constantly shout. We don't. Silence builds trust. Only speak when meaningful.
7. **Motion Must Explain, Never Decorate**: Animation explains progress, relationship, continuity, transition, attention. Never for entertainment.
8. **Every Wait Has Meaning**: Never show generic "Loading...". Show meaningful progress ("Analyzing 36 months of cardiac data...", "Cross-referencing medication safety...").
9. **The System Should Feel Attentive**: Attention builds trust ("I remember your allergy", "Your doctor already reviewed your context").
10. **Technology Must Become Invisible**: Users should think "My healthcare became easier", not "What an amazing AI". The technology disappears; the care remains.
11. **The Next Step Is Always Obvious**: Patient always knows where they are, what is happening, and what happens next.
12. **Build Confidence Before Complexity**: Build understanding gradually before exposing deep medical complexity.
13. **Every Interaction Builds Memory**: Nothing disappears. Every consultation, report, and recovery adds to a lifelong health story.
14. **Design for Recovery, Not Consultation**: Most apps end at prescription. We continue helping through recovery.
15. **Trust Is the Interface**: Built through consistency, predictable behavior, and strict data sovereignty.
16. **Make Complex Systems Feel Simple**: Hide complexity, never hide important information.
17. **Every Pixel Must Earn Its Place**: Minimalism is disciplined decision-making. If removing something improves clarity, remove it.
18. **Context Before Content**: Ask "Does the patient need this now?" before showing information.
19. **Calm Is a Competitive Advantage**: When someone closes Mritunjay, they should feel calmer than when they opened it.
20. **Design for the Next 10 Years**: Avoid short-lived trends. Build timeless systems.

### Aesthetic Philosophy
If someone sees a screenshot of Mritunjay with the logo removed, they should instantly recognize it by the **feeling**:
`Calm • Quiet • Precise • Warm • Intelligent • Trustworthy • Human • Spacious • Thoughtful • Effortless`.

---

## Non-Negotiable Principles [v0]
- Brand fidelity above all. Every pixel follows the `stitch/` design system. No deviation without reason.
- TypeScript `strict: true`. Zero `any`, zero `as`, zero `@ts-ignore`.
- Performance is brand. Core Web Vitals (LCP < 2.5s, CLS < 0.1, INP < 200ms).
- WCAG 2.2 AA. Contrast 4.5:1. Keyboard nav. Screen reader ready.
- Skill-first: `brandkit`, `design-taste-frontend`, `high-end-visual-design`, `gpt-taste`, `industrial-brutalist-ui`, `full-output-enforcement`, `redesign-existing-projects`.

## Stack [v2]
Next.js 15.1 (App Router). React 19. Tailwind CSS 3.4. Framer Motion 11.18. TypeScript strict. Supabase (PostgreSQL + RLS) for `/api/waitlist` persistence.

## Design System Tokens & Guidelines [v2]
- **Three Dials**: `DESIGN_VARIANCE: 4`, `MOTION_INTENSITY: 3`, `VISUAL_DENSITY: 6` (clinical trust, calm telemetry).
- **Double-Bezel Architecture**: Hairline borders (`border border-data-node/30`), inner highlights (`shadow-double-bezel`), concentric radii (`rounded-2xl`).
- **Zero Em-Dash Rule**: Absolute ban on em-dashes (`—`) in copy. Use hyphens, colons, or periods.
- **Button-in-Button CTA**: Primary action pills with nested circular arrow capsules (`active:scale-[0.98]`).
- **Living Cell Canvas**: Procedural biological cell with 60–65 BPM cardiac pulse, undulating lipid bilayer, and microscopic zoom dive.

## TypeScript Rules [v0]
- No `any`, `as`, `@ts-ignore`, `!`
- Explicit return types on exports (`: ReactElement`). `interface` for public API, `type` for unions.
- `readonly` immutable props. `satisfies` for config. `const` assertions for literals.

## Animation Rules [v1]
- Framer Motion for meaningful motion only. No decorative animation.
- Animate strictly via `transform` and `opacity`. Respect `prefers-reduced-motion`.

## File Structure [v2]
```
app/                 Next.js App Router (pages, layouts, API routes)
  api/waitlist/      POST /api/waitlist endpoint (validation + persistence)
  waitlist/          Dedicated 2026 flagship waitlist page
components/          React components (hero, living-cell, chat-interface, outcomes, etc.)
lib/                 Utilities, Supabase client helper
types/               Shared TypeScript interfaces (waitlist contracts)
supabase/migrations/ PostgreSQL schema + RLS policies
stitch_reference_driven_generator/  Creative briefs & editorial references
stitch_stitch_design_system/        Design system specifications
```

<!-- sessions: 5, last: 2026-08-17 -->
