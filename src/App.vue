<template>
  <div id="app">
    <TopMenu></TopMenu>
    <transition name="fade-blackout" appear>
        <Blackout v-if="itemsTopMenuActive.lang || itemsTopMenuActive.level
        || itemsTopMenuActive.rubies || itemsTopMenuActive.more"
                  v-bind:class="{ active: itemsTopMenuActive.lang }"></Blackout>
    </transition>
    <router-view/>
    <BottomMobileMenu></BottomMobileMenu>
  </div>
</template>

<script>
import Blackout from '@/components/Blackout.vue';
import TopMenu from '@/components/Top-menu.vue';
import BottomMobileMenu from '@/components/Bottom-mobile-menu.vue';

export default {
  name: 'Home',
  components: {
    Blackout,
    TopMenu,
    BottomMobileMenu,
  },
  computed: {
    itemsTopMenuActive() {
      return this.$store.getters.ITEMS_TOP_MENU_ACTIVE;
    },
  },
};
</script>

<style lang="scss">
@import "views/scss/main";
  #app {
    width: 100%;
  }

  .icon {
    @extend %img;

    @include size(20px);

    opacity: 35%;
    transition: 0.2s;
    cursor: pointer;

    &__active {
      opacity: 100%;
    }

    &__store {
      background-image: url('views/img/icons/store.svg');
    }

    &__add {
      background-image: url('views/img/icons/plus.svg');
    }

    &__home {
      background-image: url('views/img/icons/home-run.svg');
    }

    &__tasks {
      background-image: url('views/img/icons/book.svg');
    }

    &__profile {
      background-image: url('views/img/icons/user.svg');
    }

    &__lang-ru {
      background-image: url('views/img/icons/russia.svg');
      opacity: 100%;
      transition: 0s;
    }

    &__lang-en {
      background-image: url('views/img/icons/flag.svg');
      opacity: 100%;
      transition: 0s;
    }

    &__level {
      background-image: url('views/img/icons/shield.svg');
      opacity: 100%;
    }

    &__rubies {
      background-image: url('views/img/icons/crystal.svg');
      opacity: 100%;
    }

    &__more {
      background-image: url('views/img/icons/more.svg');

      &_active {
        opacity: 100%;
      }
    }

    &__fire {
      @include size(30px);

      background-image: url('views/img/icons/fire.svg');
      padding: 0 5px;

      &_active {
        background-image: url('views/img/icons/fire-active.svg');
        opacity: 100%;
      }
    }
  }

  .fade-enter-active {
    animation: bounce-in 0.6s;
  }
  @keyframes bounce-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .fade-blackout-enter-active {
    animation: bounce-in-blackout 0.3s;
  }

  .fade-blackout-leave-active {
    animation: bounce-in-blackout 0.2s reverse;
  }
  @keyframes bounce-in-blackout  {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }
</style>
