<template>
  <button
    v-if="source === 'webApiStatuses'"
    class="bg-lime-200 dark:bg-lime-600/50 border-0 p-2 dark:text-white font-bold rounded-md hover:(filter brightness-97 dark:brightness-90) cursor-pointer"
    @click="open = true"
  >
    Share <Icon name="share" />
  </button>
  <Teleport to="body">
    <AppDialog
      :show="open"
      @close="open = false;"
    >
      <template #header>
        <h3>Share your configuration</h3>
      </template>
      <p class="my-3 text-center">
        Share this link with people to share your configuration
      </p>
      <button
        class="font-mono p-2 cursor-pointer rounded mx-auto block bg-gray-200 dark:bg-zinc-600 dark:color-white border-0"
        @click="copyUrl"
      >
        {{ url }}
        <Icon name="cil:copy" />
      </button>
      <div
        v-if="state === 'copied'"
        class="rounded text-center bg-lime-200 dark:bg-lime-600/50 p-2 mx-auto m-2 block w-1/2"
      >
        Copied to the clipboard!
      </div>
      <div
        v-if="state === 'error'"
        class="rounded text-center bg-red-200 dark:bg-red-600/50 p-2 mx-auto m-2 block w-1/2"
      >
        Error copying to clipboard!
      </div>
    </AppDialog>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{
  source: PageType
}>()
const open = ref(false)
const state = ref<null | 'copied' | 'error'>(null)
const webApiStatuses = useState('webApiStatuses', (): { [key: keyof typeof webApiData]: boolean } => ({}))
const url = computed(() => `${window.location}share?config=${encode(webApiStatuses.value)}`)
effect(() => {
  if (open.value) {
    state.value = null
  }
})
function copyUrl() {
  try {
    navigator.clipboard.writeText(url.value)
    state.value = 'copied'
  } catch (e) {
    state.value = 'error'
  }
}
</script>
