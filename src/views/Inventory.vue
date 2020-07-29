<template>
  <div class="inventory">
    <div class="container">
      <Title :text="$t('items.inventory')"></Title>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title.vue';

export default {
  name: 'Inventory',
  components: {
    Title,
  },
};
</script>

<style scoped>

</style>
