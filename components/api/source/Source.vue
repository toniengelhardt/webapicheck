<script setup lang="ts">
defineProps<{
  source: WebApiSource
}>()
</script>

<template>
  <ApiSourceChrome v-if="source === 'chrome'" />
  <ApiSourceMDN v-else-if="source === 'mdn'" />
</template>
