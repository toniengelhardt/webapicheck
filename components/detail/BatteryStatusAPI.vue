<template>
  <div class="flex items-center py-3">
    <Icon :name="icon" size="1.2rem" />
    <span class="ml-2">{{ level ? level + '%' : 'N/A' }}</span>
  </div>
</template>

<script setup lang="ts">
const level = ref<number | null>(null)
const charging = ref(false)

const icon = computed(() => {
  if (charging.value)
    return 'charging'
  else if (level.value) {
    if (level.value > 80)
      return 'batteryFull'
    else if (level.value > 40)
      return 'batteryMedium'
    else if (level.value > 10)
      return 'batteryLow'
  }
  return 'batteryEmpty'
})

onMounted(() => {
  try {
    (navigator as any)?.getBattery()
      .then((battery: any) => {
        level.value = Math.round(battery.level * 100)
        charging.value = battery.charging
      })
  } catch (error) {}
})
</script>
