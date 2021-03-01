import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHistory, createRouter } from 'vue-router'
import Doki from './components/Doki.vue'
import Doki2 from './components/Doki2.vue'


const history = createWebHistory()
const router= createRouter({
  history,
  routes: [{
    path: '/',
    component: Doki
  },{
    path: '/xxx',
    component: Doki2
  }]
})

const app = createApp(App)

app.use(router)
app.mount('#app')
