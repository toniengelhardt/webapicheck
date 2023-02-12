import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
    ],
  },
  shortcuts: {
    'flex-center': 'flex justify-center items-center',
    'bg-base': 'bg-white dark:bg-zinc-900',
    'text-base': 'text-black dark:text-zinc-200',
    'text-dim': 'text-zinc-500 dark:text-zinc-400',
    'border-base': 'border-zinc-300 dark:border-zinc-700',
  },
})
