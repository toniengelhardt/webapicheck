<template>
  <div class="flex flex-col <md:text-center md:flex-row justify-between text-sm text-dim px-3 md:px-4 <md:py-6 md:min-h-12 border-t-1 border-zinc-300 dark:border-zinc-700">
    <span class="flex-1 flex flex-col-reverse <md:justify-center md:flex-row items-center">
      <ThemeSelector />
      <NuxtLink
        :to="`mailto:${$config.public.repoUrl}`"
        class="footer-link flex-center <md:(w-full mb-6) md:ml-4"
        title="Contribute on GitHub"
        target="_blank"
      >
        <Icon name="github" size="1.1rem" />
        <span class="ml-1.5">Contribute</span>
      </NuxtLink>
      <NuxtLink
        :to="`mailto:${$config.public.feedbackEmail}`"
        class="footer-link flex-center <md:(w-full mb-6) md:ml-4"
        title="Send feedback via email"
        target="_blank"
      >
        <Icon name="email" />
        <span class="ml-1.5">Feedback</span>
      </NuxtLink>
    </span>
    <span class="flex <md:justify-center items-center">
      <span>by</span>
      <Icon name="logos:twitter" class="ml-1 mr-1" />
      <NuxtLink
        :to="$config.public.twitterProfile"
        class="text-black dark:text-zinc-300 font-semibold hover:underline"
        target="_blank"
        title="Toni Engelhardt on Twitter"
        @click="$plausible.trackEvent('click: Footer link', { props: { target: 'Twitter profile' } })"
      >toniengelhardt</NuxtLink>
    </span>
    <span class="flex items-center mx-2 <md:hidden">&middot;</span>
    <span class="flex <md:justify-center items-center">
      <span>with</span>
      <Icon name="logos:nuxt-icon" class="ml-2 mr-1" />
      <NuxtLink
        href="https://v3.nuxtjs.org/"
        class="text-black dark:text-zinc-300 font-semibold hover:underline"
        target="_blank"
        title="Official Nuxt 3 website"
        @click="$plausible.trackEvent('click: Footer link', { props: { target: 'Nuxt' } })"
      >Nuxt</NuxtLink>
      <Icon name="logos:vitejs" class="ml-2 mr-1" />
      <NuxtLink
        href="https://vitejs.dev"
        class="text-black dark:text-zinc-300 font-semibold hover:underline"
        target="_blank"
        title="Official Vite website"
        @click="$plausible.trackEvent('click: Footer link', { props: { target: 'Vite' } })"
      >Vite</NuxtLink>
      <Icon name="logos:windi-css" class="ml-2 mr-1" />
      <NuxtLink
        href="https://windicss.org/"
        class="text-black dark:text-zinc-300 font-semibold hover:underline"
        target="_blank"
        title="Official WindiCSS website"
        @click="$plausible.trackEvent('click: Footer link', { props: { target: 'Windi' } })"
      >Windi</NuxtLink>
      <!-- <Icon name="logos:headlessui-icon" class="ml-2 mr-1" />
      <NuxtLink
        href="https://headlessui.com/"
        class="text-black dark:text-zinc-300 font-semibold hover:underline"
        target="_blank"
        title="Official HeadlessUI website"
      >HeadlessUI</NuxtLink> -->
    </span>
    <span class="flex items-center mx-2 <md:hidden">&middot;</span>
    <span class="flex <md:justify-center items-center">
      <span>on</span>
      <Icon name="vercel" class="ml-2 mr-1 text-black dark:text-white" />
      <NuxtLink
        href="https://vercel.com/"
        class="text-black dark:text-zinc-300 font-semibold hover:underline"
        target="_blank"
        title="Official Vercel website"
        @click="$plausible.trackEvent('click: Footer link', { props: { target: 'Vercel' } })"
      >Vercel</NuxtLink>
    </span>
  </div>
</template>
