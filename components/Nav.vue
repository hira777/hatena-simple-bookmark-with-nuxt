<template lang="pug">
  nav(class="navbar is-link", role="navigation", aria-label="main navigation")
    .container
      .navbar-brand
        nuxt-link.navbar-item.is-size-5(to="/") {{ title }}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  > .container {
    .navbar-item {
      padding: 0;
    }
    .navbar-brand {
      margin-left: 0;
    }
  }
  &.is-link .navbar-brand > a.navbar-item {
    &.is-active {
      background-color: inherit;
      color: inherit;
    }
    &:hover {
      background-color: inherit;
      color: inherit;
    }
  }
}
</style>
