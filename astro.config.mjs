// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  server: {
      port: 8000,
      host: true
    },

  integrations: [react(), svelte()],

  vite: {
    plugins: [tailwindcss()]
  }
});