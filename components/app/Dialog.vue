<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask" @click="$emit('close')">
      <div class="modal-wrapper">
        <div class="modal-container" @click.stop>
          <div class="modal-header">
            <slot name="header" />
          </div>
          <div class="modal-body">
            <slot />
          </div>
          <!-- <div class="modal-footer">
            <slot name="footer" />
          </div> -->
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{
  show: boolean
}>()
defineEmits<{
  (event: 'close'): void
}>()
</script>

<style lang="postcss" scoped>
.modal-mask {
  @apply fixed top-0 left-0;
  display: table;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  z-index: 9998;
  transition: opacity 0.3s ease;
  .modal-wrapper {
    @apply p-2;
    display: table-cell;
    vertical-align: middle;
    .modal-container {
      @apply p-4 mx-auto bg-white dark:bg-zinc-800 shadow-xl rounded;
      width: 100%;
      max-width: 28rem;
      transition: all 0.3s ease;
      .modal-header {
        @apply text-xl font-semibold;
      }
      .modal-body {
        @apply mt-1;
      }
      .modal-footer {
        @apply flex justify-end mt-4;
        .btn {
          @apply min-w-6rem text-sm text-center;
        }
      }
    }
  }
}

:deep(h3) {
  @apply mt-0 mb-4;
}

/* Transitions */

.modal-enter-from {
  opacity: 0;
}
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from,
.modal-leave-to {
  .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}
</style>
