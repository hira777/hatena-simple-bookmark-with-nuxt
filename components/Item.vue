<template lang="pug">
  article.post
    h2.post-title.is-size-6.is-size-6-mobile
      a(:href="item.link", target="_blank", rel="noopener noreferrer") {{ item.title }}
    slot(name="media")
</template>

<script>
export default {
  name: 'Item',

  props: {
    item: {
      type: Object,
      default: null,
    },
  },

  computed: {
    date() {
      return this.$moment(this.item.date).format('YYYY/MM/DD HH:mm');
    },
  },
};
</script>

<style lang="scss" scoped>
.post {
  padding: 15px 0;
  border-bottom: 1px solid #f3f3f3;

  &:first-child {
    padding-top: 0;
  }

  .post-title {
    width: 100%;
    line-height: 1.4;

    a {
      &:visited {
        color: hsl(0, 0%, 71%);
      }
    }
  }
}

.content p.heading:not(:last-child) {
  margin: 0.25rem;
}
</style>
