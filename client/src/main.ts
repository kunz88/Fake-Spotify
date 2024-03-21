import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createMemoryHistory, createRouter} from 'vue-router'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
// Importa le icone che desideri utilizzare
import {  faPlay} from '@fortawesome/free-solid-svg-icons';

import Home from './views/Home.vue';
import SignIn from './views/SignIn.vue';
import SignUp from './views/SignUp.vue';

library.add(faPlay);

const routes = [
    {path:'/', component: Home},
    {path:'/signin', component: SignIn},
    {path:'/signup', component: SignUp}
]

const router = createRouter({
    history:createMemoryHistory(),
    routes

})

const app = createApp(App).use(router)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')