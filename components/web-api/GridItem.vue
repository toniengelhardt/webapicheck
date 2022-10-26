<template>
  <div class="grid-item" :class="itemClass">
    <div class="flex items-center">
      <div class="name">
        <NuxtLink
          :to="api.url"
          target="_blank"
        >
          {{ api.name }}
        </NuxtLink><Icon name="external" class="ml-0.5" />
      </div>
      <div class="indicators">
        <WebApiGridItemIndicator
          v-if="api.experimental"
          icon="experimental"
          title="Experimental"
          description="This feature is experimental, use with care."
        />
        <WebApiGridItemIndicator
          v-if="api.availableInWebWorkers"
          icon="webworker"
          title="Web Workers"
          description="This feature is also available in Web Workers."
          link="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"
        />
        <WebApiGridItemIndicator
          v-if="api.userInteractionRequired"
          icon="interaction"
          title="User Interaction"
          description="A user interaction is required to use this feature."
        />
        <WebApiGridItemIndicator
          v-if="api.permissionsRequired"
          icon="permission"
          title="Permissions"
          description="This feature requires permissions to be granted by the user."
        />
        <WebApiGridItemIndicator
          v-if="api.secureContextRequired"
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
      <template v-if="api.available">
        <!-- <WebCryptoAPI v-if="api.name === 'Web Crypto API'" /> -->
        <component v-if="api.detail" :is="api.detail" />
        <div v-else-if="api.value" class="my-3">{{ api.value() }}</div>
      </template>
    </div>
    <div class="flex items-center">
      <div class="flex-1 flex items-center">
        <span v-for="link in api.links" class="item-link">
          <NuxtLink
            :to="link.url"
            :class="itemClass"
            target="_blank"
          >{{ link.name }}</NuxtLink>
          <Icon name="external" size=".85rem" class="ml-0.5"/>
        </span>
      </div>
      <div>
        <component v-if="sourceComponent" :is="sourceComponent" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import WebCryptoAPI from '~/components/detail/WebCryptoAPI.vue'
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
  @apply self-start flex-row px-4 py-3 text-zinc-800 border-0 border-zinc-300 dark:(border-zinc-500 text-zinc-200);
  .name {
    @apply flex-1 font-black underline;
  }
  &.experimental {
    @apply bg-purple-100 border-purple-300 dark:(bg-purple-800 border-purple-600);
    .name {
      @apply text-purple-800 dark:text-purple-100;
    }
  }
  &.available {
    @apply bg-lime-100 border-lime-300 dark:(bg-lime-800 border-lime-600);
    .name {
      @apply text-lime-800 dark:text-lime-100;
    }
  }
  &.not-available {
    @apply bg-zinc-100 dark:bg-zinc-700;
    .name {
      @apply text-zinc-500 dark:text-zinc-400 line-through;
    }
  }
  &.loading {
    @apply bg-zinc-50 dark:bg-zinc-800;
  }
  .indicators {
    @apply flex items-center text-sm;
    > *:not(:last-child) {
      @apply mr-2;
    }
  }
  .item-link {
    @apply text-sm;
    &:not(:last-child) {
      @apply mr-2;
    }
    a {
      @apply underline;
    }
  }
}
</style>
