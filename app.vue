<template>
  <div>
    <SeoKit />
    <NuxtPage :keepalive="{}" />
  </div>
</template>

<script setup lang="ts">
useSchemaOrg([
  defineOrganization({
    name: 'WebAPI check',
    logo: '/icon.png',
  }),
])

// defineOgImageStatic({
//   component: 'OgDefault',
//   provider: 'browser',
// })
</script>
