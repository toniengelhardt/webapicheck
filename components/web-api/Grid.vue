<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
    <WebApiGridItem
      v-for="api in filteredAPIs"
      :key="api.key"
      :api="api"
    />
  </div>
</template>

<script setup lang="ts">
import Fuse from 'fuse.js'
import { apiData } from '~/utils/apis'
import { sortByField } from '~/utils/sorting'

const props = defineProps<{
  searchTerm: string,
  activeFilter: string | null,
}>()

const searchOptions = {
  keys: ['name'],
  threshold: 0.3,
}

let apis = $ref(apiData)

const sortedAPIs = $computed(() => {
  const apiList = Object.keys(apis).reduce((list: WebAPI[], apiKey: string) => {
    list.push(apis[apiKey])
    return list
  }, [])
  sortByField(apiList, 'name')
  return apiList
})

const fuse = $computed(() => {
  return new Fuse(sortedAPIs, searchOptions)
})

const filteredAPIs = $computed(() => {
  return props.searchTerm
    ? fuse.search(props.searchTerm).map((result: Fuse.FuseResult<WebAPI>) => result.item)
    : sortedAPIs
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
