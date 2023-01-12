import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/home/index.vue"),
  },
  {
    path: "/copy-trading",
    name: "Copy Trading",
    component: () =>
      import(
        /* webpackChunkName: "copytrading" */ "../views/copy-trading/index.vue"
      ),
  },
  {
    path: "/get-in-touch",
    name: "Get In Touch",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/get-in-touch/index.vue"),
  },
  {
    path: "/learn-n-earn",
    name: "Learn and Earn",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/learn/index.vue"),
  },
  {
    path: "/open-account",
    name: "Open Account",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/open-account/index.vue"),
  },
  {
    path: "/partnership",
    name: "Partnership",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/partnership/index.vue"),
  },
  {
    path: "/trading-account",
    name: "Trading Account",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/trading-account/index.vue"
      ),
  },
  {
    path: "/trading-platform",
    name: "Trading Platform",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/trading-platform/index.vue"
      ),
  },
  {
    path: "/trading-chart",
    name: "Trading Chart",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/trading-chart/index.vue"
      ),
  },
  {
    path: "/trading-tool",
    name: "Trading Tool",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/trading-tool/index.vue"),
  },
  // {
  //   path: "/forex-basics",
  //   name: "Forex Basics",
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "about" */ "../views/learn/components/forex-basics/ForexBasics.vue"
  //     ),
  // },
  {
    path: "/policy",
    name: "Policy",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/policy/PolicyPage.vue"),
  },
];

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  history: createWebHistory(),
  routes,
});

export default router;
