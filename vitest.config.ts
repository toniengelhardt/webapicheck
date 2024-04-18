import { defineVitestConfig } from '@nuxt/test-utils/config'

// See Elk repo for examples: https://github.com/elk-zone/elk

export default defineVitestConfig({
  define: {
    'process.test': 'true',
  },
})
