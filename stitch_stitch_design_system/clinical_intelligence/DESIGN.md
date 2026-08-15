---
name: Clinical Intelligence
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#44474e'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#75777f'
  outline-variant: '#c5c6cf'
  surface-tint: '#4e5e81'
  primary: '#031635'
  on-primary: '#ffffff'
  primary-container: '#1a2b4b'
  on-primary-container: '#8293b8'
  inverse-primary: '#b6c6ef'
  secondary: '#004ccd'
  on-secondary: '#ffffff'
  secondary-container: '#0f62fe'
  on-secondary-container: '#f3f3ff'
  tertiary: '#231400'
  on-tertiary: '#ffffff'
  tertiary-container: '#3e2700'
  on-tertiary-container: '#b08d5b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#b6c6ef'
  on-primary-fixed: '#081b3a'
  on-primary-fixed-variant: '#364768'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174c'
  on-secondary-fixed-variant: '#003da9'
  tertiary-fixed: '#ffddb1'
  tertiary-fixed-dim: '#e8c08a'
  on-tertiary-fixed: '#291800'
  on-tertiary-fixed-variant: '#5d4217'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
  clinical-blue: '#0F62FE'
  recovery-green: '#198754'
  caution-amber: '#F59E0B'
  urgent-red: '#D12727'
  surface-warm: '#FAF9F6'
  text-primary: '#111827'
  text-secondary: '#4B5563'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  clinical-data:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 40px
  margin-mobile: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is built for a "Healthcare Operating System" where the software serves as a silent, expert guide rather than a tool. The brand personality is rooted in **Clinical Precision** and **Human Warmth**. It avoids the frenetic energy of typical SaaS platforms in favor of a "Quiet Premium" aesthetic.

The chosen style is **Minimalism with Tonal Layering**. It leverages heavy whitespace and a strict adherence to information hierarchy to reduce the emotional and cognitive burden on patients and clinicians. The interface should feel like a high-end medical facility: sterile but welcoming, efficient but not rushed, and deeply reliable. Every element is intentional; there is no room for decorative fluff, glassmorphism, or AI clichés.

## Colors

The palette is dominated by **Neutrals and Off-Whites** to create a "Warm Clinical" environment. Functional accents are used with surgical precision to communicate status and urgency without inducing anxiety.

- **Primary (Deep Navy):** Used for core branding and high-level navigation to anchor the interface in authority and trust.
- **Functional Blue:** Indicates guidance, AI assistance, and interactive elements.
- **Recovery Green:** Used exclusively for positive clinical outcomes, progress, and completed tasks.
- **Caution Amber:** Signals information that requires review but is not life-critical.
- **Urgent Red:** Reserved strictly for immediate clinical danger or critical errors.

The background uses a slightly warm off-white (`#FAF9F6`) rather than a harsh pure white to reduce eye strain during prolonged clinical use.

## Typography

Typography is the primary vehicle for trust. This system uses a dual-type approach: **Manrope** for headlines provides a modern, balanced, and professional feel, while **Inter** ensures maximum legibility for dense medical data and body text. 

**JetBrains Mono** is introduced sparingly for labels and metadata to evoke a sense of "Operating System" precision and technical accuracy. 

**Hierarchy Rules:**
- Use `display-lg` only for welcome screens or high-level summaries.
- Medical values (heart rate, lab results) should use `clinical-data` to ensure they stand out from descriptive text.
- Accessibility is paramount; never go below 12px for any text element.

## Layout & Spacing

The layout philosophy follows a **Fixed-Fluid Hybrid** model. On desktop, the primary workspace is capped at 1280px to maintain comfortable line lengths for medical reading, while the side panels (Navigation and Context) remain fixed to the edges.

**Spacing Rhythm:**
- A strict 8px grid governs all layouts.
- **Spaciousness** is a core requirement; use `stack-lg` (32px) between unrelated sections to prevent the "cluttered dashboard" look common in SaaS.
- **Mobile:** Transition to a single-column scrolling experience with a fixed bottom navigation for high-reachability.

## Elevation & Depth

This design system eschews heavy shadows in favor of **Tonal Layers** and **Low-Contrast Outlines**. Depth is used to signify "focus" rather than "distance."

- **Level 0 (Background):** The base warm-neutral surface.
- **Level 1 (Cards/Sections):** White surfaces with a subtle 1px border (`#E5E7EB`) to define boundaries without adding visual weight.
- **Level 2 (Popovers/Modals):** High-diffusion, low-opacity shadows (Blur 20px, 4% Opacity) are used only when an element physically overlays another to preserve the user's mental map of the workspace.
- **Active State:** Use a 2px "Clinical Blue" left-border on cards to indicate the current task or selection.

## Shapes

The shape language is **Rounded (Level 2)**. This balance avoids the "playfulness" of pill-shaped SaaS buttons while moving away from the "harshness" of sharp clinical software. 

- **Standard Elements (Buttons, Inputs):** 0.5rem (8px) radius.
- **Large Containers (Cards, Modals):** 1rem (16px) radius to create a soft, protective frame around patient data.
- **Interactive Tags:** 4px radius to keep them distinct from primary action buttons.

## Components

### Buttons
- **Primary:** High-contrast Navy or Blue. Only one per screen.
- **Secondary:** Ghost style (outline or text-only) to ensure zero competition with the primary action.
- **Loading State:** Replace text with a specific status message (e.g., "Analyzing History...") rather than a generic spinner.

### Cards
- Used strictly for grouping related medical information. 
- No drop shadows; use subtle borders. 
- Headers within cards should use `label-caps` for clear categorization.

### Forms & Inputs
- **Step-by-Step:** Complex intake forms must be broken into single-question or single-category steps.
- **Inputs:** Large touch targets (min 48px height) with clear focus states using the "Clinical Blue."

### Clinical Lists
- High-density information must be scannable. Use zebra-striping or subtle dividers.
- Critical values must be bolded and paired with a status icon (e.g., an amber alert icon for borderline results).

### AI Interaction
- AI status is communicated via "Action Labels" (e.g., "Organizing your reports...") in the primary workspace. No robot icons or "magic" sparkles. The AI is a silent processor.