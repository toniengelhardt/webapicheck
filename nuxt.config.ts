export default defineNuxtConfig({
  ssr: false,
  modules: [
    '@vueuse/nuxt',
    'nuxt-icon',
    'nuxt-windicss',
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
})
