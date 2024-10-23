import { RouteRecordRaw } from "vue-router";
import Layout from "@/layouts/HomeLayout.vue";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    meta: { title: "首页" },
    component: Layout,
    children: [],
  },
  {
    path: "/login",
    meta: { title: "登录" },
    component: () => import("@/views/LoginPage.vue"),
  },
  {
    path: "/",
    component: Layout,
    redirect:"/home",
    children: [
      {
        path: "/home",
        meta: { title: "主页" },
        component: () => import("@/views/HomePage.vue"),
      },
    ],
  },
];

export { routes };
