# Mritunjay Website OS & Design Manifest

## ⚙ SELF-IMPROVEMENT PROTOCOL
**Every session, this file improves itself.**
- **ADD rules** when: new pattern, bug class, repeated mistake ≥2x, new tech added.
- **REMOVE rules** when: obsolete, unused 10+ sessions, superseded.
- **PRUNE at 300 lines**: sort by `[ ]` marker, drop oldest. Merge similar. Compress.
- **TRACK**: `[v0]` original, `[v1]` learned, `[v2+]` refined. Never remove `[v0]`.
- **Session marker at EOF**: `<!-- sessions: 6, last: 2026-08-18 -->`

Public Next.js marketing website and clinical intelligence workstation for Mritunjay: an AI-powered healthcare operating system that continuously understands every patient's health, helps them receive the right care faster, and enables doctors to make better clinical decisions with less effort. No patient should ever have to start from zero again.

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

## 📡 Canonical Source of Truth [v1]
The authoritative Mritunjay blueprint lives in Notion (`https://app.notion.com/p/Mritunjay-38b47734352680a8a002c1f0ddc7ed70`). This repo applies it **as needed, for the website only**. We draw from: Laws of Mritunjay, Philosophy of Mritunjay, Product Principles, Mritunjay Design Principles, The Experience Principles, Our AI Principle, Clinical Principles, and Volume 2 Human Psychology. Product-internal material (database entities, API contracts, model routing, engineering bible) is out of scope for this marketing site.

## The 10 Laws of Mritunjay [v1]
Non-negotiable. They govern every build and copy decision:
1. **Patients never repeat themselves** - if they do, the system failed.
2. **Doctors never start from zero** - every consultation begins with complete context.
3. **Every interaction must reduce anxiety** - if a color, motion, or screen does not, delete it.
4. **AI exists to reduce thinking** - never create work, always remove work.
5. **Information exists only once** - one source of truth, never duplicated.
6. **The system always knows more tomorrow** - every visit improves memory, reasoning, recovery.
7. **Context before intelligence** - recall what we know first, reason second, generate last.
8. **Every decision is explainable** - doctor and patient can both ask "why?" and get an answer.
9. **The doctor owns the clinical decision** - AI assists, never replaces.
10. **The product feels invisible** - users notice healthcare becoming easier, not software.

## Primary and Secondary Users [v1]
- **Primary**: a patient with a non-emergency medical problem who wants quick, trustworthy access to care.
- **Secondary**: an online doctor who wants to review patients efficiently.
Everything else can come later; the website speaks to both, patients first.

## Experience Principles (designing trust, not screens) [v1]
Condensed from The Experience Principles. Full text in `stitch_stitch_design_system/design.md`. The ones that shape this website most:
- **Reduce uncertainty** - every screen answers: what is happening, is this serious, what should I do, am I getting better.
- **Build trust before intelligence** - healthcare is trusted long before AI; AI is never the hero.
- **Patients should feel understood** - "we remembered your allergy", "your doctor has already read your summary".
- **Make progress visible** - show advancement, never a blank "loading".
- **AI works quietly** - like electricity: always present, rarely noticed. Never "look how smart our AI is".
- **Human decisions stay human** - distinguish AI-generated info, doctor-reviewed advice, and the final clinical decision.
- **Calm is part of the treatment** - spacing, typography, color, motion, language, and timing all reduce stress.
- **Leave people better than you found them** - informed, confident, prepared, hopeful, supported.

## Stack [v3]
Next.js 16.3.1 (App Router, Turbopack). React 19. Tailwind CSS 3.4. Framer Motion 11.18. TypeScript strict. Supabase (PostgreSQL + RLS) for `/api/waitlist` persistence.

## Design System Tokens & Guidelines [v3]
- **Three Dials**: `DESIGN_VARIANCE: 7`, `MOTION_INTENSITY: 4`, `VISUAL_DENSITY: 5` (clinical trust, calm telemetry, high-agency interactive inspection).
- **Asymmetric Diagnostic Architecture**: Replaces generic 3-box feature cards with split diagnostic ledgers and contextual error markers (`[ERR_NARRATIVE_LOST]`, `[ERR_ZERO_CONTEXT]`).
- **Interactive Narrative Comparator**: Scrubbable 36-month timeline comparing conventional episodic amnesia with Mritunjay's continuous memory loop.
- **Two-Pane Clinical Journey Simulator**: Synchronized step stepper with live clinical telemetry artifacts (Allergy Safeguard, Physician One-Screen Brief, Titration Ledger).
- **Act Scrubber Workstation**: Interactive act controller allowing direct jump between Intake Brief, Patient Query, Synthesis, and Doctor Verification.
- **Double-Bezel Architecture**: Hairline borders (`border border-data-node/30`), inner highlights (`shadow-double-bezel`), concentric radii (`rounded-2xl`).
- **Zero Em-Dash Rule**: Absolute ban on em-dashes (Unicode 8212 / 8211) in copy. Use hyphens, colons, or periods only.
- **Button-in-Button CTA**: Primary action pills with nested circular arrow capsules (`active:scale-[0.98]`).
- **Living Cell Canvas**: Procedural biological cell with 60-65 BPM cardiac pulse, undulating lipid bilayer, and microscopic zoom dive.

## TypeScript Rules [v0]
- No `any`, `as`, `@ts-ignore`, `!`
- Explicit return types on exports (`: ReactElement`). `interface` for public API, `type` for unions.
- `readonly` immutable props. `satisfies` for config. `const` assertions for literals.

## Animation Rules [v1]
- Framer Motion for meaningful motion only. No decorative animation.
- Animate strictly via `transform` and `opacity`. Respect `prefers-reduced-motion`.

## File Structure [v3]
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

<!-- sessions: 7, last: 2026-08-20 -->
