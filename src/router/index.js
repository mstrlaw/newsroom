import Vue from 'vue';
import VueRouter from 'vue-router';
import Newsroom from '@/views/Newsroom';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Newsroom,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
