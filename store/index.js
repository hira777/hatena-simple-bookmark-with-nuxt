import Vuex from 'vuex';

const store = () =>
  new Vuex.Store({
    state: {
      feed: 'http://b.hatena.ne.jp/',
      endPoint: 'https://query.yahooapis.com/v1/public/yql',
      siteTitle: 'Hatena::SimpleBookmark',
      tabsItems: [
        {
          name: '世の中',
          route: '/social',
        },
        {
          name: '政治と経済',
          route: '/economics',
        },
        {
          name: '暮らし',
          route: '/life',
        },
        {
          name: '学び',
          route: '/knowledge',
        },
        {
          name: 'テクノロジー',
          route: '/it',
        },
        {
          name: 'エンタメ',
          route: '/entertainment',
        },
        {
          name: 'アニメとゲーム',
          route: '/game',
        },
        {
          name: 'おもしろ',
          route: '/fun',
        },
      ],
      items: {
        query: {
          results: {
            item: [],
          },
        },
      },
    },
    getters: {
      items: state => state.items.query.results.item,
      tabsItems: state => state.tabsItems,
      siteTitle: state => state.siteTitle,
    },
    mutations: {
      saveItems(state, { items }) {
        state.items = items;
      },
    },
    actions: {
      async getItems({ commit, state }, { category }) {
        try {
          const url =
            category === 'hotentry'
              ? `${state.feed + category}.rss`
              : `${state.feed}hotentry/${category}.rss`;
          const items = await this.$axios.$get(state.endPoint, {
            params: {
              q: `select * from rss where url="${url}"`,
              format: 'json',
            },
          });
          commit('saveItems', { items });
        } catch (e) {
          return Promise.reject(e);
        }
      },
    },
  });

export default store;
