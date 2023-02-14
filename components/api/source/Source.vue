<script setup lang="ts">
import ApiSourceChrome from '~/components/api/source/Chrome.vue'
import ApiSourceMDN from '~/components/api/source/MDN.vue'

const props = defineProps<{
  api: WebApi
}>()

const sourceComponent = computed(() => {
  switch (props.api.source) {
    case 'chrome':
      return ApiSourceChrome
    default:
      return ApiSourceMDN
  }
})
</script>

<template>
  <component :is="sourceComponent" v-if="sourceComponent" />
</template>
