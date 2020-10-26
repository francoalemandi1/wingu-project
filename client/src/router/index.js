import Vue from "vue";
import VueRouter from "vue-router";
import Comuna from '@/views/Comuna.vue';
import communesList from '@/components/communesList.vue';
import Reclamos from '@/views/Reclamos.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: communesList
  },
  {
    path: "/comuna/:id",
    name: "Comuna",
    component: Comuna,
  },
  {
    path: "/comuna/reclamos/:id",
    name: "Reclamos",
    component: Reclamos,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
