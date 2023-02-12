<template>
  <div class="flex <md:(flex-col justify-center h-33) md:(flex-row items-center h-12) w-full px-4 bg-base border-b-1 border-default">
    <div class="flex <md:(justify-center py-3) md:w-1/3">
      <AppBrand />
    </div>
    <div class="md:w-1/3">
      <slot name="header-center" />
    </div>
    <div class="flex justify-between py-3 md:(w-1/3 justify-end)">
      <slot name="header-right" />
    </div>
  </div>
</template>
