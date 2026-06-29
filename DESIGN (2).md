---
name: Obsidian Kinetic
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c5d9'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e90a2'
  outline-variant: '#434656'
  surface-tint: '#b8c3ff'
  primary: '#b8c3ff'
  on-primary: '#002388'
  primary-container: '#2e5bff'
  on-primary-container: '#efefff'
  inverse-primary: '#124af0'
  secondary: '#c6c6c8'
  on-secondary: '#2f3132'
  secondary-container: '#454749'
  on-secondary-container: '#b4b5b7'
  tertiary: '#c9c6c5'
  on-tertiary: '#313030'
  tertiary-container: '#6e6d6d'
  on-tertiary-container: '#f3f0ef'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b8c3ff'
  on-primary-fixed: '#001356'
  on-primary-fixed-variant: '#0035be'
  secondary-fixed: '#e2e2e4'
  secondary-fixed-dim: '#c6c6c8'
  on-secondary-fixed: '#1a1c1d'
  on-secondary-fixed-variant: '#454749'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c9c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  electric-cobalt: '#2E5BFF'
  brushed-silver: '#E0E0E2'
  deep-obsidian: '#050505'
  graphite-surface: '#232321'
  muted-steel: '#8B8B86'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 38px
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
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
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style
The design system embodies "Industrial Sophistication," targeting high-performance cyclists who value precision engineering and cutting-edge aesthetics. The brand personality is technical, elite, and fast. 

The design style is **Corporate / Modern** infused with **Glassmorphism**. It utilizes a dark-mode-first approach to evoke the feel of carbon fiber and obsidian, contrasted with electric highlights that simulate high-velocity motion. The UI should feel like a premium dashboard—functional, precise, and sophisticated—using generous whitespace to let high-resolution product photography drive the emotional narrative of speed and quality.

## Colors
The palette is dominated by **Deep Obsidian** (#050505) to provide a premium, infinite-depth backdrop. **Electric Cobalt** serves as the high-energy primary accent, used sparingly for critical actions and performance indicators to represent "High-Tech" energy.

**Brushed Silver** and **Muted Steel** provide the industrial texture, used for typography and structural borders. Backgrounds should primarily utilize the deep obsidian, while interactive surfaces or "containers" use **Graphite Surface** to create subtle tonal separation without breaking the dark aesthetic.

## Typography
The typography strategy mixes technical geometry with high readability. **Space Grotesk** is used for headlines to provide a futuristic, slightly architectural feel. Letter spacing is slightly tightened on larger displays to maintain a cohesive "machined" look.

**Hanken Grotesk** serves as the primary body face, chosen for its clean, geometric proportions that ensure clarity during rapid scanning of technical specifications. **JetBrains Mono** is introduced for labels, prices, and technical data points (like weight or torque), reinforcing the industrial, engineering-led nature of the products.

## Layout & Spacing
The design system utilizes a **12-column fluid grid** for desktop and a **4-column grid** for mobile. A strict 8px rhythm governs all internal spacing to ensure mathematical precision.

Generous margins (64px on desktop) are essential to maintain the "Sophisticated" half of the brand persona, preventing the UI from feeling cluttered. Content blocks should be separated by large vertical gaps (80px to 120px) to create a premium, editorial flow. On mobile, gutters shrink to 16px to maximize the visual impact of product imagery.

## Elevation & Depth
Depth is achieved through **Glassmorphism** and **Tonal Layering**. Surfaces do not use traditional drop shadows. Instead, elevation is communicated through:
1.  **Backdrop Blurs:** High-priority overlays (like navigation bars and modals) use a 12px blur with a 40% opaque Graphite Surface fill.
2.  **Inner Glows:** Interactive cards use a subtle 1px top-border (inner stroke) in Brushed Silver at 10% opacity to simulate light hitting a metal edge.
3.  **Glow States:** Active elements or primary buttons may emit a soft, Electric Cobalt outer glow (diffused, 20% opacity) to suggest power or "ready" status.

## Shapes
Shapes are disciplined and "Soft" (0.25rem/4px). This small radius prevents the UI from feeling "bubbly" or consumer-grade, maintaining a professional, industrial edge while being more modern than sharp 90-degree corners. Large components like product cards or hero containers should use the `rounded-lg` (8px) setting to create a subtle enclosure for content.

## Components
- **Buttons:** Primary buttons are solid Electric Cobalt with JetBrains Mono labels in all-caps. Secondary buttons use a Brushed Silver ghost-style outline with a subtle glass fill.
- **Input Fields:** Use a Deep Obsidian background with a 1px Muted Steel border. On focus, the border transitions to Electric Cobalt with a sharp, high-contrast cursor.
- **Cards:** Product cards use a Graphite Surface with no border. On hover, they should scale slightly (1.02x) and gain a subtle Brushed Silver top-edge highlight.
- **Chips/Badges:** Used for technical specs (e.g., "Carbon Fiber", "Aero-Optimized"). These use JetBrains Mono, 10px size, with a Muted Steel outline and no fill.
- **Lists:** Technical specs lists should use Electric Cobalt square bullets (4px) to align with the geometric shape language.
- **Progress Indicators:** Linear, high-contrast bars using Electric Cobalt on a Deep Obsidian track to show performance metrics or inventory levels.