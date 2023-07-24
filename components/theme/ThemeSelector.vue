<script setup lang="ts">
const route = useRoute()
const colorMode = useColorMode()

function selectTheme(theme: 'light' | 'dark' | 'system') {
  colorMode.preference = theme
  useTrackEvent('click: Select theme', { props: { theme, route: route.name?.toString() || 'N/A' } })
}
</script>

<template>
  <div flex-center border-base cursor-pointer>
    <ClientOnly>
      <div class="theme-option" :class="{ active: colorMode.preference === 'light' }" @click="selectTheme('light')">
        <Icon name="light" />
      </div>
      <div class="theme-option" :class="{ active: colorMode.preference === 'system' }" @click="selectTheme('system')">
        <Icon name="system" />
      </div>
      <div class="theme-option" :class="{ active: colorMode.preference === 'dark' }" @click="selectTheme('dark')">
        <Icon name="dark" />
      </div>
    </ClientOnly>
  </div>
</template>

<style lang="postcss" scoped>
.theme-option {
  @apply flex-center w-8 h-8 md:(w-6 h-6) rounded-full not-first:ml-1;
  &.active {
    @apply bg-element;
    .icon {
      @apply text-base;
    }
  }
  .icon {
    @apply w-5 h-5 md:(h-3.5 w-3.5) text-dim;
  }
}
</style>
