<template>
  <section class="webinar-detail-page" v-if="eventStore.currentWebinar">
    <div class="webinar-detail-inner">
      <div class="d-flex flex-wrap webinar-margin mb-4">
        <b-badge pill class="webinar-tag me-2 mb-2">{{
          eventStore.currentWebinar.title
        }}</b-badge>
        <b-badge pill class="webinar-tag me-2 mb-2">{{
          eventStore.currentWebinar.lang
        }}</b-badge>
        <b-badge pill class="webinar-tag mb-2">{{
          eventStore.currentWebinar.date
        }}</b-badge>
      </div>
      <div class="webinar-detail-title text-start webinar-margin">
        <h3>{{ eventStore.currentWebinar.title }}</h3>
      </div>
      <div class="webinar-body d-flex flex-wrap">
        <div class="webinar-image">
          <img
            :src="eventStore.currentWebinar.thumbnail"
            alt=""
            class="w-100"
          />
        </div>
        <div class="webinar-desc text-start">
          <h3>What you will learn:</h3>
          <p>During the session, the speaker will:</p>
          <div v-html="eventStore.currentWebinar.desc"></div>
          <div class="d-block mt-4">
            <b-button pill class="webinar-sub-btn mt-4"> Subscribe </b-button>
            <b-button pill class="webinar-sub-btn mt-4"> Login </b-button>
          </div>
        </div>
      </div>
      <!-- speaker detail -->
      <div class="speaker-card text-start">
        <div class="webinar-detail-title text-start webinar-margin">
          <h3>Speaker</h3>
        </div>
        <div class="speaker-detail-body">
          <div class="speaker-image d-flex">
            <b-avatar
              :src="eventStore.currentWebinar.speakerImgUrl"
              class="speaker-detail-img"
            ></b-avatar>
            <h3 class="ms-4">{{ eventStore.currentWebinar.speakerName }}</h3>
          </div>
          <div
            class="speaker-about"
            v-html="eventStore.currentWebinar.speakerBio"
          ></div>
        </div>
      </div>
      <!-- speaker detail -->
      <div class="webinar-banner-ad">
        <img
          :src="eventStore.currentWebinar.adBannerUrl"
          alt=""
          class="d-flex mt-4"
          style="height: 200px; width: 96%"
        />
      </div>
    </div>
  </section>
</template>
<script setup>
import { useEventStore } from "../../../../../stores";

const eventStore = useEventStore();
</script>
<style>
.webinar-margin {
  margin: 1em;
}
.webinar-detail-page {
  padding-top: 120px;
  background: #000;
  color: #fff;
  font-family: "Nekst", sans-serif;
}
.webinar-detail-inner {
  max-width: 1500px;
  margin: auto;
}
.webinar-image {
  width: 100%;
  padding: 1em;
}
.webinar-image img {
  border-radius: 16px;
}
.webinar-desc {
  width: 100%;
  padding: 1em;
}

.webinar-detail-page .webinar-tag {
  font-size: 16px !important;
  padding: 4px 26px;
  background-color: black !important;
  border: 2px solid #c9f73a;
  color: #c9f73a;
  display: inline-block;
  vertical-align: middle;
  font-size: 12px;
  line-height: 1.5;
  font-family: "Plus Jakarta Sans", "Arial", sans-serif;
  word-wrap: break-word;
  white-space: initial;
  text-align: left;
}
.webinar-detail-page .webinar-detail-title h3 {
  font-size: 36px;
  line-height: 54px;
  font-family: "Nekst", sans-serif;
  color: #c9f73a;
}
.webinar-desc h3 {
  font-size: 24px;
  line-height: 1.5;
  font-weight: 500;
  font-family: "Plus Jakarta Sans", "Arial", sans-serif;
}
.webinar-desc {
  margin-left: 1em;
}
.webinar-desc p,
.webinar-desc ul {
  font-size: 17px;
  line-height: 1.5;
  font-family: "Plus Jakarta Sans", "Arial", sans-serif;
  margin: 0;
}
.webinar-desc ul {
  padding: 0 6px;
  padding-top: 0;
  margin: 0;
}
.webinar-sub-btn {
  background-color: #c9f73a;
  color: black;
  width: 100%;
  font-size: 14px;
  line-height: 32px;
  font-weight: 700;
  font-family: "Nekst", sans-serif;
}
@media (min-width: 769px) {
  .webinar-image {
    width: 48%;
  }
  .webinar-desc {
    width: 48%;
  }
  .webinar-detail-page .webinar-detail-title h3 {
    font-size: 36px;
    line-height: 54px;
  }
  .webinar-sub-btn {
    width: 25%;
    min-width: 220px;
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
}
</style>
<style>
/* speaker-card */
.speaker-card {
  padding: 1em;
  background-color: #303030;
  border-radius: 20px;
  margin: 1em;
  max-width: 1400px;
}
.speaker-detail-body {
  font-family: "Plus Jakarta Sans", "Arial", sans-serif;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
}
.speaker-about,
.speaker-image {
  width: 100%;
  margin: 1em;
}
.speaker-image {
  align-items: center;
}
.speaker-detail-img {
  width: 86px;
  height: 86px;
}
.speaker-about {
  margin: 0;
  font-size: 14px;
}
@media (min-width: 769px) {
  .speaker-about,
  .speaker-image {
    width: 48%;
  }
  .speaker-detail-img {
    width: 154px;
    height: 154px;
    margin-left: 250px;
  }
  .speaker-image {
    top: -40px;
  }
  .speaker-about {
    margin: 0;
    font-size: 18px;
  }
}
</style>
