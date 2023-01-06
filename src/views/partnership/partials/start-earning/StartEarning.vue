<script setup>
import Link from "./icons/Link.vue";
import Click from "./icons/Click.vue";
import Reward from "./icons/Reward.vue";
import Trade from "./icons/Trade.vue";
</script>

<template>
  <section class="features text-start d-block">
    <div class="device-block">
      <div class="feature-heading text-center">
        <h2>How to start earning...</h2>
      </div>
      <div>
        <div class="d-flex flex-wrap justify-content-center text-start">
          <div class="d-block earn-block">
            <Link class="center-item earn-icon" />
            <p
              class="center-item"
              v-b-tooltip.hover.bottom
              title="Publish your partner link on your website, blog, social media channel or ad."
            >
              Publish partner link
            </p>
          </div>
          <div class="d-block earn-block">
            <arrow-black class="earn-arrow" />
          </div>
          <div class="d-block earn-block">
            <Click class="center-item earn-icon" />
            <p
              class="center-item"
              v-b-tooltip.hover.bottom
              title="Users click your link, lands on B2pip website and register an account."
            >
              Users become clients
            </p>
          </div>
          <div class="d-block earn-block">
            <arrow-black class="earn-arrow" />
          </div>
          <div class="d-block earn-block">
            <Trade class="center-item earn-icon" />
            <p
              class="center-item"
              v-b-tooltip.hover.bottom
              title="You earn revenue from each and every transaction your referred clients make, irrespective of the outcome of their trades."
            >
              Clients trade
            </p>
          </div>
          <div class="d-block earn-block">
            <arrow-black class="earn-arrow" />
          </div>
          <div class="d-block earn-block">
            <Reward class="center-item earn-icon" />
            <p
              class="center-item"
              v-b-tooltip.hover.bottom
              title="No need to wait weeks and months, we pay your partner revenue daily into your account."
            >
              You get rewarded
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.tooltip .tooltip-inner {
  background: #ffff !important;
  color: black !important;
  font: 16px/24px "Inter", sans-serif;
  font-weight: 400;
  text-align: left;
  padding: 1rem;
}
</style>
<style scoped>
.earn-arrow {
  top: 9px;
  margin: 1rem;
}
p {
  cursor: pointer;
  margin-top: 3rem;
  font: 24px/35px "Inter", sans-serif;
  font-weight: 600;
  min-width: 200px;
  left: -56px;
  text-align: center;
}
.earn-block {
  max-width: 150px;
}
.center-item {
  width: 100%;
}
@media (max-width: 1040px) {
  .earn-block {
    min-width: 100%;
    display: flex !important;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .earn-arrow {
    transform: rotate(90deg);
    margin-bottom: 60px;
  }
  .earn-icon {
    min-width: 100%;
  }
  p {
    min-width: 100%;
    left: 0;
  }
}
/* @media (750px < width < 1040px) {
  .earn-block {
    min-width: 100%;
  }
  p {
    left: 0px !important;
    width: 100% !important;
  }
  .earn-arrow {
    transform: rotate(90deg);
    margin-bottom: 60px;
    left: 0px !important;
    width: 95% !important;
  }
} */
</style>
