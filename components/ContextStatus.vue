<script setup lang="ts">
const isSecure = computed(() => window?.isSecureContext)
</script>

<template>
  <div flex-center>
    <ClientOnly>
      <div :class="isSecure ? 'secure' : 'unsecure'" flex-center>
        <div class="label">
          {{ isSecure ? 'secure' : 'not secure' }}
        </div>
        <div class="icon-container">
          <Icon :name="isSecure ? 'secure' : 'unsecure'" size="0.75rem" />
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<style lang="postcss" scoped>
.label {
  @apply text-sm;
}
.icon-container {
  @apply flex-center w-5 h-5 ml-2 rounded;
}
.secure {
  .icon-container {
    @apply flex-center bg-blue-100 dark:bg-blue-500/25;
    .icon {
      @apply text-blue-600 dark:text-blue-400;
    }
  }
}
.unsecure {
  .icon-container {
    @apply flex-center bg-orange-100 dark:bg-orange-500/25;
    .icon {
      @apply text-orange-500 dark:text-orange-400;
    }
  }
}
</style>
