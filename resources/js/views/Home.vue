<template>
  <div>
    <h1 class="text-3xl font-bold text-center mb-8">Bienvenue sur votre Marketplace</h1>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">{{ title }}</h2>
      <p class="text-gray-600">{{ message }}</p>
      <div class="mt-4 flex space-x-2">
        <router-link to="/products" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Voir les produits
        </router-link>
        <router-link to="/categories" class="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition">
          Explorer les catégories
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const title = ref('Application SPA Vue.js avec Laravel');
const message = ref('Votre marketplace est prête à être développée !');
</script>
