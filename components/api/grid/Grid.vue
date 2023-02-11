<template>
  <div class="p-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-1">
    <ApiGridItem
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
