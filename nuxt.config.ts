// https://nuxt.com/docs/api/configuration/nuxt-config
// https://tailwindcss.com/docs/guides/nuxtjs#3 - The @nuxt module doesn't seem to build

export default defineNuxtConfig({
  dev: process.env.NODE_ENV !== 'production',
  env: {
    baseURL: process.env.BASE_URL
  },
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000'
  },
  app: {
    head: {
      title: 'Liquid Store',
      meta: [
        { name: 'description', content: 'Everything about Nuxt 3.' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})
