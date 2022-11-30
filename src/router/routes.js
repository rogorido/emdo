const routes = [
  {
    path: '/',
    component: () => import('layouts/MainPageLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/sections',
        component: () => import('pages/OurSectionsPage.vue')
      },
      { path: '/bishops', component: () => import('pages/BishopsPage.vue') },
      {
        path: '/resolutions',
        component: () => import('pages/ResolutionsPage.vue')
      },
      { path: '/houses', component: () => import('pages/HousesPage.vue') },
      { path: '/works', component: () => import('pages/WorksPage.vue') },
      { path: '/about', component: () => import('pages/AboutPage.vue') },
      { path: '/contact', component: () => import('pages/ContactPage.vue') },
      { path: '/getdata', component: () => import('pages/GetDataPage.vue') },
      { path: '/links', component: () => import('pages/LinksPage.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
];

export default routes;
