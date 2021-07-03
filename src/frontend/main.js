import { createApp } from "vue";
import Vuetify from "vuetify";
import router from "./router";
import store from "./store";
import App from "./App.vue";

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount("#app");
