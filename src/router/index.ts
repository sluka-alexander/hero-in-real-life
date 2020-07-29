import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Store from '../views/Store.vue';
import Home from '../views/Home.vue';
import NewTask from '../views/New-task.vue';
import Tasks from '../views/Tasks.vue';
import Profile from '../views/Profile.vue';
import Inventory from '../views/Inventory.vue';
import Progress from '../views/Progress.vue';
import Rules from '../views/Rules.vue';
import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/store',
    name: 'Store',
    component: Store,
  },
  {
    path: '/new-task',
    name: 'NewTask',
    component: NewTask,
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: Tasks,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: Inventory,
  },
  {
    path: '/progress',
    name: 'Progress',
    component: Progress,
  },
  {
    path: '/rules',
    name: 'Rules',
    component: Rules,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
