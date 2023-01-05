import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import "./assets/styles/main.css";
import AOS from 'aos'
import 'aos/dist/aos.css'


// components
import CustomBackground from "./components/icons/CustomBackground.vue"

const app = createApp(App);
app.component('custom-back',CustomBackground)
app.use(createPinia());
app.use(router);
app.use(BootstrapVue3);
app.mount("#app");
