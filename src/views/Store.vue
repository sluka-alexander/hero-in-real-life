<template>
  <div class="store">
    <div class="container">
      <Title :text="$t('items.store')"></Title>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title.vue';

export default {
  name: 'Store',
  components: {
    Title,
  },
};
</script>

<style scoped>

</style>
