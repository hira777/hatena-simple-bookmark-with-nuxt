module.exports = {
  mode: 'spa',
  head: {
    title: 'Hatena::SimpleBookmark',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'HatenaBookmark hotentry news with Nuxt.js',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  loading: '~/components/Loading.vue',
  modules: ['@nuxtjs/axios', ['@nuxtjs/moment', ['ja']]],
  router: {
    linkExactActiveClass: 'is-active',
  },
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
    postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false,
        },
      },
    },
  },
  css: ['@/assets/main.scss', 'font-awesome/scss/font-awesome.scss'],
};
