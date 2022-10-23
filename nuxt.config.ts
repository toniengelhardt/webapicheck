export default defineNuxtConfig({
  ssr: false,
  modules: [
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
})
