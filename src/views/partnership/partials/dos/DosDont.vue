<template>
  <section class="dos text-start d-block">
    <div class="dos-block">
      <div class="dos-heading d-flex flex-wrap justify-content-center p-1">
        <h2>Fraud free Promotional Partners</h2>
      </div>
      <div class="dos-item row m-2">
        <div
          class="col h-100 w-100 doit"
          style="color: #11c48d; background-color: #e4f7f3"
        >
          <p class="list-heading p-4"><TickIcon class="w-25" /> DO'S</p>
        </div>
        <div
          class="col h-100 w-100 donts"
          style="color: #f5804e; background-color: #fcf1eb"
        >
          <p class="list-heading p-4"><CrossIcon class="w-25" />DON'TS</p>
        </div>
      </div>
      <ListComponents>
        <template #do> Earn money... </template>
        <template #dont> Win money, sure-shot profit </template>
      </ListComponents>
      <ListComponents>
        <template #do>
          Learn and Trade, use our DEMO account for trial
        </template>
        <template #dont>
          "Make Money Fast and Easy - No Experience Needed!"
        </template>
      </ListComponents>
      <ListComponents>
        <template #do>
          Trading is business and there is no short cut for success
        </template>
        <template #dont>
          "How I Bought My Dream Car and Home in Just One Month"</template
        >
      </ListComponents>
      <ListComponents>
        <template #do> Leverage does not suit all type of traders </template>
        <template #dont>
          "High Leverage Trading Without Loans: A Financial Miracle!"
        </template>
      </ListComponents>
      <ListComponents>
        <template #do>
          "Go from Amateur to Professional Trader!" "Be a Trading Pro: Our
          Expert Help is Here!"
        </template>
        <template #dont> "Bored of Your Job? Trade Now for Success!" </template>
      </ListComponents>
      <ListComponents>
        <template #do>
          Slow and steady wins the race, we can help you with our low commission
          plan</template
        >
        <template #dont>
          "Make Money Effortlessly - Invest $100 to Get $150"
        </template>
      </ListComponents>
    </div>
  </section>
</template>

<script setup>
import ListComponents from "./partials/ListComponents.vue";
import CrossIcon from "./partials/CrossIcon.vue";
import TickIcon from "./partials/TickIcon.vue";
</script>
<style>
.list-heading {
  display: flex;
  justify-content: center;
  align-items: center;
  font: 40px/44px "Inter", sans-serif;
  font-weight: 700;
  padding: 10px 5px;
}
.dos h2 {
  font: 40px/44px "Nekst", sans-serif;
  font-weight: 700;
  padding: 40px;
  border-radius: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
.dos-list,
.donts-list {
  font: 24px/26px "Inter", sans-serif;
  font-weight: 700;
  padding: 10px 5px;
  font-family: monospace;
}
.dos {
  margin-top: 410px;
  padding: 88px 24px;
  background-color: #f2f2f2;
}
.dos-block {
  max-width: 1400px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  /* padding-right: 24px; */
}
.dos-heading h2 {
  background-color: #c9f73a;
  font: 40px/44px "Nekst", sans-serif;
  font-weight: 700;
  padding: 10px 5px;
}

@media (min-width: 768px) {
  /* .dos-block {
    padding-left: 24px;
  }
  .dos-block {
    padding-left: 8.33333%;
  } */
  .dos-heading h2 {
    font: 48px/52px "Nekst", sans-serif;
    font-weight: 700;
  }
}
@media (min-width: 1280px) {
  /* .dos {
    padding: 140px 12px;
    padding-left: 10%;
  } */
  .dos-block {
    margin-left: auto;
    padding-left: 0px;
    width: 75%;
    margin: auto;
  }
  .dos-heading h2 {
    font: 44px/48px "Nekst", sans-serif;
    font-weight: 700;
  }
}
</style>
