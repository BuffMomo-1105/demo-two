<template>
  <div class="forex-basics text-start mb-4">
    <div class="theme-bg caculator-page" id="forex">
      <h1>Profit Calculator</h1>
    </div>
    <div class="profit-calculator">
      <div class="pt-4">
        <h1>Calculate Profit</h1>
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
          <div class="d-flex w-100">
            <div class="mb-4 me-4 w-50">
              <b-input-group>
                <b-input-group-prepend>
                  <b-button
                    class="bg-black text-white py-0"
                    size="lg"
                    @click="onUpdate('sub', 'period', form.period)"
                  >
                    -
                  </b-button>
                </b-input-group-prepend>

                <b-form-input
                  id="id"
                  size="md"
                  v-model="form.period"
                  class="border-secondary text-center text-white"
                />

                <b-input-group-append>
                  <b-button
                    class="bg-black text-white py-0"
                    size="lg"
                    @click="onUpdate('add', 'period', form.period)"
                  >
                    +
                  </b-button>
                </b-input-group-append>
              </b-input-group>
              <label>Period in days</label>
            </div>
            <div class="mb-4 w-50">
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
              <label>Volume, lots</label>
            </div>
          </div>
        </b-col>
        <b-col>
          <div class="mb-4 w-100">
            <b-input-group>
              <b-input-group-prepend>
                <b-button
                  class="bg-black text-white py-0"
                  size="lg"
                  @click="onUpdate('sub', 'openPrice', form.openPrice)"
                >
                  -
                </b-button>
              </b-input-group-prepend>

              <b-form-input
                id="id"
                size="md"
                v-model="form.openPrice"
                class="border-secondary text-center text-white"
              />

              <b-input-group-append>
                <b-button
                  class="bg-black text-white py-0"
                  size="lg"
                  @click="onUpdate('add', 'openPrice', form.openPrice)"
                >
                  +
                </b-button>
              </b-input-group-append>
            </b-input-group>
            <label>Open Price</label>
          </div>
          <div class="mb-4 w-100">
            <b-input-group>
              <b-input-group-prepend>
                <b-button
                  class="bg-black text-white py-0"
                  size="lg"
                  @click="onUpdate('sub', 'closePrice', form.closePrice)"
                >
                  -
                </b-button>
              </b-input-group-prepend>

              <b-form-input
                id="id"
                size="md"
                v-model="form.closePrice"
                class="border-secondary text-center text-white"
              />

              <b-input-group-append>
                <b-button
                  class="bg-black text-white py-0"
                  size="lg"
                  @click="onUpdate('add', 'closePrice', form.closePrice)"
                >
                  +
                </b-button>
              </b-input-group-append>
            </b-input-group>
            <label>Close Price</label>
          </div>
          <div class="mb-4 w-100">
            <b-button-group class="mx-1 w-100 h-55">
              <b-button
                size="lg"
                variant="outline-danger"
                :class="{ active: form.action == 'sell' }"
                @click="form.action = 'sell'"
                >Sell</b-button
              >
              <b-button
                size="lg"
                variant="outline-success"
                :class="{ active: form.action == 'buy' }"
                @click="form.action = 'buy'"
                >Buy</b-button
              >
            </b-button-group>
          </div>
        </b-col>
        <b-col>
          <div class="result-section">
            <h6 class="mb-4">Calculation results</h6>
            <div class="d-flex justify-content-between my-2">
              <h5><strong>Profit</strong></h5>
              <h5 class="text-success">${{ result.profit }}</h5>
            </div>
            <div class="d-flex justify-content-between my-2">
              <h5 class="text-secondary">Gross Profit</h5>
              <h5 class="text-success">${{ result.grossProfit }}</h5>
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
const form = ref({
  symbol: "GBPUSD",
  openPrice: 1.0,
  accountCurrency: "USD",
  closePrice: 1.0,
  period: 10.11,
  vol: 1.0,
  action: "buy",
});

const result = ref({
  profit: "0.00",
  grossProfit: "0.00",
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
