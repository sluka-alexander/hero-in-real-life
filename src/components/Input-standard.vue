<template>
  <div class="input-block">
    <input class="input-block__input" :placeholder="placeholder">
    <div class="input-block__validate">{{ validate }}</div>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: String,
    validate: String,
  },
  name: 'Input-standard',
};
</script>

<style scoped lang="scss">
@import "../views/scss/common/config";
@import "../views/scss/common/mixins";
@import "../views/scss/common/placeholders";
@import "../views/scss/common/var";

  .input-block {
    @extend %flex-center;

    flex-direction: column;
    width: 100%;
    &__input {
      padding: 10px 15px;
      width: 250px;
      border: none;
      font-weight: $font-weight-regular;
      border-radius: 5px;
      font-size: $font-size-XXS;
      font-family: 'Open Sans', sans-serif;
      margin-bottom: $margin-standard;
      box-shadow: 0 0 7px rgba(0, 0, 0, 0.03);

      &:focus {
        outline: none;
      }
    }
    &__validate {
      color: $red-validate;
      font-size: $font-size-XXS;
      font-weight: $font-weight-regular;
      margin: -10px 0 $margin-standard 0;
    }
  }
</style>
