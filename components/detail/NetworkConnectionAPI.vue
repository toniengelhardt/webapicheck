<template>
  <div class="flex items-center py-3">
    <template v-if="connection">
      <span class="px-2 py-0.5 bg-purple-300 dark:bg-purple-900 text-xs font-black rounded">{{ connection.effectiveType }}</span>
      <span><Icon name="downlink" class="ml-4 mr-0.5" />{{ connection.downlink }}Mbps</span>
      <span><Icon name="roundtrip" class="ml-3 mr-1" />{{ connection.rtt }}ms</span>
    </template>
    <span v-else>N/A</span>
  </div>
</template>

<script setup lang="ts">
let connection = $ref<any>(undefined)

onMounted(() => {
  connection = navigator?.connection
})
</script>
