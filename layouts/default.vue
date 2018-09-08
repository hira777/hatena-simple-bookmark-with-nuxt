<template lang="pug">
  div
    Nav(:title="siteTitle")
    Tabs(:items="tabsItems")
    main
      section.section
        .container
          .content
            nuxt
</template>

<script>
import { mapGetters } from 'vuex';
import Nav from '~/components/Nav';
import Tabs from '~/components/Tabs';

export default {
  components: {
    Nav,
    Tabs,
  },
  computed: {
    ...mapGetters(['siteTitle', 'tabsItems']),
  },
};
</script>

<style lang="scss" scoped>
.section {
  padding-top: 0;
}
</style>
