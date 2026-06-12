// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://tulio.org',
  trailingSlash: 'always',
  prefetch: {
    prefetchAll: true,
  },
  server: {
    host: true,
    port: 8000,
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
