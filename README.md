# UTKARSH KUSHWAHA — DIGITAL FIELD NOTES

> An editorial developer portfolio and empirical systems archive engineered with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Three.js WebGL.

---

## 🛰️ Creative Vision & Concept

**Digital Field Notes** treats software development not as passive resume bullet points, but as empirical field investigations. The experience merges:
- **Editorial Typography & Asymmetric Grid** (`Space Grotesk`, `Inter`, `DM Mono`)
- **Dark Grey + Lime Green Color Palette** (`#0B0E0C`, `#121713`, `#C7F36B`)
- **Interactive 3D Constellation & Orbital Telemetry** (Three.js WebGL particle physics with mouse parallax and damping)
- **Experimental Feature: Interactive 3D Developer Cosmos** (Inspect projects, skills, milestones, and experience as celestial nodes in 3D space)
- **Keyboard-First Command Palette** (`⌘K` / `Ctrl+K`) for rapid indexed search
- **Procedural Audio Synthesizer** (Web Audio API sound feedback, muteable and persistent)
- **Zero-fluff Technical Verification** (Direct project specifications, architectural flows, and verifiable hackathon highlights)

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Framework** | Next.js 14 (App Router, Server Components & Static Site Generation) |
| **Language** | TypeScript 5 (Strict type checking) |
| **Styling** | Tailwind CSS 3 (Custom design tokens, brutalist corner brackets, noise patterns) |
| **3D WebGL Graphics** | Three.js (Procedural particle field, orbital rings, Raycasting interaction) |
| **Icons & Media** | Lucide React |
| **Sound Engine** | Web Audio API (Synthesized oscillators, zero external audio assets) |
| **SEO & Schemas** | JSON-LD Person & WebSite Schema, Dynamic XML Sitemap, Robots.txt |
| **Security** | Strict CSP, HSTS, X-Frame-Options, anti-spam honeypot, rate limiting |

---

## 📂 Project Architecture

```
UTKARSH_Portfolio/
├── public/                 # Static assets & icons
├── src/
│   ├── app/
│   │   ├── api/contact/    # Validated contact dispatch endpoint (Rate-limited, anti-spam honeypot)
│   │   ├── resume/         # Print-ready formal resume page (with PDF print stylesheet)
│   │   ├── globals.css     # Design tokens, corner-brackets, scrollbars & animations
│   │   ├── layout.tsx      # SEO metadata, OpenGraph, JSON-LD Person schema & fonts
│   │   ├── not-found.tsx   # Custom 404 field record page
│   │   ├── page.tsx        # Single-page editorial field notes experience
│   │   ├── robots.ts       # Dynamic robots.txt
│   │   └── sitemap.ts      # Dynamic sitemap.xml
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── HeroConstellation.tsx     # Three.js 3D particle constellation with mouse damping
│   │   │   └── DeveloperCosmosModal.tsx  # Full-screen interactive 3D solar universe
│   │   ├── navigation/
│   │   │   ├── Navbar.tsx                # Fixed editorial header with 3D Cosmos & Command triggers
│   │   │   ├── CommandPalette.tsx        # Cmd+K fuzzy search & quick action launcher
│   │   │   └── Footer.tsx                # Terminal metadata, coordinates & quick index
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx           # Signature hero, professional identity & 3D canvas
│   │   │   ├── AboutSection.tsx          # Educational ethos, NIET AKTU background (8.54 CGPA)
│   │   │   ├── SkillsSection.tsx         # Filterable skill matrix without fabricated percentages
│   │   │   ├── ProjectsSection.tsx       # DCMS, Watt's Off, ATM Logger, IoT Smoke/Fire
│   │   │   ├── ExperienceSection.tsx     # InAmigos, GSSoC 2026, Deloitte Forage Simulation
│   │   │   ├── AchievementsSection.tsx   # SIH 2026 Top 45, IntrusionX, Paytm Build, Audit Flag
│   │   │   ├── EducationSection.tsx      # B.Tech CSE at NIET, 8.54 CGPA, academic timeline
│   │   │   └── ContactSection.tsx        # Direct copy email, verified mailto, and contact form
│   │   └── ui/
│   │       ├── BackToTop.tsx             # Scroll-to-top button
│   │       ├── CustomCursor.tsx          # Dual-ring desktop reticle cursor
│   │       ├── ProjectDetailModal.tsx    # Architectural deep-dive modal
│   │       ├── SectionHeading.tsx        # Standardized editorial section typography
│   │       ├── SoundToggle.tsx           # Interface audio toggle
│   │       └── TerminalBadge.tsx         # Reusable technical badges
│   ├── data/
│   │   └── portfolioData.ts              # Single source of truth for all projects and history
│   ├── lib/
│   │   ├── sound.ts                      # Procedural Web Audio API sound synthesizer
│   │   └── utils.ts                      # Tailwind merge utility
│   └── types/
│       └── portfolio.ts                  # TypeScript data interfaces
├── next.config.mjs         # Production security headers (CSP, HSTS, Permissions-Policy)
├── tailwind.config.ts      # Dark grey + lime green design tokens
├── tsconfig.json           # Strict TypeScript configuration
└── package.json
```

---

## 🚀 Local Development Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build and test for production**:
   ```bash
   npm run build
   npm run start
   ```

---

## 🌐 Free Deployment to Vercel (Step-by-Step)

The website is fully configured for zero-cost deployment on **Vercel's Free Hobby Tier**.

### Step 1: Push Code to GitHub
Initialize git and push to your GitHub account:
```bash
git init
git add .
git commit -m "feat: complete Utkarsh Kushwaha Digital Field Notes portfolio"
git branch -M main
git remote add origin https://github.com/utkarshkushwaha159/<repo-name>.git
git push -u origin main
```

### Step 2: Connect to Vercel
1. Go to [https://vercel.com](https://vercel.com) and log in with your GitHub account (`utkarshkushwaha159`).
2. Click **"Add New..."** -> **"Project"**.
3. Import the repository you just created.
4. Under **Framework Preset**, Vercel automatically selects **Next.js**.
5. Leave the Root Directory as `./`.
6. (Optional) In **Environment Variables**, set:
   - `NEXT_PUBLIC_SITE_URL`: Your generated Vercel domain (e.g. `https://utkarsh-portfolio.vercel.app`)
7. Click **"Deploy"**.

Your website will be live worldwide in under 60 seconds with free SSL/HTTPS, global CDN edge caching, and automated deployments whenever you push to GitHub!

---

## 🔍 Google Search Console & SEO Verification

The project is built specifically to rank for target search queries:
- *Utkarsh Kushwaha*
- *Utkarsh Kushwaha Portfolio*
- *Utkarsh Kushwaha Developer*
- *Utkarsh Kushwaha NIET*
- *Utkarsh Kushwaha Software Developer*

### Verification Steps:
1. Open [Google Search Console](https://search.google.com/search-console).
2. Choose **URL Prefix** and enter your deployed URL (e.g. `https://utkarsh-portfolio.vercel.app`).
3. Select **HTML Tag** verification method and copy the meta tag.
4. Paste the tag in `src/app/layout.tsx` inside the `<head>` section, or add it in Vercel environment variables.
5. In Search Console, navigate to **Sitemaps** and submit:
   ```
   https://<your-vercel-domain>/sitemap.xml
   ```
   Google will automatically index your homepage, projects, and formal resume route.

---

## 📋 Hackathon Finalist Discrepancy Note

> **Audit Flag Reconciliation:**
> - Resume headline specifies: **3× Hackathon Finalist**
> - LinkedIn summary specifies: **Four-time Hackathon Finalist**
> - Primary documented competitions:
>   1. **Smart India Hackathon 2026 (SIH)** — Selected Team (Top 45 / 350+ teams at NIET Internal Selection)
>   2. **IntrusionX Cybersecurity Hackathon** — Finalist & Multi-track Competitor
>   3. **Paytm Build for India AI Hackathon** — Finalist & AI Solutions Architect
> 
> *A dedicated reconciliation callout is rendered in the Achievements section to ensure 100% academic transparency and recruiter trust.*

---

## 🛡️ Security & Performance Highlights

- **Content Security Policy (CSP)**: Blocks cross-site scripting and unauthorized inline injections.
- **Strict-Transport-Security (HSTS)**: Enforces HTTPS connections with preloading.
- **No API Keys in Frontend**: Zero secrets exposed in bundle.
- **Server-Side Input Sanitization**: Rate-limited `/api/contact` route preventing flood attacks.
- **Honeypot Anti-Spam**: Invisible bot trap rejecting automated form submissions.
- **Reduced Motion Support**: Automatically disables 3D particle motion when requested by the OS.
- **WebGL Fallback**: Gracefully renders high-fidelity telemetry matrix if WebGL is unavailable.
