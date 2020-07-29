<template>
  <div id="app">
    <TopMenu></TopMenu>
    <Blackout v-if="itemsTopMenuActive.lang || itemsTopMenuActive.level
    || itemsTopMenuActive.rubies || itemsTopMenuActive.more"></Blackout>
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
  transition: .4s;
  cursor: pointer;

  &_active {
    opacity: 100%;
  }

  &_store {
    background-image: url('views/img/icons/store.svg');
  }

  &_add {
    background-image: url('views/img/icons/plus.svg');
  }

  &_home {
    background-image: url('views/img/icons/home-run.svg');
  }

  &_tasks {
    background-image: url('views/img/icons/book.svg');
  }

  &_profile {
    background-image: url('views/img/icons/user.svg');
  }

  &_lang-ru {
    background-image: url('views/img/icons/russia.svg');
    opacity: 100%;
    transition: 0s;
  }

  &_lang-en {
    background-image: url('views/img/icons/flag.svg');
    opacity: 100%;
    transition: 0s;
  }

  &_level {
    background-image: url('views/img/icons/shield.svg');
    opacity: 100%;
  }

  &_rubies {
    background-image: url('views/img/icons/crystal.svg');
    opacity: 100%;
  }

  &_more {
    background-image: url('views/img/icons/more.svg');

    &_active {
      opacity: 100%;
    }
  }
}

</style>
