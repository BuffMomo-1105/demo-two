<template>
  <section class="features text-start d-block" :class="bgColor">
    <div class="device-block">
      <div class="feature-heading">
        <h2>
          <slot name="header"></slot>
        </h2>
      </div>
      <div class="feature-desc d-flex flex-wrap">
        <div class="feature-arrow me-4">
          <component :is="arrowComponent" class="mb-4" />
        </div>
        <div class="feature-text">
          <p>
            <slot name="description"> </slot>
          </p>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <slot name="image"> </slot>
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  bgColor: { required: false, default: "white-color" },
  arrowComponent: { required: false, default: "arrow-black" },
});
</script>
<style>
.features {
  top: 210px;
  padding: 88px 24px;
  background-color: #f2f2f2;
}
.device-block {
  max-width: 1400px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 24px;
}
.promo-img {
  width: 100%;
}
.feature-heading h2 {
  font: 40px/44px "Nekst", sans-serif;
  font-weight: 700;
  margin-bottom: 40px;
}
.feature-text {
  font: 20px/30px "Inter", sans-serif;
  font-weight: 400;
  width: 100%;
}
@media (min-width: 768px) {
  .device-block {
    padding-left: 24px;
  }
  .feature-heading h2 {
    font: 48px/52px "Nekst", sans-serif;
    font-weight: 700;
  }
  .feature-heading h2,
  .feature-desc {
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
    margin-left: 8.33333%;
  }
  .feature-text {
    width: 80%;
  }
  .device-block {
    padding-left: 8.33333%;
  }
}
@media (min-width: 1280px) {
  .features {
    padding: 140px 12px;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .feature-heading h2 {
    font: 56px/62px "Nekst", sans-serif;
    font-weight: 700;
    margin-bottom: 56px;
  }
  .device-block {
    margin-left: auto;
    padding-left: 0px;
  }
  .promo-img {
    width: 75%;
  }
}
@media (min-width: 768px) {
  .partner-page h1,
  .partner-sub-heading,
  .partner-button {
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
    margin-left: 8.33333%;
  }
}
</style>
