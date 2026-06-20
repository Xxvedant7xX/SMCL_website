# SMCL Premium B2B Industrial Website — Implementation Plan

## Context

Shree Mahalakshmi CCR Limited (SMCL) needs a premium B2B industrial website that positions them as a modern, large-scale copper manufacturing leader — not a local factory or electrician service. The site must feel like it was custom-designed by a professional agency for a company competing in national and international copper markets.

The existing `App.tsx` is an empty shell. No `@make-kits` design system packages are installed — the project uses shadcn/radix UI components (`src/app/components/ui/`) + Tailwind v4. Unsplash images will be sourced for cinematic industrial photography.

---

## Color Tokens (applied via inline Tailwind arbitrary values)

| Token | Hex |
|---|---|
| Deep Navy | `#071426` |
| Industrial Navy | `#0F223D` |
| Copper | `#C97A2B` |
| Light Copper | `#D9A15C` |
| Graphite | `#1A1F29` |
| Warm Beige | `#E8E0D7` |

Sections alternate: dark navy → warm beige → graphite → dark navy → beige → dark navy → beige → dark navy → dark footer.

---

## Font Strategy

Add Google Fonts to `src/styles/fonts.css`:
- **Display/Headings:** `Barlow Condensed` (700, 800) — industrial, bold, large-scale
- **Body/Labels:** `Inter` (400, 500, 600) — clean, modern, precise

---

## Component Architecture

All components go in `src/app/components/`. Imported into `src/app/App.tsx`.

```
src/app/
  App.tsx                    ← orchestrates all sections + NavBar
  components/
    NavBar.tsx               ← sticky transparent→solid nav with copper accent
    HeroSection.tsx          ← full-viewport immersive hero
    WhyCopperSection.tsx     ← editorial "Why Copper Matters" on beige bg
    ManufacturingSection.tsx ← process steps with large images, dark navy bg
    ProductsSection.tsx      ← product cards with specs, beige bg
    IndustriesSection.tsx    ← industry sectors, graphite bg
    QualitySection.tsx       ← trust/quality metrics, dark navy bg
    CapacitySection.tsx      ← infrastructure/capacity showcase, beige bg
    InquirySection.tsx       ← large CTA section, dark navy bg
    Footer.tsx               ← minimal corporate footer, #071426 bg
    figma/
      ImageWithFallback.tsx  ← already exists, use this for all images
```

---

## Section-by-Section Plan

### 1. NavBar
- Sticky, starts transparent over hero, transitions to `#071426` on scroll
- Logo: "SMCL" in Barlow Condensed + tagline "Copper CCR Rods | Wire | Bus Bars"
- Nav links: Products · Manufacturing · Quality · Industries · Contact
- CTA button: "Request Quote" with copper border/text
- Use `useState` + `useEffect` scroll listener for transparency toggle

### 2. Hero Section (`bg-[#071426]`)
- Full-viewport height (`min-h-screen`)
- Background: Unsplash copper/industrial image with dark overlay (`bg-[#071426]/60`)
- Headline: "Precision in Every Purity. / Excellence in Every Rod." — Barlow Condensed, very large, split across two lines
- Subheadline: manufacturing quality/export focused
- Two CTAs: "Request Quote" (copper filled) + "Explore Products" (outline)
- Bottom strip: 3 quick stats (e.g., 99.95% Purity · 500T Monthly Capacity · ISO Certified)

### 3. Why Copper Matters (`bg-[#E8E0D7]`)
- Editorial layout: large text left + image right OR full-width text sections
- Four pillars in a 2×2 grid: Power Infrastructure / Renewable Energy / Industrial Systems / Electrical Equipment
- Each pillar: copper icon + headline + 2-line explanation
- No cards — use bordered left-accent lines (copper color) for each pillar
- Section intro: large italic quote-style statement about copper's role in civilization

### 4. Manufacturing Excellence (`bg-[#071426]`)
- Horizontal process timeline: Continuous Casting → Rolling → Processing → Quality Control
- Each step: large number (e.g. "01"), process name, short description, image
- Layout: alternating image/text rows for desktop (not simple cards)
- Subtle copper line connecting the steps
- Images sourced from Unsplash: casting furnace, rolling mill, industrial processing

### 5. Product Portfolio (`bg-[#E8E0D7]`)
- Three products: Copper CCR Rods · Copper Wires · Copper Bus Bars
- Each product card: large Unsplash image, product name, key specs table, "View Specifications" link
- Specs presented as clean key-value pairs (not bullet lists): Purity, Diameter/Sizes, Conductivity, Standards
- Cards have subtle shadow and border, no rounded corners (industrial feel)
- Active/hover: copper accent border appears

### 6. Industries Powered by SMCL (`bg-[#1A1F29]`)
- Five sectors: Power & Transmission / Renewable Energy / Electrical Equipment / Infrastructure / Industrial Manufacturing
- Layout: large asymmetric grid (1 featured large + 4 smaller)
- Each: Unsplash image as background, industry name overlay, brief descriptor
- Copper accent on hover

### 7. Quality & Testing (`bg-[#071426]`)
- Four quality pillars: 99.95% Purity / Conductivity Testing / Metallurgical Analysis / International Standards
- Layout: 2×2 grid with large numbers/metrics as visual anchors
- Metric displayed prominently (e.g., "99.95%" in large Barlow Condensed copper text)
- Below: certification badges row (ISO, BIS, etc. as text-based badges, not images)
- Trust statement: "Every rod tested. Every batch certified."

### 8. Infrastructure & Capacity (`bg-[#E8E0D7]`)
- Large image full-width at top (plant/facility)
- Below: 4 capacity stats in a row: Annual Capacity · Plant Area · Production Lines · Quality Labs
- Secondary image + text block: "Our facility" paragraph
- Tone: confident, specific, measurable

### 9. Inquiry / CTA Section (`bg-[#0F223D]`)
- Large centered headline: "Partner with India's Premier Copper Manufacturer"
- Three action paths side by side:
  1. Request Quote → form trigger or mailto link
  2. Download Catalogue → placeholder PDF link
  3. Contact Sales → phone/email display
- Brief contact info: address, phone, email

### 10. Footer (`bg-[#071426]`)
- 4 columns: Logo+tagline / Products / Company / Contact
- Bottom bar: copyright + "ISO Certified | BIS Approved | Export Quality"
- Copper colored links on hover
- Minimal, no heavy graphics

---

## Technical Approach

- **No React Router** — single-page scrolling website (no multi-page routing needed)
- **Unsplash images** via `mcp__plugin_make_unsplash__search_photos` tool, rendered with `<ImageWithFallback>`
- **Scroll-based nav** — `useEffect` with `window.addEventListener('scroll', ...)`
- **shadcn Button** from `src/app/components/ui/button.tsx` for CTAs
- **No excessive animation** — subtle CSS transitions only (hover states, nav transparency)
- **Tailwind arbitrary values** for all brand colors (e.g., `bg-[#071426]`, `text-[#C97A2B]`)
- All font-size and font-weight set via explicit Tailwind classes (overriding theme defaults for display text)

---

## Verification

1. Visual check: sections alternate dark/beige correctly
2. Nav: transparent on load, dark on scroll
3. All 9 sections present and scroll smoothly
4. Unsplash images load with proper aspect ratios
5. CTAs (Request Quote, Download Catalogue, Contact Sales) are functional (mailto/href stubs)
6. Mobile responsiveness: stack layouts to single column on small screens
7. Typography hierarchy: display headings dramatically larger than body
