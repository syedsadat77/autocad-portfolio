# SYED — AutoCAD Designer Portfolio

A motion-led personal portfolio for **SYED**, professional AutoCAD designer.
Dark HUD/technical aesthetic with an interactive 3D wireframe CAD centerpiece,
text-scramble decode effects, scroll-scrubbed storytelling, and a live HUD
overlay — inspired by modern motion-first portfolio design.

### ▶ Tech Stack

| Area | Stack |
|------|-------|
| Framework | Next.js 16 (App Router, React 19, Turbopack), TypeScript |
| Styling | Tailwind CSS v4 + shadcn/ui components |
| Motion | Framer Motion (spring physics, scroll-linked transforms) |
| Smooth Scroll | Lenis (respects `prefers-reduced-motion`) |
| 3D Centerpiece | Pure CSS 3D transforms + inline SVG wireframes (zero heavy WebGL deps) |
| API | Next.js Route Handlers (`/api/contact`) |
| Hosting | Vercel-ready |

---

## ✨ Features

- **Interactive 3D wireframe CAD cube** — six faces, each hand-drawn as an SVG
  CAD drawing (gear, PEB building, floor plan, exploded assembly, bracing,
  shaft). Mouse-tracked tilt with spring physics and idle auto-rotation.
- **Text-scramble decode effect** — site-wide headings decode from random
  engineering glyphs, locking in left-to-right.
- **Custom cursor** — eased outer ring + precise inner dot; expands over
  interactive elements; disabled on touch devices.
- **Live HUD overlay** — real-time clock, rotating system statuses, scroll
  progress bar, corner brackets, and an ambient scanline.
- **Scroll-scrubbed project marquee** — project names translate horizontally,
  driven directly by scroll position.
- **Serpentine career timeline** — alternating cards draw down a glowing
  center line as you scroll.
- **Responsive + accessible** — fluid layout from mobile to 4K, semantic HTML,
  ARIA labels, keyboard navigation, and a full `prefers-reduced-motion` path.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ (or Bun 1.1+)
- npm / pnpm / bun

### Install & Run

```bash
# install dependencies
bun install        # or: npm install

# start dev server
bun run dev        # or: npm run dev

# open http://localhost:3000
```

### Production Build

```bash
bun run build      # or: npm run build
bun run start      # or: npm run start
```

---

## ☁️ Deploy to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New → Project**.
3. Import the repo — Vercel auto-detects Next.js settings.
4. Click **Deploy**. Done — every push to `main` auto-deploys.

---

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts   # Contact form API endpoint
│   │   ├── globals.css            # HUD theme, animations, utilities
│   │   ├── layout.tsx             # Root layout + metadata
│   │   └── page.tsx               # Section composition
│   ├── components/
│   │   ├── portfolio/             # All portfolio sections
│   │   │   ├── navbar.tsx         # Fixed glass navbar + mobile drawer
│   │   │   ├── hero.tsx           # 3D wireframe cube + scramble title
│   │   │   ├── about.tsx          # Profile, bio, animated stats
│   │   │   ├── services.tsx       # PEB / Equipment / Machinery modules
│   │   │   ├── projects.tsx       # Filterable grid + scroll marquee
│   │   │   ├── timeline.tsx       # Serpentine career timeline
│   │   │   ├── skills.tsx         # Animated skill bars
│   │   │   ├── contact.tsx        # Working contact form
│   │   │   ├── footer.tsx         # Links + return-to-top
│   │   │   ├── hud-overlay.tsx    # Clock, status, progress, scanline
│   │   │   ├── custom-cursor.tsx  # Eased dot + ring cursor
│   │   │   ├── scramble-text.tsx  # Text decode effect
│   │   │   └── smooth-scroll.tsx  # Lenis provider
│   │   └── ui/                    # shadcn/ui components
│   ├── hooks/                     # Shared hooks
│   └── lib/                       # Utilities
├── public/images/                 # Generated CAD artwork
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

---

## 🎨 Customization

- **Content** — edit the data arrays at the top of each section component
  (`projects.tsx`, `services.tsx`, `timeline.tsx`, `skills.tsx`).
- **Colors** — the amber/orange palette lives in `src/app/globals.css`
  (`--primary`, `.gradient-text`, `.glow-amber`).
- **Profile photo** — replace `public/images/about-portrait.jpeg`.
- **Contact email** — update in `contact.tsx` and `footer.tsx`.

---

## 📄 License

© 2025 SYED. All rights reserved.
