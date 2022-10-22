<template>
  <div class="grid grid-cols-5 gap-6">
    <WebApiGridItem
      v-for="api in sortedAPIs"
      :key="api.key"
      :data="api"
    />
  </div>
</template>

<script setup lang="ts">
let apis: { [key: string]: any } = $ref({
  clipboard: {
    name: 'ClipboardAPI',
    available: undefined,
  },
  storage: {
    name: 'StorageAPI',
    available: undefined,
  },
  vibration: {
    name: 'ClipboardAPI',
    available: undefined,
  },
  virtualKeyboard: {
    name: 'VirtualKeyboardAPI',
    available: undefined,
  },
  digitalGoods: {
    name: 'DigitalGoodsAPI',
    available: undefined,
  },
})

const sortedAPIs = $computed(() => Object.keys(apis).map(apiKey => {
  const api = apis[apiKey]
  return {
    key: apiKey,
    name: api.name,
    available: api.available,
  }
}))

function loadAPIs() {
  if (window?.navigator) {
    Object.keys(apis).forEach(apiKey => {
      apis[apiKey].available = !!window.navigator[apiKey as keyof Navigator]
    })
  }
}

onMounted(() => {
  loadAPIs()
})
</script>
