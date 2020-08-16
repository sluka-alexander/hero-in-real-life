<template>
  <div
    class="dropdown"
    @click="toggleRiskLevels"
    :class="{'dropdown_active': isBottomSectionToggled}">
    <span class="dropdown__text">
      {{ selectedItemCategory ? $t('category.' + selectedItemCategory):
      $t('select.placeholder') }}</span>
    <i class="dropdown__angle-down"
       :class="{'dropdown__angle-down_active': isBottomSectionToggled}"></i>
    <transition name="fade-options">
      <div v-if="isBottomSectionToggled" class="dropdown__options">
        <div
          v-for="(item, index) in category"
          class="dropdown__option"
          v-bind:key="index"
          @click="setCurrentSelectedOption(item);"
        >
          {{ $t('category.' + item) }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import CategoryEnglish from '../plugins/en';

export default {
  name: 'drop-down',
  data() {
    return {
      isBottomSectionToggled: false,
      category: Object.keys(CategoryEnglish.category).sort(),
      selectedItemCategory: '',
    };
  },
  methods: {
    toggleRiskLevels() {
      this.isBottomSectionToggled = !this.isBottomSectionToggled;
    },
    setCurrentSelectedOption(item) {
      this.selectedItemCategory = item;
      this.$emit('setSelectedOption', item);
    },
    closeDropDown(e) {
      if (!this.$el.contains(e.target)) {
        this.isBottomSectionToggled = false;
      }
    },
  },
  computed: {
    lang() {
      return this.$store.getters.LANG;
    },
  },
  mounted() {
    document.addEventListener('click', this.closeDropDown);
  },
  // watch: {
  //   lang: ()=> {
  //     if(this.lang === 'ru') {
  //       this.category = Object.values(CategoryRussian.category).sort();
  //     }
  //     if(this.lang === 'en') {
  //       this.category = Object.values(CategoryRussian.category).sort();
  //     }
  //   },
  // }
};
</script>

<style scoped lang="scss">
@import "../views/scss/common/config";
@import "../views/scss/common/mixins";
@import "../views/scss/common/placeholders";
@import "../views/scss/common/var";

  .dropdown {
    @extend %flex-space-between;

    align-items: center;
    font-size: $font-size-XXS;
    width: 250px;
    padding: 10px 15px;
    position: relative;
    border-radius: 5px;
    cursor: pointer;
    user-select: none;
    background-color: $white;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.03);
    transition: 0.2s;
    margin-bottom: $margin-standard;

    &:hover {
      color: $blue;
    }

    &_active {
      color: $blue;
    }

    &__angle-down {
      @extend %flex-center;

      border: solid;
      border-width: 0 1px 1px 0;
      padding: 2px;
      width: 1px;
      height: 1px;
      transform: rotate(45deg);
      transition: 0.3s;

      &_active {
        transform: rotate(225deg);
      }
    }

    &__options {
      @extend %flex;

      @include size(100%, 180px);
      position: absolute;
      flex-direction: column;

      background-color: $white;
      color: $black;
      overflow-y: scroll;
      left: 0;
      top: 35px;
      z-index: 1;
      box-shadow: 0 0 7px rgba(0, 0, 0, 0.10);
      border-radius: 5px;
      margin-bottom: 60px;
    }

    &__option {
      display: flex;
      align-items: center;
      width: auto;
      padding: 10px 15px;
      transition: 0.3s;

      &:hover {
        background-color: $light-gray;
      }
      &:last-child {
        border-radius: 0 0 0px 5px;
      }
    }
  }
  .fade-options-enter-active,
  .fade-options-leave-active {
    transition: all 0.3s;
  }
  .fade-options-enter,
  .fade-options-leave-to {
    opacity: 0;
    transform: translateY(10px);
  }
</style>
