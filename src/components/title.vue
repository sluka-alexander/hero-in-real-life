<template>
  <div class="title">{{ title }}</div>
</template>

<script>
export default {
  props: [
    'title',
  ],
  name: 'titleStandard',
};
</script>

<style scoped lang="scss">
@import "../views/scss/common/config";
@import "../views/scss/common/mixins";
@import "../views/scss/common/placeholders";
@import "../views/scss/common/var";

  .title {
    font-size: $font-size-L;
    font-weight: $font-weight-bold;
    font-style: normal;
    text-align: center;
    margin-bottom: $margin-standard;
    width: 300px;
  }
</style>
