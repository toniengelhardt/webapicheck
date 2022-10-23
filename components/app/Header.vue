<template>
  <div class="flex items-center h-16 px-3 md:px-6">
    <div class="flex-1 flex items-center font-bold text-neutral-500 dark:text-neutral-400">
      <Icon name="brand" size="1.2rem" class="mr-2" /><span class="text-black dark:text-white font-black">WebAPI</span>&nbsp;check
    </div>
    <div>
      <ClientOnly>
        <ContextIndicator />
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
</script>
