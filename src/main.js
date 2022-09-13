import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import { BootstrapVue3, IconsPlugin } from 'bootstrap-vue-3'

// Optional, since every component import their Bootstrap functionality
// the following line is not necessary
// import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

import jQuery from 'jquery'

//createApp(App).mount('#app')
const app = createApp(App)
app.use(BootstrapVue3)
app.use(router)
app.use(IconsPlugin)
global.$ = jQuery
app.mount('#app')
