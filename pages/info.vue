<script setup lang="ts">
useSeoMeta({
  title: 'Info',
  description: 'General information about WebAPIs and WebAPIcheck, plus Legend, Disclaimer, FAQs, Resources, and Browser Navigator.',
})
</script>

<template>
  <div>
    <NuxtLayout>
      <div max-w-screen-md mx-auto px-3 md:px-4 py-4 md:py-12>
        <h1 mb-8 md:mb-12>
          Info
        </h1>
        <p>
          With this little project you can easily check which
          <NuxtLink
            to="https://developer.mozilla.org/en-US/docs/Web/API"
            title="MDN docs for WebAPIs"
            class="link"
            target="_blank"
          >
            WebAPIs
          </NuxtLink><Icon name="external" class="ml-0.5" /> are currently available on your device.
          Just open the page on the device you want to test and voilà.
        </p>
        <p class="mt-4">
          Feedback, suggestions, and contributions are very welcome! Get in touch on
          <span whitespace-nowrap><NuxtLink
            :to="$config.public.twitterProfile"
            title="Toni Engelhardt on Twitter"
            target="_blank"
            class="link"
            @click="useTrackEvent('click: Link', { props: { target: 'Twitter profile' } })"
          >
            Twitter
          </NuxtLink><Icon name="external" class="ml-0.5" /></span> or
          <span whitespace-nowrap><NuxtLink
            :to="$config.public.repoUrl"
            title="Contribute on GitHub"
            target="_blank"
            class="link"
            @click="useTrackEvent('click: Link', { props: { target: 'GitHub repo' } })"
          >
            GitHub
          </NuxtLink><Icon name="external" class="ml-0.5" /></span>.
        </p>
        <h2>Legend</h2>
        <ApiLegend />
        <h2>Share your configuration</h2>
        <p>
          Thanks to the amazing idea and work by
          <NuxtLink
            to="https://github.com/paoloricciuti"
            title="Paolo Ricciuti's GitHub profile"
            target="_blank"
            link
          >Paolo Ricciuti</NuxtLink> you can share your device's WebAPI capabilities
          via magic link. Just open the
          <NuxtLink
            to="/"
            title="WebAPI check test page"
            link
          >test page</NuxtLink> and click share. Anyone opening the link will see
          the exact same configuration that you see on your device. This can be very
          useful for debuging purposes. If something works on your development device
          but doesn't work on a user's device just ask them to share a link and you can
          instantly confirm or rule out any issues related to WebAPIs.
        </p>
        <h2>Disclaimer</h2>
        <p>
          There is no guarantee that the above checks work correctly. If you find any bugs, please let me know at
          <NuxtLink
            :to="`mailto:${$config.public.feedbackEmail}`"
            title="Send feedback via email"
            target="_blank"
            link
            @click="useTrackEvent('click: Link', { props: { target: 'Feedback' } })"
          >
            {{ $config.public.feedbackEmail }}
          </NuxtLink> or
          <NuxtLink
            :to="`${$config.public.repoUrl}/issues`"
            title="GitHub issues for WebAPIcheck"
            target="_blank"
            link
            @click="useTrackEvent('click: Link', { props: { target: 'GitHub issues' } })"
          >
            create an issue
          </NuxtLink><Icon name="external" class="ml-0.5" />
          in the GitHub repo.
          Please also note that some browsers (e.g.
          <NuxtLink
            to="https://brave.com"
            title="Brave browser"
            target="_blank"
            class="link"
            @click="useTrackEvent('click: Link', { props: { target: 'Brave' } })"
          >
            Brave
          </NuxtLink><Icon name="external" class="ml-0.5" />)
          might not always report API support correctly and
          signal for certain APIs that they are available when they are actually not.
        </p>
        <h2>PWA</h2>
        <p>
          WebAPIcheck is a
          <NuxtLink
            to="https://web.dev/progressive-web-apps"
            title="Progressive Web Apps on web.dev"
            target="_blank"
            class="link"
            @click="useTrackEvent('click: Link', { props: { target: 'Progressive Web Apps (PWA)' } })"
          >
            Progressive Web App (PWA)
          </NuxtLink><Icon name="external" class="ml-0.5" />,
          meaning you can install it on your mobile- and/or desktop device to
          get a better user experience.
        </p>
        <h2>FAQ</h2>
        <FaqList
          :includeUserInteraction="true"
          :includePermissions="true"
          :includeSecureContext="true"
          :includeWebWorkers="true"
        />
        <div mt-12 flex lt-md:flex-col>
          <div class="md:w-1/2">
            <p class="mb-6 text-xl text-dim font-bold">
              Resources
            </p>
            <ul class="pl-4 md:pl-0.5 md:list-disc-inside">
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
          <div class="lt-md:mt-12 md:w-1/2">
            <p class="mb-6 text-xl text-dim font-bold">
              More DX projects
            </p>
            <div class="flex flex-col gap-3 mt-3">
              <NuxtLink
                to="https://repo-tracker.com?utm_source=WebAPI%20check"
                title="Better GitHub Repository Stats and Insights"
                target="_blank"
                class="btn-outline lt-sm:text-xl w-full h-12"
                @click="useTrackEvent('click: RepoTracker')"
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
                class="btn-outline lt-sm:text-xl w-full h-12"
                @click="useTrackEvent('click: GitHub stats')"
              >
                <span class="ml-0.5">
                  <span class="font-bold font-mono">GitHub</span>
                  <span class="ml-0.5 px-0.75 py-0.25 bg-green-100 text-green-700 dark:(bg-green-900 text-green-300) font-mono font-semibold rounded">-stats</span>
                </span>
              </NuxtLink>
              <NuxtLink
                to="https://promptmetheus.com?utm_source=WebAPI%20check"
                title="Compose, test, and evaluate one-shot prompts for the OpenAI platform"
                target="_blank"
                class="btn-outline lt-sm:text-xl w-full h-12 font-black uppercase"
                @click="useTrackEvent('click: RepoTracker')"
              >
                Pr<Icon name="promptmetheus" size="1rem" pb-0.6 class="mt-0.5 -mx-0.15" text-rose-400 />mpt<span text-dim font-normal tracking-tighter>metheus</span>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div mt-12 text-center text-2xl font-thin italic>
          The web platform and an open web are the most important infrastructure projects of our time!
        </div>
        <div mt-12>
          <ClientOnly>
            <Navigator />
          </ClientOnly>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style lang="postcss" scoped>
h2 {
  @apply mt-8 md:mt-12;
}
</style>
