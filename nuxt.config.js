const title = 'Beside the Music'
const description = 'コロナウィルスで苦しんでいるライブハウスを支援するためのまとめサイトです。みんなで音楽を支援しよう！いつも音楽のそばに'
const type = 'website'
const url = 'https://besidethemusic.tokyo'
const image = '/ogp.jpg'

export default {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { hid: 'og:type', name: 'og:type', content: type },
      { hid: 'og:title', name: 'og:title', content: title },
      { hid: 'og:description', name: 'og:description', content: description },
      { hid: 'og:url', name: 'og:url', content: url },
      { hid: 'og:image', name: 'og:image', content: image },
      { hid: 'fb:app_id', property: 'fb:app_id', content: '667885473990531' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
  ],
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
