<template>
  <div class="left-menu">
      <div class="left-menu__items">
        <router-link to="/" class="left-menu__item left-menu__ripple">
          <div class="left-menu__text-and-icon">
            <div class="left-menu__icon-block">
              <div class="icon icon__home"></div>
            </div>
            <div class="left-menu__text">{{$t('items.home')}}</div>
          </div>
        </router-link>
        <router-link to="/store" class="left-menu__item left-menu__ripple">
          <div class="left-menu__text-and-icon">
            <div class="left-menu__icon-block">
              <div class="icon icon__store"></div>
            </div>
            <div class="left-menu__text">{{$t('items.store')}}</div>
          </div>
        </router-link>
        <router-link to="/tasks" class="left-menu__item left-menu__ripple">
          <div class="left-menu__text-and-icon">
            <div class="left-menu__icon-block">
              <div class="icon icon__tasks"></div>
            </div>
            <div class="left-menu__text">{{$t('items.tasks')}}</div>
          </div>
        </router-link>
        <router-link to="/progress" class="left-menu__item left-menu__ripple">
          <div class="left-menu__text-and-icon">
            <div class="left-menu__icon-block">
              <div class="icon icon__progress"></div>
            </div>
            <div class="left-menu__text">{{$t('items.progress')}}</div>
          </div>
        </router-link>
        <router-link to="/achievement" class="left-menu__item left-menu__ripple">
          <div class="left-menu__text-and-icon">
            <div class="left-menu__icon-block">
              <div class="icon icon__achievement"></div>
            </div>
            <div class="left-menu__text">{{$t('items.achievement')}}</div>
          </div>
        </router-link>
        <router-link to="/rules" class="left-menu__item left-menu__ripple">
          <div class="left-menu__text-and-icon">
            <div class="left-menu__icon-block">
              <div class="icon icon__rules"></div>
            </div>
            <div class="left-menu__text">{{$t('items.rules')}}</div>
          </div>
        </router-link>
      </div>
  </div>
</template>

<script>
import ripple from '@/methods/ripple';

export default {
  name: 'left-menu',
  mounted() {
    document.querySelectorAll('.left-menu__ripple').forEach((el) => {
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

  .left-menu {
    width: 300px;
    min-height: 100vh;
    max-height: 100%;
    background-color: $white;
    font-weight: $font-weight-regular;

    .router-link-exact-active {
      background-color: $blue;
      color: $white;

      &:hover {
        background-color: $blue;
      }
    }

    &__items {
      width: 100%;
    }

    &__item {
      @extend %flex;

      @include size(100%, 50px);

      cursor: pointer;
      align-items: center;
      padding: 0 24px;
      transition: 0.2s;

      &:hover {
        background-color: $light-gray;
      }
    }

    &__text-and-icon {
      display: flex;

      align-items: center;
      width: 100%;
    }

    &__text {
      font-size: $font-size-S;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      display: block;
      position: relative;
    }

    &__icon-block {
      @extend %flex-center;

      @include size(25px, 20px);

      margin-right: 24px;
    }

    &__icon {
      @include size(30px);
    }
  }
</style>
