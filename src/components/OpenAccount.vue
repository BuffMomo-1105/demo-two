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
    <b-offcanvas
      v-model="eventStore.showOpenAccountDrawer"
      placement="end"
      title="Open Account Now"
    >
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
.acct-btn {
  background-color: #c9f73a !important;
  color: #000 !important;
  border: none !important;
  height: 55px;
  width: 100%;
  margin-top: 2em;
}
.offcanvas.offcanvas-end {
  z-index: 9999;
}
.offcanvas-title {
  margin-bottom: 0;
  line-height: 1.5;
  margin-left: 22%;
  font-size: 24px;
}
.form-control {
  height: 55px;
}
.offcanvas-body {
  margin-top: 2em;
}
</style>
