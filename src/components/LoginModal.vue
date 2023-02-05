<template>
  <div>
    <b-modal
      v-model="eventStore.openLoginModal"
      hide-footer
      :ok-only="false"
      @ok="submitForm"
      @hide="eventStore.openLoginModal = false"
      centered
      class="login-modal"
    >
      <template #header>
        <div class="d-flex justify-content-between open-account-header w-100">
          <div>
            <h3>Login Now</h3>
          </div>
          <div>
            <span
              class="close-icon modal-close-icon"
              @click="eventStore.openLoginModal = false"
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
        </div>
      </template>
      <form action="">
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

        <b-button pill class="acct-btn" @click="submitForm">Login</b-button>
      </form>
    </b-modal>
  </div>
</template>

<style>
.login-modal {
  backdrop-filter: blur(5px);
}
.login-modal .modal-content {
  background: black;
  border: 2px solid #c9f73a;
}
.modal-close-icon {
  top: -6px;
  right: -4px;
}
.b-modal {
  max-width: 400px;
  margin: 2rem auto;
}
.b-form-group {
  margin-bottom: 1rem;
}
.b-form-input {
  font-size: 1.2rem;
}
.b-form-invalid-feedback {
  font-size: 1.2rem;
}
.b-modal .b-btn {
  margin-right: 0.5rem;
}
</style>
<script setup>
import { ref, computed } from "vue";
import { useEventStore } from "../stores";

const eventStore = useEventStore();
const form = ref({
  email: "",
  password: "",
});
const submitted = ref(false);

const validEmail = computed(() => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(form.value.email);
});
const validPassword = computed(() => {
  return form.value.password.length >= 8;
});

const submitForm = () => {
  submitted.value = true;
  if (!validEmail.value || !validPassword.value) {
    return;
  }

  // Validate form and send data to the server here
  console.log("Form submitted", form.value.email, form.value.password);
};
</script>
