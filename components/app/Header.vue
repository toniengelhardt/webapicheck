<template>
  <div class="flex items-center h-16 px-3 md:px-6">
    <div class="flex-1 flex items-center font-bold text-neutral-500">
      <Icon name="brand" size="1.2rem" class="mr-2" /><span class="text-black font-black">WebAPI</span>&nbsp;check
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
</script>
