<template>
    <div class="btn ripple-btn" @click="func">
      {{ text }}
    </div>
</template>

<script>
import ripple from '@/methods/ripple';

export default {
  props: {
    text: String,
    func: {
      type: Function,
    },
  },
  name: 'buttonStandard',
  mounted() {
    document.querySelectorAll('.ripple-btn').forEach((el) => {
      ripple.setRippleElement(el, '#fff');
    });
  },
};
</script>

<style scoped lang="scss">
  @import "../views/scss/common/config";
  @import "../views/scss/common/mixins";
  @import "../views/scss/common/placeholders";
  @import "../views/scss/common/var";

  .btn {
    display: inline-block;
    background-color: $blue;
    padding: 1em 3em;
    color: $white;
    border-radius: 50px;
    cursor: pointer;
    font-weight: $font-weight-bold;
    font-size: $font-size-S;
    transition: 0.3s;

    &:hover {
      background-color: $dark-blue;
    }
  }
</style>
