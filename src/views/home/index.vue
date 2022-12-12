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
.home-section-two {
  padding-bottom: 8rem;
  background-image: linear-gradient(to bottom, #a5a5a5 0%, #fefefe 100%);
}
.home-two-slogan {
  font-size: 56px;
  margin-left: 14rem;
  padding-top: 10rem;
}
.sub-slogan {
  font-size: 48px;
  color: #c9f73a;
  margin-left: 18rem;
  margin-top: 2.5rem;
}
.home-two-info {
  margin-top: 2.5rem;
  margin-left: 18rem;
  width: 61%;
}
.home-btn-two {
  margin-top: 2.5rem;
  margin-left: 18rem;
}
@media (max-width: 1270px) {
  .home-section-two {
    padding-bottom: 8rem;
  }
  .home-two-slogan,
  .home-btn-two,
  .sub-slogan,
  .home-two-info,
  .home-btn-two {
    margin: 0;
    margin-left: 8% !important;
  }
  .home-btn-two,
  .sub-slogan,
  .home-two-info,
  .home-btn-two {
    margin-top: 2rem;
  }
  .home-two-info {
    width: 90vw;
  }
  .home-btn-two {
    width: 88% !important;
  }
}

.section-four {
  background-color: black;
  padding: 4rem 0;
}
.card-one {
  width: 540px;
  height: 320px;
  background-color: white;
  padding: 2rem;
  margin-left: 18%;
  border: 1px solid black;
}
.card-two {
  width: 50%;
  height: 480px;
  background-color: white;
  padding: 2rem;
  margin-left: 44%;
  position: relative;
  top: -125px;
  border: 1px solid black;
}
.card-body {
  position: relative !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  padding: 1rem;
}
.card-one-content {
  font-weight: 600;
  font-size: 37px;
}
.card-two-content {
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 2rem;
}
.card-circle {
  padding: 0.7rem;
  margin-right: 5px;
  background-color: #c9f73a;
  border-radius: 50%;
}
@media (max-width: 800px) {
  .card-one-content {
    font-size: 37px;
  }
  .card-one {
    width: 90vw !important;
    height: 320px;
    padding: 2rem;
    margin: auto;
  }
  .card-two {
    width: 90vw;
    height: 480px;
    padding: 2rem;
    margin: auto;
    margin-top: 2rem;
    top: 0;
  }
  .card-two-content {
    line-height: normal;
  }
  .card-body {
    position: relative !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
    padding: 1rem;
  }
}
@media (min-width: 800px) and (max-width: 1200px) {
  .card-one {
    width: 36%;
    height: 320px;
    padding: 2rem;
  }
  .card-two {
    top: -80px;
  }
  .card-one-content {
    font-size: 27px;
  }
  .card-two-content {
    line-height: normal;
  }
}
</style>
