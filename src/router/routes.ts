import { RouteRecordRaw } from 'vue-router';

import MainLayout from '@/components/layouts/MainLayout.vue';
import NotFound from '@/components/pages/NotFound.vue';
import TheIndex from '@/components/pages/TheIndex.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'index',
        component: TheIndex,
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: NotFound,
  },
];

export default routes;
