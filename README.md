# Domenica Yoga — Astro v0.3

Production-oriented static Astro site for Domenica Yoga with English, French and Ukrainian versions.

## v0.3 adds
- full multilingual About Domenica page
- favicon + Apple touch icon + web manifest
- 1200×630 Open Graph / social preview image
- stronger canonical/hreflang/OG/Twitter metadata
- WebSite + Person structured data
- robots.txt + sitemap reference
- Instagram link wired in
- shared header/footer components

## Routes
- `/en/`, `/fr/`, `/ua/`
- `/en/about/`
- `/fr/a-propos/`
- `/ua/pro-mene/`

## Build / Cloudflare Workers
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Environment variable: `SITE_URL=https://domenicayoga.com`

## Important before final launch
- replace the Telegram placeholder in `src/data/site.ts` with the exact Telegram URL
- replace placeholder testimonials with verified client reviews
- add final legal/privacy pages
- add Group / 1:1 / Course / Resources pages

Favorit font files are intentionally not included in this distributable package. The CSS retains the Favorit family name with system fallbacks.
