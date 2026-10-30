# Utkarsh Kushwaha — Professional Portfolio

> A modern, premium developer portfolio engineered with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

🌐 **Live Website**: [https://utkarsh-kushwaha-portfolio.vercel.app](https://utkarsh-kushwaha-portfolio.vercel.app)  
📦 **GitHub Repository**: [https://github.com/utkarshkushwaha159/utkarsh-kushwaha-portfolio](https://github.com/utkarshkushwaha159/utkarsh-kushwaha-portfolio)

---

## 🎨 Design System & Visual Identity

- **Color Palette**: Cyan Aash + Steel Black
  - Primary Background: `#111820`
  - Secondary Background: `#19232C`
  - Elevated Surface: `#202D37`
  - Primary Accent: `#73DCE8` (Cyan Aash)
  - Secondary Accent: `#42B9CC`
  - Primary Text: `#F2F6F7`
  - Secondary Text: `#A9B8C0`
  - Muted Text: `#788A94`
  - Borders: `#30404A`
- **Typography**: Space Grotesk (headings), Inter (body), DM Mono (code and technical tags)
- **Signature Visual**: Bespoke UK Typographic Identity Artwork (`TypographicArtwork.tsx`) with interactive desktop parallax tilt.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Framework** | Next.js 14 (App Router, Server Components & Static Site Generation) |
| **Language** | TypeScript 5 (Strict type checking) |
| **Styling** | Tailwind CSS 3 with Centralized CSS Custom Properties |
| **Icons** | Lucide React |
| **Deployment** | Vercel (Edge Network & Global CDN) |
| **SEO & Metadata** | Semantic HTML5, Schema.org Person & WebSite JSON-LD, Sitemap.xml, Robots.txt |
| **Security** | Strict CSP, HSTS, X-Frame-Options, anti-spam honeypot, rate limiting |

---

## 📂 Project Structure

```
UTKARSH_Portfolio/
├── src/
│   ├── app/
│   │   ├── api/contact/    # Contact endpoint with rate limiting & honeypot spam protection
│   │   ├── resume/         # Clean, printable formal resume route
│   │   ├── globals.css     # Design tokens & CSS variables
│   │   ├── layout.tsx      # Global metadata, Schema.org Person JSON-LD, fonts
│   │   ├── not-found.tsx   # Custom 404 page
│   │   ├── page.tsx        # Single-page personal portfolio experience
│   │   ├── robots.ts       # Dynamic robots.txt
│   │   └── sitemap.ts      # Dynamic sitemap.xml
│   ├── components/
│   │   ├── navigation/
│   │   │   ├── Navbar.tsx                # Sticky header with active section tracking
│   │   │   └── Footer.tsx                # 3-column minimal footer with back-to-top
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx           # Clean typography, UK artwork & CTAs
│   │   │   ├── AboutSection.tsx          # Education & background at NIET (8.54 CGPA)
│   │   │   ├── SkillsSection.tsx         # Interactive categorized skill cards
│   │   │   ├── ProjectsSection.tsx       # DCMS, Watt's Off, ATM Logger, IoT Smoke/Fire
│   │   │   ├── ExperienceSection.tsx     # InAmigos, GSSoC 2026, Deloitte Forage Simulation
│   │   │   ├── AchievementsSection.tsx   # SIH 2026 Top 45, IntrusionX, Paytm Build
│   │   │   ├── EducationSection.tsx      # B.Tech CSE at NIET (AKTU), 2025–2029
│   │   │   └── ContactSection.tsx        # Copy email & validated contact form
│   │   └── ui/
│   │       ├── BackToTop.tsx             # Scroll-to-top button
│   │       ├── CustomCursor.tsx          # Subtle desktop cyan reticle cursor
│   │       ├── ProjectDetailModal.tsx    # Architectural deep-dive modal
│   │       ├── SectionHeading.tsx        # Standardized minimal section headings
│   │       ├── TerminalBadge.tsx         # Clean rounded badges
│   │       └── TypographicArtwork.tsx    # Bespoke UK typographic artwork
│   ├── data/
│   │   └── portfolioData.ts              # Single source of truth for portfolio records
│   ├── lib/
│   │   └── utils.ts                      # Tailwind merge utility
│   └── types/
│       └── portfolio.ts                  # TypeScript interfaces
├── next.config.mjs         # Production security headers (CSP, HSTS, Permissions-Policy)
├── tailwind.config.ts      # Tailwind configuration with Cyan Aash tokens
├── tsconfig.json           # Strict TypeScript configuration
└── package.json
```

---

## 🚀 Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run dev server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Production build**:
   ```bash
   npm run build
   npm run start
   ```

---

## 🌐 Production Deployment

The project is continuously deployed to Vercel connected to the GitHub repository:
- Push to branch `main` automatically triggers production builds.
- Production environment variable: `NEXT_PUBLIC_SITE_URL=https://utkarsh-kushwaha-portfolio.vercel.app`
