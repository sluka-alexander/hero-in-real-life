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
    background-color: $blackout;
    opacity: 0.3;
    z-index: 1;
    overflow-y:hidden;
  };
</style>
