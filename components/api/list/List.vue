<template>
  <div class="grid grid-cols-1 gap-0.5 p-0.5">
    <ApiListItem
      v-for="api in apis"
      :key="api.key"
      :api="api"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  apis: WebAPI[]
}>()
</script>
