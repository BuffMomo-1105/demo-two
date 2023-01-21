<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  number: "",
  region: "",
  message: "",
  checked: false,
});
</script>
<template>
  <section class="contact-form" id="contactForm">
    <div class="form-inner">
      <slot name="contact-heading"> </slot>
      <form action="" class="contact-inner">
        <input
          type="text"
          class="contact-input w-100"
          v-modal="form.name"
          placeholder="Full Name"
        />
        <input
          type="email"
          class="contact-input w-100"
          v-modal="form.email"
          placeholder="Email"
        />
        <input
          type="number"
          class="contact-input w-100"
          v-modal="form.number"
          placeholder="Phone Number"
        />
        <input
          type="text"
          class="contact-input w-100"
          v-modal="form.region"
          placeholder="Region"
        />
        <input
          type="text"
          class="contact-input w-100"
          v-modal="form.message"
          placeholder="Message"
        />
        <b-form-checkbox
          class="contact-checkbox"
          id="checkbox-1"
          v-model="checked"
          name="checkbox-1"
          value="true"
          :unchecked-value="false"
        >
          <p class="checkbox-text">I accept the terms and policy.</p>
        </b-form-checkbox>
        <div class="contact-form-button mt-4 d-flex">
          <button>Submit</button>
        </div>
      </form>
    </div>
  </section>
</template>

<style>
.form-inner {
  max-width: 1400px;
}
.contact-form-button button {
  width: 100%;
  border: none;
  color: #000;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.24s;
  opacity: 1;
  width: 100%;
  padding: 16px 40px;
  font: 20px/30px "Inter", sans-serif;
  font-weight: 400;
  background-color: #000;
  color: #fff;
  border: 1px solid transparent;
}
.contact-form-button {
  position: relative;
  width: 100%;
  padding-right: 12px;
  padding-left: 12px;
  flex: 0 0 100%;
  max-width: 100%;
}
@media (min-width: 768px) {
  .contact-form-button button {
    width: auto;
  }
  .contact-form-button {
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
  }
  .contact-heading {
    width: 75%;
    margin: auto;
    font: 32px/48px "Inter", sans-serif;
    font-weight: 600;
    letter-spacing: 7px;
    text-transform: uppercase;
    margin-bottom: 100px;
  }
  .contact-inner {
    width: 40%;
    margin: auto;
  }
}

.contact-form {
  display: flex;
  justify-content: center;
  top: 50px;
  background: linear-gradient(
    180deg,
    rgba(201, 247, 58, 0) 52.6%,
    rgba(201, 247, 58, 0.5) 100%
  );
  padding: 1rem;
  padding-bottom: 150px;
}
.contact-heading {
  text-align: left;
  font: 20px/30px "Inter", sans-serif;
  font-weight: 600;
  letter-spacing: 5px;
  text-transform: uppercase;
  margin-bottom: 40px;
  padding-left: 15%;
}
.contact-inner {
  width: 80%;
  margin: auto;
}
.contact-input:focus {
  outline: none;
}
.contact-input {
  border: none !important;
  border-bottom: 1px solid black !important;
  margin: 1em;
  background: transparent;
}
input:focus {
  border: none;
}
.contact-checkbox {
  margin: 1em;
  top: 3px;
  left: 17px;
}
.checkbox-text {
  margin: 1em;
}
.contact-form label {
  display: flex;
}
</style>
