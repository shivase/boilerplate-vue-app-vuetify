/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';

import router from './router';

const app = createApp(App);
app.use(vuetify);

const pinia = createPinia();

app.use(router);
app.use(pinia);

void loadFonts();

app.mount('#app');
