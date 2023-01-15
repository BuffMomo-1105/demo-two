import { createApp ,markRaw} from "vue";
import { createPinia } from "pinia";

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

import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

// components
import CustomBackground from "./components/icons/CustomBackground.vue";
import ArrowBlack from "./components/icons/ArrowBlack.vue";
import ArrowTheme from "./components/icons/ArrowTheme.vue";
import Dash from "./components/icons/Dash.vue"

const app = createApp(App);
app.component("custom-back", CustomBackground);
app.component("arrow-black", ArrowBlack);
app.component("arrow-theme", ArrowTheme);
app.component("dash", Dash);

app.component('QuillEditor', QuillEditor)


const pinia = createPinia()
pinia.use(({ store }) => {
  store.$router = markRaw(router)
})

app.use(pinia);
app.use(router);
app.use(BootstrapVue3);
app.mount("#app");
