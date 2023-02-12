import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
    ],
  },
  plugins: [
    // Make colors available as css vars, e.g. var(--color-gray-200):
    // https://gist.github.com/Merott/d2a19b32db07565e94f10d13d11a8574
    function ({ addBase, theme }: { addBase: any; theme: any }) {
      function extractColorVars(colorObj: any, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey]
          const cssVariable = colorKey === 'DEFAULT' ? `--color${colorGroup}` : `--color${colorGroup}-${colorKey}`
          const newVars: any = typeof value === 'string'
            ? { [cssVariable]: value }
            : extractColorVars(value, `-${colorKey}`)
          return { ...vars, ...newVars }
        }, {})
      }
      addBase({
        ':root': extractColorVars(theme('colors')),
      })
    },
  ],
  shortcuts: {
    'flex-center': 'flex justify-center items-center',
    'bg-base': 'bg-white dark:bg-zinc-900',
    'text-default': 'text-black dark:text-zinc-200',
    'text-dim': 'text-zinc-500 dark:text-zinc-400',
    'border-default': 'border-zinc-300 dark:border-zinc-700',
  },
})
