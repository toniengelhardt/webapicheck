<template>
  <div class="flex justify-center items-center mb-6 p-1.5 border-1 border-gray-300 text-sm rounded-md">
    context is&nbsp;
    <span v-if="isSecure" class="flex items-center text-lime-600 font-bold">secure&nbsp;<Icon name="secure" /></span>
    <span v-else class="flex items-center text-orange-400 font-bold">not secure&nbsp;<Icon name="unsecure" /></span>
  </div>
</template>

<script setup lang="ts">
const isSecure = $computed(() => window?.isSecureContext)
</script>
