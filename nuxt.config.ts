const title = 'WebAPI Check'
const description = 'Easily check which WebAPIs and interfaces are available on your current device. View capabilities, get detailed API information, and test functionality.'
const url = 'https://webapicheck.com'

export default defineNuxtConfig({
  ssr: true,
  modules: [
    '@kevinmarrec/nuxt-pwa',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    'nuxt-icon',
    'nuxt-windicss',
    'vue-plausible',
  ],
  vite: {
    vue: {
      reactivityTransform: true,
    },
  },
  css: [
    'assets/scss/style.scss',
  ],
  postcss: {
    plugins: {
      cssnano: false
    }
  },
  vueuse: {
    ssrHandlers: true,
  },
  colorMode: {
    classSuffix: '',
  },
  plausible: {
    domain: 'webapicheck.com',
    trackLocalhost: false,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no',
      meta: [
        { name: 'color-scheme', content: 'light dark' },
        { name: 'apple-mobile-web-app-title', content: 'WebAPI Check' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: title },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: 'https://webapicheck.com/og-image.jpg' },
        { property: 'twitter:domain', content: url },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: url },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: title },
        { name: 'twitter:image', content: 'https://webapicheck.com/og-image.jpg' },
        { name: 'twitter:image:alt', content: 'WebAPI Check Open Graph Image' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    }
  },
  pwa: {
    manifest: {
      id: '/?standalone=true',
      name: title,
      short_name: title,
      description: description,
      display: 'standalone',
      orientation: 'any',
      lang: 'en',
      start_url: '/?standalone=true',
      scope: '/',
      categories: [
        'productivity',
        'utilities',
      ],
    },
    meta: {
      theme_color: '#ffffff',
      mobileAppIOS: true,
      // nativeUI: true, DON'T USE THIS!
    },
  },
})
