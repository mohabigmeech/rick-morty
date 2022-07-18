import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/characters",
      name: "home",
      component: () => import("../views/CharactersListView.vue"),
    },
    {
      path: "/characters/:id",
      name: "character",
      component: () => import("../views/CharacterView.vue"),
    },
    {
      path: "/",
      redirect: "/characters",
    },
  ],
});

export default router;
