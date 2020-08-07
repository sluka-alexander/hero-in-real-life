<template>
  <div class="subtitle-block">
    <div class="subtitle-block__subtitle">{{ text }}</div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
  },
  name: 'subtitle',
};
</script>

<style scoped lang="scss">
@import "../views/scss/common/config";
@import "../views/scss/common/mixins";
@import "../views/scss/common/placeholders";
@import "../views/scss/common/var";

  .subtitle-block {
    @extend %flex-center;

    flex-direction: column;

    &__subtitle {
      font-size: $font-size-S;
      font-weight: $font-weight-regular;
      margin-bottom: $margin-standard;
    }
  }
</style>
