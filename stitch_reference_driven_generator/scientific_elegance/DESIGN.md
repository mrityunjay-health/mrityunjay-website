---
name: Scientific Elegance
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#191c1e'
  on-tertiary-container: '#818486'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
  clinical-white: '#FFFFFF'
  soft-neutral: '#F1F5F9'
  trust-blue-deep: '#1E3A8A'
  ink-black: '#020617'
typography:
  display-lg:
    fontFamily: Newsreader
    fontSize: 72px
    fontWeight: '300'
    lineHeight: 80px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Newsreader
    fontSize: 44px
    fontWeight: '300'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
  headline-md:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  body-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
  caption:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  margin-edge: 5vw
  gutter: 32px
  section-gap: 160px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The brand personality is anchored in **Scientific Elegance**, a design style that merges the rigor of a modern scientific journal with the quiet confidence of a luxury product. The target audience includes individuals seeking longitudinal health understanding and organizations looking for a credible intelligence layer in healthcare.

The UI avoids the "software" aesthetic entirely, instead favoring an **Editorial Minimalism** approach. This is characterized by expansive whitespace, a restrained color palette, and a focus on high-fidelity typography that communicates intelligence and calm. The visual language is intentional, avoiding the "artificial" tropes of AI—such as glowing brains or circuit boards—in favor of organic, living systems that represent "Health Memory."

### Design Movements
- **Minimalism:** Use whitespace as a functional element to guide focus and reduce cognitive load.
- **Corporate / Modern:** Maintain a professional, stable foundation that inspires trust in a clinical context.
- **Editorial:** Large margins and asymmetrical grids that feel like a high-end publication rather than a dashboard.

## Colors

The palette is clinical yet warm, designed to evoke a sense of safety and professional precision. 

- **Primary (Ink & Trust):** A deep, authoritative blue-black used for headlines and core brand elements to establish grounding and confidence.
- **Secondary (Action & Connection):** A refined, mid-tone blue used sparingly for interactive elements. It represents "intelligence" rather than "technology."
- **Tertiary/Background (Surface):** Near-white neutrals that provide a soft, non-glare canvas for long-form reading.
- **Neutral (Supporting):** Low-saturation grays used for secondary information and subtle borders.

Avoid neon, high-vibrancy gradients, or "tech-bro" purples. Color should always feel like it was chosen with scientific restraint.

## Typography

Typography is the cornerstone of this design system. It utilizes a sophisticated pairing of a classic serif for storytelling and a high-legibility sans-serif for functional data.

- **Headlines (Newsreader):** Used for all narrative and high-level messaging. It should feel literary, authoritative, and human. Use lighter weights for large displays to emphasize elegance.
- **Body (Inter):** Chosen for its clinical clarity and neutrality. It ensures that medical information is accessible and easy to digest over long periods.
- **Labels (Hanken Grotesk):** Used for micro-copy, navigation, and UI metadata. It provides a modern, precise counterpoint to the serif headlines.

**Scale Philosophy:** Maintain generous line heights to ensure a "breathable" reading experience. Headlines should never feel crowded.

## Layout & Spacing

The layout follows an **Editorial Fluid Grid** philosophy. It uses a 12-column system on desktop but breaks symmetry to create a dynamic, story-driven flow.

- **Asymmetry:** Content should not always center-align. Use offset columns to create visual interest and guide the eye in a "Z" pattern.
- **Section Gaps:** Use unusually large vertical spacing (`section-gap`) to allow each concept to be processed individually. 
- **Margins:** Generous outer margins (`margin-edge`) ensure the content feels like it is floating on a premium canvas.
- **Mobile Adaptivity:** On mobile, shift to a single-column layout but maintain the "storytelling" sequence. Scale vertical gaps down to 80px to maintain momentum while preserving the sense of air.

## Elevation & Depth

To maintain a scientific and clean aesthetic, depth is achieved through **Tonal Layers** and **Subtle Elevation** rather than dramatic shadows.

- **Surface Tiers:** Use very slight variations in background color (e.g., Clinical White on Soft Neutral) to separate content sections.
- **Shadows:** Only use shadows on interactive components like cards or buttons. Shadows must be "Ambient"—low-opacity, highly diffused, and tinted with a hint of Trust Blue to avoid looking "dirty."
- **Outlines:** Use hairline borders (0.5px to 1px) in low-contrast grays to define boundaries without adding visual weight.
- **Prohibited:** No glassmorphism, no heavy neon blurs, and no neomorphism. The UI should feel solid and dependable, not ephemeral.

## Shapes

The shape language is **Soft and Precise**. We avoid the playfulness of pill shapes and the harshness of sharp corners.

- **Standard Radius:** Elements like cards and input fields use a `0.25rem` radius. This provides a subtle "human" touch while maintaining a disciplined, clinical structure.
- **Subtle Curves:** Roundedness should be felt rather than seen. It suggests accessibility without compromising the brand's premium, scientific positioning.

## Components

### Buttons
Buttons are substantial and confident.
- **Primary:** Solid `trust-blue-deep` or `ink-black` with white text. Minimal hover transition (slight tonal shift or very subtle lift).
- **Secondary:** Ghost style with a fine outline.
- **Interaction:** No bouncy or elastic effects. Use smooth, linear fades for states.

### Cards
Cards should not look like "widgets."
- **Style:** Background-colored containers with subtle hairline borders. 
- **Content:** Prioritize typography and whitespace within the card. No excessive icons or decorative flourishes.

### Input Fields
- **Style:** Clean, underlined or minimally boxed fields. 
- **Focus State:** A soft transition to a blue border. No heavy glow.

### Health Memory Visualization (Signature Component)
This is a custom-coded component (using `anime.js` as per motion guidelines).
- **Behavior:** Abstract, branching lines that grow and connect as the user scrolls or interacts. 
- **Aesthetic:** High-precision SVG paths with variable stroke widths. It should look like a living diagram, not a graphic.

### Icons
- **Style:** 1.5pt stroke weight, outline only. 
- **Geometry:** Simple, geometric forms. Avoid "filled" icons or multi-color illustrations.