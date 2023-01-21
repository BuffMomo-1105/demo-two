<template>
  <MobileNav class="navbar-mbl" :menus="menus" />
  <DesktopNav :menus="menus" />
</template>

<script setup>
import MobileNav from "./components/MobileNav.vue";
import DesktopNav from "./components/DesktopNav.vue";
import { ref } from "vue";
const menus = ref([
  {
    name: "Trading Services",
    path: null,
    subLinks: [
      { name: "Trading Platform", path: "/trading-platform" },
      { name: "Trading Chart", path: "/trading-chart" },
    ],
  },
  { name: "Copy Trading", path: "/copy-trading", subLinks: null },
  { name: "Trading Account", path: "/trading-account", subLinks: null },
  { name: "Trading Tool", path: "/trading-tool", subLinks: null },
  {
    name: "Learn & Earn",
    path: "null",
    subLinks: [
      { name: "Webinars", path: "/webinars" },
      { name: "Forex Basics", path: "/forex-basics" },
      { name: "Platform Tutorials", path: "/platform-tutorials" },
      { name: "FAQ", path: "/faq" },
    ],
  },
  { name: "Partnership", path: "/partnership", subLinks: null },
  { name: "Get in touch", path: "/get-in-touch", subLinks: null },
]);
</script>
<style>
#nav {
  height: 100px !important;
  position: fixed;
  z-index: 9999;
  width: 100vw;
}
#nav ul a {
  font-size: 16px !important;
  color: #000000;
  line-height: 15px;
  margin-left: 13px;
}
#nav ul a:hover {
  opacity: 0.5;
  border-bottom: 2px solid #c9f73a;
}
.router-link-exact-active {
  border-bottom: 3px solid #c9f73a;
}
.nav-link-mbl:hover {
  opacity: 0.5;
  border-bottom: 2px solid #c9f73a;
}
.nav-container {
  margin: 10px 6.5rem !important;
}

.navbar-brand {
  display: inline;
  width: 140px;
  height: 28px;
  margin-right: 40px !important;
}
.navbar-brand img {
  width: 140px;
}
@media (max-width: 770px) {
  .navbar-brand {
    left: -35px;
    top: -30px;
  }
}
.list-group-item {
  font-size: 16px;
}
@media (min-width: 1280px) {
  .navbar-brand {
    top: -71px;
  }
}
@media (max-width: 1430px) {
  .navbar-desktop {
    display: none !important;
  }
}
</style>
