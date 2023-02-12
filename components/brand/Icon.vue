<template>
  <div class="flex flex-col items-center">
    <Icon name="brand" size="1.25rem" />
    <div class="flex">
      <div class="dot bg-lime-500" />
      <div class="dot bg-purple-500" />
      <div class="dot bg-neutral-400" />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.dot {
  @apply flex justify-center items-center w-0.75 h-0.75 md:(w-1 h-1) mx-0.5 rounded-full;
}
</style>
