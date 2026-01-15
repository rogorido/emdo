// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';

const isProdEnv = process.env.NODE_ENV === 'production';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module',
    '@nuxt/fonts',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/seo'
  ],

  primevue: { options: { theme: { preset: Aura } } },

  runtimeConfig: {
    public: {
      apiBaseUrl: isProdEnv
        ? process.env.API_BASE_URL
        : 'http://localhost:8001',
      uiVersion: process.env.npm_package_version
    }
  },
  site: {
    url: 'https://dominicans.georeligion.org',
    name: 'Most comprehensive webpage about the Dominican Order in the early modern period'
  }
});
