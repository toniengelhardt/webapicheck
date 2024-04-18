<script setup lang="ts">
definePageMeta({
  validate: (route) => {
    return route
      ? Object.keys(webApiData).includes(route.params.id.toString())
      : false
  },
})

const route = useRoute()

const webApiList = useWebApiList()
const webApiStatuses = useState('webApiStatuses', () => ({} as WebApiStatuses))

const webApiId = computed(() => route.params.id.toString())
const webApi = computed(() => ({ id: webApiId.value, ...webApiData[webApiId.value] }))
const available = computed(() => webApiStatuses.value[webApiId.value])
const otherWebAPIs = computed(() => {
  const idx = webApiList.value.findIndex(api => api.id === webApiId.value)
  const list = [] as WebApi[]
  for (let i = idx + 1; i <= idx + 12; i++) {
    list.push(webApiList.value.at(i % webApiList.value.length)!)
  }
  return list
})

useSeoMeta({
  title: () => `${webApi.value.name} Test`,
  description: () => `Open this page to test if your device supports the ${webApi.value.name} WebAPI. Availability test, details, special properties, and more.`,
})

const status = computed(() => {
  if (available.value) {
    if (webApi.value.experimental) {
      return {
        name: 'experimental',
        icon: 'experimental',
        label: 'Available on this device (experimental)',
      }
    }
    return {
      name: 'available',
      icon: 'check',
      label: 'Available on this device',
    }
  }
  if (available.value === false) {
    return {
      name: 'unavailable',
      icon: 'cross',
      label: 'Not available on this device',
    }
  }
  return undefined
})

onMounted(() => useTestWebApis([webApi.value]))
</script>

<template>
  <div>
    <NuxtLayout>
      <div max-w-screen-lg mx-auto px-3 md:px-4 py-8 md:py-12>
        <h1 important-mt-0>
          {{ webApi.name }} Test
        </h1>
        <p mb-2 text-sm text-dim font-bold>
          WebAPI test:
        </p>
        <div min-h-6>
          <ClientOnly>
            <div class="status" :class="status?.name">
              <span class="status-icon">
                <Icon :name="status?.icon || ''" />
              </span>
              <span class="status-label">
                {{ status?.label }}
              </span>
            </div>
          </ClientOnly>
        </div>
        <div grid md:grid-cols-2 gap-3 md:gap-4 mt-8>
          <div class="box">
            <div class="label">
              Type
            </div>
            <div class="value">
              WebAPI
            </div>
          </div>
          <div class="box">
            <div class="label">
              Path
            </div>
            <div class="value">
              {{ webApi.path || 'N/A' }}
            </div>
          </div>
          <div class="box">
            <div class="label">
              Documentation
            </div>
            <div inline-flex items-center>
              <NuxtLink
                :to="webApi.url"
                :title="`Documentation for ${webApi.name}`"
                target="_blank"
                flex items-center
                @click="useTrackEvent('click: WebAPI documentation', { props: { webapi: webApi.id } })"
              >
                <u>Open</u> <Icon name="external" ml-0.5 />
              </NuxtLink>
            </div>
          </div>
          <div class="box">
            <div class="label">
              Source
            </div>
            <div class="value">
              <ApiSource :source="webApi.source" />
            </div>
          </div>
        </div>
        <h2>
          Special properties
        </h2>
        <div v-if="webApi.availableInWebWorkers" class="panel">
          <div flex items-center>
            <Icon name="webworker" size="1.25rem" /> Available in Web Workers
          </div>
        </div>
        <div v-if="webApi.userInteractionRequired" class="panel">
          <div flex items-center>
            <Icon name="interaction" size="1.25rem" /> User interaction required
          </div>
        </div>
        <div v-if="webApi.permissionsRequired" class="panel">
          <div flex items-center>
            <Icon name="permission" size="1.25rem" /> Permission/s required
          </div>
        </div>
        <div v-if="webApi.secureContextRequired" class="panel">
          <div flex items-center>
            <Icon name="secure" size="1.25rem" /> Secure context required
          </div>
        </div>
        <p v-if="!webApi.availableInWebWorkers && !webApi.userInteractionRequired && !webApi.permissionsRequired && !webApi.secureContextRequired" mt-4 italic>
          No special features or requirements.
        </p>
        <h2>
          FAQ
        </h2>
        <FaqList
          :includeUserInteraction="webApi.userInteractionRequired"
          :includePermissions="webApi.permissionsRequired"
          :includeSecureContext="webApi.secureContextRequired"
          :includeWebWorkers="webApi.availableInWebWorkers"
        />
        <h2>
          Other WebAPI tests
        </h2>
        <div grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4>
          <NuxtLink
            v-for="api in otherWebAPIs" :key="api.id"
            :to="`/apis/${api.id}`"
            :title="`Test ${api.name} support of this device`"
            flex items-center px-4 py-3 bg-zinc-200:25 hover:bg-zinc-200:50 text-sm text-dim font-semibold rounded
          >
            <span flex-1>Test&nbsp;<span text-base>{{ api.name }}</span></span>
            <Icon name="ph:arrow-right" />
          </NuxtLink>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style lang="postcss" scoped>
h1 {
  @apply my-8;
}
h2 {
  @apply mt-16 mb-8 text-dim font-semibold text-1.25rem;
}
.status {
  @apply flex items-center;
  &.available {
    .status-icon {
      @apply text-available border-available bg-lime-100 dark:bg-lime-500/20;
    }
  }
  &.experimental {
    .status-icon {
      @apply text-experimental border-experimental bg-purple-100 dark:bg-purple-500/20;
    }
  }
  &.unavailable {
    .status-icon {
      @apply text-unavailable border-unavailable bg-rose-100 dark:bg-rose-500/20;
    }
  }
  .status-icon {
    @apply flex justify-center items-center w-6 h-6 border-solid border-1 rounded-full box-border;
  }
  .status-label {
    @apply ml-2.5;
  }
}
.box {
  @apply p-3 md:p-4 border-solid border-1 border-base rounded;
}
.panel {
  @apply px-3 md:px-4 py-3 bg-blue-50 dark:bg-blue-400/10 mt-4 rounded;
  .icon {
    @apply mr-2 text-blue-600 dark:text-blue-400;
  }
}
.label {
  @apply mb-1.5 text-sm text-dim font-semibold;
}
.value {
  @apply flex items-center h-5;
}
</style>
