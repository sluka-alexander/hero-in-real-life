<template>
  <router-link v-on:click.native="CloseTopMenu" class="item"
               :to="{ path: route }">{{ text }}</router-link>
</template>

<script>
export default {
  name: 'Items',
  props: {
    text: String,
    route: {
      type: String,
      default: '/',
    },
  },
  methods: {
    CloseTopMenu() {
      this.$store.dispatch('CLOSE_TOP_MENU');
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../views/scss/common/config";
@import "../../views/scss/common/mixins";
@import "../../views/scss/common/placeholders";
@import "../../views/scss/common/var";

  .item {
    @extend %flex-center;

    width: 100%;
    height: 50px;
    font-weight: $font-weight-bold;
    font-size: $font-size-S;
    border-bottom: 1px solid $gray;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: $light-gray;
    }
    &:last-child {
      border: none;
    }
  }
  .router-link-active {
    color: $blue;
  }
</style>
