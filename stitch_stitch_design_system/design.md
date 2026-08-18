Mritunjay Design Bible (design.md)
Purpose
This document defines the visual language, interaction philosophy, and UX principles for every interface in Mritunjay.
Every screen, component, animation, illustration, interaction, and workflow must follow this document.
This document is the single source of truth for design.

---

# The 20 Mritunjay Design Principles

1. **We Design for Humans, Not Screens**: People open Mritunjay because they are scared, in pain, confused, or vulnerable. Every screen must acknowledge that emotional reality.
2. **Reduce Anxiety Before Reducing Clicks**: Less fear > fewer taps. Confidence matters as much as interaction count.
3. **Understanding Comes Before Action**: Interface must answer: What is happening? Why is it happening? What happens next? Only then ask them to act.
4. **Information Appears When It Becomes Useful**: Progressive disclosure. No clutter, no dashboards full of numbers.
5. **One Screen, One Purpose**: Home = "I understand my current health"; Consultation = "The system understands me"; Prescription = "I know exactly what to do"; Recovery = "I know whether I am improving".
6. **Silence Is a Feature**: Healthcare apps constantly shout. We don't. Silence builds trust.
7. **Motion Must Explain, Never Decorate**: Animation explains progress, relationship, continuity, transition, attention. Never for entertainment.
8. **Every Wait Has Meaning**: Never show generic "Loading...". Show meaningful progress ("Analyzing 36 months of cardiac data...", "Cross-referencing medication safety...").
9. **The System Should Feel Attentive**: Attention builds trust ("I remember your allergy", "Your doctor already reviewed your context").
10. **Technology Must Become Invisible**: Users should think "My healthcare became easier", not "What an amazing AI". The technology disappears; the care remains.
11. **The Next Step Is Always Obvious**: Patients should always know where they are, what is happening, and what happens next.
12. **Build Confidence Before Complexity**: Build understanding gradually before exposing advanced medical complexity.
13. **Every Interaction Builds Memory**: Nothing disappears. Every consultation, report, and recovery adds to a lifelong health story.
14. **Design for Recovery, Not Consultation**: Most healthcare apps end with prescription. We continue helping through recovery.
15. **Trust Is the Interface**: Built through consistency, predictable behavior, and strict data sovereignty.
16. **Make Complex Systems Feel Simple**: Hide complexity, never hide important information.
17. **Every Pixel Must Earn Its Place**: Minimalism is disciplined decision-making. If removing something improves clarity, remove it.
18. **Context Before Content**: Ask "Does the patient need this now?" before displaying information.
19. **Calm Is a Competitive Advantage**: When someone closes Mritunjay, they should feel calmer than when they opened it.
20. **Design for the Next 10 Years**: Avoid short-lived trends. Build timeless systems.

### Aesthetic Feeling
- Calm, Quiet, Precise, Warm, Intelligent, Trustworthy, Human, Spacious, Thoughtful, Effortless.

---

# Source of Truth
This design bible is reconciled against the canonical Mritunjay blueprint (Notion: `https://app.notion.com/p/Mritunjay-38b47734352680a8a002c1f0ddc7ed70`) and applied for the website only. We draw on: Laws of Mritunjay, Philosophy of Mritunjay, Product Principles, Mritunjay Design Principles, The Experience Principles, Our AI Principle, Clinical Principles, and Volume 2 Human Psychology. Product-internal architecture (databases, APIs, model routing) is out of scope for this repo.

# The 10 Laws of Mritunjay (non-negotiable)
1. Patients never repeat themselves. If they do, the system failed.
2. Doctors never start from zero. Every consultation begins with complete context, never a blank page.
3. Every interaction must reduce anxiety. Every color, motion, and notification must answer: does this reduce anxiety? If not, delete it.
4. AI exists to reduce thinking. Never create work. Always remove work.
5. Information exists only once. Everything references one source of truth.
6. The system always knows more tomorrow than yesterday. Every visit improves memory, reasoning, personalization, recovery, and doctor understanding.
7. Context before intelligence. Ask "What do we already know?" before "Answer this." Memory first, reasoning second, generation last.
8. Every decision is explainable. Doctors ask why and get an answer; patients ask why and get a simpler answer.
9. The doctor owns the clinical decision. AI assists. Never replaces.
10. The product feels invisible. If users notice software, we failed. They should notice healthcare becoming easier.

---

# The 20 Experience Principles (designing trust, not screens)
Healthcare is not just a medical experience; it is an emotional experience. Every interaction should reduce uncertainty, increase understanding, and help people move toward better health with confidence. These are distinct from the Design Principles: we are not designing screens, we are designing trust.

1. **Reduce uncertainty** - the biggest problem in healthcare is uncertainty. Every screen answers: what is happening, is this serious, what should I do, did my doctor receive this, am I getting better.
2. **Build trust before intelligence** - people trust healthcare long before they trust AI. AI is never the hero; trust is.
3. **Patients should feel understood** - continuously communicate "we understand your situation": we remembered your allergy, we reviewed your previous reports, your doctor has already read your summary.
4. **Doctors should feel prepared** - every consultation begins with organized history, summarized reports, medications, allergies, timeline, and an AI-generated clinical summary.
5. **One continuous journey** - the experience should never feel like moving between separate products; transitions matter.
6. **Every wait has purpose** - never "Loading...". Show meaningful work: reviewing previous reports, preparing your doctor's summary, checking medication safety.
7. **Make progress visible** - show advancement (consultation ████░░░░, doctor ready ████████, recovery day 2 of 7). This builds momentum.
8. **Information appears at the right time** - progressive disclosure. Never overwhelm, never hide.
9. **Every action has immediate feedback** - the patient should never wonder "did it upload, did it save, did the doctor receive it?".
10. **AI works quietly** - like electricity: always present, rarely noticed. Never "look how smart our AI is".
11. **Human decisions stay human** - distinguish AI-generated information, doctor-reviewed advice, and the final clinical decision.
12. **The next step is always clear** - at any moment: where am I, what's happening, what's next. Navigation is clarity.
13. **Continue caring after the consultation** - medicine reminders, recovery tracking, follow-ups, preventive guidance. Supported, not abandoned.
14. **Personalize through memory** - allergies, preferences, chronic conditions, medications, prior consultations, recovery patterns. Never rebuild the story.
15. **Empower without overwhelming** - translate medical concepts accurately into plain language; offer more detail for those who want it.
16. **Calm is part of the treatment** - spacing, typography, color, motion, language, and timing all reduce stress. Calm is not decoration; calm is care.
17. **Design for exceptional cases** - emergencies, poor connectivity, incomplete information, uncertain diagnoses, doctor unavailability, interrupted consultations.
18. **Respect the user's time** - never ask for information the system already knows. Time is part of healthcare quality.
19. **Every interaction improves the relationship** - the user should trust Mritunjay more after each interaction. Trust compounds.
20. **Leave people better than you found them** - more informed, more confident, more prepared, more hopeful, more supported. That is the measure of success.

## Experience Review Checklist (use before shipping any feature)
- **Clarity**: does the user know where they are, what's happening, what's next?
- **Trust**: is it obvious what the AI did, clear what the doctor decided, uncertainty explained honestly?
- **Cognitive load**: can we remove a step, a decision, or unnecessary information?
- **Emotional state**: does it reduce anxiety, increase confidence, feel respectful?
- **Continuity**: does it build on what the system already knows, avoid repetition, fit the journey?
- **Safety**: are urgent situations handled appropriately, is there a clear path to human help?

---

# Human Psychology Drivers
Design for the person, not the screen. These come from the Patient and Doctor Psychology docs.

## Patient Needs Pyramid
```
Level 5  Long-term Health
Level 4  Confidence
Level 3  Understanding
Level 2  Trust
Level 1  Safety
```
You cannot build confidence without trust. You cannot build trust without safety.

## The 10 Patient Needs
Safety, Understanding, Control, Predictability (people fear uncertainty more than bad news), Being Heard, Competence, Human Connection, Progress, Memory, Hope (never false reassurance, always a constructive next step).

## Patient Trust Model
Professional design → reliable behavior → visible understanding → transparent actions → doctor validation → long-term consistency → trust. One interaction is not enough; trust compounds.

## Patient Experience Rules
- Never surprise patients with important decisions.
- Never use fear as a growth tactic.
- Never overwhelm with medical terminology.
- Always explain the next step.
- Always acknowledge uncertainty honestly.
- Always remember what the patient has already shared.
- Always provide a clear path to human help.

## Doctor Needs Pyramid
```
Level 5  Professional Fulfillment
Level 4  Clinical Confidence
Level 3  Efficiency
Level 2  Reliable Information
Level 1  Patient Safety
```
Everything rests on patient safety.

## The 10 Doctor Needs
Safety, Trustworthy information, Control (never feel overridden), Efficiency (every unnecessary click reduces attention for care), Clinical focus, Professional respect, Transparency, Continuity, Reduced cognitive load, Better outcomes.

## Core working belief for the site
Doctors don't need another application; they need fewer obstacles between them and good clinical care. They want clarity, efficiency, confidence, and control.

---

# The AI Manifesto
> AI is not the clinician. AI is not the patient. AI is the intelligence layer that continuously understands, organizes, and connects health information so that patients and clinicians can make better decisions together. Its success is measured not by how intelligent it appears, but by how much safer, simpler, and more effective healthcare becomes.

## AI design guidance for the site
- Explain observable work, not hidden reasoning ("reviewing previous reports", "checking medication safety"). Never expose internal chain-of-thought.
- Express uncertainty honestly; escalate when confidence is low. Safety overrides convenience.
- Structured data is more valuable than conversation; play back what the system knows.
- Measure success by outcomes (safer, simpler, more effective healthcare), not by how intelligent the AI appears.

---

Product Identity
Mritunjay is not a telemedicine application.
It is an AI-native Healthcare Operating System.
Users should never feel they are navigating software.
They should feel guided through healthcare.
The product should communicate:


Calm

Trust

Intelligence

Precision

Humanity

Simplicity
Design Philosophy
Healthcare is emotionally demanding.
Our interface should reduce emotional burden rather than add to it.
Every screen should help the user feel:


Safe

Understood

Confident

In control

Supported
Never design for visual excitement.
Design for clarity and confidence.
Core Design Principles


One primary goal per screen.

One primary action per screen.

Progressive disclosure over information overload.

Context before action.

Clarity before beauty.

Trust before automation.

Calm before speed.

Memory before repetition.

Consistency over novelty.

Accessibility is a requirement, not a feature.
Visual Language
Keywords


Quiet

Premium

Minimal

Spacious

Warm

Clinical

Timeless
Avoid looking like a generic SaaS dashboard.
Avoid excessive gradients.
Avoid glassmorphism.
Avoid neumorphism.
Avoid decorative illustrations.
Avoid AI robots or futuristic clichés.
Information Hierarchy
Priority order


Current task

Patient context

Important clinical information

Supporting information

Historical information
Everything on the screen must support the current task.
Layout System
Desktop


Left Navigation

Primary Workspace

Context Panel
Mobile


Simple header

Single scrolling experience

Bottom navigation

One floating primary action when appropriate
Component Philosophy
Cards
Group related information.
Never create cards only for decoration.
Buttons
Only one primary button per screen.
Secondary actions should never compete visually.
Forms
Short.
Simple.
Step-by-step.
Never overwhelm users with large forms.
Dialogs
Only for high-impact actions requiring confirmation.
Motion Philosophy
Motion communicates state.
Motion never exists for decoration.
Use animation only to:


explain transitions

communicate progress

confirm actions

preserve continuity
Animation should feel subtle, smooth, and calm.
Color Philosophy
Color communicates meaning.
Blue
Trust and guidance.
Green
Recovery and progress.
Amber
Attention and caution.
Red
Urgent clinical attention only.
Neutral colors should dominate the interface.
Accent colors should be used sparingly.
Typography Philosophy
Typography should prioritize readability.
Large headings.
Comfortable body text.
Clear spacing.
Strong hierarchy.
Medical information must always be easy to scan.
AI Design Language
AI is an assistant.
Not a character.
Never display robot imagery.
Never exaggerate AI intelligence.
Instead communicate actions such as:


Reviewing your health history

Organizing your reports

Preparing your doctor's summary

Checking medication interactions
AI should feel invisible.
Clinical Design Language
Medical information should be:


structured

prioritized

clinically clear
Critical information should always appear before secondary information.
Risk information should be easy to identify without creating unnecessary fear.
Empty States
Every empty state should:
Explain why it is empty.
Explain what the user can do next.
Encourage the next action.
Loading States
Never display generic loading indicators.
Always explain meaningful work.
Examples
Preparing your health summary.
Reviewing previous reports.
Selecting the most suitable doctor.
Error States
Every error should answer:
What happened?
Why did it happen?
What can the user do now?
Never display technical messages.
Accessibility
Design for everyone.
Large touch targets.
High contrast.
Keyboard accessibility.
Screen reader compatibility.
Readable typography.
Never rely on color alone to communicate meaning.
Consistency Rules
Every screen must:


use the same spacing system

use the same interaction patterns

use the same terminology

follow the same visual hierarchy

maintain the same emotional tone
Users should never feel they moved into a different product.
Anti-Patterns
Never:


design like a generic SaaS admin panel

overload dashboards

hide important medical information

use decorative motion

show multiple competing CTAs

rely on dark patterns

make users repeat information

prioritize aesthetics over clarity
Design Quality Checklist
Before approving any screen ask:


Is the user's primary goal obvious?

Does this reduce anxiety?

Is the next step clear?

Is information prioritized correctly?

Is the interface consistent with the rest of Mritunjay?

Can this realistically be implemented?

Would both patients and clinicians trust this experience?
Only when all answers are yes is the design considered complete.