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
    <div class="content flex-1">
      <div class="px-3 pt-3 pb-6 border-b-1 border-zinc-300 dark:border-zinc-700">
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
        <div class="mt-6">
          <div class="flex justify-center">
            <div class="flex flex-col md:(flex-row items-center) text-sm">
              <div
                v-for="item in legend"
                class="flex items-center <md:(not-last:mb-3 justify-center) md:mr-6"
              >
                <div class="flex justify-center items-center w-5 h-5 mr-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full">
                  <Icon :name="item.icon" size=".65rem" />
                </div>
                <span v-html="item.label" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-6 border-b-1 border-zinc-300 dark:border-zinc-700">
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
            >WebAPIs</NuxtLink><Icon name="external" class="ml-0.5" /> are available on your device. Just open this page
            on the device you want to check and voilà.
          </p>
          <p>
            Feedback is very welcome! Get in touch on
            <NuxtLink :to="$config.twitterProfile" title="Toni Engelhardt on Twitter" target="_blank" class="link">Twitter</NuxtLink> or
            <NuxtLink :to="$config.githubProfile" title="Toni Engelhardt on GitHub" target="_blank" class="link">GitHub</NuxtLink>.
          </p>
          <p class="mt-6 text-dim">FAQ:</p>
          <ul>
            <li>
              <p>What is a "Secure Context"?</p>
              <p><i>— A secure context ...</i></p>
            </li>
            <li>
              <p></p>
            </li>
          </ul>
          <p class="mt-6 text-dim font-bold">Sources:</p>
          <ul class="list-inside list-disc">
            <li><NuxtLink to="https://developer.mozilla.org" title="Resources for Developers by Developers" target="_blank" class="link">MDN Web Docs</NuxtLink><Icon name="external" class="ml-0.5" /></li>
            <li><NuxtLink to="https://developer.chrome.com" title="Chrome's official site to help you build Extensions, publish on the Chrome Web Store, optimize your website, and more..." target="_blank" class="link">Chrome Developers</NuxtLink><Icon name="external" class="ml-0.5" /></li>
          </ul>
          <p class="mt-6">
            More DX projects: <br class="md:hidden" />
            <NuxtLink to="https://repo-tracker.com" title="Better GitHub Repository Stats and Insights" target="_blank" class="link">RepoTracker</NuxtLink><Icon name="external" class="ml-0.5" />,
            <NuxtLink to="https://github-stats.com" title="Link redirection for GitHub repositories to RepoTracker for advanced GitHub repository statistics and insights" target="_blank" class="link">GitHub Stats</NuxtLink><Icon name="external" class="ml-0.5" />
          </p>
        </div>
      </div>
      <ClientOnly>
        <div v-if="_navigator" class="m-3 p-3 bg-zinc-100 dark:bg-zinc-800">
          <p class="font-bold">Navigator</p>
          <div class="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
            <p v-for="key in ['appCodeName', 'appName', 'appVersion', 'platform', 'vendor', 'languages']">
              <span class="font-bold">{{ key }}:</span> <span class="pre">{{ Array.isArray(_navigator[key]) ? _navigator[key].join(', ') : _navigator[key] }}</span>
            </p>
          </div>
        </div>
      </ClientOnly>
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
    icon: 'interaction',
    label: 'User Interaction required',
  },
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

const _navigator = $computed(() => navigator)
</script>

<style lang="scss" scoped>
header {
  @apply bg-white dark:bg-zinc-900;
  position: sticky;
  top: 0;
  z-index: 1001;
}
.content {
  min-height: calc(100vh - 8rem);
}
</style>
