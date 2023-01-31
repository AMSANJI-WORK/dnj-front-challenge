import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/discussion",
      children: [
        {
          path: "/discussion",
          component: () => import("@/modules/discussion/views/main.vue"),
        },
      ],
    },
  ],
});

export default router;
