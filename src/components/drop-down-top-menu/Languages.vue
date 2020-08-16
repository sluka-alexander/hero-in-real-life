<template>
  <div class="lang">
    <Items :text="$t('lang.ru')" :lang="'ru'"
           :class="{ activeItem : lang === 'ru',}"></Items>
    <Items :text="$t('lang.en')" :lang="'en'"
      :class="{ activeItem : lang === 'en',}"></Items>
  </div>
</template>

<script>
import Items from './Item-lang.vue';

export default {
  name: 'languages',
  data() {
    return {
    };
  },
  components: {
    Items,
  },
  computed: {
    lang() {
      return this.$store.getters.LANG;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../views/scss/common/config";
@import "../../views/scss/common/mixins";
@import "../../views/scss/common/placeholders";
@import "../../views/scss/common/var";

  .lang {
    width: 100%;
  }

  .activeItem {
    color: $blue;
  }
</style>
