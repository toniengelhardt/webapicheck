<template>
  <span class="flex justify-center items-center w-8 h-8 bg-neutral-100 text-black dark:(bg-neutral-800 text-white) cursor-pointer rounded-full" @click="onClick()">
    <Icon :name="colorMode.preference" size="1.1rem" />
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
