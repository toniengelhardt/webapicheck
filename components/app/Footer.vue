<template>
  <div class="flex flex-col md:flex-row justify-between text-sm text-gray-500 p-3 md:p-6">
    <span class="flex-1 flex items-center <md:mt-3">
      © 2022 by
      <Icon name="logos:twitter" class="ml-1 mr-1" />
      <NuxtLink href="https://twitter.com/toniengelhardt"
        class="text-black dark:text-gray-300 font-semibold hover:underline"
        target="_blank"
        title="Toni Engelhardt on Twitter"
      >toniengelhardt</NuxtLink>
    </span>
    <span class="flex items-center <md:mt-3 md:mr-6">
      <span>Made with</span>
      <Icon name="logos:nuxt-icon" class="ml-2 mr-1" />
      <NuxtLink
        href="https://v3.nuxtjs.org/"
        class="text-black dark:text-gray-300 font-semibold hover:underline"
        target="_blank"
        title="Official Nuxt 3 website"
      >Nuxt</NuxtLink>
      <Icon name="logos:vitejs" class="ml-2 mr-1" />
      <NuxtLink
        href="https://vitejs.dev"
        class="text-black dark:text-gray-300 font-semibold hover:underline"
        target="_blank"
        title="Official Vite website"
      >Vite</NuxtLink>
      <Icon name="logos:windi-css" class="ml-2 mr-1" />
      <NuxtLink
        href="https://windicss.org/"
        class="text-black dark:text-gray-300 font-semibold hover:underline"
        target="_blank"
        title="Official WindiCSS website"
      >Windi</NuxtLink>
      <!-- <Icon name="logos:headlessui-icon" class="ml-2 mr-1" />
      <NuxtLink
        href="https://headlessui.com/"
        class="text-black dark:text-gray-300 font-semibold hover:underline"
        target="_blank"
        title="Official HeadlessUI website"
      >HeadlessUI</NuxtLink> -->
    </span>
    <span class="flex items-center <md:mt-3">
      <span>Hosted on</span>
      <Icon name="logos:vercel-icon" class="ml-2 mr-1" />
      <NuxtLink
        href="https://vercel.com/"
        class="text-black dark:text-gray-300 font-semibold hover:underline"
        target="_blank"
        title="Official Vercel website"
      >Vercel</NuxtLink>
    </span>
  </div>
</template>
