<template>
  <div class="flex-col w-full min-w-full h-full mih-h-full">
    <header class="sticky">
      <AppHeader>
        <!-- <Popover class="relative">
          <PopoverButton>Solutions</PopoverButton>

          <PopoverPanel class="absolute z-10">
            <div class="grid grid-cols-2">
              <a href="/analytics">Analytics</a>
              <a href="/engagement">Engagement</a>
              <a href="/security">Security</a>
              <a href="/integrations">Integrations</a>
            </div>
          </PopoverPanel>
        </Popover> -->
      </AppHeader>
    </header>
    <div class="content flex-1">
      <div class="px-3 md:px-6">
        <AppSearch
          v-model:searchTerm="searchTerm"
          v-model:searchMode="searchMode"
        />
        <WebApiGrid
          :searchTerm="searchTerm"
          :activeFilter="activeFilter"
          class="mt-6"
        />
        <div class="mt-6 text-sm">
          <div class="flex flex-col md:(flex-row items-center)">
            <div class="mr-6">
              <Icon name="secure" /> Secure context required
            </div>
            <div class="mr-6">
              <Icon name="webworker" /> Available in web workers
            </div>
            <div class="mr-6">
              <Icon name="experimental" /> Experimental API
            </div>
          </div>
        </div>
        <div class="mt-6 text-sm">
          <p>
            <Icon name="emojione:construction" /> Work in progress...
          </p>
          <p class="mt-2">
            With this little project you can easily check which
            <NuxtLink
              to="https://developer.mozilla.org/en-US/docs/Web/API"
              title="MDN docs for WebAPIs"
              class="link"
              target="_blank"
            >WebAPIs</NuxtLink> are available on your device. Just open this page
            on the device you want to check and voilà.
          </p>
          <p>
            If you are interested in specific APIs that are still missing, just reach out on Twitter and I'll add them.
          </p>
        </div>
      </div>
    </div>
    <footer>
      <AppFooter />
    </footer>
  </div>
</template>

<script setup lang="ts">
let searchTerm = $ref('')
let searchMode = $ref(false)
let activeFilter = $ref(null)
</script>

<style lang="scss" scoped>
header {
  @apply bg-white dark:bg-neutral-900;
  position: sticky;
  top: 0;
  z-index: 1001;
}
.content {
  min-height: calc(100vh - 8rem);
}
</style>
