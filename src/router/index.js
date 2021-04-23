/**
 * ```
 * @prettier
 * ```
 */

import Vue from "vue";
import VueRouter from "vue-router";

/**
 * Views
 */
import ErrorPage from "@/views/error/index.vue";
import HomePage from "@/views/home/index.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  // mode: "history",
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/error",
      name: "ErrorPage",
      component: ErrorPage,
    },
  ],
});

export default router;
