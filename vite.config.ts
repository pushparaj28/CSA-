import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig, loadEnv } from 'vite';

// Help Vite find all HTML files for the build
function getEntries(dir, entries = {}) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.lstatSync(filePath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== 'dist' && file !== 'public') {
        getEntries(filePath, entries);
      }
    } else if (file.endsWith('.html')) {
      // Create a unique key for each HTML file
      const relativePath = path.relative(__dirname, filePath);
      const entryName = relativePath.replace(/\.html$/, '').replace(/[\\\/]/g, '_');
      entries[entryName || 'main'] = path.resolve(__dirname, relativePath);
    }
  });
  return entries;
}

const htmlEntries = getEntries(__dirname);

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: htmlEntries,
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
