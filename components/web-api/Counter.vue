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
  @apply flex items-center text-black dark:text-white font-bold;
}
.item-divider {
  @apply w-1px h-5 mx-1.5 bg-zinc-500;
  transform: rotate(10deg);
}
</style>
