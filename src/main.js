import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSkull,
  faCrown,
  faDungeon,
  faHatWizard,
  faHammer,
  faGem
} from '@fortawesome/free-solid-svg-icons';
import {
  faVuejs,
  faBootstrap,
  faFontAwesome,
  faGithub,
  faBattleNet
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faSkull,
  faCrown,
  faDungeon,
  faHatWizard,
  faHammer,
  faGem,
  faVuejs,
  faBootstrap,
  faFontAwesome,
  faGithub,
  faBattleNet
);

createApp(App)
  .component('fa-icon', FontAwesomeIcon)
  .use(router)
  .mount('#app');
