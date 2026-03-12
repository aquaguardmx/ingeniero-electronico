// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';



// https://astro.build/config
export default defineConfig({
  site: 'https://GerardoPz.github.io',
  base: '/ingeniero-electronico',

  vite: {
    plugins: [tailwindcss()],
  },
});
