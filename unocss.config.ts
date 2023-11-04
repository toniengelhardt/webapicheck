import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  safelist: [
    'hidden',
  ],
  shortcuts: {
    'flex-center': 'flex justify-center items-center',
    'bg-base': 'bg-white dark:bg-zinc-900',
    'bg-surface': 'bg-zinc-100 dark:bg-zinc-800:50',
    'bg-element': 'bg-zinc-200:50 dark:bg-zinc-700:50',
    'bg-element-active': 'bg-zinc-200 dark:bg-zinc-700',
    'text-base': 'text-black dark:text-zinc-200',
    'text-dim': 'text-zinc-500 dark:text-zinc-400',
    'text-faint': 'text-zinc-400 dark:text-zinc-500',
    'text-available': 'text-lime-700 dark:text-lime-300',
    'text-unavailable': 'text-rose-600 dark:text-rose-500',
    'text-experimental': 'text-purple-800 dark:text-purple-300',
    'border-base': 'border-zinc-300 dark:border-zinc-700',
    'border-available': 'border-lime-700 dark:border-lime-300',
    'border-unavailable': 'border-rose-600 border-rose-500',
    'border-experimental': 'border-purple-800 dark:border-purple-300',
    'btn': 'inline-flex justify-center items-center py-2 px-4 font-bold rounded-md cursor-pointer select-none box-border',
    'btn-xs': 'btn py-1 px-2 text-xs rounded',
    'btn-sm': 'btn py-1.5 px-3 text-sm',
    'btn-default': 'btn text-zinc-100 bg-zinc-800 hover:(text-white bg-zinc-900) dark:(bg-white text-zinc-900 hover:text-black)',
    'btn-subtle': 'btn bg-element hover:bg-element-active',
    'btn-outline': 'btn bg-transparent border-solid border-2 border-zinc-200 hover:border-zinc-300 dark:(bg-transparent border-zinc-700 hover:border-zinc-600)',
    'link': 'inline-block font-semibold underline decoration-1 underline-offset-2 decoration-sky-500 dark:decoration-sky-400',
    'footer-item': 'flex-center text-base hover:(text-zinc-700 dark:text-white) cursor-pointer',
    'code-inline': 'font-mono px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded',
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
