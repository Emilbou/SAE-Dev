import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Programmation from '../views/Programmation.vue'
import Artistes from '../views/Artistes.vue'
import MentionLegales from '../views/MentionLegales.vue'
import Nouscontacter from '../views/Nouscontacter.vue'
import Tickets from '../views/Tickets.vue'
import StyleGuide from '../views/StyleGuide.vue'
import AffichageListeFB from '../views/AffichageListeFB.vue'
import CreateFB from '../views/CreateFB.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/programmation', name: 'Programmation', component: Programmation },
    { path: "/:catchAll(.*)", redirect: '/404', },
    {
      path: '/404', name: 'PageNotExist', component: () => import('../views/Page404.vue'),
    },
    { path: '/Artistes', name: 'Artistes', component: Artistes },
    { path: '/MentionLegales', name: 'MentionLegales', component: MentionLegales },
    { path: '/Nouscontacter', name: 'Nouscontacter', component: Nouscontacter },
    { path: '/Tickets', name: 'Tickets', component: Tickets },
    { path: '/style-guide', name: 'StyleGuide', component: StyleGuide },
    { path: '/AffichageListeFB', name: 'AffichageListeFB', component: AffichageListeFB },
    { path: '/CreateFB', name: 'CreateFB', component: CreateFB },


  ]
})

export default router





















