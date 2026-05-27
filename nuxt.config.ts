export default defineNuxtConfig({
  compatibilityDate: "2026-05-27",
  modules: ["@nuxt/eslint", "bootstrap-vue-next/nuxt", "@nuxtjs/gtag"],
  css: ["bootstrap/dist/css/bootstrap.min.css", "prismjs/themes/prism.css"],
  runtimeConfig: {
    public: {
      gtag: {
        id: process.env.NUXT_PUBLIC_GTAG_ID || "G-XXXXXXXXXX",
      },
    },
  },
});
