<script setup>
import { useEventStore } from "../../../../../stores";
import { ref, computed } from "vue";
const eventStore = useEventStore();

const props = defineProps({
  webinars: { type: Object, required: false },
});

const currentPage = ref(1);
const computedWebinars = computed(() => {
  let data = props.webinars;
  let finalData = [];
  data.forEach((item, index) => {
    let finalIndex = currentPage.value * 10;
    let startingIndex = finalIndex - 10;
    if (index < finalIndex && index >= startingIndex) {
      finalData.push(item);
    }
  });
  // return data.splice(currentPage.value * 10 - 10, currentPage.value * 10);
  return finalData;
});
// const getPaginationNumbers = computed(() => {
//   return props.webinars > 50 ? 5 : Math.ceil(props.webinars.length / 10);
// });
</script>
<template>
  <b-table-simple responsive class="webinar-table">
    <b-thead>
      <b-tr class="webinar-table-header">
        <b-th> Levels</b-th>
        <b-th>Webinars</b-th>
        <b-th>Language</b-th>
        <b-th></b-th>
      </b-tr>
    </b-thead>
    <b-tbody>
      <b-tr v-for="(webinar, index) in computedWebinars" :key="index">
        <b-th
          ><b-badge pill class="webinar-tag mb-2">{{
            webinar.level
          }}</b-badge></b-th
        >
        <b-td class="past-webinar-title"> {{ webinar.title }}</b-td>
        <b-td
          ><b-badge pill class="webinar-tag mb-2 past-tag">{{
            webinar.lang
          }}</b-badge></b-td
        >
        <b-td>
          <router-link
            :to="webinar.url"
            class="learn-more-btn"
            @click="eventStore.currentWebinar = webinar"
          >
            Learn More
          </router-link>
          <!-- <a href="#" class="learn-more-btn">
          </a> -->
        </b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>
  <b-pagination
    v-model="currentPage"
    pills
    :total-rows="webinars.length"
    align="end"
    per-page="10"
  ></b-pagination>
</template>

<style>
.page-item {
  margin: 0px 2px;
}
.page-link,
.disabled .page-link {
  color: #c9f73a !important;
  background-color: black;
  border: #c9f73a;
}
.page-link:hover,
.active .page-link {
  background-color: #c9f73a;
  color: black !important;
}
.webinar-table > .b-table {
  color: #c9f73a !important;
  line-height: 1.2;
  font-family: "Nekst", sans-serif;
}
.webinar-table-header {
  font-weight: 400;
  font-size: 14px;
  color: white;
  line-height: 1.2;
  font-family: "Nekst", sans-serif;
}
tr {
  border-color: #c9f73a !important;
}
.learn-more-btn {
  text-transform: uppercase;
  color: #c9f73a;
  font-size: 14px;
}
.past-webinar-title {
  color: white;
  font-size: 14px;
}
.past-tag {
  color: white;
  border-color: white;
  background: transparent;
}
@media (min-width: 769px) {
  .webinar-table-header {
    font-size: 24px;
  }
  .past-webinar-title {
    font-size: 24px;
  }
  .learn-more-btn {
    font-size: 16px;
  }
  .page-item {
    margin: 0px 5px;
  }
}
</style>
