<template>
  <div class="flex flex-col <md:text-center md:flex-row justify-between text-sm text-dim px-3 md:px-6 <md:py-6 md:min-h-16 border-t-1 border-zinc-300 dark:border-zinc-700">
    <span class="flex-1 flex flex-col-reverse <md:justify-center md:flex-row items-center">
      <span class="flex items-center">
        © 2022 by
        <Icon name="logos:twitter" class="ml-1 mr-1" />
        <NuxtLink
          :to="$config.twitterProfile"
          class="text-black dark:text-zinc-300 font-semibold hover:underline"
          target="_blank"
          title="Toni Engelhardt on Twitter"
          @click="$plausible.trackEvent('click: Footer link', { props: { target: 'Twitter profile' } })"
        >toniengelhardt</NuxtLink>
      </span>
      <span class="flex <md:(w-full justify-center mb-6)">
        <span class="flex items-center">
          <Icon name="email" class="md:ml-6 mr-1" />
          <NuxtLink
            :to="`mailto:${$config.feedbackEmail}`"
            class="underline hover:text-default"
            title="Send feedback via email"
            target="_blank"
          >Feedback</NuxtLink>
        </span>
        <span class="flex items-center">
          <Icon name="discussion" class="ml-3 md:ml-6 mr-1" />
          <NuxtLink
            to="https://www.reddit.com/r/webdev/comments/ygee67/open_this_page_to_check_which_webapis_are/"
            class="underline hover:text-default"
            title="Discussion on Reddit"
            target="_blank"
          >Discussion</NuxtLink>
        </span>
      </span>
    </span>
    <span class="flex <md:justify-center items-center <md:mt-3 md:mr-6">
      <span>Made with</span>
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
    <span class="flex <md:justify-center items-center <md:mt-3 md:mr-6">
      <span>Hosted on</span>
      <Icon name="vercel" class="ml-2 mr-1 text-black dark:text-white" />
      <NuxtLink
        href="https://vercel.com/"
        class="text-black dark:text-zinc-300 font-semibold hover:underline"
        target="_blank"
        title="Official Vercel website"
        @click="$plausible.trackEvent('click: Footer link', { props: { target: 'Vercel' } })"
      >Vercel</NuxtLink>
    </span>
    <span class="flex items-center <md:(justify-center mt-6)">
      <ThemeSelector />
    </span>
  </div>
</template>
