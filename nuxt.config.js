const colors = require('vuetify/es5/util/colors').default

module.exports = {
  serverMiddleware: ["~~/api/"],
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      /* { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.min.css' }, */
    ],
    script: [
      { src: "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"}
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/node_modules/highlight.js/styles/shades-of-purple.css', lang: 'css' },
    // merge css
    'codemirror/addon/merge/merge.css',
    // theme css
    'codemirror/theme/base16-dark.css',
    { src:'~/assets/codemirror.css', lang:'css' },
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-lazyload.js',
    { src: '~plugins/nuxt-codemirror-plugin.js', ssr: false },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
    'nuxt-webfontloader'
  ],

  webfontloader: {
    google: {
      families: ['Rajdhani']
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  markdownit: {
    injected: true, // $mdを利用してmarkdownをhtmlにレンダリングする
    breaks: true, // 改行コードを<br>に変換する
    html: true, // HTML タグを有効にする
    linkify: true, // URLに似たテキストをリンクに自動変換する
    typography: true,  // 言語に依存しないきれいな 置換 + 引用符 を有効にします。
    highlight: true,
    use: [
      ['markdown-it-imsize',{autofill: true }],
      'markdown-it-toc',
    ],
    highlight: (str, lang) => {
      const hljs = require('highlight.js');
      /* console.log(lang); */
      if (lang && hljs.getLanguage(lang)) {
        try {
          /* console.log('true') */
          return '<pre class="hljs">' + 
            hljs.highlight(lang, str, true).value + 
            '</pre>';
        } catch (__) {
        }
      }
      // 言語設定がない場合、プレーンテキストとして表示する
      return '<pre class="hljs">' + hljs.highlight('plaintext', str, true).value + '</pre>';
    },
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, { isDev, isClient }) {

      config.node = {
        fs: 'empty'
      }
    }
  }
}