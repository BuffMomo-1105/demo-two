<template>
  <FeatureComponent bg-color="grey-color">
    <template #header> Promo Banners </template>
    <template #description>
      Banners are available in any size and theme and in all languages enabling
      you to target different groups across any country, website or banner
      network.
    </template>
    <template #image>
      <img
        src="../../../../assets/img/promo-banners.png"
        alt=""
        class="promo-img m-2"
      />
    </template>
  </FeatureComponent>
  <FeatureComponent bg-color="white-color">
    <template #header> Referral Links </template>
    <template #description>
      Unique referral links for each partner to direct online and mobile traffic
      from any communication channel including paid search ads, emails,
      messengers or social networks to the trading products.
    </template>
    <template #image>
      <img
        src="../../../../assets/img/referral.png"
        alt=""
        class="promo-img m-2"
      />
    </template>
  </FeatureComponent>
  <FeatureComponent bg-color="black-color" arrow-component="arrow-theme">
    <template #header> QR Codes </template>
    <template #description>
      QR Code Generator in any custom colour with app icons to promote trading
      products event offline on cards, flyers, mail, print ads in news and
      magazines, at sporting events, in airports, bars, hotels or outdoor.
    </template>
    <template #image>
      <img src="../../../../assets/img/qr.png" alt="" class="promo-img m-2" />
    </template>
  </FeatureComponent>
  <FeatureComponent>
    <template #header> Multi-Level IB</template>
    <template #description>
      Setting the levels allows partners to profit not only from the
      transactions of their direct clients but also from those who are brought
      to the platform by them. The depth of the affiliate network can be
      individually customised up to 100 levels, each with its own coefficient
      for calculating partner rewards.
    </template>
    <template #image>
      <img
        src="https://media.b2broker.com/app/uploads/2022/01/frame-513367.svg"
        alt=""
        class="promo-img m-2"
      />
    </template>
  </FeatureComponent>
</template>
<script setup>
import FeatureComponent from "./FeatureComponent.vue";
</script>
