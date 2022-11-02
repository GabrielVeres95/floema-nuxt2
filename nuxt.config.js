export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    charset: 'utf-8',
    viewport: 'width=device-width, initial-scale=1', 
    htmlAttrs: {
      lang: "ro"
    },

    meta: [
      // https://realfavicongenerator.net/
      { name: 'msapplication-TileColor', content: '#f4d8cc' },
      { name: 'theme-color', content: '#f4d8cc' },
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: 'Floema' },
      { name: 'og:description', content: 'Descriere website' },
      { name: 'og:image', content: 'Imagine reprezentativa' }
    ],

    link: [
      { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon.png" }, // de completat cu valori reale
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon.png" },
      { rel: "mask-icon", href: "/favicon.png", color: "#ff3a00" },
    ],

    script: [
      {
        // src: "https://code.jquery.com/jquery-3.6.1.min.js",
        // integrity: "sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=",
        // crossorigin: "anonymous"
      } 
    ]
  },
    
  

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/styles/global.sass"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxt/image'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  image: {
    staticFilename: '[publicPath]/images/[name]-[hash][ext]',
    // dir: 'assets/images',
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      sm: 640,
      lg: 1024,
      xl: 1280
    },
    presets: {
      cover: {
        modifiers: {
          fit: "cover",
          format: "jpg",
          width: 300,
          height: 300
        }
      }
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
