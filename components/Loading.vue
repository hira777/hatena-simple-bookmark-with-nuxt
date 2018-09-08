<template lang="pug">
  transition(name="fade")
    .spinner(v-show="loading", :class="{ active: loading }")
      .spinner-inner
        .rect1
        .rect2
        .rect3
        .rect4
        .rect5
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),

  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.spinner {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.8);
  &.active .spinner-inner {
    margin: 50vh auto;
    width: 50px;
    height: 40px;
    text-align: center;
    font-size: 10px;
    > div {
      display: inline-block;
      margin: 0 3px;
      width: 3px;
      height: 100%;
      background-color: #2c6dbd;
      -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
      animation: sk-stretchdelay 1.2s infinite ease-in-out;
    }
    .rect2 {
      -webkit-animation-delay: -1.1s;
      animation-delay: -1.1s;
    }
    .rect3 {
      -webkit-animation-delay: -1s;
      animation-delay: -1s;
    }
    .rect4 {
      -webkit-animation-delay: -0.9s;
      animation-delay: -0.9s;
    }
    .rect5 {
      -webkit-animation-delay: -0.8s;
      animation-delay: -0.8s;
    }
  }
}

@-webkit-keyframes sk-stretchdelay {
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
  }

  20% {
    -webkit-transform: scaleY(1);
  }
}

@keyframes sk-stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
  }

  20% {
    transform: scaleY(1);
  }
}
</style>
