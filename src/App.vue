<template>
  <NavBar></NavBar>
  <router-view />
  <OpenAccount/>
  <Footer />
</template>
<script setup lang="ts">
import NavBar from "./components/nav/index.vue";
import Footer from "./components/footer/Footer.vue";
import OpenAccount from "./components/OpenAccount.vue";
</script>
<style>
#app {
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
