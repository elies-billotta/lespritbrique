import '@/assets/styles/main.css'
import '@fortawesome/fontawesome-free/css/all.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import router from './router'
import myLink from './components/elements/MyLink.vue';

const app = createApp(App)

app.component('my-link', myLink);

app.use(createPinia());

app.use(router);

app.mount('#app')
