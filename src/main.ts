import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'


const history = createWebHistory()
const router= createRouter({
  history,
  routes: [{
    path: '/',
    component: Home
  },{
    path: '/doc',
    component: Doc
  }]
})

const app = createApp(App)

app.use(router)
app.mount('#app')
