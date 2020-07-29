import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    itemsTopMenuActive: {
      lang: false,
      level: false,
      rubies: false,
      more: false,
    },
    lang: localStorage.getItem('lang') || 'ru',
    isActiveDropDownMenu: false,
    activeTopMenuItem: String,
  },
  mutations: {
    CHANGE_LANGUAGE(state, lang) {
      state.lang = lang;
    },
    SELECT_TOP_MENU_ITEM(state, item) {
      state.itemsTopMenuActive.lang = (item === 'lang') ? !state.itemsTopMenuActive.lang : false;
      state.itemsTopMenuActive.level = (item === 'level') ? !state.itemsTopMenuActive.level : false;
      state.itemsTopMenuActive.rubies = (item === 'rubies') ? !state.itemsTopMenuActive.rubies : false;
      state.itemsTopMenuActive.more = (item === 'more') ? !state.itemsTopMenuActive.more : false;
    },
    CLOSE_TOP_MENU(state) {
      state.itemsTopMenuActive.lang = false;
      state.itemsTopMenuActive.level = false;
      state.itemsTopMenuActive.rubies = false;
      state.itemsTopMenuActive.more = false;
    },
  },
  actions: {
    CLOSE_TOP_MENU(context) {
      context.commit('CLOSE_TOP_MENU');
    },
  },
  modules: {
  },
  getters: {
    LANG(state) {
      return state.lang;
    },
    ITEMS_TOP_MENU_ACTIVE(state) {
      return state.itemsTopMenuActive;
    },
  },
});
