<template>
  <div id="app">
    <TopMenu></TopMenu>
    <left-menu></left-menu>
    <BottomMobileMenu></BottomMobileMenu>
  </div>
</template>

<script>
import TopMenu from '@/components/Top-menu.vue';
import LeftMenu from '@/components/left-menu.vue';
import BottomMobileMenu from '@/components/Bottom-mobile-menu.vue';

export default {
  name: 'Home',
  components: {
    TopMenu,
    BottomMobileMenu,
    LeftMenu,
  },
  computed: {
    itemsTopMenuActive() {
      return this.$store.getters.ITEMS_TOP_MENU_ACTIVE;
    },
    lang() {
      return this.$store.getters.LANG;
    },
  },
  mounted() {
    this.$i18n.locale = this.lang;
    localStorage.setItem('lang', this.lang);
  },
};
</script>

<style lang="scss">
@import "views/scss/main";
@import "views/scss/common/placeholders";
  #app {
    width: 100%;
  }
  .router-link-exact-active {
    .icon {
      opacity: 100%;

      &__home {
        background-image: url('views/img/icons/white/home.svg');
      }

      &__store {
        background-image: url('views/img/icons/white/store.svg');
      }

      &__progress {
        background-image: url('views/img/icons/white/progress.svg');
      }

      &__achievement {
        background-image: url('views/img/icons/white/achievement.svg');
      }

      &__tasks {
        background-image: url('views/img/icons/white/tasks.svg');
      }

      &__rules {
        background-image: url('views/img/icons/white/rules.svg');
      }
    }
  };

  .icon {
    @extend %img;

    @include size(30px);

    opacity: 60%;
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
      background-image: url('views/img/icons/home.svg');
    }

    &__tasks {
      background-image: url('views/img/icons/tasks.svg');
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

    &__progress {
      background-image: url('views/img/icons/progress.svg');
    }

    &__achievement {
      background-image: url('views/img/icons/achievement.svg');
    }

    &__rules {
      background-image: url('views/img/icons/rules.svg');
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
