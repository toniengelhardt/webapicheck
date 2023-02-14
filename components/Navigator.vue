<script setup lang="ts">
const _navigator: any = computed(() => navigator)
</script>

<template>
  <div v-if="_navigator" class="p-3 md:px-4 bg-zinc-100 dark:bg-zinc-800 rounded-md">
    <p class="font-black">
      Navigator
    </p>
    <div mt-2 text-xs text-zinc-600 dark:text-zinc-400>
      <p v-for="key in ['appCodeName', 'appName', 'appVersion', 'platform', 'vendor', 'languages']" :key="key">
        <span class="font-bold">{{ key }}:</span>&nbsp;<!--
     --><span class="font-mono">{{ Array.isArray(_navigator[key]) ? _navigator[key].join(', ') : _navigator[key] }}</span>
      </p>
    </div>
  </div>
</template>
