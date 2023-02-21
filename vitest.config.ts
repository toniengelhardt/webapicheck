import { defineVitestConfig } from 'nuxt-vitest/config'

// See Elk repo for examples: https://github.com/elk-zone/elk

export default defineVitestConfig({
  define: {
    'process.test': 'true',
  },
})
