<template>
  <div class="list-item" :class="itemClass">
    <div class="status" :class="status?.name">
      <span v-if="status" class="status-icon">
        <Icon :name="status.icon" />
      </span>
    </div>
    <div class="name">
      <NuxtLink
        :to="api.url"
        :title="`${api.name} documentation`"
        target="_blank"
        @click="plausible.trackEvent('click: API link', { props: { api: api.name } })"
      >
        {{ api.name }}
      </NuxtLink>
    </div>
    <div class="path">
      {{ api.path || 'N/A' }}
    </div>
    <div class="<md:hidden flex justify-end items-center w-24">
      <component :is="sourceComponent" v-if="sourceComponent" />
    </div>
    <div class="indicators">
      <ApiGridItemIndicator
        v-if="api.experimental"
        icon="experimental"
        title="Experimental"
        description="This feature is experimental, use with care."
      />
      <ApiGridItemIndicator
        v-if="api.availableInWebWorkers"
        icon="webworker"
        title="Web Workers"
        description="This feature is also available in Web Workers."
        link="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"
      />
      <ApiGridItemIndicator
        v-if="api.userInteractionRequired"
        icon="interaction"
        title="User Interaction"
        description="A user interaction is required to use this feature."
      />
      <ApiGridItemIndicator
        v-if="api.permissionsRequired"
        icon="permission"
        title="Permissions"
        description="This feature requires permissions to be granted by the user."
      />
      <ApiGridItemIndicator
        v-if="api.secureContextRequired"
        icon="secure"
        title="Secure Context"
        description="This feature requires a Secure Context (HTTPS) to be available."
        link="https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts"
      />
      <div v-if="itemClass === 'loading'" class="flex justify-center items-center w-5 h-5 ml-2">
        <Icon name="spinner" class="animate-spin" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ApiSourceChrome from '~/components/api/source/Chrome.vue'
import ApiSourceMDN from '~/components/api/source/MDN.vue'

const props = defineProps<{
  api: WebAPI
}>()

const plausible = usePlausible()

const itemClass = computed(() => {
  if (props.api.available !== undefined) {
    return props.api.available === false
      ? 'not-available'
      : props.api.experimental
        ? 'experimental'
        : 'available'
  }
  return 'loading'
})
const status = computed(() => {
  if (props.api.available) {
    if (props.api.experimental) {
      return {
        name: 'experimental',
        icon: 'experimental',
        label: 'Experimental',
      }
    }
    return {
      name: 'available',
      icon: 'check',
      label: 'Available',
    }
  }
  if (props.api.available === false) {
    return {
      name: 'unavailable',
      icon: 'cross',
      label: 'Not available',
    }
  }
  return undefined
})
const sourceComponent = computed(() => {
  switch (props.api.source) {
    case 'chrome':
      return ApiSourceChrome
    default:
      return ApiSourceMDN
  }
})
</script>

<style lang="scss" scoped>
.list-item {
  @apply flex flex-row px-4 py-2 rounded;
  .status {
    @apply flex items-center min-w-4 mr-2;
    &.available {
      .status-icon {
        @apply text-lime-600 border-lime-600 dark:(text-lime-200 border-lime-200);
      }
    }
    &.experimental {
      .status-icon {
        @apply text-purple-700 border-purple-700 dark:(text-purple-200 border-purple-200);
      }
    }
    &.unavailable {
      .status-icon {
        @apply text-rose-500 border-rose-500;
      }
    }
    .status-icon {
      @apply flex justify-center items-center w-4 h-4 border-1 rounded-full;
      .icon {
        @apply text-0.6rem;
      }
    }
  }
  .name {
    @apply flex-1 md:min-w-90 md:text-lg font-black hover:underline leading-tight truncate;
  }
  .path {
    @apply flex items-center w-60 text-sm <md:hidden;
  }
  &.experimental {
    @apply bg-purple-200 dark:bg-purple-500/65;
  }
  &.available {
    @apply bg-lime-200 dark:bg-lime-500/65;
  }
  &.not-available {
    @apply bg-zinc-100 dark:bg-zinc-800;
    .name {
      @apply text-zinc-600 dark:text-zinc-300 line-through;
    }
  }
  &.loading {
    @apply bg-zinc-100 dark:bg-zinc-800;
  }
  .indicators {
    @apply flex justify-end items-center md:w-25 text-sm;
    > *:not(:last-child) {
      @apply mr-2;
    }
  }
  .item-link {
    @apply text-sm leading-none;
    &:not(:last-child) {
      @apply mr-2;
    }
    a {
      @apply underline;
    }
  }
}
</style>
