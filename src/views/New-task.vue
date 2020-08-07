<template>
  <div class="new-task">
    <div class="container">
      <Title :text="$t('items.newTask')"></Title>
      <Subtitle :text="$t('titles.nameOfTask')"></Subtitle>
      <InputStandard :placeholder="$t('titles.nameOfTask')"
                     :validate="$t('validate.emptyField')"></InputStandard>
      <Subtitle :text="$t('titles.levelOfDifficulty')"></Subtitle>
      <Fires></Fires>
      <Subtitle :text="$t('titles.category')"></Subtitle>
      <dropdown
        :config="config"
        @setSelectedOption="setNewSelectedOption($event);"
      ></dropdown>
      <Subtitle :text="$t('titles.desc')"></Subtitle>
      <textarea class="new-task__desc" :placeholder="$t('titles.desc')"></textarea>
      <Subtitle :text="$t('titles.amountOfDays')"></Subtitle>
      <div class="days-block">
        <div class="days-block__btn-change">-</div>
        <div class="days-block__amount">{{ amountOfDays }}</div>
        <div class="days-block__btn-change">+</div>
      </div>
      <Btn :text="$t('btn.create')"></Btn>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title.vue';
import Subtitle from '../components/Subtitle.vue';
import InputStandard from '../components/Input-standard.vue';
import Fires from '../components/Fires.vue';
import dropdown from '../components/drop-down.vue';
import Btn from '../components/Button.vue';

export default {
  name: 'New-task',
  components: {
    Title,
    Subtitle,
    InputStandard,
    Fires,
    dropdown,
    Btn,
  },
  data() {
    return {
      amountOfDays: 1,
      config: {
        options: [
          {
            value: 'option 1',
          },
          {
            value: 'option 2',
          },
          {
            value: 'option 3',
          },
          {
            value: 'option 4',
          },
          {
            value: 'option 5',
          },
          {
            value: 'option 6',
          },
        ],
        placeholder: 'Выберите',
      },
    };
  },
  methods: {
    setNewSelectedOption(selectedOption) {
      this.config.placeholder = selectedOption.value;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../views/scss/common/config";
@import "../views/scss/common/mixins";
@import "../views/scss/common/placeholders";
@import "../views/scss/common/var";

  .new-task {
    &__desc {
      @include size(250px,80px);
      padding: 10px 15px;
      border: none;
      border-radius: 5px;
      margin-bottom: $margin-standard;
      box-shadow: 0 0 7px rgba(0, 0, 0, 0.05);
    }

    .days-block {
      @extend %flex-center;

      margin-bottom: $margin-standard * 2;

      &__amount {
      @extend %flex-center;

      @include size(50px);

        background-color: $white;
        border-radius: 50px;
        box-shadow: 0 0 7px rgba(0, 0, 0, 0.10);
        font-size: $font-size-S;
        font-weight: $font-weight-semi-bold ;
        margin: 0 10px;
      }
      &__btn-change {
      @extend %flex-center;

      @include size(30px);

        background-color: $blue;
        border-radius: 50px;
        box-shadow: 0 0 7px rgba(0, 0, 0, 0.10);
        font-size: $font-size-S;
        font-weight: $font-weight-regular ;
        color: $white;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
          background-color: $dark-blue;
        }
      }
    }
  }
</style>
