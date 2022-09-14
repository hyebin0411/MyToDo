// import Vue from 'vue';
// import VueRouter, { createWebHistory } from 'vue-router';
// import HomePage from './pages/HomePage';
// import MonthPage from './pages/MonthPage'

// Vue.use(VueRouter);

// const route = [
//     {path: "/", component: HomePage},
//     {path: "/home ", component: HomePage},
//     {path: "/month", component: MonthPage},
// ];

// const router = new VueRouter({
//     mode: 'history',
//     routes: route
// });

// export default router;

//=======================
import { createRouter, createWebHistory } from 'vue-router';    
import HomePage from './pages/HomePage';
import MonthPage from './pages/MonthPage'
import SettingPage from './pages/SettingPage'

const route = [
    {path: "/", component: HomePage},
    {path: "/home", component: HomePage},
    {path: "/month", component: MonthPage},
    {path: "/set", component: SettingPage}
];

export default new createRouter({    
    history: createWebHistory(),
    routes: route,
})