<template>
  <NuxtLayout>
    <template #header-center>
      <AppSearch
        v-model:searchTerm="searchTerm"
        v-model:searchMode="searchMode"
      />
    </template>
    <template #header-right>
      <div flex w-full lt-md:py-3 md:justify-end>
        <div class="flex lt-md:(w-1/3 justify-center) md:mr-4">
          <ApiCounter :supported-count="supportedAPICount" :total-count="totalAPICount" />
        </div>
        <div class="flex lt-md:(w-1/3 justify-center) md:mr-4">
          <ApiModeSelector
            :modelValue="displayMode"
            @update:modelValue="updateMode($event)"
          />
        </div>
        <div class="flex lt-md:(w-1/3 justify-center)">
          <ContextStatus />
        </div>
        <div
          v-if="!sharedStatus"
          lt-md:hidden flex-center ml-4 text-sm font-bold text-black bg-yellow-400 hover:bg-yellow-400:90 h-7 px-2.5 py-0 rounded cursor-pointer
          @click="shareDialogOpen = true"
        >
          <Icon name="ph:arrow-up-bold" />
          <span ml-1 mr-0.5>Share</span>
        </div>
      </div>
    </template>
    <div
      v-if="filteredAPIs && !filteredAPIs.length"
      flex-center h-full text-dim italic
    >
      There are no APIs matching your search...
    </div>
    <ApiList v-else-if="displayMode === 'rows'" :apis="filteredAPIs" />
    <ApiGrid v-else-if="displayMode === 'tiles'" :apis="filteredAPIs" />
  </NuxtLayout>
</template>

<script setup lang="ts">
import Fuse from 'fuse.js'

const searchOptions = {
  keys: ['name'],
  threshold: 0.3,
}

const config = useRuntimeConfig()

useSeoMeta({
  titleTemplate: '%s',
  title: 'WebAPI check – Test your device\'s WebAPI capabilities',
  ogTitle: config.public.siteName,
  ogDescription: config.public.siteDescription,
  ogImage: `${config.public.siteUrl}/og-image.png`,
})

const shareDialogOpen = useState('shareDialogOpen', () => false)
const displayMode: Ref<DisplayMode> = useCookie('displayMode', { default: () => 'tiles' })

console.log('Initial displayMode value:', displayMode.value)

const searchMode = ref(false)
const searchTerm = ref('')
const debouncedSearchTerm = refDebounced(searchTerm, 100)

const webApiList = useWebApiList()
const webApiStatuses = useWebApiStatuses()

const sharedStatus = useSharedStatus()

const fuse = computed(() => new Fuse(webApiList.value, searchOptions))
const filteredAPIs = computed(() => {
  return debouncedSearchTerm.value
    ? fuse.value.search(debouncedSearchTerm.value).map((result: Fuse.FuseResult<WebApi>) => result.item)
    : webApiList.value
})
const supportedAPICount = computed(() => filteredAPIs.value.filter(api => !!webApiStatuses.value[api.id]).length)
const totalAPICount = computed(() => webApiList.value.length)

function updateMode(newValue: DisplayMode) {
  displayMode.value = newValue
}
useTestWebApis()

watch(() => displayMode.value, (newVal, oldVal) => {
  console.log(`DisplayMode changed from '${oldVal}' to '${newVal}'`)
})
</script>
