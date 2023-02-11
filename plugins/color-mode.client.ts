import colors from 'windicss/colors'

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
          ? colors.zinc[900]
          : 'white'
      ),
    }],
  })
})
