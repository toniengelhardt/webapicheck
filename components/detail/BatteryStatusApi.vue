<template>
  <div class="flex items-center my-3">
    <span>Charge: {{ level || 'N/A' }}</span>
    <Icon v-if="charging" name="charging" size=".85rem" class="ml-1" />
  </div>
</template>

<script setup lang="ts">
let level = $ref<string | null>(null)
let charging = $ref(false)

onMounted(() => {
  try {
    navigator?.getBattery()
      .then(battery => {
        level = Math.round(battery.level * 100) + '%'
        charging = battery.charging
      })
  } catch (error) {}
})
</script>
