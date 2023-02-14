<script setup lang="ts">
const webApiStatuses: Ref<WebApiStatuses> = useState('webApiStatuses')

const shareAvailable = computed(() => !!webApiStatuses.value?.['web-share-api'])
</script>

<template>
  <div class="flex justify-between items-center text-sm text-dim px-3 md:px-4 h-12 box-border" border="t-solid t-1 base">
    <ThemeSelector />
    <NuxtLink
      :to="$config.public.repoUrl"
      class="footer-item"
      title="Contribute on GitHub"
      target="_blank"
    >
      <Icon name="github" />
      <span>Contribute</span>
    </NuxtLink>
    <NuxtLink
      :to="`mailto:${$config.public.feedbackEmail}`"
      class="footer-item"
      title="Send feedback via email"
      target="_blank"
    >
      <Icon name="email" />
      <span>Feedback</span>
    </NuxtLink>
    <div v-if="shareAvailable" class="footer-item">
      <Icon name="share" />
      <span>Share</span>
    </div>
    <NuxtLink
      to="/info"
      title="Legend and information about WebAPI check"
      class="footer-item"
    >
      <Icon name="info" />
      <span>Info</span>
    </NuxtLink>
    <span flex-1 lt-md:hidden />
    <span class="flex items-center">
      <span lt-md:hidden>by</span>
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
        href="https://uno.antfu.me"
        class="text-base dark:text-zinc-300 font-semibold hover:underline"
        target="_blank"
        title="Official UnoCSS website"
        @click="useTrackEvent('click: Footer link', { props: { target: 'Uno' } })"
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

<style lang="postcss" scoped>
.footer-item {
  @apply flex-center lt-md:(w-8 h-8) md:not-first:ml-8;
  .icon {
    @apply text-1.25rem;
  }
  span {
    @apply ml-1.5 lt-md:hidden;
  }
}
</style>
