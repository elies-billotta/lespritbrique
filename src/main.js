import '@/assets/styles/main.css'
import '@fortawesome/fontawesome-free/css/all.css';

import { createApp } from 'vue'
import App from './App.vue'
import externalLink from '@/directives/external-link.js';
import router from '@/router.js';

const app = createApp(App)

app.directive('external-link', externalLink);

app.use(router);

app.mount('#app')
