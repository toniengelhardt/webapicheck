<template>
  <NuxtLink
    :to="`/apis/${api.id}`"
    :title="`${api.name} details`"
    class="list-item" :class="itemClass"
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
      :api="api"
      class="source"
    />
    <div class="indicators">
      <ApiPropertyIndicators v-if="itemClass !== 'loading'" :api="api" />
      <Icon v-else name="spinner" class="animate-spin" />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  api: WebAPI
  available?: boolean
}>()

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
const itemClass = computed(() => status.value.name)
</script>

<style lang="postcss" scoped>
.list-item {
  @apply flex items-center px-4 py-2 hover:(filter brightness-97 dark:brightness-90);
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
      @apply text-lime-700 border-lime-700 dark:(text-lime-300 border-lime-300);
    }
    &.experimental {
      @apply text-purple-800 border-purple-800 dark:(text-purple-300 border-purple-300);
    }
    &.unavailable {
      @apply text-rose-600 border-rose-600 dark:(text-rose-500 border-rose-500);
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
