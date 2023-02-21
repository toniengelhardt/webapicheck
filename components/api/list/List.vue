<template>
  <div class="grid grid-cols-1 gap-0.5 py-0.5">
    <ApiListItem
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
