<template>
  <nav
    id="nav"
    class="navbar navbar-expand-lg navbar-light bg-white navbar-desktop"
  >
    <div
      class="container-fluid nav-container h-100 me-4"
      style="max-width: 1650px"
    >
      <a class="navbar-brand" href="/"
        ><img src="../../../assets/img/logo.svg"
      /></a>
      <div id="navbarTogglerDemo02" class="collapse navbar-collapse mx-2">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="item in menus" :key="item.name">
            <template v-if="item.subLinks">
              <b-nav-item-dropdown
                id="my-nav-dropdown"
                :text="item.name"
                toggle-class="nav-link-custom"
                class="nav-dropdown"
                right
              >
                <b-dropdown-item v-for="link in item.subLinks" :key="link.path">
                  <router-link class="nav-link m-0" :to="link.path">
                    {{ link.name }}
                  </router-link>
                </b-dropdown-item>
              </b-nav-item-dropdown>
            </template>
            <template v-else>
              <router-link class="nav-link" :to="item.path">
                {{ item.name }}
              </router-link>
            </template>
          </li>
        </ul>
        <a class="nav-link open-account-btn me-4" @click="eventStore.showOpenAccountDrawer=true">Open Account</a>
        <a href="#" class="nav-link me-4">Login</a>
        <a class="nav-link demo-btn" href="#">Demo</a>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { useEventStore } from "../../../stores";
const props = defineProps(["menus"]);
const eventStore=useEventStore()
</script>

<style>
.nav-dropdown,
.nav-link-custom {
  top: -3px;
  font-size: 16px !important;
  color: #000000 !important;
  margin-left: 13px;
}
.demo-btn {
  width: 65px;
  line-height: 40px;
}
.demo-btn {
  background-color: #c9f73a;
  border: none;
  width: 6.5rem;
}
@media (max-width: 750px) {
  .mbl-demo-btn {
    display: none;
  }
}
.navbar-expand-lg {
  justify-content: center !important;
}
</style>
