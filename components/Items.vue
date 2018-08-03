<template lang="pug">
  div
    Item(v-for="(item, index) in items", :key="index", :item="item")
      slot(name="media", slot="media", :item="item")
</template>

<script>
import Item from '~/components/Item';

export default {
  components: {
    Item,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
