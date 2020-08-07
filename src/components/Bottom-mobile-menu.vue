<template>
    <div class="menu-bottom" >
      <router-link to="/store" class="icon-block"
                   v-on:click.native="closeTopMenu">
        <router-link to="/store" class="icon icon__store">
        </router-link>
      </router-link>
      <router-link to="/new-task" class="icon-block"
                   v-on:click.native="closeTopMenu">
        <router-link to="/new-task" class="icon icon__add">
        </router-link>
      </router-link>
      <router-link to="/" class="icon-block"
                   v-on:click.native="closeTopMenu">
        <router-link to="/" class="icon icon__home">
        </router-link>
      </router-link>
      <router-link to="/tasks" class="icon-block"
                   v-on:click.native="closeTopMenu">
        <router-link to="/tasks" class="icon icon__tasks">
        </router-link>
      </router-link>
      <router-link to="/profile" class="icon-block"
                   v-on:click.native="closeTopMenu">
        <router-link to="/profile" class="icon icon__profile">
        </router-link>
      </router-link>
    </div>
</template>

<script>

export default {
  name: 'bottom-mobile-menu',
  data() {
    return {
    };
  },
  methods: {
    closeTopMenu() {
      this.$store.dispatch('CLOSE_TOP_MENU');
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../views/scss/common/config";
  @import "../views/scss/common/mixins";
  @import "../views/scss/common/placeholders";
  @import "../views/scss/common/var";

  .menu-bottom {
    @extend %flex;

    @include size(100%, 50px);

    position: fixed;
    bottom: 0;
    right: 0;
    background-color: $white;
    box-shadow: 0px -5px 10px rgba(33, 38, 41, 0.1);
    z-index: 1;

    @include media(tablet) {
      display: none;
    };
  };

  .icon-block {
    @extend %flex-center;

    width: 20%;

    &:hover {
      background-color: $light-gray;
    }
  }
  .router-link-exact-active {
    opacity: 100%;
  }
</style>
