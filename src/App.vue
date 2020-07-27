<template>
  <div id="app">
    <TopMenu></TopMenu>
    <router-view/>
    <BottomMobileMenu></BottomMobileMenu>
  </div>
</template>

<script>
import TopMenu from '@/components/top-menu.vue';
import BottomMobileMenu from '@/components/bottom-mobile-menu.vue';

export default {
  name: 'Home',
  components: {
    TopMenu,
    BottomMobileMenu,
  },
};
</script>

<style lang="scss">
@import "views/scss/main";
  #app {
    width: 100%;
  }
</style>
