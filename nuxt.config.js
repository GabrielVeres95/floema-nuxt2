export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    charset: 'utf-8',
    viewport: 'width=device-width, initial-scale=1', 
    htmlAttrs: {
      lang: "en"
    },

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0' },
      // https://realfavicongenerator.net/
      { name: 'msapplication-TileColor', content: '#f4d8cc' },
      { name: 'theme-color', content: '#f4d8cc' },
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: 'Floema' },
      { name: 'og:description', content: 'Descriere website' },
      { name: 'og:image', content: 'Imagine reprezentativa' }
      // testate aici dupa modificari https://www.heymeta.com/
    ],

    link: [
      { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon.png" }, // de completat cu valori reale
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon.png" },
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
  css: ["~/assets/styles/global.sass"],
    styleResources: {
      sass: ["~/assets/styles/global.sass"]
    },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxt/image',
    'nuxt-gsap-module',
    '@nuxtjs/prismic'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    'v-shared-element/nuxt'
  ],

  vSharedElement: {
    /* options */
    ignoreTransparency: true,
    duration: '0.8s',
    easeing: 'cubic-bezier(0.83, 0, 0.17, 1)'
   },

   prismic: {
    endpoint: "https://floema-humanist.prismic.io/api/v2",
    modern: true,
    /* see configuration for more */
    apiOptions: {
      routes: [
        {
          type: 'product',
          path: '/detail/:uid',
        },
      ],
    },
  },

  gsap: {
    /* Module Options */
    extraPlugins: {
      scrollTrigger: true,
      scrollTo: true
    },
    clubPlugins: {
      scrollSmoother: true,
      splitText: true
    },
    registerEffect: [
      // {
      //   name: 'fadeIn',
      //   effect: (targets, config) => {
      //     // eslint-disable-next-line no-undef
      //     return gsap.to(targets, {
      //       opacity: 0,
      //       duration: 0.6,
      //       ease: 'ease.out',
      //       scrollTrigger: {
      //         trigger: targets,
      //         start: '10% center',
      //         markers: true
      //       }
      //     })
      //   }
      // },
    ]
  },

  router: {
    saveScrollPosition: false
  },

  image: {
    staticFilename: '[publicPath]/images/[name]-[hash][ext]',
    // dir: 'assets/images',
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      sm: 640,
      lg: 1280,
    },
    presets: {
      general: {
        modifiers: {
          fit: "cover",
          format: "webp",
          quality: "80"
        }
      }
    }
  },

  loading: false,

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
     "gsap",
     "ogl-nuxt",
     "GLTFLoader",
     "normalize-wheel",
    //  "@prismicio/vue"
    ],
    extend(config, ctx) {
      if (config.module) {
        config.module.rules.push({
          test: /\.(glsl)$/i,
          use: ['raw-loader'],
        })
      }
    },
  },

}
