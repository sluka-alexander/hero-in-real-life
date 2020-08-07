<template>
  <div class="fires-block">
    <transition-group name="fade-fire" tag="p" class="fires-block__fires">
      <div class="icon icon__fire" v-for="fire in numberOfFires"
           v-bind:key="fire" :id="fire" @click="selectFire(fire)"
           v-bind:class="{ 'icon__fire_active': fire<= estimateFire }">
      </div>
    </transition-group>
    <div class="fires-block__text-block">
      <div class="fires-block__text" style="padding: 0 5px;">Сложность:</div>
      <div class="fires-block__text fires-block__text_bold">
        {{ estimateFire }} / {{ numberOfFires }}</div>
    </div>
    <div class="fires-block__text-block">
      <div class="fires-block__text" style="padding: 0 5px;">Опыт за миссию:</div>
      <div class="fires-block__text fires-block__text_bold">{{ estimateFire * 100 }} XP</div>
    </div>
    <div class="fires-block__text-block">
      <div class="fires-block__text" style="padding: 0 5px;">Заработок:</div>
      <div class="fires-block__text fires-block__text_bold">{{ estimateFire * 10 }} рубинов</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Fires',
  data() {
    return {
      numberOfFires: 5,
      estimateFire: 1,
    };
  },
  methods: {
    selectFire(fire) {
      this.estimateFire = fire;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../views/scss/common/config";
@import "../views/scss/common/mixins";
@import "../views/scss/common/placeholders";
@import "../views/scss/common/var";

  .fires-block {
    @extend %flex-center;

    width: 100%;
    flex-direction: column;
    margin-bottom: $margin-standard/2;

    &__text-block {
      margin-bottom: $margin-standard/2;
      @extend %flex;
    }

    &__fires {
      @extend %flex-center;
      margin-bottom: $margin-standard/2;
    }

    &__text {
      @extend %flex;

      font-size: $font-size-XXS;
      font-weight: $font-weight-regular;

      &_bold {
        font-weight: $font-weight-bold;
      }
    }
  }
</style>
