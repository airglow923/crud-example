import { createWebHistory, createRouter } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      alias: '/tutorials',
      name: 'tutorials',
      component: () => import('./components/TutorialsList.vue'),
    },
    {
      path: '/tutorials/:id',
      name: 'tutorial-details',
      component: () => import('./components/Tutorial.vue'),
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('./components/AddTutorial.vue'),
    },
  ],
});

export default router;
