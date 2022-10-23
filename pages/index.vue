<template>
  <div class="flex-col w-full min-w-full h-full mih-h-full">
    <header class="sticky">
      <AppHeader>
        <AppSearch
          v-model:searchTerm="searchTerm"
          v-model:searchMode="searchMode"
        />
      </AppHeader>
    </header>
    <div class="content flex-1 py-6">
      <div class="px-3">
        <!-- <div>
          <ListSortingMode />
          <ListFilter />
        </div> -->
        <div>
          <WebApiGrid
            :searchTerm="searchTerm"
            :activeFilter="activeFilter"
          />
        </div>
        <div class="p-3">
          <div class="flex justify-center my-6 text-sm">
            <div class="flex flex-col md:(flex-row items-center)">
              <div
                v-for="item in legend"
                class="flex items-center <md:mb-3 md:mr-6"
              >
                <div class="flex justify-center items-center w-5 h-5 mr-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full">
                  <Icon :name="item.icon" size=".65rem" />
                </div>
                <span v-html="item.label" />
              </div>
            </div>
          </div>
          <div class="<md:text-center">
            <p>
              <Icon name="emojione:construction" /> Work in progress...
            </p>
            <p class="mt-6">
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
            <p class="mt-6">
              Other DX projects: <br class="md:hidden" />
              <NuxtLink to="https://repo-tracker.com" title="Better GitHub Repository Stats and Insights" target="_blank" class="link">RepoTracker</NuxtLink>,
              <NuxtLink to="https://github-stats.com" title="Link redirection for GitHub repositories to RepoTracker for advanced GitHub repository statistics and insights" target="_blank" class="link">GitHub Stats</NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <AppFooter />
    </footer>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "WebAPI Check — Test your Device APIs",
  meta: [{
    name: 'description',
    content: 'Easily check which WebAPIs and interfaces are available on your current device. View capabilities, get detailed API information, and test functionality.',
  }, {
    name: 'keywords',
    content: 'WebAPI, DX, Developer Tools',
  }]
})

const legend = [
  {
    icon: 'secure',
    label: '<a href="https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts" title="What is a secure context?" class="link" target="_blank">Secure Context</a> required',
  },
  {
    icon: 'webworker',
    label: 'Available in <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API" title="What are web workers?" class="link" target="_blank">Web Workers</a>',
  },
  {
    icon: 'experimental',
    label: 'Experimental API',
  }
]

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
