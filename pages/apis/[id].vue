<script setup lang="ts">
definePageMeta({
  validate: ({ params }) => {
    return Object.keys(webApiData).includes(params.id.toString())
  },
})

const route = useRoute()

const webAPIStatuses: Ref<{ [key: keyof typeof webApiData]: boolean }> = useState('WebAPIStatuses')

const webApiId = computed(() => route.params.id.toString())
const webApi = computed(() => ({ id: webApiId.value, ...webApiData[webApiId.value] }))
const available = computed(() => webAPIStatuses.value[webApiId.value])

useSeoMeta({
  title: () => webApi.value.name,
  description: () => `Details for "${webApi.value.name}". WebAPI device test for your current device, general information, and requirements.`,
})

const status = computed(() => {
  if (available) {
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
  if (available === false) {
    return {
      name: 'unavailable',
      icon: 'cross',
      label: 'Not available on this device',
    }
  }
  return undefined
})

onMounted(() => useLoadWebApis([webApi.value]))
</script>

<template>
  <div>
    <NuxtLayout>
      <div max-w-screen-lg mx-auto px-4>
        <h1>
          {{ webApi.name }}
        </h1>
        <div class="status" :class="status?.name">
          <span class="status-icon">
            <Icon :name="status?.icon || ''" />
          </span>
          <span class="status-label">
            {{ status?.label }}
          </span>
        </div>
        <div class="box" grid md:grid-cols-2 gap-4 mt-8>
          <div>
            <div class="label">
              Property
            </div>
            <div class="value">
              {{ webApi.path }}
            </div>
          </div>
          <div>
            <div class="label">
              Source
            </div>
            <div class="value">
              <ClientOnly>
                <ApiSource :api="webApi" />
              </ClientOnly>
            </div>
          </div>
          <div>
            <div class="label">
              Documentation
            </div>
            <div inline-flex items-center>
              <NuxtLink
                :to="webApi.path"
                :title="`Documentation for ${webApi.name}`"
                target="_blank"
                btn-xs btn-outline
              >
                OPEN <Icon name="external" class="ml-0.5" />
              </NuxtLink>
            </div>
          </div>
        </div>
        <div mt-8>
          <div v-if="webApi.experimental" class="panel">
            <div flex items-center>
              <Icon name="experimental" mr-1.5 text-faint size="1.25rem" /> Experimental
            </div>
          </div>
          <div v-if="webApi.availableInWebWorkers" class="panel">
            <div flex items-center>
              <Icon name="webworker" mr-1.5 text-faint size="1.25rem" /> Available in Web Workers
            </div>
          </div>
          <div v-if="webApi.userInteractionRequired" class="panel">
            <div flex items-center>
              <Icon name="interaction" mr-1.5 text-faint size="1.25rem" /> User interaction required
            </div>
          </div>
          <div v-if="webApi.permissionsRequired" class="panel">
            <div flex items-center>
              <Icon name="permission" mr-1.5 text-faint size="1.25rem" /> Permission/s required
            </div>
          </div>
          <div v-if="webApi.secureContextRequired" class="panel">
            <div flex items-center>
              <Icon name="secure" mr-1.5 text-faint size="1.25rem" /> Secure context required
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style lang="postcss" scoped>
h1 {
  @apply my-8;
}
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
    @apply flex justify-center items-center w-6 h-6 border-solid border-1 rounded-full box-border;
  }
  .status-label {
    @apply ml-2.5;
  }
}
.box {
  @apply p-4 border-solid border-1 border-base rounded;
}
.panel {
  @apply p-4 bg-surface not-first:mt-4 rounded;
}
.label {
  @apply mb-1.5 text-sm text-dim font-bold;
}
.value {
  @apply flex items-center h-5;
}
</style>
