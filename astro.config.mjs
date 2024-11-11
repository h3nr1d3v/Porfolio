import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import compress from 'astro-compress';

export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    compress({
      CSS: true,
      HTML: true,
      JavaScript: true,
      Image: {
        quality: 80,
        format: ['avif', 'webp']
      }
    })
  ],
  vite: {
    build: {
      minify: 'terser',
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['react', 'react-dom'],
            'icons': ['@fortawesome/fontawesome-free']
          }
        }
      }
    },
    ssr: {
      noExternal: ['@fortawesome/fontawesome-free']
    }
  },
  output: 'static',
  compressHTML: true
});