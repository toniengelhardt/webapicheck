<template>
  <div
    :class="itemClass"
    class="grid-item"
  >
    <div class="flex items-center">
      <div class="flex-1 font-bold name">
        {{ api.name }}
      </div>
      <div class="indicators">
        <Icon v-if="api.experimental" name="experimental" />
        <Icon v-if="api.webworkers" name="webworker" />
        <Icon v-if="api.secureContext" name="secure" />
      </div>
    </div>
    <div class="text-xs">
      {{ api.path || 'window' }}
    </div>
    <div class="flex-1 min-h-6"></div>
    <div class="flex items-center">
      <div class="flex-1">
        <component v-if="sourceComponent" :is="sourceComponent" />
      </div>
      <div class="flex items-center">
        <template v-for="link in api.links">
          <NuxtLink
            :to="link.url"
            :class="itemClass"
            class="item-link"
            target="_blank"
          >{{ link.name }}</NuxtLink>
          <Icon name="external" size=".85rem" class="ml-1"/>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WebApiSourceChrome from '~/components/web-api/source/Chrome.vue'
import WebApiSourceMDN from '~/components/web-api/source/MDN.vue'

const props = defineProps<{
  api: WebAPI,
}>()

const itemClass = $computed(() => {
  return props.api.available === false
    ? 'not-available'
    : props.api.experimental
      ? 'experimental'
      : props.api.available
        ? 'available'
        : 'loading'

})

const sourceComponent = $computed(() => {
  switch (props.api.source) {
    case 'chrome':
      return WebApiSourceChrome
    default:
      return WebApiSourceMDN
  }
})
</script>

<style lang="scss" scoped>
.grid-item {
  @apply flex-row px-3 py-2 rounded-md;
  &.experimental {
    @apply bg-purple-100 border-1 border-purple-300 dark:(bg-purple-900 border-purple-600);
    .name {
      @apply text-purple-800 dark:text-purple-200;
    }
  }
  &.available {
    @apply bg-lime-100 border-1 border-lime-300 dark:(bg-lime-900 border-lime-600);
    .name {
      @apply text-lime-800 dark:text-lime-200;
    }
  }
  &.not-available {
    @apply bg-neutral-100 text-gray-800 border-1 border-gray-300 dark:(bg-neutral-700 border-neutral-500 text-neutral-200);
    .name {
      @apply text-neutral-500 dark:text-neutral-400 line-through;
    }
  }
  .indicators {
    @apply flex items-center text-sm;
    > *:not(:last-child) {
      @apply mr-3;
    }
  }
  .item-link {
    @apply text-xs underline;
  }
}
</style>
