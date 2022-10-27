<template>
  <ClientOnly>
    <div class="flex flex-row justify-center items-center text-sm">
      context is&nbsp;
      <span v-if="isSecure" class="flex items-center px-1.5 py-0.25 bg-blue-100 text-blue-700 dark:text-lime-500 font-bold rounded-md">secure<Icon name="secure" class="ml-0.5" /></span>
      <span v-else class="flex items-center px-1.5 py-0.25 bg-rose-100 text-rose-600 font-bold rounded-md">not secure<Icon name="unsecure" class="ml-0.5" /></span>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const isSecure = $computed(() => window?.isSecureContext)
</script>
