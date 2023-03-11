<template>
  <div class="forex-basics text-start mb-4">
    <div class="theme-bg caculator-page" id="forex">
      <h1>Trading Calculator</h1>
    </div>
    <div class="profit-calculator">
      <div class="pt-4">
        <h1>Calculate Margin</h1>
      </div>
      <hr />
      <b-row class="w-100 p-4">
        <b-col>
          <div class="mb-4">
            <b-form-select
              v-model="form.symbol"
              :options="options"
              class="mb-3"
              value-field="value"
              text-field="name"
              disabled-field="notEnabled"
            ></b-form-select>
            <label>Symbol</label>
          </div>
          <div class="mb-4">
            <b-form-select
              v-model="form.accountCurrency"
              :options="accountCurrencyOptions"
              class="mb-3"
              value-field="value"
              text-field="name"
              disabled-field="notEnabled"
            ></b-form-select>
            <label for="floatingInput">Account Currency</label>
          </div>
        </b-col>
        <b-col>
          <div class="mb-4 w-100">
            <div class="mb-4">
              <b-form-select
                v-model="form.leverage"
                :options="leverageOptions"
                class="mb-3"
                value-field="value"
                text-field="name"
                disabled-field="notEnabled"
              ></b-form-select>
              <label for="floatingInput">Leverage</label>
            </div>
          </div>
          <div class="mb-4 w-100">
            <b-input-group>
              <b-input-group-prepend>
                <b-button
                  class="bg-black text-white py-0"
                  size="lg"
                  @click="onUpdate('sub', 'vol', form.vol)"
                >
                  -
                </b-button>
              </b-input-group-prepend>

              <b-form-input
                id="id"
                size="md"
                v-model="form.vol"
                class="border-secondary text-center text-white"
              />

              <b-input-group-append>
                <b-button
                  class="bg-black text-white py-0"
                  size="lg"
                  @click="onUpdate('add', 'vol', form.vol)"
                >
                  +
                </b-button>
              </b-input-group-append>
            </b-input-group>
            <label>Close Price</label>
          </div>
        </b-col>
        <b-col>
          <div class="result-section">
            <h6 class="mb-4">Calculation results</h6>
            <div class="d-flex justify-content-between my-2">
              <h5><strong>Pip value</strong></h5>
              <h5 class="text-success">${{ result.pip }}</h5>
            </div>
            <div class="d-flex justify-content-between my-2">
              <h5 class="text-secondary">Required margin</h5>
              <h5 class="text-success">${{ result.requiredMargin }}</h5>
            </div>
            <hr />
            <div class="d-flex justify-content-between my-2">
              <h5 class="text-secondary">Trading Fees</h5>
              <h5 class="text-secondary">${{ result.tradingFees }}</h5>
            </div>
          </div></b-col
        >
      </b-row>
      <hr />
      <div class="calculator-footer">
        <b-button pill class="calculate-btn cursor-pointer">Calculate</b-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const options = ref([
  { value: "GBPUSD", name: "GBPUSD" },
  { value: "USDJPY", name: "USDJPY" },
  { value: "USDCHF", name: "USDCHF" },
  { value: "USDJPY", name: "USDJPY" },
  { value: "AUDUSD", name: "AUDUSD" },
  { value: "NZDUSD", name: "NZDUSD" },
  { value: "USDCAD", name: "USDCAD" },
  { value: "EURGBP", name: "EURGBP" },
  { value: "EURJPY", name: "EURJPY" },
]);
const accountCurrencyOptions = ref([
  { value: "USD", name: "USD" },
  { value: "EURO", name: "EURO" },
]);
const leverageOptions = ref([
  { value: "1:500", name: "1:500" },
  { value: "1:200", name: "1:200" },
  { value: "1:100", name: "1:100" },
  { value: "1:50", name: "1:50" },
  { value: "1:30", name: "1:30" },
  { value: "1:25", name: "1:25" },
  { value: "1:15", name: "1:15" },
  { value: "1:5", name: "1:5" },
  { value: "1:1", name: "1:1" },
]);
const form = ref({
  symbol: "GBPUSD",
  accountCurrency: "USD",
  vol: 1.0,
  leverage: "1:500",
});

const result = ref({
  pip: "0.00",
  requiredMargin: "0.00",
  tradingFees: "0.00",
});

const onUpdate = (action, name, val) => {
  if (Math.floor(val) <= 0 && action == "sub") {
    form.value[name] = 0;
  } else if (action == "add") {
    form.value[name] = Number(val) + 1;
  } else {
    form.value[name] = Number(val) - 1;
  }
};
</script>

<style>
.profit-calculator h1 {
  text-transform: uppercase;
  width: 96%;
  margin: auto;
  font-weight: 600;
  line-height: 1.2;
  font-family: "Nekst", sans-serif;
  font-size: 28px;
}
.profit-calculator label {
  position: absolute;
  top: -13px;
  left: 16px;
  padding: 0px;
  background: black;
  color: #bbd764;
  font-weight: 600;
  z-index: 99;
}
.profit-calculator .form-select {
  background: transparent;
  color: #c9f73a;
  height: 55px;
}
.profit-calculator .form-select option {
  background-color: black;
  color: #c9f73a;
}
.profit-calculator .form-select:focus {
  border-color: #c9f73a !important;
}
.profit-calculator .input-group .btn:hover {
  background-color: #c9f73a !important;
  color: black !important;
}
.h-55 {
  height: 55px;
}

.result-section {
  width: 85%;
  margin: auto;
}
.result-section h6 {
  font-family: "Nekst", sans-serif;
  font-size: 18px;
}
.profit-calculator .form-control,
.profit-calculator .form-select {
  font-size: 18px;
  font-family: "Nekst", sans-serif;
}
.calculate-btn {
  background-color: #c9f73a !important;
  color: #000 !important;
  border: none !important;
  height: 55px;
  width: 25%;
  font-size: 24px;
  font-family: "Nekst", sans-serif;
  font-weight: 600px;
  width: 21%;
  right: 5%;
  position: absolute;
}

@media (max-width: 768px) {
  .profit-calculator {
    padding-bottom: 50px;
  }
  .profit-calculator .col {
    flex: none !important;
  }
  .profit-calculator .form-control,
  .profit-calculator .form-select {
    font-size: 12px;
  }
  .profit-calculator h1 {
    width: 90%;
  }
  .calculate-btn {
    width: 100%;
    margin: auto;
    font-size: 18px;
    font-family: "Nekst", sans-serif;
    font-weight: 600px;
    position: relative;
    right: 0;
  }
  .calculator-footer {
    width: 90%;
    margin: auto;
  }
}
@media (min-width: 769px) {
  .profit-calculator {
    width: 80%;
    top: 15px;
    min-height: 550px;
    border-radius: 29px;
  }
  .caculator-page {
    height: 90px;
  }
}
</style>
