---
name: Mritunjay Healthcare Intelligence
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#43474f'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#747780'
  outline-variant: '#c4c6d0'
  surface-tint: '#405f91'
  primary: '#001736'
  on-primary: '#ffffff'
  primary-container: '#002b5b'
  on-primary-container: '#7594ca'
  inverse-primary: '#a9c7ff'
  secondary: '#586062'
  on-secondary: '#ffffff'
  secondary-container: '#d9e1e3'
  on-secondary-container: '#5c6466'
  tertiary: '#00192e'
  on-tertiary: '#ffffff'
  tertiary-container: '#002e4f'
  on-tertiary-container: '#5898d6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#a9c7ff'
  on-primary-fixed: '#001b3d'
  on-primary-fixed-variant: '#264778'
  secondary-fixed: '#dce4e6'
  secondary-fixed-dim: '#c0c8ca'
  on-secondary-fixed: '#151d1f'
  on-secondary-fixed-variant: '#40484a'
  tertiary-fixed: '#d0e4ff'
  tertiary-fixed-dim: '#9ccaff'
  on-tertiary-fixed: '#001d35'
  on-tertiary-fixed-variant: '#00497a'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
  ink-black: '#1A1A1A'
  clinical-white: '#FFFFFF'
  memory-glow: '#A5D8FF'
  data-node: '#D1D5DB'
typography:
  display-hero:
    fontFamily: Newsreader
    fontSize: 84px
    fontWeight: '400'
    lineHeight: 92px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 44px
  headline-md:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  body-lg:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
  quote:
    fontFamily: Newsreader
    fontSize: 28px
    fontWeight: '300'
    lineHeight: 42px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  section-gap-lg: 160px
  section-gap-md: 80px
  margin-mobile: 20px
---

## Brand & Style
The design system is anchored in **Scientific Minimalism** with an **Editorial** soul. It avoids the frantic tropes of Silicon Valley SaaS—no neon gradients, no floating glass cards, and no generic AI illustrations. Instead, it positions itself as a premium healthcare intelligence layer that feels like a cross between a prestigious scientific journal (e.g., *Nature* or *The Lancet*) and a luxury product launch.

The brand personality is **Calm, Intelligent, and Continuous**. It seeks to evoke an emotional response of profound trust and curiosity. The UI is defined by:
- **Expansive Whitespace:** Using space as a functional element to lower cognitive load and convey "breathing room" in healthcare.
- **Organic Movement:** Every transition mimics biological growth or memory formation—smooth, intentional, and never bouncy.
- **Human-Centered Rigor:** Balancing technical precision (fine lines, structured grids) with human warmth (authentic photography, soft neutrals).

## Colors
The palette is "Restrained & Scientific." It is dominated by **Clinical White** and **Neutral** surfaces to maintain a sense of sterile clarity without feeling cold.

- **Primary (Deep Trust-Blue):** A stable, authoritative navy used for primary headlines and core brand identifiers.
- **Secondary (Soft Slate):** Used for subtle backgrounds and grouping related concepts without creating hard borders.
- **Tertiary (Logic Blue):** An accent for active states and subtle highlights, representing the "intelligence" layer.
- **Neutral:** A range of near-whites and soft grays that provide depth through tonal layering rather than shadows.

## Typography
Typography is the primary driver of the brand experience. We use **Newsreader** for headlines to provide a literary, authoritative, and human touch, reminiscent of high-end editorial publications. **Manrope** is used for body text to ensure modern readability and a clean, technological edge that balances the serif headlines.

- **Scale:** High contrast between massive display sizes and functional body text to establish a clear hierarchy.
- **Width:** Paragraphs are restricted to a maximum width of 680px to ensure a "comfortable reading width" typical of academic papers.
- **Editorial Pace:** Use `label-caps` for section overlines to anchor the eye before the narrative begins.

## Layout & Spacing
The layout follows a **Fixed Grid with Asymmetrical Accents**. Content is primarily centered within a 1280px container, but visual elements (such as the "Health Memory" network) may bleed off-edge or sit asymmetrically to create a sense of organic growth.

- **Rhythm:** We use a generous 160px vertical gap between homepage sections to allow the storytelling to breathe.
- **Breakpoints:** 
  - **Desktop (1280px+):** 12-column grid, 32px gutters.
  - **Tablet (768px - 1024px):** 8-column grid, 24px gutters, margins reduced.
  - **Mobile (<768px):** 4-column grid, 16px gutters. Headlines scale down significantly to maintain legibility.
- **Flow:** Every section transition should feel like a page-turn; use `section-gap-lg` to separate the "Problem" from the "Solution" layers.

## Elevation & Depth
This design system avoids traditional heavy dropshadows in favor of **Tonal Layers and Fine Outlines**. Depth is communicated through:
- **Surface Tiers:** Shifting from `clinical-white` to `neutral-color` (#F9F9F9) to denote a change in context or a nested information block.
- **Low-Contrast Outlines:** Instead of shadows, use 1px borders in `data-node` gray (#D1D5DB) with 50% opacity for cards and inputs.
- **Luminous Blurs:** The only "softness" comes from the background visualizations where subtle `memory-glow` pulses exist behind the surface layer, suggesting the AI is working "under the hood."

## Shapes
The shape language is **Soft (0.25rem)**. We intentionally avoid hyper-rounded "bubble" aesthetics to maintain a scientific and professional demeanor. 
- **Subtle Precision:** Most containers and buttons use a 4px (0.25rem) radius.
- **Exceptions:** The "Health Memory" visualization nodes are perfect circles, representing data points, while the lines connecting them are organic, non-linear paths.

## Components
- **Buttons:** Primary buttons use `primary_color_hex` with white text. They are large (min-height 56px) and lack shadows. Hover states involve a subtle shift to `tertiary_color_hex` or a very fine inset border.
- **Cards:** Editorial-style cards with no background color—only a thin, low-opacity top border to separate them from the main flow. They should feel like "entries" in a ledger.
- **Health Memory Engine:** A custom interactive canvas component. Nodes should pulse gently when hovered, and connecting lines should "draw" themselves as the user scrolls.
- **Input Fields:** Minimalist design with only a bottom-border in the default state, transitioning to a full-border focus state in `primary_color_hex`.
- **Trust Indicators:** Subtle, monochrome logos and "Physician Reviewed" badges using the `label-caps` typography style to ensure they feel like certifications rather than ads.
- **Continuous Learning Timeline:** A vertical line component that connects sections of the homepage, visually representing the "memory" being built as the user journeys down the page.