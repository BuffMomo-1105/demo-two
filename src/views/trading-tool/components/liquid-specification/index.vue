<template>
    <div class="margin-page">
      <div class="inner-margin-page">
        <div class="text-start margin-header">
          <h1>Liquidity Specifications</h1>
        </div>
        <Tabs />
      </div>
    </div>
  </template>
  <script setup>
  import { ref } from "vue";
  import Tabs from "./partials/Tabs.vue";
  </script>
  <style>
  .margin-header {
    width: 84%;
    margin: auto;
    top: 5rem;
  }
  .margin-header h1 {
    margin-bottom: 50px;
    font-family: "Nekst", sans-serif;
    font-size: 48px;
    line-height: 58px;
    font-weight: 700;
    color: #c9f73a;
  }
  .margin-page {
    padding-top: 100px;
    background-color: black;
  }
  .inner-margin-page {
    max-width: 1500px;
    margin: auto;
    background-color: black;
    color: white;
    padding-bottom: 5rem;
  }
  .tab-item {
    width: 100%;
    place-content: center;
    margin: 1rem;
  }
  .tab-content {
    display: block;
    color: white;
    background-color: black;
  }
  </style>
  