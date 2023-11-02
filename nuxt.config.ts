// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  plugins:['@/plugins/antd'],
  modules: [
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    families: {
      Poppins: true, // Habilita a fonte Poppins
    },
  },
  css: [
'/plugins/custom-antd-theme.css'],
})
