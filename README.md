# Amit Halder — GenAI Developer & Machine Learning Engineer Portfolio

[![Production Build](https://img.shields.io/badge/Build-Passing-emerald?style=flat-square)](https://github.com/Martish-cloud/Amit-Halder-Machine-Learning-Engineer-)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?style=flat-square&logo=framer)](https://www.framer.com/motion/)

A production-ready, high-performance, and visually exceptional personal portfolio website for **Amit Halder**, presenting his expertise across Generative AI development, Machine Learning, AI automation, enterprise data analytics, and industrial operations.

> **Value Proposition**: *"Bridging AI systems with real-world business operations."*

---

## 🌟 Core Highlights & Architectural Philosophy

- **Single Source of Truth**: Grounded 100% in Amit Halder's authentic professional CV.
- **Dual-Domain Authority**: Highlights the unique synergy between **2+ years** in Generative AI/ML engineering (Intuit, Mphasis) and **6+ years** in industrial print production, WIP tracking, MRP, and ERP data governance (York Print, Jay Boxes, Pioneer Mega Printers).
- **Design Language**: Obsidian dark-first aesthetic with refined glassmorphism, subtle neon accents, editorial typography, fine borders, and smooth shadows.
- **Dynamic Theming**: Seamless Dark & Light mode toggle with `localStorage` persistence and automatic system preference synchronization (`prefers-color-scheme`).
- **Motion System**: Smooth spring animations, scroll-linked progress indicators, staggered entrances, responsive mobile menu drawer, and desktop custom cursor with reactive states (`pointer: fine`).
- **Zero-Lag Geometry**: High-performance SVG background node grids and mathematics-inspired motifs avoiding heavy WebGL canvas overhead.
- **Full Accessibility (a11y)**: Built with semantic HTML5 landmarks, ARIA live regions, keyboard navigation focus rings, and strict `prefers-reduced-motion` compliance.
- **SEO & Social Sharing**: Complete OpenGraph, Twitter Card meta tags, and schema.org `Person` JSON-LD structured data.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Build Tool** | [Vite 6](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS 3.4](https://tailwindcss.com/) + PostCSS |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Typography** | Plus Jakarta Sans, Space Grotesk, JetBrains Mono |

---

## 📂 Project Structure

```
├── public/
│   ├── Amit_Halder_Resume.pdf    # Direct CV download asset
│   └── favicon.svg               # Geometric "AH" monogram favicon
├── src/
│   ├── data/
│   │   └── profile.ts            # Centralized typed CV data (single source of truth)
│   ├── types/
│   │   └── index.ts              # Strict TypeScript interfaces
│   ├── hooks/
│   │   ├── useTheme.ts           # Dark/Light theme manager with system listener
│   │   └── useScrollSpy.ts       # Performant scroll-tracking hook
│   ├── components/
│   │   ├── Navbar.tsx            # Floating glass navbar + mobile drawer
│   │   ├── Footer.tsx            # Technical minimal footer
│   │   ├── ThemeToggle.tsx       # Sun/Moon animated theme toggle
│   │   ├── CustomCursor.tsx      # Desktop-only reactive pointer system
│   │   ├── Loader.tsx            # Short monogram entrance sequence
│   │   ├── BackgroundGrid.tsx    # Lightweight ambient SVG grid & glow
│   │   ├── ScrollProgress.tsx    # Top viewport reading progress bar
│   │   └── icons.tsx             # Standalone SVG icons (LinkedIn, etc.)
│   ├── sections/
│   │   ├── Hero.tsx              # Headline, quick contact pills, CTAs
│   │   ├── About.tsx             # Editorial summary & 5 competence pillars
│   │   ├── CareerEvolution.tsx   # Trajectory: Production -> Data -> Automation -> GenAI/ML
│   │   ├── Experience.tsx        # Interactive timeline for all 6 authentic roles
│   │   ├── Skills.tsx            # Categorized capabilities without fake percentages
│   │   ├── TechOrbit.tsx         # Responsive AI & Engineering Toolkit matrix
│   │   ├── Education.tsx         # Formal academic degrees & 6 languages
│   │   ├── Certifications.tsx    # 13 verified credentials with category filters
│   │   └── Contact.tsx           # Copyable email, phone, LinkedIn, CV download
│   ├── App.tsx                   # Main layout component
│   ├── index.css                 # Tailwind directives, CSS variables & scrollbars
│   └── main.tsx                  # Application entrypoint
├── index.html                    # SEO tags, OpenGraph, JSON-LD, fonts
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 📋 Sections Overview

1. **Hero**: Editorial typography, verified metrics (2+ Yrs GenAI, 6+ Yrs Ops, 13 Certs, 6 Languages), CV download, and quick contact pills.
2. **About / Professional Profile**: Split layout contrasting high-level executive summary with 5 core competence pillars:
   - Generative AI & LLMs
   - Machine Learning & NLP
   - AI Workflow Automation
   - Data & Business Analytics
   - Enterprise Operations & ERP
3. **Career Evolution**: Interactive step-by-step narrative demonstrating how 6+ years of operational discipline directly empowered modern GenAI architecture.
4. **Experience Timeline**: Chronological, filterable interactive timeline of all 6 authentic roles:
   - GenAI Developer (Remote) — *Intuit* (Jan 2026 – Apr 2026)
   - GenAI Intern (Remote) — *Mphasis* (Nov 2025 – Dec 2025)
   - Assistant PPC Manager / R&D Companion — *Pioneer Mega Printers* (Jun 2025 – Nov 2025)
   - Production Supervisor / Quality Executive — *Jay Boxes* (Mar 2024 – May 2025)
   - PPC Assistant / Dispatch Coordinator — *York Print Pvt. Ltd. Unit-IV, Ahmedabad* (Mar 2023 – Feb 2024)
   - PPC Executive / WIP Management — *York Print Pvt. Ltd. Unit-VI, Assam* (Mar 2020 – Feb 2023)
5. **Skills & Capabilities**: 6 interactive capability groups (Generative AI, ML & NLP, AI Automation, Data & BI, ERP Systems, Media & Design) with zero fabricated percentage bars.
6. **AI Toolkit Matrix**: Responsive interactive grid showcasing Python, LLMs, Prompt Engineering, SQL, Power BI, DaVinci Resolve, n8n, and ERP systems.
7. **Education & Languages**: Formal degrees (IGNOU B.A. pursuing, WBCHSE, French Language at Henry Harvin) and 6 language proficiencies (Bengali, English, Hindi, Assamese, French, Japanese).
8. **13 Verified Certifications**: Filterable directory of genuine certificates from IBM, Deloitte, Simplilearn, Udemy, Tutedude, and LearnTube.AI.
9. **Contact & Resume Download**: One-click copy email with feedback animation, direct call link, LinkedIn redirect, and verified PDF resume download.

---

## 🚀 Local Development

### Prerequisites
- Node.js `v18+` or `v20+` (Tested on `v24.x`)
- npm `v9+` (Tested on `v11.x`)

### Installation
```bash
# Clone the repository
git clone https://github.com/Martish-cloud/Amit-Halder-Machine-Learning-Engineer-.git

# Navigate into project directory
cd Amit-Halder-Machine-Learning-Engineer-

# Install dependencies
npm install
```

### Run Locally
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🏗️ Production Build & Verification

```bash
# Typecheck and build production bundle
npm run build

# Preview production build locally
npm run preview
```
The optimized production output will be generated inside the `dist/` directory.

---

## 🌐 Deployment Notes

This portfolio is a static single-page application (SPA) that can be seamlessly deployed on:
- **Vercel**: Import repository and deploy automatically.
- **Netlify**: Connect Git repository, set build command `npm run build` and publish directory `dist`.
- **GitHub Pages**: Build output in `dist` can be deployed via GitHub Actions or the `gh-pages` branch.
- **Cloudflare Pages**: Connect Git repository, build command `npm run build`, output directory `dist`.

---

## 📄 License & Attribution

Designed and engineered for **Amit Halder**. Content sourced strictly from official CV documentation.
All rights reserved © 2026.
