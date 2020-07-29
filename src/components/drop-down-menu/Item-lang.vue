<template>
  <div class="item" @click="switchToLanguage">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'Items',
  props: {
    text: String,
    lang: String,
    func: {
      type: Function,
      default: function def() {
        alert('Set function');
      },
    },
  },
  methods: {
    switchToLanguage() {
      this.$i18n.locale = this.lang;
      localStorage.setItem('lang', this.lang);
      this.$store.commit('CHANGE_LANGUAGE', this.lang);
      this.$store.dispatch('CLOSE_TOP_MENU');
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../views/scss/common/config";
@import "../../views/scss/common/mixins";
@import "../../views/scss/common/placeholders";
@import "../../views/scss/common/var";

  .item {
    @extend %flex-center;

    width: 100%;
    height: 50px;
    font-weight: $font-weight-bold;
    font-size: $font-size-S;
    border-bottom: 1px solid $gray;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: $light-gray;
    }
    &:last-child {
      border: none;
    }
  }
</style>
