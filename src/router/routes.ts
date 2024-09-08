// import { RouteRecordRaw } from 'vue-router';
// import MainLayout from 'layouts/MainLayout.vue';
// import AboutMePage from 'pages/AboutMePage.vue';
// // import AboutEGPage from 'pages/AboutEGPage.vue';
// // import EventsPage from 'pages/EventsPage.vue';
// // import BossPage from 'pages/BossPage.vue';
// // import ClassGuidePage from 'pages/ClassGuidePage.vue';

// const routes: RouteRecordRaw[] = [
//   {
//     path: '/',
//     component: MainLayout,
//     children: [
//       { path: '', component: MainLayout }, // Default route (ex: '/')
//       // { path: '/about-me', component: AboutMePage, name: 'about-me' }, // Default route (ex: '/')

//       // { path: 'about-eg', component: AboutEGPage }, // Correspondente ao 'About EG'
//       // { path: 'events', component: EventsPage }, // Correspondente ao 'Events'
//       // { path: 'boss', component: BossPage }, // Correspondente ao 'Boss'
//       // { path: 'class-guide', component: ClassGuidePage }, // Correspondente ao 'Class Guide'
//     ],
//   },
//   // {
//   //   path: '/about-me',
//   //   component: AboutMePage,
//   //   name: 'about-me',
//   //   children: [
//   //     { path: '/about-me', component: AboutMePage, name: 'about-me' }, // Default route (ex: '/')
//   //     // { path: 'about-eg', component: AboutEGPage }, // Correspondente ao 'About EG'
//   //     // { path: 'events', component: EventsPage }, // Correspondente ao 'Events'
//   //     // { path: 'boss', component: BossPage }, // Correspondente ao 'Boss'
//   //     // { path: 'class-guide', component: ClassGuidePage }, // Correspondente ao 'Class Guide'
//   //   ],
//   // },
//   // Outros caminhos fora do MainLayout se necessário
// ];

// export default routes;

import { RouteRecordRaw } from 'vue-router';

export const ROTAS = {
  main: {
    path: '/',
    name: 'main',
    component: () => import('layouts/MainLayout.vue'),
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
