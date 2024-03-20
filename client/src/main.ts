import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
// Importa le icone che desideri utilizzare
import {  faPlay} from '@fortawesome/free-solid-svg-icons';

library.add(faPlay);

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')