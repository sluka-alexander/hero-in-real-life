<template>
    <div class="menu-bottom" >
      <router-link to="/store" class="icon-block ripple">
        <router-link to="/store" class="icon-block__icon icon-block__icon_store">
        </router-link>
      </router-link>
      <router-link to="/new-task" class="icon-block ripple">
        <router-link to="/new-task" class="icon-block__icon icon-block__icon_add">
        </router-link>
      </router-link>
      <router-link to="/" class="icon-block ripple">
        <router-link to="/" class="icon-block__icon icon-block__icon_home">
        </router-link>
      </router-link>
      <router-link to="/tasks" class="icon-block ripple">
        <router-link to="/tasks" class="icon-block__icon icon-block__icon_tasks">
        </router-link>
      </router-link>
      <router-link to="/profile" class="icon-block ripple">
        <router-link to="/profile" class="icon-block__icon icon-block__icon_profile">
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

    &__icon {
      @extend %img;

      @include size(20px);

      opacity: 35%;
      transition: .4s;

      &_active {
        opacity: 100%;
      }

      &_store {
        background-image: url('../views/img/icons/store.svg');
      }

      &_add {
        background-image: url('../views/img/icons/plus.svg');
      }

      &_home {
        background-image: url('../views/img/icons/home-run.svg');
      }

      &_tasks {
        background-image: url('../views/img/icons/book.svg');
      }

      &_profile {
        background-image: url('../views/img/icons/user.svg');
      }
    }
  }
  .router-link-exact-active {
    opacity: 100%;
  }
</style>
