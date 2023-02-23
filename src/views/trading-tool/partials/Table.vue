<template>
  <b-table-simple responsive>
    <b-thead>
      <b-tr>
        <b-th>Symbol</b-th>
        <b-th>Full Name</b-th>
        <b-th>Contract Size</b-th>
        <b-th>Min size</b-th>
        <b-th>Tick size</b-th>
        <b-th>Margin, %</b-th>
        <b-th>Swap Long (points)</b-th>
        <b-th>Swap Short (points)</b-th>
        <b-th>Trading time (GMT+0)</b-th>
        <b-th>Availability</b-th>
      </b-tr>
    </b-thead>
    <b-tbody>
      <b-tr v-for="item in computedData">
        <b-td>{{ item.symbol }}</b-td>
        <b-td>{{ item.fullName }}</b-td>
        <b-td>{{ item.contractSize }}</b-td>
        <b-td>{{ item.minSize }}</b-td>
        <b-td>{{ item.tickSize }}</b-td>
        <b-td>{{ item.margin }}</b-td>
        <b-td>{{ item.swapLong }}</b-td>
        <b-td>{{ item.swapShort }}</b-td>
        <b-td>{{ item.tradingTime }}</b-td>
        <b-td>{{ item.availiablity }}</b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>
  <div>
    <button @click="count++" class="tbl-see-more">See More</button>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
const props = defineProps({
  data: {
    required: false,
  },
});
const count = ref(1);
const computedData = computed(() => {
  return props.data.slice(0, 10 * count.value);
});
</script>
<style>
.table {
  color: white;
  border-color: #c9f73a;
}
.table th {
  font-size: 18px;
  font-weight: 400;
  font-family: "Nekst", sans-serif;
}
.table tr td {
  padding: 40px 0px !important;
}
.tbl-see-more {
  background-color: #202020 !important;
  border: none;
  margin-bottom: 50px;
  font-family: "Nekst", sans-serif;
  font-size: 32px;
  line-height: 58px;
  font-weight: 700;
  color: #c9f73a;
  cursor: pointer;
  width: 100%;
  padding: 1rem;
}
</style>
