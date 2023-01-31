import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./modules/app/App.vue";
import router from "./modules/app/router";

import "./modules/app/assets/base.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
