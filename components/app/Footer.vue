<script setup lang="ts">
const config = useRuntimeConfig()

const webApiStatuses: Ref<WebApiStatuses> = useState('webApiStatuses')

const shareAvailable = computed(() => !!webApiStatuses.value?.['web-share-api'])

async function share() {
  useTrackEvent('click: Share')
  try {
    await navigator.share({
      title: 'WebAPI check',
      text: 'Simply open this page to test which WebAPIs that are supported on your device.',
      url: config.public.siteUrl,
    })
    useTrackEvent('Share successful')
  } catch (err: any) {
    useTrackEvent('Share error', { props: { error: err?.message || 'N/A' } })
  }
}
</script>

<template>
  <div class="flex justify-between items-center text-sm text-dim px-6 md:px-4 h-12 box-border" border="t-solid t-1 base">
    <ThemeSelector />
    <NuxtLink
      :to="$config.public.repoUrl"
      class="footer-item footer-action"
      title="Contribute on GitHub"
      target="_blank"
      @click="useTrackEvent('click: Contribute')"
    >
      <Icon name="github" />
      <span>Contribute</span>
    </NuxtLink>
    <NuxtLink
      :to="`mailto:${$config.public.feedbackEmail}`"
      class="footer-item footer-action"
      title="Send feedback via email"
      target="_blank"
      @click="useTrackEvent('click: Feedback')"
    >
      <Icon name="email" />
      <span>Feedback</span>
    </NuxtLink>
    <div
      v-if="shareAvailable"
      class="footer-item footer-action"
      @click="share()"
    >
      <Icon name="share" />
      <span>Share</span>
    </div>
    <NuxtLink
      to="/info"
      title="Legend and information about WebAPI check"
      class="footer-item footer-action"
    >
      <Icon name="info" />
      <span>Info</span>
    </NuxtLink>
    <span flex-1 lt-md:hidden />
    <span class="flex items-center">
      <span lt-md:hidden>by</span>
      <NuxtLink
        :to="$config.public.twitterProfile"
        class="footer-item font-semibold lt-md:(w-8 h-8)"
        target="_blank"
        title="Toni Engelhardt on Twitter"
        @click="useTrackEvent('click: Footer link', { props: { target: 'Twitter profile' } })"
      >
        <Icon name="logos:twitter" lt-md:text-1.4rem md:ml-1 md:mr-1 />
        <span lt-md:hidden>toniengelhardt</span>
      </NuxtLink>
    </span>
    <span class="flex items-center mx-2 lt-md:hidden">&middot;</span>
    <span class="flex items-center lt-md:hidden">
      <span>with</span>
      <NuxtLink
        href="https://v3.nuxtjs.org/"
        class="footer-item font-semibold"
        target="_blank"
        title="Official Nuxt 3 website"
        @click="useTrackEvent('click: Footer link', { props: { target: 'Nuxt' } })"
      >
        <Icon name="nuxt" class="ml-2 mr-1" />
        <span>Nuxt</span>
      </NuxtLink>
      <NuxtLink
        href="https://vitejs.dev"
        class="footer-item font-semibold"
        target="_blank"
        title="Official Vite website"
        @click="useTrackEvent('click: Footer link', { props: { target: 'Vite' } })"
      >
        <Icon name="vite" class="ml-2 mr-1" />
        <span>Vite</span>
      </NuxtLink>
      <NuxtLink
        href="https://uno.antfu.me"
        class="footer-item font-semibold"
        target="_blank"
        title="Official UnoCSS website"
        @click="useTrackEvent('click: Footer link', { props: { target: 'Uno' } })"
      >
        <Icon name="unocss" class="ml-2 mr-1" filter dark:invert />
        <span>Uno</span>
      </NuxtLink>
    </span>
    <span class="flex items-center mx-2 lt-md:hidden">&middot;</span>
    <span class="flex items-center lt-md:hidden">
      <span>on</span>
      <NuxtLink
        href="https://vercel.com/"
        class="footer-item font-semibold"
        target="_blank"
        title="Official Vercel website"
        @click="useTrackEvent('click: Footer link', { props: { target: 'Vercel' } })"
      >
        <Icon name="vercel" class="ml-2 mr-1 text-base dark:text-white" />
        <span>Vercel</span>
      </NuxtLink>
    </span>
  </div>
</template>

<style lang="postcss" scoped>
.footer-action {
  @apply flex-center lt-md:(w-8 h-8) md:not-first:ml-8;
  .icon {
    @apply text-1.5rem md:text-1.25rem;
  }
  span {
    @apply ml-1.5 lt-md:hidden;
  }
}
</style>
