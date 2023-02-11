<template>
  <div class="wrapper">
    <AppHeader>
      <template #header-middle>
        <AppSearch v-model:searchTerm="searchTerm" v-model:searchMode="searchMode" />
      </template>
      <template #header-right>
        <div class="flex w-full md:justify-end">
          <div class="flex <md:(w-1/3 justify-center) md:mr-4">
            <ApiCounter :supported-count="supportedAPICount" :total-count="totalAPICount" />
          </div>
          <div class="flex <md:(w-1/3 justify-center) md:mr-4">
            <ApiModeSelector v-model="mode" />
          </div>
          <div class="flex <md:(w-1/3 justify-center)">
            <ContextStatus />
          </div>
        </div>
      </template>
    </AppHeader>
    <div class="content flex-1 no-scrollbar">
      <div class="border-b-1 border-zinc-300 dark:border-zinc-700">
        <!-- <div>
          <ListSortingMode />
          <ListFilter />
        </div> -->
        <ApiList v-if="mode === 'list'" :apis="filteredAPIs" />
        <ApiGrid v-else :apis="filteredAPIs" />
      </div>
      <div class="p-6 border-b-1 border-zinc-300 dark:border-zinc-700">
        <ApiLegend />
      </div>
      <div class="px-6 py-12 border-b-1 border-zinc-300 dark:border-zinc-700">
        <div class="<md:text-center">
          <p>
            With this little project you can easily check which
            <NuxtLink
              to="https://developer.mozilla.org/en-US/docs/Web/API"
              title="MDN docs for WebAPIs"
              class="link"
              target="_blank"
            >
              WebAPIs
            </NuxtLink><Icon name="external" class="ml-0.5" /> are available on your device.
            Just open this page on the device you want to test and voilà.
          </p>
          <p class="mt-2">
            Feedback, suggestions, and contributions are very welcome! Get in touch on
            <NuxtLink
              :to="$config.public.twitterProfile"
              title="Toni Engelhardt on Twitter"
              target="_blank"
              class="link"
              @click="$plausible.trackEvent('click: Link', { props: { target: 'Twitter profile' } })"
            >
              Twitter
            </NuxtLink><Icon name="external" class="ml-0.5" /> or
            <NuxtLink
              :to="$config.public.repoUrl"
              title="Contribute on GitHub"
              target="_blank"
              class="link"
              @click="$plausible.trackEvent('click: Link', { props: { target: 'GitHub profile' } })"
            >
              GitHub
            </NuxtLink><Icon name="external" class="ml-0.5" />.
          </p>
          <p class="mt-12 text-xl text-dim font-bold">
            Disclaimer
          </p>
          <p class="mt-6">
            There is no guarantee that the above checks work correctly. If you find any bugs, please let me know at
            <NuxtLink
              :to="`mailto:${$config.public.feedbackEmail}`"
              class="link"
              title="Send feedback via email"
              target="_blank"
            >
              {{ $config.public.feedbackEmail }}
            </NuxtLink> or create an issue on
            <NuxtLink
              :to="$config.public.repoUrl"
              title="Contribute on GitHub"
              target="_blank"
              class="link"
              @click="$plausible.trackEvent('click: Link', { props: { target: 'GitHub profile' } })"
            >
              GitHub
            </NuxtLink><Icon name="external" class="ml-0.5" />.
            Please also note that some browsers (e.g. Brave) might not always report API support correctly and
            signal for certain APIs that they are available when they are actually not.
          </p>
          <p class="mt-12 text-xl text-dim font-bold">
            FAQ
          </p>
          <ul>
            <li class="mt-6">
              <p class="italic">
                What is a <b>WebAPI</b>?
              </p>
              <div class="flex mt-2">
                <div class="<md:hidden mr-3">
                  —
                </div>
                <p>
                  WebAPIs are a collection of specifications defined by
                  <NuxtLink
                    to="https://www.w3.org"
                    title="The World Wide Web Consortium"
                    class="link"
                    target="_blank"
                  >
                    W3C
                  </NuxtLink> and others that allow web applications
                  to interact with device hardware and browser capabilities
                  beyond simple script execution, e.g. storage, service workers, etc.
                </p>
              </div>
            </li>
            <li class="mt-6">
              <p class="italic">
                What is a <b>User Interaction [1]</b> and why is it sometimes required?
              </p>
              <div class="flex mt-2">
                <div class="<md:hidden mr-3">
                  —
                </div>
                <p>
                  A user interaction is usually a click or its accessibility equivalent.
                  This requirement can be really frustrating if you are a developer with good conscience and
                  just want to deliver the best UX for your users, but it is also important for web apps to be safe
                  and to protect users from bad actors. For instance, imagine a website would start tracking your
                  location in the background without your knowledge.
                </p>
              </div>
            </li>
            <li class="mt-6">
              <p class="italic">
                Why are sometimes special <b>Permissions [2]</b> required?
              </p>
              <div class="flex mt-2">
                <div class="<md:hidden mr-3">
                  —
                </div>
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
                  >
                    Permissions API
                  </NuxtLink> that gives you better control over the permissions UX.
                </p>
              </div>
            </li>
            <li class="mt-6">
              <p class="italic">
                What is a <b>Secure Context [3]</b>?
              </p>
              <div class="flex mt-2">
                <div class="<md:hidden mr-3">
                  —
                </div>
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
                  >
                    W3C spec
                  </NuxtLink> and on the
                  <NuxtLink
                    to="https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts"
                    title="Secure contexts on MDN"
                    class="link"
                    target="_blank"
                  >
                    Secure Contexts
                  </NuxtLink>
                  page on MDN.
                </p>
              </div>
            </li>
            <li class="mt-6">
              <p class="italic">
                What are <b>Web Workers [4]</b>?
              </p>
              <div class="flex mt-2">
                <div class="<md:hidden mr-3">
                  —
                </div>
                <p>
                  Web workers allow applications to execute computation-intensive JavaScript in the background.
                  That way, the application can execute heavy tasks without congesting the main thread and negatively
                  impacting the performance of the user interface. You can find more information about web workers in the
                  <NuxtLink
                    to="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"
                    title="What are web workers?"
                    class="link"
                    target="_blank"
                  >
                    Web Worker API documentation
                  </NuxtLink> on MDN.
                </p>
              </div>
            </li>
          </ul>
          <div class="mt-12 flex <md:flex-col">
            <div class="md:w-1/2">
              <p class="mb-6 text-xl text-dim font-bold">
                Sources
              </p>
              <ul class="md:(list-inside list-disc)">
                <li>
                  <NuxtLink
                    to="https://developer.mozilla.org"
                    title="Resources for Developers by Developers"
                    target="_blank"
                    class="link"
                  >
                    MDN Web Docs
                  </NuxtLink><Icon name="external" class="ml-0.5" />
                </li>
                <li class="mt-2">
                  <NuxtLink
                    to="https://developer.chrome.com"
                    title="Chrome's official site to help you build Extensions, publish on the Chrome Web Store, optimize your website, and more..."
                    target="_blank"
                    class="link"
                  >
                    Chrome Developers
                  </NuxtLink><Icon name="external" class="ml-0.5" />
                </li>
                <li class="mt-2">
                  <NuxtLink
                    to="https://www.w3.org"
                    title="World Wide Web Consortium (W3C)"
                    target="_blank"
                    class="link"
                  >
                    W3C
                  </NuxtLink><Icon name="external" class="ml-0.5" />
                </li>
                <li class="mt-2">
                  <NuxtLink
                    to="https://fugu-tracker.web.app/"
                    title="Fugu API Tracker"
                    target="_blank"
                    class="link"
                  >
                    Fugu API Tracker
                  </NuxtLink><Icon name="external" class="ml-0.5" />
                </li>
              </ul>
            </div>
            <div class="<md:mt-12 md:w-1/2">
              <p class="mb-6 text-xl text-dim font-bold">
                More DX projects
              </p>
              <div class="flex <sm:flex-col mt-3">
                <NuxtLink
                  to="https://repo-tracker.com?utm_source=WebAPI%20check"
                  title="Better GitHub Repository Stats and Insights"
                  target="_blank"
                  class="btn-outline <sm:text-xl <md:flex-1 md:w-50 h-12"
                  @click="$plausible.trackEvent('click: RepoTracker')"
                >
                  <Icon name="repotracker" class="dark:text-white" />
                  <span class="ml-1.5 font-black">
                    <span class="text-zinc-500 dark:text-zinc-400">Repo</span>
                    <span class="ml-0.5">Tracker</span>
                  </span>
                </NuxtLink>
                <NuxtLink
                  to="https://github-stats.com?utm_source=WebAPI%20check"
                  title="Link redirection for GitHub repositories to RepoTracker for advanced GitHub repository statistics and insights"
                  target="_blank"
                  class="btn-outline <sm:(mt-3 text-xl) sm:ml-3 <md:flex-1  md:w-50 h-12"
                  @click="$plausible.trackEvent('click: GitHub stats')"
                >
                  <span class="ml-0.5">
                    <span class="font-black">GitHub</span>
                    <span class="ml-1 px-0.75 py-0.25 bg-green-100 text-green-700 dark:(bg-green-900 text-green-300) font-mono font-semibold rounded">-stats</span>
                  </span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-6">
        <ClientOnly>
          <div v-if="_navigator" class="px-4 py-3 bg-zinc-100 dark:bg-zinc-800 rounded-md">
            <p class="font-bold">
              Navigator
            </p>
            <div class="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
              <p v-for="key in ['appCodeName', 'appName', 'appVersion', 'platform', 'vendor', 'languages']" :key="key">
                <span class="font-bold">{{ key }}:</span>&nbsp;<!--
             --><span class="font-mono">{{ Array.isArray(_navigator[key]) ? _navigator[key].join(', ') : _navigator[key] }}</span>
              </p>
            </div>
          </div>
        </ClientOnly>
        <div class="mt-6 md:px-6 text-center text-xl font-thin italic">
          The web platform and an open web are the most important infrastructure projects of our time
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import Fuse from 'fuse.js'
import * as shvl from 'shvl'
import type { Ref } from 'vue'
import { apiData } from '~/utils/apis'
import { sortByField } from '~/utils/sorting'

const config = useRuntimeConfig()

useSeoMeta({
  titleTemplate: '%s',
  title: 'WebAPI check – Test your device\'s WebAPI capabilities',
  ogTitle: config.public.siteName,
  ogDescription: config.public.siteDescription,
  ogImage: `${config.public.siteUrl}/og-image.png`,
})

const mode = useCookie('mode', { default: () => 'grid' }) as Ref<DisplayMode>
const searchTerm = ref('')
const debouncedSearchTerm = refDebounced(searchTerm, 100)
const searchMode = ref(false)

const _navigator: any = computed(() => navigator)

const searchOptions = {
  keys: ['name'],
  threshold: 0.3,
}

const apis = ref(apiData)

const sortedAPIs = computed(() => {
  const apiList = Object.keys(apis.value).reduce((list: WebAPI[], apiKey: string) => {
    list.push(apis.value[apiKey])
    return list
  }, [])
  sortByField(apiList, 'name')
  return apiList
})

const fuse = computed(() => {
  return new Fuse(sortedAPIs.value, searchOptions)
})

const filteredAPIs = computed(() => {
  return debouncedSearchTerm.value
    ? fuse.value.search(debouncedSearchTerm.value).map((result: Fuse.FuseResult<WebAPI>) => result.item)
    : sortedAPIs.value
})

const supportedAPICount = computed(() => {
  return filteredAPIs.value.filter(api => api.available).length
})

const totalAPICount = computed(() => {
  return sortedAPIs.value.length
})

function defaultCheck(api: WebAPI) {
  if (api.path) {
    const partials = api.path.split('.')
    const path = partials[0] === 'window' ? partials.slice(1).join('.') : api.path
    return !!shvl.get(window, path, undefined)
  }
  return false
}

function loadAPIs() {
  if (navigator) {
    Object.keys(apis.value).forEach((apiKey) => {
      const api = apis.value[apiKey]
      const check = api.check || defaultCheck
      if (check.constructor.name === 'AsyncFunction') {
        (check(api) as Promise<boolean>)
          .then((available: boolean) => apis.value[apiKey].available = available)
      } else {
        apis.value[apiKey].available = check(api) as boolean
      }
    })
  }
}

onMounted(() => {
  loadAPIs()
  // console.log('window', window)
  // console.log('navigator', navigator)
})
</script>

<style lang="scss" scoped>
.wrapper {
  @apply flex-col w-100vw h-100vh;
}
.content {
  @apply overflow-y-scroll;
  height: calc(100vh - 11.25rem);
  max-height: calc(100vh - 11.25rem);
  height: calc(100svh - 11.25rem);
  max-height: calc(100svh - 11.25rem);
  @media (min-width: 640px) {
    height: calc(100vh - 6rem);
    max-height: calc(100vh - 6rem);
  }
}
</style>
