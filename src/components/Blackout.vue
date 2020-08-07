<template>
  <div class="blackout" @click="closeBlackout"></div>
</template>

<script>
export default {
  name: 'Blackout',
  methods: {
    closeBlackout() {
      this.$store.dispatch('CLOSE_TOP_MENU');
    },
  },
};
</script>

<style scoped lang="scss">
@import "../views/scss/common/mixins";
@import "../views/scss/common/var";

  .blackout {
    @include size(100%);

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: $blackout;
    z-index: 1;
    opacity: 0.5;
  };
</style>
