<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-1 p-1">
    <ApiGridItem
      v-for="api in apis"
      :key="api.name"
      :api="api"
      :available="webApiStatuses[api.id]"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  apis: WebAPI[]
}>()

const webApiStatuses: Ref<{ [key: keyof typeof webApiData]: boolean }> = useState('webApiStatuses')
</script>
