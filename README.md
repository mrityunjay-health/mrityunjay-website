# Mritunjay — The Intelligent Layer of Healthcare

> Healthcare that finally remembers you.

Mritunjay is a public marketing website for an AI-powered healthcare intelligence layer. It bridges the gap between a patient's fragmented medical history and the clinicians who treat them — ensuring no data is left behind before a consultation begins.

The site is a Next.js App Router application with editorial storytelling, a cinematic 5-act hero animation, and a 2026 flagship waitlist backed by Supabase.

## ✨ Highlights

- **5-act closed-loop hero animation** — a continuous narrative: inquiry → understanding → synthesis → review → reset, with a live counter, ECG line draw, and version increment per loop.
- **Editorial storytelling** — every section tells a story about continuous medical memory, physician centrality, and sovereign data, rather than listing features.
- **2026 flagship waitlist** — a dedicated `/waitlist` page with role-based intake (patient, clinician, health system), client + server validation, and a priority access token on confirmation.
- **Supabase persistence** — waitlist registrations are stored in PostgreSQL with Row-Level Security enabled.
- **Accessible & responsive** — WCAG 2.2 AA, `prefers-reduced-motion` support, keyboard-navigable, zero horizontal overflow from 375px mobile up to desktop.

## 🛠 Tech stack

| Layer | Technology |
| ----- | ---------- |
| Framework | Next.js 15 (App Router, static generation) |
| UI | React 19, Tailwind CSS 3.4 |
| Motion | Framer Motion 11 |
| Database | Supabase (PostgreSQL + RLS) |
| Language | TypeScript (strict mode, zero `any`/`as`) |

## 🚀 Getting started

### Prerequisites

- Node.js 18.18+ (tested with 22/24)
- A Supabase project (optional for local run — the app falls back to simulated responses without credentials)

### Install & run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Copy `.env.example` to `.env.local` and fill in your Supabase project credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-actual-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-actual-service-role-key
```

> [!NOTE]
> Without Supabase credentials the `/api/waitlist` endpoint and form still work in demo mode — they return a simulated priority token instead of persisting.

### Database setup

Apply the migration to your Supabase project (or use `supabase db push`):

```bash
supabase db push
```

The migration in `supabase/migrations/20260729000000_create_waitlist.sql` creates the `public.waitlist` table, indexes, and RLS policies (public inserts, service-role reads).

## 📁 Project structure

```
app/                 Next.js App Router (pages, layouts, API routes)
  api/waitlist/      POST /api/waitlist — validates & persists registrations
  waitlist/          Dedicated 2026 flagship waitlist page
components/          Section & feature components (hero, outcomes, form, nav…)
lib/                 Utilities (Supabase client helper)
types/               Shared TypeScript contracts (waitlist types)
supabase/migrations/ SQL schema + RLS policies
stitch_reference_driven_generator/  Design briefs & creative references
stitch_stitch_design_system/        Design system specifications
```

## 🧪 Verification

```bash
npx tsc --noEmit   # type check — 0 errors
npm run lint       # ESLint — 0 warnings/errors
npm run build      # production build (static generation)
```

## 📄 Scripts

| Script            | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the development server         |
| `npm run build`   | Build for production                 |
| `npm run start`   | Start the production server          |
| `npm run lint`    | Run ESLint                           |
