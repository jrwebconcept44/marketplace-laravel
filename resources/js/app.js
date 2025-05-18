import './bootstrap';
import '../css/app.css';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './views/Home.vue';
import Products from './views/Products.vue';
import Categories from './views/Categories.vue';

// Définir les routes
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/products',
        name: 'products',
        component: Products
    },
    {
        path: '/categories',
        name: 'categories',
        component: Categories
    }
];

// Créer le router
const router = createRouter({
    history: createWebHistory(),
    routes
});

// Créer l'application Vue
const app = createApp(App);

// Utiliser le router
app.use(router);

// Monter l'application au point d'entrée
app.mount('#app');
