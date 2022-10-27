<template>
  <ClientOnly>
    <div class="flex flex-row justify-center items-center text-sm">
      context is&nbsp;
      <span v-if="isSecure" class="flex items-center text-lime-600 dark:text-yellow-400 font-bold rounded-md">secure<Icon name="secure" class="ml-0.5" /></span>
      <span v-else class="flex items-center text-rose-600 dark:text-rose-500 font-bold rounded-md">not secure<Icon name="unsecure" class="ml-0.5" /></span>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const isSecure = $computed(() => window?.isSecureContext)
</script>
