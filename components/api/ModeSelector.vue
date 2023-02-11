<template>
  <div class="element">
    <div class="option" :class="{ selected: modelValue === 'grid' }" @click="$emit('update:modelValue', 'grid')">
      <Icon name="grid" />
    </div>
    <div class="option" :class="{ selected: modelValue === 'list' }" @click="$emit('update:modelValue', 'list')">
      <Icon name="list" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: DisplayMode
}>()
defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()
</script>

<style lang="scss" scoped>
.element {
  @apply flex items-center rounded-md;
  .option {
    @apply flex justify-center items-center w-6 h-6 rounded cursor-pointer;
    &:not(:first-child) {
      @apply ml-2;
    }
    &.selected {
      @apply bg-zinc-200 dark:bg-zinc-700;
    }
  }
}
</style>
