<template>
  <nav
    id="nav"
    class="navbar navbar-expand-lg navbar-light bg-white navbar-desktop"
  >
    <div class="container-fluid nav-container h-100 me-4">
      <a class="navbar-brand" href="/"
        ><img
          src="https://www.unlimint.com/wp-content/themes/unlimint/assets/images/logo.svg"
      /></a>
      <div id="navbarTogglerDemo02" class="collapse navbar-collapse mx-2">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="item in menus" :key="item.name">
            <router-link class="nav-link" :to="item.path">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
        <a href="#" class="nav-link me-4">Login</a>
            <a class="nav-link demo-btn" href="#">Demo</a>
      </div>
    </div>
  </nav>
</template>
<script setup>
const props = defineProps(["menus"]);
</script>

<style>
.demo-btn {
  width: 65px;
  line-height: 40px;
}
.demo-btn {
  background-color: rgb(123 208 248);
  border: none;
  width: 6.5rem;
}
@media (max-width: 750px) {
  .mbl-demo-btn {
    display: none;
  }
}
</style>
