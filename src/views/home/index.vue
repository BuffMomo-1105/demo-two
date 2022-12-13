<template>
  <!-- Section one starts -->
  <Projection>
    <template #slogan-left>
      Do you <br />
      trade <br />for passive <br />
      income?
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
    <h1 class="home-slogan home-two-slogan">
      Do you have any idea <br />how you'll pay for your trade?
    </h1>
    <h1 class="home-slogan sub-slogan">Secured and safe with CRYPTO</h1>
    <h3 class="home-info home-two-info px-2">
      Crypto currency has revolutionized the way we pay for goods and services
      online. Crypto payment helps people break away from traditional banking
      practices and gives them more control over their wealth. Crypto Accounts
      are not linked to personal identity, offering greater privacy and
      anonymity when making payments. Crypto's has faster processing time for
      payments and highly Secure compared to other payment methods.
    </h3>
    <button type="button" class="btn btn-dark home-btn home-btn-two">
      Learn how it works?
    </button>
  </div>
  <!-- Section two ends -->

  <!-- Section four starts -->
  <div class="section-four text-start">
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
          Is your trading platform as innovative as your trading ideas? Discover
          the power of trading and charting with our revolutionary platform. Our
          intuitive interface allows you to easily analyze markets, track
          trends, and execute trades in seconds. With interactive charts,
          customizable indicators , and automated alerts, you have everything
          you need to take your trading career to new height without wasting
          time on outdated tools- experience the future of investing.
        </h3>
      </div>
    </div>
  </div>
  <!-- Section four ends -->

  <!-- Section five starts -->
  <div class="section-five text-start pb-4">
    <h1 class="section-five-heading">
      What is your choice of trading account?
    </h1>
    <div class="row section-five-card">
      <div data-aos="fade-up" class="col card-first">
        <img
          src="https://www.unlimint.com/wp-content/themes/unlimint/assets/images/home-products/phone.png"
          alt=""
          class="section-three-img"
        /><span class="inner-text">0.6P</span>
        <h2>Low Spread</h2>
        <a href="/" class="text-decoration-none">
          <h5 class="learn-more mt-4">Learn More</h5></a
        >
      </div>

      <div data-aos="fade-up" data-aos-delay="200" class="col card-second">
        <img
          src="https://www.unlimint.com/wp-content/themes/unlimint/assets/images/home-products/earth.png"
          alt=""
          class="section-three-img"
        />
        <span class="inner-text">6$ per lakh</span>
        <h2 class="ms-4">Zero Spread</h2>
        <a href="/" class="text-decoration-none"
          ><h5 class="learn-more mt-4 ms-4">Learn More</h5></a
        >
      </div>
    </div>
  </div>
  <!-- Section five starts -->

  <!-- Section three starts -->
  <Projection>
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
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
});
</script>

<style>
@import "../../assets/home.css";
</style>
