import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        meuteHathi: resolve(__dirname, 'meute-hathi.html'),
        galerie: resolve(__dirname, 'galerie.html'),
      },
    },
  },
})