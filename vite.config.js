import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Use relative paths for assets to work correctly regardless of GitHub repo name
  server: {
    port: 3000,
    open: true
  }
})
