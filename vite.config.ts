import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: false,
  },

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest-setup.ts',
  },
})
