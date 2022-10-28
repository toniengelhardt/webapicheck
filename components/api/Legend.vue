<template>
  <div class="flex justify-center">
    <div class="flex flex-col md:(flex-row items-center) text-sm">
      <div
        v-for="item in legend"
        class="flex items-center <md:(not-last:mb-3 justify-center) md:mr-6"
      >
        <div class="flex justify-center items-center w-5 h-5 mr-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full">
          <Icon :name="item.icon" size=".65rem" />
        </div>
        <span v-html="item.label" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const legend = [
  {
    icon: 'interaction',
    label: '<i>User Interaction<sup class="ml-0.5">1</sup></i> required',
  },
  {
    icon: 'permission',
    label: '<i>Permission/s<sup class="ml-0.5">2</sup></i> required',
  },
  {
    icon: 'secure',
    label: '<i>Secure Context<sup class="ml-0.5">3</sup></i> required',
  },
  {
    icon: 'webworker',
    label: 'Available in <i>Web Workers<sup class="ml-0.5">4</sup></i>',
  },
  {
    icon: 'experimental',
    label: 'Experimental API',
  }
]
</script>
