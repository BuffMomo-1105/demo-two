<template>
  <nav
    id="nav"
    class="navbar navbar-expand-lg navbar-light bg-white navbar-desktop"
  >
    <div class="container-fluid nav-container h-100 me-4">
      <a class="navbar-brand" href="#"
        ><img
          src="https://www.unlimint.com/wp-content/themes/unlimint/assets/images/logo.svg"
      /></a>
      <div id="navbarTogglerDemo02" class="collapse navbar-collapse mx-2">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="item in menus" :key="item.name">
            <a class="nav-link" href="#">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
const props = defineProps(["menus"]);
</script>
