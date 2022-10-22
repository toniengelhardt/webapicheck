<template>
  <NuxtLink
    :to="api.url"
    :class="itemClass"
    class="grid-item"
    target="_blank"
  >
    <div class="flex items-center">
      <div class="flex-1 font-bold name">
        {{ api.name }}
      </div>
      <div class="indicators">
        <Icon v-if="api.experimental" name="experimental" />
        <Icon :name="api.source || 'mdn'" class="text-black" />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  api: WebAPI,
}>()

const itemClass = $computed(() => {
  return props.api.experimental
    ? 'experimental'
    : props.api.available === undefined
      ? 'loading'
      : props.api.available
        ? 'available'
        : 'not-available'

})
</script>

<style lang="scss" scoped>
.grid-item {
  @apply px-3 py-2 text-sm min-h-20;
  &.experimental {
    @apply bg-blue-100 text-blue-900;
  }
  &.available {
    @apply bg-lime-100 text-lime-900;
  }
  &.not-available {
    @apply bg-neutral-100 text-gray-800;
    .name {
      @apply line-through;
    }
  }
  .indicators {
    > *:not(:last-child) {
      @apply mr-3;
    }
  }
}
</style>
