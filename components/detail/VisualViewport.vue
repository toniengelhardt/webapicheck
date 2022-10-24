<template>
  <div class="flex items-center my-3">
    <Icon name="width" size="1.2rem" class="mr-1" /> {{ width + 'px' || 'N/A' }} <Icon name="height" size="1.2rem" class="ml-3 mr-1" /> {{ height + 'px' || 'N/A' }}
  </div>
</template>

<script setup lang="ts">
let width = $ref<number | undefined>(undefined)
let height = $ref<number | undefined>(undefined)

onMounted(() => {
  width = window?.visualViewport?.width ? Math.round(window?.visualViewport?.width) : undefined
  height = window?.visualViewport?.height ? Math.round(window?.visualViewport?.height) : undefined
})
</script>
