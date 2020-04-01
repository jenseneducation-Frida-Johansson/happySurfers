import Vue from "vue";
import VueRouter from "vue-router";
import Menu from "../views/Menu.vue";
import About from "../views/About.vue";
import Order from "../views/Order.vue";
import LogIn from "../views/Login.vue";
import Profile from "../views/Profile.vue";

Vue.use(VueRouter);

//export
const routes = [
  { path: "/", name: "Menu", component: Menu },
  { path: "/login", name: "Login", component: LogIn },
  { path: "/about", name: "About", component: About },
  { path: "/order", name: "Order", component: Order },
  { path: "/me", name: "Profile", component: Profile }
];

const router = new VueRouter({
  mode: "history",
  //routes: routes
  base: process.env.BASE_URL,
  routes
});
export default router;
