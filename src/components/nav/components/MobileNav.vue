<template>
  <div class="navbar-mbl">
    <nav
      id="nav"
      class="navbar navbar-mobile navbar-expand-lg navbar-light bg-white"
    >
      <div class="d-flex position-static">
        <div class="me-auto">
          <a class="navbar-brand" href="#"
            ><img
              src="https://www.unlimint.com/wp-content/themes/unlimint/assets/images/logo.svg"
          /></a>
        </div>
        <div class="d-flex position-absolute end-0 me-4 mbl-nav-second">
          <div class="ms-2" @click="showNav">
            <svg
              v-if="!openNav"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="4"
                y1="8.83301"
                x2="28"
                y2="8.83301"
                stroke="black"
              ></line>
              <line x1="4" y1="15.5" x2="28" y2="15.5" stroke="black"></line>
              <line
                x1="4"
                y1="22.167"
                x2="28"
                y2="22.167"
                stroke="black"
              ></line>
            </svg>
            <svg
              v-else
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 8L8 24" stroke="black"></path>
              <path d="M8 8L24 24" stroke="black"></path>
            </svg>
          </div>
        </div>
      </div>
    </nav>
    <div v-if="openNav" class="text-start mbl-nav-extend">
      <ul class="navbar-nav nav flex-column me-auto mb-2 mb-lg-0">
        <li class="nav-item" v-for="item in menus" :key="item.name">
          <a class="nav-link nav-link-mbl" href="#">{{ item.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const props = defineProps(["menus"]);
const openNav = ref(false);
const showNav = () => {
  openNav.value = !openNav.value;
};
</script>
<style>
.nav-link-mbl {
  width: auto;
  font-size: 20px !important;
  font-weight: 500px !important;
}
.mbl-nav-extend {
  position: absolute;
  width: 100vw;
  min-height: 100vh;
  z-index: 9999;
  background: white;
}
@media (min-width: 1430px) {
  .navbar-mbl {
    display: none !important;
  }
}
.navbar-mobile,
.mbl-nav-extend {
  padding-left: 3rem !important;
  padding-right: 2rem !important;
}
</style>
