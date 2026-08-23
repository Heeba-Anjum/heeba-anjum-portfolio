# Heeba Anjum Hosur — Product Manager Portfolio

A modern, recruiter-friendly portfolio built with **React + Vite + Tailwind CSS**, generated
entirely from the content in Heeba Anjum Hosur's resume. No invented experience, skills, or
placeholder text — every line of copy traces back to `src/data/resumeData.js`.

## Recommended content order (and why)

The section order below is optimized for how recruiters actually scan a page (top-to-bottom,
first 10–15 seconds decide a "keep reading" vs "bounce"):

1. **Hero** – Name, role, and the one-line hook (research-first PM, ships features) so a
   recruiter knows in 5 seconds who this is and what she's looking for.
2. **About** – Expands the hook into the full professional summary and current focus areas.
3. **Skills** – A fast, scannable tool/skill inventory recruiters filter on immediately.
4. **Experience** – The core proof: real ownership at Ultimez Technology.
5. **Projects** – Self-initiated case studies that show initiative beyond the day job —
   especially valuable since her experience is still early-career.
6. **Education** – Credentials, placed after the "meat" since PM hiring weighs experience
   and judgment over degree pedigree.
7. **Certifications** – Tool proficiency, reinforcing Skills with more depth.
8. **Resume Download** – A conversion point once trust is built, giving recruiters a
   portable, ATS-friendly copy.
9. **Contact** – Clear final call-to-action.
10. **Footer** – Quick links and back-to-top.

This matches the order you requested — it was already the right structure for recruiter impact.

## Tech stack

- React 18 + Vite 5
- Tailwind CSS 3 (custom design tokens: ink/paper palettes, signal-amber/blue/green accents)
- Framer Motion for scroll/entry animations
- Class-based dark/light mode with `localStorage` persistence + system preference detection
- Semantic HTML, `aria-*` labels, visible focus states, `prefers-reduced-motion` support
- SEO: meta description/keywords, Open Graph, Twitter card, JSON-LD `Person` schema, `robots.txt`

## Project structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── resume/
│       └── Heeba-Anjum-Hosur-Resume.pdf   ← add your PDF here (see note below)
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── context/
    │   └── ThemeContext.jsx
    ├── data/
    │   └── resumeData.js        ← all resume content lives here
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Experience.jsx
        ├── Projects.jsx
        ├── Education.jsx
        ├── Certifications.jsx
        ├── ResumeDownload.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## ⚠️ One manual step required

The **Resume Download** button links to `/resume/Heeba-Anjum-Hosur-Resume.pdf`. Add your actual
resume PDF at `public/resume/Heeba-Anjum-Hosur-Resume.pdf` (exact filename) before deploying —
no resume file was provided to generate one, and no placeholder file is created in its place.

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Add your resume PDF
#    public/resume/Heeba-Anjum-Hosur-Resume.pdf

# 3. Start the dev server
npm run dev
# → http://localhost:5173

# 4. Build for production
npm run build

# 5. Preview the production build locally
npm run preview
```

## Editing content

All resume-derived content lives in one file: `src/data/resumeData.js`. Update your summary,
skills, experience, projects, or education there — every component reads from it, so there's
no need to touch component files for content changes.

## Deploying to Vercel

**Option A — Vercel CLI**
```bash
npm install -g vercel
vercel login
vercel        # first deploy, follow prompts (framework preset: Vite)
vercel --prod # promote to production
```

**Option B — Git + Vercel dashboard**
1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects the Vite framework preset:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. Every push to the main branch redeploys automatically.

`vercel.json` is already included with an SPA rewrite rule so client-side anchor navigation
works correctly on refresh/direct links.

## Accessibility & SEO checklist

- Semantic landmarks (`header`, `main`, `section`, `footer`) and one `h1` per page
- Keyboard-navigable nav with visible focus rings
- Color contrast tuned per theme (ink/paper palettes)
- `prefers-reduced-motion` respected — animations are disabled for users who request it
- Descriptive `aria-label`s on the theme toggle and mobile menu button
- Meta description, Open Graph/Twitter tags, and JSON-LD structured data for search engines
