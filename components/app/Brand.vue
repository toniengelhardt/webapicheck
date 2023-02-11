<template>
  <div class="flex flex-row items-center font-bold text-zinc-500 dark:text-zinc-400">
    <div class="flex flex-col items-center">
      <Icon name="brand" size="1.25rem" />
      <div class="flex">
        <div class="dot bg-lime-500" />
        <div class="dot bg-purple-500" />
        <div class="dot bg-neutral-400" />
      </div>
    </div>
    <!-- <div class="flex-center w-9 h-9">
      <IconWebAPIcheck class="w-full h-full" />
    </div> -->
    <div class="ml-2 text-1.2rem">
      <span class="text-black dark:text-white font-black">WebAPI</span> check<!--
   --><!-- <span class="ml-1.5 text-xs text-rose-500 font-bold bg-rose-50 dark:bg-zinc-800 px-1 py-0.25 rounded">beta</span> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dot {
  @apply flex justify-center items-center w-0.75 h-0.75 md:(w-1 h-1) mx-0.5 rounded-full;
}
</style>
