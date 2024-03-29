<template>
  <NuxtLink
    :to="detailsEnabled ? `/apis/${api.id}` : undefined"
    :title="`${api.name} details`"
    class="list-item" :class="itemClasses"
  >
    <div class="status" :class="status?.name">
      <Icon v-if="status" :name="status.icon" />
    </div>
    <div class="name">
      {{ api.name }}
    </div>
    <div class="path">
      {{ api.path || 'N/A' }}
    </div>
    <ApiSource
      :source="api.source"
      class="source"
    />
    <div class="indicators">
      <ApiPropertyIndicators v-if="status.name !== 'loading'" :api="api" />
      <Icon v-else name="spinner" class="animate-spin" />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  api: WebApi
  available?: boolean
  detailsEnabled?: boolean
}>(), {
  detailsEnabled: true,
})

const status = computed(() => {
  if (props.available) {
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
  if (props.available === false) {
    return {
      name: 'unavailable',
      icon: 'cross',
      label: 'Not available',
    }
  }
  return {
    name: 'loading',
    icon: 'waiting',
    label: 'Loading',
  }
})
const itemClasses = computed(() => status.value.name + (props.detailsEnabled ? '' : ' disabled'))
</script>

<style lang="postcss" scoped>
.list-item {
  @apply flex items-center px-3 md:px-4 py-2 hover:(filter brightness-97 dark:brightness-90);
  &.experimental {
    @apply bg-purple-200 dark:bg-purple-600/50;
  }
  &.available {
    @apply bg-lime-200 dark:bg-lime-600/50;
  }
  &.unavailable {
    @apply bg-zinc-200 dark:bg-zinc-700;
    .name {
      @apply text-zinc-600 dark:text-zinc-300 line-through;
    }
  }
  &.loading {
    @apply bg-zinc-100 dark:bg-zinc-800;
  }
  .status {
    @apply flex-center shrink-0 w-5 h-5 mr-2 md:mr-3 text-dim border-solid border-0 border-base rounded-full box-border;
    &.available {
      @apply text-available border-available;
    }
    &.experimental {
      @apply text-experimental border-experimental;
    }
    &.unavailable {
      @apply text-unavailable;
    }
    .icon {
      @apply text-1.25rem;
    }
  }
  .name {
    @apply flex-1 md:min-w-90 md:text-lg font-black leading-none truncate;
  }
  .path {
    @apply flex items-center w-75 xl:w-1/4 text-sm lt-md:hidden;
  }
  .source {
    @apply lt-lg:hidden w-35 xl:w-1/6 justify-end;
  }
  .indicators {
    @apply flex justify-end items-center md:w-35 lg:w-50 xl:w-1/5;
  }
}
</style>
