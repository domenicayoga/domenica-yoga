# Domenica Yoga — Astro v0.2

Production-oriented static Astro project with EN / FR / UA homepages.

## Local preview

```bash
npm install
npm run dev
```

## Build

```bash
SITE_URL=https://YOUR-DOMAIN.example npm run build
```

## Cloudflare Workers deployment

The project is configured for Cloudflare Workers Static Assets.

```bash
npm install
SITE_URL=https://YOUR-DOMAIN.example npm run build
npx wrangler login
npx wrangler deploy
```

For Git-based deployment in Cloudflare Workers Builds:
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Environment variable: `SITE_URL=https://YOUR-DOMAIN`

## Fonts

The CSS is prepared for Favorit (`FavoritC`, `Favorit Book`) but font binaries are intentionally not included in this package. Add your licensed webfont files under `public/fonts/` and add the corresponding `@font-face` declarations in `src/styles/global.css` before production.

## Next content steps
- replace placeholder testimonial quotes with real client reviews
- add final Instagram and Telegram URLs
- build About / Group / 1:1 / Course / Resources pages
- add French legal pages (Mentions légales + privacy)
