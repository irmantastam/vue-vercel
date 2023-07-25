import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../views/HelloWorld.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Hello World",
      component: HelloWorld,
    },
    {
      path: "/resume",
      name: "Resume",
      component: () => import("../views/Resume.vue"),
    },
  ],
});

export default router;
