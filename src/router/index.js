import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import PochettesCd from '../views/PochettesCd.vue'
import MesLogos from '../views/MesLogos.vue'
import MesSites from '../views/MesSites.vue'
import ContactView from '../views/ContactView.vue'
import MentionsLegales from '../views/MentionsLegales.vue'
import ConfidentialiteView from '../views/ConfidentialiteView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: AccueilView },
    { path: '/sites', name: 'sites', component: MesSites },
    { path: '/pochettes', name: 'pochettes', component: PochettesCd },
    { path: '/logos', name: 'logos', component: MesLogos },
    { path: '/contact', name: 'contact', component: ContactView },
    { path: '/mentions-legales', name: 'mentions', component: MentionsLegales },
    { path: '/confidentialite', name: 'confidentialite', component: ConfidentialiteView },

    // La règle de capture totale DOIT être la dernière de la liste
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            el: to.hash,
            behavior: 'smooth',
          })
        }, 300)
      })
    }
    return { top: 0 }
  },
})

export default router
