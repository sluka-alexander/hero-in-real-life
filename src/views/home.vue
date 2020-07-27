<template>
  <div class="home">
    <div class="container">
      <div class="img-home"></div>
      <Title :title="'ПРОКАЧАЙ СЕБЯ В РЕАЛЬНОЙ ЖИЗНИ'"></Title>
      <div class="subtitle">Создавай миссии <br> на день и следи за своим <br> прогрессом</div>
      <Btn :text="'Cоздать'" :func="transitionToNewTask"></Btn>
    </div>
  </div>
</template>

<script>
import Btn from '../components/button.vue';
import Title from '../components/title.vue';

export default {
  name: 'Home',
  components: {
    Btn,
    Title,
  },
  methods: {
    transitionToNewTask() {
      this.$router.push('/new-task');
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "../views/scss/common/config";
  @import "../views/scss/common/mixins";
  @import "../views/scss/common/placeholders";
  @import "../views/scss/common/var";

  .home {
    width: 100%;
  }

  .img-home {
    @extend %img;

    @include size(200px);

    background-image: url('../views/img/picture/main-page-circle-1.png');
    margin-bottom: $margin-standard;

    &:hover {
      background-image: url('../views/img/picture/main-page-circle-2.png');
    }
  }

  .subtitle {
    font-weight: $font-weight-regular;
    font-size: $font-size-M;
    line-height: 30px;
    text-align: center;
    margin-bottom: $margin-standard;
    color: $strong-gray;
  }
</style>
