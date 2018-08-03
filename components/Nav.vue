<template lang="pug">
  nav(class="navbar is-link", role="navigation", aria-label="main navigation")
    .container
      .navbar-brand
        nuxt-link.navbar-item.is-size-5(to="/") {{ title }}
      .navbar-start
        nuxt-link.navbar-item.is-size-7.has-text-weight-bold(
          :to="item.route",
          v-for="(item, index) in items",
          :key="index") {{ item.name }}
</template>

<script>
export default {
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

<style lang="scss" scoped>
.navbar.is-link .navbar-brand > a.navbar-item.is-active {
  background-color: inherit;
  color: inherit;
}
</style>
