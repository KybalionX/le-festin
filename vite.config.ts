import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/le-festin/',
  publicDir: '/public/',
  build: {
    outDir: './build',
    emptyOutDir: true,
  }
});
