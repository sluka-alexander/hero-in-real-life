<template>
  <div class="home">
    <div class="container">
      <div class="img-home"></div>
      <div class="title"><i18n path="home.title"><br slot="break"></i18n></div>
      <div class="subtitle"><i18n path="home.subtitle"><br slot="break"></i18n> </div>
      <Btn :text="$t('btn.create')" :func="transitionToNewTask"></Btn>
    </div>
  </div>
</template>

<script>
import Btn from '../components/Button.vue';

export default {
  name: 'Home',
  components: {
    Btn,
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

  .title {
    font-size: $font-size-L;
    font-weight: $font-weight-bold;
    font-style: normal;
    text-align: center;
    margin-bottom: $margin-standard;
    width: 300px;
    text-transform: uppercase;
  }

  .subtitle {
    font-weight: $font-weight-regular;
    font-size: $font-size-S;
    line-height: 30px;
    text-align: center;
    margin-bottom: $margin-standard;
    color: $strong-gray;
  }
</style>
