<script setup>
import { ref, onMounted } from "vue";
import arrow from "../arrow.vue";

const currentTab = ref(0);
const showContent = ref(false);
const isMobile = ref(false);
const tabs = ref([
  {
    title: "How Forex works: brokers, liquidity, volatility",
    content: {
      mainHeading: "Forex basics: video course",
      headingContent:
        "This video course for beginners will guide you through the main aspects of Forex trading. You will learn how the Forex market works and how you can profit from it. Study the essential Forex terminology, learn how to take your first steps in trading, and start developing your trading strategy.",
      vedioUrl: "https://youtu.be/1eWO7KPEWZ8",
      body: 'In this lesson, you will learn to: <ul class="list-group list-group-flush"><li class="list-group-item">An item</li><li class="list-group-item">A second item</li><li class="list-group-item">A third item</li><li class="list-group-item">A fourth item</li><li class="list-group-item">And a fifth one</li></ul>',
    },
  },
  {
    title:
      "Forex concepts: currency pairs, pips and points, lots, profit calculator",
    content: {
      mainHeading: "Forex basics: video course",
      headingContent:
        "This video course for beginners will guide you through the main aspects of Forex trading. You will learn how the Forex market works and how you can profit from it. Study the essential Forex terminology, learn how to take your first steps in trading, and start developing your trading strategy.",
      vedioUrl: "https://youtu.be/1eWO7KPEWZ8",
      body: 'In this lesson, you will learn to: <ul class="list-group list-group-flush"><li class="list-group-item">An item</li><li class="list-group-item">A second item</li><li class="list-group-item">A third item</li><li class="list-group-item">A fourth item</li><li class="list-group-item">And a fifth one</li></ul>',
    },
  },
  {
    title:
      "How to earn more with leverage: margin, margin call and stop out, equity",
    content: {
      mainHeading: "Forex basics: video course",
      headingContent:
        "This video course for beginners will guide you through the main aspects of Forex trading. You will learn how the Forex market works and how you can profit from it. Study the essential Forex terminology, learn how to take your first steps in trading, and start developing your trading strategy.",
      vedioUrl: "https://youtu.be/1eWO7KPEWZ8",
      body: 'In this lesson, you will learn to: <ul class="list-group list-group-flush"><li class="list-group-item">An item</li><li class="list-group-item">A second item</li><li class="list-group-item">A third item</li><li class="list-group-item">A fourth item</li><li class="list-group-item">And a fifth one</li></ul>',
    },
  },
  {
    title: "How candlestick charts work, and what timeframe to choose",
    content: {
      mainHeading: "Forex basics: video course",
      headingContent:
        "This video course for beginners will guide you through the main aspects of Forex trading. You will learn how the Forex market works and how you can profit from it. Study the essential Forex terminology, learn how to take your first steps in trading, and start developing your trading strategy.",
      vedioUrl: "https://youtu.be/1eWO7KPEWZ8",
      body: 'In this lesson, you will learn to: <ul class="list-group list-group-flush"><li class="list-group-item">An item</li><li class="list-group-item">A second item</li><li class="list-group-item">A third item</li><li class="list-group-item">A fourth item</li><li class="list-group-item">And a fifth one</li></ul>',
    },
  },
  {
    title: "Trading costs and hidden charges: spread, swap, volume commission",
    content: {
      mainHeading: "Forex basics: video course",
      headingContent:
        "This video course for beginners will guide you through the main aspects of Forex trading. You will learn how the Forex market works and how you can profit from it. Study the essential Forex terminology, learn how to take your first steps in trading, and start developing your trading strategy.",
      vedioUrl: "https://youtu.be/1eWO7KPEWZ8",
      body: 'In this lesson, you will learn to: <ul class="list-group list-group-flush"><li class="list-group-item">An item</li><li class="list-group-item">A second item</li><li class="list-group-item">A third item</li><li class="list-group-item">A fourth item</li><li class="list-group-item">And a fifth one</li></ul>',
    },
  },
  {
    title:
      "How to place pending orders, Stop Loss, and Take Profit to save your time",
    content: {
      mainHeading: "Forex basics: video course",
      headingContent:
        "This video course for beginners will guide you through the main aspects of Forex trading. You will learn how the Forex market works and how you can profit from it. Study the essential Forex terminology, learn how to take your first steps in trading, and start developing your trading strategy.",
      vedioUrl: "https://youtu.be/1eWO7KPEWZ8",
      body: 'In this lesson, you will learn to: <ul class="list-group list-group-flush"><li class="list-group-item">An item</li><li class="list-group-item">A second item</li><li class="list-group-item">A third item</li><li class="list-group-item">A fourth item</li><li class="list-group-item">And a fifth one</li></ul>',
    },
  },
]);

const closeModal = () => {
  showContent.value = false;
};
function openModal(index) {
  showContent.value = true;
  currentTab.value = index;
}
const updateTab = (data) => {
  alert(data);
  if (data == "next") {
    currentTab.value = +1;
    alert(currentTab.value);
  } else if (data == "prev" && currentTab.value > 0) {
    currentTab.value = -1;
  }
};
const checkDeviceWidth = () => {
  if (window.screen.width > 768) {
    isMobile.value = false;
  } else {
    isMobile.value = true;
  }
};
onMounted(() => {
  this.checkDeviceWidth();
  window.addEventListener("resize", function (event) {
    this.checkDeviceWidth();
  });
});
</script>
<template>
  <div class="forex-basics text-start">
    <div class="theme-bg"></div>
    <div class="forex-material">

      <div></div>

      <b-card no-body>
        <b-tabs v-model="currentTab" small card vertical>
          <b-tab
            v-for="(tab, index) in tabs"
            :key="tab.title"
            @click="openModal(index)"
          >
            <template #title>
              <div class="text-start material-nav">
                <strong>Lesson {{ index + 1 }}.</strong>
                {{ tab.title }}
              </div>
            </template>
            <div class="desktop-tab-content" v-if="!isMobile">
              <div>
                <h2><strong>Forex basics: video course</strong></h2>
              </div>
              <div>
                <p>
                  This video course for beginners will guide you through the
                  main aspects of Forex trading. You will learn how the Forex
                  market works and how you can profit from it. Study the
                  essential Forex terminology, learn how to take your first
                  steps in trading, and start developing your trading strategy.
                </p>
              </div>
              <div>
                <h3>
                  <strong>Lesson {{ index + 1 }}</strong>
                </h3>
              </div>
              <div>
                <p>How Forex works: brokers, liquidity, volatility</p>
              </div>
              <div>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/TNhaISOUy6Q"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div>
                <div><p>In this lesson, you will learn:</p></div>
                <div>
                  <ul>
                    <li>what Forex is and how you can earn on it</li>
                    <li>what Forex is and how you can earn on it</li>
                    <li>what Forex is and how you can earn on it</li>
                    <li>what Forex is and how you can earn on it</li>
                  </ul>
                </div>
              </div>
            </div>
          </b-tab>
        </b-tabs>
      </b-card>
      <div class="d-flex justify-content-between mt-4 pt-4">
        <div @click="updateTab('prev')">
          <arrow /><a class="ms-2 previous-lesson">Previous lessson</a>
          <!-- <b-button @click="currentTab--">Previous</b-button> -->
        </div>
        <div @click="updateTab('next')">
          <a class="me-2 next-lesson">Next lessson</a>
          <arrow style="transform: rotate(180deg)" />
        </div>
        <!-- <b-button @click="currentTab++">Next</b-button> -->
      </div>
      <!-- Control buttons-->
      <div class="text-center">
        <b-button-group class="mt-2"> </b-button-group>

        <div class="text-muted">Current Tab: {{ currentTab }}</div>
      </div>
    </div>
  </div>
</template>
<style>
.me-3 {
  margin-right: 0px !important;
}
</style>
<style scoped>
.mobile-tab-content {
}
.previous-lesson,
.next-lesson {
  color: black;
  padding-bottom: 4px;
  border-bottom: 1px solid #c9f73a;
  text-decoration: none;
  font-family: Plus Jakarta Sans, system-ui, -apple-system, BlinkMacSystemFont,
    sans-serif;
  transition: all 0.3s;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
}
.previous-lesson:hover,
.next-lesson:hover {
  color: #c9f73a;
}
.material-nav {
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  transition: all 0.3s;
  position: relative;
  color: black;
  font-family: Plus Jakarta Sans, system-ui, -apple-system, BlinkMacSystemFont,
    sans-serif;
}
:deep(.tab-content > .active) {
  display: block;
  padding: 0px 50px 0px 80px;
}
.forex-basics {
  top: 140px;
}
.theme-bg {
  height: 150px;
  background-color: #c9f73a;
}

:deep(.tab-content) {
  padding-top: 3rem;
  width: 100%;
  position: absolute !important;
}

:deep(.card) {
  border-radius: 0px !important;
  border: none !important;
}
:deep(.card-header) {
  margin: 0px !important;
  padding: 0px !important;
  padding-top: 3rem !important;
  width: 420px !important;
}
:deep(.card-header-tabs .nav-link.active) {
  border: none;
  width: 100%;
}
:deep(.card-header-tabs .nav-link) {
  padding: 1.5rem;
}
:deep(.card-header-tabs .nav-link:focus) {
  border: none !important;
}
.mobile-tab-content {
  display: block;
}
.desktop-tab-content {
  display: none;
}

@media (min-width: 768px) {
  .mobile-tab-content {
    display: none;
  }
  .desktop-tab-content {
    display: block;
  }
  .forex-material {
    width: 75%;
    margin: auto;
    top: -50px;
  }
  :deep(.tab-content) {
    padding-top: 3rem;
    width: 75%;
    position: relative !important;
  }
}
</style>
