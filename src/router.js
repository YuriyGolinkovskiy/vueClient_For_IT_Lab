import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        component: () => import('./pages/MainPage.vue'),
        meta: { title: 'Main' },
    },
    {
        path: '/catalog',
        component: () => import('./pages/CatalogPage.vue'),
        meta: { title: 'Catalog' },
    },
    {
        path: '/catalog/:title',
        component: () => import('./pages/ProductPage.vue'),
        meta: { title: 'Products' },
    },
    {
        path: '/product/:id',
        component: () => import('./pages/ProductInfoPage.vue'),
        meta: { title: 'Product' },
    },
    {
        path: '/feedBack',
        component: () => import('./pages/FeedBackPage.vue'),
        meta: { title: 'FeedBack' },
    },
    {
        path: '/cart',
        component: () => import('./pages/CartPage.vue'),
        meta: { title: 'Cart' },
    },
    {
        path: '/admin',
        component: () => import('./pages/AdminPage.vue'),
        meta: { title: 'Admin' },
    },
];

export default new VueRouter({
    mode: 'history',
    routes,
});
