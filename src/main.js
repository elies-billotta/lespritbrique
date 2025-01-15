import '@/assets/styles/main.css'
import '@fortawesome/fontawesome-free/css/all.css';

import { createApp } from 'vue'
import App from './App.vue'
import externalLink from '@/directives/external-link.js';
import router from './router'
import myLink from './components/elements/MyLink.vue';

const app = createApp(App)

app.component('my-link', myLink);

app.use(router);

app.directive('external-link', externalLink);

app.mount('#app')
