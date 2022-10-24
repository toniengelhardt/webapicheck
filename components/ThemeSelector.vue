<template>
  <span
    class="flex justify-center items-center w-8 h-8 bg-zinc-100 text-black dark:(bg-zinc-800 text-white) cursor-pointer rounded-full hover:(bg-zinc-200 dark:bg-zinc-700)"
    @click="onClick()"
  >
    <ClientOnly>
      <Icon :name="colorMode.preference" size="1.1rem" />
    </ClientOnly>
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
