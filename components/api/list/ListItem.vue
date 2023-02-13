<template>
  <div class="list-item" :class="itemClass">
    <div class="status" :class="status?.name">
      <Icon v-if="status" :name="status.icon" />
    </div>
    <NuxtLink
      :to="api.url"
      :title="`${api.name} documentation`"
      target="_blank"
      class="name"
      @click="useTrackEvent('click: API link', { props: { api: api.name } })"
    >
      {{ api.name }}
    </NuxtLink>
    <div class="path">
      {{ api.path || 'N/A' }}
    </div>
    <ApiSource :api="api" />
    <div flex justify-end items-center md:w-30>
      <ApiPropertyIndicators v-if="itemClass !== 'loading'" :api="api" />
      <Icon v-else name="spinner" class="animate-spin" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  api: WebAPI
}>()

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
const itemClass = computed(() => status.value?.name || 'loading')
</script>

<style lang="postcss" scoped>
.list-item {
  @apply flex items-center px-3.5 py-2 rounded;
  .status {
    @apply flex-center shrink-0 w-5 h-5 mr-2 md:mr-3 border-solid border-1 border-base rounded-full box-border;
    &.available {
      @apply text-lime-600 border-lime-600 dark:(text-lime-300 border-lime-300);
    }
    &.experimental {
      @apply text-purple-700 border-purple-700 dark:(text-purple-300 border-purple-300);
    }
    &.unavailable {
      @apply text-rose-500 border-rose-500;
    }
    .icon {
      @apply text-0.8rem;
    }
  }
  .name {
    @apply flex-1 md:min-w-90 md:text-lg font-black hover:underline leading-tight truncate;
  }
  .path {
    @apply flex items-center w-60 text-sm lt-md:hidden;
  }
  &.experimental {
    @apply bg-purple-200 dark:bg-purple-500/50;
  }
  &.available {
    @apply bg-lime-200 dark:bg-lime-500/50;
  }
  &.not-available {
    @apply bg-zinc-100 dark:bg-zinc-700;
    .name {
      @apply text-zinc-600 dark:text-zinc-300 line-through;
    }
  }
  &.loading {
    @apply bg-zinc-100 dark:bg-zinc-800;
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
