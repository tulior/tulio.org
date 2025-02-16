// @ts-check
import {defineConfig} from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import svelte from '@astrojs/svelte';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://tulio.org',
    server: {
        port: 8000,
        host: true
    },

    integrations: [react(), svelte(), sitemap()],

    vite: {
        plugins: [tailwindcss()]
    }
});