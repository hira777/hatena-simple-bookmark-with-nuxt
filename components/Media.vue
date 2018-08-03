<template lang="pug">
  .media
    // .media-left(v-show="visibleItemImage")
      p.image.is-96x96(v-html="itemImage")
    .media-content
      .content
        p
          small {{ date }}
          br
          | {{ content }}
</template>

<script>
export default {
  name: 'Media',

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
  p {
    font-size: 0.8rem;
    color: #000;
  }
}
</style>
