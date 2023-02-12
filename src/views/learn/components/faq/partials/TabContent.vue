<script setup>
import arrow from "../../arrow.vue";
import { useRoute } from "vue-router";
import { computed, ref, watch } from "vue";
import { useEventStore } from "../../../../../stores";

const props = defineProps({
  currentTab: { default: 0, required: false },
  currentContent: { required: true },
  isEdit: { required: false, default: false },
});
const emits = defineEmits([
  "updateTab",
  "showMobileContent",
  "update:isEdit",
  "update:currentTab",
]);
const route = useRoute();
const eventStore = useEventStore();

const isAdmin = computed(() => {
  return route.fullPath.includes("admin");
});
const showWarning = ref(false);

function deleteForex() {
  emits("update:currentTab", 0);
  eventStore.deleteForexBasic(props.currentTab);
}
const currentData = ref(null);
function updateForex() {
  eventStore.updateForex(props.currentTab, currentData.value);
  emits("update:isEdit", false);
}
watch(
  () => props.isEdit,
  (val) => {
    if (val) {
      currentData.value = props.currentContent;
    }
  }
);
</script>
<template>
  <div class="tab-content">
    <div @click="emits('showMobileContent', 0)" class="back-btn">
      <arrow /><a class="ms-2 previous-lesson">Back</a>
    </div>
    <b-accordion v-if="currentContent">
      <b-accordion-item v-for="item in currentContent">
        <template #title>
          {{ item.title }}
        </template>
        <div v-html="item.body" style="font-size: 18px !important"></div>
        <div>
          <iframe
            width="560"
            class="vedio-lesson"
            height="315"
            :src="item.vedioUrl"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </b-accordion-item>
    </b-accordion>
    <div v-else>No data Here</div>

    <div class="d-flex justify-content-between mt-4 pt-4">
      <div @click="emits('updateTab', 'prev')">
        <arrow /><a class="ms-2 previous-lesson">Previous</a>
      </div>
      <div @click="emits('updateTab', 'next')">
        <a class="me-2 next-lesson">Next</a>
        <arrow style="transform: rotate(180deg)" />
      </div>
    </div>
  </div>
  <b-modal
    v-model="showWarning"
    centered
    cancel-title="No"
    ok-title="Yes"
    title="Warning!!!"
    size="sm"
    button-size="sm"
    modal-class="delete-modal"
    @ok="deleteForex"
  >
    Do you want delete this data?
  </b-modal>
</template>
<style>
.accordion {
  min-height: 90%;
}
.accordion-button:not(.collapsed),
.accordion-button {
  background-color: #000;
  color: #fff;
  font-weight: 600;
}
.accordion-button:not(.collapsed) {
  color: #c3ff54;
}
.accordion-button::after {
  display: none;
}
.accordion-button::before {
  width: 0;
  height: 0;
  content: "";
  border: 6px solid #0000;
  border-left: 9px solid #9299a2;
  border-right-width: 0;
  margin-right: 10px;
}

.accordion-button:not(.collapsed)::before {
  transform-origin: 50%;
  border-color: #0000 #0000 #0000 #c9f73a;
  transform: rotate(90deg);
}

.forex-sub {
  border: 5px solid #c3ff54;
  color: #c9f37a;
  background: black;
  padding: 0.5em;
  font-family: Plus Jakarta Sans, system-ui, -apple-system, BlinkMacSystemFont,
    sans-serif;
}
.lesson-title {
  margin-top: 1em;
  margin-bottom: 1em;
  border-left: 20px solid #c9f35a;
  padding-left: 10px;
}
.title-content {
  font-size: 22px;
  font-weight: bold;
  text-align: left;
}
.label {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 1em;
}
.ql-container.ql-snow {
  min-height: 100px;
}
.add-btn {
  border: none;
  background-color: #c9f73a;
  border-radius: 15px;
  color: #000;
  width: 25%;
  font-size: 16px;
}
.cancel-btn {
  border: none;
  background-color: #f2f2f2;
  border-radius: 15px;
  color: #000;
  width: 25%;
  font-size: 16px;
}
.back-btn {
  margin: 0px 0px 20px 0px;
  color: #000;
}
.back-btn a {
  color: #000;
  font-size: 16px;
}
.back-btn a:hover {
  color: #c9f73a;
}
.menu-icon {
  top: 10px;
  right: 30px;
  width: 7px;
  cursor: pointer;
}
.menu-icon:hover {
  color: #c9f73a;
}

.delete-modal {
  z-index: 99999 !important;
  text-align: center !important;
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
  color: black;
  font-family: Plus Jakarta Sans, system-ui, -apple-system, BlinkMacSystemFont,
    sans-serif;
}
.menu-icon .btn .btn-content {
  width: 7px;
}
@media (min-width: 769px) {
  .back-btn {
    display: none;
  }
}
.offcanvas .tab-content {
  padding: 0;
  margin: 0;
  padding-left: 5%;
  padding-right: 5%;
}
</style>
