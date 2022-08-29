/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import * as path from 'path';
import inject from '@rollup/plugin-inject';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import vuetify from 'vite-plugin-vuetify';

export default defineConfig({
  publicDir: 'public',
  build: {
    target: 'es2019',
    outDir: 'dist',
    emptyOutDir: false,
    sourcemap: true,
    rollupOptions: {
      plugins: [inject({ Buffer: ['buffer', 'Buffer'] })],
    },
  },
  resolve: {
    alias: {
      path: 'path-browserify',
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    devSourcemap: true,
  },
  plugins: [vue(), vuetify({ autoImport: true })],
  server: {
    port: 8080,
    watch: {
      usePolling: true,
    },
  },
  define: { 'process.env': {} },
});
