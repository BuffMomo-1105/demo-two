<template>
  <NavBar></NavBar>
  <router-view />
</template>
<script setup lang="ts">
import NavBar from "./components/nav/index.vue";
</script>
<style>
#app {
  font-family: Inter, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
