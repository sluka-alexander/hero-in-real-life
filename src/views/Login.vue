<template>
  <div class="login">
    <div class="container">
      <Title :text="$t('items.login')"></Title>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title.vue';

export default {
  name: 'Login',
  components: {
    Title,
  },
};
</script>

<style scoped>

</style>
