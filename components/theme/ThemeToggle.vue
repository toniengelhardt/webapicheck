<template>
  <span
    class="flex-center lt-md:w-8 h-8 footer-item "
    @click="onClick(); useTrackEvent('click: Theme switcher');"
  >
    <Icon :name="colorMode.preference" text-1.5rem md:text-1.25rem />
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
