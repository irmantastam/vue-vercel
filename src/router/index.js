import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      props: {
        msg: "Welcome Folks!",
      },
    },
    {
      path: "/resume",
      name: "resume",
      component: () => import("../views/ResumeView.vue"),
    },
  ],
});

export default router;
