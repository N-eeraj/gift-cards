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
      title: "GiftCards | Customize & Send Instantly",
      meta: [
        {
          charset: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          name: "robots",
          content: "index, follow",
        },
        {
          property: "og:title",
          content: "GiftCards | Customize & Send Instantly",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: import.meta.env.WEBSITE_URL,
        },
      ],
      link: [
        {
          rel: "canonical",
          href: import.meta.env.WEBSITE_URL,
        },
      ]
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
  modules: [
    "@nuxt/icon",
    "@vueuse/nuxt",
  ],
})