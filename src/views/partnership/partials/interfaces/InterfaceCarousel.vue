<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper";

import Dash from "./icons/Dash.vue";
</script>

<template>
  <section class="interfaces text-start d-block">
    <div class="device-block">
      <div class="feature-heading text-center mt-4 pt-4">
        <h2>See what your IB interfaces look like</h2>
      </div>
      <swiper
        :slidesPerView="1"
        :spaceBetween="30"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :autoplay="{
          delay: 2000,
          disableOnInteraction: false,
        }"
        :modules="[FreeMode, Pagination, Autoplay]"
        class="mySwiper"
        :centeredSlides="true"
        :breakpoints="{
          768: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          770: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }"
      >
        <swiper-slide>
          <div class="d-flex flex-wrap justify-content-center flex-row-reverse">
            <div class="slider-desc">
              <ul>
                <li><h5>Client Lists</h5></li>
                <li><Dash class="dash-caro" />Filter by CLient ID</li>
                <li><Dash class="dash-caro" />Total Trading Volume</li>
                <li><Dash class="dash-caro" />Filter By Registration Date</li>
              </ul>
            </div>
            <div class="slider-img-box">
              <img src="./img/slide-onepng.png" alt="" />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="d-flex flex-wrap justify-content-center flex-row-reverse">
            <div class="slider-desc">
              <ul>
                <li><h5>Transactions</h5></li>
                <li><Dash class="dash-caro" />Filter by Transaction Time</li>
                <li><Dash class="dash-caro" />Total Number of Transactions</li>
                <li>
                  <Dash class="dash-caro" />Showing all Rewards according to a
                  certain wallet ID
                </li>
              </ul>
            </div>
            <div class="slider-img-box">
              <img src="./img/slide-two.png" alt="" />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="d-flex flex-wrap justify-content-center flex-row-reverse">
            <div class="slider-desc">
              <ul>
                <li><h5>Acquisition</h5></li>
                <li><Dash class="dash-caro" />Click Conversation Rate</li>
                <li><Dash class="dash-caro" />Total Number of Clicks</li>
                <li><Dash class="dash-caro" />Showing All Registrations</li>
              </ul>
            </div>
            <div class="slider-img-box">
              <img src="./img/slide-three.png" alt="" />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="d-flex flex-wrap justify-content-center flex-row-reverse">
            <div class="slider-desc">
              <ul>
                <li><h5>Rewards</h5></li>
                <li><Dash class="dash-caro" />Rewards Volume</li>
                <li><Dash class="dash-caro" />Filter by execution date</li>
                <li>
                  <Dash class="dash-caro" />Showing rewards paid by certain
                  users
                </li>
              </ul>
            </div>
            <div class="slider-img-box">
              <img src="./img/slide-four.png" alt="" />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="d-flex flex-wrap justify-content-center flex-row-reverse">
            <div class="slider-desc">
              <ul>
                <li><h5>Reports</h5></li>
                <li><Dash class="dash-caro" />Adaptive tables</li>
                <li><Dash class="dash-caro" />Filter By Date</li>
                <li><Dash class="dash-caro" />Performance Indicators</li>
              </ul>
            </div>
            <div class="slider-img-box">
              <img src="./img/slide-five.png" alt="" />
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style>
.dash-caro {
  width: 22%;
}
.slider-desc {
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.slider-desc ul li {
  list-style: none;
  text-align: left;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  color: #727272;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: 0;
  margin-bottom: 12px;
}
.slider-desc ul h5 {
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  color: #383838;
  margin-top: 26px;
  margin-bottom: 20px;
  border-image: linear-gradient(to left, #c9f73a, rgba(0, 0, 0, 0)) 1 100%;
}
.slider-desc ul h5:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  background: linear-gradient(to right, #c9f73a, rgba(0, 0, 0, 0));
  top: -20px;
  left: 0;
}
.slider-img-box {
  background-color: #c9f73a;
  border-radius: 20px;
  width: 70%;
}
.slider-img-box img {
  top: 17px;
  left: 17px;
}
.interfaces {
  top: 210px;
  /* padding: 88px 24px; */
  /* background-color: #f2f2f2; */
}
.device-block {
  /* max-width: 1400px; */
  width: 100%;
  /* margin-right: auto; */
  /* margin-left: auto; */
  /* padding-right: 24px; */
}

@media (min-width: 768px) {
  .interfaces .device-block {
    height: 530px;
  }
  /* .device-block {
    padding-left: 24px;
  }
  .device-block {
    padding-left: 8.33333%;
  } */
}
@media (min-width: 1280px) {
  .interfaces {
    /* padding: 140px 12px; */
    /* padding-left: 10%; */
  }

  .device-block {
    /* margin-left: auto; */
    padding-left: 0px;
  }
}
</style>

<style>
.swiper-pagination-bullet {
  width: 50px;
  height: 5px;
  display: inline-block;
  border-radius: 30px;
}
.swiper-pagination-bullet-active {
  background: #c9f73a;
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  width: 810px;
  margin-right: 20px;
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media (max-width: 768px) {
  .swiper-slide {
    width: 100% !important;
    /* top: 80px; */
  }
  .slider-img-box {
    width: 80% !important;
  }
  .slider-desc {
    width: 70%;
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .slider-desc ul li {
    max-height: 10px !important;
  }
  .interfaces .device-block {
    height: 100vh;
  }
}
@media (max-width: 600px) {
  .interfaces .device-block {
    height: 80vh;
  }
}
</style>
