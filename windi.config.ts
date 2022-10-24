import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
    ],
  },
})
