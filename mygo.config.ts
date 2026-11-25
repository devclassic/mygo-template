import { defineConfig } from 'mygo-cli'

export default defineConfig({
  name: 'hello',
  identifier: 'ink.epoint.hello',
  version: '0.1.0',
  devUrl: 'http://localhost:5173',
  devCommand: 'bun run dev:web',
  buildCommand: 'bun run build:web',
  frontendDist: 'dist',
  bindings: 'src/bindings.ts',
  out: 'build',
})
