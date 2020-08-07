<template>
  <div
    class="dropdown"
    @click="toggleRiskLevels">
    <span class="dropdown__text">
      {{ (config.prefix ? config.prefix : "") + " "
      }}{{ config.placeholder ? config.placeholder : "" }}</span>
    <i class="dropdown__angle-down"
       :class="{'dropdown__angle-down_active': isBottomSectionToggled}"></i>
    <transition name="fade-options">
      <div v-if="isBottomSectionToggled" class="dropdown__options">
        <div
          v-for="(option, index) in configOptions"
          class="dropdown__option ripple-option"
          v-bind:key="index"
          @click="setCurrentSelectedOption(option);"
        >
          {{ option.value }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import ripple from '@/methods/ripple';

export default {
  name: 'drop-down',
  data() {
    return {
      isBottomSectionToggled: false,
      configOptions: [],
    };
  },
  props: ['config'],
  computed: {},
  methods: {
    toggleRiskLevels() {
      this.isBottomSectionToggled = !this.isBottomSectionToggled;
    },
    setCurrentSelectedOption(option) {
      this.$emit('setSelectedOption', option);
    },
    setConfigData() {
      this.configOptions = this.config.options;
      this.placeholder = this.config.placeholder;
    },
  },
  created() {
    this.setConfigData();
  },
  mounted() {
    document.querySelectorAll('.ripple-option').forEach((el) => {
      ripple.setRippleElement(el, '#000');
    });
  },
};
</script>

<style scoped lang="scss">
@import "../views/scss/common/config";
@import "../views/scss/common/mixins";
@import "../views/scss/common/placeholders";
@import "../views/scss/common/var";

  .dropdown {
    @extend %flex-space-between;

    font-size: $font-size-XXS;
    width: 250px;
    padding: 10px 15px;
    position: relative;
    border-radius: 5px;
    cursor: pointer;
    user-select: none;
    background-color: $white;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.03);
    transition: 0.3s;
    margin-bottom: $margin-standard;

    &__angle-down {
      @extend %flex-center;

      border: solid;
      border-width: 0 1px 1px 0;
      padding: 4px;
      width: 1px;
      height: 1px;
      transform: rotate(45deg);
      transition: 0.3s;

      &_active {
        transform: rotate(-135deg);
      }
    }

    &__options {
      @extend %flex;

      @include size(100%, 100px);
      position: absolute;
      flex-direction: column;

      background-color: $white;
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
        border-radius: 0 0 5px 5px;
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
