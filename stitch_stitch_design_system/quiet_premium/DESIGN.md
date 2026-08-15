---
name: Quiet Premium
colors:
  surface: '#fcf8f8'
  surface-dim: '#ddd9d9'
  surface-bright: '#fcf8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f1eded'
  surface-container-high: '#ebe7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#44474a'
  inverse-surface: '#313030'
  inverse-on-surface: '#f4f0ef'
  outline: '#75777a'
  outline-variant: '#c5c6ca'
  surface-tint: '#5d5e61'
  primary: '#000101'
  on-primary: '#ffffff'
  primary-container: '#1a1c1e'
  on-primary-container: '#838486'
  inverse-primary: '#c6c6c9'
  secondary: '#5c5f61'
  on-secondary: '#ffffff'
  secondary-container: '#e0e3e6'
  on-secondary-container: '#626567'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001b3d'
  on-tertiary-container: '#4184df'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e5'
  primary-fixed-dim: '#c6c6c9'
  on-primary-fixed: '#1a1c1e'
  on-primary-fixed-variant: '#454749'
  secondary-fixed: '#e0e3e6'
  secondary-fixed-dim: '#c4c7ca'
  on-secondary-fixed: '#191c1e'
  on-secondary-fixed-variant: '#44474a'
  tertiary-fixed: '#d6e3ff'
  tertiary-fixed-dim: '#a8c8ff'
  on-tertiary-fixed: '#001b3d'
  on-tertiary-fixed-variant: '#00468b'
  background: '#fcf8f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
  clinical-success: '#2D8A39'
  clinical-warning: '#B3261E'
  clinical-info: '#005FB8'
  ai-accent: '#7C4DFF'
  surface-neutral: '#F8F9FA'
typography:
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
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
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  transcript-text:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  margin-desktop: 24px
  margin-mobile: 16px
  gutter: 16px
  sidebar-width: 280px
  context-panel-width: 320px
  max-content-width: 1440px
---

## Brand & Style
The design system is built on the philosophy of **Quiet Premium**. It is designed to evoke a sense of calm, intelligence, and profound trust, specifically tailored for healthcare environments where users may be experiencing pain, uncertainty, or urgency. The aesthetic is "AI-native," meaning the interface feels like an attentive assistant that understands the user's history without being intrusive or theatrical.

The style is a blend of **Minimalism** and **Corporate/Modern**, prioritizing clarity and clinical safety over decorative flair. It utilizes heavy whitespace to reduce cognitive load and a systematic approach to information hierarchy to ensure the primary action is always obvious. The UI should feel supportive rather than dominant, providing a professional and stable environment for sensitive medical consultations.

## Colors
The color palette follows a high-contrast, professional logic to ensure accessibility and clinical clarity. 

- **Primary**: A deep, authoritative neutral used for typography and essential structural elements.
- **Secondary**: A soft, background neutral used to define containers and separate workspace sections without creating visual noise.
- **Tertiary**: A professional blue reserved for interactive elements and primary call-to-actions.
- **Named Colors**: 
    - `clinical-success` and `clinical-warning` are strictly reserved for health status and emergency escalation. 
    - `ai-accent` is used sparingly to indicate AI-driven insights or "AI Understanding" panel updates, ensuring the technology feels present but supportive.

## Typography
Typography is the primary tool for establishing information hierarchy. **Manrope** is used for headlines to provide a modern, refined, and trustworthy feel. **Inter** is used for all functional and body text due to its exceptional legibility in clinical contexts and technical utility.

- **Scale**: Headlines use a tight tracking to feel cohesive, while body text maintains standard spacing for maximum readability.
- **Transcript Text**: A specific style for voice-to-text transcripts uses italics to distinguish patient speech from system-generated text.
- **Mobile Adaptivity**: Large headlines scale down on mobile to maintain layout integrity while ensuring the page title remains the first point of focus.

## Layout & Spacing
The design system employs a **Fixed Grid** philosophy to build long-term spatial memory for the patient. 

- **Desktop (3-column)**: A fixed Left Sidebar (Navigation), a fluid Central Workspace, and a fixed Right Context Panel (AI Understanding/Health Memory).
- **Tablet (2-column)**: The Context Panel collapses into a toggleable overlay or moves below the primary action.
- **Mobile (1-column)**: A single continuous vertical scroll with a fixed Bottom Navigation bar.

A strict 8px spacing scale is used to maintain visual rhythm. All cards and containers must align to the established margins (24px desktop / 16px mobile). Navigation and headers remain fixed during workspace scrolling to ensure the user always knows "where they are."

## Elevation & Depth
This design system uses **Tonal Layers** and **Low-Contrast Outlines** to convey hierarchy, avoiding heavy shadows that can feel visually cluttered.

- **Level 0 (Background)**: The base surface uses the secondary neutral color.
- **Level 1 (Cards/Containers)**: White surfaces with a subtle 1px border (#E0E0E0) to define boundaries. This is the default state for Health Summary, Medication, and Activity cards.
- **Level 2 (Active/Interactive)**: A very soft, ambient shadow (4px blur, 4% opacity) is used only for the Primary Action Card to ensure it is the most obvious element on the screen.
- **Overlays**: Dialogs and Bottom Sheets use a semi-transparent backdrop blur (12px) to maintain the "Quiet Premium" feel while focusing the user's attention.

## Shapes
The shape language is **Rounded**, using 0.5rem (8px) as the base radius. This softens the clinical nature of the application, making it feel more approachable and modern.

- **Standard Buttons & Cards**: 8px (0.5rem).
- **Large Action Containers**: 16px (1rem).
- **Transcription/Chat Bubbles**: Mixed radii (12px) to indicate directionality of conversation.
- **Pill Elements**: Used exclusively for status tags (e.g., "Active", "Processing") and the floating Voice Button on mobile.

## Components
Consistent component usage is critical for clinical safety and learnability.

- **Buttons**:
    - **Primary**: Solid background (Tertiary Color), high-contrast text. Only one per screen.
    - **Secondary**: Outlined or subtle gray background. Used for "Save Draft" or "Edit".
    - **Emergency**: High-visibility red outline, reserved for the "Emergency Help" action.
- **Cards**: All content (Medication, Recovery, Activity) is encapsulated in Level 1 cards with consistent internal padding (20px).
- **AI Understanding Panel**: A specialized container with a subtle `ai-accent` left-border. It updates dynamically with "Clinical Tags" to show symptoms identified without exposing internal logic.
- **Input Fields**: Large touch targets (min 48px height). Voice is the default input mode for consultations, represented by a prominent waveform animation component when active.
- **Progress Indicators**: Linear progress bars for consultation status; no generic spinners. Use descriptive labels like "Understanding your symptoms..." instead of "Loading".
- **Navigation Shell**: 
    - **Desktop Sidebar**: Icons paired with text labels; active state indicated by a subtle background tint and primary color indicator.
    - **Mobile Bottom Nav**: Maximum 5 items; centered icon-label clusters.