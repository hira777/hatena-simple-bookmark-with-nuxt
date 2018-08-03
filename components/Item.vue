<template lang="pug">
  article.post
    .columns.level
      .column.is-11.level-item
        h2.post-title.is-size-5.is-size-6-mobile
          a(:href="item.link", target="_blank", rel="noopener noreferrer") {{ item.title }}
        slot(name="media")
      .column.is-1.level-item
        .level-item.has-text-centered
          div
            p.heading.is-size-7-mobile Users
            p.title.is-size-4.is-size-7-mobile
              a.has-text-danger(:href="item | createBookmarkEntry", target="_blank", rel="noopener noreferrer") {{ item.bookmarkcount }}
</template>

<script>
export default {
  name: 'Item',

  filters: {
    createBookmarkEntry(item) {
      return `//b.hatena.ne.jp/entry/${item.link}`;
    },
  },

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
    dom() {
      return 'dom';
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
