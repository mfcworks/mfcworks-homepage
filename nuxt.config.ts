// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/sass/main.scss', '~/assets/ui.css'],

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
  // experimental: {
  //   defaults: {
  //     nuxtLink: {
  //       trailingSlash: 'append'
  //     }
  //   }
  // },

  modules: ['@nuxt/content', '@nuxt/ui'],

  nitro: {
    preset: 'cloudflare_module',
    cloudflare: {
      deployConfig: true,
      wrangler: {
        d1_databases: [
          {
            binding: 'DB',
            database_name: 'mfcworks-homepage',
            database_id: 'a3fcbadb-6dd5-48e2-b5c0-228d39d96800'
          }
        ]
      }
    }
  }
})