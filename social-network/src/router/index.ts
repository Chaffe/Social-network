import Vue from 'vue';
// import VueRouter, { RouteConfig } from 'vue-router';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      meta: { layout: 'empty' },
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/messenger',
      name: 'messenger',
      meta: { layout: 'main' },
      component: () => import('../views/Messenger.vue'),
    },
    {
      path: '/photos',
      name: 'photos',
      meta: { layout: 'main' },
      component: () => import('../views/Photos.vue'),
    },
    {
      path: '/videos',
      name: 'videos',
      meta: { layout: 'main' },
      component: () => import('../views/Videos.vue'),
    },
    {
      path: '/music',
      name: 'music',
      meta: { layout: 'main' },
      component: () => import('../views/Music.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      meta: { layout: 'main' },
      component: () => import('../views/Profile.vue'),
    },
    {
      path: '/registration',
      name: 'registration',
      meta: { layout: 'empty' },
      component: () => import('../views/Registration.vue'),
    },
  ],
});

export default router;
