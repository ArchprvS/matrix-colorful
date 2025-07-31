import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      fallback: '404.html' // Dla SPA, obsługa routingu
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/matrix-colorful' : ''
    }
  }
};

export default config;