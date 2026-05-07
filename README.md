# Step by Step Treatment and Recovery Centers

A founder-led, boutique-scale sober living residence in St. Louis, Missouri. Marketing site for Step by Step — built for an investor-grade audience with a discrete Partner With Us page, plus the family-facing pages families and prospective residents need.

**Founder:** Yomi Martin
**Location:** St. Louis, MO
**Niche:** Recovery housing / sober living (boutique-premium register)
**Stack:** Next.js 16 App Router, Tailwind CSS, Plus Jakarta Sans + Inter, framer-motion, static export deployed to Cloudflare Pages

---

## Editing the live site

Every line of marketing copy lives in `content/*.json`. Edit a JSON file, commit, push — Cloudflare auto-rebuilds in ~60 seconds.

| What you want to change | File |
|---|---|
| Homepage hero / sections / trust strip / etc. | [`content/site-content.json`](./content/site-content.json) |
| Inner-page copy (Residence, Method, Founder, Families, Partner) | [`content/site-content.json`](./content/site-content.json) (each has its own block) |
| FAQ entries | [`content/faq.json`](./content/faq.json) |
| Header nav, footer columns, contact lines | [`content/navigation.json`](./content/navigation.json) |
| Brand colors, type sizes, spacing | [`tailwind.config.ts`](./tailwind.config.ts) + [`styles/globals.css`](./styles/globals.css) |
| SEO defaults / `localBusinessSchema` / brand name | [`lib/seo.ts`](./lib/seo.ts) |
| Sitemap entries | [`project-manifest.json`](./project-manifest.json) → `sitemap` |

To push a change:

```bash
git add -A
git commit -m "update: <what changed>"
git push
```

---

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static export → out/
```

---

## What's pending — Phase 2

This site shipped as **Phase 1 — Photography Pending**. Every visual placeholder is a designed, on-brand SVG composition (not stock photos / not gradient rectangles), tagged with a "Photography pending" badge. Replace with real photography to finish the visual identity. Required real photography:

- Modern residence exterior, golden-hour
- Communal interiors (kitchen, dining, living, library)
- Private bedroom, dressed
- Front porch / outdoor space
- Founder portrait (Yomi Martin)
- Neighborhood / street scene

Real values still pending in `project-manifest.json`:

- Final business address (street, ZIP)
- Business phone number
- Domain (currently `stepbysteprecoverystl.com` placeholder)
- Founding year (set to 2026 — adjust if different)
- Accreditation status (CARF, NARR, MO state license)

The inquiry form currently opens the user's email client with a structured draft — no Supabase integration yet. To wire to a real backend (Supabase + Resend), edit `components/InquiryForm.tsx`.

Privacy / Terms pages need legal copy review before publishing — footer links currently 404.

---

## Deploying

The repo is connected to Cloudflare Pages. Pushes to `main` auto-deploy.

Build settings:
- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Node version:** 20 (set via `.nvmrc`)

For a manual deploy:

```bash
npm run build
npx wrangler pages deploy out --project-name=step-by-step-recovery
```

---

## Project structure

```
app/                      Next.js App Router pages (all server components, statically generated)
  layout.tsx              Root layout — fonts, metadata defaults, header + footer
  page.tsx                Homepage — composes 8 section components
  the-residence/          The home is the program
  the-method/             Five-pillar approach
  founder/                Yomi Martin's story
  families/               For families considering placement
  partner/                Investment Opportunity (discrete investor page)
  faq/                    FAQ with FAQPage JSON-LD
  contact/                Inquiry form + direct lines
  sitemap.ts / robots.ts  Auto-generated from manifest
components/
  sections/               Header, Footer, Hero, TrustStrip, Residence, Method, Founder, Why, InvestmentTeaser, Inquiry, PageHero
  Imagery.tsx             SVG placeholder system in brand palette (until real photography arrives)
  InquiryForm.tsx         Contact form (mailto fallback)
  JsonLd.tsx              Server component for inline JSON-LD
content/
  site-content.json       All page copy
  faq.json
  navigation.json
lib/
  seo.ts                  buildMetadata + JSON-LD schema builders
  cn.ts                   className merger
research/
  brand-register-decision.md
  benchmark-report.md
project-manifest.json     Source-of-truth config
prospect-profile.json     Audience tier, brand register, picker signals
style-tokens.json         Color, type, spacing tokens
```

---

Built by Bucher Digital.
