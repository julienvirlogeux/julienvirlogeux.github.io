// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  // 1. Base URL (CRITICAL for GitHub Pages)
  // If your repo is "my-website", this must be '/my-website/'
  base: '/', 

  // 3. Build Settings (Optional)
  build: {
    outDir: 'dist',   // Where the files go (default is 'dist')
  }
})