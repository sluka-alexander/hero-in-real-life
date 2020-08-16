import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStore, faHome, faBook } from '@fortawesome/free-solid-svg-icons';

library.add(faStore, faHome, faBook);

Vue.component('fa-icon', FontAwesomeIcon);
