import { createWebHistory, createRouter } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/users',
      name: 'index',
      component: () => import('../components/UserList'),
    },
    // {
    //   path: '/users/:id',
    //   name: 'User details',
    //   component: () => import('../components/User'),
    // },
    // {
    //   path: '/users',
    //   name: 'Register',
    //   component: () => import('../components/UserRegister'),
    // },
    // {
    //   path: '/users/:id',
    //   name: 'Unregister',
    //   component: () => import('../components/UserUnregister'),
    // },
    // {
    //   path: '/users/',
    //   name: 'Unregister all',
    //   component: () => import('../components/UserUnregister'),
    // },
  ],
});

export default router;
