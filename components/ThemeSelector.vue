<template>
  <span
    class="flex-center lt-md:(w-8 h-8) footer-link "
    @click="onClick(); $plausible.trackEvent('click: Theme switcher');"
  >
    <ClientOnly>
      <Icon :name="colorMode.preference" size="1.25rem" />
    </ClientOnly>
    <span class="ml-1.5 lt-md:hidden">
      Theme
    </span>
  </span>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

function onClick() {
  let newTheme
  switch (colorMode.preference) {
    case 'light':
      newTheme = 'dark'
      break
    case 'dark':
      newTheme = 'system'
      break
    default:
      newTheme = 'light'
      break
  }
  colorMode.preference = newTheme
}
</script>
