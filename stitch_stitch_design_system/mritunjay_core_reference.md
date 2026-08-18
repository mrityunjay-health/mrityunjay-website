# Mritunjay Design Reference

> Maintenance note: reconciled against the canonical Mritunjay blueprint at `https://app.notion.com/p/Mritunjay-38b47734352680a8a002c1f0ddc7ed70` (website scope only). See `design.md` for the full design bible.

## Product Identity
Mritunjay is an AI-powered healthcare operating system that continuously understands every patient's health, helps them receive the right care faster, and enables doctors to make better clinical decisions with less effort. It is an AI-native Healthcare Operating System, not a generic SaaS app. No patient should ever have to start from zero again.

Priorities: Calm, Quiet, Precise, Warm, Intelligent, Trustworthy, Human, Spacious, Thoughtful, Effortless.

## The 10 Laws of Mritunjay (non-negotiable)
1. Patients never repeat themselves. If they do, the system failed.
2. Doctors never start from zero. Every consultation begins with complete context.
3. Every interaction must reduce anxiety. If it doesn't, delete it.
4. AI exists to reduce thinking. Never create work; always remove work.
5. Information exists only once. One source of truth; never duplicated.
6. The system always knows more tomorrow. Every visit improves memory, reasoning, and recovery.
7. Context before intelligence. Memory first, reasoning second, generation last.
8. Every decision is explainable. Both doctor and patient can ask "why?" and get an answer.
9. The doctor owns the clinical decision. AI assists, never replaces.
10. The product feels invisible. Users notice healthcare becoming easier, not software.

## Core Design Principles
1. **One primary goal/action per screen** to reduce cognitive load.
2. **Progressive disclosure** to prevent information overload.
3. **Context before action** - help the user feel understood before asking them to do something.
4. **Clarity before beauty** - medical information must be scannable and unambiguous.
5. **Trust before automation** - AI is an assistant that prepares information, not a character that replaces human judgment.
6. **Build trust before intelligence** - healthcare is trusted long before AI; AI is never the hero.

## Human Psychology Drivers
- **Patient Needs Pyramid:** Safety -> Trust -> Understanding -> Confidence -> Long-term Health. You cannot build confidence without trust; you cannot build trust without safety.
- **The 10 Patient Needs:** Safety, Understanding, Control, Predictability, Being Heard, Competence, Human Connection, Progress, Memory, Hope.
- **Patient Experience Rules:** never surprise with important decisions, never use fear, never overwhelm with terminology, always explain the next step, always acknowledge uncertainty honestly, always remember what the patient shared, always provide a path to human help.
- **Doctor Needs Pyramid:** Patient Safety -> Reliable Information -> Efficiency -> Clinical Confidence -> Professional Fulfillment. Everything rests on patient safety.

## Visual Language (Quiet Premium)
- **Palette**: Dominant neutral colors with functional accents (Blue for trust/guidance, Green for recovery, Amber for caution, Red for urgent clinical attention).
- **Typography**: Large, readable headings; comfortable body text; strong scannable hierarchy.
- **Components**: Purposeful cards, single dominant CTAs, and task-oriented layouts.
- **Motion**: calm, subtle, meaningful only - never decorative.

## Navigation Standards
- **Desktop**: 8-item Left Sidebar (Home, Consultation, Timeline, Reports, Medicines, Recovery, Family, Profile).
- **Mobile**: 5-item Bottom Navigation (Home, Timeline, Consult, Recovery, Profile) with a Floating Primary Action for consultations.

## AI Design Language
- Communicate observable actions ("Reviewing your history", "Preparing doctor's summary"), never hidden reasoning or "look how smart our AI is".
- AI should feel invisible and supportive, never robotic or gimmicky.
- Use observable progress (extraction panels, transcribing states) to build transparency.
