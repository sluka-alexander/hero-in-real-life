<template>
  <div class="register">
    <div class="container">
      <Title :text="$t('items.register')"></Title>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title.vue';

export default {
  name: 'Register',
  components: {
    Title,
  },
};
</script>

<style scoped>

</style>
