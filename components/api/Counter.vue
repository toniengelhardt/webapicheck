<template>
  <div class="flex items-center text-xs text-zinc-500 dark:text-zinc-400">
    <div class="item-counter">
      <Icon name="available" class="text-lime-600 dark:text-lime-500 mr-1" /><span>{{ supportedCount }}</span>
    </div>
    <div class="item-divider" />
    <div class="item-counter">
      <Icon name="unavailable" class="text-rose-600 dark:text-rose-500 mr-1" /><span>{{ totalCount - supportedCount }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  supportedCount: number
  totalCount: number
}>()
</script>

<style lang="postcss" scoped>
.item-counter {
  @apply flex items-center text-base dark:text-white font-bold;
}
.item-divider {
  @apply w-1px h-4 mx-2 bg-zinc-500;
  transform: rotate(10deg);
}
</style>
