import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [Vue()],
  base: './',
  server: {
    port: 5173,
    strictPort: true,
    watch: { ignored: ['**/.mygo/**', '**/build/**'] },
  },
})
