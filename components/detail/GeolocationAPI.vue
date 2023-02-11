<template>
  <div class="py-3">
    <div v-if="coords" class="text-sm">
      <span>Lat: {{ coords.latitude }}</span>
      <span class="ml-3">Lng: {{ coords.longitude }}</span>
    </div>
    <div v-else>
      <div class="btn-xs btn-default cursor-pointer" @click="updatePosition()">
        <Icon v-if="loading" name="spinner" class="animate-spin" />
        <Icon v-else name="location" />
        <span class="mx-1.5">Get location</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const loading = ref(false)
const coords = ref<{ latitude: number; longitude: number } | undefined>(undefined)

function updatePosition() {
  loading.value = true
  navigator?.geolocation?.getCurrentPosition((pos) => {
    coords.value = pos.coords
    loading.value = false
  }, () => loading.value = false)
}
</script>
