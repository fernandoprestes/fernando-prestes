import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('../pages/Home/index.vue');

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' },
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
