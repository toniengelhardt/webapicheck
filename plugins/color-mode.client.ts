import { theme } from '@unocss/preset-mini'

export default defineNuxtPlugin(() => {
  // Adjust theme-color dynamically based on color mode.
  // From https://github.com/elk-zone/elk
  const colorMode = useColorMode()
  useHead({
    meta: [{
      id: 'theme-color',
      name: 'theme-color',
      content: () => (
        colorMode.value === 'dark'
          ? (theme.colors as any).zinc[900]
          : (theme.colors as any).zinc[50]
      ),
    }],
  })
})
