// Composables
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/counter',
        name: 'counter',
        component: () => import('@/components/Counter.vue'),
      },
      {
        path: '/todo-list',
        name: 'todoList',
        component: () => import('@/components/TodoList.vue'),
      },
      {
        path: 'modal-test',
        component: () => import('@/components/ModalTest.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
