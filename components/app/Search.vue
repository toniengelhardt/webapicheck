<template>
  <div class="flex items-center max-w-120 h-10 mx-auto border-1 border-neutral-300 dark:border-neutral-700 rounded-md overflow-hidden">
    <div class="flex justify-center items-center min-h-10 min-w-8 ml-1 text-neutral-500 dark:text-neutral-400">
      <Icon name="search" size="1.1rem" />
    </div>
    <input
      :value="searchTerm"
      class="w-full <md:text-center bg-transparent outline-none transition-all"
      placeholder="Search APIs..."
      @input="$emit('update:searchTerm', ($event.target as HTMLInputElement)?.value)"
      @focus="$emit('update:searchMode', true)"
      @blur="$emit('update:searchMode', false)"
    />
    <div
      class="flex justify-center items-center min-h-10 min-w-8 mr-1 text-neutral-500 dark:text-tray-400 hover:(text-neutral-700 dark:text-neutral-200) cursor-pointer"
      @click="$emit('update:searchTerm', '')"
    >
      <Icon v-if="searchTerm" name="clear" size="1.1rem" />
    </div>
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
