<template>
  <div class="blackout"></div>
</template>

<script>
export default {
  name: 'Blackout',
  methods: {
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
