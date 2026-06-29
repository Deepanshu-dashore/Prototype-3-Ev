<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Context & Contributions

This repository contains the Next.js App Router frontend for **Ziko EV**, a premium electric mobility e-commerce website.

---

## Current Project Structure

- `src/app/` - The page routes and layouts (Next.js 15+ App Router):
  - `layout.tsx` - Root layout with global styling (`globals.css`), Manrope typography, and detailed global metadata.
  - `page.tsx` - Landing/Home page with showcase sections, specs, and technology integrations.
  - `scooter/` - E-Scooter catalog listing page.
  - `accessories/` - E-commerce accessories listings page.
  - `rent/[id]/` - Dynamic bike and scooter rental detail page with price calculation engine, calendar reservation flow, and sticky checkout summaries.
  - `accessories/[id]/` - Dynamic accessories detail page with vertical gallery, hover preview-zoom, swatches/size choices, customer reviews, and dynamic sticky purchase panels.
  - `checkout/`, `compare/`, `contact/`, `dashboard/`, `wishlist/` - Secondary layout views.
- `src/app/components/` - Shared UI elements:
  - `layout/` - Global components like `Navbar.tsx` (supports light/dark theme variants) and `Footer.tsx`.
  - `shared/` - Common UI elements like `ProductCard.tsx` (intelligent dynamic detail navigation paths) and `ProductGrid.tsx`.
- `public/` - Public assets (product images, logs, custom icons):
  - `ziko_ev_og_banner.png` - High-resolution custom OpenGraph social sharing banner (1200x630px).
- `scripts/` - Script utilities:
  - `stage.js` - Automation script for synchronizing local workspace code to the staging GitHub repository.

---

## Technical Implementations & Contributions

1. **Staging Automation Setup**:
   - Added a Node.js utility at `scripts/stage.js`. It checks directory clean states, prompts to stage/commit local changes, and pushes branches dynamically to `https://github.com/Deepanshu-dashore/Prototype-3-Ev.git` on its `main` branch.
   - Configured `"stage": "node scripts/stage.js"` in `package.json` for terminal integration.
2. **SEO & Social Share Integration**:
   - Enhanced metadata config in `src/app/layout.tsx` with dynamic `metadataBase`, target `keywords`, page templates, and fully-mapped `openGraph` schemas.
   - Designed and linked a custom sharing preview banner `/public/ziko_ev_og_banner.png` optimized for WhatsApp previews.
3. **Adaptive Themed Navigation**:
   - Modified `src/app/components/layout/Navbar.tsx` to support a dynamic `theme?: "light" | "dark"` property, inverting logo imagery and styling backgrounds/link colors dynamically.
4. **Dynamic Detail Pages (Page 1 & 2)**:
   - **Rental Detail UI (`src/app/rent/[id]`)**: Developed a dark studio design featuring premium specifications, horizontal rental duration plan calculations, time/calendar input layouts, responsive map widgets, and a sticky reservation totals sidebar.
   - **Accessories Detail UI (`src/app/accessories/[id]`)**: Created vertical image galleries with hover-zoom, swatch states, product storytelling features, review breakdowns, dynamic works-with compatibility grids, and a viewport-sticky bottom add-to-bag bar.

