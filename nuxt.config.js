export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mmp',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  
  static: {
    prefix: false
  },

  target: 'static',

  
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify'
  ],

  vuetify:{
    customVariables: ['~/assets/variables.scss']
  },

  

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // 'bootstrap-vue/nuxt',
    '@nuxtjs/strapi',
    '@nuxtjs/dotenv'
  ],
  
  strapi:{
    url: process.env.STRAPI_URL || "https://api-makemypart.herokuapp.com"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },

  router: {
    linkActiveClass: 'active'
  },
  vue: {
    config: {
      productionTip: true,
      devtools: true
    }
  }
}
