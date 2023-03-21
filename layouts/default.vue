<template>
  <div class="layout">
    <!-- Header -->
    <div
      class="flex lt-md:(flex-col justify-center) md:(flex-row items-center) w-full px3 md:px-4 bg-base box-border"
      border="b-solid b-1 base"
    >
      <div class="flex items-center h-12 lt-md:justify-center md:w-1/3">
        <div
          flex-center w-8 h-8 cursor-pointer
          :class="{ 'display-none': $route.path === '/' }"
          @click="$router.go(-1)"
        >
          <Icon name="back" />
        </div>
        <div lt-md:flex-1 flex-center>
          <BrandIcon :class="{ '!md:display-none': $route.path !== '/' }" />
          <BrandName ml-1 />
        </div>
        <div :class="{ 'display-none': $route.path === '/' }" w-8 h-8 />
      </div>
      <div class="md:w-1/3">
        <slot name="header-center" />
      </div>
      <div class="flex justify-between md:(w-1/3 justify-end)">
        <slot name="header-right" />
      </div>
    </div>
    <!-- Content -->
    <div class="content no-scrollbar">
      <slot />
    </div>
    <!-- Footer -->
    <AppFooter />
    <!-- Dialogs -->
    <Teleport to="body">
      <DialogShare />
    </Teleport>
  </div>
</template>

<style lang="postcss" scoped>
.layout {
  @apply flex flex-col w-100vw;
  height: 100vh;
  max-height: 100vh;
  height: 100svh;
  max-height: 100svh;
}
.content {
  @apply flex-1 overflow-x-hidden overflow-y-scroll;
}
</style>
