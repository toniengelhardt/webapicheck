<template>
  <div class="grid-item" :class="{ available: data.available }">
    {{ data.name }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: Object,
}>()
</script>

<style lang="scss" scoped>
.grid-item {
  @apply px-4 py-2;
  &.available {
    @apply bg-lime-100 text-lime-900;
  }
  &:not(.available) {
    @apply bg-neutral-100 text-gray-800;
  }
}
</style>
