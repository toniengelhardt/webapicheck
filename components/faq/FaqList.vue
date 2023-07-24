<script setup lang="ts">
defineProps<{
  includeUserInteraction?: boolean
  includePermissions?: boolean
  includeSecureContext?: boolean
  includeWebWorkers?: boolean
}>()
</script>

<template>
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
            to="https://itnext.io/lets-build-a-native-like-web-app-nwa-22a553fee338"
            title="The World Wide Web Consortium"
            class="link"
            target="_blank"
          >
            Let's build a Native(-like) Web App (NWA)
          </NuxtLink><Icon name="external" class="ml-0.5" /> for more info on that topic.
        </p>
      </div>
    </div>
  </div>
  <div v-if="includeUserInteraction" class="mt-6">
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
  <div v-if="includePermissions" class="mt-6">
    <p class="italic">
      Why are special <b>Permissions</b> required for certain WebAPIs?
    </p>
    <div class="flex mt-2">
      <div class="lt-md:hidden w-4 mr-2">
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
        </NuxtLink><Icon name="external" class="ml-0.5" /> that gives you better control over the permissions UX.
      </p>
    </div>
  </div>
  <div v-if="includeSecureContext" class="mt-6">
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
        </NuxtLink><Icon name="external" class="ml-0.5" /> and on the
        <NuxtLink
          to="https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts"
          title="Secure contexts on MDN"
          class="link"
          target="_blank"
        >
          Secure Contexts
        </NuxtLink><Icon name="external" class="ml-0.5" />
        page on MDN.
      </p>
    </div>
  </div>
  <div v-if="includeWebWorkers" class="mt-6">
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
        </NuxtLink><Icon name="external" class="ml-0.5" /> on MDN.
      </p>
    </div>
  </div>
</template>
