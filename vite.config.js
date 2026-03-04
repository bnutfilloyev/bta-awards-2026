import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    headers: {
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['gsap', 'lenis'],
        }
      }
    }
  }
})
