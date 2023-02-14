<script setup lang="ts">
defineProps<{
  status?: WebAPIStatusInfo
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
      @apply text-available border-available;
    }
  }
  &.experimental {
    .status-icon {
      @apply text-experimental border-experimental;
    }
  }
  &.unavailable {
    .status-icon {
      @apply text-unavailable;
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
