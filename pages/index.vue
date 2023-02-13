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
            :model-value="mode as DisplayMode"
            @update:model-value="newValue => mode = newValue"
          />
        </div>
        <div class="flex lt-md:(w-1/3 justify-center)">
          <ContextStatus />
        </div>
      </div>
    </template>
    <div
      v-if="filteredAPIs && !filteredAPIs.length"
      flex-center h-full text-dim italic
    >
      There are no APIs matching your search...
    </div>
    <ApiList v-else-if="mode === 'rows'" :apis="filteredAPIs" />
    <ApiGrid v-else :apis="filteredAPIs" />
  </NuxtLayout>
</template>

<script setup lang="ts">
import Fuse from 'fuse.js'
import * as shvl from 'shvl'

const config = useRuntimeConfig()

useSeoMeta({
  titleTemplate: '%s',
  title: 'WebAPI check – Test your device\'s WebAPI capabilities',
  ogTitle: config.public.siteName,
  ogDescription: config.public.siteDescription,
  ogImage: `${config.public.siteUrl}/og-image.png`,
})

const mode = useCookie('mode', { default: () => 'grid' })
const searchTerm = ref('')
const debouncedSearchTerm = refDebounced(searchTerm, 100)
const searchMode = ref(false)

const searchOptions = {
  keys: ['name'],
  threshold: 0.3,
}

const webApiList = useWebApiList().value
const webApiStatuses = useState('webApiStatuses', (): { [key: keyof typeof webApiData]: boolean } => ({}))

const fuse = computed(() => new Fuse(webApiList, searchOptions))
const filteredAPIs = computed(() => {
  return debouncedSearchTerm.value
    ? fuse.value.search(debouncedSearchTerm.value).map((result: Fuse.FuseResult<WebAPI>) => result.item)
    : webApiList
})
const supportedAPICount = computed(() => filteredAPIs.value.filter(api => !!webApiStatuses.value[api.id]).length)
const totalAPICount = computed(() => webApiList.length)

function defaultCheck(api: WebAPI) {
  if (api.path) {
    const partials = api.path.split('.')
    const path = partials[0] === 'window' ? partials.slice(1).join('.') : api.path
    return !!shvl.get(window, path, undefined)
  }
  return false
}

function loadAPIs() {
  if (navigator && !Object.keys(webApiStatuses.value).length) {
    webApiList.forEach((webApi) => {
      const check = webApi.check || defaultCheck
      if (check.constructor.name === 'AsyncFunction') {
        (check(webApi) as Promise<boolean>)
          .then((available: boolean) => webApiStatuses.value[webApi.id] = available)
      } else {
        webApiStatuses.value[webApi.id] = check(webApi) as boolean
      }
    })
  }
}

onMounted(() => loadAPIs())
</script>
