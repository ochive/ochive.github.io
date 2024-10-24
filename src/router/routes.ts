import HomePage from "@/views/HomePage.vue";
import { RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    meta: { title: "首页" },
    component: HomePage,
    children: [],
  },
  {
    path: "/login",
    meta: { title: "登录" },
    component: () => import("@/views/LoginPage.vue"),
  },
  {
    path: "/",
    // component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        meta: { title: "主页" },
        component: () => import("@/views/HomePage.vue"),
      },
    ],
  },
  {
    path: "/game/list",
    meta: { title: "游戏列表" },
    component: () => import("@/views/game/List.vue"),
  },
];

export { routes };
