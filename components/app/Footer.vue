<script setup lang="ts">
const sharedStatus = useSharedStatus()
const shareDialogOpen = useState('shareDialogOpen', () => false)
</script>

<template>
  <div class="flex justify-between items-center text-sm text-dim px-2 md:px-4 h-14 md:h-10 box-border" border="t-solid t-1 base">
    <ThemeSelector lt-md:ml-2 />
    <NuxtLink
      :to="$config.public.repoUrl"
      class="footer-item footer-action"
      title="Contribute on GitHub"
      target="_blank"
      lt-md:important-hidden
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
      lt-md:important-hidden
      @click="useTrackEvent('click: Feedback')"
    >
      <Icon name="email" />
      <span>Feedback</span>
    </NuxtLink>
    <div flex-1 md:hidden />
    <!-- <div
      v-if="shareAvailable"
      class="footer-item footer-action"
      @click="share()"
    >
      <Icon name="share" />
      <span>Share</span>
    </div> -->
    <div
      v-if="!sharedStatus"
      class="!md:hidden footer-item footer-action"
      @click="shareDialogOpen = true"
    >
      <Icon name="link" />
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
    <span flex items-center>
      <span lt-md:hidden>Made by</span>
      <NuxtLink
        :to="$config.public.twitterProfile"
        class="footer-item font-semibold lt-md:(w-10 h-10 mx-2)"
        target="_blank"
        title="Toni Engelhardt on Twitter"
        @click="useTrackEvent('click: Twitter profile')"
      >
        <Icon name="logos:twitter" lt-md:text-1.4rem md:ml-1 md:mr-1 />
        <span lt-md:hidden>toniengelhardt</span>
      </NuxtLink>
    </span>
    <span class="flex items-center ml-1.5 lt-md:hidden">
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
    <span class="flex items-center ml-8 lt-md:hidden">
      <span>Hosted on</span>
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
  @apply flex-center lt-md:(w-10 h-10) ml-2 md:not-first:ml-6;
  .icon {
    @apply text-1.5rem md:text-1.15rem;
  }
  span {
    @apply ml-1.5 lt-md:hidden;
  }
}
</style>
