import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL || 'https://example.com';
const noIndexPaths = [
  '/legal-information/', '/privacy-policy/', '/terms-of-service/',
  '/informations-legales/', '/politique-confidentialite/', '/conditions-de-service/',
  '/yurydychna-informatsiia/', '/polityka-konfidentsiinosti/', '/umovy-nadannia-posluh/'
];

export default defineConfig({
  site,
  output: 'static',
  integrations: [sitemap({
    filter: (page) => !page.endsWith('/404/') && !noIndexPaths.some((path) => page.includes(path))
  })],
  trailingSlash: 'always'
});
