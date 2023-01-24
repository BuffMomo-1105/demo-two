<script setup>
import { ref, onMounted, computed } from "vue";
import { useEventStore } from "../../../../stores/index";
import TabContent from "./partials/TabContent.vue";
import { useRoute } from "vue-router";

const currentTab = ref(0);
const showContent = ref(false);
const isMobile = ref(false);
const isEdit = ref(false);
const eventStore = useEventStore();

const tabs = computed(() => {
  return eventStore.forexGetter;
});
const currentContent = computed(() => {
  return tabs.value[currentTab.value];
});
function updateTab(data) {
  if (data == "next" && currentTab.value < tabs.value.length - 1) {
    currentTab.value++;
  } else if (data == "prev" && currentTab.value > 0) {
    currentTab.value--;
  } else {
    return;
  }
}
const checkDeviceWidth = () => {
  if (window.screen.width > 768) {
    isMobile.value = false;
  } else {
    isMobile.value = true;
  }
};
onMounted(() => {
  // this.checkDeviceWidth();
  // window.addEventListener("resize", function (event) {
  //   this.checkDeviceWidth();
  // });
});
const showD = ref(false);
function showMobileContent(index) {
  isEdit.value = false;
  showD.value = !showD.value;
  currentTab.value = index;
}

const route = useRoute();

const isAdmin = computed(() => {
  return route.fullPath.includes("admin");
});

function addForex() {
  eventStore.addNewForex();
  currentTab.value =
    tabs.value && tabs.value.length > 0 ? tabs.value.length - 1 : 0;
  isEdit.value = true;
  showD.value = true;
}
</script>
<template>
  <div class="forex-basics text-start">
    <div class="theme-bg">
      <h1>Forex Basic: Tutorials</h1>
    </div>
    <div class="forex-material d-flex">
      <div class="forex-navs">
        <div class="d-flex mt-2 mb-2" v-if="isAdmin">
          <b-button
            pill
            variant="outline-success w-75 m-auto add-btn"
            @click="addForex"
            >Add</b-button
          >
        </div>
        <ul class="list-unstyled list-group">
          <li
            v-for="(tab, index) in tabs"
            :key="tab.title"
            class="list-group-item material-nav"
            :class="{ 'active-tab': currentTab == index }"
            @click="showMobileContent(index)"
          >
            <span class="theme-text">
              <i class="fas fa-play-circle"></i>
              <strong>Lesson {{ index + 1 }}.</strong>
            </span>
            {{ tab.title }}
          </li>
        </ul>
      </div>
      <div class="forex-contents">
        <TabContent
          v-model:current-content="currentContent"
          v-model:current-tab="currentTab"
          v-model:is-edit="isEdit"
          @update-tab="updateTab"
          @on-tab-update="isEdit = false"
        />
      </div>
    </div>
    <b-offcanvas v-model="showD" no-header-close no-header class="desktop-hide">
      <TabContent
        v-model:current-content="currentContent"
        v-model:current-tab="currentTab"
        v-model:is-edit="isEdit"
        @update-tab="updateTab"
        @showMobileContent="showMobileContent"
        @on-tab-update="isEdit = false"
      />
    </b-offcanvas>
  </div> -->
</template>

<style>
.theme-bg h1 {
  width: 80%;
  top: 25px;
  text-transform: uppercase;
  color: #000;
  margin: 0 auto 15px;
  font-weight: 600;
  line-height: 1.2;
  font-family: "Nekst", sans-serif;
  font-size: 32px;
}
.add-btn:hover {
  background-color: #c9f73a !important;
  border: none;
  color: #000;
}
.forex-basics {
  top: 140px;
  margin-bottom: 140px;
}
.theme-bg {
  height: 150px;
  background-color: #c9f73a;
}
.forex-material {
  width: 100%;
  margin: auto;
  top: -50px;
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px 0px, rgb(0 0 0 / 6%) 0px 1px 2px 0px;
}
.forex-navs {
  width: 100%;
}
.forex-contents {
  display: none;
}
.material-nav {
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
  transition: all 0.3s;
  position: relative;
  color: black;
  font-family: Plus Jakarta Sans, system-ui, -apple-system, BlinkMacSystemFont,
    sans-serif;
  padding-top: 3rem !important;
}
@media (min-width: 769px) {
  .forex-material {
    width: 80%;
    top: -67px;
  }
  .forex-contents {
    display: block;
    width: 75%;
  }
  .forex-navs {
    width: 40%;
  }
  .material-nav {
    max-width: 420px !important;
    font-size: 20px;
    background-color: #f6f7f8;
    border: none;
  }
  .desktop-hide,
  .offcanvas-backdrop.show {
    display: none;
  }
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
.active-tab {
  background-color: #fff !important;
}

.tab-content {
  /* position: absolute; */
  position: relative;
  top: 0;
  background: white;
  padding: 60px 10%;
}
.vedio-lesson {
  max-width: 98%;
}
</style>

<style scoped>
.offcanvas {
  z-index: 9999;
  top: 100px;
}
.offcanvas.offcanvas-start {
  width: 100% !important;
}
</style>
