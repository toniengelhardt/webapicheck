<template>
  <div class="flex-col w-full min-w-full h-full mih-h-full">
    <header class="sticky">
      <AppHeader>
        <template #header-middle>
          <AppSearch v-model:searchTerm="searchTerm" v-model:searchMode="searchMode" />
        </template>
        <template #header-right>
          <WebApiCounter :supportedCount="supportedAPICount" :totalCount="totalAPICount" />
          <SecureContextStatus />
        </template>
      </AppHeader>
    </header>
    <div class="content flex-1">
      <div class="p-2 border-b-1 border-zinc-300 dark:border-zinc-700">
        <!-- <div>
          <ListSortingMode />
          <ListFilter />
        </div> -->
        <WebApiGrid :apis="filteredAPIs" />
      </div>
      <div class="px-6 py-12 border-b-1 border-zinc-300 dark:border-zinc-700">
        <WebApiLegend />
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
            >WebAPIs</NuxtLink><Icon name="external" class="ml-0.5" /> are available on your device.
            Just open this page on the device you want to check and voilà.
          </p>
          <p>
            Feedback and suggestions are very welcome! Get in touch on
            <NuxtLink
              :to="$config.twitterProfile"
              title="Toni Engelhardt on Twitter"
              target="_blank"
              class="link"
              @click="$plausible.trackEvent('click: Link', { props: { target: 'Twitter profile' } })"
            >Twitter</NuxtLink><Icon name="external" class="ml-0.5" /> or
            <NuxtLink
              :to="$config.githubProfile"
              title="Toni Engelhardt on GitHub"
              target="_blank"
              class="link"
              @click="$plausible.trackEvent('click: Link', { props: { target: 'GitHub profile' } })"
            >GitHub</NuxtLink><Icon name="external" class="ml-0.5" />.
          </p>
          <p class="mt-6 text-xl text-dim font-bold">FAQ</p>
          <ul>
            <li class="mt-4">
              <p class="italic">What is a <b>User Interaction [1]</b> and why is it sometimes required?</p>
              <div class="flex mt-2">
                <div class="<md:hidden mr-3">—</div>
                <p>
                  A user interaction is usually a click or its accessibility equivalent.
                  This requirement can be really frustrating if you are a developer with good conscience and
                  just want to deliver the best UX for your users, but it is also important for web apps to be safe
                  and to protect users from bad actors. For instance, imagine a website would start tracking your
                  location in the background without your knowledge.
                </p>
              </div>
            </li>
            <li class="mt-4">
              <p class="italic">Why are sometimes special <b>Permissions [2]</b> required?</p>
              <div class="flex mt-2">
                <div class="<md:hidden mr-3">—</div>
                <p>
                  Some APIs directly access critical device hardware and data or expose powerful UI interfaces,
                  e.g. Geolocation API, Bluetooth API, and Notifications API. For these features the browser
                  takes control of managing access permissions so that users can easily manage and revoke them.
                  Features that require permissions will trigger a popup asking for them when used. There is also a
                  dedicated
                  <NuxtLink
                    to="https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API/Using_the_Permissions_API"
                    target="_blank"
                    title="Using the Permissions API on MDN"
                    class="link"
                  >Permissions API</NuxtLink> that gives you better control over the permissions UX.
                </p>
              </div>
            </li>
            <li class="mt-4">
              <p class="italic">What is a <b>Secure Context [3]</b>?</p>
              <div class="flex mt-2">
                <div class="<md:hidden mr-3">—</div>
                <p>
                  A secure context is a Window or Worker for which certain minimum standards of authentication and
                  confidentiality are met. Resources delivered locally on <span class="code-inline">http://127.0.0.1</span>,
                  <span class="code-inline">http://localhost</span>, <span class="code-inline">http://*.localhost</span>,
                  and <span class="code-inline">file://</span> are generally considered secure. For non-local resources
                  to be considered secure they need to be served over
                  <span class="code-inline">https://</span> or <span class="code-inline">wss://</span>
                  and the security properties of the network channel they're delivered through must not be considered
                  deprecated. You can find more information on <i>Secure Contexts</i> in the
                  <NuxtLink
                    to="https://w3c.github.io/webappsec-secure-contexts/"
                    title="Secure contexts spec on W3C"
                    class="link"
                    target="_blank"
                  >W3C spec</NuxtLink> and on the
                  <NuxtLink
                    to="https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts"
                    title="Secure contexts on MDN"
                    class="link"
                    target="_blank"
                  >Secure Contexts</NuxtLink>
                  page on MDN.
                </p>
              </div>
            </li>
            <li class="mt-4">
              <p class="italic">What are <b>Web Workers [4]</b>?</p>
              <div class="flex mt-2">
                <div class="<md:hidden mr-3">—</div>
                <p>
                  Web workers allow applications to execute computation-intensive JavaScript in the background.
                  That way, the application can execute heavy tasks without congesting the main thread and negatively
                  impacting the performance of the user interface. You can find more information about web workers in the
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"
                    title="What are web workers?"
                    class="link"
                    target="_blank"
                  >Web Worker API documentation</a> on MDN.
                </p>
              </div>
            </li>
          </ul>
          <p class="mt-6 mb-3 text-xl text-dim font-bold">Sources</p>
          <ul class="list md:(list-inside list-disc)">
            <li><NuxtLink
              to="https://developer.mozilla.org"
              title="Resources for Developers by Developers"
              target="_blank"
              class="link"
            >MDN Web Docs</NuxtLink><Icon name="external" class="ml-0.5" /></li>
            <li><NuxtLink
              to="https://developer.chrome.com"
              title="Chrome's official site to help you build Extensions, publish on the Chrome Web Store, optimize your website, and more..."
              target="_blank"
              class="link"
            >Chrome Developers</NuxtLink><Icon name="external" class="ml-0.5" /></li>
            <li><NuxtLink
              to="https://www.w3.org"
              title="World Wide Web Consortium (W3C)"
              target="_blank"
              class="link"
            >W3C</NuxtLink><Icon name="external" class="ml-0.5" /></li>
            <li><NuxtLink
              to="https://fugu-tracker.web.app/"
              title="Fugu API Tracker"
              target="_blank"
              class="link"
            >Fugu API Tracker</NuxtLink><Icon name="external" class="ml-0.5" /></li>
          </ul>
          <p class="mt-6">
            More DX projects:
          </p>
          <div class="flex mt-3">
            <NuxtLink
              to="https://repo-tracker.com?utm_source=WebAPI%20check"
              title="Better GitHub Repository Stats and Insights"
              target="_blank"
              class="flex justify-center items-center <md:flex-1 md:w-40 h-12 bg-zinc-100 dark:bg-zinc-800"
              @click="$plausible.trackEvent('click: RepoTracker')"
            >
              <Icon name="ph:binoculars-duotone" class="dark:text-white" />
              <span class="ml-1 font-black">
                <span class="text-zinc-500 dark:text-zinc-400">Repo</span>
                <span class="ml-0.5">Tracker</span>
              </span>
            </NuxtLink>
            <NuxtLink
              to="https://github-stats.com?utm_source=WebAPI%20check"
              title="Link redirection for GitHub repositories to RepoTracker for advanced GitHub repository statistics and insights"
              target="_blank"
              class="flex justify-center items-center <md:flex-1 md:w-40 h-12 bg-zinc-100 dark:bg-zinc-800 ml-3"
              @click="$plausible.trackEvent('click: GitHub stats')"
            >
              <span class="ml-0.5">
                <span class="font-black">GitHub</span>
                <span class="ml-0.5 px-0.75 py-0.25 bg-green-200 text-green-700 dark:(bg-green-800 text-green-300) font-mono font-semibold rounded">-stats</span>
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="p-6">
        <ClientOnly>
          <div v-if="_navigator" class="p-6 bg-zinc-100 dark:bg-zinc-800">
            <p class="font-bold">Navigator</p>
            <div class="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
              <p v-for="key in ['appCodeName', 'appName', 'appVersion', 'platform', 'vendor', 'languages']">
                <span class="font-bold">{{ key }}:</span>
                <span class="font-mono">{{ Array.isArray(_navigator[key]) ? _navigator[key].join(', ') : _navigator[key] }}</span>
              </p>
            </div>
          </div>
        </ClientOnly>
        <div class="mt-6 px-6 text-center text-xl font-thin italic">
          The web platform and an open web are the most important infrastructure projects of our time
        </div>
      </div>
    </div>
    <footer>
      <AppFooter />
    </footer>
  </div>
</template>

<script setup lang="ts">
import Fuse from 'fuse.js'
import { apiData } from '~/utils/apis'
import { sortByField } from '~/utils/sorting'

useHead({
  title: "WebAPI check — Test your device's capabilities",
  meta: [{
    name: 'description',
    content: 'Easily check which WebAPIs and interfaces are available on your current device. View capabilities, get detailed API information, and test functionality.',
  }, {
    name: 'keywords',
    content: 'WebAPI, DX, Developer Tools',
  }]
})



let searchTerm = $ref('')
let searchMode = $ref(false)
// let activeFilter = $ref(null)

const _navigator: any = $computed(() => navigator)

const searchOptions = {
  keys: ['name'],
  threshold: 0.3,
}

let apis = $ref(apiData)

const sortedAPIs = $computed(() => {
  const apiList = Object.keys(apis).reduce((list: WebAPI[], apiKey: string) => {
    list.push(apis[apiKey])
    return list
  }, [])
  sortByField(apiList, 'name')
  return apiList
})

const fuse = $computed(() => {
  return new Fuse(sortedAPIs, searchOptions)
})

const filteredAPIs = $computed(() => {
  return searchTerm
    ? fuse.search(searchTerm).map((result: Fuse.FuseResult<WebAPI>) => result.item)
    : sortedAPIs
})

const supportedAPICount = $computed(() => {
  return filteredAPIs.filter(api => api.available).length
})

const totalAPICount = $computed(() => {
  return sortedAPIs.length
})

function defaultCheck(apiKey: string, api: WebAPI) {
  const target = api.path === 'navigator' ? navigator : window
  return !!target[apiKey]
}

function loadAPIs() {
  if (navigator) {
    Object.keys(apis).forEach(apiKey => {
      const api = apis[apiKey]
      const check = api.check || defaultCheck
      if (check.constructor.name === "AsyncFunction") {
        check(apiKey, api)
          .then((available: boolean) => apis[apiKey].available = available)
      } else {
        apis[apiKey].available = check(apiKey, api)
      }
    })
  }
}

onMounted(() => {
  loadAPIs()
  console.log('window', window)
  console.log('navigator', navigator)
})
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
