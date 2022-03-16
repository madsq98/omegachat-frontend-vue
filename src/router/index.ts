import { createRouter, createWebHistory } from "vue-router";
import CreateUserView from "../views/CreateUserView.vue";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/CreateUser",
      name: "Create User",
      component: CreateUserView,
    },
    {
      path: "/login",
      name: "Login",
      component: LoginView,
    },
    {
      path: "/logout",
      name: "Logout",
      component: LogoutView
    }
  ],
});

export default router;
