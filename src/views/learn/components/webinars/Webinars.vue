<template>
  <section class="webinars-page">
    <div class="webinar-inner">
      <div class="upcoming-webinars">
        <h3>Upcoming Webinars</h3>
        <CardComponent
          v-for="(webinar, index) in webinars"
          :key="index"
          :webinar="webinar"
        />
      </div>
      <div class="past-webinars">
        <h3>Upcoming Webinars</h3>
        <PastWebinars />
      </div>
    </div>
  </section>
</template>
<script setup>
import CardComponent from "./partials/CardComponent.vue";
import PastWebinars from "./partials/PastWebinars.vue";
import { ref } from "vue";

const webinars = ref([
  {
    level: "For all levels",
    lang: "English",
    date: "1 June, 22:45 pm GMT+5:45 - 28 February, 22:45 pm GMT+5:45",
    title: "Live trading session",
    speakerImgUrl:
      "https://media.octastatics.com/ms-webinars/speaker/avatar/ambrose-ebuka/f7acc2433cf388f2d87b7f7305b34faf.png",
    speakerName: "Ambrose Ebuka",
    url: "",
  },
  {
    level: "For all levels",
    lang: "English",
    date: "1 June, 22:45 pm GMT+5:45 - 28 February, 22:45 pm GMT+5:45",
    title: "Live trading session",
    speakerImgUrl:
      "https://media.octastatics.com/ms-webinars/speaker/avatar/ambrose-ebuka/f7acc2433cf388f2d87b7f7305b34faf.png",
    speakerName: "Ambrose Ebuka",
    url: "",
  },
  {
    level: "For all levels",
    lang: "English",
    date: "1 June, 22:45 pm GMT+5:45 - 28 February, 22:45 pm GMT+5:45",
    title: "Live trading session",
    speakerImgUrl:
      "https://media.octastatics.com/ms-webinars/speaker/avatar/ambrose-ebuka/f7acc2433cf388f2d87b7f7305b34faf.png",
    speakerName: "Ambrose Ebuka",
    url: "",
  },
  {
    level: "For all levels",
    lang: "English",
    date: "1 June, 22:45 pm GMT+5:45 - 28 February, 22:45 pm GMT+5:45",
    title: "Live trading session",
    speakerImgUrl:
      "https://media.octastatics.com/ms-webinars/speaker/avatar/ambrose-ebuka/f7acc2433cf388f2d87b7f7305b34faf.png",
    speakerName: "Ambrose Ebuka",
    url: "",
  },
]);
</script>
<style>
.webinars-page {
  padding-top: 120px;
  background: #303030;
}
.webinar-inner {
  max-width: 1500px;
  margin: auto;
  /* width: 85%; */
}
.upcoming-webinars {
  margin-bottom: 4em;
}
.upcoming-webinars h3,
.past-webinars h3 {
  margin-bottom: 17px;
  font-size: 24px;
  line-height: 54px;
  font-family: "Nekst", sans-serif;
  color: #c9f73a;
  text-align: left;
  margin-left: 1em;
  letter-spacing: 1.1px;
  font-weight: 700;
}
@media (min-width: 769px) {
  .webinar-inner {
    width: 85%;
  }
  .upcoming-webinars h3,
  .past-webinars h3 {
    margin-bottom: 28px;
    font-size: 48px;
    line-height: 54px;
    color: #c9f73a;
    text-align: left;
    margin-left: 0.5em;
    letter-spacing: 1.1px;
    font-weight: 700;
  }
}
</style>
