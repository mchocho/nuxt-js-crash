// https://nuxt.com/docs/api/configuration/nuxt-config
// https://tailwindcss.com/docs/guides/nuxtjs#3 - The @nuxt module doesn't seem to build

export default defineNuxtConfig({
  dev: process.env.NODE_ENV !== 'production',
  env: {
    baseURL: process.env.BASE_URL
  },
  runtimeConfig: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    currencyAPIURL: process.env.CURRENCY_API_URL,
    currencyAPIKey: process.env.CURRENCY_API_KEY
  },
  app: {
    head: {
      title: 'Liquid Store',
      meta: [
        { charset: 'utf-8' }, 
        { name: 'viewport', content: 'width=device-width, initial scale=1' },
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
