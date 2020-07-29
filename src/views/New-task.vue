<template>
  <div class="new-task">
    <div class="container">
      <Title :text="$t('items.newTask')"></Title>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title.vue';

export default {
  name: 'New-task',
  components: {
    Title,
  },
};
</script>

<style scoped>

</style>
