import metadata from './plugins/metadata/metadata'
import sitemaps from './plugins/build/sitemaps'

import metadataDynamic from './plugins/metadata/metadata-dynamic'
import metadataStatic from './plugins/metadata/metadata-static'

export default {
  // https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config
  publicRuntimeConfig: {
    appName: process.env.APP_NAME,
    baseURL: process.env.BASE_URL,
    moduleSocial: process.env.MODULE_SOCIAL,
    moduleSocialRating: process.env.MODULE_SOCIAL_RATING,
    apiURL: process.env.API_URL,
  },
  // Can be 'server' for SSR or 'static' for SSG
  target: process.env.TARGET || 'server',
  // For static generation: https://nuxtjs.org/blog/going-full-static#new-config-option-target
  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-generate
  // generate: {
  //   crawler: true,
  // },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: metadata.website.title,
    titleTemplate: metadata.website.titleTemplate,
    htmlAttrs: {
      lang: metadata.settings.locale,
    },
    meta: [...metadataStatic(), ...metadataDynamic()],
    link: [
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        href: '/apple-touch-icon.png',
      },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'manifest',
        crossorigin: 'use-credentials',
        href: '/manifest.webmanifest',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/app', '~/assets/css/markdown'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  loading: {
    color: metadata.settings.color,
    height: '2px',
  },

  plugins: [
    // helper methods: available in any component
    '~/plugins/utils/helpers',
    // Global notifications
    '~/plugins/bus.client.js',
    // https://github.com/ndelvalle/v-click-outside
    '~/plugins/v-click-outside',
    // https://github.com/eddiemf/vue-scrollactive
    '~/plugins/vue-scrollactive',
    // https://github.com/ymmooot/nuxt-jsonld
    '~/plugins/jsonld',
    // https://github.com/surmon-china/vue-awesome-swiper
    '~/plugins/vue-awesome-swiper.client.js',
  ],

  // GitHub: https://github.com/nuxt/components
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  // components: [
  //   true,
  //   { path: '~/components/common', pathPrefix: false },
  //   { path: '~/components/common/content', pathPrefix: false },
  //   { path: '~/components/common/icons', pathPrefix: false },
  // ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // https://color-mode.nuxtjs.org/#setup
    '@nuxtjs/color-mode',
    // https://github.com/nuxt-community/svg-sprite-module
    '@nuxtjs/svg-sprite',
    // https://html-validator.nuxtjs.org/
    // '@nuxtjs/html-validator',
    // https://composition-api.nuxtjs.org/getting-started/setup
    '@nuxtjs/composition-api/module',
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.pcss',
  },
  colorMode: {
    classSuffix: '',
  },
  svgSprite: {},
  htmlValidator: {
    usePrettier: false,
    options: {
      extends: [
        'html-validate:document',
        'html-validate:recommended',
        'html-validate:standard',
      ],
      rules: {
        'svg-focusable': 'off',
        'no-unknown-elements': 'error',
        // Conflicts or not needed as we use prettier formatting
        'void-style': 'off',
        'no-trailing-whitespace': 'off',
        // Conflict with Nuxt defaults
        'require-sri': 'off',
        'attribute-boolean-style': 'off',
        'doctype-style': 'off',
        // Unreasonable rule
        'no-inline-style': 'off',
      },
    },
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://www.npmjs.com/package/@nuxtjs/robots
    '@nuxtjs/robots',
    // https://i18n.nuxtjs.org/setup
    // 'nuxt-i18n',
    // https://auth.nuxtjs.org/guide/setup
    '@nuxtjs/auth-next',
    // https://sitemap.nuxtjs.org/guide/setup
    '@nuxtjs/sitemap',
    // https://gitlab.com/broj42/nuxt-lazy-load
    [
      'nuxt-lazy-load',
      {
        directiveOnly: true,
        loadingClass: 'isLoading',
        loadedClass: 'isLoaded',
        appendClass: 'lazyLoad',
      },
    ],
    // https://github.com/pimlie/nuxt-matomo
    [
      'nuxt-matomo',
      {
        matomoUrl: process.env.MATOMO_URL ? process.env.MATOMO_URL : null,
        siteId: process.env.MATOMO_SITE_ID ? process.env.MATOMO_SITE_ID : null,
      },
    ],
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.API_URL,
    credentials: true,
    https: false,
    headers: {
      common: {
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Origin': '*',
      },
    },
  },
  pwa: {
    meta: {
      name: metadata.website.title,
      author: process.env.META_AUTHOR || metadata.website.author,
      description: metadata.website.description,
      theme_color: metadata.settings.color,
      lang: metadata.settings.lang,
      ogSiteName: metadata.og.siteName,
      ogTitle: metadata.website.title,
      ogDescription: metadata.website.description,
      ogImage: `${process.env.BASE_URL}/default.jpg`,
      ogUrl: process.env.BASE_URL,
      twitterSite: metadata.twitter.site,
      twitterCreator: metadata.twitter.creator,
    },
    manifest: {
      name: metadata.website.title,
      short_name: metadata.og.siteName,
      description: metadata.website.description,
      display: 'browser',
      lang: metadata.settings.lang,
    },
  },
  proxy: {
    '/api': {
      target: `${process.env.API_URL}`,
      pathRewrite: { '^/': '/' },
    },
  },
  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: process.env.API_URL,
        endpoints: {
          login: {
            url: '/login',
            method: 'post',
            propertyName: 'access_token',
          },
          logout: { url: '/logout', method: 'post' },
          user: { url: '/profile', method: 'get', propertyName: false },
        },
        tokenRequired: true,
        tokenType: 'Bearer',
        globalToken: true,
      },
    },
    redirect: {
      login: '/sign-in',
      logout: '/sign-in',
      callback: '/',
      home: '/profile',
    },
    cookie: {
      options: {
        sameSite: 'lax',
        maxAge: 86400, // 24 hours
      },
    },
    plugins: ['~/plugins/utils/auth.js'],
  },
  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    liveEdit: false,
    // https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins
    markdown: {},
  },
  robots: {
    Disallow: metadata.settings.disallow.split(','),
    Sitemap: `${process.env.BASE_URL}/sitemap.xml`,
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: process.env.BASE_URL,
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    exclude: metadata.settings.disallow.split(','),
    sitemaps: sitemaps(),
  },

  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        const readingTime = require('reading-time')
        const stats = readingTime(document.text)

        document.readingTime = stats
      }
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
