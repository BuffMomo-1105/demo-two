<script setup>
import { ref } from "vue";
import { useEventStore } from "../stores/index";
const eventStore = useEventStore();

const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
});
</script>
<template>
  <div>
    <b-offcanvas v-model="eventStore.showOpenAccountDrawer" placement="end">
      <template #title>
        <div class="d-flex justify-content-center open-account-header">
          <h3>Open Account Now</h3>
          <span
            class="close-icon"
            @click="eventStore.showOpenAccountDrawer = false"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="#c9f73a"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
          </span>
        </div>
      </template>
      <form action="">
        <b-form-group>
          <b-form-input
            v-model="form.firstName"
            placeholder="First Name"
          ></b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-input
            v-model="form.lastName"
            placeholder="Last Name"
          ></b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-input
            v-model="form.email"
            placeholder="Email"
            type="email"
          ></b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-input
            v-model="form.password"
            placeholder="Password"
            type="password"
          ></b-form-input>
        </b-form-group>

        <b-button pill class="acct-btn">Open Account</b-button>
      </form>
    </b-offcanvas>
  </div>
</template>
<style>
.open-account-header {
  font: 24px/32px "Nekst", sans-serif;
  font-weight: 700;
  color: #c9f73a;
}
.close-icon {
  color: #c9f73a;
  width: 40px !important;
  position: absolute;
  top: -10px;
  right: -30px;
  z-index: 9999;
  cursor: pointer;
}
.acct-btn {
  background-color: #c9f73a !important;
  color: #000 !important;
  border: none !important;
  height: 55px;
  width: 100%;
  margin-top: 2em;
  font-size: 24px;
  font-weight: 600px;
}
.offcanvas.offcanvas-end {
  z-index: 9999;
  background: black;
  color: white;
}
.offcanvas-title {
  margin-bottom: 0;
  line-height: 1.5;
  margin-left: 20px;
  font-size: 24px;
  width: 100%;
}
</style>
