<template>
  <div class="progress">
    <div class="container">
      <Title :text="$t('items.progress')"></Title>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title.vue';

export default {
  name: 'Progress',
  components: {
    Title,
  },
};
</script>

<style scoped>

</style>
