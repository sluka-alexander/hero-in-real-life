<template>
  <div class="profile">
    <div class="container">
      <Title :text="$t('items.profile')"></Title>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title.vue';

export default {
  name: 'Profile',
  components: {
    Title,
  },
};
</script>

<style scoped>

</style>
