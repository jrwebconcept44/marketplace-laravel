<template>
  <div>
    <h1 class="text-3xl font-bold text-center mb-8">Catégories</h1>
    <div v-if="loading" class="text-center">
      <p class="text-gray-600">Chargement des catégories...</p>
    </div>
    <div v-else-if="error" class="bg-red-100 p-4 rounded-md text-red-700">
      {{ error }}
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="category in categories" :key="category.id" class="bg-white rounded-lg shadow overflow-hidden">
        <div class="p-6">
          <h2 class="text-xl font-semibold text-gray-800">{{ category.name }}</h2>
          <p class="text-gray-600 mt-2">{{ category.description }}</p>
          <div class="mt-4">
            <router-link :to="'/categories/' + category.id" class="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">
              Voir les produits
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const categories = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get('/api/categories');
    categories.value = response.data;
  } catch (err) {
    error.value = "Impossible de charger les catégories. Veuillez réessayer plus tard.";
    console.error(err);
  } finally {
    loading.value = false;
  }
});
</script>
