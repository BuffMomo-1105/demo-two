<template>
  <b-offcanvas v-model="showAds" placement="top" class="ad-section" no-header>
    <div class="d-flex h-100 w-100 inner-ad-block">
      <div class="w-50 h-100 ad-block">
        <img
          class="w-100 h-100"
          src="https://www.shutterstock.com/image-vector/dark-wide-abstract-banner-grey-260nw-1804227037.jpg"
          alt=""
        />
      </div>
      <div class="w-50 h-100 ad-block">
        <img
          class="w-100 h-100"
          src="https://www.shutterstock.com/image-vector/dark-wide-abstract-banner-grey-260nw-1804227037.jpg"
          alt=""
        />
      </div>
    </div>
  </b-offcanvas>
  <!-- Section one starts -->
  <Projection>
    <template #slogan-left>
      <span class="slogan-top">
        Do you <br />
        trade <br />for passive <br />
        income?
      </span>
    </template>
    <template #home-button> Meet our top traders... </template>
    <template #slogan-right>
      Business is centered on trust, and our quickest payout will demonstrate
      this. How about your trading, is it prepared for the change? Changes to
      the trading platform and commissions that are superior. Let's alter your
      method of making a profit.
    </template>
  </Projection>
  <!-- Section one ends -->

  <!-- Section two starts -->
  <div class="home-section-two text-start">
    <iframe
      src="https://www.youtube.com/embed/E7UO8DXY4a8?autoplay=1&mute=1&enablejsapi=1"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="home-video"
    ></iframe>
    <div style="max-height: 1080px; display: flex; justify-content: center">
      <div style="max-width: 1500px">
        <h1 class="home-slogan home-two-slogan">
          Do you have any idea <br />how you'll pay for your trade?
        </h1>
        <h1 class="home-slogan sub-slogan">Secured and safe with CRYPTO</h1>
        <h3 class="home-info home-two-info px-2">
          Crypto currency has revolutionized the way we pay for goods and
          services online. Crypto payment helps people break away from
          traditional banking practices and gives them more control over their
          wealth. Crypto Accounts are not linked to personal identity, offering
          greater privacy and anonymity when making payments. Crypto's has
          faster processing time for payments and highly Secure compared to
          other payment methods.
        </h3>
        <button type="button" class="btn btn-dark home-btn home-btn-two">
          Learn how it works?
        </button>
      </div>
    </div>
  </div>
  <!-- Section two ends -->

  <!-- Section four starts -->
  <div class="section-four text-start" style="max-height: 1080px">
    <div style="max-width: 1500px">
      <div data-aos="fade-up" class="card-one">
        <div class="card-header d-flex position-absolute end-0 top-0 mt-2 me-2">
          <div class="card-circle" v-for="i in 3"></div>
        </div>
        <div class="card-body">
          <h3 class="card-one-content">
            Is your trading platform as innovative as your trading ideas?
          </h3>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="200" class="card-two">
        <div class="card-header d-flex position-absolute end-0 top-0 mt-2 me-2">
          <div class="card-circle" v-for="i in 3"></div>
        </div>
        <div class="card-body">
          <h3 class="card-two-content">
            Is your trading platform as innovative as your trading ideas?
            Discover the power of trading and charting with our revolutionary
            platform. Our intuitive interface allows you to easily analyze
            markets, track trends, and execute trades in seconds. With
            interactive charts, customizable indicators , and automated alerts,
            you have everything you need to take your trading career to new
            height without wasting time on outdated tools- experience the future
            of investing.
          </h3>
        </div>
      </div>
    </div>
  </div>
  <!-- Section four ends -->

  <!-- Section five starts -->
  <div class="section-five text-start pb-4">
    <div style="max-width: 1500px">
      <h1 class="section-five-heading">
        What is your choice of trading account?
      </h1>
      <div class="row section-five-card">
        <div data-aos="fade-up" class="col card-first">
          <img
            src="../../assets/img/phone.png"
            alt=""
            class="section-three-img"
          /><span class="inner-text">0.6P</span>
          <h2 class="section-five-text">Low Spread</h2>
          <router-link class="text-decoration-none" to="/trading-account">
            <h5 class="learn-more mt-4">Learn More</h5>
          </router-link>
        </div>

        <div data-aos="fade-up" data-aos-delay="200" class="col card-second">
          <img
            src="../../assets/img/earth.png"
            alt=""
            class="section-three-img"
          />
          <span class="inner-text">6$ per lakh</span>
          <h2 class="section-five-text ms-4">Zero Spread</h2>
          <router-link class="text-decoration-none" to="/trading-account">
            <h5 class="learn-more mt-4">Learn More</h5>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <!-- Section five starts -->

  <!-- Section three starts -->
  <Projection style="top: 5rem">
    <template #slogan-left>
      No mark-up spread<br />Trade with Trust<br />Upto 1:500 leverage<br />
    </template>
    <template #home-button> Meet your tommorrow managers </template>
    <template #slogan-right>
      A flexible commission plan for all traders combined with the necessary
      leverage strengthens your trading. Our copy trade platform is more
      progressive, and traditional providers are struggling to stay up with all
      of these changes. Our payment infrastructure will always be cutting-edge,
      facilitating rather than limiting your trading growth.
    </template>
  </Projection>
  <!-- Section three ends-->
</template>
<script setup>
import Projection from "./components/Projection.vue";
import { onMounted, ref } from "vue";
import AOS from "aos";

const showAds = ref(false);
onMounted(() => {
  AOS.init();
  showAds.value = true;
});
</script>

<style>
@import "../../assets/styles/home.css";
.ad-section {
  z-index: 9999;
  margin: 0;
  padding: 0;
}
.inner-ad-block {
  border: 10px solid black;
}
.ad-section .offcanvas-body {
  margin: 0;
  padding: 0;
}
.ad-block {
  border: 10px solid #c9f73a;
}
</style>
