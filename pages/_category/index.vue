<template lang="pug">
  Items(:items="items")
    template(slot="media", slot-scope="{ item }")
      Media.is-hidden-mobile(:item="item")
</template>

<script>
import { mapGetters } from 'vuex';
import Items from '~/components/Items.vue';
import Media from '~/components/Media.vue';

export default {
  components: {
    Items,
    Media,
  },

  async asyncData({ params, store }) {
    await store.dispatch('getItems', { category: params.category });
    return {};
  },

  computed: {
    ...mapGetters(['items']),
  },
};
</script>
