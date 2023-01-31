<template>
  <div class="webinar-card">
    <div class="d-flex flex-wrap mb-4">
      <b-badge pill class="webinar-tag me-2 mb-2">{{ webinar.level }}</b-badge>
      <b-badge pill class="webinar-tag me-2 mb-2">{{ webinar.lang }}</b-badge>
      <b-badge pill class="webinar-tag mb-2">{{ webinar.date }}</b-badge>
    </div>
    <div class="d-flex flex-wrap card-inner">
      <div>
        <div class="webinar-title">
          <h3>{{ webinar.title }}</h3>
        </div>
      </div>
      <div class="speaker-section">
        <b-avatar :src="webinar.speakerImgUrl" class="speaker-img"></b-avatar>
        <div class="intro">
          {{ webinar.speakerName }}
          <span>Speaker</span>
        </div>
      </div>
    </div>
    <div class="d-flex">
      <b-button pill class="webinar-more-btn mt-4">Learn More</b-button>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  webinar: { type: Object, required: false },
});
</script>
<style>
.webinar-card {
  background-color: black;
  color: #c9f73a;
  padding: 2em;
  border-radius: 20px;
  margin: 1em;
  /* width: 100%; */
}
.webinar-tag {
  background-color: black !important;
  border: 2px solid #c9f73a;
  color: #c9f73a;
  display: inline-block;
  vertical-align: middle;
  padding: 3px 14px;
  font-size: 12px;
  line-height: 1.5;
  font-family: "Plus Jakarta Sans", "Arial", sans-serif;
  word-wrap: break-word;
  white-space: initial;
  text-align: left;
}
.webinar-title h3 {
  margin: 0 0 24px;
  font-size: 24px;
  line-height: 28px;
  font-weight: 600;
  font-family: "Nekst", sans-serif;
  text-align: left;
}
.webinar-more-btn {
  background-color: #c9f73a;
  color: black;
  width: 100%;
  font-size: 14px;
  line-height: 32px;
  font-weight: 700;
  font-family: "Nekst", sans-serif;
}
.speaker-section {
  display: flex;
  width: 100%;
}
.speaker-section .intro {
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  font-family: "GothamPro", "Arial", sans-serif;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
}
.speaker-section .intro span {
  display: block;
  font-size: 12px;
  line-height: 14px;
  font-family: "Nekst", sans-serif;
  color: #c7c7c7;
}
.speaker-img {
  width: 76px;
  height: 76px;
}
@media (min-width: 769px) {
  .webinar-card {
    width: 100%;
  }
  .speaker-section .intro {
    /* font-size: 16px;
    line-height: 1.5;
    justify-content: center; */
    text-align: center;
    display: block;
    font-size: 24px;
    line-height: 36px;
    font-weight: 700;
    font-family: "Nekst", sans-serif;
  }
  .speaker-section {
    display: block;
    width: auto;
    margin-left: 2em;
    top: -15px;
  }
  .webinar-more-btn {
    width: 25%;
    min-width: 172px;
    justify-content: left;
    display: block;
    padding: 12px 24px;
    font-size: 14px;
    line-height: 24px;
    font-weight: 700;
    font-family: "Nekst", sans-serif;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-radius: 100px;
  }
  .speaker-img {
    width: 150px;
    height: 150px;
  }
  .card-inner {
    justify-content: space-between;
    height: 100px;
    width: 93%;
  }
  .webinar-tag {
    font-size: 14px;
    padding: 4px 26px;
  }
  .webinar-title h3 {
    font-size: 32px;
    line-height: 36px;
    font-weight: 500;
    font-family: "Nekst", sans-serif;
  }
}
</style>
