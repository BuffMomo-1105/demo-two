<script setup>
import arrow from "../../arrow.vue";
import { useRoute } from "vue-router";
import { computed, ref, watch } from "vue";
import { useEventStore } from "../../../../../stores";

const props = defineProps({
  currentTab: { default: 0, required: false },
  currentContent: { type: Object, required: true },
  isEdit: { required: false, default: false },
});
const emits = defineEmits([
  "updateTab",
  "showMobileContent",
  "onTabUpdate",
  "update:currentTab",
]);
const route = useRoute();
const eventStore = useEventStore();

const isAdmin = computed(() => {
  return route.fullPath.includes("forex");
});
const showWarning = ref(false);

function deleteForex() {
  emits("update:currentTab", 0);
  eventStore.deleteForexBasic(props.currentTab);
}
const currentData = ref({
  title: "",
  vedioUrl: "",
  body: "",
  mainHeading: "",
});
function updateForex() {
  // eventStore.updateForex(props.currentTab, currentData.value);
  emits("onTabUpdate");
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
    <div class="position-absolute menu-icon">
      <!-- <i class="fas fa-trash-alt fa-2x"></i> -->
      <b-dropdown
        size="lg"
        variant="link"
        toggle-class="text-decoration-none"
        no-caret
      >
        <template #button-content>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
            <path
              d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zM120 96c0 30.9-25.1 56-56 56S8 126.9 8 96S33.1 40 64 40s56 25.1 56 56z"
            />
          </svg>
        </template>
        <b-dropdown-item href="#" @click="showWarning = true"
          >Delete</b-dropdown-item
        >
        <b-dropdown-item href="#">Edit</b-dropdown-item>
      </b-dropdown>
    </div>
    <div v-if="isEdit" class="my-4">
      <label for="main-heading" class="label">Main Heading:</label>
      <QuillEditor
        theme="snow"
        contentType="html"
        v-model:content="currentData.mainHeading"
        placeholder="Enter Anything..."
      />
    </div>
    <div v-else>
      <div v-html="currentContent.mainHeading"></div>
      <!-- <div>
        <h2><strong>Forex basics: video course</strong></h2>
      </div>
      <div>
        <p>
          This video course for beginners will guide you through the main
          aspects of Forex trading. You will learn how the Forex market works
          and how you can profit from it. Study the essential Forex terminology,
          learn how to take your first steps in trading, and start developing
          your trading strategy.
        </p>
      </div> -->
    </div>
    <div>
      <h3>
        <strong>Lesson {{ currentTab + 1 }} </strong>
      </h3>
    </div>
    <div class="d-flex">
      <p class="me-4 mt-4 w-100" v-if="isEdit">
        <label for="title" class="label">Title:</label>
        <b-form-textarea
          id="textarea-small"
          size="sm"
          v-model="currentData.title"
          placeholder="Enter Title"
        ></b-form-textarea>
      </p>
      <p class="me-4" v-else>{{ currentContent.title }}</p>
    </div>
    <div v-if="isEdit">
      <label for="url" class="label">Vedio URL:</label>
      <b-form-textarea
        id="textarea-small"
        size="sm"
        v-model="currentData.vedioUrl"
        placeholder="Enter Vedio Url"
      ></b-form-textarea>
    </div>
    <div v-else>
      <iframe
        width="560"
        class="vedio-lesson"
        height="315"
        :src="currentContent.vedioUrl"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
    <div>
      <div v-if="isEdit">
        <label for="body" class="label">Body Cotent:</label>
        <QuillEditor
          theme="snow"
          contentType="html"
          v-model:content="currentData.body"
          placeholder="Enter Anything..."
        />
      </div>
      <div v-else v-html="currentContent.body"></div>
    </div>
    <div v-if="isEdit" class="mt-4 d-flex justify-content-end">
      <button @click="updateForex" class="add-btn">Add</button>
      <button @click="cancelForexAction" class="cancel-btn">Cancel</button>
    </div>
    <div class="d-flex justify-content-between mt-4 pt-4" v-else>
      <div @click="emits('updateTab', 'prev')">
        <arrow /><a class="ms-2 previous-lesson">Previous lessson</a>
      </div>
      <div @click="emits('updateTab', 'next')">
        <a class="me-2 next-lesson">Next lessson</a>
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
@media (min-width: 768px) {
  .back-btn {
    display: none;
  }
}
</style>
