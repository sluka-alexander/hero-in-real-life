<template>
  <div class="menu-top">
    <div class="icons">
      <div class="icon-block ripple"
           :class="{ 'icon-block_active': itemsTopMenuActive.lang }"
           @click="openDropDownMenu('lang')">
        <div v-if="lang === 'ru'" class="icon icon_lang-ru"></div>
        <div v-if="lang === 'en'" class="icon icon_lang-en"></div>
      </div>
      <div class="icon-block ripple" @click="openDropDownMenu('level')"
           :class="{ 'icon-block_active': itemsTopMenuActive.level }">
        <div class="icon icon_level"></div>
        <div class="icon-block__text icon-block__text_red">6</div>
      </div>
      <div class="icon-block ripple" @click="openDropDownMenu('rubies')"
           :class="{ 'icon-block_active': itemsTopMenuActive.rubies }">
        <div class="icon icon_rubies"></div>
        <div class="icon-block__text icon-block__text_blue">10</div>
      </div>
      <div class="icon-block ripple" @click="openDropDownMenu('more')"
           :class="{ 'icon-block_active': itemsTopMenuActive.more }">
        <div class="icon icon_more"
             :class="{ 'icon_more_active': itemsTopMenuActive.more }"></div>
      </div>
    </div>
    <drop-menu v-if="itemsTopMenuActive.lang || itemsTopMenuActive.level
    || itemsTopMenuActive.rubies || itemsTopMenuActive.more"></drop-menu>
  </div>
</template>

<script>
import ripple from '@/methods/ripple';
import dropMenu from './Drop-down-menu.vue';

export default {
  name: 'top-menu',
  components: {
    dropMenu,
  },
  data() {
    return {
    };
  },
  methods: {
    openDropDownMenu(item) {
      this.$store.commit('SELECT_TOP_MENU_ITEM', item);
    },
  },
  computed: {
    lang() {
      return this.$store.getters.LANG;
    },
    itemsTopMenuActive() {
      return this.$store.getters.ITEMS_TOP_MENU_ACTIVE;
    },
  },
  mounted() {
    document.querySelectorAll('.ripple').forEach((el) => {
      ripple.setRippleElement(el, '#000');
    });
  },
};
</script>

<style scoped lang="scss">
  @import "../views/scss/common/config";
  @import "../views/scss/common/mixins";
  @import "../views/scss/common/placeholders";
  @import "../views/scss/common/var";

  .menu-top {
    @extend %flex;

    position: fixed;
    top:0;
    left: 0;
    flex-direction: column;
    background-color: $white;
    box-shadow: 0px 5px 10px rgba(33, 38, 41, 0.1);
    width: 100%;
    z-index: 2;
  }

  .icons {
    @extend %flex;

    @include size(100%, 50px);
  }

  .icon-block {
    @extend %flex-center;

    width: 25%;
    cursor: pointer;
    transition: 0.3s;

    &_active {
      background-color: $light-gray;
    }

    &__text {
      font-size: $font-size-S;
      font-weight: $font-weight-bold;
      margin-left: 5px;
      cursor: pointer;

      &_red {
        color: $red;
      }

      &_blue {
        color: $blue;
      }
    }
  }

  .burger-icon {
    @extend %flex-center;

    @include size(20px);

    cursor: pointer;

    &__bars {
      @include size(20px, 4px);

      position: absolute;
      background-color: $gray;
      border-radius: 5px;
      transition: 0.4s;

      &::before {
        @include size(20px, 4px);

        display: block;
        position: absolute;
        content: '';
        background-color: $gray;
        top: 7px;
        border-radius: 5px;
        transition: 0.4s;
      }

      &::after {
        @include size(20px, 4px);

        display: block;
        position: absolute;
        content: '';
        background-color: $gray;
        top: -7px;
        border-radius: 5px;
        transition: 0.4s;
      }

      &_active {
        background-color: transparent;

        &::before {
          transform: rotate(-45deg);
          top: 0;
          background-color: $white;
        }

        &::after {
          transform: rotate(45deg);
          top: 0;
          background-color: $white;
        }
      }
    }
  }
</style>
