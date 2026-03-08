import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: {
    enabled: true,
  },
  routeRules: {
    "/": {
      ssr: true,
    },
    "**": {
      ssr: false,
    },
  },
  app: {
    head: {
      title: "Gift Cards",
    },
  },
  css: [
    "./app/assets/styles.css",
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ["@nuxt/icon"],
})