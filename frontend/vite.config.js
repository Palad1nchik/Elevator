import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite config.
// - During local dev, /api is proxied to the Go backend so the frontend and
//   backend can run on different ports without CORS headaches.
// - In production the build (dist/) is baked into the Docker image and served
//   by the Go backend itself (backend/internal/server/static.go), so the site
//   and /api share one origin.
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    proxy: {
      '/api': {
        target: process.env.VITE_API_PROXY || 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
