// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  // 1. Base URL (CRITICAL for GitHub Pages)
  // If your repo is "my-website", this must be '/my-website/'
  base: '/', 

  // 2. Server Settings (Optional)
  server: {
    port: 3000,       // You can force it to use port 3000
    open: true,       // Open browser automatically when you start
  },

  // 3. Build Settings (Optional)
  build: {
    outDir: 'dist',   // Where the files go (default is 'dist')
  }
})