<template>
  <div class="grid-item" :class="itemClass">
    <div class="header">
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
      <div class="indicators">
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
      </div>
    </div>
    <div class="text-sm">
      {{ api.path || 'window' }}
    </div>
    <div class="flex-1 min-h-12">
      <template v-if="api.available">
        <component v-if="api.detail" :is="api.detail" />
        <div v-else-if="api.value" class="py-3">{{ api.value() }}</div>
        <div v-else-if="api.action" class="py-3">
          <div
            class="btn-xs btn-default cursor-pointer"
            @click="api.action!.func(); plausible.trackEvent('click: API action', { props: { api: api.name } });"
          >
            <Icon v-if="api.action.icon" :name="api.action.icon" />
            <span class="mx-1.5">{{ api.action.label }}</span>
          </div>
        </div>
      </template>
    </div>
    <div class="flex items-center">
      <div class="flex-1 flex items-center">
        <!-- <span v-for="link in api.links" class="item-link">
          <NuxtLink
            :to="link.url"
            :class="itemClass"
            target="_blank"
            @click="$plausible.trackEvent('click: API resource', { props: { api: api.name, name: link.name } })"
          >{{ link.name }}</NuxtLink>
          <Icon name="external" size=".85rem" class="ml-0.5"/>
        </span> -->
        <div v-if="itemClass === 'loading'" class="flex justify-center items-center w-4 h-4">
          <Icon name="spinner" class="animate-spin" />
        </div>
        <div v-else class="status" :class="status.name">
          <span class="status-icon">
            <Icon :name="status.icon" />
          </span>
          <span class="status-label">
            {{ status.label }}
          </span>
        </div>
      </div>
      <div>
        <component v-if="sourceComponent" :is="sourceComponent" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ApiSourceChrome from '~/components/api/source/Chrome.vue'
import ApiSourceMDN from '~/components/api/source/MDN.vue'

const props = defineProps<{
  api: WebAPI,
}>()

const plausible = usePlausible()

const itemClass = $computed(() => {
  if (props.api.available !== undefined) {
    return props.api.available === false
      ? 'not-available'
      : props.api.experimental
        ? 'experimental'
        : 'available'
  }
  return 'loading'
})
const sourceComponent = $computed(() => {
  switch (props.api.source) {
    case 'chrome':
      return ApiSourceChrome
    default:
      return ApiSourceMDN
  }
})
const status = $computed(() =>  {
  if (props.api.experimental) {
    return {
      name: 'experimental',
      icon: 'experimental',
      label: 'Experimental',
    }
  } else if (props.api.available) {
    return {
      name: 'available',
      icon: 'check',
      label: 'Available',
    }
  } else {
    return {
      name: 'unavailable',
      icon: 'cross',
      label: 'Not supported',
    }
  }
})
</script>

<style lang="scss" scoped>
.grid-item {
  @apply self-start flex-row px-4 py-3 text-zinc-800 border-0 border-zinc-300 dark:(border-zinc-500 text-white) rounded-md;
  .header {
    @apply flex items-center;
    .name {
      @apply flex-1 text-lg font-black underline;
    }
  }
  &.experimental {
    @apply bg-purple-200 border-purple-300 dark:(bg-purple-800 border-purple-600);
    // .header {
    //   @apply text-purple-800 dark:text-purple-100;
    // }
  }
  &.available {
    @apply bg-lime-200 border-lime-300 dark:(bg-lime-700 border-lime-600);
    // .name {
    //   @apply text-lime-800 dark:text-lime-100;
    // }

  }
  &.not-available {
    @apply bg-zinc-100 dark:bg-zinc-700;
    // background: repeating-linear-gradient(
    //   -55deg,
    //   var(--color-zinc-100),
    //   var(--color-zinc-100) 10px,
    //   var(--color-zinc-200) 10px,
    //   var(--color-zinc-200) 20px,
    // );
    .name {
      @apply text-zinc-600 dark:text-zinc-300 line-through;
    }
  }
  &.loading {
    @apply bg-zinc-100 dark:bg-zinc-800;
  }
  .indicators {
    @apply flex items-center text-sm;
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
  .status {
    @apply flex items-center;
    &.available {
      .status-icon {
        @apply text-lime-600 border-lime-600;
      }
    }
    &.experimental {
      .status-icon {
        @apply text-purple-700 border-purple-700;
      }
    }
    &.unavailable {
      // @apply text-rose-500;
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
    .status-label {
      @apply ml-1.5 text-xs;
    }
  }
}
</style>