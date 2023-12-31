

export default defineNuxtConfig({
  plugins:['@/plugins/antd'
],
  modules: [
    '@nuxtjs/google-fonts',

],
  googleFonts: {
    families: {
      Poppins: true, 
    },
  },
  css: [
'/plugins/custom-antd-theme.css'],
})
