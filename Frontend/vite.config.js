import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      {
        find: /^monaco-editor\/esm\/vs\/(.*)$/,
        replacement: 'monaco-editor/$1',
      },
    ],
  },
})
