<template>
    <div class="menu-top">
    </div>
</template>

<script>
export default {
  name: 'top-menu',
};
</script>

<style scoped lang="scss">
  @import "../views/scss/common/config";
  @import "../views/scss/common/mixins";
  @import "../views/scss/common/placeholders";
  @import "../views/scss/common/var";

  .menu-top {
    @include size(100%, 50px);

    background-color: $white;
    box-shadow: 0px 5px 10px rgba(33, 38, 41, 0.1);
    margin-bottom: 40px;
  }
</style>
