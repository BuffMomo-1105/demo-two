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
  return eventStore.faqGetter;
});
const currentContent = computed(() => {
  return tabs.value[currentTab.value].sections;
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
    <div class="theme-bg" id="forex">
      <h1>FAQs</h1>
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
            <span class="lesson-nav">
              <strong>{{ index + 1 }}.</strong>
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
    <b-offcanvas
      v-model="showD"
      no-header-close
      no-header
      class="desktop-hide"
      no-fade="false"
    >
      <TabContent
        v-model:current-content="currentContent"
        v-model:current-tab="currentTab"
        v-model:is-edit="isEdit"
        @update-tab="updateTab"
        @showMobileContent="showMobileContent"
        @on-tab-update="isEdit = false"
      />
    </b-offcanvas>
  </div>
</template>

<style>
.lesson-nav {
  background-color: #000;
  color: #fff;
  background: transparent;
}
.add-btn:hover {
  background-color: #c9f73a !important;
  border: none;
  color: #000;
}
.forex-navs {
  width: 100%;
  background-color: #000;
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
  color: #c9f73a;
  font-family: Plus Jakarta Sans, system-ui, -apple-system, BlinkMacSystemFont,
    sans-serif;
  padding-top: 3rem !important;
  background-color: #000;
}
@media (min-width: 769px) {
  .tab-content {
    font-size: 24px;
    min-height: 100%;
  }
  .forex-contents {
    display: block;
    width: 75%;
  }
  .forex-navs {
    width: 40%;
  }
  .material-nav {
    /* max-width: 420px !important; */
    font-size: 20px;
    background-color: #000;
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
  background-color: rgb(34 34 34) !important;
}

.tab-content {
  /* position: absolute; */
  position: relative;
  top: 0;
  background: white;
  padding: 60px 10%;
  padding-left: 50px;
  padding-top: 30px;
  font-size: 16px;
  padding-right: 2%;
  font-family: Plus Jakarta Sans, system-ui, -apple-system, BlinkMacSystemFont,
    sans-serif;
}
.vedio-lesson {
  max-width: 98%;
  min-width: 98%;
  width: 98%;
  height: 450px;
}
</style>

<style scoped>
.desktop-hide {
  z-index: 999;
  top: 100px;
  position: absolute;
  padding-top: 15px;
}
:deep(.offcanvas-body) {
  margin: 0;
  padding: 0;
}
.offcanvas.offcanvas-start {
  width: 100% !important;
}
:deep(.offcanvas-backdrop.show) {
  opacity: 0 !important;
  display: none;
}
</style>
