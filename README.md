# Domenica Yoga — Astro v0.8

Production-oriented static Astro website for `domenicayoga.com` with EN / FR / UA versions.

## v0.8

- three SEO resource articles in EN / FR / UA
- direct PubMed research references
- real Resources library with article links
- new workday/neck article photography
- Article structured data, canonical URLs and hreflang alternates
- compact “How to start” section on the homepage
- course waitlist CTA with a prefilled WhatsApp message in EN / FR
- all v0.7 legal/privacy/terms pages retained

## Local preview

```bash
npm install
npm run dev
```

## Build

```bash
SITE_URL=https://domenicayoga.com npm run build
```

## Cloudflare Workers deployment

```bash
npm install
SITE_URL=https://domenicayoga.com npm run build
npx wrangler deploy
```

For Git-based Workers Builds:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Environment variable: `SITE_URL=https://domenicayoga.com`
