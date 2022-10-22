<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
    <WebApiGridItem
      v-for="api in sortedAPIs"
      :key="api.key"
      :api="api"
    />
  </div>
</template>

<script setup lang="ts">
import { sortByField } from '~/utils/sorting'

let apis: { [key: string]: WebAPI } = $ref({
  clipboard: {
    name: 'Clipboard API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API',
  },
  digitalGoods: {
    name: 'Digital Goods API',
    source: 'chrome',
    url: 'https://developer.chrome.com/docs/android/trusted-web-activity/receive-payments-play-billing/',
  },
  wakeLock: {
    name: 'Screen Wake Lock API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API',
    experimental: true,
  },
  storage: {
    name: 'Storage',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Storage_API',
  },
  vibration: {
    name: 'Vibration API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API',
  },
  virtualKeyboard: {
    name: 'VirtualKeyboardAPI',
    source: 'chrome',
    url: 'https://developer.chrome.com/docs/web-platform/virtual-keyboard/',
  },
})

const sortedAPIs = $computed(() => {
  const apiList = Object.keys(apis).reduce((list: WebAPI[], apiKey: string) => {
    list.push(apis[apiKey])
    return list
  }, [])
  sortByField(apiList, 'name')
  return apiList
})

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
