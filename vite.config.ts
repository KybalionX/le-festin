import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/le-festin/',
  publicDir: '/le-festin/',
  build: {
    outDir: './build',
    emptyOutDir: true,
  }
});
