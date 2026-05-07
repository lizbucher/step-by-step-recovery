# Brand Register Decision — Step by Step Treatment and Recovery Centers

## Decision

**`brand_register: BOUTIQUE_PREMIUM_AFFLUENT`**

## Rationale

Said the brand name out loud. "Step by Step Treatment and Recovery Centers" is *not* a candy shop, daycare, neighborhood handyman, or law firm. The brand-name patterns in `brand-register-detection.md` don't fire any forced register, so the decision falls to voice + audience tier.

### Inputs that determined the call

1. **Audience tier — affluent professional, primary**
   - The site's primary audience is **investors** (the founder, Yomi Martin, will share this site with potential investors as his pitch credibility piece).
   - Secondary audience is families with the means to choose a private-pay sober living residence in St. Louis (annual cost $24K–$60K+ depending on amenity tier).
   - Both audiences are evaluating *capital allocation* — into the business or into a placement decision. Both expect the visual language of a premium hospitality brand, not a state-funded halfway house.

2. **Voice signal — "premium," "modern home," "high-end," "investor-grade"**
   - Founder explicitly framed the brief as "very high-end," "modern home," "what's going to draw people."
   - Reference set the founder pointed to includes Rize OC and Serenity Lodge Lake Arrowhead — both premium-private-pay aesthetics. Harris House and Althea Project are included as nonprofit floor references, not as the desired tier.

3. **Brand-name structure — institutional, not founder-warm**
   - "Centers" (plural) signals operational ambition / multi-property growth — investor-relevant.
   - "Treatment and Recovery" — clinical credibility, not "house" / "family" warmth.

### What this decision overrides

- Niche default for `recovery-coach` is "warm/grounded sage palette." We retain the calm/grounded principle but uplift the palette + typography to read **premium boutique residence** rather than 1:1 coach.
- Niche default font system (Cormorant / Fraunces serif H1) is **explicitly banned** for the recovery niche per `typography-2026.md` (serif on recovery = vintage signal). We use sans.

## Typography (per 2026 matrix × `BOUTIQUE_PREMIUM_AFFLUENT`)

The strict matrix calls for Cabinet Grotesk 800 OR Fraunces 600. Fraunces is banned on recovery (vintage risk on a clinically-coded niche per typography-2026.md §Tier 3). Cabinet Grotesk is paid/Fontshare-hosted; to keep build velocity high and stay in Google Fonts territory, we substitute with **Plus Jakarta Sans (display, 700–800) + Inter (body, 400–600)** — Tier 1 Premium-Modern, the documented "when in doubt ship this" pairing.

- Display: Plus Jakarta Sans 700/800
- Body: Inter 400/500/600
- Eyebrow: Inter 600 with +0.08em tracking, uppercase, 13px
- H1 sizing: clamp(2.75rem, 6vw, 5.5rem), tracking -0.025em, leading 1.05

## Palette

Editorial single-tone (deep forest sage) + 1 accent (warm clay), on a warm ivory base. Reads boutique-hotel / Hazelden-Betty-Ford / Caron — *not* clinical, not nonprofit-earnest, not wellness-saccharine.

| Role | Hex | Use |
|------|-----|-----|
| Background base | `#F4F1EB` | Warm ivory page bg |
| Surface | `#FFFFFF` | Cards, surfaces above bg |
| Surface-elevated | `#FBF8F3` | Lighter than bg for subtle layering |
| Text | `#1C1F1B` | Body and H1 text |
| Text-muted | `#6B6F66` | Body de-emphasized, captions, eyebrow when not on accent |
| Primary | `#2F4A3A` | Deep forest sage — buttons, links, brand accents |
| Primary-hover | `#1F3528` | One token darker |
| Accent | `#B8623E` | Warm clay — sparingly, on highlight words / trust elements / one stat |
| Accent-hover | `#94492C` | One token darker |
| Border | `#E0DBD0` | Soft taupe |
| Section-dark | `#1C2620` | Anchor section bg (founder, investment) |

This palette retains the recovery-niche calm but reframes it as boutique-residence (warm ivory + forest + clay) rather than clinic (white + blue + grey). It will not look like Harris House (institutional navy) or like a wellness spa (lavender/teal).

## Photography direction (drives the photo prompts in Deliverable 4)

Real photography of:
- Modern home exterior — architectural, golden-hour, warm
- Interiors — natural light, designed (not "facility"), kitchen/dining/communal spaces, single bedrooms with hotel-quality bedding
- Residential St. Louis neighborhood — tree-lined street, brick / mid-century modern
- Founder Yomi Martin — environmental portrait, on a porch / in the home, warm, looking forward (not the corporate-headshot pose)

Avoid:
- Stock "people in recovery" photography (silhouettes, mountain summits, hands)
- Group-therapy circles
- Clinical white-coat imagery
- Anything that telegraphs "halfway house" or "treatment facility"

If real photography isn't yet shot, the build ships with the **PHASE 1 — PHOTOGRAPHY PENDING** banner and uses considered placeholder imagery (architectural unsplash photography in the right palette). This is documented in `mockup-concept.md`.

## Anti-patterns to enforce on this build

- No serif display fonts (Fraunces / Playfair / DM Serif) — banned for recovery niche
- No clinical white background (warm ivory only)
- No "before/after" transformation framing — unethical in mental health context
- No countdown timers / urgency scarcity copy — banned in recovery niche
- No stock people-in-distress imagery
- No emojis anywhere in the JSX
- Hero must follow the §1 hard caps: max 2 backdrop blur blobs, 0 confetti dots, max 1 H1 highlight color, max 4 trust-strip items single line, max 1 hero-only animation
