<template>
  <div class="drop-down-menu">
    <Languages v-if="itemsTopMenuActive.lang"></Languages>
    <Level v-if="itemsTopMenuActive.level"></Level>
    <Rubies v-if="itemsTopMenuActive.rubies"></Rubies>
    <More v-if="itemsTopMenuActive.more"></More>
  </div>
</template>

<script>
import Languages from '@/components/drop-down-menu/Languages.vue';
import Level from '@/components/drop-down-menu/Level.vue';
import Rubies from '@/components/drop-down-menu/Rubies.vue';
import More from '@/components/drop-down-menu/More.vue';

export default {
  name: 'drop-down-menu',
  components: {
    Languages,
    Level,
    Rubies,
    More,
  },
  computed: {
    itemsTopMenuActive() {
      return this.$store.getters.ITEMS_TOP_MENU_ACTIVE;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../views/scss/common/config";
@import "../views/scss/common/mixins";
@import "../views/scss/common/placeholders";
@import "../views/scss/common/var";

.drop-down-menu {
  width: 100%;
  border-top: 1px solid $gray;
  background-color: $white;
  box-shadow: 0px 5px 10px rgba(33, 38, 41, 0.1);
}
</style>
