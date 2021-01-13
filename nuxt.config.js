const title = 'ライブハウス支援まとめ Beside the Music'
const description = 'コロナウィルスで苦しんでいるライブハウスを支援するまとめサイトです。みんなで音楽を支援しよう！いつも音楽のそばに'
const type = 'website'
const url = 'https://besidethemusic.tokyo'
const image = 'https://besidethemusic.tokyo/images/ogp.jpg'

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
      { hid: 'og:type', property: 'og:type', content: type },
      { hid: 'og:title', property: 'og:title', content: title },
      { hid: 'og:description', property: 'og:description', content: description },
      { hid: 'og:url', property: 'og:url', content: url },
      { hid: 'og:image', property: 'og:image', content: image },
      { hid: 'fb:app_id', property: 'fb:app_id', content: '667885473990531' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@besidethemusic' },
    ],
    script: [
      { src: 'javascripts/lazysizes.min.js' }
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
    '@nuxtjs/google-analytics'
  ],
  /*
  ** Google Analytics
  */
  googleAnalytics: {
    id: 'UA-187207378-1'
  },
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
