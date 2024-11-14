import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: false,
  },
  // @ts-expect-error - This is a valid Vite config option
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest-setup.ts',
  },
})
