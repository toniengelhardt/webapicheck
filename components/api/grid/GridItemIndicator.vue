<template>
  <div
    :title="title"
    class="flex justify-center items-center h-5 w-5 ml-2 cursor-pointer"
    @click="dialogOpen = true"
  >
    <Icon :name="icon" />
  </div>
  <Teleport to="body">
    <AppDialog
      :show="dialogOpen"
      @close="dialogOpen = false"
    >
      <template #header>
        <h3>{{ title }}</h3>
      </template>
      <p class="my-3">{{ description }}</p>
      <p v-if="link">
        <NuxtLink
          :to="link"
          class="link"
          target="_blank"
        >
          More info
        </NuxtLink>
      </p>
    </AppDialog>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{
  icon: string,
  title: string,
  description: string,
  link?: string,
}>()

let dialogOpen = $ref(false)
</script>
