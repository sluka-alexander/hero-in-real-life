<template>
  <div class="title">{{ text }}</div>
</template>

<script>
export default {
  props: [
    'text',
  ],
  name: 'titleStandard',
};
</script>

<style lang="scss" scoped>
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
}
</style>
