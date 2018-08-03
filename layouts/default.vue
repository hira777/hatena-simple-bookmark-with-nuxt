<template lang="pug">
  div
    Nav(:title="siteTitle", :items="navItems")
    main
      section.section
        .container
          .content
            nuxt
</template>

<script>
import { mapGetters } from 'vuex';
import Nav from '~/components/Nav';

export default {
  components: {
    Nav,
  },
  computed: {
    ...mapGetters(['siteTitle', 'navItems']),
  },
};
</script>
