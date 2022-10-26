<template>
  <ClientOnly>
    <div class="flex flex-row justify-center items-center text-sm">
      context is&nbsp;
      <span v-if="isSecure" class="flex items-center text-lime-500 font-bold">secure&nbsp;<Icon name="secure" /></span>
      <span v-else class="flex items-center text-rose-500 font-bold">not secure&nbsp;<Icon name="unsecure" /></span>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const isSecure = $computed(() => window?.isSecureContext)
</script>
