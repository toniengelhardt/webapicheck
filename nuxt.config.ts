import '@total-typescript/ts-reset'
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
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
    '@nuxtjs/plausible',
    '@nuxtjs/seo',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'nuxt-icon',
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
      meta: [
        { name: 'keywords', content: 'WebAPI, WebAPI test, Modern Web, Open Web' },
      ],
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
      '/': { prerender: false },
    },
  },
  colorMode: {
    classSuffix: '',
  },
  sitemap: {
    sources: ['/api/__sitemap__/urls'],
  },
  plausible: {
    domain: 'webapicheck.com',
  },
})
