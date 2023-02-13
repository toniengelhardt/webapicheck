<template>
  <div class="flex justify-between text-sm text-dim px-3 md:px-4 h-12 box-border" border="t-solid t-1 base">
    <span class="flex-1 flex items-center">
      <ThemeSelector />
      <NuxtLink
        :to="$config.public.repoUrl"
        class="footer-link flex-center lt-md:(w-8 h-8) ml-3 md:ml-4"
        title="Contribute on GitHub"
        target="_blank"
      >
        <Icon name="github" size="1.25rem" />
        <span class="ml-1.5 lt-md:hidden">Contribute</span>
      </NuxtLink>
      <NuxtLink
        :to="`mailto:${$config.public.feedbackEmail}`"
        class="footer-link flex-center lt-md:(w-8 h-8) ml-3 md:ml-4"
        title="Send feedback via email"
        target="_blank"
      >
        <Icon name="email" size="1.25rem" />
        <span class="ml-1.5 lt-md:hidden">Feedback</span>
      </NuxtLink>
      <NuxtLink
        to="/info"
        title="Legend and information about WebAPI check"
        class="footer-link flex-center lt-md:(w-8 h-8) ml-3 md:ml-4"
      >
        <Icon name="info" size="1.25rem" />
        <span class="ml-1.5 lt-md:hidden">Info</span>
      </NuxtLink>
    </span>
    <span class="flex items-center">
      <span>by</span>
      <Icon name="logos:twitter" class="ml-1 mr-1" />
      <NuxtLink
        :to="$config.public.twitterProfile"
        class="text-base dark:text-zinc-300 font-semibold hover:underline"
        target="_blank"
        title="Toni Engelhardt on Twitter"
        @click="useTrackEvent('click: Footer link', { props: { target: 'Twitter profile' } })"
      >toniengelhardt</NuxtLink>
    </span>
    <span class="flex items-center mx-2 lt-md:hidden">&middot;</span>
    <span class="flex items-center lt-md:hidden">
      <span>with</span>
      <Icon name="nuxt" class="ml-2 mr-1" />
      <NuxtLink
        href="https://v3.nuxtjs.org/"
        class="text-base dark:text-zinc-300 font-semibold hover:underline"
        target="_blank"
        title="Official Nuxt 3 website"
        @click="useTrackEvent('click: Footer link', { props: { target: 'Nuxt' } })"
      >Nuxt</NuxtLink>
      <Icon name="vite" class="ml-2 mr-1" />
      <NuxtLink
        href="https://vitejs.dev"
        class="text-base dark:text-zinc-300 font-semibold hover:underline"
        target="_blank"
        title="Official Vite website"
        @click="useTrackEvent('click: Footer link', { props: { target: 'Vite' } })"
      >Vite</NuxtLink>
      <Icon name="unocss" class="ml-2 mr-1" filter dark:invert />
      <NuxtLink
        href="https://windicss.org/"
        class="text-base dark:text-zinc-300 font-semibold hover:underline"
        target="_blank"
        title="Official WindiCSS website"
        @click="useTrackEvent('click: Footer link', { props: { target: 'Windi' } })"
      >Uno</NuxtLink>
    </span>
    <span class="flex items-center mx-2 lt-md:hidden">&middot;</span>
    <span class="flex items-center lt-md:hidden">
      <span>on</span>
      <Icon name="vercel" class="ml-2 mr-1 text-base dark:text-white" />
      <NuxtLink
        href="https://vercel.com/"
        class="text-base dark:text-zinc-300 font-semibold hover:underline"
        target="_blank"
        title="Official Vercel website"
        @click="useTrackEvent('click: Footer link', { props: { target: 'Vercel' } })"
      >Vercel</NuxtLink>
    </span>
  </div>
</template>
