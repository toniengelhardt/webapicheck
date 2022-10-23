<template>
  <div :class="itemClass" class="grid-item">
    <div class="flex items-center">
      <div class="flex-1 font-bold name">
        {{ api.name }}
      </div>
      <div class="indicators">
        <WebApiGridItemIndicator
          v-if="api.experimental"
          icon="experimental"
          title="Experimental"
          description="This feature is experimental, use with care."
        />
        <WebApiGridItemIndicator
          v-if="api.webworkers"
          icon="webworker"
          title="Web Workers"
          description="This feature is also available in Web Workers."
          link="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"
        />
        <WebApiGridItemIndicator
          v-if="api.secureContext"
          icon="secure"
          title="Secure Context"
          description="This feature requires a Secure Context (HTTPS) to be available."
          link="https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts"
        />
        <Icon v-if="itemClass === 'loading'" name="spinner" class="animate-spin" />
      </div>
    </div>
    <div class="text-xs">
      {{ api.path || 'window' }}
    </div>
    <div class="flex-1 min-h-6">
      <slot />
    </div>
    <div class="flex items-center">
      <div class="flex-1">
        <component v-if="sourceComponent" :is="sourceComponent" />
      </div>
      <div class="flex items-center">
        <span v-for="link in api.links" class="item-link">
          <NuxtLink
            :to="link.url"
            :class="itemClass"
            target="_blank"
          >{{ link.name }}</NuxtLink>
          <Icon name="external" size=".85rem" class="ml-0.5"/>
        </span>
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
  @apply flex-row px-3 py-2 rounded-md text-gray-800 border-1 border-gray-300 dark:(border-neutral-500 text-neutral-200);
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
    @apply bg-neutral-100 dark:bg-neutral-700;
    .name {
      @apply text-neutral-500 dark:text-neutral-400 line-through;
    }
  }
  .loading {
    @apply
  }
  .indicators {
    @apply flex items-center text-sm;
    > *:not(:last-child) {
      @apply mr-2;
    }
  }
  .item-link {
    @apply text-xs;
    &:not(:last-child) {
      @apply mr-2;
    }
    a {
      @apply underline;
    }
  }
}
</style>
