import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';

import { FontAwesomeIcon } from './plugins/fontAwesome';

createApp(App)
  .component('fa-icon', FontAwesomeIcon)
  .use(router)
  .mount('#app');
