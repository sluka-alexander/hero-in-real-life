<template>
  <div class="rubies">
    <div class="rubies__title">{{ $t('rubies.title.youHave')}} 6
      {{ $t('rubies.title.rubies') }}</div>
    <div class="rubies__subtitle"><i18n path="rubies.subtitle"><br slot="break"></i18n></div>
    <div class="rubies__route-store" @click="openStore">{{ $t('rubies.routeStore') }}</div>
  </div>
</template>

<script>
export default {
  name: 'Rubies',
  methods: {
    openStore() {
      const path = '/store';
      if (this.$route.path !== path) this.$router.push(path);
      this.$store.dispatch('CLOSE_TOP_MENU');
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../views/scss/common/config";
@import "../../views/scss/common/mixins";
@import "../../views/scss/common/placeholders";
@import "../../views/scss/common/var";

  .rubies {
  @extend %flex-center;

    flex-direction: column;
    padding: $margin-standard 0;

  &__title {
     font-size: $font-size-S;
     font-weight: $font-weight-bold;
     text-align: center;
     margin-bottom: 5px;
   };

  &__subtitle {
     font-size: $font-size-XS;
     font-weight: $font-weight-regular;
     text-align: center;
     color: $strong-gray;
     margin-bottom: 5px;
   };

    &__route-store {
      font-size: $font-size-S;
      font-weight: $font-weight-bold;
      text-align: center;
      color: $blue;
      cursor: pointer;
    }
  };
</style>
