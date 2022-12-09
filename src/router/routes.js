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
      {
        path: '/technicaldata',
        component: () => import('pages/TechnicalDataPage.vue')
      },
      { path: '/links', component: () => import('pages/LinksPage.vue') },
      {
        path: '/bibliography',
        component: () => import('pages/BibliographyPage.vue')
      },
      {
        path: '/worksdb',
        component: () => import('pages/works/WorksMainPage.vue')
      },
      {
        path: '/works/places',
        name: 'placeslist',
        component: () => import('pages/works/PlacesPage.vue')
      },
      {
        path: '/works/places/:place',
        name: 'placebyid',
        component: () => import('pages/works/PlaceById.vue')
      },
      {
        path: '/works/authors',
        name: 'authorslist',
        component: () => import('pages/works/AuthorsPage.vue')
      },
      {
        path: '/works/authors/:author',
        name: 'authorbyid',
        component: () => import('pages/works/AuthorById.vue')
      },
      {
        path: '/works/categories',
        name: 'categorieslist',
        component: () => import('pages/works/CategoriesPage.vue')
      },
      {
        path: '/works/categories/:category',
        name: 'categorybyid',
        component: () => import('pages/works/CategoryById.vue')
      }
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
