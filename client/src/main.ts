import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory} from 'vue-router'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
// Importa le icone che desideri utilizzare
import {  faPlay} from '@fortawesome/free-solid-svg-icons';

import Home from './views/Home.vue';
import SignIn from './views/SignIn.vue';
import SignUp from './views/SignUp.vue';
import Artist from './views/Artist.vue';

library.add(faPlay);

export const routes = [
    {path:'/',name:'home', component: Home},
    {path:'/signin',name:'signin', component: SignIn},
    {path:'/signup',name:'signup', component: SignUp},
    {path:'/:name',name:'ArtistDetails', component: Artist},
    
]

const router = createRouter({
    history:createWebHistory(),
    routes


})


const app = createApp(App).use(router)


app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')