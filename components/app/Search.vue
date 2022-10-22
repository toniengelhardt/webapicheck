<template>
  <div class="flex items-center h-8 bg-gray-100 rounded-md overflow-hidden">
    <div class="flex justify-center items-center h-8 w-8 ml-1 text-gray-500">
      <Icon name="carbon:search" size="1.2rem" />
    </div>
    <input
      :value="modelValue"
      class="w-24 focus:w-64 bg-gray-100 outline-none transition-all"
      placeholder="Search..."
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value)"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string,
}>()
defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()
</script>
