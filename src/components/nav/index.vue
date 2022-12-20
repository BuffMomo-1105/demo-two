<template>
  <MobileNav class="navbar-mbl" :menus="menus" />
  <DesktopNav :menus="menus" />
</template>

<script setup>
import MobileNav from "./components/MobileNav.vue";
import DesktopNav from "./components/DesktopNav.vue";
import { ref } from "vue";
const menus = ref([
  { name: "Trading Platform", path: "trading-platform" },
  { name: "Copy Trading", path: "/copy-trading" },
  { name: "Trading Account", path: "/trading-account" },
  { name: "Trading Tool", path: "/trading-tool" },
  { name: "Learn n Earn", path: "/learn-n-earn" },
  { name: "Partnership", path: "/partnership" },
  { name: "Get in touch", path: "/get-in-touch" },
  { name: "Open Account Now", path: "/open-account" },
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
  border-bottom: 2px solid rgb(65 176 228);
}
.router-link-exact-active{
  border-bottom: 3px solid rgb(65 176 228);
}
.nav-link-mbl:hover {
  opacity: 0.5;
  border-bottom: 2px solid rgb(65 176 228);
}
.nav-container {
  margin: 10px 6.5rem !important;
}

.navbar-brand {
  display: block;
  width: 140px;
  height: 28px;
  margin-right: 71px !important;
}
.list-group-item {
  font-size: 16px;
}
@media (max-width: 1430px) {
  .navbar-desktop {
    display: none !important;
  }
}
</style>
