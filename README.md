# Mritunjay — The Intelligent Layer of Healthcare

> Healthcare that finally remembers you.

Mritunjay is a public marketing website and clinical intelligence workstation for an AI-powered healthcare operating system. It bridges the gap between a patient's fragmented medical history and the clinicians who treat them, ensuring no data is left behind before a consultation begins.

The interface is built upon the **20 Mritunjay Design Principles**, engineered to reduce anxiety, build understanding, and provide tranquil clinical clarity.

---

## 🏛 The Mritunjay Design Principles

1. **We Design for Humans, Not Screens** — Acknowledging the emotional reality of fear, pain, and vulnerability.
2. **Reduce Anxiety Before Reducing Clicks** — Less fear > fewer taps.
3. **Understanding Comes Before Action** — Explaining *what*, *why*, and *what happens next* before asking for decisions.
4. **Information Appears When It Becomes Useful** — Progressive disclosure without clutter.
5. **One Screen, One Purpose** — Single, focused cognitive objective per viewport.
6. **Silence Is a Feature** — Calm, uncluttered interfaces that build trust without shouting.
7. **Motion Must Explain, Never Decorate** — Animations that communicate clinical continuity and understanding.
8. **Every Wait Has Meaning** — Transparent progress indicators instead of generic loading spinners.
9. **The System Should Feel Attentive** — Proactive memory and recognition of patient context.
10. **Technology Must Become Invisible** — The technology disappears; the human care remains.
11. **The Next Step Is Always Obvious** — Clarity on where you are, what is happening, and what comes next.
12. **Build Confidence Before Complexity** — Gradual medical understanding.
13. **Every Interaction Builds Memory** — Nothing is lost; every consultation adds to a lifelong health story.
14. **Design for Recovery, Not Consultation** — Continuing support beyond the prescription.
15. **Trust Is the Interface** — Built through consistency, predictable behavior, and data sovereignty.
16. **Make Complex Systems Feel Simple** — Hiding complexity while never hiding vital information.
17. **Every Pixel Must Earn Its Place** — Disciplined, intentional decision-making.
18. **Context Before Content** — Information delivered strictly when needed.
19. **Calm Is a Competitive Advantage** — Leaving patients calmer than when they arrived.
20. **Design for the Next 10 Years** — Timeless, recognizable by its feeling: *Calm, Quiet, Precise, Warm, Intelligent, Trustworthy, Human, Spacious, Thoughtful, and Effortless*.

---

## ✨ Features & Architecture

- **Bioluminescent Living Cell Hero** — Procedural canvas background with resting cardiac rhythm (60–65 BPM), deformable lipid bilayer, and non-linear microscopic scroll zoom.
- **Interactive Clinical Workstation Terminal** — Tabbed exploration (*Pre-Consultation Brief*, *Longitudinal Timeline*, *Adverse Reactions*) with patient recovery projections.
- **Continuous Medical Ledger** — Unbroken chronological timeline connecting historical baselines, prescription adjustments, and active symptom correlation.
- **2026 Flagship Waitlist** — Zero-trust data intake backed by Supabase PostgreSQL with Row-Level Security (RLS).
- **Accessible & Responsive** — WCAG 2.2 AA compliant, zero horizontal overflow across 375px mobile to 4K desktop, and `prefers-reduced-motion` support.

## 🛠 Tech Stack

| Layer | Technology |
| ----- | ---------- |
| Framework | Next.js 15.1 (App Router, Server Components) |
| UI & Styling | React 19, Tailwind CSS 3.4 |
| Motion | Framer Motion 11.18, HTML5 Canvas 2D Engine |
| Database | Supabase (PostgreSQL + RLS) |
| Language | TypeScript strict mode (zero `any`, zero `as`) |

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 📁 Project Structure

```
app/                 Next.js App Router (pages, layouts, API routes)
  api/waitlist/      POST /api/waitlist (validation + persistence)
  waitlist/          Dedicated 2026 flagship waitlist page
components/          Section & feature components (hero, living-cell, chat-interface, outcomes, etc.)
lib/                 Utilities & Supabase client helper
types/               Shared TypeScript interfaces
supabase/migrations/ PostgreSQL schema + RLS policies
stitch_reference_driven_generator/  Creative briefs & editorial references
stitch_stitch_design_system/        Master design system specifications
```
