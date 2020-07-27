import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Store from '../views/store.vue';
import Home from '../views/home.vue';
import NewTask from '../views/new-task.vue';
import Tasks from '../views/tasks.vue';
import Profile from '../views/profile.vue';

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
];

const router = new VueRouter({
  routes,
});

export default router;
