export default defineNuxtConfig({
  compatibilityDate: '2026-09-12',
  modules: ['@nuxt/eslint', '@bootstrap-vue-next/nuxt', 'nuxt-gtag'],
  css: ['bootstrap/dist/css/bootstrap.min.css', 'prismjs/themes/prism.css'],
  runtimeConfig: {
    public: {
      gtag: {
        id: process.env.NUXT_PUBLIC_GTAG_ID || 'G-XXXXXXXXXX',
      },
    },
  },
});
