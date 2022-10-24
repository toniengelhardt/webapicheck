<template>
  <div class="py-3">
    <div v-if="coords" class="text-sm">
      <span>Lat: {{ coords.latitude }}</span>
      <span class="ml-3">Lng: {{ coords.longitude }}</span>
    </div>
    <div v-else>
      <a class="btn-xs btn-base cursor-pointer" @click="updatePosition()">
        <Icon v-if="loading" name="spinner" class="animate-spin" />
        <Icon v-else name="location" />
        <span class="mx-1.5">Get location</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
let loading = $ref(false)
let coords = $ref<{ latitude: number, longitude: number } | undefined>(undefined)

function updatePosition() {
  loading = true
  navigator?.geolocation?.getCurrentPosition(pos => {
    coords = pos.coords
    loading = false
  }, () => loading = false)
}
</script>
