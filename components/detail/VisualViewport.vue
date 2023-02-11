<template>
  <div class="flex items-center py-3">
    <Icon name="width" size="1.2rem" class="mr-1" /> {{ width + 'px' || 'N/A' }} <Icon name="height" size="1.2rem" class="ml-3 mr-1" /> {{ height + 'px' || 'N/A' }}
  </div>
</template>

<script setup lang="ts">
const width = ref<number | undefined>(undefined)
const height = ref<number | undefined>(undefined)

onMounted(() => {
  width.value = window?.visualViewport?.width ? Math.round(window?.visualViewport?.width) : undefined
  height.value = window?.visualViewport?.height ? Math.round(window?.visualViewport?.height) : undefined
})
</script>
