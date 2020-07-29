<template>
  <div class="rules">
    <div class="container">
      <Title :text="$t('items.rules')"></Title>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title.vue';

export default {
  name: 'Rules',
  components: {
    Title,
  },
};
</script>

<style scoped>

</style>
