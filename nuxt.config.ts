const appTitle = 'WebAPI check'
const appDescription = 'Simply open this page and get an instant overview of the WebAPIs that are supported on your device. WebAPI requirements, specs, tests, etc.'
const appAuthor = 'Toni Engelhardt'
const appKeywords = 'WebAPI, DX, Developer Tools'
const appUrl = 'https://webapicheck.com'

export default defineNuxtConfig({
  ssr: true,
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
    'nuxt-icon',
    'nuxt-plausible',
    'nuxt-windicss',
  ],
  vite: {
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
  experimental: {
    reactivityTransform: true,
  },
  typescript: {
    shim: false,
  },
  css: [
    'assets/scss/style.scss',
  ],
  colorMode: {
    classSuffix: '',
  },
  plausible: {
    domain: 'webapicheck.com',
    trackLocalhost: false,
    autoOutboundTracking: false,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        translate: 'no', // Avoid translation.
      },
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
