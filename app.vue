<template>
  <div>
    <SeoKit />
    <NuxtPage />
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
