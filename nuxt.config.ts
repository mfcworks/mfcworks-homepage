// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/sass/main.scss'],

  // app: {
  //   head: {
  //     link: [{ rel: 'stylesheet', href: 'https://TolgaTatli.github.io/Moonrise/assets/css/main.css' }]
  //   }
  // },

  // To disable built-in PostCSS:
  postcss: {
    plugins: {
      autoprefixer: false
    }
  },

  //
  experimental: {
    defaults: {
      nuxtLink: {
        trailingSlash: 'append'
      }
    }
  },

  modules: ['@nuxt/content'],
})