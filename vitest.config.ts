// vitest.config.ts

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { alias } from './aliases'

export default defineConfig({
  plugins: [vue()],
  test: {
    alias,
  },
})
