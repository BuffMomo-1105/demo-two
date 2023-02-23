import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from "./App.vue";
import router from "./router";

import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/main.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

// components
import CustomBackground from "./components/icons/CustomBackground.vue";
import ArrowBlack from "./components/icons/ArrowBlack.vue";
import ArrowTheme from "./components/icons/ArrowTheme.vue";
import Dash from "./components/icons/Dash.vue";
import ContactForm from "./components/ContactForm.vue";

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const app = createApp(App);
app.component("custom-back", CustomBackground);
app.component("arrow-black", ArrowBlack);
app.component("arrow-theme", ArrowTheme);
app.component("dash", Dash);
app.component("contact-form", ContactForm);

app.component("QuillEditor", QuillEditor);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)
pinia.use(({ store }) => {
  store.$router = markRaw(router);
});

app.use(pinia);
app.use(router);
app.use(BootstrapVue3);
app.mount("#app");
