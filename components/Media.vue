<template lang="pug">
  .media
    // .media-left(v-show="visibleItemImage")
      p.image.is-96x96(v-html="itemImage")
    .media-content
      .content
        a.has-text-danger(:href="item | createBookmarkEntry", target="_blank", rel="noopener noreferrer") {{ item.bookmarkcount }} users 
        p {{ content }}
</template>

<script>
export default {
  name: 'Media',

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
    // date() {
    //   return this.$moment(this.item.date).format('YYYY/MM/DD HH:mm');
    // },
    content() {
      return this.item.description;
    },
    // visibleItemImage() {
    //   return typeof this.itemImage !== 'undefined';
    // },
    // itemImage() {
    //   TODO:
    //     1.正規表現で`entry-image`クラスの画像の`src`を取得する
    //     2.urlをreplaceする(http|https => //)
    //   return this.item.encoded;
    // },
  },
};
</script>

<style lang="scss" scoped>
.content {
  a {
    font-size: 0.8rem;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
  p {
    font-size: 0.8rem;
    color: #000;
  }
}
</style>
