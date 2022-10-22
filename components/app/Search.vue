<template>
  <div class="flex items-center h-8 bg-gray-100 rounded-md overflow-hidden">
    <div class="flex justify-center items-center h-8 w-8 ml-1 text-gray-500">
      <Icon name="carbon:search" size="1.2rem" />
    </div>
    <input
      :value="searchTerm"
      class="w-24 focus:w-64 bg-gray-100 outline-none transition-all"
      placeholder="Search..."
      @input="$emit('update:searchTerm', ($event.target as HTMLInputElement)?.value)"
      @focus="$emit('update:searchMode', true)"
      @blur="$emit('update:searchMode', false)"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  searchTerm: string,
  searchMode: boolean,
}>()
defineEmits<{
  (event: 'update:searchTerm', value: string): void
  (event: 'update:searchMode', value: string): void
}>()
</script>
