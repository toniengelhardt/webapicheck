const appTitle = 'WebAPI check'
const appDescription = 'Simply open this page and get an instant overview of the WebAPIs that are supported on your device. WebAPI requirements, specs, tests, etc.'
const appAuthor = 'Toni Engelhardt'
const appKeywords = 'WebAPI, DX, Developer Tools'
const appUrl = 'https://webapicheck.com'

export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    public: {
      appTitle,
      appDescription,
      appAuthor,
      appKeywords,
      appUrl,
      twitterProfile: 'https://twitter.com/toniengelhardt',
      githubProfile: 'https://github.com/toniengelhardt',
      feedbackEmail: 'feedback@webapicheck.com',
    }
  },
  modules: [
    '@kevinmarrec/nuxt-pwa',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    // 'nuxt-headlessui',
    'nuxt-icon',
    'nuxt-windicss',
    'vue-plausible',
  ],
  vite: {
    vue: {
      reactivityTransform: true,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/scss/_mixins.scss";
          `,
        },
      },
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
