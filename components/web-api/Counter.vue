<template>
  <div class="flex items-center text-xs text-zinc-500 dark:text-zinc-400 mr-6">
    <div class="item-counter">{{ supportedCount }}</div>
    <div class="item-divider"></div>
    <div class="item-counter">{{ totalCount }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  supportedCount: number,
  totalCount: number,
}>()
</script>

<style lang="scss" scoped>
.item-counter {
  @apply flex items-center px-1 py-0.25 text-black dark:text-white font-bold bg-zinc-200 dark:bg-zinc-600 rounded-md;
}
.item-divider {
  @apply w-1px h-6 mx-1 bg-zinc-900 dark:bg-zinc-300 rounded-full;
  transform: rotate(10deg);
}
</style>
