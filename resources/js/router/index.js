import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Products from '../views/Products.vue';
import Categories from '../views/Categories.vue';

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

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
