<script setup lang="ts">
defineProps<{
  status?: WebAPIStatus
}>()
</script>

<template>
  <div class="status" :class="status?.name">
    <span class="status-icon">
      <Icon :name="status?.icon || ''" />
    </span>
    <span class="status-label">
      {{ status?.label }}
    </span>
  </div>
</template>

<style lang="postcss" scoped>
.status {
  @apply flex items-center;
  &.available {
    .status-icon {
      @apply text-lime-600 border-lime-600 dark:(text-lime-300 border-lime-300);
    }
  }
  &.experimental {
    .status-icon {
      @apply text-purple-700 border-purple-700 dark:(text-purple-300 border-purple-300);
    }
  }
  &.unavailable {
    .status-icon {
      @apply text-rose-500 border-rose-500;
    }
  }
  .status-icon {
    @apply flex justify-center items-center w-4 h-4 border-solid border-1 rounded-full box-border;
    .icon {
      @apply text-0.6rem;
    }
    .status-label {
      @apply ml-1.5 text-xs;
    }
  }
}
</style>
