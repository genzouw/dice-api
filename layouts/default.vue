<template>
  <div>
    <div>
      <BNavbar
        toggleable="lg"
        class="navbar navbar-expand-lg navbar-dark bg-dark mb-3"
      >
        <BNavbarBrand class="navbar-brand" to="/"
          >"Dice" - Web Dice API</BNavbarBrand
        >
      </BNavbar>
    </div>

    <slot />

    <footer
      class="page-footer font-small bg-light text-dark justify-content-center"
    >
      <div class="footer-copyright text-center py-3">
        <a
          href="//twitter.com/genzouw"
          class="twitter-follow-button"
          data-size="large"
          data-show-count="false"
          >@genzouw</a
        >
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Dice - Web Dice API",
  meta: [
    { name: "description", content: "This is web dice api. It's free." },
    { property: "og:title", content: "Dice - Web Dice API" },
    { property: "og:site_name", content: "Dice - Web Dice API" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://dice-api.genzouw.com" },
    {
      property: "og:image",
      content: "https://dice-api.genzouw.com/icon.png",
    },
    { property: "og:description", content: "Dice - Web Dice API" },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:site", content: "https://dice-api.genzouw.com" },
    { name: "twitter:title", content: "Dice - Web Dice API" },
    { name: "twitter:description", content: "Dice - Web Dice API" },
    { name: "twitter:creator", content: "@genzouw" },
    {
      name: "twitter:image:src",
      content: "https://dice-api.genzouw.com/icon.png",
    },
    { itemprop: "name", content: "Dice - Web Dice API" },
    { itemprop: "description", content: "Dice - Web Dice API" },
    {
      itemprop: "image",
      content: "https://dice-api.genzouw.com/icon.png",
    },
    {
      name: "google-site-verification",
      content: "gFYiPUxpzQzAhrVmsACmY-N3Y7jURnIQMfT5GKlnWmU",
    },
  ],
  script: [
    {
      src: "https://platform.twitter.com/widgets.js",
      async: true,
      charset: "utf-8",
    },
  ],
});
</script>

<style>
html {
  font-family:
    "Source Sans Pro",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
