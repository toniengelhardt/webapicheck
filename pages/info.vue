<script setup lang="ts">
useSeoMeta({
  title: 'Info',
  description: 'General information about WebAPIs and WebAPIcheck, plus Legend, Disclaimer, FAQs, Resources, and Browser Navigator.',
})
</script>

<template>
  <div>
    <NuxtLayout>
      <div max-w-screen-md mx-auto px-4 py-12>
        <h1>Info</h1>
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
        <h2>Disclaimer</h2>
        <p>
          There is no guarantee that the above checks work correctly. If you find any bugs, please let me know at
          <NuxtLink
            :to="`mailto:${$config.public.feedbackEmail}`"
            class="link"
            title="Send feedback via email"
            target="_blank"
            @click="useTrackEvent('click: Link', { props: { target: 'Feedback' } })"
          >
            {{ $config.public.feedbackEmail }}
          </NuxtLink> or
          <NuxtLink
            :to="`${$config.public.repoUrl}/issues`"
            title="GitHub issues for WebAPIcheck"
            target="_blank"
            class="link"
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
        <div class="mt-6">
          <p class="italic">
            What is a <b>WebAPI</b>?
          </p>
          <div class="flex mt-2">
            <div class="lt-md:hidden mr-3">
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
        </div>
        <div class="mt-6">
          <p class="italic">
            Why are <b>WebAPIs</b> important?
          </p>
          <div class="flex mt-2">
            <div class="lt-md:hidden mr-3">
              —
            </div>
            <div>
              <p>
                Currently the situation is the following. If you want to deliver
                the optimal mobile experience to your users you have to go down the
                native route and build a native Android app <i>and</i> a native iOS app.
                This is a lot of work and on top of that Google and Apple act as gatekeepers,
                dictating which apps can and can not be published in their app stores. Plus,
                if you want to charge for your app, they take a hefty cut and force you to use
                their own payment systems, which adds a lot of accounting as well.
              </p>
              <p mt-2>
                Therefore, it is in the interest of users and developers that web apps
                reach parity with native apps both in performance as well as capability.
                The performance topic is for another day, but on the capability side
                WebAPIs are here to bridge the gap.
              </p>
              <p mt-2>
                Take a look at my post
                <NuxtLink
                  to="https://www.w3.org"
                  title="The World Wide Web Consortium"
                  class="link"
                  target="_blank"
                >
                  "Let's build a Native(-like) Web App (NWA)"
                </NuxtLink> for more info on that topic.
              </p>
            </div>
          </div>
        </div>
        <div class="mt-6">
          <p class="italic">
            What is a <b>User Interaction</b> and why is it sometimes required?
          </p>
          <div class="flex mt-2">
            <div class="lt-md:hidden mr-3">
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
        </div>
        <div class="mt-6">
          <p class="italic">
            Why are sometimes special <b>Permissions</b> required?
          </p>
          <div class="flex mt-2">
            <div class="lt-md:hidden mr-3">
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
        </div>
        <div class="mt-6">
          <p class="italic">
            What is a <b>Secure Context</b>?
          </p>
          <div class="flex mt-2">
            <div class="lt-md:hidden mr-3">
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
        </div>
        <div class="mt-6">
          <p class="italic">
            What are <b>Web Workers</b>?
          </p>
          <div class="flex mt-2">
            <div class="lt-md:hidden mr-3">
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
        </div>
        <div mt-12 flex lt-md:flex-col>
          <div class="md:w-1/2">
            <p class="mb-6 text-xl text-dim font-bold">
              Resources
            </p>
            <ul class="p-0 md:list-disc-inside">
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
            <div class="flex lt-sm:flex-col mt-3">
              <NuxtLink
                to="https://repo-tracker.com?utm_source=WebAPI%20check"
                title="Better GitHub Repository Stats and Insights"
                target="_blank"
                class="btn-outline lt-sm:text-xl lt-md:flex-1 md:w-50 h-12"
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
                class="btn-outline lt-sm:(mt-3 text-xl) sm:ml-3 lt-md:flex-1  md:w-50 h-12"
                @click="useTrackEvent('click: GitHub stats')"
              >
                <span class="ml-0.5">
                  <span class="font-black">GitHub</span>
                  <span class="ml-1 px-0.75 py-0.25 bg-green-100 text-green-700 dark:(bg-green-900 text-green-300) font-mono font-semibold rounded">-stats</span>
                </span>
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
h1 {
  @apply mt-0;
}
h2 {
  @apply mt-8 md:mt-12;
}
</style>
