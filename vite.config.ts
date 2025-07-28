import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // base: '/Landing-page/', // This line has been removed
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  server: {
    proxy: {
      // Add proxy rules if needed
    },
    port: 3000,
    open: true
  },
  preview: {
    port: 3000
  }
})