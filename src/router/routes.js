import Vue from "vue";
import VueRouter from "vue-router";
import { routes } from "./router/routes";

import Menu from "./views/Menu.vue";
import About from "./views/About.vue";
import Order from "./views/Order.vue";
import LogIn from "./views/Login.vue";
import Profile from "./views/Profile.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Menu },
  { path: "/login", component: LogIn },
  { path: "/about", component: About },
  { path: "/order", component: Order },
  { path: "/me", component: Profile }
];

const router = new VueRouter({
  mode: "history",
  routes: routes
});

export default router;
