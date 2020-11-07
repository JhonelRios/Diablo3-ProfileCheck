import { createRouter, createWebHistory } from 'vue-router';

const routerOptions = [
  { path: '/', name: 'Home' },
  { path: '/:region/:battleTag', name: 'Profile' },
  { path: '/:region/:battleTag/:heroId', name: 'Hero' },
  { path: '/about', name: 'About' },
  { path: '/error', name: 'Error' },
  { path: '/:catchAll(.*)', redirect: { name: 'Home' } }
];

const routes = routerOptions.map(r => {
  return {
    ...r,
    component: () => import(`../views/${r.name}/Index.vue`)
  };
});

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
