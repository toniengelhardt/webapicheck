const appTitle = 'WebAPI Check'
const appAuthor = 'Toni Engelhardt'
const appDescription = 'Easily check which WebAPIs and interfaces are available on your current device. View capabilities, get detailed API information, and test functionality.'
const appUrl = 'https://webapicheck.com'

export default defineNuxtConfig({
  ssr: true,
  runtimeConfig: {
    public: {
      twitterProfile: 'https://twitter.com/toniengelhardt',
      githubProfile: 'https://github.com/toniengelhardt',
    }
  },
  modules: [
    '@kevinmarrec/nuxt-pwa',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    'nuxt-headlessui',
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
  headlessui: {
    prefix: 'HL',
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
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
    }
  },
  pwa: {
    manifest: {
      id: '/?standalone=true',
      name: appTitle,
      short_name: appTitle,
      description: appDescription,
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
      name: appTitle,
      author: appAuthor,
      description: appDescription,
      mobileApp: true,
      mobileAppIOS: true,
      lang: 'en',
      ogType: 'website',
      ogSiteName: appTitle,
      ogTitle: appTitle,
      ogDescription: appDescription,
      ogImage: 'https://webapicheck.com/og-image.png',
      ogUrl: 'https://webapicheck.com',
      twitterCard: 'summary_large_image',
    },
  },
})
