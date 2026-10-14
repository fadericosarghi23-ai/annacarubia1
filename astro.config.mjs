import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Dominio canonico: tenerlo identico a `dominio` in src/data/site.ts.
// [[DA COMPILARE: dominio canonico del cliente, es. https://www.studio.it]]
// Su Netlify la variabile URL contiene l'indirizzo del sito: canonical, OG e sitemap la usano.
export const SITE_URL = process.env.URL ?? 'https://esempio.it';

export default defineConfig({
  site: SITE_URL,
  // 'ignore': i link restano con lo slash finale (build a cartelle), ma il dev serve anche
  // le rotte con estensione (segnaposto .svg, robots.txt, llms.txt) senza slash.
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  server: { port: 4840 },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/grazie/') && !page.includes('/404'),
    }),
  ],
});
