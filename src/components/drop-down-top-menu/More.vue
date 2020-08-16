<template>
  <div class="more">
    <Items :text="$t('items.inventory')" :route="'inventory'"></Items>
    <Items :text="$t('items.rules')" :route="'rules'"></Items>
    <Items :text="$t('items.progress')" :route="'progress'"></Items>
    <Items :text="$t('items.login')" :route="'login'"></Items>
  </div>
</template>

<script>
import Items from './Item-more.vue';

export default {
  name: 'More',
  components: {
    Items,
  },
};
</script>

<style scoped>

</style>
