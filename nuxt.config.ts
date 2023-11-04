import '@total-typescript/ts-reset'
import { defineNuxtModule } from '@nuxt/kit'
import { sentryVitePlugin } from '@sentry/vite-plugin'
import { version } from './package.json'

const appName = 'WebAPI check'
const appDescription = 'Simply open this page and get an instant overview of the WebAPIs that are supported on your current device. WebAPI requirements, specs, live tests, and more...'

export default defineNuxtConfig({
  runtimeConfig: {
    indexable: true,
    public: {
      siteUrl: 'https://webapicheck.com',
      siteName: appName,
      siteDescription: appDescription,
      xProfile: 'https://twitter.com/toniengelhardt',
      repoUrl: 'https://github.com/toniengelhardt/webapicheck',
      sentryDSN: process.env.SENTRY_DSN,
    },
  },
  experimental: {
    componentIslands: true,
    headNext: true,
  },
  site: {
    name: appName,
    description: appDescription,
    url: 'https://webapicheck.com',
    defaultLocale: 'en-US',
    titleSeparator: '·',
    trailingSlash: false,
  },
  modules: [
    '@kevinmarrec/nuxt-pwa',
    // Fix for nuxt-pwa module to make pnpm typecheck work, see
    // https://github.com/nuxt/nuxt/issues/23157
    defineNuxtModule({
      setup(_, nuxt) {
        nuxt.hook('prepare:types', ({ tsConfig }) => {
          if (tsConfig.compilerOptions)
            tsConfig.compilerOptions.paths['#pwa'] = ['./.nuxt/types/pwa']
        })
      },
    }),
    '@nuxtjs/color-mode',
    '@nuxtjs/plausible',
    '@nuxtseo/module',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'nuxt-icon',
    'nuxt-vitest',
  ],
  typescript: {
    shim: false,
  },
  css: [
    'assets/postcss/style.postcss',
  ],
  postcss: {
    plugins: {

      'cssnano': false,
      'postcss-nested': {},
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        translate: 'no', // Avoid translation.
      },
      bodyAttrs: {
        class: 'text-base bg-base',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', key: 'favicon' },
      ],
    },
  },
  vite: {
    build: {
      sourcemap: true,
    },
    plugins: [
      // Sentry Vite plugin needs to be after all other plugins.
      sentryVitePlugin({
        authToken: process.env.SENTRY_AUTH_TOKEN,
        org: 'webapicheck',
        project: 'webapp',
        release: {
          name: version,
        },
        telemetry: false,
      }),
    ],
  },
  nitro: {
    routeRules: {
      '/': { prerender: false }, // Note: for some reason / is prerendered by default, which breaks the auth middleware.
    },
  },
  pwa: {
    manifest: {
      id: '/?standalone=true',
      name: appName,
      short_name: appName,
      description: appDescription,
      display: 'standalone',
      orientation: 'portrait',
      lang: 'en',
      start_url: '/?standalone=true',
      categories: [
        'productivity',
        'utilities',
      ],
    },
    meta: {
      title: appName,
      mobileApp: true,
      mobileAppIOS: true,
      twitterCard: 'summary_large_image',
      theme_color: false,
    },
    icon: {
      source: 'public/icon.png',
      maskableSource: 'public/icon.maskable.png',
      maskablePadding: 0,
    },
  },
  colorMode: {
    classSuffix: '',
  },
  plausible: {
    domain: 'webapicheck.com',
    trackLocalhost: false,
    autoOutboundTracking: false,
  },
})
