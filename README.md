# Mritunjay — The Intelligent Layer of Healthcare

> Healthcare that finally remembers you.

Mritunjay is a public marketing website and clinical intelligence workstation for an AI-powered healthcare operating system. It bridges the gap between a patient's fragmented medical history and the clinicians who treat them, ensuring no data is left behind before a consultation begins.

The site is built with Next.js 15 App Router, React 19, Tailwind CSS, and Framer Motion, with high-end editorial storytelling, an interactive clinical synthesis terminal, and a 2026 flagship waitlist backed by Supabase.

## ✨ Highlights

- **Cinematic Hero & Intelligence Layer** — Word-by-word reveal storytelling paired with a 5-tier diagnostic flow matrix.
- **Interactive Clinical Workstation** — Interactive terminal allowing clinicians and patients to scrub through real-time physician briefs, longitudinal timelines, and adverse reaction telemetry.
- **Scientific Minimalism & Double-Bezel Design** — High-end nested container architecture with hairlines, specular inner highlights, and authentic clinical metrics (`font-mono tabular-nums`).
- **2026 Flagship Waitlist** — Dedicated `/waitlist` intake for patients, clinicians, and health systems with instant priority token issuance.
- **Supabase Persistence** — Registrations stored in PostgreSQL with Row-Level Security (RLS) and serverless validation.
- **Accessible & Zero Overflow** — WCAG 2.2 AA compliant, `prefers-reduced-motion` fallbacks, and verified zero horizontal overflow across 375px mobile to 4K desktop.

## 🛠 Tech Stack

| Layer | Technology |
| ----- | ---------- |
| Framework | Next.js 15.1 (App Router, Server Components) |
| UI & Styling | React 19, Tailwind CSS 3.4 |
| Motion | Framer Motion 11.18 |
| Database | Supabase (PostgreSQL + RLS) |
| Language | TypeScript strict mode (zero `any`, zero `as`) |

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18+ (tested on Node 22/24)
- Supabase Project (optional for local run; the app falls back to demo mode without credentials)

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

Copy `.env.example` to `.env.local` and add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-actual-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-actual-service-role-key
```

> [!NOTE]
> Without Supabase credentials, the `/api/waitlist` endpoint runs in fallback simulation mode and generates priority access tokens without persisting to a live database.

### Database Setup

Apply the migration in `supabase/migrations/20260729000000_create_waitlist.sql` to your Supabase project:

```bash
supabase db push
```

## 📁 Project Structure

```
app/                 Next.js App Router (pages, layouts, API routes)
  api/waitlist/      POST /api/waitlist (validation + persistence)
  waitlist/          Dedicated 2026 flagship waitlist page
components/          Section & feature components (hero, chat-interface, outcomes, etc.)
lib/                 Utilities & Supabase client helper
types/               Shared TypeScript interfaces
supabase/migrations/ PostgreSQL schema + RLS policies
stitch_reference_driven_generator/  Creative briefs & editorial references
stitch_stitch_design_system/        Master design system specifications
```

## 🧪 Verification

```bash
npx tsc --noEmit   # type check — 0 errors
npm run lint       # ESLint — 0 warnings/errors
npm run build      # production build (static generation)
```
