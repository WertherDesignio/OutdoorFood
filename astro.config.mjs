// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const base = process.env.BASE_PATH ?? '/';

// https://astro.build/config
export default defineConfig({
  base,
  site: process.env.SITE_URL,
  vite: {
    plugins: [tailwindcss()],
  },
});
