<template>
  <div class="flex items-center max-w-120 h-10 mx-auto border-1 dark:border-gray-700 rounded-md overflow-hidden">
    <div class="flex justify-center items-center h-8 w-8 ml-1 text-gray-500 dark:text-gray-400">
      <Icon name="carbon:search" size="1rem" />
    </div>
    <input
      :value="searchTerm"
      class="w-full mr-2 bg-transparent outline-none transition-all"
      placeholder="Search APIs..."
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
