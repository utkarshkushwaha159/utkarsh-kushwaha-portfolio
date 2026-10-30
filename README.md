# Utkarsh Kushwaha — Professional Portfolio

> A modern, premium developer portfolio engineered with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

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
- **Design Philosophy**: Premium Minimalism, Modern Editorial Layouts, Clean Whitespace, and Responsive Performance.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Framework** | Next.js 14 (App Router, React Server Components & Static Site Generation) |
| **Language** | TypeScript 5 (Strict type checking) |
| **Styling** | Tailwind CSS 3 with Centralized CSS Custom Properties |
| **Icons** | Lucide React |
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
│   │   │   ├── HeroSection.tsx           # Clean typography, 2D code card & CTAs
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
│   │       └── TerminalBadge.tsx         # Clean rounded badges
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

## 🌐 Deploy to Vercel (Free)

1. Push your repository to GitHub (`utkarshkushwaha159`).
2. Log in to [vercel.com](https://vercel.com) and import the repository.
3. Framework Preset: **Next.js** (detected automatically).
4. Root Directory: `./`
5. Click **Deploy**. Your portfolio will be live with free global CDN and HTTPS.
