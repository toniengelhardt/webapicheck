<template>
  <div class="flex <md:(flex-col justify-center px-3) md:(flex-row items-center h-16 px-6) border-b-1 border-neutral-300 dark:border-neutral-700">
    <div class="flex-1 flex items-center <md:(justify-center py-3) md:w-1/5 font-bold text-neutral-500 dark:text-neutral-400 text-xl">
      <Icon name="brand" size="1.4rem" class="mr-2" /><span><span class="text-black dark:text-white font-black">WebAPI</span>&nbsp;check<span class="ml-1.5 text-xs text-rose-500 font-bold">beta</span></span>
    </div>
    <div class="md:w-3/5">
      <slot />
    </div>
    <div class="flex justify-center <md:py-3 md:(w-1/5 justify-end)">
      <ClientOnly>
        <ContextStatus />
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
</script>

<style lang="scss" scoped>

</style>
