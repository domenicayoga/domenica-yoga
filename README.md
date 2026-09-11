# Domenica Yoga — Astro v0.4

Production-oriented static Astro site for **domenicayoga.com** with EN / FR / UA versions.

## v0.4
- refreshed Home with Domenica's new photo set
- refreshed About photography
- real product pages in all 3 languages:
  - online group training
  - 1:1 sessions
  - 8-week recorded course (coming soon)
- direct WhatsApp CTAs for EN / FR
- direct Telegram CTAs for UA
- product-specific SEO metadata, canonicals, hreflang and Service structured data
- product pricing, schedule, FAQs and contact CTAs
- no lead form: contact is direct through messaging apps

## Deploy
Cloudflare Workers build settings remain:
- Build: `npm run build`
- Deploy: `npx wrangler deploy`
- Build variable: `SITE_URL=https://domenicayoga.com`

Upload the update files to the root of the GitHub repository and commit. Cloudflare will rebuild automatically.
