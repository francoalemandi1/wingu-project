import Vue from "vue";
import VueRouter from "vue-router";
import CommuneFiltered from '@/views/CommuneFiltered.vue';
import communesList from '@/components/communesList.vue';
import Claims from '@/views/Claims.vue';
import SearchClaim from '@/components/searchClaim.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: communesList
  },
  {
    path: "/comuna/:id",
    name: "CommuneFiltered",
    component: CommuneFiltered,
  },
  {
    path: "/comuna/reclamos/:id",
    name: "Claims",
    component: Claims,
  },
  {
    path: "/search/:id",
    name: "Search",
    component: SearchClaim,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 };
  },
});

export default router;
