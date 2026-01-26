// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';

const isProdEnv = process.env.NODE_ENV === 'production';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,
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
  },
  // order matters! we also have in app.vue imports! they come after these here!
  css: [
    'primeicons/primeicons.css',
    'primeflex/primeflex.css',
    '@/assets/normalize.css',
    '@/assets/owncss.scss',
    '@/assets/owncontainers.css'
  ],

  routeRules: {
    // Set layout for specific route
    //'/admin': { appLayout: 'admin' },
    // Set layout for multiple routes
    '/analysis/houses/**': { appLayout: 'houses-layout' },
    '/analysis/works/**': { appLayout: 'works-layout' }
  }
});
