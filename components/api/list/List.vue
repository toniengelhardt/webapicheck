<template>
  <div class="p-3px grid grid-cols-1 gap-3px">
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
