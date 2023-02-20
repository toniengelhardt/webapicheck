<template>
  <div class="grid grid-cols-1 gap-0.5 py-0.5">
    <ApiListItem
      v-for="api in apis"
      :key="api.id"
      :api="api"
      :available="!!webApiStatuses[api.id]"
    />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  apis: WebApi[]
  source: PageType
}>(), {
  source: 'webApiStatuses',
})

const webApiStatuses: Ref<WebApiStatuses> = useState(props.source, () => ({}))
</script>
