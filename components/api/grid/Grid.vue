<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-1 py-1 md:p-1">
    <ApiGridItem
      v-for="api in apis"
      :key="api.id"
      :api="api"
      :available="!!webApiStatuses[api.id]"
      :detailsEnabled="!sharedStatus"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  apis: WebApi[]
}>()

const sharedStatus = useSharedStatus()
const webApiStatuses = useWebApiStatuses()
</script>
