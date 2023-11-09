import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../views/HomeView.vue");
const Bugs = () => import("../views/BugsView.vue");
const Materials = () => import("../views/MaterialsView.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/bugs",
    name: "bugs",
    component: Bugs,
  },
  {
    path: "/materials",
    name: "materials",
    component: Materials,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "Home" },
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
