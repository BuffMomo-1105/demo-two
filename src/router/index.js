import { createRouter, createWebHistory } from "vue-router";

const adminRoutes = [
  {
    path: "/forex-basics/admin",
    name: "Forex Basics Admin",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/learn/components/forex-basics/ForexBasics.vue"
      ),
  },
];

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
    path: "/liquidity-specifications",
    name: "Liquidity Specifications",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/trading-tool/components/liquid-specification/index.vue"
      ),
  },
  {
    path: "/profit-calculator",
    name: "Profit Calculator",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/trading-tool/components/profit-calculator/index.vue"
      ),
  },
  {
    path: "/margin-calculator",
    name: "Margin Calculator",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/trading-tool/components/margin-calculator/index.vue"
      ),
  },
  {
    path: "/forex-basics",
    name: "Forex Basics",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/learn/components/forex-basics/ForexBasics.vue"
      ),
  },
  {
    path: "/platform-tutorials",
    name: "Platform Tutorials",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/learn/components/platform-tutorials/PlatformTutorials.vue"
      ),
  },
  {
    path: "/faq",
    name: "FAQ",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/learn/components/faq/Faq.vue"
      ),
  },
  {
    path: "/webinars",
    name: "Webinars",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/learn/components/webinars/Webinars.vue"
      ),
  },
  {
    path: "/webinars/:webinar",
    name: "Webinar Detail",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/learn/components/webinars/partials/WebinarDetail.vue"
      ),
  },
  {
    path: "/kyc-policy",
    name: "KYC Policy",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/policy/KycPolicy.vue"),
  },
  {
    path: "/privacy-policy",
    name: "Privacy Policy",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/policy/PrivacyPage.vue"),
  },
  {
    path: "/risk-disclosure",
    name: "Risk Disclosure",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/policy/RiskDisclosure.vue"
      ),
  },
  {
    path: "/about-company",
    name: "About Company",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/about-company/index.vue"
      ),
  },
  ...adminRoutes,
];

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
  history: createWebHistory(),
  routes,
});

export default router;
