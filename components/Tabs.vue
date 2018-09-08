<template lang="pug">
  .tabs.is-small
    .container
      ul
        li(
          v-for="(item, index) in items",
          :key="index")
          nuxt-link(:to="item.route") {{ item.name }}
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs li a.is-active {
  border-bottom-color: #005fc0;
  color: #005fc0;
}
</style>
