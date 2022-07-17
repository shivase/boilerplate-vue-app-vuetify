import { RouteRecordRaw } from 'vue-router';

import MainLayout from '@/components/layouts/MainLayout.vue';
import MetamaskError from '@/components/pages/MetamaskError.vue';
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
  {
    path: '/metamask',
    component: MetamaskError,
  },
];

export default routes;
