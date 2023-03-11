<script setup>
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
});
</script>
<template>
  <div>
    <section class="about-page">
      <h1 style="max-width: 1400px">About <br /></h1>
      <img src="../../assets/img/logo.svg" alt="" />
    </section>
    <div class="about-section text-start" style="max-height: 1080px">
      <div style="max-width: 1500px">
        <div data-aos="fade-up" class="about-card-one">
          <div
            class="about-card-header d-flex position-absolute end-0 top-0 mt-2 me-2"
          >
            <div class="about-card-circle" v-for="i in 3"></div>
          </div>
          <div class="about-card-body">
            <h3 class="about-card-one-content">Welcome to B2pip!</h3>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="200" class="about-card-two">
          <div
            class="about-card-header d-flex position-absolute end-0 top-0 mt-2 me-2"
          >
            <div class="about-card-circle" v-for="i in 3"></div>
          </div>
          <div class="about-card-body">
            <h3 class="about-card-two-content">
              We are a dynamic and innovative forex broker that empowers traders
              to take control of their financial future. Our mission is to
              provide users with the tools and resources they need to make the
              most informed trading decisions possible. At B2pip, we understand
              that traders are looking for opportunities to make their money
              work for them. That is why we offer a variety of trading
              instruments such as major currency pairs, spot energy, and metals.
              Our clients also have access to Ctrader, a well-known trading and
              charting platform.
            </h3>
          </div>
        </div>
      </div>
    </div>
    <section class="about-section-three">
      <div class="row d-flex flex-wrap" style="max-width: 1500px">
        <div class="col left-item text-start">
          <!-- <div class="heading">
            <h1>Equity to Equity Copying</h1>
          </div> -->
          <div class="desc">
            <div class="arrow-icon"></div>
            <div class="d-text mb-4">
              In addition to our trading services, B2pip also provides copy
              trading for those interested in diversifying their portfolios. We
              are proud to accept all major crypto currencies, so you can get
              started in no time!
            </div>
          </div>
        </div>
        <div class="col right-item">
          <div class="picture">
            <img src="../../assets/img/equity-copy.png" alt="Equity Copy" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.about-section {
  /* background-color: black; */
  padding: 4rem 0 0 0;
  justify-content: center;
  display: flex;
}
.about-card-one {
  width: 540px;
  height: 320px;
  background-color: white;
  padding: 2rem;
  margin-left: 18%;
  border: 1px solid black;
}
.about-card-two {
  width: 50%;
  height: 480px;
  background-color: white;
  padding: 2rem;
  margin-left: 44%;
  position: relative;
  top: -125px;
  border: 1px solid black;
}
.about-card-body {
  position: relative !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  padding: 1rem;
}
.about-card-one-content {
  font-family: "Nekst", sans-serif;
  font-weight: 600;
  font-size: 37px;
}
.about-card-two-content {
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 2rem;
}
.about-card-circle {
  padding: 0.7rem;
  margin-right: 5px;
  background-color: #c9f73a;
  border-radius: 50%;
}
@media (max-width: 800px) {
  .about-card-one-content {
    font-size: 37px;
  }
  .about-card-one {
    width: 90vw !important;
    height: 320px;
    padding: 2rem;
    margin: auto;
  }
  .about-card-two {
    width: 90vw;
    height: 480px;
    padding: 2rem;
    margin: auto;
    margin-top: 2rem;
    top: 0;
  }
  .about-card-two-content {
    line-height: normal;
  }
  .about-card-body {
    position: relative !important;
    top: 55% !important;
    transform: translateY(-50%) !important;
    padding: 0;
  }
}
@media (min-width: 800px) and (max-width: 1200px) {
  .about-card-one {
    width: 36%;
    height: 320px;
    padding: 2rem;
  }
  .about-card-two {
    top: -80px;
  }
  .about-card-one-content {
    font-size: 35px;
  }
  .about-card-two-content {
    line-height: normal;
  }
  .section-five-text {
    font: 14px/20px "Inter", sans-serif;
    font-weight: 600;
    letter-spacing: 4px;
    text-transform: uppercase;
  }
}
.about-page {
  display: block;
  top: 100px;
  background: black;
  position: relative;
  overflow: hidden;
  height: auto;
  padding: 64px 0 80px;
  text-align: left;
}
.about-page h1 {
  position: relative;
  width: 100%;
  padding-right: 24px;
  padding-left: 24px;
  flex: 0 0 100%;
  max-width: 100%;
  font: 40px "Nekst", sans-serif;
  font-weight: 700;
  margin-bottom: 0;
  position: relative;
  z-index: 2;
  color: #c9f73a;
}

@media (max-width: 770px) {
  .about-page img {
    top: -80px;
    width: 75%;
    margin: auto;
    display: flex;
  }
}
@media (770px < width < 1280px) {
  /* Section 1 & 2 */
  .about-page {
    display: flex;
    height: 500px;
    margin: 0 32px;
  }
  .about-page h1 {
    position: absolute;
    top: 20%;
    transform: translateY(-50%);
    font: 56px/62px "Nekst", sans-serif;
    padding-right: 64px;
    padding-left: 64px;
    font-weight: 700;
  }
}
@media (min-width: 1280px) {
  /* Section 1 & 2 */
  .about-page {
    display: flex;
    height: 600px;
    margin: 0 64px;
  }
  .about-page h1 {
    position: absolute;
    top: 20%;
    transform: translateY(-50%);
    font: 96px/104px "Nekst", sans-serif;
    padding-right: 104px;
    padding-left: 104px;
    font-weight: 700;
  }
}
</style>
<style>
.copy-image {
  width: 120px;
  position: absolute;
  right: 5%;
}
@media (min-width: 770px) {
  .copy-image {
    width: 130px;
    margin-right: 5%;
    position: absolute;
    right: 0;
    top: 52px;
    z-index: 99;
  }
}
@media (min-width: 1400px) {
  .copy-image {
    width: 220px;
    margin-right: 5%;
    position: absolute;
    right: 0;
    top: 52px;
    z-index: 99;
  }
}
body {
  color: #000;
}
/* Section 1 & 2 */
.copy-page {
  top: 100px;
  background: #c9f73a;
  position: relative;
  overflow: hidden;
  height: auto;
  padding: 64px 0 80px;
  text-align: left;
}
.copy-page h1 {
  position: relative;
  width: 100%;
  padding-right: 24px;
  padding-left: 24px;
  flex: 0 0 100%;
  max-width: 100%;
  font: 40px "Nekst", sans-serif;
  font-weight: 700;
  margin-bottom: 0;
  position: relative;
  z-index: 2;
}
.sub-section {
  width: 100%;
  bottom: -74px;
  margin-bottom: 90px;
}
.sub-title {
  flex: 0 0 91.66667%;
  max-width: 91.66667%;
  margin-left: 0;
  position: relative;
  width: 100%;
  padding-right: 24px;
  padding-left: 24px;
  font: 24px/30px "Inter", sans-serif;
  font-weight: 600 !important;
  text-align: left;
}
/* Section 1 & 2 */
.about-section-three {
  padding: 88px 24px;
}
.about-section-three {
  background-color: #c9f73a;
}
.about-section-three .col {
  min-width: 100%;
  padding: 0 24px;
}
.about-section-three .col .picture img {
  width: 100%;
}
.about-section-three .heading h1 {
  font: 40px/44px "Nekst", sans-serif;
  font-weight: 700;
  margin-bottom: 40px;
}
/* Section 3 */
.arrow-icon {
  margin-bottom: 16px;
  width: 45px;
  height: 21px;
  background-image: url("data:image/svg+xml,%3Csvg width='46' height='22' viewBox='0 0 46 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M34.7071 0L44.7071 10L45.4142 10.7071L44.7071 11.4142L34.7071 21.4142L33.2929 20L41.5858 11.7071H0V9.70711H41.5858L33.2929 1.41421L34.7071 0Z' fill='black'/%3E%3C/svg%3E%0A");
}
.d-text {
  font: 20px/30px "Inter", sans-serif;
  font-weight: 400;
}

/* Section 3 */
@media (770px < width < 1280px) {
  /* Section 1 & 2 */
  .copy-page {
    height: 500px;
    margin: 0 32px;
  }
  .sub-section {
    width: 100%;
    margin-bottom: 80px;
  }
  .sub-title {
    float: right;
    width: 40%;
    margin-right: 42px;
    font: 22px/24px "Inter", sans-serif;
  }
  .copy-page h1 {
    position: absolute;
    top: 40%;
    transform: translateY(-50%);
    font: 56px/62px "Nekst", sans-serif;
    padding-right: 64px;
    padding-left: 64px;
    font-weight: 700;
  }
  /* Section 1 & 2 */

  /* Section 3- Advanced about-section-three*/

  .about-section-three .col {
    min-width: 40%;
    width: 49%;
    max-width: 49%;
  }
  .about-section-three .left-item {
    padding: 0;
    margin-left: 70px;
  }
  .about-section-three .heading h1 {
    font: 48px/52px "Nekst", sans-serif;
    font-weight: 700;
    margin-bottom: 40px;
  }
  .about-section-three .desc .d-text,
  .about-section-three .desc .d-text {
    font: 20px/30px "Inter", sans-serif;
    font-weight: 400;
  }

  /* Section 3- Advanced about-section-three*/
}
@media (min-width: 1280px) {
  /* Section 1 & 2 */
  .copy-page {
    height: 600px;
    margin: 0 64px;
  }
  .sub-section {
    width: 100%;
    margin-bottom: 140px;
  }
  .sub-title {
    float: right;
    width: 29%;
    margin-right: 17%;
    font: 24px/36px "Inter", sans-serif;
    font-weight: 600;
  }
  .copy-page h1 {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font: 96px/104px "Nekst", sans-serif;
    padding-right: 104px;
    padding-left: 104px;
    font-weight: 700;
  }
  /* Section 1 & 2 */

  /* Section 3- Advanced about-section-three*/
  .about-section-three {
    padding: 140px 12px;
    padding-left: 10%;
  }
  .about-section-three .heading h1 {
    margin-left: 8.33333%;
    font: 56px/62px "Nekst", sans-serif;
    font-weight: 700;
    margin-bottom: 56px;
  }
  .about-section-three .desc .d-text {
    margin-left: 1.5rem;
    max-width: 77.44444%;
    font: 24px/32px "Inter", sans-serif;
    font-weight: 400;
  }
  .about-section-three .left-item {
    flex: 0 0 60%;
    max-width: 60%;
    min-width: 60%;
  }
  .about-section-three .right-item {
    flex: 0 0 39%;
    max-width: 39%;
    min-width: 39%;
  }
  .about-section-three .desc {
    display: flex;
    margin-left: 16.66667%;
  }
  .arrow-icon {
    min-width: 46px;
  }

  /* Section 3- Advanced about-section-three*/
}
</style>
