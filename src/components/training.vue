<template>
  <div class="left-menu">
    <div class="left-menu__items">
      <div class="left-menu__item">
        <div class="left-menu__text-and-icon">
          <div class="left-menu__icon"></div>
          <div class="left-menu__text">22222222222222222222222222222222222222222</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'training',
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
    background-color: $strong-black;

    &__items {
      width: 100%;
      height: 200px;
      background-color: red;
    }

    &__item {
      @extend %flex;

      @include size(100%, 48px);

      background-color: green;
      cursor: pointer;
      align-items: center;
      padding: 0 24px;

      &:hover {
        background-color: #003200;
      }
    }

    &__text-and-icon {
      display: flex;

      align-items: center;
      background-color: gray;
      width: 100%;
    }

    &__text {
      font-size: $font-size-XS;
      font-weight: $font-weight-regular;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    &__icon {
      @include size(30px);

      background-color: blue;
      display: inline;
      margin-right: 24px;
    }
  }
</style>
