<template>
  <div class="flex flex-row justify-center items-center text-sm">
    <ClientOnly>
      <span v-if="isSecure" class="flex items-center text-lime-600 dark:text-yellow-400 font-bold rounded-md"><span class="<md:inline <lg:hidden">secure</span><Icon name="secure" class="ml-0.5" /></span>
      <span v-else class="flex items-center text-rose-600 dark:text-rose-500 font-bold rounded-md"><span class="<md:inline <lg:hidden">not secure</span><Icon name="unsecure" class="ml-0.5" /></span>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const isSecure = computed(() => window?.isSecureContext)
</script>
