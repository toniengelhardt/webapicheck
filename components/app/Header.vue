<template>
  <div class="flex <md:(flex-col justify-center) md:(flex-row items-center h-16) px-6 border-b-1 border-zinc-300 dark:border-zinc-700">
    <div class="flex-1 flex items-center <md:(justify-center py-3) md:w-1/5">
      <AppBrand />
    </div>
    <div class="md:w-3/5">
      <slot name="header-middle" />
    </div>
    <div class="flex justify-center <md:py-3 md:(w-1/5 justify-end)">
      <slot name="header-right" />
    </div>
  </div>
</template>
