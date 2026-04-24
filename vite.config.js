import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Relative asset paths prevent GitHub Pages base-path mismatches.
  base: './',
  plugins: [react()],
})
