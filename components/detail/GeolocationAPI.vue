<template>
  <div class="flex items-center my-3">
    <Icon name="location" size="1.2rem" />
    <span class="ml-2">{{ lat || 'N/A' }}</span>
    <span class="ml-2">{{ lng || 'N/A' }}</span>
  </div>
</template>

<script setup lang="ts">
let activated = $ref(false)
let lat = $ref<number | undefined>(undefined)
let lng = $ref<number | undefined>(undefined)

function updatePosition(pos: GeolocationPosition) {
  lat = pos.coords.latitude
  lng = pos.coords.longitude
}

onMounted(() => {
  console.log(navigator.geolocation);

  // try {
  //   navigator?.geolocation.watchPosition(updatePosition)
  // } catch (error) {}
})
</script>
