<template>
  <div class="flex justify-center w-full">
    <div class="flex flex-col items-start w-full text-sm">
      <div
        v-for="(item, idx) in legend"
        :key="idx"
        class="flex items-center not-last:mb-3"
      >
        <div class="flex shrink-0 justify-center items-center w-5 h-5 mr-2 bg-zinc-100 dark:bg-zinc-800 rounded-full">
          <Icon :name="item.icon" size=".65rem" />
        </div>
        <div leading-tight v-html="item.label" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const legend = [
  {
    icon: 'interaction',
    label: '<i>User Interaction</i> required',
  },
  {
    icon: 'permission',
    label: '<i>Permission/s</i> required',
  },
  {
    icon: 'secure',
    label: '<i>Secure Context</i> required',
  },
  {
    icon: 'webworker',
    label: 'Available in <i>Web Workers</i>',
  },
  /* {
    icon: 'experimental',
    label: 'Experimental API',
  } */
]
</script>
