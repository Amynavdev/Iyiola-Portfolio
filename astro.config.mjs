import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // SITE and BASE are only set for the temporary GitHub Pages preview.
  site: process.env.SITE || 'https://iyiolaoluwaferanmi.com',
  base: process.env.BASE || '/',
  integrations: [react(), sitemap()],
  vite: { plugins: [tailwindcss()] },
  build: { inlineStylesheets: 'auto' },
  prefetch: { prefetchAll: true },
});
