<template>
  <div class="element">
    <div
      class="option"
      :class="{ selected: modelValue === 'rows' }"
      @click="selectMode('rows')"
    >
      <Icon name="list" />
    </div>
    <div
      class="option"
      :class="{ selected: modelValue === 'grid' }"
      @click="selectMode('grid')"
    >
      <Icon name="grid" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: DisplayMode
}>()
const emit = defineEmits(['update:modelValue'])

function selectMode(mode: DisplayMode) {
  emit('update:modelValue', mode)
}
</script>

<style lang="postcss" scoped>
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
