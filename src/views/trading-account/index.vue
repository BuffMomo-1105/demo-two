<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper";
import { ref } from "vue";
import { useEventStore } from "../../stores";

const eventStore = useEventStore();
const lists = ref([
  {
    title: "SPREAD",
    p_value: "Floating, Starting at 0.06 pips",
    p_comm: "Raw",
  },
  {
    title: "Commission Currency",
    p_value: "Zero",
    p_comm: "50$ per million or 5$ per Lakh",
  },
  { title: "Commission Crypto", p_value: "0.1 %", p_comm: "0.1 %" },
  { title: "Recommended deposit", p_value: "100 USD", p_comm: "100 USD" },
  {
    title: "Instruments ",
    p_value:
      "103 Currency pair + 13 Spot Metals + 13 Indices + 3 Spot Energies + 148 Crypto CFD",
    p_comm:
      "103 Currency pair + 13 Spot Metals + 13 Indices + 3 Spot Energies + 148 Crypto CFD",
  },
  {
    title: "Leverage",
    p_value:
      "1:500 for currencies, 1:200 for Metals, Energy, 1:50 for indices, 1:25 for cryptocurrencies,1:20 for stocks",
    p_comm:
      "1:500 for currencies, 1:200 for Metals, Energy, 1:50 for indices, 1:25 for cryptocurrencies,1:20 for stocks",
  },
  {
    title: "Lot Size",
    p_value: "Micro 0.01 Mini 0.1 STD 1 Lot",
    p_comm: "Micro 0.01 Mini 0.1 STD 1 Lot",
  },
  { title: "Margin Call/Stop Out Level ", p_value: "25%", p_comm: "25%" },
  { title: "Deposit Currency", p_value: "Crypto/Fiat", p_comm: "Crypto/Fiat" },
]);
</script>
<template>
  <div class="trading-account-page">
    <div class="theme-bg">
      <h1>Account &nbsp;Type &nbsp;Comparisions</h1>
    </div>
    <div class="account-section">
      <div class="account-cards">
        <div class="pip-value d-grid">
          <span class="inner-text w-100">Pip-Value Account </span>
          <b-button
            class="open-btn mt-4"
            @click="eventStore.showOpenAccountDrawer = true"
            >Open Account</b-button
          >
        </div>
        <div class="pip-com d-grid">
          <span class="inner-text w-100"> Pip-Com Account</span>
          <b-button
            class="open-btn mt-4"
            @click="eventStore.showOpenAccountDrawer = true"
            >Open Account</b-button
          >
        </div>
      </div>
      <div class="desktop-hide">
        <!-- <b-button
          class="open-btn mt-4"
          @click="eventStore.showOpenAccountDrawer = true"
          >Open Account</b-button
        > -->
        <b-button class="acct-btn mb-2 mt-2 w-75" @click="eventStore.showOpenAccountDrawer = true">Open Account</b-button>
        <div class="pip-value d-grid">
          <span class="inner-text pip-inner">Pip-Value Account </span>
          <span class="inner-text comm-inner">Pip-Comm Account </span>
        </div>
        <!-- <swiper
          :slidesPerView="1"
          :spaceBetween="30"
          :loop="true"
          :pagination="{
            clickable: true,
          }"
          :autoplay="{
            delay: 2000,
            disableOnInteraction: false,
          }"
          :modules="[FreeMode, Pagination, Autoplay]"
          class="mySwiper"
          :centeredSlides="true"
          :breakpoints="{
            768: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            770: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }"
        >
          <swiper-slide>
            <div class="pip-value d-grid">
              <span class="inner-text w-100">Pip-Value Account </span>
              <b-button
                class="open-btn mt-4"
                @click="eventStore.showOpenAccountDrawer = true"
                >Open Account</b-button
              >
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="pip-com d-grid">
              <span class="inner-text w-100"> Pip-Com Account</span>
              <b-button
                class="open-btn mt-4"
                @click="eventStore.showOpenAccountDrawer = true"
                >Open Account</b-button
              >
            </div>
          </swiper-slide>
        </swiper> -->
      </div>
      <div class="account-desc" v-for="item in lists" :key="item.title">
        <div class="desc-title w-100">{{ item.title }}</div>
        <div class="w-100 d-flex">
          <div class="desc-value w-50">{{ item.p_value }}</div>
          <div class="desc-comm w-50">{{ item.p_comm }}</div>
        </div>
      </div>
      <div class="account-desc">
        <div class="desc-title w-100"></div>
        <div class="w-100 d-flex">
          <div class="desc-value w-50">
            <b-button
              class="open-btn mt-4"
              @click="eventStore.showOpenAccountDrawer = true"
              >Open Account</b-button
            >
          </div>
          <div class="desc-comm w-50">
            <b-button
              class="open-btn mt-4"
              @click="eventStore.showOpenAccountDrawer = true"
              >Open Account</b-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.open-btn {
  height: 60px;
  width: 60%;
  margin: auto;
  background: transparent;
  border: 1px solid #c9f73a;
  color: #c9f73a;
  font-size: 21px;
  font-weight: 600;
}
.trading-account-page {
  padding-top: 120px;
}
.account-section {
  max-width: 1500px;
  width: 80%;
  margin: auto;
  top: -50px;
}
.pip-value {
  background-color: #000;
  width: 50%;
  padding: 4em;
}
.pip-com {
  background-color: rgb(43 42 42);
  width: 50%;
  padding: 4em;
}
.account-cards {
  display: flex;
}

.inner-text {
  color: #c9f73a;
  text-transform: uppercase;
  margin: 0 auto 15px;
  font-weight: 600;
  line-height: 1.2;
  font-family: "Nekst", sans-serif;
  font-size: 42px;
}
.desc-value,
.desc-comm {
  min-height: 120px;
  color: #c9f73a;
  background-color: #000;
  font-size: 22px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
}
.desc-comm {
  background-color: rgb(43 42 42);
}
.desc-title {
  min-height: 75px;
  background-color: #e2e2e2;
  font: 24px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  text-transform: uppercase;
}
.desktop-hide {
  display: none;
}
.pip-inner {
  position: absolute;
  left: 2%;
  top: 10%;
  max-width: 50%;
}
.comm-inner{
  position: absolute;
  right: 2%;
  bottom: 10%;
  max-width: 50%;
}
@media (max-width: 768px) {
  .inner-text {
    font-size: 24px;
  }
  .desktop-hide {
    display: block;
  }
  .pip-value {
    background-color: #000;
    width: 100%;
    padding: 4em;
    background: linear-gradient(-26deg, rgb(43 42 42) 50%, black 50%);
    width: 100vw;
    height: 50vw;
  }
  .pip-com {
    background-color: rgb(43 42 42);
    width: 100%;
    padding: 4em;
  }
  .account-cards {
    display: none;
  }
  .open-btn {
    width: auto;
    font-size: 16px;
  }
  .desc-value,
  .desc-comm {
    min-height: 120px;
    font-size: 16px;
    font-weight: 400;
  }
  .account-section {
    width: 100%;
    top: 0;
  }
  .theme-bg h1 {
    width: 95%;
    text-transform: uppercase;
    color: #000;
    font-weight: 600;
    line-height: 1.2;
    font-family: "Nekst", sans-serif;
    font-size: 28px;
    margin: 0;
    padding: 0;
  }
}
</style>
