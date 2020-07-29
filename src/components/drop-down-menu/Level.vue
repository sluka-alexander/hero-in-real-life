<template>
  <div class="level">
    <div class="level__title">{{ $t('level.title') }} 6</div>
    <div class="level__subtitle">{{ $t('level.subtitle') }} 300 {{ $t('level.xp')}}</div>
    <div class="level-scale">
      <div class="level-scale__experience">1000 / 2000</div>
      <div class="level-scale__full">
        <div class="level-scale level-scale__full level-scale__full_user"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Level',
};
</script>

<style scoped lang="scss">
@import "../../views/scss/common/config";
@import "../../views/scss/common/mixins";
@import "../../views/scss/common/placeholders";
@import "../../views/scss/common/var";

  .level {
    @extend %flex-center;

    flex-direction: column;
    padding: $margin-standard 0;

    &__title {
      font-size: $font-size-S;
      font-weight: $font-weight-bold;
      text-align: center;
      margin-bottom: 5px;
    };

    &__subtitle {
      font-size: $font-size-XS;
      font-weight: $font-weight-regular;
      text-align: center;
      color: $strong-gray;
      margin-bottom: $margin-standard;
    };
  };
  .level-scale {
    @extend %flex-center;

    @include size(200px, 40px);

    background-color: $light-gray;
    border-radius: 50px;
    cursor: pointer;

    &__full {
      @include size(100%, 100%);

      background-color: $light-gray;
      border-radius: 50px;

      &_user {
        @include size(40%, 100%);

        background-color: $red;
      }
    }

    &__experience {
      position: absolute;
      font-size: $font-size-S;
      font-weight: $font-weight-regular;
      text-align: center;
      color: $black;
    };
  }
</style>
