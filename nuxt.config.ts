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
    css: {
      // preprocessorOptions: {
      //   scss: {
      //     additionalData: `
      //       @import "@/assets/scss/_mixins.scss";
      //       @import "@/assets/scss/_variables.scss";
      //       @import "@/assets/scss/_classes.scss";
      //     `,
      //   },
      // },
      devSourcemap: true,
    },
  },
  typescript: {
    strict: false,
    shim: false,
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
