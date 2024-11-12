import { RouteRecordRaw } from 'vue-router';

export const ROTAS = {
  main: {
    path: '/',
    name: 'main',
    component: () => import('src/pages/HomePage.vue'),
    meta: {
      layout: 'MainLayout',
    },
  } as RouteRecordRaw,
  me: {
    path: '/about-me',
    name: 'about-me',
    component: () => import('src/pages/AboutMePage.vue'),
    meta: {
      layout: 'MainLayout',
      public: true,
    },
  } as RouteRecordRaw,
  eg: {
    path: '/about-eg',
    name: 'about-eg',
    component: () => import('src/pages/AboutEgPage.vue'),
    meta: {
      layout: 'MainLayout',
      public: true,
    },
  } as RouteRecordRaw,
  events: {
    path: '/about-events',
    name: 'about-events',
    component: () => import('src/pages/AboutEventsPage.vue'),
    meta: {
      layout: 'MainLayout',
      public: true,
    },
  } as RouteRecordRaw,
  boss: {
    path: '/about-boss',
    name: 'about-boss',
    component: () => import('src/pages/AboutBossPage.vue'),
    meta: {
      layout: 'MainLayout',
      public: true,
    },
  } as RouteRecordRaw,
  class: {
    path: '/about-class',
    name: 'about-class',
    component: () => import('src/pages/AboutClassPage.vue'),
    meta: {
      layout: 'MainLayout',
      public: true,
    },
  } as RouteRecordRaw,
  wings: {
    path: '/about-wings',
    name: 'about-wings',
    component: () => import('src/pages/AboutWingsPage.vue'),
    meta: {
      layout: 'MainLayout',
      public: true,
    },
  } as RouteRecordRaw,
};

function isRouteRecord(obj: unknown): obj is RouteRecordRaw {
  return (
    typeof obj === 'object' && obj !== null && 'path' in obj && 'name' in obj
  );
}

const findRouteRecords = (obj: unknown): RouteRecordRaw[] => {
  if (isRouteRecord(obj)) {
    return [obj];
  } else if (typeof obj === 'object' && obj !== null) {
    return Object.values(obj).flatMap(findRouteRecords);
  }
  return [];
};
const records = findRouteRecords(ROTAS);

const routes: RouteRecordRaw[] = [
  ...records,

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
