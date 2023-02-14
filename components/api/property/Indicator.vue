<template>
  <div
    :title="title"
    flex justify-center items-center h-5 w-5 ml-4 md:ml-2 text-sm bg-black:10
    hover:bg-black:20 dark:bg-white:10 dark:hover:bg-white:20
    rounded cursor-pointer
    @click.prevent="dialogOpen = true"
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
      <p class="my-3">
        {{ description }}
      </p>
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
  icon: string
  title: string
  description: string
  link?: string
}>()

const dialogOpen = ref(false)
</script>
