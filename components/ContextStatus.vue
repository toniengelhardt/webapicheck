<template>
  <div class="flex flex-row justify-center items-center text-sm">
    context is
    <span v-if="isSecure" class="flex items-center text-sky-500 font-bold ml-1.5">secure&nbsp;<Icon name="secure" /></span>
    <span v-else class="flex items-center text-orange-400 font-bold ml-1.5">not secure&nbsp;<Icon name="unsecure" /></span>
  </div>
</template>

<script setup lang="ts">
const isSecure = $computed(() => window?.isSecureContext)
</script>
