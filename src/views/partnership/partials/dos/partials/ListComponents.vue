<template>
  <div class="row m-2 dos-item">
    <div class="col h-100 w-100 doit">
      <div>
        <p class="dos-list p-4">
          <TickIcon class="mbl-icon" />
          <slot name="do"> </slot>
        </p>
      </div>
    </div>
    <div class="col h-100 w-100 donts">
      <p class="donts-list p-4">
        <CrossIcon class="mbl-icon" />
        <slot name="dont"> </slot>
      </p>
    </div>
  </div>
</template>

<script setup>
import CrossIcon from "./CrossIcon.vue";
import TickIcon from "./TickIcon.vue";
</script>
<style>
@media (max-width: 500px) {
  .dos-item .col {
    min-width: 100%;
    margin: auto;
  }
  .mbl-icon {
    width: 10%;
  }
}
@media (min-width: 500px) {
  .dos-item {
    min-height: 150px;
    height: 150px;
  }
  .mbl-icon {
    display: none;
  }
}
.doit,
.donts {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.doit {
  background-color: #c1efe2;
}
.donts {
  background-color: #feddcc;
}
</style>
