<template>
  <div class="tasks">
    <div class="container">
      <Title :text="$t('items.tasks')"></Title>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title.vue';

export default {
  name: 'Tasks',
  components: {
    Title,
  },
};
</script>

<style scoped>

</style>
