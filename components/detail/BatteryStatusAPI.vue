<template>
  <div class="flex items-center py-3">
    <Icon :name="icon" size="1.2rem" />
    <span class="ml-2">{{ level ? level + '%' : 'N/A' }}</span>
  </div>
</template>

<script setup lang="ts">
let level = $ref<number | null>(null)
let charging = $ref(false)

const icon = $computed(() => {
  if (charging) return 'charging'
  else if (level) {
    if (level > 80) return 'batteryFull'
    else if (level > 40) return 'batteryMedium'
    else if (level > 10) return 'batteryLow'
  }
  return 'batteryEmpty'
})

onMounted(() => {
  try {
    navigator?.getBattery()
      .then(battery => {
        level = Math.round(battery.level * 100)
        charging = battery.charging
      })
  } catch (error) {}
})
</script>
