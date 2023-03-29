// https://nuxt.com/docs/api/configuration/nuxt-config
// https://tailwindcss.com/docs/guides/nuxtjs#3 - The @nuxt module doesn't seem to build

export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})
