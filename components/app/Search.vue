<template>
  <div class="flex items-center max-w-120 h-10 mx-auto border-1 border-zinc-300 dark:border-zinc-700 rounded-md overflow-hidden">
    <div class="flex justify-center items-center min-h-10 min-w-8 ml-1 text-zinc-500 dark:text-zinc-400">
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
      class="flex justify-center items-center min-h-10 min-w-8 mr-1 text-zinc-500 dark:text-tray-400 hover:(text-zinc-700 dark:text-zinc-200) cursor-pointer"
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
