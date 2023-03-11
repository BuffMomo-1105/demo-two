<template>
  <b-table-simple responsive sticky-header class="margin-custom-table">
    <b-thead>
      <b-tr>
        <b-th>Symbol</b-th>
        <b-th>Full Name</b-th>
        <b-th>Contract Size</b-th>
        <b-th>Min size</b-th>
        <b-th>Tick size</b-th>
        <b-th v-if="needCurrency"> Currency </b-th>
        <b-th>Margin, %</b-th>
        <b-th>Swap Long (points)</b-th>
        <b-th>Swap Short (points)</b-th>
        <b-th>Trading time (GMT+0)</b-th>
        <b-th v-if="title == 'Crypto CFD'">Hedged margin, %</b-th>
        <b-th v-if="needCurrency"> Exchange </b-th>
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
        <b-td v-if="needCurrency"> {{ item.currency }} </b-td>
        <b-td>{{ item.margin }}</b-td>
        <b-td>{{ item.swapLong }}</b-td>
        <b-td>{{ item.swapShort }}</b-td>
        <b-td>
          <div v-for="time in item.tradingTime">
            {{ time }}
          </div>
          <div
            v-if="
              ['Forex', 'Spot Metals', 'Indices', 'Spot Energies'].includes(
                title
              )
            "
            class="text-bold"
            style="font-size: 12px"
          >
            <div>
              <span>Sunday open time: {{ item.sundayOpenTime }}</span>
            </div>
            <div>
              <span>Friday Close time: {{ item.fridayOpenTime }}</span>
            </div>
          </div>
        </b-td>
        <b-td v-if="title == 'Crypto CFD'">
          {{ item.hedgedMargin }}
        </b-td>
        <b-td v-if="needCurrency"> {{ item.exchange }} </b-td>
        <b-td>{{ item.availiablity }}</b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>
  <div v-if="count * 10 < data.length">
    <button @click="count++" class="tbl-see-more">See More</button>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
const props = defineProps({
  data: {
    required: false,
  },
  title: {
    required: false,
  },
});
const count = ref(1);
const computedData = computed(() => {
  return props.data.slice(0, 10 * count.value);
});
const needCurrency = computed(() => {
  return ![
    "Forex",
    "Spot Metals",
    "Indices",
    "Spot Energies",
    "Crypto CFD",
  ].includes(props.title);
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
.margin-custom-table{
  height: 600px !important;
}
.margin-custom-table th{
  background-color: black;
  border-bottom: #c9f73a;
}
</style>
