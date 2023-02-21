<template>
  <AppDialog
    :show="shareDialogOpen"
    maxWidth="35rem"
    @close="shareDialogOpen = false"
  >
    <template #header>
      <h3>Share your configuration</h3>
    </template>
    <p class="mb-2">
      Share this link with someone to reproduce your configuration.
    </p>
    <div
      class="flex items-center font-mono p-2 text-sm bg-element rounded cursor-pointer"
      @click="copyUrl()"
    >
      <span flex-1>{{ url }}</span>
      <Icon name="cil:copy" ml-1.5 mr-0.5 />
    </div>
    <div
      v-if="state === 'copied'"
      class="flex items-center mt-2 text-sm text-available"
    >
      <Icon name="check" mx-1 />
      Copied to the clipboard!
    </div>
    <div
      v-else-if="state === 'error'"
      class="flex items-center mt-2 text-sm text-unavailable"
    >
      <Icon name="cross" mx-1 />
      Error copying to clipboard!
    </div>
    <div v-if="shareAvailable" btn btn-default mt-4 @click="share()">
      <span>Share</span>
      <Icon name="share" ml-1.5 />
    </div>
  </AppDialog>
</template>

<script setup lang="ts">
const shareDialogOpen = useState('shareDialogOpen', () => false)
const webApiStatuses = useWebApiStatuses()

const state = ref<'copied' | 'error' | undefined>(undefined)

const url = computed(() => `${window.location}?status=v1-${encodeStatus(webApiStatuses.value)}`)
const shareAvailable = computed(() => !!webApiStatuses.value?.['web-share-api'])

function copyUrl() {
  try {
    navigator.clipboard.writeText(url.value)
    state.value = 'copied'
  } catch {
    state.value = 'error'
  }
}

async function share() {
  useTrackEvent('click: Share status')
  try {
    await navigator.share({
      title: 'WebAPI status',
      text: 'Open this page to inspect the saved WebAPI test.',
      url: url.value,
    })
    useTrackEvent('Share status successful')
  } catch (err: any) {
    useTrackEvent('Share status error', { props: { error: err?.message || 'N/A' } })
  }
}

onMounted(() => state.value = undefined)
</script>
